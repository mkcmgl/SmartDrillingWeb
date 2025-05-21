<template>
  <div>
    <TopBar />
    <div class="map">
      <div class="map-content">
        <!-- 搜索框 -->
        <div class="map-header">
          <div class="search-box">
            <el-input
              v-model="state.searchWell"
              style="width: 380px"
              placeholder="Please input"
            >
              <template #prepend>
                <el-select
                  effect="dark"
                  v-model="state.selectSearchType"
                  style="width: 140px"
                >
                  <el-option
                    v-for="item in searchType"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </template>
              <template #append>
                <img
                  src="@/assets/Map/search.svg"
                  @click="handleSearch()"
                  style="cursor: pointer"
                />
              </template>
            </el-input>
            <div class="search-box-list">
              <div
                v-for="(item, index) in state.searchList"
                :key="index"
                class="search-list"
              >
                <div>
                  <div class="search-list-value">{{ item.value }}</div>
                  <div class="search-list-label">{{ item.label }}</div>
                </div>
                <img
                  class="search-list-cancel"
                  src="@/assets/Map/cancel.svg"
                  @click="handleCancelSearch(item)"
                  style="cursor: pointer"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- 左侧井列表 -->
        <div
          :class="state.isFold ? 'is-fold-list' : 'info-list'"
          v-loading="state.isLoading"
          element-loading-background="#525252"
          element-loading-text="Loading..."
        >
          <div class="map-left">
            <div class="map-left-title">WELL LIST({{ state.totalCount }})</div>
            <div class="map-left-btn">
              <div class="map-left-btn-item">
                <img
                  class="map-left-img"
                  src="@/assets/Map/selectAll.svg"
                  @click="handleSelectAll(selectAddAllWell)"
                />
              </div>
              <div class="map-left-btn-item">
                <img
                  class="map-left-img"
                  src="@/assets/Map/add.svg"
                  @click="handleProjectChange('add', false)"
                />
              </div>
            </div>
          </div>
          <div class="well-all">
            <div
              v-for="item in state.tableData"
              :key="item.index"
              class="well-all-list"
            >
              <div class="list-item" @click="handleChangeCenter(item)">
                <div class="list-item-img">
                  <img src="@/assets/Map/well.svg" />
                </div>
                <div class="list-item-name">{{ item.wellCommonName }}</div>
              </div>
              <div
                style="display: flex; justify-content: center"
                v-if="item.isSelected"
              >
                <el-checkbox
                  v-model="item.isSelectFlag"
                  :disabled="item.isSelected"
                />
              </div>
              <div
                v-else
                :class="
                  item.isSelectFlag ? 'list-item-btn-selected' : 'list-item-btn'
                "
              >
                <el-checkbox v-model="item.isSelectFlag" />
              </div>
            </div>
          </div>
        </div>
        <div :class="state.isFold ? 'is-fold-well' : 'unfold-well'">
          <div
            class="map-content-icon"
            :class="state.isFold ? 'is-fold-count' : 'unfold-count'"
          >
            <div class="map-count map-count-left">{{ state.totalCount }}</div>
            <img
              v-show="state.isFold"
              src="@/assets/Map/fold.svg"
              class="fold-img"
              @click="handleFold('isFold')"
              style="transform: rotate(180deg)"
            />
            <img
              v-show="!state.isFold"
              src="@/assets/Map/fold.svg"
              class="fold-img"
              @click="handleFold('isFold')"
            />
          </div>
        </div>
        <!-- 地图 -->
        <div
          id="map_container"
          :style="{
            marginLeft: state.isFold ? '0' : '260px',
            marginRight: state.isFoldRight ? '0' : '260px',
          }"
          v-loading="state.isLoading"
          element-loading-background="#525252"
        ></div>
        <div
          v-if="isMapLoading"
          v-loading="isMapLoading"
          element-loading-background="#525252"
          element-loading-text="Loading..."
          class="loading-indicator"
        ></div>
        <!-- 右侧项目选井   -->
        <div
          :class="state.isFoldRight ? 'is-fold-list' : 'project-info-list'"
          v-loading="state.isLoading"
          element-loading-background="#525252"
          element-loading-text="Loading..."
        >
          <div class="map-right">
            <div class="map-right-title">
              {{ state.projectName }}
              <el-popover
                placement="bottom"
                width="150"
                trigger="click"
                effect="dark"
              >
                <template #reference>
                  <img class="map-right-drop" src="@/assets/Map/dropDown.svg" />
                </template>
                <div
                  v-for="(items, index) in state.projectId
                    ? moreOptionList
                    : emptyProjectOption"
                  :key="index"
                  class="more-item"
                  @click="handleOperation(items.operation)"
                >
                  <img :src="requireImg(items.img)" alt="" />
                  <span>{{ items.name }}</span>
                </div>
              </el-popover>
            </div>
            <div class="map-left-btn">
              <div class="map-left-btn-item">
                <img
                  class="map-right-img"
                  src="@/assets/Map/selectAll.svg"
                  @click="handleSelectDeleteAll(selectDeleteAllWell)"
                />
              </div>
              <div class="map-left-btn-item">
                <img
                  class="map-right-img"
                  src="@/assets/Home/delete.svg"
                  @click="handleProjectChange('delete', false)"
                />
              </div>
            </div>
          </div>
          <el-input
            style="padding: 10px"
            v-model="state.searchSelectProject"
            placeholder="Please input"
            size="small"
          >
          </el-input>
          <div v-if="!state.selectWellList.length" class="empty-select-well">
            <img src="@/assets/Home/browse-file-open.svg" />
            <div>Empty</div>
          </div>
          <div v-else class="well-all">
            <div
              v-for="item in state.selectWellList"
              :key="item.index"
              class="select-well-list"
            >
              <div class="list-item">
                <div class="list-item-img">
                  <img src="@/assets/Map/well.svg" />
                </div>
                <div class="list-item-name">{{ item.wellName }}</div>
              </div>
              <div :class="item.isCancelSelected ? 'list-item-btn-selected' : 'list-item-btn'">
                <el-checkbox v-model="item.isCancelSelected" />
              </div>
            </div>
          </div>
        </div>
        <div :class="state.isFoldRight ? 'is-fold-icon' : 'unfold-icon'">
          <div
            class="map-content-icon"
            :class="state.isFoldRight ? 'is-fold-count' : 'unfold-count'"
          >
            <div class="map-count map-count-right">
              {{ state.selectTotalCount }}
            </div>
            <img
              src="@/assets/Map/selectWell.svg"
              class="fold-img"
              @click="handleFold('isFoldRight')"
            />
          </div>
          <!--地图选井 框选 -->
          <div
            class="map-content-icon"
            :class="
              state.drawSelect === 'drawRectangle'
                ? 'unfold-count'
                : 'is-fold-count'
            "
          >
            <div class="map-count map-count-right">
              {{ state.selectTotalCount }}
            </div>
            <img
              src="@/assets/Map/rectangleSelect.svg"
              class="fold-img"
              id="map-select-rectangle"
            />
          </div>
          <!--地图选井 圈选 -->
          <div
            class="map-content-icon"
            :class="
              state.drawSelect === 'drawCircle'
                ? 'unfold-count'
                : 'is-fold-count'
            "
          >
            <div class="map-count map-count-right">
              {{ state.selectTotalCount }}
            </div>
            <img
              src="@/assets/Map/circleSelect.svg"
              class="fold-img"
              id="map-select-circle"
            />
          </div>
        </div>
      </div>
    </div>
    <RenameDialog
      v-model:visible="renameVisible"
      :title="renameTitle"
      :content="renameContent"
      :confirmText="renameConfirmText"
      @confirm="handleChangeName"
    ></RenameDialog>
    <ShareDialog
      v-model:visible="shareDialogVisible"
      :title="shareTitle"
      confirmText="SHARE"
      @confirm="confirmShare"
    ></ShareDialog>
    <ConfirmDialog
      v-model:visible="closeVisible"
      :title="closeTitle"
      :content="closeContent"
      :confirmText="closeConfirmText"
      @confirm="confirmClose()"
    ></ConfirmDialog>
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
import { useRoute, useRouter } from "vue-router";

