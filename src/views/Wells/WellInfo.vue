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
              井名称： {{ state.form.wellCommonName }} </span
            >{{ wellId }}
            <span> 钻次数量： {{ runNum }} </span>
          </div>
        </div>
      </div>

      <el-tabs
        v-model="activeName"
        class="base-info-tabs"
        @tab-click="HandleTabClick"
      >
        <el-tab-pane label="基础信息" name="first">
          <div class="save-button">
            <el-button type="primary" @click="handleSave">保存</el-button>
          </div>
          <div class="base-info-title">基本信息</div>
          <div class="base-info-form">
            <el-form
              ref="formRef"
              :model="state.form"
              size="default"
              :rules="rules"
              label-width="90px"
            >
              <el-row :gutter="35">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="井名" prop="wellCommonName">
                    <el-input
                      v-model="state.form.wellCommonName"
                      placeholder="请输入井名称"
                      class="base-info-input"
                      clearable
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item prop="isSubseaPlateform">
                    <el-checkbox v-model="state.form.isSubseaPlateform">
                      是否海上平台
                    </el-checkbox>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="井型" prop="wellType">
                    <el-select
                      effect="dark"
                      v-model="state.form.wellType"
                      @change="areaChange"
                      placeholder="请输入井型"
                      clearable
                      class="base-info-input"
                    >
                      <el-option
                        v-for="role in wellTypeList"
                        :key="role.value"
                        :label="role.label"
                        :value="role.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="井别" prop="wellShape">
                    <el-select
                      effect="dark"
                      v-model="state.form.wellShape"
                      placeholder="请输入井别"
                      clearable
                      class="base-info-input"
                    >
                      <el-option
                        v-for="role in wellShapeList"
                        :key="role.value"
                        :label="role.label"
                        :value="role.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="地面海拔" prop="waterDepth">
                    <el-input
                      v-model="state.form.waterDepth"
                      placeholder="请输入地面海拔"
                      class="base-info-input"
                      clearable
                    >
                      <template #append>m</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="国家" prop="country">
                    <el-select
                      effect="dark"
                      v-model="state.form.country"
                      placeholder="请输入国家名称"
                      @change="handleCountrySelect"
                      class="base-info-input"
                      clearable
                    >
                      <el-option
                        v-for="role in countryOptions"
                        :key="role.value"
                        :label="role.label"
                        :value="role.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="区域" prop="region">
                    <el-select
                      effect="dark"
                      v-model="state.form.region"
                      @change="handleRegionSelect"
                      placeholder="请输入区域名称"
                      class="base-info-input"
                      clearable
                    >
                      <el-option
                        v-for="role in regionOptions"
                        :key="role.value"
                        :label="role.label"
                        :value="role.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="区块" prop="block">
                    <el-select
                      effect="dark"
                      v-model="state.form.block"
                      placeholder="请输入区块名称"
                      @change="handleBlockSelect"
                      clearable
                      class="base-info-input"
                    >
                      <el-option
                        v-for="role in blockOptions"
                        :key="role.value"
                        :label="role.label"
                        :value="role.value"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="经度" prop="geoLongtude">
                    <el-input
                      v-model="state.form.geoLongtude"
                      placeholder="请输入经度"
                      class="base-info-input"
                      clearable
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="纬度" prop="geoLatitude">
                    <el-input
                      v-model="state.form.geoLatitude"
                      placeholder="请输入纬度"
                      class="base-info-input"
                      clearable
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
          <div class="base-info-title">作业信息</div>
          <div class="base-info-form">
            <el-form
              ref="formRef"
              :model="state.form"
              size="default"
              :rules="rules"
              label-width="90px"
            >
              <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="开始深度" prop="startMd">
                    <el-input
                      v-model="state.form.startMd"
                      clearable
                      class="base-info-input"
                    >
                      <template #append>m</template>
                    </el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="结束深度" prop="endMd">
                    <el-input
                      v-model="state.form.endMd"
                      clearable
                      class="base-info-input"
                    >
                      <template #append>m</template>
                    </el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="开始时间" prop="startDatetime">
                    <el-input
                      v-model="state.form.startDatetime"
                      class="base-info-input"
                      clearable
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="结束时间" prop="endDatetime">
                    <el-input
                      v-model="state.form.endDatetime"
                      class="base-info-input"
                      clearable
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="作业单位" prop="bhaStatus">
                    <el-input
                      v-model="state.form.bhaStatus"
                      class="base-info-input"
                      clearable
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                  <el-form-item label="作业者" prop="bhaObjective">
                    <el-input
                      v-model="state.form.bhaObjective"
                      class="base-info-input"
                      clearable
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="井身结构" name="second">
          <WellBoreStructure :wellId="wellId"></WellBoreStructure>
        </el-tab-pane>
        <el-tab-pane label="井眼轨迹" name="井眼轨迹">
          <Trajectory source="well" ref="TrajectoryRef"></Trajectory>
        </el-tab-pane>
        <el-tab-pane label="地层数据" name="curveData"> </el-tab-pane>
        <el-tab-pane label="文件数据" name="fileData">
          <FileData></FileData>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  getWellInfoById,
  updateWell,
  getWellTypeList,
  getWellShapeList,
} from "@/api/well/well";
import {
  getDictRegionData,
  getDicCountrytData,
  getDictBlockData,
} from "@/api/dic/dic.js";

