<template>
  <div class="text-container">
    <div class="all-bha" ref="allBhaRef">
      <div
        v-for="item in state.BHAData"
        :key="item.tubularToolId"
        class="bha-item"
      >
        <img :src="`data:image/png;base64,${item.toolIcon}`" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
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
import { getBHAToolData } from "@/api/well/well";
import { EventTarget, SetEventTarget } from "@/plugins/websocket/index.js";
const { proxy } = getCurrentInstance();

const props = defineProps({
  dragData: {
    default: "abc",
    type: String,
  },
});
const data = computed(() => {
  return props.dragData;
});
const state = reactive({
  BHAData: [],
  currentData: [],
});
const allBhaRef = ref<HTMLDivElement | null>(null);
let resizeObserver: ResizeObserver | null = null;

const LoadWellBoreData = async (data) => {
  if (!data || data.length === 0) return;
  const { wellId, tubularId } = data[0];
  const params = {
    wellId,
    tubularId,
  };

  try {
    const response = await getBHAToolData(params);
    if (response?.msg === "success") {
      state.currentData = data;
      const sortedData = [...response.data].sort((a, b) => a.bhaNo - b.bhaNo);
      state.BHAData = sortedData;
      await nextTick();
      applyScale();
    }
  } catch (error) {
    ElMessage.error("error WellBoreStructure");
  }
};
const applyScale = () => {
  if (!allBhaRef.value) return;
  const container = allBhaRef.value.parentElement;
  if (!container) return;

  const containerHeight = container.clientHeight;
  const allBhaHeight = allBhaRef.value.scrollHeight;

  if (allBhaHeight > containerHeight) {
    const scale = containerHeight / allBhaHeight;
    allBhaRef.value.style.transform = `scale(${scale})`;
  } else {
    allBhaRef.value.style.transform = "scale(1)";
  }
};

// 添加 resize 监听器
const observeResize = () => {
  if (!allBhaRef.value) return;
  const container = allBhaRef.value.parentElement;
  if (!container) return;

  resizeObserver = new ResizeObserver(() => {
    applyScale();
  });

  resizeObserver.observe(container);
};
const loadWebSocketEvent = () => {
  let target = new EventTarget();
  SetEventTarget(target);
  target.addHandler("MessageEvent", (e) => {
    const { message } = e;
    const messageData = JSON.parse(message.Body);
    if (
      messageData?.witmlmltranstype === "BHA" &&
      state.currentData[0]?.wellId === messageData?.wellid
    ) {
      LoadWellBoreData([...state.currentData]);
      console.log("我收到消息了BHA需要更新", messageData);
    }
  });
};
const paneData = inject("paneData");

watch(
  () => paneData.value,
  async (newData, oldData) => {
    try {
      const newValue = JSON.parse(newData["dragData"]);
      // const oldValue = JSON.parse(oldData["dragData"]);
      const data = newValue[0];
      if (newValue && data.parentName === "BHA") {
        proxy.$appTools.dragDataIsSuccess(true, newData, oldData);
        await LoadWellBoreData(newValue);
      }
      // await LoadWellBoreData(newVal);
    } catch (error) {
      console.error("数据解析错误:", error);
    }
  },
  { deep: true, immediate: true }
);

onMounted(() => {
  observeResize();
  loadWebSocketEvent();
});

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>

<style scoped lang="scss">
.text-container {
  background-color: #000;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* 添加相对定位 */
}

.all-bha {
  position: absolute; /* 绝对定位 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: top center; /* 设置缩放原点 */
  box-sizing: border-box;
}

.bha-item {
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
}
</style>
