<template>
  <!-- // 拖拽几条曲线展示几个Dashboard? 还是每次只展示最新拖拽进来的Dashboard? -->
  <!-- 如果只展示一条数据---一对一 -->
  <Dashboard
    style="width: 100%; height: 100%"
    ref="dashboardPlotRef"
    id="dashboardPlot"
  ></Dashboard>
</template>

<script lang="ts" setup>
import {
  computed,
  ref,
  onMounted,
  watch,
  nextTick,
  onUnmounted,
  inject,
  reactive,
  getCurrentInstance,
} from "vue";
import Dashboard from "@/plugins/Dashboard/Dashboard.vue";
import { ElMessage } from "element-plus";
import { EventTarget, SetEventTarget } from "@/plugins/websocket/index.js";
import { getWellLogData } from "@/api/curve/curve";
import { mittBus } from "@/component/layout/libs/evLayout.js";

const { proxy } = getCurrentInstance();

const dashboardPlotRef = ref();
const isLoadingData = ref(false);
let updateTimer: NodeJS.Timeout | null = null;
const state = reactive({
  currentData: [], // 存储当前所有曲线数据
  currentStartMd: [] as Array<{
    wellId: string;
    startIndex: number;
    logcurveId: string;
  }>, // 存储每条轨迹的最后深度
  // currentCurveData: [], // 存储之前绘制的曲线数据
});

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
const LoadWellLogData = async (data, isAddDataFlag = false) => {
  // 修改代码:
  // 参数验证
  const { wellId, logcurveId, curveName } = data;
  // if (!wellId || !logcurveId) {
  //   console.warn("缺少必要的曲线参数", { wellId, logcurveId, curveName });
  //   return null;
  // }
  try {
    // 确定起始深度
    const startIndex = determineStartIndex(data, isAddDataFlag);

    // 如果是实时更新模式，直接加载最新数据
    if (isAddDataFlag) {
      return await loadAndProcessRealTimeData(data, startIndex);
    }

    // 如果是初始加载模式，执行两步加载
    else {
      return await loadAndProcessInitialData(data, startIndex);
    }
  } catch (error) {
    console.error(`加载仪表盘数据 ${curveName} 出错:`, error);
    ElMessage.error("获取曲线信息时出错");
    return null;
  }
};

// 确定起始深度
const determineStartIndex = (data, isAddDataFlag) => {
  return isAddDataFlag
    ? state.currentStartMd.find((item) => item.logcurveId === data.logcurveId)
        ?.startIndex || 0.1
    : 0.1;
};

// 构建请求参数
const buildRequestParams = (data, startIndex, endIndex = 50, endDepth = 50) => {
  return {
    wellboreId: data.wellboreId,
    wellId: data.wellId,
    logSetId: data.logSetId,
    logcurveId: data.logcurveId,
    ReturnElements: 4,
    StartTimeIndex: ConvertDateTimeToUTC(data.startTime),
    EndTimeIndex: "2024-11-22T15:30:00+00:00",
    StartIndex: startIndex,
    EndIndex: endIndex > startIndex ? endIndex : null,
    startDepth: startIndex,
    endDepth: endDepth > startIndex ? endDepth : null,
    LogCurveHeaders: [
      {
        Mnemonic: data.mnemonic,
        CurveName: data.curveName,
      },
    ],
  };
};

// 验证数据有效性
const isValidCurveData = (curveData) => {
  if (!curveData || !curveData.logData || curveData.logData.length === 0) {
    console.warn("接收到空的曲线数据");
    return false;
  }
  return true;
};

// 获取最后一个数据点的深度值
const getLastDepth = (curveData) => {
  return curveData.logData[curveData.logData.length - 1].depthIndex;
};

// 更新起始深度记录
const updateStartDepthRecord = (data, depth) => {
  const existingRecord = state.currentStartMd.find(
    (item) => item.logcurveId === data.logcurveId
  );

  if (existingRecord) {
    existingRecord.startIndex = depth;
  } else {
    state.currentStartMd.push({
      wellId: data.wellId,
      startIndex: depth,
      logcurveId: data.logcurveId,
    });
  }
};

// 加载并处理实时数据
const loadAndProcessRealTimeData = async (data, startIndex) => {
  // 1. 发送请求
  const requestParams = buildRequestParams(data, startIndex);
  const response = await getWellLogData(requestParams);

  if (response.msg !== "success") {
    console.warn(`请求失败: ${response.msg}`);
    return null;
  }

  // 2. 验证数据
  const curveData = response.data[0];
  if (!isValidCurveData(curveData)) return null;

  // 3. 提取深度值
  const lastDepth = getLastDepth(curveData);

  // 4. 更新深度记录
  updateStartDepthRecord(data, lastDepth);

  // 5. 提取值列表
  // const valueList = curveData.logData.map(el => el.singleValue);//取每次实时的最后一个数据点深度对应的值
  const valueList = [
    curveData.logData[curveData.logData.length - 1].singleValue,
  ];

  // 6. 更新仪表盘
  if (dashboardPlotRef.value) {
    dashboardPlotRef.value?.insertData(valueList, data.curveName, true); // 更新仪表盘, 只取最后一条数据值
  }

  return valueList;
};

