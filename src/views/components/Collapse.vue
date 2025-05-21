<template>
  <div class="collapse-container">
    <div v-for="(item, index) in items" :key="index" class="collapse-item">
      <div
        class="collapse-header"
        @click="togglePanel(index)"
        :class="{ active: activeItems.includes(index) }"
      >
        <div class="collapse-header-item">
          <img
            :src="requireImg(item.img)"
            style="width: 16px; height: 16px"
            alt=""
          />
          <span class="title">{{ item.title }}</span>
        </div>

        <img
          :src="
            activeItems.includes(index)
              ? requireImg('DashBoard/arrow-down.svg')
              : requireImg('DashBoard/arrow-right.svg')
          "
          alt=""
        />
        <!-- <span
          class="arrow"
          :class="{ 'arrow-down': activeItems.includes(index) }"
        >
          ▶
        </span> -->
      </div>
      <div
        class="collapse-content"
        :class="
          activeItems.includes(index) ? 'content-active' : 'content-close'
        "
      >
        <!--  :class="{ 'content-active': activeItems.includes(index) }" :style="{ maxHeight: activeItems.includes(index) ? contentHeights[index] + 'px' : '0' }" -->
        <slot :name="item.name">
          {{ item.content }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { requireImg } from "@/utils/utils";

interface CollapseItem {
  title: string;
  name: string;
  content?: string;
}

interface Props {
  items: CollapseItem[];
  modelValue?: number[];
}

const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue", "change"]);

const activeItems = ref<number[]>(props.modelValue || []);
const contentHeights = ref<number[]>([]);

onMounted(() => {
  // 计算每个面板内容的实际高度
  const panels = document.querySelectorAll(".collapse-content");
  panels.forEach((panel, index) => {
    console.log(panel, panel.scrollHeight);
    contentHeights.value[index] = panel.scrollHeight;
  });
});

const togglePanel = (index: number) => {
  const position = activeItems.value.indexOf(index);
  if (position > -1) {
    activeItems.value.splice(position, 1);
  } else {
    activeItems.value.push(index);
  }
  emit("update:modelValue", activeItems.value);
  emit("change", activeItems.value);
};
</script>

<style scoped>
.collapse-item {
  border-bottom: 1px solid var(--borderColor);
}

.collapse-item:last-child {
  border-bottom: none;
}

.collapse-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.collapse-header-item {
  display: flex;
  align-items: center;
}

/* .collapse-header:hover {
  background-color: var(--menuHoverBg);
} */

/* .collapse-header.active {
  background-color: var(--menuHoverBg);
} */

.title {
  font-size: 14px;
  font-weight: bold;
  margin-left: 4px;
}

/* .arrow {
  transition: transform 0.3s;
  font-size: 12px;
}

.arrow-down {
  transform: rotate(90deg);
} */

/* .collapse-content {
  overflow: hidden;
  transition: max-height 0.3s ease-out; 
 background-color: var(--contentBg);
} */

.content-active {
  /* padding: 0 10px; */
  display: block;
}
.content-close {
  display: none;
}

.collapse-container {
  flex: 1;
  overflow-y: auto;
  height: calc(100% - 50px); /* 减去 dashboard-left 的高度 */
  color: #eee;
}

/* 添加滚动条样式 */
.collapse-container::-webkit-scrollbar {
  width: 4px;
}

.collapse-container::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.collapse-container::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
