<template>
  <div class="content">
    <div class="curve-content-title">
      <div class="projection-azimuth">
        Azimuth Angle：<input
          v-model="projectionAzimuth"
          type="number"
          style="width: 100px"
        />
        <span style="margin-left: 5px">°</span>
      </div>
    </div>
    <div
      class="curve-survey"
      v-loading="loading"
      element-loading-text="Loading..."
      element-loading-background="#525252"
    >
      <Profile2d ref="CrossPlotRef"></Profile2d>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  defineComponent,
  onMounted,
  ref,
  reactive,
  nextTick,
  computed,
  watch,
  onUnmounted,
  inject,
  getCurrentInstance,
} from "vue";
import Profile2d from "@/plugins/Plot2D/Profile2d.vue";
import { mittBus } from "@/component/layout/libs/evLayout.js";

import { getWellTrajectoryData } from "@/api/curve/curve";
import { EventTarget, SetEventTarget } from "@/plugins/websocket/index.js";
const { proxy } = getCurrentInstance();

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

const CrossPlotRef = ref();
const state = reactive({
  currentData: [] as any[], // 存储当前所有轨迹数据
  currentStartMd: [] as Array<{ wellId: string; startMD: number }>, // 存储每条轨迹的最后深度
});
let trajectoryDataArray = ref<TrajectoryData[]>([]);
let projectionAzimuth = ref(0);

const loading = ref(false);
const isLoadingData = ref(false);
let updateTimer: NodeJS.Timeout | null = null;
// 添加轨迹颜色配置
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
const InitialPlotSample = async () => {
  // 剖面图配置
  await CrossPlotRef.value?.initializeChart();
  if (CrossPlotRef.value) {
    const option = CrossPlotRef.value.getOption();
    const chartSettings = {
      xmin: option.xAxis[0].min,
      xmax: option.xAxis[0].max,
      ymin: option.yAxis[0].min,
      ymax: option.yAxis[0].max,
    };
    mittBus.emit("getComponentSetting", {
      // componentName: "PROFILE",
      paneID: paneData.value.paneID,
      componetConfig: chartSettings,
    });
  }
  // CrossPlotRef.value?.setXAxisTitle("VS[m]");
  // CrossPlotRef.value?.setYAxisTitle("TVD[m]");
};

const changeLoadTrajectoryData = async () => {
  // 清除图表
  if (CrossPlotRef.value) {
    CrossPlotRef.value.removeData();
  }

  state.currentData.forEach((item, i) => {
    const { wellId, wellName, trajectoryData } = item;
    // 重新计算每条轨迹的 vsDistance
    const updatedTrajectoryData = trajectoryData.map(
      (item: TrajectoryData) => ({
        ...item,
        vsDistance: verticalSection(
          item.northShift,
          item.eastShift,
          projectionAzimuth.value
        ),
      })
    );
    // 获取轨迹颜色
    const color = trajectoryColors[i % trajectoryColors.length];

    // 准备绘图数据
    const xyData = {
      xdata: updatedTrajectoryData.map((item) => item.vsDistance),
      ydata: updatedTrajectoryData.map((item) => item.verthDepth),
      name: wellName || `轨迹 ${i + 1}`,
      color: color,
    };

    // 添加到图表
    CrossPlotRef.value.addSeries(wellId, xyData);
    return {
      ...item,
      trajectoryData: updatedTrajectoryData,
    };
  });
};

