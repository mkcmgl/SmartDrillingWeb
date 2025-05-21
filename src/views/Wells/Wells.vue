<template>
  <div>
    <div class="tab-content">
      <div class="search-bar">
        <el-input
          placeholder="搜索井"
          v-model="state.pageData.wellCommonName"
          style="width: 300px"
        ></el-input>

        <el-input
          placeholder="区域搜索"
          style="width: 300px"
          v-model="state.pageData.regionName"
        ></el-input>

        <el-input
          placeholder="区块搜索"
          v-model="state.pageData.blockName"
          style="width: 300px"
        ></el-input>

        <el-button type="primary" @click="search">搜索</el-button>
        <el-button @click="handleAddClick">新建井</el-button>
      </div>
      <el-table
        :data="state.pageData.data"
        class="table-container"
        v-loading="loading"
        @expand-change="handleExpandChange"
        row-key="wellId"
      >
        <el-table-column type="expand">
          <template #default="scope">
            <!-- <el-table
              :data="scope.row.drillData"
              v-loading="!scope.row.loadDetails"
              row-key="runId"
            > -->
            <el-table :data="scope.row.drillData" row-key="runId">
              <el-table-column
                type="index"
                label="钻次序号"
                align="center"
                width="200"
              ></el-table-column>
              <el-table-column
                prop="runNumber"
                label="钻次名称"
              ></el-table-column>
              <el-table-column
                prop="planMd"
                label="钻次深度(m)"
              ></el-table-column>
              <el-table-column prop="endDatetime" label="钻次时间">
                <template #default="scope">
                  {{
                    scope.row && scope.row.endDatetime
                      ? moment(scope.row.endDatetime).format(
                          "YYYY-MM-DD HH:mm:ss"
                        )
                      : null
                  }}
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template #default="scope">
                  <span
                    class="operation-item-divider"
                    @click="handleDrillOperation('edit', scope.row)"
                    >编辑</span
                  >
                  <span
                    class="operation-item"
                    @click="handleDrillOperation('delete', scope.row)"
                    >删除</span
                  >
                  <el-divider direction="vertical" />
                  <span
                    class="operation-item"
                    @click="handleDrillOperation('drillTimeMsg', scope.row)"
                    >钻次信息</span
                  >
                </template>
              </el-table-column>
              <el-table-column prop="state" label="状态" width="100">
                <template #default="scope">
                  <img
                    :src="getWellStateImage(scope.row)"
                    alt="状态"
                    class="well-state-image"
                  />
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column type="index" align="center" width="60" label="序号">
        </el-table-column>
        <el-table-column
          prop="wellCommonName"
          label="井名称"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="geoLongtude"
          label="开始深度(m)"
        ></el-table-column>
        <el-table-column
          prop="geoLongtude"
          label="结束深度(m)"
        ></el-table-column>
        <el-table-column prop="regionName" label="区域"></el-table-column>
        <el-table-column prop="blockName" label="区块"></el-table-column>
        <el-table-column prop="modifyDate" label="最近更新时间">
          <template #default="scope">
            {{
              scope.row.modifyDate
                ? moment(scope.row.modifyDate).format("YYYY-MM-DD HH:mm:ss")
                : null
            }}
          </template>
        </el-table-column>
        <el-table-column
          prop="modifyUserId"
          label="最近更新用户"
        ></el-table-column>
        <el-table-column label="操作" width="360">
          <template #default="scope">
            <span
              class="operation-item-divider"
              @click="handleWellOperation('edit', scope.row)"
              >编辑</span
            >
            <span
              class="operation-item"
              @click="handleWellOperation('delete', scope.row)"
              >删除</span
            >
            <el-divider direction="vertical" />

            <span
              class="operation-item"
              @click="handleWellOperation('createDrill', scope.row)"
              >新建钻次</span
            >
            <el-divider direction="vertical" />
            <span
              class="operation-item-divider"
              @click="handleWellOperation('singleWellMsg', scope.row)"
              >单井信息</span
            >
            <span
              class="operation-item"
              @click="handleWellOperation('statistics', scope.row)"
              >统计分析</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="state" label="状态" width="100">
          <template #default="scope">
            <img
              :src="getWellStateImage(scope.row)"
              alt="状态"
              class="well-state-image"
            />
          </template>
        </el-table-column>
      </el-table>
      <div class="table-footer">
        <el-pagination
          background
          @current-change="onTablePageChange"
          :current-page="state.pageData.page"
          :page-size="state.pageData.size"
          :total="state.pageData.total"
          layout="total, prev, pager, next"
        ></el-pagination>
      </div>
    </div>
    <WellDialog
      @refresh="refresh"
      v-model:visible="editDialogVisible"
      :isEdit="isEditWellDialog"
      :editRowData="editRowData"
    >
    </WellDialog>

    <DrillDialog
      @refresh="refresh"
      v-model:visible="editDrillDialogVisible"
      :isEdit="isEditDrillDialog"
      :editRowData="editDrillRowData"
    >
    </DrillDialog>

    <el-dialog
      v-model="deleteVisible"
      title="提示"
      width="500"
      align-center
      destroy-on-close
    >
      <div>
        <img src="@/assets/Well/Warning.svg" alt="警告" class="warning-image" />
        <span style="font-size: 14px">
          此操作将删除{{ currentSelectWellRow.wellCommonName }}井，是否继续？
        </span>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="deleteVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmDelete"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog
      v-model="deleteRunVisible"
      title="提示"
      width="500"
      align-center
      destroy-on-close
    >
      <div>
        <img src="@/assets/Well/Warning.svg" alt="警告" class="warning-image" />
        <span style="font-size: 14px">
          此操作将删除{{ currentSelectRunRow.runNumber }}钻次，是否继续？
        </span>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="deleteRunVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmDeleteRun"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {
  getWellList,
  createWell,
  deleteWell,
  updateWell,
  getDrillById,
  getRunList,
  deleteRun,
} from "@/api/well/well";
import { ElMessage } from "element-plus";
import {
  computed,
  ref,
  onUnmounted,
  nextTick,
  onMounted,
  reactive,
  defineComponent,
} from "vue";
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router";
import moment from "moment";
import UnRealTimeWellState from "@/assets/Well/UnRealTimeWellState.svg";
import RealTimeWellState from "@/assets/Well/RealTimeWellState.svg";

