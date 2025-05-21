<template>
  <div :class="`well-log-wrapper well-log-wrapper-${componentId}`">
    <!-- <div class="track-controls">
   
    </div> -->
    <div class="curve-content-title">
      <div @click="addNewTrack" style="margin-right: 10px">Add Track</div>
      <span v-if="trackCount > 0" class="track-info">
        Active {{ activeTrackIndex }}
      </span>
    </div>
    <!-- -${componentId} -->
    <WellLog
      style="width: 100%; height: 100%"
      ref="WellLogPlotRef"
      id="WellLogPlot"
      :class="`WellLogPlot-${componentId}`"
      @track-clicked="handleTrackClick"
    ></WellLog>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  ref,
  onMounted,
  watch,
  nextTick,
  onUnmounted,
  reactive,
  inject,
  getCurrentInstance,
} from "vue";
import WellLog from "@/plugins/WellLog/WellLog.vue";
import { getWellLogData } from "@/api/curve/curve";
import { ElMessage } from "element-plus";
import { EventTarget, SetEventTarget } from "@/plugins/websocket/index.js";
import { mittBus } from "@/component/layout/libs/evLayout.js";

// import { curveData } from "../../../plugins/WellLog/curveData";
const { proxy } = getCurrentInstance();

let WellLogPlotRef = ref();
let windowWidth = ref(window.innerWidth);
const isLoadingData = ref(false);
let updateTimer: NodeJS.Timeout | null = null;
const trackCount = ref(0);
const activeTrackIndex = ref(0); // Default to first track (after index track)

// 懒加载相关变量
const lazyLoadChunkSize = 50; // 每次加载深度50
const isScrollLoading = ref(false); // 滚动加载状态
const allCurveData = ref<Record<string, any>>({}); // 存储所有曲线数据 {curveId: {data: [], nextIndex: number}}
const state = reactive({
  currentData: [], // 存储当前所有曲线数据
  currentStartMd: [] as Array<{
    wellId: string;
    startIndex: number;
    logcurveId: string;
  }>, // 存储每条轨迹的最后深度
});
const trajectoryColors = ref([
  // 原始5色
  "#EF6C00",
  "#7CB342",
  "#2196F3",
  "#FDD835",
  "#E64A19",

  // 新增7色
  "#9C27B0",
  "#00BCD4",
  "#E91E63",
  "#3F51B5",
  "#CDDC39",
  "#9C27B0",
  "#4CAF50",
  "#795548",
  "#FF9800",
  "#8BC34A",
]);

const prevDataRef = ref(null); // 存储上次有效数据
const checkScreenSize = () => {
  windowWidth.value = window.innerWidth;
  WellLogPlotRef.value?.FitWindowSize();
};

// 滚动加载更多数据的函数
const loadMoreData = async () => {
  if (isScrollLoading.value || !state.currentData.length) return;

  isScrollLoading.value = true;

  try {
    // 遍历每个曲线，加载下一批数据
    for (const curveData of state.currentData) {
      const curveId = curveData.logcurveId;
      const curveInfo = allCurveData.value[curveId];

      if (!curveInfo || !curveInfo.hasMoreData) continue;

      await loadCurveChunk(curveData, curveInfo.nextIndex);
    }
  } catch (error) {
    console.error("加载更多数据时出错:", error);
  } finally {
    isScrollLoading.value = false;
  }
};

// 处理滚动事件
const handleScroll = (event) => {
  // Get the correct container with the component-specific ID
  // const container = document.getElementById(`WellLogPlot-${componentId.value}`);
  // console.log("滚动事件被触发", event.type, container);
  // if (!container) return;

  // 阻止默认行为可能导致整个页面无法滚动，所以移除
  // event.preventDefault();

  // console.log(WellLogPlotRef.value)// 需要修改-----获取当前可视区域的最低层index值, 如果值与
  // debugger
  // 获取

  // 需要修改一下, 什么时候触发滚动

  // 检测是否滚动到底部或接近底部
  // 获取WellLogPlot容器，无论事件触发在哪里
  const container = document.getElementsByClassName(
    `WellLogPlot-${componentId}`
  )[0];
  // console.log(
  //   "滚动事件被触发",
  //   event.type,
  //   document,
  //   container,
  //   WellLogPlotRef.value
  // );

  if (!container) return;

  // 如果是wheel事件，检查是否向下滚动
  if (event.type === "wheel" && event.deltaY <= 0) {
    // console.log("不是向下滚动，忽略");
    return; // 只在向下滚动时触发加载
  }

  const scrollHeight = container.scrollHeight;
  const scrollTop = container.scrollTop;
  const clientHeight = container.clientHeight;
  const distanceToBottom = scrollHeight - scrollTop - clientHeight;

  // console.log("滚动信息:", {
  //   type: event.type,
  //   distanceToBottom,
  //   scrollHeight,
  //   scrollTop,
  //   clientHeight,
  //   isLoading: isScrollLoading.value,
  // });

  // 当滚动到距离底部100px时加载更多数据
  if (distanceToBottom < 100 && !isScrollLoading.value) {
    // console.log("触发加载更多数据");
    loadMoreData();

    // 如果是wheel事件，手动更新滚动位置以响应用户的滚动操作
    if (event.type === "wheel") {
      // 确保滚动条位置更新，模拟正常滚动行为
      setTimeout(() => {
        container.scrollTop += 30; // 向下滚动一小段距离
      }, 0);
    }
  }
};

