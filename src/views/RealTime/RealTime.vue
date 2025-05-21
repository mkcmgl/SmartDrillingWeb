<template>
  <div class="main-container">
    <!-- 顶部 -->
    <TopBar />

    <!-- 顶部结束 -->

    <!-- 井名称title部分 -->
    <div class="real-time-well">
      <div class="well-title">
        <div v-for="(item, index) in wellTitle" :key="index">
          <span class="text-overbold">{{ item.title }}：</span>
          <span>{{ state.form[item.value] }}</span>
        </div>
      </div>
      <div>
        <span class="text-overbold"> 当前模板： </span>
        <el-select v-model="value" placeholder="Select" style="width: 140px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <!-- 内容 -->
    <div class="container-content">
      <div class="content-left">
        <div class="well-info">
          <el-row :gutter="10" class="text-overbold">
            <el-col
              :xs="1"
              :sm="2"
              :md="4"
              :lg="6"
              :xl="6"
              v-for="(item, index) in wellInfo"
              :key="index"
            >
              <div class="info">
                <div>{{ item.title }}</div>
                <div class="info-value">{{ state.form[item.value] }}</div>
                {{ item.unit }}
              </div>
            </el-col>
          </el-row>
        </div>

        <div class="drilling">
          <div class="drilling-table">
            <el-table :data="state.tableData">
              <el-table-column
                prop="md"
                label="MD(m)"
                min-width="50"
                align="center"
              />
              <el-table-column
                prop="inc"
                label="INC(dega)"
                min-width="65"
                align="center"
              />
              <el-table-column
                prop="azi"
                label="AZI(dega)"
                min-width="65"
                align="center"
              />
              <el-table-column
                prop="tvd"
                label="TVD(m)"
                min-width="55"
                align="center"
              />
              <el-table-column
                prop="east"
                label="EAST(m)"
                min-width="65"
                align="center"
              />
              <el-table-column
                prop="north"
                label="NORTH(m)"
                min-width="70"
                align="center"
              />
              <el-table-column
                prop="dsl"
                label="DSL(degam)"
                min-width="80"
                align="center"
              />
            </el-table>
          </div>
          <div class="drilling-status">
            <div class="drilling-status-title">钻进状态</div>
            <div class="drilling-status-value">Drilling</div>
            <div class="drilling-status-img">
              <img src="@/assets/Well/RealTimeDrilling.svg" alt="" />
            </div>
          </div>
          <div class="drilling-rss">
            RSS
            <div class="drilling-rss-circle">
              <div class="drilling-rss-line">
                <div
                  class="line-set"
                  v-for="(item, index) in drillingRssList"
                  :key="index"
                  :style="item.style"
                >
                  <span class="line-set-text" :style="item.valueStyle"
                    >{{ item.value }}
                  </span>
                  <div class="line-set-background"></div>
                  <div
                    class="line-set-data"
                    :style="{ height: (item.lineLength * 65) / 100 + 'px' }"
                  ></div>
                </div>

                <!-- <div class="line-set" style="bottom: 65px; left: 13px">
                  <span class="line-set-text" style="left: -3px"> 0 </span>
                  <div class="line-set-background"></div>
                  <div
                    class="line-set-data"
                    :style="{ height: (state.line1Length * 65) / 100 + 'px' }"
                  ></div>
                </div>
                <div
                  class="line-set"
                  style="transform: rotate(120deg); left: 55px; bottom: 60px"
                >
                  <span class="line-set-text" style="left: -10px"> 120 </span>
                  <div class="line-set-background"></div>
                  <div
                    class="line-set-data"
                    :style="{ height: (state.line2Length * 65) / 100 + 'px' }"
                  ></div>
                </div>
                <div
                  class="line-set"
                  style="transform: rotate(240deg); bottom: 125px; left: -27px"
                >
                  <span class="line-set-text" style="left: -10px"> 240 </span>
                  <div class="line-set-background"></div>
                  <div
                    class="line-set-data"
                    :style="{ height: (state.line3Length * 65) / 100 + 'px' }"
                  ></div>
                </div> -->
              </div>
            </div>
          </div>
        </div>

        <div class="curve-content">
          <!-- 井眼轨迹和俯视图,剖面图 -->
          <div class="curve-content-track">
            <div class="curve-content-img curve-content-left">
              <img src="@/assets/Well/WellProfile.png" alt="" />
            </div>
            <div class="curve-content-img curve-content-left">
              <img src="@/assets/Well/WellPlanForm.png" alt="" />
            </div>
          </div>
          <div class="curve-content-track">
            <div class="curve-content-img curve-content-right">
              <div>井眼轨迹</div>
              <img src="@/assets/Well/Well3DDrawing.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <!-- 曲线部分 -->
      <div class="content-right">
        <div class="log-well-data">
          <div class="well-data-title">
            <div>录井数据</div>
            <div>
              <el-select
                v-model="curveValue"
                placeholder="Select"
                style="width: 100px"
              >
                <el-option
                  v-for="item in curveData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-dropdown>
                <span class="well-data-select-icon">•••</span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <div class="time-curve">
            <!-- <img src="@/assets/Well/Curve.svg" alt="" /> -->
            <div>
              <WellLog
                style="width: 100%; height: 100%"
                ref="WellLogPlotRef"
                id="WellLogPlot"
              ></WellLog>
              <!-- <div id="depthChart" style="width: 100%; height: 800px"></div> -->
            </div>
          </div>
        </div>
        <div class="log-well-data">
          <div class="well-data-title">
            <div>测井数据</div>
            <div>
              <el-select
                v-model="curveLogValue"
                placeholder="Select"
                style="width: 100px"
              >
                <el-option
                  v-for="item in curveData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-dropdown>
                <span class="well-data-select-icon">•••</span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
          <div class="time-curve">
            <WellLog
              style="width: 100%; height: 100%"
              ref="WellLogPlotRef1"
              id="WellLogPlot"
            ></WellLog>
          </div>
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
} from "vue";
import * as echarts from "echarts";
import lodash from "lodash";
import TopBar from "../TopBar.vue";
import WellLog from "@/plugins/WellLog/WellLog.vue";
import Plot2D from "@/plugins/Plot2D/Plot2D.vue"; // 根据实际路径调整
import WellTrajectory from "@/plugins/WellTrajectory/WellTrajectory.vue"; // 根据实际路径调整

