<template>
  <div class="curve-data">
    <div :class="state.isFold ? 'is-fold-list' : 'curve-data-list'">
      <div class="curve-data-title">
        <span style="font-size: 16px">{{
          source === "well" ? "井轨迹" : "钻次轨迹"
        }}</span>
      </div>
      <el-tree
        style="max-width: 600px"
        :data="currentData"
        node-key="id"
        default-expand-all
        :render-content="renderContent"
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
        <el-button>图表配置</el-button>
      </div>

      <div class="curve-data-content">
        <div class="curve-data-picture">
          <div class="curve-content-title">剖面图</div>
          <Survey2d ref="CrossPlotRef"></Survey2d>
          <div class="curve-content-title" style="border-top: 1px solid #ccc">俯视图</div>
          <Survey2d ref="TopPlotRef"></Survey2d>
        </div>

        <div class="curve-data-graph">
          <div class="curve-content-title" style="border-left: 1px solid #ccc">
            3D图
          </div>
          <div class="curve-content-drawing-container">
            <WellTrajectory ref="WellTrajectoryRef" id="WellTrajectory"></WellTrajectory>
          </div>
        </div>
      </div>
    </div>
  </div>
  <WellTrajectoryDialog v-model:visible="showDialog"></WellTrajectoryDialog>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, ref, reactive, nextTick } from "vue";
import { requireImg } from "@/utils/utils";
import WellTrajectoryDialog from "../Dialogs/WellTrajectoryDialog.vue";
import { getCurveList, getCurveInfo, getCurveData, getCurveInfoData, getTrajectoryData } from "@/api/curve/curve";

import getImportImage from "@/assets/Well/Import.svg";
import getViewImage from "@/assets/Well/View.svg";
import Plot2D from '@/plugins/Plot2D/Plot2D.vue';
// import Survey2D from '@/plugins/Survey2D/survey2D.vue';
import WellTrajectory from '@/plugins/WellTrajectory/WellTrajectory.vue';
import { tr } from "element-plus/es/locales.mjs";
// import Survey2d from "@/plugins/Plot2D/Survey2D.vue";
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

const WellTrajectoryRef = ref()  //eleTable是页面ref后面对应的名字
const CrossPlotRef = ref()  //eleTable是页面ref后面对应的名字
const TopPlotRef = ref()  //eleTable是页面ref后面对应的名字

const WellInfo = reactive({
  runId: "",
  wellboreId: "",
  wellId: "",
  wellCommonName: "",
  runNumber: "",
  holeSize: "",
  startMd: null,
  endMd: null,
  planMd: null,
  startDatetime: null,
  endDatetime: null,
  bhaStatus: null,
  tripReason: null,
  bhaObjective: null,
  runNumString: null,
  tubularId: null,
});

let trajectoryDataArray = ref<TrajectoryData[]>([]);


// "depth": 78.61000061035156,
// "incation": 0.14000000059604645,
// "azimuth": 127.04000091552734,
// "verthDepth": 78.60750140528208,
// "northShift": 0.2695002778995931,
// "eastShift": -0.4569620009262564,
// "vscLength": 0.6089426230385151,
// "closeDistance": 0.5305135908518139,
// "closeAngle": 300.5306238164607,
// "dogLeg": 0.7855963223930074,
// "build": -0.4845656460725735,
// "turn": 188.3668468036233,
// "toolFace": 350.8322846453548


onMounted(() => {


});



const InitialPlotSample = async () => {
  // TopPlotRef.value?.createPlot2D();
  WellTrajectoryRef.value?.initialize();
  CrossPlotRef.value?.initializeChart();
  CrossPlotRef.value?.setXAxisTitle("TVD[m]");
  CrossPlotRef.value?.setYAxisTitle("VS[m]");
  TopPlotRef.value?.initializeChart();
  // WellTrajectoryRef.value?.insertSampleData();

};

const convertTrajectoryData = (trajectoryDataArray: TrajectoryData[]) => {
  const DataArray = [];
  const northArray = [];
  const eastArray = [];
  const tvdArrray = [];
  const vsArray = [];
  trajectoryDataArray.forEach((item: any) => {
    northArray.push(item.northShift);
    eastArray.push(item.eastShift);
    tvdArrray.push(item.verthDepth);
    vsArray.push(item.vscLength);
  });

  DataArray.push(northArray);
  DataArray.push(eastArray);
  DataArray.push(tvdArrray);
  DataArray.push(vsArray);
  return DataArray;
};