const LoadTrajectoryData = async (data, isAddDataFlag = false) => {
  const { wellId } = data;
  if (!wellId) return;
  try {
    loading.value = true;
    const postdata = data.startMD
      ? { wellId, startMD: data.startMD }
      : { wellId };
    const response = await getWellTrajectoryData(postdata);

    if (response.msg === "success") {
      // 转换轨迹数据
      const trajectoryData = response.data.map((item: TrajectoryData) => ({
        ...item,
        vsDistance: verticalSection(
          item.northShift,
          item.eastShift,
          projectionAzimuth.value
        ),
      }));

      // 更新 currentData 中对应井的轨迹数据
      const existingIndex = state.currentData.findIndex(
        (item) => item.wellId === wellId
      );

      if (existingIndex >= 0) {
        // 如果已存在该井的数据，更新轨迹数据
        if (!state.currentData[existingIndex].trajectoryData) {
          state.currentData[existingIndex].trajectoryData = [];
        }

        if (isAddDataFlag) {
          // 如果是追加数据，将新数据添加到现有数据后面
          state.currentData[existingIndex].trajectoryData = [
            ...state.currentData[existingIndex].trajectoryData,
            ...trajectoryData,
          ];
        } else {
          // 否则替换现有数据
          state.currentData[existingIndex].trajectoryData = trajectoryData;
        }
      } else if (!isAddDataFlag) {
        // 如果不存在且不是追加模式，添加新井数据
        const newWellData = { ...data, trajectoryData };
        state.currentData.push(newWellData);
      }

      // 更新或添加startMD记录
      const lastDepth = trajectoryData.length
        ? trajectoryData[trajectoryData.length - 1]?.depth
        : data.startMD;
      const startMdIndex = state.currentStartMd.findIndex(
        (item) => item.wellId === wellId
      );

      if (startMdIndex >= 0) {
        state.currentStartMd[startMdIndex].startMD = lastDepth;
      } else {
        state.currentStartMd.push({
          wellId,
          startMD: lastDepth,
        });
      }
      // 获取轨迹颜色
      const colorIndex = state.currentData.findIndex(
        (item) => item.wellId === wellId
      );
      const color = trajectoryColors[colorIndex % trajectoryColors.length];

      // 绘制数据
      const xyData = {
        xdata: trajectoryData.map((item) => item.vsDistance),
        ydata: trajectoryData.map((item) => item.verthDepth),
        name: data.wellName || `轨迹 ${colorIndex + 1}`,
        color: color,
      };

      if (CrossPlotRef.value) {
        if (isAddDataFlag) {
          // 更新现有轨迹数据
          CrossPlotRef.value.updateSeriesData(wellId, xyData);
        } else {
          // 添加新轨迹，不影响现有轨迹
          CrossPlotRef.value.addSeries(wellId, xyData);
        }
      }
    }
  } catch (error) {
    console.error("获取曲线信息时出错:", error);
  } finally {
    loading.value = false;
  }
};

// 计算视平移
// 工具函数
const degreesToRadians = (deg: number): number => {
  return (deg * Math.PI) / 180;
};
// 工具函数
const radiansToDegrees = (rad: number): number => {
  return (rad * 180) / Math.PI;
};

// 垂直剖面距离计算
// const verticalSection = (
//   closureDistance: number,
//   closureAzimuth: number,
//   projectionAzimuth: number
// ): number => {
//   const closureAzimuthRad = degreesToRadians(closureAzimuth);
//   const projectionAzimuthRad = degreesToRadians(projectionAzimuth);
//   const verticalSection =
//     closureDistance * Math.cos(closureAzimuthRad - projectionAzimuthRad);
//   return verticalSection;
// };

const verticalSection = (
  dN: number,
  dE: number,
  projectionAzimuth: number
): number => {
  const closureAzimuthData = closureAzimuth(dN, dE);
  const closureDistance = Math.sqrt(Math.pow(dN, 2) + Math.pow(dE, 2));

  const closureAzimuthRad = degreesToRadians(closureAzimuthData);
  const projectionAzimuthRad = degreesToRadians(projectionAzimuth);
  const verticalSection =
    closureDistance * Math.cos(closureAzimuthRad - projectionAzimuthRad);
  return verticalSection;
};
// 'dN-当前点相对井口的N坐标增量northShift
// 'dE-当前点相对井口的E坐标增量eastShift
// // 闭合距计算
// const closureDistance = (dN: number, dE: number): number => {
//   return Math.sqrt(Math.pow(dN, 2) + Math.pow(dE, 2));
// };

