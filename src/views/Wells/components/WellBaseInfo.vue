<template>
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
            :class="{
              baseInfoInput: !isDialog,
            }"
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
            v-model="state.form.wellType"
            placeholder="请输入井型"
            @change="handleWellTypeSelect"
            :class="{
              baseInfoInput: !isDialog,
            }"
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
            v-model="state.form.wellShape"
            placeholder="请输入井别"
            @change="handleWellShapeSelect"
            :class="{
              baseInfoInput: !isDialog,
            }"
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
            :class="{
              baseInfoInput: !isDialog,
            }"
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
            :class="{
              baseInfoInput: !isDialog,
            }"
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
            v-model="state.form.region"
            @change="handleRegionSelect"
            placeholder="请输入区域名称"
            clearable
            :class="{
              baseInfoInput: !isDialog,
            }"
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
            v-model="state.form.block"
            placeholder="请输入区块名称"
            @change="handleBlockSelect"
            clearable
            :class="{
              baseInfoInput: !isDialog,
            }"
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
            :class="{
              baseInfoInput: !isDialog,
            }"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <el-form-item label="纬度" prop="geoLatitude">
          <el-input
            v-model="state.form.geoLatitude"
            placeholder="请输入纬度"
            clearable
            :class="{
              baseInfoInput: !isDialog,
            }"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>

  <template v-if="isDialog">
    <div class="dialog-footer">
      <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
      <el-button @click="emits('changeVisible', false)">取消</el-button>
    </div>
  </template>
</template>

<script setup lang="ts" name="wellDialog">
import {
  nextTick,
  watch,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  Ref,
  defineAsyncComponent,
  computed,
  toRefs,
} from "vue";
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
import { useRoute, useRouter } from "vue-router";

// import { useI18n } from 'vue-i18n';

// const { locale, t } = useI18n();
// const store = useDictStore();

// 定义子组件向父组件传值/事件
const emits = defineEmits(["refresh", "changeVisible"]);
interface PropsType {
  visible: boolean;
  isEdit: boolean;
  editRowData: any;
  isDialog: boolean;
  wellTypeList: any;
}

interface OptionValue {
  value: string;
  label: string;
}
const route = useRoute();

const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
  isEdit: false,
  editRowData: {},
  isDialog: false,
  wellTypeList: [],
});
const formRef = ref();

const { editRowData } = toRefs(props);
// const formRef = ref({ ...modelValue.value });
// 定义变量内容
const state = reactive({
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
  };
});

let wellTypeList = ref([]);
let wellShapeList = ref([]);

let countryOptions = reactive([]);
let regionOptions = ref([]);
let blockOptions = ref([]);

// 选择
const getCountryData = async (row: any) => {
  // 查询出所有的国家, 区域, 区块, 然后把数据进行过滤

  //    nextTick(() => {
  const countrys = await getDicCountrytData().then(async (res: any) => {
    //   const countrys = await getDicCountrytData().then(async (res: any) => {
    // const countryOptionsList = res.data.map((country: any) => ({
    countryOptions = res.data.map((country: any) => ({
      value: country.countryCode,
      label: country.name,
    }));
  });
  // countryOptions=countryOptionsList

  console.log(countryOptions);
  //   });
};

const handleCountrySelect = async (value: any) => {
  const params = {
    countryCode: value,
  };
  state.form.countryCode = value;

  const regions = await getDictRegionData(params).then(async (res: any) => {
    regionOptions = res.data.map((region: any) => ({
      value: region.regionCode,
      label: region.name,
    }));
    console.log(res.data, regionOptions);
  });
};

const handleRegionSelect = async (value: any) => {
  const params = {
    regionCode: value,
  };
  state.form.regionCode = value;

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
  formRef.value.validate((valid) => {
    if (!valid) {
      return;
    }
    if (props.isEdit) {
      const { drillData, ...others } = props.editRowData;
      const params = {
        ...others,
        ...state.form,
      };
      updateWell(params).then((res) => {
        emits("changeVisible", false);
        emits("refresh");
      });
    } else {
      createWell(state.form).then((res) => {
        emits("changeVisible", false);
        emits("refresh");
      });
    }
  });
};

watch(
  () => props.visible,
  (val) => {
    console.log(props.editRowData);
    if (val) {
      // if (props.isEdit) {
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
      };
      formRef.value.resetFields();
    }
  },
  { immediate: true }
);

watch(
  () => editRowData.value,
  (val) => {
    console.log(val)
    // const {wellCommonName}=editRowData
    editRowData.value = JSON.parse(JSON.stringify(val))
    console.log('editRowData', editRowData);

    // state.form = {
    //   wellId: editRowData.wellId||'',
    //   wellCommonName: editRowData.wellCommonName||'',
    //   wellType: editRowData.wellType||'',
    //   // wellShape: props.editRowData.wellShape,
    //   // waterDepth: props.editRowData.waterDepth,
    //   // country: props.editRowData.country,
    //   // region: props.editRowData.region,
    //   // block: props.editRowData.block,
    //   // geoLongtude: props.editRowData.geoLongtude,
    //   // geoLatitude: props.editRowData.geoLatitude,
    // };

    // nextTick(() => {
    //   formRef.value.clearValidate();
    // });
  },
  { deep: true, immediate: true }
);
// watch(editRowData, (newVal) => {
//   if (newVal) {
//     console.log('editRowData changed:', newVal);
//  state.form = {
//       wellId: newVal.wellId,
//       wellCommonName: newVal.wellCommonName,
//       wellType: newVal.wellType,
//       // wellShape: props.editRowData.wellShape,
//       // waterDepth: props.editRowData.waterDepth,
//       // country: props.editRowData.country,
//       // region: props.editRowData.region,
//       // block: props.editRowData.block,
//       // geoLongtude: props.editRowData.geoLongtude,
//       // geoLatitude: props.editRowData.geoLatitude,
//     };
//   }
// }, { immediate: true });

onMounted(() => {
  console.log("onMounted, getCountryData", props);
  getCountryData();
  getWellTypeData({ PageIndex: 1, PageSize: 20 });
  getWellShapeData({ PageIndex: 1, PageSize: 20 });

});
</script>
<style scoped>
.baseInfoInput {
  width: 240px;
}
</style>
