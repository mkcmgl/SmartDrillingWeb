<template>
  <div class="content">
    <div class="curve-survey">
      <WellTrajectory
        ref="WellTrajectoryRef"
        :id="`WellTrajectory-${paneData.value?.paneID}`"
      ></WellTrajectory>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  ref,
  onMounted,
  watch,
  reactive,
  onUnmounted,
  inject,
  getCurrentInstance,
} from "vue";
import WellTrajectory from "@/plugins/WellTrajectory/WellTrajectory.vue";
import { mittBus } from "@/component/layout/libs/evLayout.js";

import { getWellTrajectoryData } from "@/api/curve/curve";
import { EventTarget, SetEventTarget } from "@/plugins/websocket/index.js";
const { proxy } = getCurrentInstance();
import { useTrajectoryStore } from "@/stores/componentStore";

interface TrajectoryData {
  depth: number;
  incation: number;
  azimuth: number;
  verthDepth: number;
  northShift: number;
  eastShift: number;
  vscLength: number;
  closeDistance: number;
  closeAngle: number;
  dogLeg: number;
  build: number;
  turn: number;
  toolFace: number;
}
const trajectoryStore = useTrajectoryStore();

const WellTrajectoryRef = ref(); //eleTable是页面ref后面对应的名字
const state = reactive({
  currentData: [] as any[], // 存储当前所有轨迹数据
  currentStartMd: [] as Array<{ wellId: string; startMD: number }>, // 存储每条轨迹的最后深度
  currentEndMd: [] as Array<{ wellId: string; endMD: number }>, // 存储每条轨迹的结束深度
  incrementalLoadTimers: {} as Record<string, NodeJS.Timeout>, // 存储每个井的增量加载定时器
});
let trajectoryDataArray = ref<TrajectoryData[]>([]);
const loading = ref(false);
const isLoadingData = ref(false);
let updateTimer: NodeJS.Timeout | null = null;
const trajectoryColors = [
  "#67c23a", // 绿色
  "#409eff", // 蓝色
  "#e6a23c", // 橙色
  "#f56c6c", // 红色
  "#909399", // 灰色
  "#9c27b0", // 紫色
  "#ff9800", // 橙黄色
  "#03a9f4", // 浅蓝色
];

const convertTrajectoryData = (trajectoryDataArray: TrajectoryData[]) => {
  const DataArray = [];
  const northArray = [];
  const eastArray = [];
  const tvdArray = [];
  const vsArray = [];
  trajectoryDataArray.forEach((item: any) => {
    eastArray.push(item.eastShift);
    northArray.push(item.northShift);
    tvdArray.push(item.verthDepth);
    vsArray.push(item.vscLength);
  });

  DataArray.push(eastArray);
  DataArray.push(northArray);
  DataArray.push(tvdArray);
  DataArray.push(vsArray);
  return DataArray;
};

// 创建监听器，监听trajectoryStore中allTrajectoryData的变化
const setupStoreWatcher = () => {
  // 监听trajectoryStore中的allTrajectoryData
  watch(
    () => trajectoryStore.state.allTrajectoryData,
    (newValue, oldValue) => {
      if (!newValue || newValue.length === 0) return;
      debugger;
      console.log("setupStoreWatcher", newValue);
      // 遍历当前组件所关注的轨迹ID
      state.currentData.forEach((item) => {
        const wellId = item.wellId;
        if (!wellId) return;

        // 查找store中是否有对应井的数据
        const wellData = newValue.find((data) => data.wellId === wellId);

        // 找到对应的旧数据（如果存在）
        const oldWellData = oldValue?.find((data) => data.wellId === wellId);

        // 检查数据是否有变化
        const hasDataChanged =
          !oldWellData ||
          oldWellData.allDataList?.length !== wellData?.allDataList?.length ||
          JSON.stringify(oldWellData) !== JSON.stringify(wellData);

        // 如果有新数据并且数据发生了变化
        if (
          wellData &&
          wellData.allDataList &&
          wellData.allDataList.length > 0 &&
          hasDataChanged
        ) {
          console.log(`检测到轨迹数据变化: ${wellId}，更新绘图`);

          // 绘制数据
          const xyData = {
            x: wellData.allDataList.map((dataItem) => dataItem.eastShift),
            y: wellData.allDataList.map((dataItem) => dataItem.northShift),
            z: wellData.allDataList.map((dataItem) => dataItem.verthDepth),
            name:
              item.wellName ||
              `轨迹 ${
                trajectoryStore.state.allTrajectoryData.indexOf(wellData) + 1
              }`,
            color: wellData.color,
          };

          if (WellTrajectoryRef.value) {
            // 使用update模式更新轨迹
            WellTrajectoryRef.value.updateTrajectory(wellId, xyData, "update");
          }
        }
      });
    },
    { deep: true } // 深度监听，确保能检测到数组内对象的变化
  );
};