import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "@vue/reactivity"; // 引入shallowRef
import { isEmpty } from "lodash";

import { requireImg } from "@/utils/utils";

import TopBar from "@/views/TopBar.vue";
import RenameDialog from "/src/views/components/RenameDialog.vue";
import ShareDialog from "/src/views/components/ShareDialog.vue";
import ConfirmDialog from "/src/views/components/ConfirmDialog.vue";

import {
  getAllWellList,
  getProjectWellList,
  createProject,
  renameProject,
  saveAsProject,
  changeProjectWell,
  share,
} from "@/api/project/project";

let map = shallowRef(null);

const route = useRoute();

const router = useRouter();

let selectAddAllWell = ref(true);
let selectDeleteAllWell = ref(true);

let loading = ref(false);
let projectLoading = ref(false);
let isMapLoading = ref(true);
let renameVisible = ref(false);
let rename = ref("");
let renameTitle = ref("");
let renameContent = ref("");
let renameConfirmText = ref("");
let shareDialogVisible = ref(false);
let shareTitle = ref("");
let closeVisible = ref(false);
let closeTitle = ref("");
let closeContent = ref("");
let closeConfirmText = ref("");

const isInitFlag = ref(true);
const selectedWells = ref([]);
const state = reactive({
  totalCount: 0,
  selectTotalCount: 0,
  allSelectWellList: [],
  selectWellList: [],
  isFold: false,
  isFoldRight: false,
  searchWell: "",
  selectSearchType: "all",
  searchList: [],
  searchSelectProject: "",
  projectName: route.query.projectName || "Empty Project",
  projectId: route.query.projectId,
  allTableData: [],
  tableData: [],
  currentOverlay: [],
  drawSelect: null,
  isLoading: false,
  getSelectWell: [],
  getSelectCancelWell: [],
});
let allWellMarkersList = ref([]);
let cluster = null; // 用于存储点聚合实例