const wellTitle = ref([
  { title: "井名称", value: "wellCommonName", index: 1 },
  { title: "区域", value: "countryName", index: 2 },
  { title: "区块", value: "blockName", index: 3 },
  { title: "钻次", value: "runNumber", index: 4 },
  { title: "井眼直径", value: "holeSize", index: 5 },
  { title: "BHA", value: "bha", index: 6 },
]);
const wellInfo = ref([
  { title: "井深", value: "wellDepth", unit: "m", index: 1 },
  { title: "钻深", value: "runDepth", unit: "m", index: 2 },
  { title: "迟到井深", value: "lateWellDepth", unit: "in", index: 3 },
  { title: "大钩高度", value: "hookHeight", unit: "m", index: 4 },
  { title: "钻压", value: "bitWeight", unit: "MPa", index: 5 },
  { title: "大钩载荷", value: "hookLoad", unit: "MPa", index: 6 },
  { title: "机械转速", value: "mechanicalSpeed", unit: "m/h", index: 7 },
  { title: "转盘转速", value: "rotarySpeed", unit: "RPM", index: 8 },
  { title: "钻时", value: "runTime", unit: "min/m", index: 9 },
  { title: "泵注压力", value: "pumpingPressure", unit: "MPa", index: 10 },
  { title: "井底温度", value: "wellTemperature", unit: "℃", index: 11 },
  { title: "流体密度", value: "fluidDensity", unit: "g/cm³", index: 12 },
]);

const drillingRssList = ref([
  {
    index: 1,
    style: "bottom: 65px; left: 13px",
    value: "0",
    lineLength: 60,
    valueStyle: "left: -3px",
  },
  {
    index: 2,
    style: "transform: rotate(120deg); left: 54px; bottom: 60px",
    value: "120",
    lineLength: 30,
    valueStyle: "left: -10px",
  },
  {
    index: 3,
    style: "transform: rotate(240deg); bottom: 125px; left: -27px",
    value: "240",
    lineLength: 90,
    valueStyle: "left: -10px",
  },
]);