// 修改initTraJectory方法，只负责初始加载，后续更新交给监听器
const initTraJectory = async (data) => {
  const { wellId } = data;
  if (!wellId) return;

  // 将井ID加入到当前关注的数据列表中
  const existingIndex = state.currentData.findIndex(
    (item) => item.wellId === wellId
  );
  if (existingIndex < 0) {
    state.currentData.push({
      wellId,
      wellName: data.wellName,
    });
  }

  try {
    // 使用store加载轨迹数据
    const result = await trajectoryStore.LoadTrajectoryData({
      wellId,
      wellName: data.wellName,
    });

    if (result) {
      // 找到store中的轨迹数据
      // const wellData = trajectoryStore.state.allTrajectoryData.find(item => item.wellId === wellId);

      // if (wellData && wellData.allDataList && wellData.allDataList.length > 0) {
      // 绘制数据
      const xyData = {
        x: result.allDataList.map((item) => item.eastShift),
        y: result.allDataList.map((item) => item.northShift),
        z: result.allDataList.map((item) => item.verthDepth),
        name: data.wellName, //|| `轨迹 ${trajectoryStore.state.allTrajectoryData.indexOf(result) + 1}`,
        color: result.color,
      };

      if (WellTrajectoryRef.value) {
        // 添加新轨迹
        WellTrajectoryRef.value.updateTrajectory(wellId, xyData, "add");
      }
      // }
    }
  } catch (error) {
    console.error(`加载轨迹数据出错: ${wellId}`, error);
  }
};

const loadWebSocketEvent = () => {
  let target = new EventTarget();
  SetEventTarget(target);
  const executeLoadData = async (wellId: string) => {
    if (isLoadingData.value) return;

    try {
      isLoadingData.value = true;

      // 重新加载轨迹数据
      await trajectoryStore.LoadTrajectoryData({ wellId });

      // 从store获取更新后的数据
      const wellData = trajectoryStore.state.allTrajectoryData.find(
        (item) => item.wellId === wellId
      );

      if (wellData && wellData.allDataList && wellData.allDataList.length > 0) {
        // 绘制数据
        const xyData = {
          x: wellData.allDataList.map((item) => item.eastShift),
          y: wellData.allDataList.map((item) => item.northShift),
          z: wellData.allDataList.map((item) => item.verthDepth),
          name:
            wellData.wellName ||
            `轨迹 ${
              trajectoryStore.state.allTrajectoryData.indexOf(wellData) + 1
            }`,
          color: wellData.color,
        };

        if (WellTrajectoryRef.value) {
          // 更新轨迹
          WellTrajectoryRef.value.updateTrajectory(wellId, xyData, "update");
        }
      }
    } finally {
      isLoadingData.value = false;
    }
  };

  target.addHandler("MessageEvent", (e) => {
    const { message } = e;
    const messageData = JSON.parse(message.Body);
    // 检查是否存在匹配的轨迹
    const matchingWell = state.currentData.find(
      (item) => item.wellId === messageData.wellid
    );
    if (messageData.witmlmltranstype === "Trajectory" && matchingWell) {
      // if (messageData.wellstatus === "1") {
      console.log("我收到消息了3d轨迹需要更新", messageData);
      if (updateTimer) {
        clearTimeout(updateTimer);
        updateTimer = null;
      }

      if (isLoadingData.value) {
        updateTimer = setTimeout(async () => {
          await executeLoadData(messageData.wellid);
        }, 1000);
      } else {
        executeLoadData(messageData.wellid);
      }
      // }else{
      //   console.log("收到轨迹关闭消息", messageData);
      // }
    }
  });
};

