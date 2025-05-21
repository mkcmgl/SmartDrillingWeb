<template>
  <div>
    <el-upload
      ref="uploadRef"
      class="info-tab-top-button"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :auto-upload="false"
    >
      <template #trigger>
        <el-button>添加文件</el-button>
      </template>
      <!-- 
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template> -->
    </el-upload>
    <div class="file-data-table">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="index" label="序号" width="180" />
        <el-table-column prop="fileName" label="文件名称" width="180" />
        <el-table-column prop="fileFormat" label="文件格式" />
        <el-table-column prop="fileMemory" label="文件内存" />
        <el-table-column prop="lastUpdateTime" label="最近更新时间" />
        <el-table-column prop="lastUpdateUser" label="最近更新用户" />
        <el-table-column prop="operation" label="操作">
          <template #default="scope">
            <span
              class="operation-item-divider"
              @click="handleDrillOperation('edit', scope.row)"
              >查看</span
            >
            <span
              class="operation-item"
              @click="handleDrillOperation('delete', scope.row)"
              >删除</span
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getWellList } from "@/api/well/well";
import { onMounted, ref } from "vue";

let tableData = ref([
  {
    index: 1,
    fileName: "文件1",
    fileFormat: "xsl",
    fileMemory: "10Mb",
    lastUpdateTime: "2023-09-15 14:30",
    lastUpdateUser: "张三",
  },
  {
    index: 2,
    fileName: "文件2",
    fileFormat: "doc",
    fileMemory: "124KB",
    lastUpdateTime: "2023-09-15 14:30",
    lastUpdateUser: "张三",
  },
  {
    index: 3,
    fileName: "文件3",
    fileFormat: "docx",
    fileMemory: "100KB",
    lastUpdateTime: "2023-09-15 14:30",
    lastUpdateUser: "张三",
  },
]); // 表格数据

const loading = async () => {
  const rlt = await getWellList().then(async (res) => {});
};
</script>

<style scoped>
.operation-item-divider {
  cursor: pointer;
  transition: color 0.3s;
  margin-right: 12px;
}
.info-tab-top-button {
  margin: 0 0 20px 20px;
}
.file-data-table {
  margin: 20px;
}
:deep(.file-data-table tbody) {
  outline: none !important;
}
</style>