// 加载并处理初始数据
const loadAndProcessInitialData = async (data, startIndex) => {
  // 第一步：加载初始深度数据
  const initialRequestParams = buildRequestParams(data, startIndex);
  const initialResponse = await getWellLogData(initialRequestParams);

  if (initialResponse.msg !== "success") {
    console.warn(`初始加载请求失败: ${initialResponse.msg}`);
    return null;
  }

  // 验证第一次请求的数据
  const initialCurveData = initialResponse.data[0];
  if (!isValidCurveData(initialCurveData)) return null;

  // 提取第一次请求的结束深度
  const initialEndDepth =
    initialCurveData.logData[initialCurveData.logData.length - 1].depthIndex;
  console.log(`第一次请求完成，结束深度: ${initialEndDepth}，开始第二次请求`);

  // 第二步：使用第一次请求的结束深度作为起点，加载后续数据
  const secondRequestParams = {
    ...initialRequestParams,
    StartIndex: initialResponse.data[0].endDepth - 10,
    startDepth: initialResponse.data[0].endDepth - 10,
    EndIndex: null, // 不限制结束深度
    endDepth: null,
  };

  const secondResponse = await getWellLogData(secondRequestParams);

  if (secondResponse.msg !== "success") {
    console.warn(`第二次请求失败: ${secondResponse.msg}`);
    return null;
  }

  // 验证第二次请求的数据
  const secondCurveData = secondResponse.data[0];
  if (!isValidCurveData(secondCurveData)) return null;

  // 提取第二次请求的结束深度和最后一个值
  const lastDepth = getLastDepth(secondCurveData);
  const lastValue =
    secondCurveData.logData[secondCurveData.logData.length - 1].singleValue;

  // 将数据添加到当前数据集
  state.currentData.push(data);
  updateStartDepthRecord(data, lastDepth);

  // 仪表盘只需要显示最后一个值
  const valueList = [lastValue];

  // 更新仪表盘
  dashboardPlotRef.value?.insertData(valueList, data.curveName, false);

  return valueList;
};

// 组件卸载时清理
onUnmounted(() => {
  if (dashboardPlotRef.value) {
    dashboardPlotRef.value = null;
  }
  if (updateTimer) {
    clearTimeout(updateTimer);
    updateTimer = null;
  }
});

const InitialPlotSample = async () => {
  // 俯视图配置
  dashboardPlotRef.value?.initializeChart();
  if (dashboardPlotRef.value) {
    const option = dashboardPlotRef.value.getOption();
    const chartSettings = {
      min: option.series[0].min,
      max: option.series[0].max,
    };
    mittBus.emit("getComponentSetting", {
      // componentName: "PROFILE",
      paneID: paneData.value.paneID,
      componetConfig: chartSettings,
    });
  }
};
onMounted(async () => {
  loadWebSocketEvent();

  // await nextTick();
  if (dashboardPlotRef.value) {
    await dashboardPlotRef.value.initializeChart();
  }
  InitialPlotSample();

  mittBus.on("closeComponent", (obj) => {
    if (obj.paneID === paneData.value.paneID) {
      //修改配置
      dashboardPlotRef.value.setOption(obj.componetConfig);
    }
  });
});
// 监听 data 的变化
// watch(
//   () => props.dragData,
//   async (dragData) => {
//     await nextTick(); // 等待 DOM 更新
//     if (!dashboardPlotRef.value) {
//       console.error("dashboardPlotRef 未初始化");
//       return;
//     }
//     if (dragData) {
//       try {
//         const newValue = JSON.parse(dragData);
//         const newData = newValue[0];
//         if (newValue && newData.parentName === "BHA") {
//           LoadWellLogData(newValue);
//         }
//       } catch (error) {
//         console.error("数据解析错误:", error);
//       }
//     }
//   },
//   { deep: true, immediate: true }
// );

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

const paneData = inject("paneData");

watch(
  () => paneData.value,
  async (newData, oldData) => {
    // await nextTick(); // 等待 DOM 更新
    // if (!dashboardPlotRef.value) {
    //   console.error("dashboardPlotRef 未初始化");
    //   return;
    // }
    try {
      const newValue = JSON.parse(newData["dragData"]);
      const oldValue = oldData ? JSON.parse(oldData["dragData"]) : [];
      if (newValue && newValue.length) {
        let data;

        // 创建深拷贝以避免修改原始数据
        const newValueCopy = JSON.parse(JSON.stringify(newValue));
        const oldValueCopy = JSON.parse(JSON.stringify(oldValue));

        data = newValue[0];

        // 保存当前数据，不修改原始数据
        state.currentData = JSON.parse(JSON.stringify(newValue));

        if (newValue && newValue[0].parentName === "curve" && data.wellId) {
          // 调用加载轨迹数据方法
          if (newValueCopy.length === 1) {
            proxy.$appTools.dragDataIsSuccess(true, newData, oldData);

            LoadWellLogData(data, false);
          } else {
            return;
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

<style scoped lang="scss"></style>
