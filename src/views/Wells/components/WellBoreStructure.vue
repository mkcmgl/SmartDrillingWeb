<template>
  <div>
    <div class="info-tab-top-button">
      <el-button>导入井身结构</el-button>
      <el-button>新增结构部件</el-button>
    </div>

    <div class="instrument-container">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="index" label="序号" width="70" align="center" />
        <el-table-column prop="instrumentName" label="名称" align="center" />
        <el-table-column prop="type" label="类型" align="center" />
        <el-table-column prop="startMd" label="开始深度(m)" align="center" />
        <el-table-column prop="endMd" label="结束深度(m)" align="center" />
        <el-table-column
          prop="insideDiameter"
          label="内径(in)"
          align="center"
        />
        <el-table-column
          prop="outsideDiameter"
          label="外径(in)"
          align="center"
        />
        <el-table-column
          prop="description"
          label="Description"
          align="center"
        />
        <!-- <el-table-column prop="operation" label="操作" align="center">
            <template #default="scope">
              <span
                class="operation-item-divider"
                @click="handleOperation('edit', scope.row)"
                >编辑</span
              >
              <span
                class="operation-item"
                @click="handleOperation('delete', scope.row)"
                >删除</span
              >
            </template>
          </el-table-column> -->
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
    instrumentName: "仪器1",
    outsideDiameter: "8",
    insideDiameter: "6",
    weight: "10",
    length: "0.4",
    maxTemperature: "190",
    maxStress: "100",
  },
  {
    index: 2,
    outsideDiameter: "8",
    instrumentName: "仪器2",
    insideDiameter: "6",
    weight: "10",
    length: "0.4",
    maxTemperature: "190",
    maxStress: "100",
  },
  {
    index: 3,
    instrumentName: "仪器3",
    outsideDiameter: "8",
    insideDiameter: "6",
    weight: "10",
    length: "0.4",
    maxTemperature: "190",
    maxStress: "100",
  },
  {
    index: 4,
    instrumentName: "仪器3",
    outsideDiameter: "8",
    insideDiameter: "6",
    weight: "10",
    length: "0.4",
    maxTemperature: "190",
    maxStress: "100",
  },
  {
    index: 5,
    instrumentName: "仪器3",
    outsideDiameter: "8",
    insideDiameter: "6",
    weight: "10",
    length: "0.4",
    maxTemperature: "190",
    maxStress: "100",
  },
  {
    index: 6,
    instrumentName: "仪器3",
    outsideDiameter: "8",
    insideDiameter: "6",
    weight: "10",
    length: "0.4",
    maxTemperature: "190",
    maxStress: "100",
  },
]); // 表格数据
</script>

<style scoped lang="scss">
.info-tab-top-button {
  margin: 0 0 20px 20px;
}
.instrument-container {
  padding: 20px;
  border-top: 1px solid #ebebeb;
}

.operation-item-divider {
  cursor: pointer;
  transition: color 0.3s;
  margin-right: 12px;
}

:deep(.instrument-container tbody) {
  outline: none !important;
}
</style>