import { onMounted, ref, reactive, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import FileData from "./components/FileData.vue";
import CurveData from "./components/CurveData.vue";
import Trajectory from "./components/Trajectory.vue";
import WellBoreStructure from "./components/WellBoreStructure.vue";
import { Handle } from "@int/geotoolkit/controls/editing/Handle";

const route = useRoute();

const router = useRouter();

interface OptionValue {
  value: string;
  label: string;
}
const activeName = ref("first");
const loading = ref(true);
let wellTypeList = ref([]);
let wellShapeList = ref([]);
const formRef = ref();
const TrajectoryRef = ref();

const runNum = route.query.runNum;
let countryOptions = ref<OptionValue[]>([]);
let regionOptions = ref<OptionValue[]>([]);
let blockOptions = ref<OptionValue[]>([]);
const state = reactive({
  form: {
    // drillName: "",
    // holeSize: "",
    // InstrumentType: "",
    // serverType: "",
    // entryPurpose: "",
    // pulseCount: "",
    // pulseFrequency: "",
    wellCommonName: "",
    wellType: "",
    wellShape: "",
    waterDepth: "",
    country: "",
    countryCode: "",
    region: "",
    regionCode: "",
    block: "",
    blockCode: "",
    geoLongtude: "",
    geoLatitude: "",
    field: "field-Test",
  },
});
// let editRowData = ref({});
const getWellInfo = async () => {
  loading.value = true;
  const params = {
    wellId: route.query.wellId,
  };
  try {
    const res = await getWellInfoById(params);
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
    updateWell(state.form).then((res) => {
      if (res.msg === "success") {
        ElMessage({
          showClose: true,
          message: "保存成功",
          type: "success",
        });
        loading.value = false;

        getWellInfo();
      }
    });
  });
};
// 选择
const getCountryData = async (row: any) => {
  // 查询出所有的国家, 区域, 区块, 然后把数据进行过滤
  const countrys = await getDicCountrytData().then(async (res: any) => {
    countryOptions = res.data.map((country: any) => ({
      value: country.countryCode,
      label: country.name,
    }));
  });
};
const handleCountrySelect = async (value: any) => {
  const params = {
    countryCode: value,
  };
  state.form.countryCode = value;
  state.form.region = null;
  state.form.regionCode = null;
  state.form.block = null;
  state.form.blockCode = null;
  const regions = await getDictRegionData(params).then(async (res: any) => {
    regionOptions = res.data.map((region: any) => ({
      value: region.regionCode,
      label: region.name,
    }));
  });
};

const HandleTabClick = (tab: any, event: any) => {
  console.log("当前选中的标签名称:", tab.props.name);
  if (tab.props.name === "tab1") {
    // 执行 Tab 1 的逻辑
  } else if (tab.props.name === "井眼轨迹") {
    nextTick(() => {
      nextTick(() => {
        TrajectoryRef.value?.SetWellInfo(state.form);
        TrajectoryRef.value?.InitialPlotSample(); // 调用 CurveData 组件的 InitialWellLogSample 方法
        TrajectoryRef.value?.LoadTracjectoryData(); // 调用 CurveData 组件的 InitialWellLogSample 方法
      });
    });
  }
};

const handleRegionSelect = async (value: any) => {
  const params = {
    regionCode: value,
  };
  state.form.regionCode = value;
  state.form.block = null;
  state.form.blockCode = null;
  const regions = await getDictBlockData(params).then(async (res: any) => {
    blockOptions = res.data.map((block: any) => ({
      value: block.blockCode,
      label: block.name,
    }));
  });
};
const handleBlockSelect = async (value: any) => {
  state.form.blockCode = value;
};

const handleWellTypeSelect = async (value: any) => {
  state.form.wellType = value;
};

const handleWellShapeSelect = async (value: any) => {
  state.form.wellShape = value;
};

const getWellTypeData = async (params) => {
  const res = await getWellTypeList(params).then(async (res: any) => {
    wellTypeList = res.data.map((wellType: any) => ({
      value: wellType.order,
      label: wellType.name,
    }));
  });
};

const getWellShapeData = async (params) => {
  const res = await getWellShapeList(params).then(async (res: any) => {
    wellShapeList = res.data.map((wellShape: any) => ({
      value: wellShape.order,
      label: wellShape.name,
    }));
  });
};
const goBack = () => {
  router.push({
    path: "/main/Wells",
  });
};

const initData = async () => {
  await getCountryData();
  await handleCountrySelect();
  await handleRegionSelect();
  await getWellTypeData({ PageIndex: 1, PageSize: 20 });
  await getWellShapeData({ PageIndex: 1, PageSize: 20 });
  await getWellInfo();
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

.well-name {
}

.base-info-input {
  width: 240px;
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

:deep(.el-tabs__nav-scroll) {
  padding-left: 20px !important;
  padding-top: 10px !important;
}
</style>
