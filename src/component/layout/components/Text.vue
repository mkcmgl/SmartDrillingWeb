<template>
  <div class="text-container">
    <!-- 遍历展示newValueCopy.value, 格式为每一项占据一行 -->
    <div class="well-info" v-if="currentValue.length > 0">
      <div v-for="(item, index) in currentValue" :key="index">
        <div>{{ item.name }}</div>
        <div class="info">
          <div class="info-value">{{ item.value }}</div>
          <div class="info-unit">{{ item.unit }}</div>
        </div>
      </div>
    </div>
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
  inject,
  reactive,
  getCurrentInstance,
} from "vue";
import { getWellLogData, getWellTrajectoryData } from "@/api/curve/curve";
import { ElMessage } from "element-plus";
import { EventTarget, SetEventTarget } from "@/plugins/websocket/index.js";
import { useTrajectoryStore } from "@/stores/componentStore";

// 定义响应式变量
const currentValue = ref([]);
const paneData = inject("paneData");
const { proxy } = getCurrentInstance();

const isLoadingData = ref(false);
let updateTimer: NodeJS.Timeout | null = null;
const state = reactive({
  currentData: [], // 存储当前所有曲线数据
  currentStartMd: [], // 存储每条轨迹的最后深度
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
  // 参数验证
  const { wellId, logcurveId, curveName } = data;
  if (!wellId || !logcurveId) {
    return null;
  }

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
  // const valueList = curveData.logData.map(el => el.singleValue);
  const valueList = [
    curveData.logData[curveData.logData.length - 1].singleValue,
  ];
  const lastData = curveData.logData[curveData.logData.length - 1];

  // 6. 更新仪表盘
  // dashboardPlotRef.value?.insertData(valueList, data.curveName, true);
  currentValue.value = [
    { value: lastData.singleValue, name: lastData.mnemonic, unit: "unit" },
  ];

  return valueList;
};

// 加载并处理初始数据
const loadAndProcessInitialData = async (data, startIndex) => {
  // 第一步：加载初始深度数据
  const initialRequestParams = buildRequestParams(data, startIndex);
  const initialResponse = await getWellLogData(initialRequestParams);

  if (initialResponse.msg !== "success") {
    return null;
  }

  // 验证第一次请求的数据
  const initialCurveData = initialResponse.data[0];
  if (!isValidCurveData(initialCurveData)) return null;

  // 提取第一次请求的结束深度
  const initialEndDepth =
    initialCurveData.logData[initialCurveData.logData.length - 1].depthIndex;

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
    return null;
  }

  // 验证第二次请求的数据
  const secondCurveData = secondResponse.data[0];
  if (!isValidCurveData(secondCurveData)) return null;

  // 提取第二次请求的结束深度和最后一个值
  const lastDepth = getLastDepth(secondCurveData);
  const lastData = secondCurveData.logData[secondCurveData.logData.length - 1];

  // 将数据添加到当前数据集
  state.currentData.push(data);
  updateStartDepthRecord(data, lastDepth);

  // 仪表盘只需要显示最后一个值
  const valueList = [lastData];

  // 更新仪表盘
  // dashboardPlotRef.value?.insertData(valueList, data.curveName, false);
  currentValue.value = [
    { value: lastData.singleValue, name: lastData.mnemonic, unit: "unit" },
  ];

  return valueList;
};

// 添加轨迹存储
const trajectoryStore = useTrajectoryStore();