const InitialWellLogSample = async () => {
  await WellLogPlotRef.value?.initialize();
  await WellLogPlotRef.value?.clearCurve();

  // 添加滚动事件监听 - 同时监听滚动条区域和整个组件区域
  // const wellLogContainer = document.getElementById("WellLogPlot");
  const wellLogContainer = document.getElementsByClassName(
    `WellLogPlot-${componentId}`
  )[0];
  const wellLogWrapper = document.querySelector(
    `.well-log-wrapper-${componentId}`
  );

  // console.log("容器元素:", {
  //   wellLogContainer,
  //   wellLogWrapper,
  // });

  // 移除可能存在的旧监听器
  if (wellLogContainer) {
    // wellLogContainer.removeEventListener("wheel", handleScroll);
    // wellLogContainer.removeEventListener("scroll", handleScroll);

    // 监听滚动条滚动事件
    wellLogContainer.addEventListener("scroll", handleScroll, {
      passive: true,
    });
  }

  // 为整个包装器添加wheel事件监听
  if (wellLogWrapper) {
    //  wellLogWrapper.removeEventListener("wheel", handleScroll);

    // 使用capture为true确保在捕获阶段处理事件，提高优先级
    // 使用passive为false允许我们在需要时阻止默认行为
    wellLogWrapper.addEventListener("wheel", handleScroll, {
      capture: true,
      passive: false,
    });
  }

  if (WellLogPlotRef.value) {
    const option = WellLogPlotRef.value.getOption();
    const chartSettings = {
      step: option.step,
    };
    mittBus.emit("getComponentSetting", {
      paneID: paneData.value.paneID,
      componetConfig: chartSettings,
    });
  }
};

const InsertCurveData = (curvename, data, IndexType: string = "depth") => {
  WellLogPlotRef.value?.clearCurve();
  WellLogPlotRef.value?.InsertData(curvename, data[0], data[1], IndexType);
};

// Function to add a new track
const addNewTrack = () => {
  if (!WellLogPlotRef.value) return;

  // We add 1 to account for the index track at position 0
  const newTrackIndex = trackCount.value + 1;

  // Call the createNewTrack method from WellLog component
  WellLogPlotRef.value.createNewTrack();

  // Update track count
  trackCount.value++;

  // Set the new track as active
  activeTrackIndex.value = newTrackIndex;

  ElMessage.success(`Added new track at position ${newTrackIndex}`);
};

// Handle track click to set active track
const handleTrackClick = (trackIndex) => {
  console.log(
    "Track clicked with index:",
    trackIndex,
    "in component:",
    componentId.value
  );

  // Make sure we have a valid track index
  if (trackIndex === null || trackIndex === undefined) {
    console.warn("Received invalid track index");
    return;
  }

  // Skip the index track (0)
  if (trackIndex >= 1) {
    // Update the active track index
    activeTrackIndex.value = trackIndex;

    // Display a notification message
    ElMessage.success(`Selected track ${trackIndex}`);

    console.log("Active track updated to:", activeTrackIndex.value);
  } else {
    console.log("Index track clicked, not changing active track");
  }
};

const convertCurveData = (curveData, IndexType: string = "depth") => {
  const DataArray = [];
  const IndexArray = [];
  const ValueArray = [];
  curveData.forEach((item) => {
    if (IndexType === "time" || IndexType === "Time") {
      const dateObj = new Date(item.timeIndex);
      const timestamp = dateObj.getTime();
      IndexArray.push(timestamp);
      ValueArray.push(item.singleValue);
    } else {
      IndexArray.push(item.depthIndex);
      ValueArray.push(item.singleValue);
    }
  });
  DataArray.push(IndexArray);
  DataArray.push(ValueArray);
  return DataArray;
};

