<template>
  <div>
    <TopBar :titleName="`随钻测井智能导向决策系统-工区${titleName}`" />
    <div class="work-area-info">
      <div :class="state.isFold ? 'is-fold-list' : 'work-info-list'">
        <div class="work-info-title">
          <span style="font-size: 16px">井导航</span>
        </div>
        <!-- 参考井 -->
        <el-tree
          style="max-width: 600px"
          :data="treeData"
          node-key="logSetId"
          :render-content="renderContent"
          :props="treeProps"
          :load="loadNode"
          lazy
          @node-click="handleNodeClick"
          default-expanded-keys="[currentWell,well]"
        >
        </el-tree>

        <!-- 邻井 -->
        <el-tree
          style="max-width: 600px"
          :data="treeData"
          node-key="logSetId"
          :render-content="renderContent"
          :props="treeProps"
          :load="loadOthersWellNode"
          lazy
          @node-click="handleNodeClick"
          default-expanded-keys="[currentWell,well]"
        >
        </el-tree>
      </div>
      <div :class="state.isFold ? 'work-info-right-all' : 'work-info-right'">
        <div class="work-info-right-top">
          <div class="work-info-right-button">
            <img
              v-show="state.isFold"
              src="@/assets/Well/Fold.svg"
              class="fold-img"
              @click="handleFold()"
            />
            <img
              v-show="!state.isFold"
              src="@/assets/Well/UnFold.svg"
              class="fold-img"
              @click="handleFold()"
            />
          </div>
          <div class="custom-tabs">
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              :class="['custom-tab', state.activeTab === index ? 'active' : '']"
              @click="setActiveTab(index)"
            >
              {{ tab.label }}
            </div>
          </div>
        </div>
        <div class="work-info-content">
          <div v-if="state.activeTab === 0" style="width: 100%">
            <BoreholeTrajectory />
          </div>
          <div v-else-if="state.activeTab === 1" style="width: 100%">
            <CurveContrast />
          </div>
          <div v-else-if="state.activeTab === 2" style="width: 100%">
            <AntiCollision />
          </div>
        </div>
      </div>
    </div>

    <el-dialog :width="500" v-model="visible" title="编辑邻井列表">
      <span>选择井列表</span>

      <el-table
        :data="state.tableData"
        border
        ref="tableRef"
        @selection-change="handleSelectionChange"
        style="width: 100%"
        row-key="wellId"
        default-expand-all
      >
        <el-table-column
          type="selection"
          width="55"
          align="center"
          :reserve-selection="true"
        />
        <el-table-column
          prop="wellCommonName"
          label="邻井名称"
          align="center"
        />
      </el-table>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
          <el-button @click="visible = false">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {
  onMounted,
  ref,
  onUnmounted,
  nextTick,
  watch,
  reactive,
  computed,
} from "vue";
import { ElMessage } from "element-plus";
import * as echarts from "echarts";
import lodash from "lodash";
import { useRoute, useRouter } from "vue-router";
import type { TableInstance } from "element-plus";

import { requireImg } from "@/utils/utils";
import { getCurveList, getCurveInfo, getCurveInfoData } from "@/api/well/well";
import { updateWorkSpace } from "@/api/workspace/workspace";

import getImportImage from "@/assets/Well/Import.svg";
import getDeleteImage from "@/assets/Well/Delete.svg";
import getEditImg from "@/assets/Edit.svg";
import getCopyImg from "@/assets/Copy.svg";

import BoreholeTrajectory from "./components/BoreholeTrajectory.vue";
import CurveContrast from "./components/CurveContrast.vue";
import AntiCollision from "./components/AntiCollision.vue";
import TopBar from "../TopBar.vue";

const activeName = ref("boreholeTrajectory");

const route = useRoute();

const router = useRouter();
const titleName = route.query.workName;
const visible = ref(false);
const tableRef = ref(null);
const props = defineProps({
  currentRunInfo: {
    type: Object,
    default: () => ({}),
  },
});

const treeProps = {
  label: "name",
  children: "children",
  isLeaf: "leaf",
};

let treeData = [
  // { titleName: "参考井", index: "1", id: "1" },
  // { titleName: "邻井", index: "2", id: "1=2" },
];

interface Tree {
  name: string;
  logSetId: string;
  children?: Tree[];
}
interface Node {
  data: Tree;
  level: number;
}

const tabs = [
  { label: "井眼轨迹" },
  { label: "邻井曲线对比" },
  { label: "防碰扫描" },
];

const state = reactive({
  runInfo: {
    wellboreId: props.currentRunInfo.runId,
    wellId: props.currentRunInfo.wellId,
  },
  currentInfo: {},
  tableData: [
    { index: 1, wellCommonName: "well02", wellId: "2" },
    { index: 2, wellCommonName: "well03", wellId: "3" },
    { index: 3, wellCommonName: "well04", wellId: "4" },
    { index: 4, wellCommonName: "well05", wellId: "5" },
    { index: 5, wellCommonName: "well06", wellId: "6" },
  ],
  selectedRows: [
    { index: 1, wellCommonName: "well02", wellId: "2" },
    { index: 2, wellCommonName: "well04", wellId: "4" },
  ],
  isFold: false,
  activeTab: 0,
});