// 闭合方位角计算
const closureAzimuth = (dN: number, dE: number): number => {
  let result = 0;

  if (dN > 0 && dE > 0) {
    result = radiansToDegrees(Math.atan(dE / dN));
  } else if (dN < 0 && dE > 0) {
    result = radiansToDegrees(Math.atan(-dN / dE)) + 90.0;
  } else if (dN < 0 && dE < 0) {
    result = radiansToDegrees(Math.atan(dE / dN)) + 180.0;
  } else if (dN > 0 && dE < 0) {
    result = radiansToDegrees(Math.atan(-dN / dE)) + 270.0;
  } else if (dN === 0 && dE > 0) {
    result = 90.0;
  } else if (dN < 0 && dE === 0) {
    result = 180.0;
  } else if (dN === 0 && dE < 0) {
    result = 270.0;
  }

  return result;
};
const loadWebSocketEvent = () => {
  let target = new EventTarget();
  SetEventTarget(target);

  const executeLoadData = async (wellId: string) => {
    if (isLoadingData.value) return;

    try {
      isLoadingData.value = true;
      // 只更新指定 wellId 的轨迹
      // const currentWell = state.currentData.find(
      //   (item) => item.wellId === wellId
      // );
      // if (currentWell) {
      const currentStartMd = state.currentStartMd.find(
        (item) => item.wellId === wellId
      );

      await LoadTrajectoryData(
        {
          ...currentStartMd,
        },
        true
      );
      // }
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
      console.log("我收到消息了轨迹需要更新", messageData);
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
      //   console.log("收到曲线关闭消息", messageData);
      // }
    }
  });
};
onMounted(async () => {
  await InitialPlotSample();
  loadWebSocketEvent();
  // 等待图表初始化完成，然后获取当前图表的设置

  mittBus.on("closeComponent", (obj) => {
    if (obj.paneID === paneData.value.paneID) {
      //修改配置
      CrossPlotRef.value.setXAxis({
        min: obj.componetConfig.xmin,
        max: obj.componetConfig.xmax,
      });
      CrossPlotRef.value.setYAxis({
        min: obj.componetConfig.ymin,
        max: obj.componetConfig.ymax,
      });
    }
  });

  //   mittBus.emit("changeComponent", {
  //     componentName: "PROFILE",
  //     paneID: paneData.value.paneID,
  //   });
  // };
  // mittBus.on("setComponentSetting", (obj) => {
  //   if (obj.paneID === paneData.value.paneID) {
  //     //修改配置
  //     CrossPlotRef.value.setXAxis({
  //       min: obj.componetConfig.xmin,
  //       max: obj.componetConfig.xmax,
  //     });
  //     CrossPlotRef.value.setYAxis({
  //       min: obj.componetConfig.ymin,
  //       max: obj.componetConfig.ymax,
  //     });
  //   }
  // });
});

// const props = defineProps({
//   // Define your props here
//   dragData: {
//     default: "2D",
//     type: String,
//   },
// });
// const data = computed(() => {
//   return props.dragData;
// });

const changeData = async () => {
  await CrossPlotRef.value?.removeData();
  await changeLoadTrajectoryData();
};
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

        // 保存当前数据，不修改原始数据
        // state.currentData = JSON.parse(JSON.stringify(newValue));

        state.currentData = [...state.currentData, data];

        if (data && data.name === "Actual Trajectory" && data.wellId) {
          proxy.$appTools.dragDataIsSuccess(true, newData, oldData);
          // 调用加载轨迹数据方法
          LoadTrajectoryData(data, false);
        }
      }
    } catch (error) {
      console.error("数据解析错误:", error);
    }
  },
  { deep: true, immediate: true }
);
// 监听 projectionAzimuth 的变化
watch(
  () => projectionAzimuth.value,
  (newValue, oldValue) => {
    // 确保有数据可以重新加载
    if (oldValue !== newValue) {
      if (state.currentData.length) {
        try {
          // 重新绘制所有轨迹
          // const newValue = [...state.currentData];
          // const data = newValue[0];
          // if (data.name === "Actual Trajectory" && data.wellId) {
          changeData();
          // }
        } catch (error) {
          console.error("数据解析错误:", error);
        }
      }
    }
  },
  { deep: true, immediate: true }
);
// 在组件卸载时清理数据
onUnmounted(() => {
  state.currentData = [];
  mittBus.off("closeComponent");

  if (updateTimer) {
    clearTimeout(updateTimer);
    updateTimer = null;
  }
});
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  /* background: red; */
}
.curve-survey {
  width: 100%;
  height: calc(100% - 40px);
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
  display: flex;
  justify-content: space-between;
}
.projection-azimuth {
  font-size: 12px;
  margin-right: 10px;
}

.setting-icon {
  vertical-align: middle;
  cursor: pointer;
}
/* Styles go here */

/* 自定义 loading 样式 */
:deep(.el-loading-mask) {
  background-color: rgba(33, 33, 33, 0.8);
}

:deep(.el-loading-spinner .el-loading-text) {
  color: #eee;
}

:deep(.el-loading-spinner .path) {
  stroke: #67c23a;
}
</style>