const ConvertDateTimeToUTC = (dateTime) => {
  const dateObj = new Date(dateTime);

  // 将日期对象的时区设置为UTC
  dateObj.setUTCHours(
    dateObj.getUTCHours() + 8,
    dateObj.getUTCMinutes(),
    dateObj.getUTCSeconds(),
    dateObj.getUTCMilliseconds()
  );

  const isoString = dateObj.toISOString();
  return isoString;
};

// 加载单个曲线的一个数据块
const loadCurveChunk = async (data, startIndex = 0) => {
  const { wellId, logcurveId } = data;
  if (!wellId) return;
  console.log(
    "加载曲线数据",
    data.targetComponent,
    data.targetComponent,
    componentId.value
  );

  // Skip if the data is not intended for this component
  // if (data.targetComponent && data.targetComponent !== componentId.value) {
  //   console.log(
  //     `Skipping curve load for other component: ${data.targetComponent}`
  //   );
  //   return null;
  // }

  try {
    const postdata = {
      wellboreId: data.wellboreId,
      wellId: data.wellId,
      logSetId: data.logSetId,
      logcurveId: data.logcurveId,
      ReturnElements: 4,
      StartTimeIndex: ConvertDateTimeToUTC(data.startTime),
      EndTimeIndex: "2024-11-22T15:30:00+00:00",
      StartIndex: startIndex,
      EndIndex: startIndex + lazyLoadChunkSize, // 只加载指定范围的数据
      startDepth: startIndex,
      endDepth: startIndex + lazyLoadChunkSize,
      LogCurveHeaders: [
        {
          Mnemonic: data.mnemonic,
          CurveName: data.curveName,
        },
      ],
    };

    const response = await getWellLogData(postdata);
    if (response.msg === "success") {
      const curveData = response.data[0];

      // Mark the curve data with the component ID
      if (!allCurveData.value[logcurveId]) {
        allCurveData.value[logcurveId] = {
          data: [],
          nextIndex: 0,
          hasMoreData: true,
          //  componentId: componentId.value,
        };
      }

      // 将新数据添加到allCurveData
      const curveInfo = allCurveData.value[logcurveId];

      // 合并新数据
      curveInfo.data = [...curveInfo.data, ...curveData.logData];

      // 根据返回的数据量判断是否还有更多数据
      const hasMoreData = curveData.logData.length >= lazyLoadChunkSize;
      curveInfo.hasMoreData = hasMoreData;

      // 更新下一次请求的起始索引
      if (hasMoreData && curveData.logData.length > 0) {
        const lastDepth =
          curveData.logData[curveData.logData.length - 1].depthIndex;
        curveInfo.nextIndex = lastDepth;

        // 更新state.currentStartMd
        const startMdIndex = state.currentStartMd.findIndex(
          (item) => item.logcurveId === logcurveId
        );

        if (startMdIndex >= 0) {
          state.currentStartMd[startMdIndex].startIndex = lastDepth;
        } else {
          state.currentStartMd.push({
            wellId: data.wellId,
            startIndex: lastDepth,
            logcurveId: data.logcurveId,
          });
        }
      }

      // 准备数据用于绘制
      const [indexArray, valueArray] = convertCurveData(
        curveInfo.data,
        curveData.indexCurve
      );

      const newLogCurveId = data.logcurveId + "_" + data.curveName;
      const color =
        data.color || trajectoryColors.value[state.currentData.length - 1];

      const isFirstFlag = startIndex < 1 ? false : true;
      // console.log(
      //   "newLogCurveId",
      //   startIndex,
      //   indexArray,
      //   valueArray,
      //   isFirstFlag
      // );

      // 绘制完整的曲线数据
      WellLogPlotRef.value?.InsertData(
        newLogCurveId,
        data.curveName,
        indexArray,
        valueArray,
        "depth",
        curveData.indexCurve,
        color,
        isFirstFlag, // 使用isAddDataFlag=true来更新数据而不是替换
        activeTrackIndex.value
      );
      // console.log(
      //   newLogCurveId,
      //   data.curveName,
      //   indexArray,
      //   valueArray,
      //   "depth",
      //   curveData.indexCurve,
      //   color,
      //   true, // 使用isAddDataFlag=true来更新数据而不是替换
      //   activeTrackIndex.value
      // );

      return curveInfo.data;
    }
  } catch (error) {
    console.error(`加载曲线 ${data.curveName} 数据块时出错:`, error);
    ElMessage.warning(`加载曲线 ${data.curveName} 数据时出错`);
    return null;
  }
};

