<template>
  <div>
    <div class="tab-content" v-loading="loading">
      <div class="info-top">
        <div class="info-back-button">
          <el-button type="text" @click="goBack">
            <img src="@/assets/Well/Back.svg" alt="返回" class="info-back" />
          </el-button>
        </div>

        <div class="well-Info-title">
          <div>
            <span style="margin-right: 40px">
              井名称： {{ wellCommonName }} </span>{{ wellId }}
            <span> 当前钻次： {{ state.form.runNumber }} </span>
          </div>
        </div>
      </div>
      <el-tabs v-model="activeName" class="base-info-tabs" @tab-click="handleTabClick">
        <el-tab-pane label="钻次信息" name="first">
          <div class="save-button">
            <el-button type="primary" @click="handleSave">保存</el-button>
          </div>
          <div class="base-info-title">基本信息</div>
          <div class="base-info-form">
            <el-form ref="formRef" :model="state.form" size="default" :rules="rules" label-width="90px">
              <el-row :gutter="35">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="井名称" prop="wellCommonName">
                    <el-input v-model="wellCommonName" disabled class="base-info-input"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="钻次名称" prop="runNumber">
                    <el-input v-model="state.form.runNumber" placeholder="请输入钻次名称" class="base-info-input"
                      clearable></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="井眼尺寸" prop="holeSize">
                    <el-input v-model="state.form.holeSize" placeholder="请输入井眼尺寸" class="base-info-input" clearable>
                      <template #append>in</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="计划深度" prop="planMd">
                    <el-input v-model="state.form.planMd" placeholder="请输入计划深度" class="base-info-input" clearable>
                      <template #append>in</template>
                    </el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <div class="base-info-title">作业信息</div>
          <div class="base-info-form">
            <el-form ref="formRef" :model="state.form" size="default" :rules="rules" label-width="90px">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="开始深度" prop="startMd">
                    <el-input v-model="state.form.startMd" clearable class="base-info-input">
                      <template #append>m</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="结束深度" prop="endMd">
                    <el-input v-model="state.form.endMd" clearable class="base-info-input">
                      <template #append>m</template>
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="开始时间" prop="startDatetime">
                    <el-input v-model="state.form.startDatetime" class="base-info-input" clearable></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="结束时间" prop="endDatetime">
                    <el-input v-model="state.form.endDatetime" class="base-info-input" clearable></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="作业单位" prop="bhaStatus">
                    <el-input v-model="state.form.bhaStatus" class="base-info-input" clearable></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="作业者" prop="bhaObjective">
                    <el-input v-model="state.form.bhaObjective" class="base-info-input" clearable></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane :laze="true" name="钻次轨迹" label="钻次轨迹">
          <Trajectory ref="TrajectoryRef" source="run"></Trajectory>
        </el-tab-pane>
        <el-tab-pane name="仪器串" label="仪器串">
          <Instrument></Instrument>
        </el-tab-pane>
        <el-tab-pane :laze="true" name="曲线信息" label="曲线信息">
          <CurveData :currentRunInfo="state.form" ref="WellLogReF"></CurveData>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getDrillById, updateRun } from "@/api/well/well";
import { onMounted, ref, watch, onUnmounted, nextTick, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import CurveData from "./components/CurveData.vue";
import Instrument from "./components/Instrument.vue";
import Trajectory from "./components/Trajectory.vue";

const route = useRoute();

const router = useRouter();
const wellCommonName = route.query.wellCommonName;

const activeName = ref("first");
const loading = ref(true);

const formRef = ref();

const WellLogReF = ref();
const TrajectoryRef = ref();


const state = reactive({
  form: {
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
  },
});

let operationContent = ref("");

const getDrillInfo = async () => {
  loading.value = true;
  const params = {
    wellId: route.query.wellId,
  };
  try {
    const res = await getDrillById(params);
    if (res) {
      state.form = res.data;
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const handleSave = () => {
  loading.value = true;
  formRef.value.validate((valid) => {
    if (!valid) {
      return;
    }
    updateRun(state.form).then((res) => {
      if (res.msg === "success") {
        ElMessage({
          showClose: true,
          message: "保存成功",
          type: "success",
        });
        loading.value = false;

        getDrillInfo();
      }
    });
  });
};
const goBack = () => {
  router.push({
    path: "/main/Wells",
  });
};

const initData = async () => {
  await getDrillInfo();
};

const handleTabClick = async (tab: any, event: any) => {
  console.log('当前选中的标签名称:', tab.props.name);
  if (tab.props.name === 'tab1') {
    // 执行 Tab 1 的逻辑
  } else if (tab.props.name === '钻次轨迹') {
    nextTick(() => {
      nextTick(() => {
        TrajectoryRef.value?.SetWellInfo(state.form);
        TrajectoryRef.value?.InitialPlotSample(); // 调用 CurveData 组件的 InitialWellLogSample 方法
        TrajectoryRef.value?.LoadTracjectoryData(); // 调用 CurveData 组件的 InitialWellLogSample 方法
      })
    })
  } else if (tab.props.name === '曲线信息') {
    nextTick(() => {
      nextTick(() => {
        WellLogReF.value?.InitialWellLogSample(); // 调用 CurveData 组件的 InitialWellLogSample 方法
      })
    })
  }
};

onMounted(() => {
  initData();
});
</script>

<style scoped>

.tab-content {
  border-radius: 10px;
  /* 设置圆角 */

  background-color: #fff;
  /* 设置背景颜色 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  /* 添加阴影效果 */
  height: 100%;
}

.well-Info-title {
  display: flex;
  justify-content: space-between;
  padding: 8px 0 0 20px;
}

.base-info-tabs .el-tabs__item {
  font-size: 16px;
}

.base-info-tabs .base-info-title {
  margin: 20px;
  font-size: 16px;
}

.base-info-form {
  padding: 20px;
  border: 1px solid #ccc;
  margin: 20px;
  border-radius: 10px;
}

.info-top {
  display: flex;
  border-bottom: 1px solid #ccc;
  height: 50px;
  line-height: 38px;
}

.info-back-button {
  width: 40px;
  /* border-right: 1px solid #ccc; */
}

.info-back {
  width: 30px;
  height: 30px;
}

.save-button {
  border-bottom: 1px solid #ccc;
  margin: 0 20px 20px 20px;
  padding-bottom: 20px;
}

.base-info-input {
  width: 240px;
}

:deep(.el-tabs__nav-scroll) {
  padding-left: 20px !important;
  padding-top: 10px !important;
}
</style>