const moreOptionList = [
  { name: "Rename", img: "Home/rename.svg", operation: "rename" },
  { name: "Share", img: "Home/share.svg", operation: "share" },
  {
    name: "Save as New Project",
    img: "Map/save-as.svg",
    operation: "saveAs",
  },
  { name: "Close", img: "Map/close.svg", operation: "close" },
];

const emptyProjectOption = [
  {
    name: "Save",
    img: "Map/save.svg",
    operation: "save",
  },
];

const searchType = [
  { label: "All", index: 0, value: "all" },
  { label: "Well Name", index: 1, value: "wellName" },
  { label: "Curve Name", index: 2, value: "curveName" },
  { label: "County Name", index: 3, value: "countryName" },
  { label: "Region Name", index: 4, value: "regionName" },
  { label: "Block Name", index: 5, value: "blockName" },
];

const MARKER_STYLES = {
  green: "width:16px;height:16px;background-color: #67c23a;border-radius: 50%;",
  orange:
    "width:16px;height:16px;background-color: #f08a5d;border-radius: 50%;",
  white: "width:16px;height:16px;background-color: #eee;border-radius: 50%;",
};

const handleFold = (isFoldFlag) => {
  state[isFoldFlag] = !state[isFoldFlag];
};
const handleOperation = (operation) => {
  switch (operation) {
    case "rename":
      // 打开重命名弹窗
      openRenameDialog("rename", "RENAME DASHBOARD", "DashBoard Name:", "SAVE");
      break;
    case "share":
      openShareDialog();
      break;
    case "saveAs":
      openRenameDialog("saveAs", "SAVE AS NEW PROJECT", "New Name:", "SAVE");
      break;
    case "close":
      openCloseDialog(
        "closeProject",
        "Warning",
        `Are you sure you want to delete ${state.projectName}？`,
        "CLOSE"
      );
      break;
    // 新建项目保存
    case "save":
      openRenameDialog(
        "projectName",
        "CREATE PROJECT",
        "Project Name:",
        "CREATE"
      );
      break;
  }
};
// 打开重命名弹窗
const openRenameDialog = (renameType, title, content, text) => {
  rename.value = renameType;
  renameTitle.value = title;
  renameContent.value = content;
  renameConfirmText.value = text;
  renameVisible.value = true;
};

// 打开分享弹窗
const openShareDialog = () => {
  shareDialogVisible.value = true;
  shareTitle.value = `SHARE-${state.projectName}`;
};

