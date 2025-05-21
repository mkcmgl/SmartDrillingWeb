<template>
  <WellBore
    style="width: 100%; height: 100%"
    ref="WellBorePlotRef"
    id="WellBorePlot"
  ></WellBore>
</template>

<script lang="ts" setup>
import {
  computed,
  ref,
  onMounted,
  watch,
  nextTick,
  onUnmounted,
  reactive,
  inject,
  getCurrentInstance,
} from "vue";
import WellBore from "@/plugins/WellBore/WellBore.vue";
import { ElMessage } from "element-plus";
import { getWellBoreData } from "@/api/well/well";
import { EventTarget, SetEventTarget } from "@/plugins/websocket/index.js";
const { proxy } = getCurrentInstance();

let WellBorePlotRef = ref();
let currentWellBoreData = null; // 存储当前数据
const Init = async () => {
  await WellBorePlotRef.value?.initialize();
};
const state = reactive({
  currentData: null,
});

const props = defineProps({
  dragData: {
    default: "",
    type: String,
  },
});
const data = computed(() => {
  return props.dragData;
});

const convertData = (data) => {
  let DataArray = [];
  data.forEach((item) => {
    const newItem = {
      name: item.type.toLowerCase(),
      data: {
        description: item.description,
        geometry: {
          depth: { from: item.topDepth, to: item.bottomDepth },
          diameter: {
            outer: item.outerDiameter,
            inner: item.interDiameter,
          },
        },
      },
    };
    DataArray.push(newItem);

    return { ...newItem };
  });
  return DataArray;
};
const LoadWellBoreData = async (data) => {
  if (!data || data.length === 0) return;
  const { wellId } = data[0];
  const params = {
    wellId,
  };

  try {
    const response = await getWellBoreData(params);
    if (response?.msg === "success") {
      state.currentData = data;
      const wellBoreData = convertData(response.data);
      currentWellBoreData = wellBoreData; // 存储数据
      if (WellBorePlotRef.value) {
        WellBorePlotRef.value?.InsertData(wellBoreData);
      }
    }
  } catch (error) {
    ElMessage.error("error WellBoreStructure");
  }
};
const loadWebSocketEvent = () => {
  let target = new EventTarget();
  SetEventTarget(target);
  target.addHandler("MessageEvent", (e) => {
    const { message } = e;
    const messageData = JSON.parse(message.Body);
    if (
      messageData.witmlmltranstype === "Geometry" &&
      state.currentData[0].wellId === messageData.wellid
    ) {
      LoadWellBoreData([...state.currentData]);
      console.log("我收到消息了井身结构需要更新", messageData);
    }
  });
};
onMounted(async () => {
  //   await Init();
  //   if (props.dragData) {
  //     const data = JSON.parse(props.dragData);
  // if (WellBorePlotRef.value) {
  //   WellBorePlotRef.value?.InsertData();
  // }
  //   }
  loadWebSocketEvent();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  // 清理监听器
  window.removeEventListener("resize", handleResize);
});

// 监听窗口大小变化
const handleResize = () => {
  if (WellBorePlotRef.value && currentWellBoreData) {
    WellBorePlotRef.value?.InsertData(currentWellBoreData);
  }
};
const paneData = inject("paneData");

// 监听 data 的变化
watch(
  () => paneData.value,
  (newData, oldData) => {
    try {
      const newValue = newData ? JSON.parse(newData["dragData"]) : [];
      const oldValue = oldData ? JSON.parse(oldData["dragData"]) : [];
      if (newValue && newValue.length) {
        let data;
        if (oldValue && oldValue.length) {
          data = oldValue[0];
        } else {
          data = newValue[0];
        }

        if (data && data.name === "WellBoreStructure") {
          proxy.$appTools.dragDataIsSuccess(true, newData, oldData);
          LoadWellBoreData([data]);
        }
      }
    } catch (error) {
      console.error("数据解析错误:", error);
    }
  },
  { deep: true, immediate: true }
);
</script>

<style scoped lang="scss"></style>
