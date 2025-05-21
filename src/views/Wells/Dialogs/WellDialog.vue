<template>
  <el-dialog
    :width="900"
    v-model="showDialog"
    :title="dialogTitle"
    class="well-dialog"
    v-loading="state.loading"
    element-loading-text="Loading..."
    element-loading-background="rgba(255, 255, 255, 0.7)"
  >
    <el-form
      ref="formRef"
      :model="state.form"
      size="default"
      :rules="rules"
      label-width="90px"
      style="background-color: #fff; padding: 20px"
    >
      <el-row :gutter="35">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="井名" prop="wellCommonName">
            <el-input
              v-model="state.form.wellCommonName"
              placeholder="请输入井名称"
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
              placeholder="请输入井型"
              @change="handleWellTypeSelect"
              clearable
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
              @change="handleWellShapeSelect"
              clearable
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
              clearable
            >
              <template #append>m</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="国家" prop="country">
            <el-select
              v-model="state.form.country"
              placeholder="请输入国家名称"
              @change="handleCountrySelect"
              clearable
              effect="dark"
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
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="纬度" prop="geoLatitude">
            <el-input
              v-model="state.form.geoLatitude"
              placeholder="请输入纬度"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button
          type="primary"
          @click="handleConfirm"
          :loading="state.submitLoading"
        >
          {{ state.submitLoading ? "提交中..." : "确定" }}
        </el-button>
        <el-button @click="emits('update:visible', false)">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="wellDialog">
import {
  nextTick,
  watch,
  onMounted,
  reactive,
  ref,
  Ref,
  defineAsyncComponent,
  computed,
} from "vue";
import { ElMessage } from "element-plus";

import {
  getDictRegionData,
  getDicCountrytData,
  getDictBlockData,
} from "@/api/dic/dic.js";
import {
  createWell,
  updateWell,
  createRun,
  getWellTypeList,
  getWellShapeList,
} from "@/api/well/well";

// import { useI18n } from 'vue-i18n';

// const { locale, t } = useI18n();
// const store = useDictStore();

// 定义子组件向父组件传值/事件
const emits = defineEmits(["refresh", "update:visible"]);
interface PropsType {
  visible: boolean;
  isEdit: boolean;
  editRowData: any;
}

interface OptionValue {
  value: string;
  label: string;
}
const dialogTitle = computed(() => {
  return props.isEdit ? "编辑井信息" : "新建井信息";
});

const showDialog = computed({
  get() {
    return props.visible;
  },
  set(val) {
    emits("update:visible", val);
  },
});
const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
  isEdit: false,
  editRowData: {},
});
const formRef = ref();
// 定义变量内容
const state = reactive({
  loading: false,
  submitLoading: false,
  form: {
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
const rules = computed(() => {
  return {
    wellCommonName: [{ required: true, message: "井名", trigger: "blur" }],
    wellType: [{ required: true, message: "井型", trigger: "blur" }],
    wellShape: [{ required: true, message: "井名", trigger: "blur" }],
    country: [{ required: true, message: "国家", trigger: "blur" }],
    region: [{ required: true, message: "区域", trigger: "blur" }],
    block: [{ required: true, message: "区块", trigger: "blur" }],
    waterDepth: [{ required: true, message: "地面海拔", trigger: "blur" }],
    geoLongtude: [{ required: true, message: "经度", trigger: "blur" }],
    geoLatitude: [{ required: true, message: "纬度", trigger: "blur" }],
  };
});

let wellTypeList = ref([]);
let wellShapeList = ref([]);

let countryOptions = ref<OptionValue[]>([]);
let regionOptions = ref<OptionValue[]>([]);
let blockOptions = ref<OptionValue[]>([]);

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

const handleConfirm = () => {
  formRef.value.validate(async (valid) => {
    if (!valid) return;

    try {
      state.submitLoading = true;

      if (props.isEdit) {
        const { drillData, ...others } = props.editRowData;
        const params = {
          ...others,
          ...state.form,
        };
        const res = await updateWell(params);
        if (res.msg === "success") {
          handleSuccess("edit");
        }
      } else {
        const res = await createWell(state.form);
        if (res.msg === "success") {
          handleSuccess("create");
        }
      }
    } catch (error) {
      console.error("提交失败:", error);
      ElMessage.error("提交失败，请重试");
    } finally {
      state.submitLoading = false;
    }
  });
};

const handleSuccess = (type) => {
  ElMessage({
    showClose: true,
    message: type === "create" ? "新建成功" : "编辑成功",
    type: "success",
  });
  emits("update:visible", false);
  emits("refresh");
};

watch(
  () => props.visible,
  (val) => {
    if (val) {
      state.loading = false;
      state.submitLoading = false;

      if (props.isEdit) {
        state.form = {
          wellId: props.editRowData.wellId,
          wellCommonName: props.editRowData.wellCommonName,
          wellType: props.editRowData.wellType,
          wellShape: props.editRowData.wellShape,
          waterDepth: props.editRowData.waterDepth,
          country: props.editRowData.country,
          region: props.editRowData.region,
          block: props.editRowData.block,
          geoLongtude: props.editRowData.geoLongtude,
          geoLatitude: props.editRowData.geoLatitude,
          isSubseaPlateform: props.editRowData.isSubseaPlateform,
        };
      }
      nextTick(() => {
        formRef.value.clearValidate();
      });
    } else {
      state.form = {
        wellCommonName: "",
        wellType: "",
        wellShape: "",
        waterDepth: "",
        country: "",
        region: "",
        block: "",
        geoLongtude: "",
        geoLatitude: "",
        field: "field-Test",
      };
      formRef.value.resetFields();
    }
  }
  //   { immediate: true }
);

const initData = async () => {
  try {
    state.loading = true;
    await getCountryData();
    await handleCountrySelect();
    await handleRegionSelect();
    await getWellTypeData({ PageIndex: 1, PageSize: 20 });
    await getWellShapeData({ PageIndex: 1, PageSize: 20 });
  } catch (error) {
    console.error("初始化数据失败:", error);
    ElMessage.error("加载数据失败，请重试");
  } finally {
    state.loading = false;
  }
};
onMounted(() => {
  initData();
});
</script>
<style lang="scss" scoped>
.dialog-footer {
  background-color: #fff !important;
  padding: 0 20px 20px 20px;
}

/* 可选：自定义 loading 样式 */
:deep(.el-loading-mask) {
  background-color: rgba(255, 255, 255, 0.7);
}

:deep(.el-loading-spinner .el-loading-text) {
  color: #333;
}

:deep(.el-loading-spinner .path) {
  stroke: #409eff;
}
</style>
