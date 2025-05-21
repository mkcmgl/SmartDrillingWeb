<template>
  <div class="content">
    <div
      class="curve-survey"
      v-loading="loading"
      element-loading-text="Loading..."
      element-loading-background="#525252"
    >
      <Survey2d ref="TopPlotRef" id="TopPlot"></Survey2d>
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
  inject,
  getCurrentInstance,
  onUnmounted,
} from "vue";
import Survey2d from "@/plugins/Plot2D/Survey2D.vue";
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
const TopPlotRef = ref(); //eleTable是页面ref后面对应的名字
const state = reactive({
  currentData: [] as any[], // 存储当前所有轨迹数据
  currentStartMd: [] as Array<{ wellId: string; startMD: number }>, // 存储每条轨迹的最后深度
});
let trajectoryDataArray = ref<TrajectoryData[]>([]);

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
  // 俯视图配置
  TopPlotRef.value?.initializeChart();
  // TopPlotRef.value?.setXAxisTitle("West(-)East(+)[m]");
  // TopPlotRef.value?.setYAxisTitle("South(-)North(+)[m]");
  if (TopPlotRef.value) {
    const option = TopPlotRef.value.getOption();
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
};

// const convertTrajectoryData = (trajectoryDataArray: TrajectoryData[]) => {
//   const DataArray = [];
//   const northArray = [];
//   const eastArray = [];
//   const tvdArray = [];
//   const vsArray = [];
//   trajectoryDataArray.forEach((item: any) => {
//     eastArray.push(item.eastShift);
//     northArray.push(item.northShift);
//     tvdArray.push(item.verthDepth);
//     vsArray.push(item.vscLength);
//   });

//   DataArray.push(eastArray);
//   DataArray.push(northArray);
//   DataArray.push(tvdArray);
//   DataArray.push(vsArray);
//   return DataArray;
// };

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
      const trajectoryData = response.data.map((item: TrajectoryData) => ({
        ...item,
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
        xdata: trajectoryData.map((item) => item.eastShift),
        ydata: trajectoryData.map((item) => item.northShift),
        name: data.wellName || `轨迹 ${colorIndex + 1}`,
        color: color,
      };

      if (TopPlotRef.value) {
        if (isAddDataFlag) {
          // 更新现有轨迹数据
          TopPlotRef.value.updateSeriesData(wellId, xyData);
        } else {
          // 添加新轨迹，不影响现有轨迹
          TopPlotRef.value.addSeries(wellId, xyData);
        }
      }
    }
  } catch (error) {
    console.error("获取曲线信息时出错:", error);
  }
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
  mittBus.on("closeComponent", (obj) => {
    if (obj.paneID === paneData.value.paneID) {
      //修改配置componetConfig
      TopPlotRef.value.setXAxis({
        min: obj.componetConfig.xmin,
        max: obj.componetConfig.xmax,
      });
      TopPlotRef.value.setYAxis({
        min: obj.componetConfig.ymin,
        max: obj.componetConfig.ymax,
      });
    }
  });
});
// const handleSetting = () => {
//   // // 使用 $emit 向父组件发送事件
//   mittBus.emit("changeComponent", {
//     componentName: "TOPVIEW",
//     paneID: paneData.value.paneID,
//   });
// };
// const props = defineProps({
//   // Define your props here
//   dragData: {
//     default: "abc",
//     type: String,
//   },
// });
const paneData = inject("paneData");
// 监听 data 的变化
watch(
  () => paneData.value,
  (newData, oldData) => {
    try {
      const newValue = JSON.parse(newData["dragData"]);
      // const oldValue = JSON.parse(oldData["dragData"]);
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
// 在组件卸载时清理数据
onUnmounted(() => {
  state.currentData = [];
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
}
.setting-icon {
  vertical-align: middle;
  cursor: pointer;
}
/* Styles go here */
</style>
