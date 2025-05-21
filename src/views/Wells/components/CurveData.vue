<template>
  <div class="curve-data">
    <div :class="state.isFold ? 'is-fold-list' : 'curve-data-list'">
      <div class="curve-data-title">
        <span style="font-size: 16px">曲线列表</span>
      </div>
      <el-tree
        style="max-width: 600px"
        :data="treeData"
        node-key="logSetId"
        :render-content="renderContent"
        :props="treeProps"
        :load="loadNode"
        lazy
        @node-click="handleNodeClick"
      >
      </el-tree>
    </div>
    <div :class="state.isFold ? 'curve-data-right-all' : 'curve-data-right'">
      <div class="curve-data-right-button">
        <img
          v-show="state.isFold"
          src="@/assets/Well/Fold.svg"
          class="fold-img"
          @click="handleFold()"
        />
        <img
          v-show="!state.isFold"
          src="@/assets/Well/UnFold.svg"
          class="fold-img"
          @click="handleFold()"
        />
        <el-button @click="handleEdit()">曲线配置</el-button>
      </div>

      <div class="curve-data-content">
        <div class="curve-data-table">
          <el-table :data="state.tableData" border style="width: 100%">
            <el-table-column align="center" prop="index" label="#" />
            <el-table-column align="center" prop="deep" label="深度" />
            <el-table-column align="center" prop="curveValue" label="值" />
            <el-table-column align="center" prop="unit" label="单位" />
          </el-table>
        </div>

        <div class="curve-data-graph">
          <WellLog style="width: 100%;height: 100%;" ref="WellLogPlotRef" id="WellLogPlot"></WellLog>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  onMounted,
  ref,
  onUnmounted,
  nextTick,
  watch,
  reactive,
  computed,
  defineComponent,
  defineAsyncComponent
} from "vue";
import { ElMessage } from "element-plus";
import * as echarts from "echarts";
import lodash from "lodash";

import { requireImg } from "@/utils/utils";
import { getCurveList, getCurveInfo, getCurveData, getCurveInfoData } from "@/api/curve/curve";
import getImportImage from "@/assets/Well/Import.svg";
import getDeleteImage from "@/assets/Well/Delete.svg";
import WellLog from '@/plugins/WellLog/WellLog.vue';
// const WellLog = defineAsyncComponent(() => import('@/plugins/WellLog/WellLog.vue'));

const WellLogPlotRef = ref()
const windowWidth = ref(window.innerWidth);

onMounted(() => {
  nextTick(() => {
  })

  // 在组件挂载后检查屏幕大小
	// 添加事件监听，以便在屏幕大小变化时更新条件
	window.addEventListener('resize', checkScreenSize);
})
onUnmounted(() => {
	// 清理事件监听器
	window.removeEventListener('resize', checkScreenSize);
	console.log("清理事件监听器")

})

const checkScreenSize = () => {
  //debugger
  windowWidth.value = window.innerWidth
  WellLogPlotRef.value?.FitWindowSize();
 

}

const InitialWellLogSample = () => {
  WellLogPlotRef.value?.initialize();
  WellLogPlotRef.value?.addIndexTrack();
  WellLogPlotRef.value?.addLinearTrack();  
  WellLogPlotRef.value?.InsertSampleData();  
  WellLogPlotRef.value?.clearCurve();
};

const InsertCurveData = (curvename, data,IndexType:string = "depth") => {
  WellLogPlotRef.value?.clearCurve();
  WellLogPlotRef.value?.InsertData(curvename, data[0], data[1],IndexType);
};

defineExpose({
  InitialWellLogSample,
});
const props = defineProps({
  currentRunInfo: {
    type: Object,
    default: () => ({}),
  },
});

const treeProps = {
  label: "name",
  children: "children",
  isLeaf: "leaf",
};

let treeData = [];

interface Tree {
  name: string;
  children?: Tree[];
}
interface Node {
  data: Tree;
  level: number;
}

const state = reactive({
  runInfo: {
    runId: props.currentRunInfo.runId,
    wellboreId: props.currentRunInfo.wellboreId,
    wellId: props.currentRunInfo.wellId,
  },
  tableData: [
    { index: 1, deep: 100, curveValue: 15.2, unit: "m" },
    { index: 2, deep: 200, curveValue: 16.5, unit: "m" },
    { index: 3, deep: 300, curveValue: 17.8, unit: "m" },
    { index: 4, deep: 400, curveValue: 19.1, unit: "m" },
    { index: 5, deep: 500, curveValue: 20.4, unit: "m" },
  ],
  isFold: false,
});

