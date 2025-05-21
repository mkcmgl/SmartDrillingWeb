import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { getWellTrajectoryData, getWellLogData } from "@/api/curve/curve";
import { ElMessage } from "element-plus";

// interface TrajectoryData {
//   depth: number;
//   incation: number;
//   azimuth: number;
//   verthDepth: number;
//   northShift: number;
//   eastShift: number;
//   vscLength: number;
//   closeDistance: number;
//   closeAngle: number;
//   dogLeg: number;
//   build: number;
//   turn: number;
//   toolFace: number;
// }

// interface WellData {
//   wellId: string;
//   wellName?: string;
//   allData: TrajectoryData[];
//   currentData: TrajectoryData[];
//   currentParam: { currentStartMd: number; currentEndMd: number };
//   color: string;
// }

// interface TrajectoryState {
//   currentData: [];
//   currentStartMd: Array<{ wellId: string; startMD: number }>;
//   currentEndMd: Array<{ wellId: string; endMD: number }>;
//   // allTrajectoryData: [];
//   currentTrajectory: TrajectoryData[];
//   isLoading: boolean;
//   allTrajectoryData:Array<{wellId:string, allData:Array<TrajectoryData>, currentData:TrajectoryData[], currentParam:{currentStartMd:number, currentEndMd:number}, color:string}>
// }
const colors = ref([
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
const CHUNK_SIZE = 50;

export const useTrajectoryStore = defineStore("trajectory", () => {
  const state = reactive({
    allTrajectoryData: [], // { wellId, allDataList, currentData, currentParam: {startMd,endMd}, color }
    isLoading: false,
  });

  const fetchTrajectoryChunk = async (wellId, startMD, endMD) => {
    try {
      const response = await getWellTrajectoryData({ wellId, startMD, endMD });
      return response.msg === "success" && response.data?.length > 0
        ? response.data
        : null;
    } catch (error) {
      console.error("Error fetching trajectory chunk:", error);
      return null;
    }
  };

  const loadMoreTrajectoryData = async (wellId, startMD, endMD) => {
    debugger;

    let response = await fetchTrajectoryChunk(wellId, startMD, endMD);

    // 如果返回数据为空则直接返回
    if (!response || response.length === 0) {
      return;
    }

    // 找到state中对应的wellId数据
    const trajectoryData = state.allTrajectoryData.find(
      (item) => item.wellId === wellId
    );
    if (!trajectoryData) {
      return;
    }

    // 检查最后一条数据的depth是否大于等于endMD
    const lastDepth = response[response.length - 1]?.depth;
    debugger;

    if (lastDepth >= endMD) {
      debugger;

      // 追加数据到allDataList
      trajectoryData.allDataList = [...trajectoryData.allDataList, ...response];
      // 更新currentData
      trajectoryData.currentParam = { startMD: startMD, endMD: endMD };
      trajectoryData.currentData = response;
      return;
    }

    // 如果lastDepth < endMD，继续请求数据
    while (lastDepth < endMD) {
      debugger;

      const nextResponse = await fetchTrajectoryChunk(
        wellId,
        lastDepth,
        lastDepth + CHUNK_SIZE
      );

      // 如果返回数据为空则退出循环
      if (!nextResponse || nextResponse.length === 0) {
        break;
      }

      // 追加数据到allDataList
      trajectoryData.allDataList = [
        ...trajectoryData.allDataList,
        ...nextResponse,
      ];
      // 更新currentData
      trajectoryData.currentData = nextResponse;
      trajectoryData.currentParam = {
        startMD: lastDepth,
        endMD: lastDepth + CHUNK_SIZE,
      };

      // 更新lastDepth
      const newLastDepth = nextResponse[nextResponse.length - 1]?.depth;
      if (newLastDepth >= endMD) {
        break;
      }
    }
  };

  const LoadTrajectoryData = async (data) => {
    const { wellId } = data;
    if (!wellId) return false;

    // Check if data already exists
    const existingData = state.allTrajectoryData.find(
      (item) => item.wellId === wellId
    );
    if (existingData) {
      return existingData;
    }

    const firstTrajectoryData = {
      wellId,
      allDataList: [],
      currentData: [],
      currentParam: {
        startMD: 0,
        endMD: CHUNK_SIZE,
      },
      color: colors.value[state.allTrajectoryData.length],
    };
    const firstChunk = await fetchTrajectoryChunk(wellId, 0, CHUNK_SIZE);

    console.log("firstChunk", firstChunk);
    if (!firstChunk?.length) {
      state.isLoading = false;
      return true;
    }

    const lastDepth = firstChunk[firstChunk.length - 1]?.depth;
    if (lastDepth >= firstTrajectoryData.currentParam.endMD) {
      debugger;
      firstTrajectoryData.allDataList = [...firstChunk];
      state.allTrajectoryData.push(firstTrajectoryData);
      return firstTrajectoryData;
    } else {
      debugger;

      loadMoreTrajectoryData(
        wellId,
        firstTrajectoryData.currentParam.endMD,
        lastDepth + CHUNK_SIZE
      );
      return false;
    }
  };

  return {
    state,
    LoadTrajectoryData,
  };
});

// // 曲线数据相关类型和 store
// interface CurveItem {
//   depthIndex: number;
//   singleValue: number;
//   timeIndex?: string;
// }

// interface CurveData {
//   logData: CurveItem[];
//   indexCurve: string;
//   // 其他可能的属性
// }

// interface WellLogInfo {
//   wellId: string;
//   wellboreId: string;
//   logSetId: string;
//   logcurveId: string;
//   mnemonic: string;
//   curveName: string;
//   startTime: string;
//   targetComponent?: string;
//   color?: string;
//   parentName?: string;
// }

// interface CurveState {
//   currentData: WellLogInfo[];
//   currentStartMd: Array<{
//     wellId: string;
//     startIndex: number;
//     logcurveId: string;
//   }>;
//   allCurveData: Record<string, {
//     data: CurveItem[];
//     nextIndex: number;
//     hasMoreData: boolean;
//   }>;
//   isLoading: boolean;
//   isScrollLoading: boolean;
//   trajectoryColors: string[];
//   activeTrackIndex: number;
// }

const CURVE_CHUNK_SIZE = 50;

export const useCurveStore = defineStore("curve", () => {
  const state =
    reactive <
    CurveState >
    {
      currentData: [],
      currentStartMd: [],
      allCurveData: {},
      isLoading: false,
      isScrollLoading: false,
      activeTrackIndex: 1, // 默认为第一条轨道（索引轨道后）
      trajectoryColors: [
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
      ],
    };

  // 转换日期时间到UTC
  const convertDateTimeToUTC = (dateTime) => {
    const dateObj = new Date(dateTime);
    dateObj.setUTCHours(
      dateObj.getUTCHours() + 8,
      dateObj.getUTCMinutes(),
      dateObj.getUTCSeconds(),
      dateObj.getUTCMilliseconds()
    );
    return dateObj.toISOString();
  };

  // 转换曲线数据格式
  const convertCurveData = (curveData, IndexType = "depth") => {
    const IndexArray = [];
    const ValueArray = [];

    curveData.forEach((item) => {
      if (IndexType === "time" || IndexType === "Time") {
        const dateObj = new Date(item.timeIndex);
        const timestamp = dateObj.getTime();
        IndexArray.push(timestamp);
      } else {
        IndexArray.push(item.depthIndex);
      }
      ValueArray.push(item.singleValue);
    });

    return [IndexArray, ValueArray];
  };

  // 加载单个曲线的一个数据块
  const loadCurveChunk = async (data, startIndex = 0, wellLogRef) => {
    const { wellId, logcurveId } = data;
    if (!wellId) return null;

    console.log("加载曲线数据", data);

    try {
      const postdata = {
        wellboreId: data.wellboreId,
        wellId: data.wellId,
        logSetId: data.logSetId,
        logcurveId: data.logcurveId,
        ReturnElements: 4,
        StartTimeIndex: convertDateTimeToUTC(data.startTime),
        EndTimeIndex: "2024-11-22T15:30:00+00:00",
        StartIndex: startIndex,
        EndIndex: startIndex + CURVE_CHUNK_SIZE,
        startDepth: startIndex,
        endDepth: startIndex + CURVE_CHUNK_SIZE,
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

        // 初始化曲线数据存储
        if (!state.allCurveData[logcurveId]) {
          state.allCurveData[logcurveId] = {
            data: [],
            nextIndex: 0,
            hasMoreData: true,
          };
        }

        // 将新数据添加到allCurveData
        const curveInfo = state.allCurveData[logcurveId];
        curveInfo.data = [...curveInfo.data, ...curveData.logData];

        // 根据返回的数据量判断是否还有更多数据
        const hasMoreData = curveData.logData.length >= CURVE_CHUNK_SIZE;
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

        // 如果提供了wellLogRef，将数据插入到图表中
        if (wellLogRef) {
          // 准备数据用于绘制
          const [indexArray, valueArray] = convertCurveData(
            curveInfo.data,
            curveData.indexCurve
          );

          const newLogCurveId = data.logcurveId + "_" + data.curveName;
          const color =
            data.color || state.trajectoryColors[state.currentData.length - 1];
          const isFirstFlag = startIndex < 1 ? false : true;

          // 绘制完整的曲线数据
          wellLogRef.InsertData(
            newLogCurveId,
            data.curveName,
            indexArray,
            valueArray,
            "depth",
            curveData.indexCurve,
            color,
            isFirstFlag, // 使用isAddDataFlag=true来更新数据而不是替换
            state.activeTrackIndex
          );
        }

        return curveInfo.data;
      }
    } catch (error) {
      console.error(`加载曲线 ${data.curveName} 数据块时出错:`, error);
      ElMessage.warning(`加载曲线 ${data.curveName} 数据时出错`);
      return null;
    }

    return null;
  };

  // 加载多个曲线的数据
  const initWellLogData = async (
    dataArray,
    isAddDataFlag = false,
    wellLogRef
  ) => {
    if (wellLogRef) {
      wellLogRef.clearCurve();
    }

    // 重置曲线数据
    if (!isAddDataFlag) {
      state.allCurveData = {};
    }

    try {
      // 使用 Promise.all 并行处理多个请求
      const promises = dataArray.map(async (data, index) => {
        data.color = state.trajectoryColors[index];
        // 初始加载第一块数据
        return await loadCurveChunk(data, 0, wellLogRef);
      });
      // 等待所有请求完成
      await Promise.all(promises);
    } catch (error) {
      ElMessage.error("加载多条曲线时出错");
      console.error("加载多条曲线时出错:", error);
    }
  };

  // 加载单条曲线数据
  const loadWellLogData = async (data, isAddDataFlag = false, wellLogRef) => {
    if (!isAddDataFlag) {
      data.color = state.trajectoryColors[state.currentData.length - 1];
      state.currentData.push(data);
    }

    await loadCurveChunk(
      data,
      isAddDataFlag
        ? state.currentStartMd.find(
            (item) => item.logcurveId === data.logcurveId
          )?.startIndex || 0
        : 0,
      wellLogRef
    );
  };

  // 滚动加载更多数据
  const loadMoreData = async (wellLogRef) => {
    if (state.isScrollLoading || !state.currentData.length) return;

    state.isScrollLoading = true;

    try {
      // 遍历每个曲线，加载下一批数据
      for (const curveData of state.currentData) {
        const curveId = curveData.logcurveId;
        const curveInfo = state.allCurveData[curveId];

        if (!curveInfo || !curveInfo.hasMoreData) continue;

        await loadCurveChunk(curveData, curveInfo.nextIndex, wellLogRef);
      }
    } catch (error) {
      console.error("加载更多数据时出错:", error);
    } finally {
      state.isScrollLoading = false;
    }
  };

  // 处理WebSocket事件
  const handleWebSocketMessage = async (messageData, wellLogRef) => {
    // 检查是否存在匹配的轨迹
    const matchingWell = state.currentData.find(
      (item) => item.wellId === messageData.wellid
    );

    if (messageData.witmlmltranstype === "Log" && matchingWell) {
      console.log("收到曲线更新消息", messageData);

      // 执行数据加载
      if (!state.isLoading) {
        state.isLoading = true;
        try {
          state.currentData.forEach(async (wellItem) => {
            const currentStartMd = state.currentStartMd.find(
              (item) => item.logcurveId === wellItem.logcurveId
            );
            await loadWellLogData(
              { ...wellItem, ...currentStartMd },
              true,
              wellLogRef
            );
          });
        } finally {
          state.isLoading = false;
        }
      }
    }
  };

  // 设置活动轨道索引
  const setActiveTrackIndex = (index) => {
    state.activeTrackIndex = index;
  };

  // 清理所有数据
  const clearAllData = () => {
    state.currentData = [];
    state.currentStartMd = [];
    state.allCurveData = {};
  };

  return {
    state,
    loadCurveChunk,
    loadWellLogData,
    initWellLogData,
    loadMoreData,
    handleWebSocketMessage,
    setActiveTrackIndex,
    clearAllData,
  };
});
