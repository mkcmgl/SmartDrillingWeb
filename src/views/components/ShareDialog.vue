<template>
  <el-dialog
    v-model="showDialog"
    :title="title"
    width="600"
    align-center
    destroy-on-close
  >
    <div style="padding: 20px">
      <div>SELECT USERS：</div>
      <div class="dialog-content">
        <div
          v-for="(item, index) in selectValue"
          :key="index"
          class="dialog-item"
        >
          <div>{{ item }}</div>
        </div>
      </div>
      <div class="dialog-select">
        <el-select
          v-model="selectValue"
          multiple
          filterable
          remote
          reserve-keyword
          placeholder="Please enter a keyword"
          :remote-method="remoteMethod"
          :loading="loading"
          style="width: 240px"
          effect="dark"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <!-- <el-select
          v-model="selectValue"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择"
          style="width: 100%"
        >
      </el-select>  -->
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="success" @click="handleConfirm()">
          {{ confirmText }}
        </el-button>
        <el-button type="info" @click="showDialog = false">CANCEL</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="ShareDialog">
import { watch, onMounted } from "vue";
import { ref, computed, reactive } from "vue";
import { ElMessage } from "element-plus";

// 定义子组件向父组件传值/事件
const emits = defineEmits(["confirm", "update:visible"]);
interface PropsType {
  visible: boolean;
  title?: String;
  content?: String;
  confirmText?: String;
}
interface ListItem {
  value: string;
  label: string;
}

const list = ref<ListItem[]>([]);
const options = ref<ListItem[]>([]);
const selectValue = ref<string[]>([]);
const loading = ref(false);
const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
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
  title: null,
  content: null,
  confirmText: null,
});

const handleConfirm = () => {
  if (selectValue.value.length === 0) {
    return ElMessage({
      showClose: true,
      message: "请选择用户",
      type: "info",
    });
  } else {
    emits("confirm", selectValue.value);
    showDialog.value = false;
  }
};
const remoteMethod = (query: string) => {
  if (query) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      options.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase());
      });
    }, 200);
  } else {
    options.value = [];
  }
};
onMounted(() => {
  list.value = states.map((item) => {
    return { value: `value:${item}`, label: `label:${item}` };
  });
});
watch(
  () => props.visible,
  (val) => {
    if (!val) {
      selectValue.value = [];
    }
  }
);
</script>
<style scoped>
.dialog-content {
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
}
.dialog-item {
  color: #eee;
  padding: 0 6px;
  text-align: center;
  border-radius: 5px;
  margin: 5px 15px 5px 0;
  background-color: #525252;
  height: 30px;
  line-height: 30px;
  display: flex;
}
</style>
