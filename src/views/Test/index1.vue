<template>
  <template_design
    ref="templateDesign"
    :headerItems="headerItems"
    :data="data"
    @save="save"
  >
    <template #left>
      <div class="header">
        <div
          v-for="item in headerItems"
          :key="item.id"
          class="header-item"
          draggable="true"
          @dragstart="handleHeaderDragStart($event, item)"
        >
          {{ item.name }}
        </div>

        <button @click="exportSS">导出</button>
        <button @click="importSS">导入</button>
        <input
          type="file"
          style="display: none"
          ref="fileInput"
          @change="importLayout($event.target.files[0])"
        />
      </div>
    </template>
  </template_design>
</template>

<script setup>
import template_design from "@/component/template_design.vue";
import { ref, defineAsyncComponent } from "vue";
// 生成唯一ID
const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// 获取指定路径下所有的vue文件，包括多层嵌套的
const components = import.meta.glob("/src/views/Test/components/**/*.vue", {
  eager: false,
});

// 提取组件名称并创建列表
const headerItems = ref(
  Object.keys(components).map((filePath) => {
    // 获取文件名（不包括路径和扩展名）
    const componentName = filePath.split("/").pop()?.replace(".vue", "") || "";
    // 返回动态导入的组件以及它的注册名
    return {
      id: generateUUID(),
      name: componentName,
      component: defineAsyncComponent(() => import(filePath)),
    };
  })
);
const data = ref();
const templateDesign = ref();
const exportSS = () => {
  templateDesign.value.save();
};
const fileInput = ref();
const importSS = () => {
  fileInput.value.click();
};
const handleHeaderDragStart = (event, item) => {
  templateDesign.value.handleHeaderDragStart(event, item);
};
const save = (val) => {
  console.log(val);
};
const importLayout = (file) => {
  templateDesign.value.importLayout(file);
};
</script>

<style scoped>
/* Styles go here */
.header {
  display: flex;
  padding: 10px;
  background: #fff;
  margin-bottom: 10px;
}

.header-item {
  padding: 8px 16px;
  margin-right: 10px;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: move;
  user-select: none;
  transition: background-color 0.3s ease;
  &:hover {
    background: #119efc;
  }
  &:active {
    background: #d5d5d5;
  }
}
</style>