const LoadTracjectoryData = async () => {

  if (WellInfo.wellId && WellInfo.runId) {
    try {
      const postdata = {
        wellId: "a87a4939d0c242a29b830ab9ef9d684c",//WellInfo.wellId,
        runId: "c2e88bfef3e243719bcfb18019de60c7",//WellInfo.runId,
      };

      const response = await getTrajectoryData(postdata);//{wellId:WellInfo.wellId,runId:WellInfo.runId}
      if (response.msg === "success") {
        const data = response.data.map((item: TrajectoryData) => ({
          depth: item.depth,
          incation: item.incation,
          azimuth: item.azimuth,
          verthDepth: item.verthDepth,
          northShift: item.northShift,
          eastShift: item.eastShift,
          vscLength: item.vscLength,
          closeDistance: item.closeDistance,
          closeAngle: item.closeAngle,
          dogLeg: item.dogLeg,
          build: item.build,
          turn: item.turn,
          toolFace: item.toolFace,
        }));
        //DataArray.push(northArray);
        // DataArray.push(eastArray);
        // DataArray.push(tvdArrray);
        // DataArray.push(vsArray);
        trajectoryDataArray.value = data;
        const traData3D = convertTrajectoryData(trajectoryDataArray.value);
        if (WellTrajectoryRef.value) {
          WellTrajectoryRef.value?.insertData(traData3D[0], traData3D[1], traData3D[2]);
        }
        if (CrossPlotRef.value) {
          CrossPlotRef.value?.addXYData(traData3D[0], traData3D[1]);
        }
        if (TopPlotRef.value) {
          //TopPlotRef.value?.InsertData(traData3D[3], traData3D[2]);
        }

      }
    } catch (error) {
      console.error('获取曲线信息时出错:', error);
    }
  }
};


const SetWellInfo = (data: any) => {
  WellInfo.wellId = data.wellId;
  WellInfo.wellCommonName = data.wellCommonName;
  WellInfo.wellboreId = data.wellboreId;
  WellInfo.runId = data.runId;
  WellInfo.runNumber = data.runNumber;
  WellInfo.holeSize = data.holeSize;
  WellInfo.startMd = data.startMd;
  WellInfo.endMd = data.endMd;
  WellInfo.planMd = data.planMd;
  WellInfo.startDatetime = data.startDatetime;
  WellInfo.endDatetime = data.endDatetime;
  WellInfo.bhaStatus = data.bhaStatus;
  WellInfo.tripReason = data.tripReason;
  WellInfo.bhaObjective = data.bhaObjective;
  WellInfo.runNumString = data.runNumString;
  WellInfo.tubularId = data.tubularId;
};

defineExpose({
  InitialPlotSample,
  LoadTracjectoryData,
  SetWellInfo,
});

interface PropsType {
  source: string;
}
const props = withDefaults(defineProps<PropsType>(), {
  source: "",
});
const WellData = ref([
  // {
  //   id: 10,
  //   label: "Well01",
  //   children: [
  {
    id: 1,
    label: "Design Trajectory",
  },
  {
    id: 2,
    label: "Actual Trajectory",
  },
  // ],
  // },
]);
const RunData = ref([
  // {
  // id: 20,
  // label: "Run001",
  // children: [
  // {
  //   id: 1,
  //   label: "Design Trajectory",
  // },
  {
    id: 2,
    label: "Actual Trajectory",
  },
  //   ],
  // },
]);
const currentData = ref(props.source === "well" ? WellData : RunData);
let showDialog = ref(false);

const state = reactive({
  isFold: false,
});
// //树结构渲染
const renderContent = (h, { node, data }) => {
  // if (node.level == 1 && props.source === "run") {
  //   return h(
  //     "div",
  //     {
  //       class: "el-tree-node__label",
  //       style:
  //         "width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 16px;", // 设置父元素的样式
  //     },
  //     h("span", { class: "node-label" }, node.label)
  //   );
  // } else if
  // (node.level == 2 || props.source === "well") {
  // if( props.source === "well") {
  return h(
    "div",
    {
      class: "el-tree-node__label",
      style:
        "display: flex;justify-content: space-between;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;color: var(--app-text-color-hover);font-size: 13px;margin-left:-12px", // 设置父元素的样式
    },
    h(
      "div",
      { class: "" },
      h("input", {
        type: "checkbox",
        onClick: (value) => {
          handleChangeCheckBox(data, value);
        },
        class: "node-label",
        checked: node.label === "Actual Trajectory",
      }),
      h("span", { class: "node-label" }, node.label)
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
        style: "margin-right:10px",
      }),
      h("img", {
        class: "treeimg",
        onClick: () => {
          handleView(data);
        },
        src: `${getViewImage}`,
        style: "margin-right:10px",
      })
    )
  );
  // }
};
const handleFold = () => {
  state.isFold = !state.isFold;
};
const handleChangeCheckBox = (data, value) => {
  // 设计轨迹和实际轨迹点击调用接口查询表格数据
  console.log(data, value);
};
const handleEdit = (data) => {
  console.log(data);
};

const handleView = (data) => {
  showDialog.value = true;
};
</script>

<style lang="scss" scoped>
.curve-data {
  display: flex;
}
.curve-data-list {
  width: 10%;
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
  width: calc(100% - 10%);
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
.curve-data-picture {
  width: 50%;
}
.curve-content-title {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: rgb(242 242 242);
  font-weight: bold;
}
.curve-content-img {
  width: 750px;
  height: 400px;
}
.curve-content-drawing-container {
  border-left: 1px solid #ccc;
  padding: 50px;
}
.curve-content-drawing {
  width: 100%;
  height: 100%;
}
.curve-data-right-button {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}
.fold-img {
  margin: 10px;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
  }
}
.curve-data-graph {
  width: 50%;
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
</style>