const LoadTrajectoryData = async (data, isAddDataFlag = false) => {
  const { wellId } = data;
  if (!wellId) return;
  try {
    // 使用 componentStore 中的轨迹数据
    const trajectoryData = await trajectoryStore.LoadTrajectoryData(data);
    
    if (trajectoryData) {
      // 取最后一个数据点
      const currentTrajectoryData = trajectoryData.allDataList;
      if (currentTrajectoryData && currentTrajectoryData.length > 0) {
        const lastData = currentTrajectoryData[currentTrajectoryData.length - 1];
        currentValue.value = [
          { value: lastData.depth, name: "MD", unit: "m" },
        ];
      }
    }
    // else{
    // }
    //  else {

    //   // 如果未能立即返回数据，设置监听器等待数据加载完成
    //   const unwatch = watch(
    //     () => trajectoryStore.state.allTrajectoryData,
    //     (newData) => {
    //       const trajectoryData = newData.find(item => item.wellId === wellId);
    //       if (trajectoryData && trajectoryData.allDataList.length > 0) {
    //         const lastData = trajectoryData.allDataList[trajectoryData.allDataList.length - 1];
    //         currentValue.value = [
    //           { value: lastData.depth, name: "MD", unit: "m" },
    //         ];
    //         unwatch(); // 取消监听，避免重复处理
    //       }
    //     },
    //     { deep: true }
    //   );
      
    //   // 设置超时，如果5秒后仍未获取到数据，取消监听
    //   setTimeout(() => {
    //     unwatch();
    //   }, 5000);
    // }
  } catch (error) {
    console.error("获取曲线信息时出错:", error);
  }
};
// WebSocket 事件处理
const loadWebSocketEvent = () => {
  let target = new EventTarget();
  SetEventTarget(target);
  const executeLoadData = async (wellId: string, type: string) => {
    if (isLoadingData.value) return;

    try {
      isLoadingData.value = true;
      if (type === "Log") {
        state.currentData.forEach(async (wellItem) => {
          const currentStartMd = state.currentStartMd.find(
            (item) => item.logcurveId === wellItem.logcurveId
          );
          await LoadWellLogData({ ...wellItem, ...currentStartMd }, true);
        });
      } else if (type === "Trajectory") {
        const currentStartMd = state.currentStartMd.find(
          (item) => item.wellId === wellId
        );

        await LoadTrajectoryData(
          {
            ...currentStartMd,
          },
          true
        );
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
    if (messageData.witmlmltranstype === "Log" && matchingWell) {
      console.log("收到曲线更新消息", messageData);
      if (updateTimer) {
        clearTimeout(updateTimer);
        updateTimer = null;
      }

      if (isLoadingData.value) {
        updateTimer = setTimeout(async () => {
          await executeLoadData(messageData.wellid, "Log");
        }, 1000);
      } else {
        executeLoadData(messageData.wellid, "Log");
      }
    } else if (messageData.witmlmltranstype === "Trajectory" && matchingWell) {
      // if (messageData.wellstatus === "1") {
      console.log("我收到消息了轨迹需要更新", messageData);
      if (updateTimer) {
        clearTimeout(updateTimer);
        updateTimer = null;
      }

      if (isLoadingData.value) {
        updateTimer = setTimeout(async () => {
          await executeLoadData(messageData.wellid, "Trajectory");
        }, 1000);
      } else {
        executeLoadData(messageData.wellid, "Trajectory");
      }
      // }else{
      //   console.log("收到曲线关闭消息", messageData);
      // }
    }
  });
};

onMounted(async () => {
  //   newValueCopy.value = [{'curveName':"GR","unit":"m","value":"21"}];
  // let changeData=[{'curveName':"GR","unit":"m","value":"20"},{'curveName':"GR","unit":"m","value":"16"},{'curveName':"GR","unit":"m","value":"12"}]
  //   // 过3秒后遍历changeData的值, newValueCopy.value的值依次展示变化为每一项的数据, 每个数据停留1s
  //   setTimeout(() => {
  //     newValueCopy.value = [changeData[0]];
  //     // 间隔1s
  //     setTimeout(() => {
  //       newValueCopy.value = [changeData[1]];
  //     }, 1000);
  //     // 间隔1s
  //     setTimeout(() => {
  //       newValueCopy.value = [changeData[2]];
  //     }, 2000);
  //   }, 3000);
  loadWebSocketEvent();
});

watch(
  () => paneData.value,
  (newData, oldData) => {
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
        console.log("newValueCopy", newValueCopy);
        state.currentData = JSON.parse(JSON.stringify(newValue));
        if (!currentValue.value.length) {
          if (newValue && newValue[0].parentName === "curve" && data.wellId) {
            // 调用加载轨迹数据方法
            proxy.$appTools.dragDataIsSuccess(true, newData, oldData);
            LoadWellLogData(data, false);
          } else if (
            newValue &&
            newValue[0].name === "Actual Trajectory" &&
            data.wellId
          ) {
            proxy.$appTools.dragDataIsSuccess(true, newData, oldData);
            LoadTrajectoryData(data, false);
          } else if (
            newValue &&
            newValue[0].parentName === "BHA" &&
            data.wellId
          ) {
            const parts = data.name.split("_");
            currentValue.value = [{ name: parts[1] }];
          } else if (newValue && newValue[0].type === "Well" && data.wellId) {
            currentValue.value = [{ name: data.wellName }];
          } else {
            return;
          }
        } else {
          return;
        }
      }
    } catch (error) {
      console.error("数据解析错误:", error);
    }
  },
  { deep: true, immediate: true }
);

</script>

<style scoped lang="scss">
.text-container {
  padding: 10px;
  white-space: pre-wrap; /* 保留空格和换行 */
  word-wrap: break-word; /* 允许长单词换行 */
}

.well-info {
  padding: 0 10px 10px 10px;
  margin: 10px;
  color: #fff;
  text-align: center;
  font-weight: bold;
}

.info {
  display: flex;
  justify-content: center;
  align-items: flex-end; /* 确保所有子元素底部对齐 */
  overflow: hidden;

  .info-value {
    font-size: 18px;
    font-weight: bold;
  }

  .info-unit {
    font-size: 12px;
    padding-bottom: 2px; /* 微调底部间距，使其与value视觉上更准确对齐 */
    margin-left: 6px; /* 添加一点左侧间距，分隔value和unit */
  }
}
</style>