// //树结构渲染
const renderContent = (h, { node, data }) => {
  if (node.level == 1) {
    if (node.data.name === "邻井") {
      return h(
        "div",
        {
          class: "el-tree-node__label",
          style:
            "width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 16px;display: flex;justify-content: space-between;", // 设置父元素的样式
        },
        h("span", { class: "node-label" }, node.label),
        h(
          "div",
          { class: "el-tree-node-children-right" },
          h("img", {
            class: "treeimg",
            onClick: () => {
              handleOpen(data);
            },
            src: `${getEditImg}`,
            style: "vertical-align: middle;margin-right:10px",
          })
        )
      );
    } else {
      return h(
        "div",
        {
          class: "el-tree-node__label",
          style:
            "width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 16px;", // 设置父元素的样式
        },
        h("span", { class: "node-label" }, node.label)
      );
    }
  } else if (node.level == 2) {
    return h(
      "div",
      {
        class: "el-tree-node__label",
        style:
          "width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 16px;", // 设置父元素的样式
      },
      h("span", { class: "node-label" }, node.label)
    );
  } else if (node.level == 3) {
    // if (node.isLeaf) {
    if (node.data.name === "模型-几何") {
      return h(
        "div",
        {
          class: "el-tree-node__label",
          style:
            "width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 16px;display: flex;justify-content: space-between;", // 设置父元素的样式
        },
        h(
          "span",
          {
            class: "node-label",
            onClick: () => {
              getCurveTableData(data);
            },
          },
          node.label
        ),
        h(
          "div",
          { class: "el-tree-node-children-right" },
          h("img", {
            class: "treeimg",
            onClick: () => {
              handleEdit(data);
            },
            src: `${getEditImg}`,
            style: "vertical-align: middle;margin-right:10px",
          }),
          h("img", {
            class: "treeimg",
            onClick: () => {
              handleEdit(data);
            },
            src: `${getCopyImg}`,
            style: "vertical-align: middle;margin-right:10px",
          }),
          h("img", {
            class: "treeimg",
            onClick: () => {
              handleRemove(data);
            },
            src: `${getDeleteImage}`,
            style: "vertical-align: middle;margin-right:10px",
          })
        )
      );
    } else if (node.data.leaf) {
      return h(
        "div",
        {
          class: "el-tree-node__label",
          style:
            "display: flex;justify-content: space-between;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;color: var(--app-text-color-hover);font-size: 13px;margin-left:-12px", // 设置父元素的样式
        },
        h("input", {
          type: "checkbox",
          onClick: (value) => {
            handleChangeCheckBox(data, value);
          },
          class: "node-label",
          checked: true,
        }),
        h(
          "div",
          {
            class: "el-tree-node__label",
            style:
              "width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 16px;", // 设置父元素的样式
          },
          h("span", { class: "node-label" }, node.label)
        )
      );
    } else {
      return h(
        "div",
        {
          class: "el-tree-node__label",
          style:
            "width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 16px;", // 设置父元素的样式
        },
        h("span", { class: "node-label" }, node.label)
      );
    }
  } else if (node.level == 4) {
    return h(
      "div",
      {
        class: "el-tree-node__label",
        style:
          "display: flex;justify-content: space-between;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;color: var(--app-text-color-hover);font-size: 13px;margin-left:-12px", // 设置父元素的样式
      },
      h(
        "span",
        {
          class: "node-label",
          onClick: () => {
            getCurveTableData(data);
          },
        },
        node.label
      ),
      h(
        "div",
        { class: "el-tree-node-children-right" },
        h("img", {
          class: "treeimg",
          onClick: () => {
            handleEdit(data);
          },
          src: `${getImportImage}`,
          style: "vertical-align: middle;margin-right:10px",
        }),
        h("img", {
          class: "treeimg",
          onClick: () => {
            handleRemove(data);
          },
          src: `${getDeleteImage}`,
          style: "vertical-align: middle;margin-right:10px",
        })
      )
    );
  }
};

// 参考井
const loadNode = async (node: Node, resolve: (data: Tree[]) => void) => {
  if (node.level === 0) {
    // return resolve(await getListData());
    return resolve([{ name: "参考井", logSetId: "currentWell" }]);
  } else if (node.level === 1) {
    // return resolve(await getCurveInfoList(node.data));//取返回数据中的logSetId或者是去遍历一下井列表, 把logSetId:'2'赋值给本井这条数据
    return resolve([{ name: "well01", logSetId: "well" }]);
  } else if (node.level === 2) {
    const listData = await getListData();

    const list = [
      { name: "模型-几何" },
      { name: "Actual Trajectory", leaf: true },
      { name: "Design Trajectory", leaf: true },

      ...listData,
    ];
    return resolve(list);
  } else if (node.level === 3) {
    return resolve(await getCurveInfoList(node.data));
  }
};