const InitialPlotSample = async () => {
  // 添加一个小延迟，确保DOM已经完全渲染
  await new Promise((resolve) => setTimeout(resolve, 50));

  // 确认容器尺寸
  if (
    (WellTrajectoryRef &&
      WellTrajectoryRef.value &&
      WellTrajectoryRef.value.clientWidth <= 0) ||
    WellTrajectoryRef.value.clientHeight <= 0
  ) {
    console.warn("容器尺寸异常，延迟初始化");
    // 如果容器尺寸有问题，可以再次延迟尝试
    setTimeout(InitialPlotSample, 100);
    return;
  }

  // 正常初始化
  WellTrajectoryRef.value?.initializeChart();

  if (WellTrajectoryRef.value) {
    const option = WellTrajectoryRef.value.getOption();
    const chartSettings = {
      xmin: option.start.x,
      xmax: option.end.x,
      ymin: option.start.y,
      ymax: option.end.y,
      zmin: option.end.z,
      zmax: option.start.z,
    };
    mittBus.emit("getComponentSetting", {
      paneID: paneData.value.paneID,
      componetConfig: chartSettings,
    });
  }
};

onMounted(async () => {
  // 添加窗口尺寸变化监听
  const handleResize = () => {
    if (WellTrajectoryRef.value) {
      WellTrajectoryRef.value.resize?.();
    }
  };

  window.addEventListener("resize", handleResize);

  await InitialPlotSample();
  loadWebSocketEvent();

  // 设置store监听器
  setupStoreWatcher();

  mittBus.on("closeComponent", (obj) => {
    if (obj.paneID === paneData.value.paneID) {
      WellTrajectoryRef.value.setOption(obj.componetConfig);
    }
  });

  // 卸载时移除监听器
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
    state.currentData = [];
    mittBus.off("closeComponent");

    if (updateTimer) {
      clearTimeout(updateTimer);
      updateTimer = null;
    }

    // 清除所有增量加载定时器
    Object.values(state.incrementalLoadTimers).forEach((timer) => {
      clearInterval(timer);
    });
    state.incrementalLoadTimers = {};
  });
});

const paneData = inject("paneData");

watch(
  () => paneData.value,
  (newData, oldData) => {
    try {
      const newValue = JSON.parse(newData["dragData"]);
      const oldValue = oldData ? JSON.parse(oldData["dragData"]) : [];
      if (newValue && newValue.length) {
        let data;
        if (oldValue && oldValue.length) {
          // 创建深拷贝以避免修改原始数据
          const newValueCopy = JSON.parse(JSON.stringify(newValue));
          const oldValueCopy = JSON.parse(JSON.stringify(oldValue));

          // 过滤出新增的轨迹数据
          const newTrajectories = newValueCopy.filter(
            (item: any) =>
              !oldValueCopy.some(
                (oldItem: any) => oldItem.wellId === item.wellId
              )
          );

          // 如果有新增轨迹，使用第一条；否则使用第一条现有轨迹
          data =
            newTrajectories.length > 0 ? newTrajectories[0] : newValueCopy[0];
        } else {
          // 如果没有旧数据，使用第一条新数据
          data = newValue[0];
        }

        if (data && data.name === "Actual Trajectory" && data.wellId) {
          proxy.$appTools.dragDataIsSuccess(true, newData, oldData);

          // 检查store中是否已存在该井的数据
          const existingData = trajectoryStore.state.allTrajectoryData.find(
            (item) => item.wellId === data.wellId
          );
          console.log("existingData", existingData);

          if (existingData) {
            // 已存在数据，直接从store中获取并绘制
            const xyData = {
              x: existingData.allDataList.map((item) => item.eastShift),
              y: existingData.allDataList.map((item) => item.northShift),
              z: existingData.allDataList.map((item) => item.verthDepth),
              name:
                data.wellName ||
                `轨迹 ${
                  trajectoryStore.state.allTrajectoryData.indexOf(
                    existingData
                  ) + 1
                }`,
              color: existingData.color,
            };

            if (WellTrajectoryRef.value) {
              debugger;
              WellTrajectoryRef.value.updateTrajectory(
                data.wellId,
                xyData,
                "add"
              );
            }
          } else {
            // 不存在数据，加载新数据
            initTraJectory(data);
          }
        }
      }
    } catch (error) {
      console.error("数据解析错误:", error);
    }
  },
  { deep: true, immediate: true }
);
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
}
.curve-survey {
  width: 100%;
  height: 100%;
  flex-shrink: 0; /* 防止压缩 */
  position: relative; /* 为 echarts 容器提供定位上下文 */
}

.curve-content-title {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border-bottom: 1px solid #ccc;
  background-color: #525252;
  color: #fff;
  font-weight: bold;
  flex-shrink: 0; /* 防止压缩 */
}
/* Styles go here */
</style>