// //树结构渲染
const renderContent = (h, { node, data }) => {
  if (node.level == 1) {
    return h(
      "div",
      {
        class: "el-tree-node__label",
        style:
          "width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 16px;", // 设置父元素的样式
      },
      h("span", { class: "node-label" }, node.label)
    );
  } else if (node.level == 2) {
    return h(
      "div",
      {
        class: "el-tree-node__label",
        style:
          "display: flex;justify-content: space-between;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;color: var(--app-text-color-hover);font-size: 13px;margin-left:-12px", // 设置父元素的样式
      },
      h(
        "span",
        {
          class: "node-label",
          onClick: () => {
            getCurveTableData(data);
          },
        },
        node.label
      ),
      h(
        "div",
        { class: "el-tree-node-children-right" },
        h("img", {
          class: "treeimg",
          onClick: () => {
            handleEdit(data);
          },
          src: `${getImportImage}`,
          style: "vertical-align: middle;margin-right:10px",
        }),
        h("img", {
          class: "treeimg",
          onClick: () => {
            handleRemove(data);
          },
          src: `${getDeleteImage}`,
          style: "vertical-align: middle;margin-right:10px",
        })
      )
    );
  }
};

const loadNode = async (node: Node, resolve: (data: Tree[]) => void) => {
  if (node.level === 0) {
    return resolve(await getListData());
  } else if (node.level === 1) {
    return resolve(await getCurveInfoList(node.data));
  } else {
    return resolve([]);
  }
};

const handleFold = () => {
  state.isFold = !state.isFold;
};
const handleEdit = (data) => {
  console.log(data);
  // 重置功能的实现
};
const getCurveTableData = (data) => {
  console.log(data);
};
const handleRemove = (data) => {
  console.log(data);
};

const getListData = async () => {
  // const params = state.runInfo;
  const params = {
    wellId: "26e08e3ca0514a0e9c4d6911f52ff1f8",
    WellboreId: "641d5816d0544ffe9f79da532452178c",
  };
  const response = await getCurveList(params);
  const curveList = response.data;
  curveList.map((element) => {
    return { ...element, children: [], leaf: false };
  });
  return curveList;
};

const handleNodeClick = async (data) => {
  // 点击
  if (data.mnemonic && data.curveName) {
    try {
      const postdata = {
        wellboreId: data.wellboreId,
        wellId: data.wellId,
        LogSetId: data.logSetId,
        ReturnElements: 4,
        StartTimeIndex: ConvertDateTimeToUTC(data.startTime),
        EndTimeIndex:"2024-11-22T15:30:00+00:00",//ConvertDateTimeToUTC(data.endTime),// 
        StartIndex: 0,
        EndIndex: 500,
        LogCurveHeaders: [{
          Mnemonic: data.mnemonic,
          CurveName: data.curveName,
        }]
      };
      const response = await getCurveData(postdata);
      if (response.msg === "success") {
        const da = response.data[0];
        const rlt = convertCurveData(da.logData,data.indexCurve );
        InsertCurveData(data.curveName, rlt,data.indexCurve);
      }
    } catch (error) {
      console.error('获取曲线信息时出错:', error);
      ElMessage.error('获取曲线信息时出错');
    }
  }
};

const convertCurveData = (curveData: any,IndexType:string = "depth") => {
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

const ConvertDateTimeToUTC= (dateTime :string)=>
{
 
  const dateObj = new Date(dateTime);

  // 将日期对象的时区设置为UTC
  dateObj.setUTCHours(dateObj.getUTCHours() + 8, dateObj.getUTCMinutes(), dateObj.getUTCSeconds(), dateObj.getUTCMilliseconds());

  const isoString = dateObj.toISOString();
  console.log(isoString);
  return isoString;
}

const getCurveInfoList = async (data) => {
  const { logSetId, runId, wellboreId, wellId } = data;
  const params = {
    logSetId,
    runId,
    wellboreId,
    wellId,
  };
  const res = await getCurveInfo(params);
  //const listRes = await getCurveInfoData(params);
  // state.tableData = listRes.data;

  let children = res.data.map((element) => {
    return { ...element, leaf: true, name: element.curveName };
  });
  return children;
};
</script>

<style lang="scss" scoped>
.curve-data {
  display: flex;
}
.curve-data-list {
  width: 15%;
  border: 1px solid #ccc;
}
.is-fold-list {
  display: none;
}
.curve-data-title {
  border-bottom: 1px solid #ccc;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  font-weight: bold;
}
.curve-data-right {
  width: 85%;
  border: 1px solid #ccc;
}

.curve-data-right-all {
  width: 100%;
  border: 1px solid #ccc;
}
.curve-data-content {
  flex: 1;
  display: flex;
}
.curve-data-table {
  padding: 20px;
  width: 65%;
}
.curve-data-right-button {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}
.curve-data-graph {
  width: 20%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
}
.right-icon {
  width: 20px;
  height: 20px;
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}

.chart {
  flex: 1;
  background-color: #f0f0f0; /* 图表背景色 */
  border-radius: 8px; /* 圆角矩形 */
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 4px); /* 确保填充父容器的宽度，内缩2像素 */
  height: calc(100% - 4px); /* 确保填充父容器的高度，内缩2像素 */
  padding: 2px; /* 内缩2像素 */
}

.fold-img {
  margin: 10px;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
  }
}

:deep(.curve-data-table tbody) {
  outline: none !important;
}
</style>