// 重命名/另存
const handleChangeName = async (renameValue) => {
  loading.value = true;
  if (rename.value === "rename") {
    const data = {
      id: state.projectId,
      name: renameValue,
    };
    try {
      const res = await renameProject(data);
      if (res.msg === "success") {
        ElMessage({
          showClose: true,
          message: "success",
          type: "success",
        });
        router.push({
          path: "/Map",
          query: {
            projectId: state.projectId,
            projectName: renameValue,
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  } else if (rename.value === "projectName") {
    // 新建项目保存
    const wellIds = state.selectWellList.map((item) => item.wellId);
    const data = {
      name: renameValue,
      wellIds,
    };
    try {
      const res = await createProject(data);
      if (res) {
        const { id, name } = res;
        router.push({
          path: "/Map",
          query: {
            projectId: id,
            projectName: name,
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  } else {
    // 另存为
    const data = {
      oldProjectId: state.projectId,
      name: renameValue,
    };
    try {
      const res = await saveAsProject(data);
      if (res.msg === "success") {
        ElMessage({
          showClose: true,
          message: "success",
          type: "success",
        });
        // getWellListData();
        router.push({
          path: "/Map",
          query: {
            projectId: res.id, // 新返回的projectId
            projectName: res.name || renameValue, // 新返回的projectName或者renameValue
          },
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }
};

const openCloseDialog = (titleName, title, content, text) => {
  closeTitle.value = title;
  closeContent.value = content;
  closeConfirmText.value = text;
  closeVisible.value = true;
};
const confirmClose = () => {
  router.push({
    name: "Home",
  });
};

// 分享
const confirmShare = async (selectValue) => {
  const data = [...selectValue];
  share(data).then((res) => {
    if (res.msg === "success") {
      ElMessage({
        showClose: true,
        message: "success",
        type: "success",
      });
    }
  });
};

// 右侧项目中已选井的查询
const handleEnterSearch = async () => {
  if (state.searchSelectProject) {
    state.selectWellList = state.allSelectWellList.filter((item) =>
      item.wellCommonName
        .toLowerCase()
        .includes(state.searchSelectProject.toLowerCase())
    );
  } else {
    state.selectWellList = state.allSelectWellList;
    // state.selectTotalCount = state.selectWellList.length;
  }
};

const handleSearch = async () => {
  if (state.searchWell) {
    const searchObj = {
      label: state.selectSearchType,
      value: state.searchWell,
    };
    const hasSame = await hasSameSearch(state.searchList, searchObj);

    if (hasSame) {
      ElMessage({
        showClose: true,
        message: "Warning, Do not enter repeated searches.",
        type: "warning",
      });
    } else {
      state.searchList.unshift(searchObj);
      state.searchWell = "";
      let searchValue = {};
      state.searchList.forEach((el) => {
        searchValue[el.label] = el.value;
      });

      getWellListData(true);
    }
    // 1.取searchList中的元素去调查询接口: 可能会出现的情况: 1.多个wellName,或者
    // 2.同一个查询条件只能输出一个:disabled="item.disabled"
  }
};

// 判断传入的search是否有相同的值
const hasSameSearch = (searchList, searchObj) => {
  return searchList.some(
    (item) => item.label === searchObj.label && item.value === searchObj.value
  );
};

const handleCancelSearch = (item) => {
  state.searchList = state.searchList.filter(
    (searchItem) =>
      searchItem.label !== item.label || searchItem.value !== item.value
  );
  getWellListData(true);
};

const getWellListData = async (isUpdateMap) => {
  let searchValueObj = {};
  state.searchList.forEach((el) => {
    searchValueObj[el.label] = el.value;
  });
  state.isLoading = true; // 开始加载
  try {
    const params = { projectId: state.projectId, ...searchValueObj };
    const projectParams = { projectId: state.projectId };

    let response;
    // 检查查询条件是否包含 All 或 curveName
    if (
      isEmpty(searchValueObj) ||
      searchValueObj.label === "All" ||
      searchValueObj.label === "curveName"
    ) {
      response = await getAllWellList(params);
      let wellIds = [];
      if (state.projectId) {
        const selectRes = await getProjectWellList(projectParams);
        state.selectWellList = selectRes.data;
        wellIds = selectRes.data.map((item) => item.wellId);
      } else {
        state.selectWellList = [];
      }

      state.tableData = response.data.map((item) => {
        const { wellId } = item;
        if (wellIds.length && wellIds.includes(wellId)) {
          return {
            ...item,
            isSelected: true,
            isSelectFlag: true,
          };
        } else {
          return {
            ...item,
            isSelected: false,
            isSelectFlag: false,
          };
        }
      });
      if (isEmpty(searchValueObj)) {
        state.allTableData = state.tableData;
        state.allSelectWellList = state.selectWellList;
      }
    } else {
      // 前端过滤数据
      response = await getAllWellList(); // 还是需要重新查一下数据:因为
      state.allTableData = response.data;
      state.tableData = response.data.filter((item) => {
        let match = true;
        for (const [key, value] of Object.entries(searchValueObj)) {
          if (
            key === "wellName" &&
            item.wellCommonName.toLowerCase().indexOf(value.toLowerCase()) ===
              -1
          ) {
            match = false;
            break;
          }
          // 添加其他搜索条件的处理
          // 例如：
          if (
            key === "countryName" &&
            item.country.toLowerCase().indexOf(value.toLowerCase()) === -1
          ) {
            match = false;
            break;
          }
          if (
            key === "regionName" &&
            item.region.toLowerCase().indexOf(value.toLowerCase()) === -1
          ) {
            match = false;
            break;
          }
          if (
            key === "blockName" &&
            item.block.toLowerCase().indexOf(value.toLowerCase()) === -1
          ) {
            match = false;
            break;
          }
        }
        return match;
      });

      let wellIds = [];
      if (state.projectId) {
        const selectRes = await getProjectWellList(projectParams);
        state.selectWellList = selectRes.data;
        state.allSelectWellList = selectRes.data;
        wellIds = selectRes.data.map((item) => item.wellId);
      } else {
        state.allSelectWellList = [];
        state.selectWellList = [];
      }

      state.tableData = state.tableData.map((item) => {
        const { wellId } = item;
        if (wellIds.length && wellIds.includes(wellId)) {
          return {
            ...item,
            isSelected: true,
            isSelectFlag: true,
          };
        } else {
          return {
            ...item,
            isSelected: false,
            isSelectFlag: false,
          };
        }
      });
    }
    if (isUpdateMap) {
      updateMarkersList();
    }

    state.totalCount = state.tableData.length;
    state.selectTotalCount = state.selectWellList.length;
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    state.isLoading = false; // 结束加载
  }
};

const handleSelectAll = (flag) => {
  state.tableData = state.tableData.map((item) => {
    return { ...item, isSelectFlag: item.isSelected ? true : flag };
  });
  selectAddAllWell.value = !flag;
};

const handleSelectDeleteAll = (flag) => {
  state.selectWellList = state.selectWellList.map((item) => {
    return { ...item, isCancelSelected: flag };
  });
  selectDeleteAllWell.value = !flag;
};

const getWells = (type) => {
  if (type === "add") {
    state.getSelectWell = state.tableData.filter((item) => item.isSelectFlag);
    const selectRows = state.tableData.filter(
      (item) => item.isSelectFlag || item.isSelected
    );
    return selectRows.map((item) => item.wellId);
  } else {
    state.getSelectCancelWell = state.selectWellList.filter(
      (item) => item.isCancelSelected
    );

    const selectCancelRows = state.selectWellList.filter(
      (item) => !item.isCancelSelected
    );
    return selectCancelRows.map((item) => item.wellId);
  }
};
// 添加/移除井到项目中
const handleProjectChange = async (type, singleFlag) => {
  const wellIds = await getWells(type);
  const isExistAdd = state.tableData.some(
    (item) => !item.isSelected && item.isSelectFlag
  );

  if (
    (type === "add" && !isExistAdd && !singleFlag) ||
    (type === "delete" && !state.getSelectCancelWell.length && !singleFlag)
  ) {
    return;
  }

  if (state.projectId) {
    const data = {
      projectId: state.projectId,
      wellIds,
    };

    try {
      const res = await changeProjectWell(data);
      if (res.msg === "success") {
        ElMessage({
          showClose: true,
          message: "success",
          type: "success",
        });
        clearSelectData();
        await getWellListData(false);
        updateMarkersContent(type, false);
      } else {
        ElMessage({
          showClose: true,
          message: "error",
          type: "error",
        });
      }
    } catch (error) {
      ElMessage({
        showClose: true,
        message: "error",
        type: "error",
      });
    } finally {
      loading.value = false;
    }
  } else {
    const getSelectCancelWells = state.getSelectCancelWell.map(
      (el) => el.wellId
    );

    state.tableData = state.tableData.map((item) => {
      const { wellId } = item;
      if (wellIds.length && wellIds.includes(wellId)) {
        return {
          ...item,
          isSelected: true,
          isSelectFlag: true,
        };
      } else if (
        getSelectCancelWells.length &&
        getSelectCancelWells.includes(wellId)
      ) {
        return {
          ...item,
          isSelected: false,
          isSelectFlag: false,
        };
      } else {
        return { ...item };
      }
    });
    const selectWellList = state.tableData.filter((item) => item.isSelected);

    state.selectWellList = selectWellList.map((el) => {
      return {
        ...el,
        isCancelSelected: false,
      };
    });
    state.selectTotalCount = state.selectWellList.length;

    updateMarkersContent(type, false);
  }
};

const getMarkerContent = (el) => {
  const style = el.isSelected ? MARKER_STYLES.green : MARKER_STYLES.white;
  return `<div id="map-marker" style='color:#fff;font-size:14px'  data-well-id="${el.wellId}"><div  class="map-marker-style"  style="${style}"></div>${el.wellCommonName}</div>`;
};

const updateMarkersContent = (type, changingFlag) => {
  let style = "";
  let selectedWellsList = [];
  if (type === "add") {
    if (changingFlag) {
      style = MARKER_STYLES.orange;
      selectedWellsList = state.getSelectWell;
    } else {
      style = MARKER_STYLES.green;
      selectedWellsList = state.getSelectWell;
    }
  } else {
    const cancelSelectedList = state.getSelectCancelWell;
    style = MARKER_STYLES.white;
    selectedWellsList = cancelSelectedList;
  }

  allWellMarkersList.value.forEach((marker) => {
    const flag = selectedWellsList.some(
      (well) => well.wellId === marker.De.extData.el.wellId
    );
    if (flag) {
      const newContent = `<div id="map-marker" style='color:#fff;font-size:14px'><div class="map-marker-style"  style="${style}"></div>${marker.De.extData.el.wellCommonName}</div>`;
      marker.setContent(newContent);
    } else {
      const newContent = `<div id="map-marker" style='color:#fff;font-size:14px'><div class="map-marker-style"  style="${MARKER_STYLES.white}"></div>${marker.De.extData.el.wellCommonName}</div>`;
      marker.setContent(newContent);
    }
  });
  map.setFitView();
};

const updateMarkersList = () => {
  const tableDataWells = state.tableData.map((item) => item.wellId);
  let visibleMarkers = [];

  // 先清除现有的聚合
  if (cluster) {
    cluster.clearMarkers();
  }

  allWellMarkersList.value.forEach((marker) => {
    const wellId = marker.De.extData.el.wellId;
    if (!tableDataWells.includes(wellId)) {
      marker.hide();
    } else {
      marker.show();
      visibleMarkers.push(marker);
    }
  });

  // 重新创建聚合，只包含可见的标记
  if (visibleMarkers.length > 0) {
    cluster = new AMap.MarkerClusterer(map, visibleMarkers, {
      gridSize: 80,
    });
  }
};

// 初始化井加markers
const setWellListMarker = () => {
  let markersList = [];
  // 清空之前的标记
  allWellMarkersList.value = [];

  state.tableData.forEach((el) => {
    const markerContent = getMarkerContent(el);
    let marker = new AMap.Marker({
      position: [el.geoLongtude, el.geoLatitude],
      title: el.wellCommonName,
      content: markerContent,
      extData: { el },
    });

    markersList.push(marker);
    allWellMarkersList.value.push(marker);
    marker.on("click", (e) => {
      state.tableData = state.tableData.map((item) => {
        return {
          ...item,
          isSelectFlag:
            el.wellId === item.wellId ? !item.isSelectFlag : item.isSelectFlag,
          isSelected:
            el.wellId === item.wellId ? !item.isSelected : item.isSelected,
        };
      });
      handleProjectChange("add", true);
    });
  });
  return markersList;
};

const handleChangeCenter = (el) => {
  if (!el.geoLongtude || !el.geoLatitude) return;

  const targetMarker = allWellMarkersList.value.find(
    (marker) => marker.De.extData.el.wellId === el.wellId
  );
  map.setFitView(targetMarker, {
    padding: [100, 100, 100, 100],
    duration: 500,
  });
};
// 初始化地图
const initMap = () => {
  isMapLoading.value = true;
  AMapLoader.load({
    key: "1bae371e8b427f7862a4162be76e73d6", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      "AMap.Scale",
      "AMap.MouseTool",
      "AMap.ToolBar",
      "AMap.Rectangle", //地点搜索插件
      "AMap.GeometryUtil", //地点搜索插件
      "AMap.MarkerClusterer",
    ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    AMapUI: {
      // 是否加载 AMapUI，缺省不加载
      version: "1.1", // AMapUI 版本
      plugins: [], // 需要加载的 AMapUI ui插件
    },
  })
    .then((AMap) => {
      map = new AMap.Map("map_container", {
        //设置地图容器id
        // viewMode: "3D", //是否为3D地图模式
        resizeEnable: true,
        // zoom: 10, //初始化地图级别
        center: [105, 34],
        zoom: 4,
        // center: [116.398003, 39.900321], //初始化地图中心点位置
        mapStyle: "amap://styles/dark", //设置地图的显示样式
        lang: "zh_cn", //可选值：en，zh_en, zh_cn
      });

      const markersList = setWellListMarker();

      // 初始化聚合
      if (markersList.length > 0) {
        cluster = new AMap.MarkerClusterer(map, markersList, {
          gridSize: 80,
        });
      }

      var mouseTool = new AMap.MouseTool(map);
      var overlays = [];
      map.remove(overlays);
      mouseTool.on("draw", function (e) {
        overlays.push(e.obj);
        state.currentOverlay = e.obj.getPath();
        state.tableData = state.tableData.map((el) => {
          if (!el.geoLatitude || !el.geoLongtude) return el;

          var point = [el.geoLongtude, el.geoLatitude];
          var isPointInRing = AMap.GeometryUtil.isPointInRing(
            point,
            e.obj.getPath()
          );
          return {
            ...el,
            isSelectFlag: el.isSelected ? true : isPointInRing,
            isNewSelectFlag: isPointInRing && !el.isSelected,
          };
        });

        state.getSelectWell = state.tableData.filter(
          (el) => el.isNewSelectFlag
        );

        if (state.getSelectWell.length) {
          handleProjectChange("add", false);
          map.remove(overlays);
          overlays = [];
        } else {
          map.remove(overlays);
          overlays = [];
          return;
        }
      });

      function draw(type) {
        switch (type) {
          case "rectangle": {
            mouseTool.rectangle({
              fillColor: "#525252",
              strokeColor: "#eee",
              //同Polygon的Option设置
            });
            break;
          }
          case "circle": {
            mouseTool.circle({
              fillColor: "#525252",
              strokeColor: "#eee",
              //同Circle的Option设置
            });
            break;
          }
        }
      }

      var rectangle = document.getElementById("map-select-rectangle");
      var circle = document.getElementById("map-select-circle");

      rectangle.onclick = function (e) {
        state.drawSelect = "drawRectangle";
        if (state.drawSelect === "drawRectangle") {
          draw("rectangle");
        } else {
          state.drawSelect = null;
          map.remove(overlays);
          overlays = [];
          mouseTool.close(true);
        }
      };
      circle.onclick = function (e) {
        state.drawSelect = "drawCircle";
        if (state.drawSelect === "drawCircle") {
          draw("circle");
        } else {
          state.drawSelect = null;
          map.remove(overlays);
          overlays = [];
          mouseTool.close(true);
        }
      };
      draw("marker");
      // document.getElementById('clear').onclick = function(){
      //     map.remove(overlays)
      //     overlays = [];
      // }
      // document.getElementById('close').onclick = function(){
      //     mouseTool.close(true)//关闭，并清除覆盖物
      //     for(var i=0;i<radios.length;i+=1){
      //         radios[i].checked = false;
      //     }
      // }
      map.on("click", function (e) {
        var point = [e.lnglat.getLng(), e.lnglat.getLat()];
        var isPointInRing = AMap.GeometryUtil.isPointInRing(
          point,
          state.currentOverlay
        );
        if (!isPointInRing) {
          map.remove(overlays);
          overlays = [];
          mouseTool.close(true); //关闭，并清除覆盖物
          state.drawSelect = null;
        }
      });
      isMapLoading.value = false;
    })
    .catch((e) => {
      isMapLoading.value = false;
    });
};

const clearSelectData = () => {
  state.selectWellList = [];
};

const clearMarkers = () => {
  if (cluster) {
    cluster.clearMarkers();
  }
  allWellMarkersList.value = [];
};

watch(
  () => route.query.projectName,
  (newVal) => {
    state.projectName = newVal;
  }
);
watch(
  () => route.query.projectId,
  async (newProjectId) => {
    if (newProjectId) {
      state.projectId = newProjectId;
      await getWellListData(false);
    }
  },
  { immediate: true }
);

watch(
  () => state.searchSelectProject,
  (newValue) => {
    handleEnterSearch();
  }
);
onMounted(async () => {
  await getWellListData(false);
  await initMap();
});
</script>

<style lang="scss" scoped>
.map {
  display: flex;
  height: calc(100vh - 50px);
  width: 100%;
}
#map_container {
  height: calc(100vh - 50px);
  width: 100%;
  // background-image: url("@/assets/Map/mapBackground.jpg");
  // background-size: cover;
  // background-position: center;
  // background-attachment: fixed;
  // background-repeat: no-repeat;
}
.well-all {
  flex: 1;
  overflow-y: auto;
  height: calc(100% - 50px);
}
/* 添加滚动条样式 */
.well-all::-webkit-scrollbar {
  width: 6px;
}

.well-all::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.well-all::-webkit-scrollbar-track {
  background-color: transparent;
}
.info-list {
  width: 260px;
  background-color: #313131;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 2;
}
.is-fold-list {
  display: none;
}
.map-left,
.map-right {
  background-color: #212121;
  font-size: 20px;
  height: 46px;
  padding: 0 10px;
  font-weight: bold;
  color: #eee;
  display: flex;
  justify-content: space-between;
  //   border-top: 1px solid #eee;
}
.map-left-title,
.map-right-title {
  font-size: 16px;
  line-height: 46px;
}
.map-left-btn {
  display: flex;
  margin: 10px 0;
}
.map-left-btn-item {
  padding: 0px 5px;
}
.map-left-btn-item:hover {
  padding: 0px 5px;
  background-color: #525252;
  border-radius: 5px;
}
.map-left-img,
.map-right-img {
  cursor: pointer;
  // margin-left: 10px;
}
.map-right-drop {
  cursor: pointer;
}
.map-content {
  width: 100%;
  position: relative;
  display: flex;
}

.work-info-content {
  flex: 1;
  display: flex;
}

.map-header {
  position: absolute;
  left: 40%;
  z-index: 2;
}

.search-box {
  width: 380px;
  margin: 10px auto;
  position: relative;
}
.search-box-list {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  left: 0;
  width: 380px;
}
.search-list {
  color: #b2b2b2;
  padding: 6px;
  text-align: center;
  border-radius: 5px;
  margin: 5px 15px 5px 0;
  background-color: #414141;
  display: flex;
}
.search-list-value {
  color: #fff;
  font-size: 14px;
}
.search-list-label {
  font-size: 12px;
}
.search-list-cancel {
  width: 10px;
  height: 10px;
  margin-left: 6px;
}
.map-content-icon {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  margin: 10px;
  padding: 4px;
}
.is-fold-count {
  background-color: #212121;
}
.unfold-count {
  background-color: #67c23a;
}

.fold-img {
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
}

.well-all-list,
.select-well-list {
  width: 100%;
  cursor: pointer;
  color: #eee;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
  height: 26px;
  line-height: 26px;
}

.list-item-btn {
  display: none;
}
.list-item-btn-selected {
  display: flex;
  justify-content: center;
}
.list-item {
  display: flex;
  .list-item-img {
    img {
      vertical-align: middle;
    }
  }
}

.well-all-list:hover,
.select-well-list:hover {
  background-color: #525252;
  .list-item-btn {
    display: flex;
    // justify-content: space-between;
    // margin: auto 0;
  }
}

.list-item-name {
  // color: #fff;
  font-size: 12px;
}
.more-item {
  display: flex;
  align-items: center;
  height: 30px;
  margin-left: 2px;
  img {
    margin: 2px;
  }
}
.more-item:hover {
  cursor: pointer;
  color: #67c23a;
  overflow: hidden;
}
.more-item:hover img {
  filter: drop-shadow(#67c23a 100px 0);
  transform: translateX(-100px);
}

.is-fold-icon {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
}
.unfold-icon {
  position: absolute;
  right: 260px;
  top: 0;
  z-index: 2;
}
.map-count {
  position: absolute;
  background-color: #f08a5d;
  font-size: 12px;
  padding: 0 5px;
  border-radius: 30px;
  color: #eee;
}
.map-count-left {
  left: 30px;
  top: 2px;
}
.map-count-right {
  right: 30px;
  top: 2px;
}
.is-fold-well {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.unfold-well {
  position: absolute;
  left: 260px;
  top: 0;
  z-index: 2;
}
.project-info-list {
  position: absolute;
  width: 260px;
  background-color: #313131;
  right: 0;
  top: 0;
  height: 100%;
  z-index: 2;
}

.empty-select-well {
  margin: 70px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  img {
    width: 100px;
  }
}

.loading-indicator {
  height: calc(100vh - 50px);
  left: 260px;
  right: 260px;
  background-color: #212121;
  position: absolute;
  z-index: 1000;
}

:deep(.well-all-list .el-checkbox.is-disabled.is-checked .el-checkbox__inner) {
  background-color: #67c23a !important;
  border-color: #67c23a !important;
}
:deep(.well-all-list .el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #f08a5d !important;
  border-color: #f08a5d !important;
}
:deep(.select-well-list .el-checkbox__input.is-checked .el-checkbox__inner) {
  // background-color: #67c23a !important;
  // border-color: #67c23a !important;
  background-color: #f08a5d !important;
  border-color: #f08a5d !important;
}
</style>
