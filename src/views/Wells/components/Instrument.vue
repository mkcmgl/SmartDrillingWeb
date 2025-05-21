<template>
  <div class="instrument">
    <div class="info-tab-top-button">
      <el-button>导入仪器串</el-button>
      <!-- <el-button>新增仪器</el-button>
      <el-button>删除仪器</el-button> -->
    </div>
    <div class="instrument-container">
      <el-table :data="tableData" border stripe style="width: 100%">
        <el-table-column prop="index" label="#" width="50" align="center" />
        <el-table-column
          prop="instrumentName"
          label="仪器名称"
          align="center"
        />
        <el-table-column
          prop="outsideDiameter"
          label="外径(in)"
          align="center"
        />
        <el-table-column
          prop="insideDiameter"
          label="内径(in)"
          align="center"
        />
        <el-table-column prop="weight" label="重量(kg)" align="center" />
        <el-table-column prop="length" label="长度(m)" align="center" />
        <el-table-column
          prop="maxTemperature"
          label="最高温度(℃)"
          align="center"
        />
        <el-table-column
          prop="maxStress"
          label="最大压力(MPa)"
          align="center"
        />
        <el-table-column prop="index" label="顺序" width="70" align="center" />
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

      <!-- <div>
        <div class="instrument-picture">
          <img src="@/assets/Well/Instrument.png" alt="仪器串" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getWellInstrumentData } from "@/api/well/well";

import { onMounted, ref, reactive } from "vue";
import { ElMessage } from "element-plus";

const loading = ref(true);
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

const getInstrumentData = async () => {
  loading.value = true;
  const params = {
    PageIndex: 1,
    PageSize: 20,
  };
  try {
    const res = await getWellInstrumentData(params);
    if (res) {
      const { data } = res;
      tableData = data;
    }
  } catch (error) {
    loading.value = false;
  } finally {
    loading.value = false;
  }
};

const handleOperation = (action, row) => {};

const initData = async () => {
  await getInstrumentData();
};

onMounted(() => {
  initData();
});
</script>

<style lang="scss" scoped>
.instrument-container {
  padding: 20px;
  border-top: 1px solid #ccc;
}

.operation-item-divider {
  cursor: pointer;
  transition: color 0.3s;
  margin-right: 12px;
}
.info-tab-top-button {
  margin: 0 0 20px 20px;
}
.instrument-picture {
  width: 500px;
  border-left: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

:deep(.instrument-container tbody) {
  outline: none !important;
}
</style>