const state = reactive({
  form: {
    wellCommonName: "Well022",
    countryName: "四川",
    blockName: "宜宾",
    runNumber: "Run100",
    holeSize: "12.25in",
    bha: "MWD",
    wellDepth: "1000",
    runDepth: "1000",
    lateWellDepth: "999.1",
    hookHeight: "6",
    bitWeight: "20",
    hookLoad: "111",
    mechanicalSpeed: "20",
    rotarySpeed: "888",
    runTime: "3",
    pumpingPressure: "3",
    wellTemperature: "89",
    fluidDensity: "1.59",
  },
  tableData: [
    {
      md: "850",
      inc: "2",
      azi: "3",
      tvd: "4",
      east: "5",
      north: "6",
      dsl: "7",
    },
    {
      md: "880",
      inc: "2",
      azi: "3",
      tvd: "4",
      east: "5",
      north: "6",
      dsl: "7",
    },
    {
      md: "910",
      inc: "2",
      azi: "3",
      tvd: "4",
      east: "5",
      north: "6",
      dsl: "7",
    },
    {
      md: "940",
      inc: "2",
      azi: "3",
      tvd: "4",
      east: "5",
      north: "6",
      dsl: "7",
    },
    {
      md: "970",
      inc: "2",
      azi: "3",
      tvd: "4",
      east: "5",
      north: "6",
      dsl: "7",
    },
    {
      md: "1000",
      inc: "2",
      azi: "3",
      tvd: "4",
      east: "5",
      north: "6",
      dsl: "7",
    },
  ],
});

const value = ref("option1");
const options = [
  {
    value: "option1",
    label: "综合面板",
  },
];
const curveValue = ref("1");
const curveLogValue = ref("1");

const curveData = [
  {
    value: "1",
    label: "1:10",
  },
  {
    value: "1`",
    label: "1:100",
  },
  {
    value: "2",
    label: "1:200",
  },
  {
    value: "3",
    label: "1:500",
  },
  {
    value: "4",
    label: "1:800",
  },
  {
    value: "5",
    label: "1:1000",
  },
];

const WellLogPlotRef = ref();
const WellLogPlotRef1 = ref();
const WellTrajectoryRef = ref(); //eleTable是页面ref后面对应的名字
const VerticalPlotRef = ref(); //eleTable是页面ref后面对应的名字
const HoriPlotRef = ref(); //eleTable是页面ref后面对应的名字

const InitialWellLogSample = () => {
  WellLogPlotRef.value?.initialize();
  WellLogPlotRef.value?.addIndexTrack();
  WellLogPlotRef.value?.addLinearTrack();
  WellLogPlotRef.value?.InsertSampleData();

  WellLogPlotRef1.value?.initialize();
  WellLogPlotRef1.value?.addIndexTrack();
  WellLogPlotRef1.value?.addLinearTrack();
  WellLogPlotRef1.value?.InsertSampleData();
};

