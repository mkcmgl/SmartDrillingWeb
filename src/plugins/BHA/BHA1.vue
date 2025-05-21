<template>
  <BHA style="width: 100%; height: 100%" ref="BHAPlotRef" id="BHAPlot"></BHA>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, watch, nextTick, onUnmounted } from "vue";
import BHA from "@/plugins/BHA/BHA.vue";
import { ElMessage } from "element-plus";
import { getBHAToolData } from "@/api/well/well";
import demoBHAData from "@/plugins/BHA/BHAData.json";

let BHAPlotRef = ref();

const Init = async () => {
  await BHAPlotRef.value?.initialize();
};

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
  console.log(data);
  // 首先按 temperatureId 排序
  const sortedData = [...data].sort((a, b) => a.bhaNo - b.bhaNo);
  // 用于存储累计长度
  let accumulatedLength = 0;

  const DataArray = sortedData.map((item) => {
    const fromDepth = accumulatedLength; // 当前项的起始深度为之前所有项的长度之和
    accumulatedLength += item.length; // 累加当前项的长度

    const newItem = {
      name: item.toolType, //`${item.toolType}`
      data: {
        description: `${item.toolType}, depth: [${fromDepth} - ${accumulatedLength}], diameter: [${item.innerDiameter} - ${item.outerDiameter}] `,
        toolIcon: item.toolIcon,
        geometry: {
          depth: {
            from: fromDepth, // 起始深度为之前累计的长度
            to: accumulatedLength + 10, // 结束深度为当前累计的长度
          },
          diameter: {
            outer: item.outerDiameter,
            inner: item.innerDiameter,
          },
        },
      },
    };

    return newItem;
  });
  return DataArray;
};
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
      const toolsData = convertData(response.data);
      if (BHAPlotRef.value) {
        BHAPlotRef.value?.InsertData(toolsData);
      }
    }
  } catch (error) {
    ElMessage.error("error WellBoreStructure");
  }
};

onMounted(async () => {
  //   await Init();
  //   if (props.dragData) {
  //     const data = JSON.parse(props.dragData);
  // if (BHAPlotRef.value) {
  //     const toolsData = convertData(demoBHAData);
  //   BHAPlotRef.value?.InsertData(toolsData);
  // }
  //   }
});
// 监听 data 的变化
watch(
  () => props.dragData,
  async (dragData) => {
    await nextTick(); // 等待 DOM 更新
    if (!BHAPlotRef.value) {
      console.error("BHAPlotRef 未初始化");
      return;
    }
    if (dragData) {
      try {
        const newValue = JSON.parse(dragData);
        const newData = newValue[0];
        if (newValue && newData.parentName === "BHA") {
          LoadWellBoreData(newValue);
        }
      } catch (error) {
        console.error("数据解析错误:", error);
      }
    }
  },
  { deep: true, immediate: true }
);
</script>

<style scoped lang="scss"></style>
