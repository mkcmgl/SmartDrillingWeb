<template>
  <el-dialog
    :width="900"
    v-model="showDialog"
    :title="dialogTitle"
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
          <el-form-item label="井名称" prop="wellCommonName">
            <el-input v-model="state.form.wellCommonName" disabled></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="钻次名称" prop="runNumber">
            <el-input
              v-model="state.form.runNumber"
              placeholder="请输入钻次名称"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="井眼尺寸" prop="holeSize">
            <el-input
              v-model="state.form.holeSize"
              placeholder="请输入井眼尺寸"
              clearable
            >
              <template #append>in</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="计划深度" prop="planMd">
            <el-input
              v-model="state.form.planMd"
              placeholder="请输入计划深度"
              clearable
            >
              <template #append>in</template>
            </el-input>
          </el-form-item>
        </el-col>
        <!-- <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="仪器串类型" prop="InstrumentType">
            <el-select
              v-model="state.form.InstrumentType"
              placeholder="请输入仪器串类型"
              clearable
            >
              <el-option
                v-for="role in InstrumentTypeList"
                :key="role.id"
                :label="role.name"
                :value="role.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="服务类型" prop="serverType">
            <el-select
              v-model="state.form.serverType"
              placeholder="请输入服务类型"
              clearable
            >
              <el-option
                v-for="role in serverTypeList"
                :key="role.id"
                :label="role.name"
                :value="role.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="脉冲计数" prop="pulseCount">
            <el-input
              v-model="state.form.pulseCount"
              placeholder="请输入脉冲计数"
              clearable
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="下入目的" prop="entryPurpose">
            <el-select
              v-model="state.form.entryPurpose"
              placeholder="请输入下入目的"
              clearable
            >
              <el-option
                v-for="role in entryPurposeList"
                :key="role.code"
                :label="role.name"
                :value="role.code"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-form-item label="脉冲频率" prop="pulseFrequency">
            <el-input
              v-model="state.form.pulseFrequency"
              placeholder="请输入脉冲频率"
              clearable
            ></el-input>
          </el-form-item>
        </el-col> -->
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

<script setup lang="ts" name="drillDialog">
import { nextTick, watch } from "vue";
import { reactive, ref, Ref, defineAsyncComponent, computed } from "vue";
import { ElMessage } from "element-plus";

// import { useDictStore } from '/@/stores/dict';
import { updateRun, createRun } from "@/api/well/well";
// import {
//   getDicCountrytData,
//   getDictRegionData,
//   getDictBlockData,
//   // getBlockDictionaryByAreaCode,
// } from "@/api/dic/dic";
// import { useI18n } from 'vue-i18n';

// const { locale, t } = useI18n();
// const store = useDictStore();

// const { areaDict, nationDict } = storeToRefs(store);

// 定义子组件向父组件传值/事件
const emits = defineEmits(["refresh", "update:visible"]);
interface PropsType {
  visible: boolean;
  isEdit: boolean;
  editRowData: any;
}
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

const dialogTitle = computed(() => {
  return props.isEdit ? "编辑钻次信息" : "新建钻次信息";
});

// const showAreaInput = ref(false);
// 定义变量内容
const formRef = ref();
const state = reactive({
  loading: false,
  submitLoading: false,
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
const rules = computed(() => {
  return {
    runNumber: [{ required: true, message: "钻次名称", trigger: "blur" }],
    holeSize: [{ required: true, message: "井眼尺寸", trigger: "blur" }],
  };
});

let InstrumentTypeList = ref([
  {
    id: 1,
    name: "Mud Motor",
  },
  {
    id: 2,
    name: "RSS",
  },
]);
let serverTypeList = ref([
  {
    id: 1,
    code: "DD",
    name: "DD",
  },
  {
    id: 2,
    code: "MWD",
    name: "MWD",
  },
  {
    id: 3,
    code: "DD.MWD",
    name: "DD.MWD",
  },
]);

let entryPurposeList = ref([
  { entryPurpose: "drill", code: "Drill", name: "Drill" },
  { entryPurpose: "wipe", code: "Wipe", name: "Wipe" },
  { entryPurpose: "both", code: "Drill and Wipe", name: "Drill and Wipe" },
]);

const handleConfirm = () => {
  formRef.value.validate(async (valid) => {
    if (!valid) return;

    try {
      state.submitLoading = true;
      if (props.isEdit) {
        const res = await updateRun(state.form);
        if (res.msg === "success") {
          handleSuccess("edit");
        }
      } else {
        const res = await createRun(state.form);
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
    message: type === "create" ? "新建钻次成功" : "编辑钻次成功",
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

      state.form = {
        runId: props.isEdit ? props.editRowData.runId : "",
        wellId: props.editRowData.wellId,
        wellCommonName: props.editRowData.wellCommonName,
        wellboreId: props.editRowData.wellId,
        runNumber: props.isEdit ? props.editRowData.runNumber : "",
        holeSize: props.isEdit ? props.editRowData.holeSize : "",
        startMd: props.isEdit ? props.editRowData.startMd : null,
        endMd: props.isEdit ? props.editRowData.endMd : null,
        planMd: props.isEdit ? props.editRowData.planMd : "",
        startDatetime: props.isEdit ? props.editRowData.startDatetime : null,
        endDatetime: props.isEdit ? props.editRowData.endDatetime : null,
        bhaStatus: props.isEdit ? props.editRowData.bhaStatus : null,
        tripReason: props.isEdit ? props.editRowData.tripReason : null,
        bhaObjective: props.isEdit ? props.editRowData.bhaObjective : null,
        runNumString: props.isEdit ? props.editRowData.runNumString : null,
        tubularId: props.isEdit ? props.editRowData.tubularId : null,
      };
      // if(props.isEdit){
      // nextTick(() => {
      //   formRef.value.clearValidate();
      // });
      // }
    }
  }
);
</script>
<style lang="scss" scoped>
.dialog-footer {
  background-color: #fff !important;
  padding: 0 20px 20px 20px;
}

/* 自定义 loading 样式 */
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