const initWellLogData = async (dataArray, isAddDataFlag = false) => {
  WellLogPlotRef.value?.clearCurve();

  // Reset allCurveData for this component only
  if (!isAddDataFlag) {
    allCurveData.value = {};
  }

  try {
    // 使用 Promise.all 并行处理多个请求
    const promises = dataArray.map(async (data, index) => {
      data.color = trajectoryColors.value[index];
      // 初始加载第一块数据
      return await loadCurveChunk(data);
    });
    // Wait for all requests to complete
    await Promise.all(promises);
  } catch (error) {
    ElMessage.error("加载多条曲线时出错");
    console.error("加载多条曲线时出错:", error);
  }
};

const LoadWellLogData = async (data, isAddDataFlag = false) => {
  // 使用loadCurveChunk加载单条曲线数据
  if (!isAddDataFlag) {
    data.color = trajectoryColors.value[state.currentData.length - 1];
    //  data.targetComponent = componentId.value; // Mark with component ID
    state.currentData.push(data);
  }

  await loadCurveChunk(
    data,
    isAddDataFlag
      ? state.currentStartMd.find((item) => item.logcurveId === data.logcurveId)
          ?.startIndex || 0
      : 0
  );
};

// WebSocket 事件处理
const loadWebSocketEvent = () => {
  let target = new EventTarget();
  SetEventTarget(target);
  const executeLoadData = async (wellId: string) => {
    if (isLoadingData.value) return;

    try {
      isLoadingData.value = true;
      state.currentData.forEach(async (wellItem) => {
        const currentStartMd = state.currentStartMd.find(
          (item) => item.logcurveId === wellItem.logcurveId
        );
        await LoadWellLogData({ ...wellItem, ...currentStartMd }, true);
      });
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
    if (messageData.witmlmltranstype === "Log" && matchingWell) {
      console.log("收到曲线更新消息", messageData);
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
    }
  });
};

onMounted(async () => {
  await InitialWellLogSample();
  loadWebSocketEvent();
  // Initialize with one track (plus the index track)
  trackCount.value = 1;
  activeTrackIndex.value = 1;
  mittBus.on("closeComponent", (obj) => {
    if (obj.paneID === paneData.value.paneID) {
      WellLogPlotRef.value.setOption(obj.componetConfig);
    }
  });
});
const paneData = inject("paneData");
const componentId = paneData.value?.paneID;
const newData = ref(null);
// 监听 data 的变化
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

          //   // 过滤出新增的轨迹数据
          const newTrajectories = newValueCopy.filter(
            (item: any) =>
              !oldValueCopy.some(
                (oldItem: any) => oldItem.logcurveId === item.logcurveId
              )
          );

          // 如果有新增轨迹，使用第一条；否则使用第一条现有轨迹
          data =
            newTrajectories.length > 0 ? newTrajectories[0] : newValueCopy[0];
        } else {
          // 如果没有旧数据，使用第一条新数据
          data = newValue[0];
        }

        // When saving current data, keep track of which component it belongs to
        state.currentData = JSON.parse(JSON.stringify(newValue));

        if (newValue && newValue[0].parentName === "curve" && data.wellId) {
          proxy.$appTools.dragDataIsSuccess(true, newData, oldData);

          // Only load data intended for this component
          if (!oldValue || oldValue.length === 0) {
            initWellLogData(newValue, false);
          } else {
            LoadWellLogData(data, false);
          }
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
  state.currentStartMd = [];
  allCurveData.value = {};

  // 移除滚动事件监听
  // const wellLogContainer = document.getElementById("WellLogPlot");
  const wellLogContainer = document.getElementsByClassName(
    `WellLogPlot-${componentId}`
  )[0];

  if (wellLogContainer) {
    wellLogContainer.removeEventListener("wheel", handleScroll);
  }

  if (updateTimer) {
    clearTimeout(updateTimer);
    updateTimer = null;
  }
  mittBus.off("closeComponent");
});
</script>

<style scoped lang="scss">
.well-log-wrapper {
  width: 100% !important;
  height: 100% !important;
  background-color: #fff;
  // color: #fff;
}

.track-controls {
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #eee;
}

.track-info {
  font-size: 12px;
  color: #fff;
}
.curve-content-title {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  border-bottom: 1px solid #ccc;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  flex-shrink: 0; /* 防止压缩 */
  display: flex;
}
</style>