// 邻井
const loadOthersWellNode = async (
  node: Node,
  resolve: (data: Tree[]) => void
) => {
  if (node.level === 0) {
    // return resolve(await getListData());
    return resolve([{ name: "邻井", logSetId: "currentWell" }]);
  } else if (node.level === 1) {
    // return resolve(await getCurveInfoList(node.data));
    return resolve([
      { name: "well02", logSetId: "well" },
      { name: "well03", logSetId: "well" },
    ]);
  } else if (node.level === 2) {
    const listData = await getListData();

    const list = [{ name: "Actual Trajectory", leaf: true }, ...listData];
    return resolve(list);
  } else if (node.level === 3) {
    return resolve(await getCurveInfoList(node.data));
  }
};

const handleOpen = (data) => {
  visible.value = true;
  const selectedRowKeys = state.selectedRows.map((item) => item.wellId);
  state.tableData.forEach((item) => {
    if (selectedRowKeys.includes(item.wellId)) {
      setTimeout(() => {
        tableRef.value?.toggleRowSelection(item, true);
      });
    }
  });
};

const handleSelectionChange = (val: any) => {
  state.selectedRows = val;
};
const handleConfirm = () => {
  if (state.selectedRows.length === 0) {
    ElMessage.warning("请选择至少一个邻井");
    return;
  }

  // 调用API接口
  const data = {
    ...state.currentInfo,
    workspaceWells: state.selectedRows,
  };
  console.log(data);
  debugger;
  updateWorkSpace(data)
    .then((response) => {
      ElMessage.success("操作成功");
      visible.value = false;
    })
    .catch((error) => {
      ElMessage.error("操作失败");
      console.error(error);
    });
};

const handleChangeCheckBox = (data, value) => {
  // 设计轨迹和实际轨迹点击调用接口查询表格数据
  console.log(data, value);
};

const handleFold = () => {
  state.isFold = !state.isFold;
};
const handleEdit = (data) => {
  console.log(data);
  // 重置功能的实现
};
const getCurveTableData = (data) => {
  console.log(data);
};
const handleRemove = (data) => {
  console.log(data);
};

const getListData = async () => {
  // const params = state.runInfo;
  const params = {
    wellId: "26e08e3ca0514a0e9c4d6911f52ff1f8",
    WellboreId: "641d5816d0544ffe9f79da532452178c",
  };
  const response = await getCurveList(params);
  const curveList = response.data;
  curveList.map((element) => {
    return { ...element, children: [], leaf: false };
  });
  return curveList;
};

const handleNodeClick = (data) => {
  // 点击
  console.log(data);
};

const getCurveInfoList = async (data) => {
  const { logSetId, runId, wellId } = data;
  const params = {
    logSetId,
    wellboreId: runId,
    wellId,
  };
  const res = await getCurveInfo(params);
  //const listRes = await getCurveInfoData(params);
  // state.tableData = listRes.data;

  let children = res.data.map((element) => {
    return { ...element, leaf: true, name: element.curveName };
  });
  return children;
};

const setActiveTab = (index) => {
  state.activeTab = index;
};

onMounted(() => {
  // setSelected();
  // 默认选中前两个邻井
  //   			if (tableRef.value) {
  // 					tableRef.value.toggleRowSelection(row[1], undefined);
  // 				}
  //     console.log(tableRef.value)
  // //   if (tableRef.value && state.tableData.length > 1) {
  // //     // tableRef.value.toggleRowSelection(row, true);getSelectionRows
  // // tableRef.value.toggleRowSelection( { index: 1, wellCommonName: "well02", wellId: '2' }, true);
  // //   }
  // 	nextTick(() => {
  // 		tableRef.value?.setCurrentRow(row);
  // 	});
});
</script>

<style lang="scss" scoped>
.work-area-info {
  display: flex;
  margin-top: 50px;
}
.work-info-list {
  width: 15%;
  border: 1px solid #ccc;
}
.is-fold-list {
  display: none;
}
.work-info-title {
  border-bottom: 1px solid #ccc;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  padding-left: 20px;
  font-weight: bold;
}
.work-info-right {
  width: 85%;
  border: 1px solid #ccc;
}

.work-info-right-all {
  width: 100%;
  border: 1px solid #ccc;
}
.work-info-content {
  flex: 1;
  display: flex;
}

.work-info-right-top {
  border-bottom: 1px solid #ccc;
  height: 50px;
  width: 100%;
  display: flex;
}
.work-info-right-button {
  height: 50px;
  line-height: 50px;
}

.fold-img {
  margin: 10px;
  vertical-align: middle;
  &:hover {
    cursor: pointer;
  }
}

.custom-tabs {
  display: flex;
  border-bottom: 1px solid #dcdcdc;
}

.custom-tab {
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.3s;
  //   border: 1px solid transparent;
  border-bottom: none;
  //   margin-bottom: -1px;
  color: #333;
  height: 50px;
  line-height: 50px;
}

.custom-tab.active {
  background-color: white;
  border-bottom: none;
  position: relative;
  z-index: 1;
  color: #409eff;
  transition: all 0.3s;
}

.custom-tab.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 2px;
  background-color: #409eff;
  transition: all 0.3s;
}
</style>