import WellDialog from "./Dialogs/WellDialog.vue";
import DrillDialog from "./Dialogs/DrillDialog.vue";

const router = useRouter();

let editDialogVisible = ref(false);
let isEditWellDialog = ref(false);
let editRowData = ref();
let editDrillDialogVisible = ref(false);
let isEditDrillDialog = ref(false);

let editDrillRowData = ref();
let loading = ref(false);
let operationContent = ref("");
const state = reactive({
  pageData: {
    data: [],
    wellCommonName: "",
    page: 1,
    size: 10,
    total: "",
  },
  selectExpandedRows: [],
  selectExpandedRowKeys: [],
  runData: [],
});

const expandedKeys = ref([]);
let deleteVisible = ref(false);
let currentSelectWellRow = ref({});
let deleteRunVisible = ref(false);
let currentSelectRunRow = ref({});

const getWellsList = async () => {
  loading.value = true;
  const params = {
    // PageIndex: param.page ? param.page : state.pageData.page,
    // PageSize: param.size ? param.size : state.pageData.size,
    PageIndex: state.pageData.page,
    PageSize: state.pageData.size,
    wellCommonName: state.pageData.wellCommonName,
  };
  try {
    const res = await getWellList(params);
    if (res) {
      const { data, page, size, total } = res;
      state.pageData.data = data;
      state.pageData.total = total;
      state.pageData.page = page;
      state.pageData.size = size;
      await getAllRun();
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

// 获取所有钻次信息
const getAllRun = async () => {
  loading.value = true;
  const params = {
    PageIndex: 1,
    PageSize: 50,
  };
  try {
    const res = await getRunList(params);
    if (res) {
      state.pageData.data.forEach((el) => {
        el.drillData = res.data.filter((item) => item.wellId === el.wellId);
        // 遍历 drillData，设置 wellCommonName
        el.drillData.forEach((item) => {
          if (item.wellId === el.wellId) {
            item.wellCommonName = el.wellCommonName;
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const confirmDeleteRun = () => {
  handleDeleteRun(currentSelectRunRow);
  deleteRunVisible.value = false;
};

const handleDeleteRun = async (row) => {
  loading.value = true;
  const { runId, wellId, wellboreId } = row;
  const data = { wellId, wellboreId, ids: [runId] };
  try {
    const res = await deleteRun(data);
    if (res.msg === "success") {
      ElMessage({
        showClose: true,
        message: "删除成功",
        type: "success",
      });
      getWellsList();
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const handleExpandChange = async (row, expandedRows) => {
  // if (expandedRows.includes(row)) {
  //   expandedKeys.value.push(row.wellId);
  //   if (row.loadDetails) {
  //     return;
  //   }
  //   if (!row.drillData || !row.drillData.length) {
  //     const res = await getDrillById({ wellId: row.wellId });
  //     state.pageData.data = state.pageData.data.map((el) => {
  //       if (el.wellId === row.wellId) {
  //         return {
  //           ...el,
  //           drillData: res.data ? [res.data] : [],
  //           loadDetails: true,
  //         };
  //       } else {
  //         return { ...el };
  //       }
  //     });
  //   }
  // } else {
  //   expandedKeys.value = expandedKeys.value.filter(
  //     (wellId) => wellId !== row.wellId
  //   );
  // }
};

const onTablePageChange = async (page) => {
  state.pageData.page = page;
  await getWellsList();
};

// 搜索时，分页还原成默认
const pageReset = () => {
  state.pageData.page = 1;
  state.pageData.size = 10;
};

// 区域选择需要根据国家字段, 区块选择需要根据区域字段

let search = () => {
  // 加字段
  if (state.pageData.wellCommonName) {
    getWellsList();
  }
};

const confirmDelete = () => {
  handleDeleteWell(currentSelectWellRow);
  deleteVisible.value = false;
};
// 删除井
const handleDeleteWell = async (row) => {
  loading.value = true;
  const { wellId } = row;
  const data = { ids: [wellId] };
  try {
    const res = await deleteWell(data);
    if (res.msg === "success") {
      ElMessage({
        showClose: true,
        message: "删除成功",
        type: "success",
      });
      getWellsList();
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
const handleWellOperation = (action, row) => {
  switch (action) {
    case "edit":
      handleEditClick(row);
      break;
    case "delete":
      // 打开弹窗
      currentSelectWellRow = row;
      deleteVisible.value = true;
      // handleDeleteWell(row);
      break;
    case "createDrill":
      handleDrillAddClick(row);
      break;
    case "singleWellMsg":
      const { wellId, wellCommonName, drillData } = row;
      const runNum = drillData ? drillData.length : 0;
      router.push({
        path: "/main/WellInfo",
        query: { wellId, wellCommonName, runNum },
      });
      break;
    case "statistics":
      window.open("/RealTime");
      break;
  }
};
const handleDrillOperation = (action, row) => {
  switch (action) {
    case "edit":
      handleDrillEditClick(row);
      break;
    case "delete":
      currentSelectRunRow = row;
      deleteRunVisible.value = true;
      // handleDeleteRun(row);
      break;
    case "drillTimeMsg":
      const { wellId, wellCommonName } = row;
      router.push({
        path: "/main/DrillInfo",
        query: { wellId, wellCommonName },
      });
      break;
    // default:
    //   break;
  }
};

const handleEditClick = (row) => {
  editRowData.value = row;
  editDialogVisible.value = true;
  isEditWellDialog.value = true;
};

const handleAddClick = () => {
  editRowData.value = {};
  editDialogVisible.value = true;
  isEditWellDialog.value = false;
};

const handleDrillEditClick = (row) => {
  editDrillRowData.value = row;
  editDrillDialogVisible.value = true;
  isEditDrillDialog.value = true;
};
const handleDrillAddClick = (row) => {
  editDrillRowData.value = row;
  editDrillDialogVisible.value = true;
  isEditDrillDialog.value = false;
};

const refresh = () => {
  pageReset();
  getWellsList();
  getAllRun();
};
const getWellStateImage = (row) => {
  if (row) {
    const { state } = row;
    // 通过传入的数据,进行判断是UnRealTimeWellState还是RealTimeWellState
    return UnRealTimeWellState;
  }
};

const initData = async () => {
  await getWellsList();
};
onMounted(() => {
  initData();
});
</script>

<style scoped lang="scss">


.tab-content {
  padding: 20px;
  border-radius: 10px; /* 设置圆角 */

  background-color: #fff; /* 设置背景颜色 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  height: 100%;
}

.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.grid-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.well-state-image {
  width: 20px;
  height: 20px;
}
.separator {
  margin: 0 5px;
  color: #ccc;
}

.operation-item {
  cursor: pointer;
  transition: color 0.3s;
}

.operation-item-divider {
  cursor: pointer;
  transition: color 0.3s;
  margin-right: 12px;
}

.operation-item:hover {
  color: #66b1ff;
}
.operation-item-divider:hover {
  color: #66b1ff;
}
.table-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
.warning-image {
  vertical-align: text-bottom;
  width: 20px;
}
:deep(.tab-content tbody) {
  outline: none !important;
}
</style>