onMounted(() => {
  InitialWellLogSample();
  // 初始化深度曲线图表
  const depthChart = echarts.init(document.getElementById("depthChart")!);

  // 深度数据
  const depthData = [
    { md: 200, tvd: 0 },
    { md: 100, tvd: 100 },
    { md: 400, tvd: 150 },
    { md: 200, tvd: 200 },
    { md: 300, tvd: 250 },
    { md: 200, tvd: 300 },
    { md: 100, tvd: 350 },
    { md: 200, tvd: 400 },
    { md: 300, tvd: 450 },
    { md: 250, tvd: 500 },
    { md: 300, tvd: 550 },
  ];

  // 配置图表
  const option = {
    grid: {
      left: "10%",
      right: "10%",
      top: "10%",
      bottom: "10%",
    },
    xAxis: {
      show: false,
      type: "value",
    },
    yAxis: {
      show: false,
      type: "value",
      inverse: true, // 使Y轴从上到下
    },
    series: [
      {
        name: "深度",
        type: "line",
        data: depthData.map((item) => [item.md, item.tvd]),
        symbol: "none", // 不显示数据点
        lineStyle: {
          width: 2,
          color: "#8ebb49",
        },
      },
    ],
  };

  // 设置图表配置
  depthChart.setOption(option);

  // 监听窗口大小变化，调整图表大小
  window.addEventListener("resize", () => {
    depthChart.resize();
  });

  // 清理事件监听
  onUnmounted(() => {
    window.removeEventListener("resize", () => {
      depthChart.resize();
    });
  });
});
</script>
<style lang="scss" scoped>
.main-container {
  height: 100%;
}
.real-time-well {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  border: 1px solid #ccc;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  background-color: #fff;
  font-size: 18px;

  & > .well-title {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
}

.container-content {
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-top: none;
  & > .content-left {
    width: 46%;
    & .well-info {
      border: 1px solid #ccc;
      padding: 0 10px 10px 10px;
      margin: 10px;
      background-color: #f2f2f2;
    }
    & .info {
      border: 1px solid #ccc;
      height: 45px;
      line-height: 45px;
      border-radius: 5px;
      padding: 0 10px;
      margin-top: 10px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      & .info-value {
        color: #366db9;
      }
    }
    & .drilling {
      display: flex;
      justify-content: space-between;
      margin: 10px;
      height: 200px;
      & .drilling-table {
        border: 1px solid #ccc;
        background-color: #f2f2f2;
        padding: 10px;
        width:calc(80% - 200px) & :deep(.el-table__header) {
          font-size: 12px;
        }
        & :deep(.el-table tr) {
          font-size: 12px;
        }
        & :deep(.el-table .cell) {
          padding: 0;
        }
        & :deep(.el-table td, .el-table th) {
          padding: 0;
          border: none;
        }
        & :deep(.el-table th) {
          padding: 0;
          color: #333;
          background-color: #f2f2f2;
          border-left: 1px solid #ccc;
          border-top: 1px solid #ccc;
        }
        & :deep(.el-table th:last-child) {
          border-right: 1px solid #ccc;
        }
      }
      & .drilling-status {
        width: 18%;
        border: 1px solid #ccc;
        background-color: #f2f2f2;
        margin: 0 1%;
        & .drilling-status-title {
          text-align: center;
          margin: 10px;
        }
        & .drilling-status-value {
          color: #366db9;
          font-weight: bold;
          margin-left: 10px;
        }
        & .drilling-status-img {
          width: 50px;
          margin: 20px auto;
        }
      }
      & .drilling-rss {
        width: 200px;
        border: 1px solid #ccc;
        background-color: #f2f2f2;

        & .drilling-rss-circle {
          width: 160px;
          height: 160px;
          background-image: url("@/assets/Well/Circle.svg");
          background-size: contain;
          margin: auto;
          & .drilling-rss-line {
            width: 30px;
            height: 30px;
            border: 1px solid #ccc;
            border-radius: 50%;
            position: relative;
            top: 65px;
            left: 65px;
            box-sizing: border-box;
            & .line-set {
              position: relative;
              height: 65px;
              width: 1px;
            }
            & .line-set-text {
              position: absolute;
              font-size: 12px;
              transform: scale(0.8);
              top: -16px;
              color: #366db9;
            }
            & .line-set-background {
              background: linear-gradient(to right, #ccc, #ccc);
              width: 2px;
              position: absolute;
              height: 65px;
            }
            & .line-set-data {
              background: linear-gradient(to right, #8ebb49, #8ebb49);
              width: 6px;
              position: absolute;
              bottom: 0;
              left: -2px;
            }
          }
        }
      }
    }
  }
}

.curve-content {
  margin: 10px;
  background-color: #f2f2f2;
  display: flex;
  border: 1px solid #ccc;
  & .curve-content-track {
    width: 50%;
    & .curve-content-img {
      padding: 10px;
      border: 1px solid #ccc;
      margin: 10px;
      background-color: #fff;
    }
    & .curve-content-left {
      height: 200px;
      & img {
        width: 100%;
        height: 100%;
        margin: 10px 0;
      }
    }
    & .curve-content-right {
      font-size: 14px;
      height: 430px;
      & img {
        width: 100%;
        height: 100%;
        padding: 20px 0;
        box-sizing: border-box;
      }
    }
  }
}

.content-right {
  width: 54%;
  display: flex;

  & .log-well-data {
    width: 50%;
    background-color: #fff;
    margin: 10px 10px 10px 0;
    border: 1px solid #ccc;
    & .time-curve {
      width: 100%;
      height: 800px;
    }
  }
  & .well-data-title {
    background-color: #f2f2f2;
    width: 100%;
    height: 40px;
    padding: 0 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    & .well-data-select-icon {
      font-size: 18px;
      font-weight: bold;
      line-height: 30px;
      margin-left: 5px;
      cursor: pointer;
      outline: none;
    }
  }
}

.text-overbold {
  font-weight: bold;
}
/* 穿透样式以覆盖默认的点击表格时出现的黑色边框 */
:deep(.drilling-table tbody) {
  outline: none !important;
}
</style>
