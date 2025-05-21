<template>
  <div class="main-container">
    <!-- 顶部 -->
    <TopBar />
    <!-- project部分 -->
    <div
      class="project-container"
      v-loading="projectLoading"
      element-loading-background="#525252"
      element-loading-text="Loading..."
    >
      <div class="title">PROJECTS</div>
      <div class="project-list">
        <div class="new-project" @click="addNewProject()">
          <div class="add-icon-container">
            <img src="@/assets/Home/add.svg" alt="添加" class="add-icon" />
          </div>
          <div class="add-text">NEW</div>
        </div>
        <div
          class="project-item"
          v-for="(item, index) in state.projectList"
          :key="index"
        >
          <div>
            <img src="@/assets/Home/project-item.svg" alt="project-item" />
          </div>
          <div class="project-info" @click="handleView(item)">
            <div>{{ item.name }}</div>
            <div style="font-size: 12px">
              {{ item.createUserId }}@{{ item.createDate }}
            </div>
          </div>
          <div class="label-item">
            <!-- <div class="private label-item-info" v-if="item.identity === '0'">
              Private
            </div> -->
            <div class="label-item-info" v-if="item.identity === '1'">
              <!-- Sharing -->
              <img src="@/assets/Home/sharing.svg" alt="" />
            </div>
            <div class="label-item-info" v-if="item.identity === '2'">
              <!-- Shared -->
              <img src="@/assets/Home/shared.svg" alt="" />
            </div>
          </div>
        </div>
        <div class="new-project" @click="handleOpenProjectList()">
          <div class="add-icon-container">
            <img src="@/assets/Home/open.svg" alt="打开" class="add-icon" />
          </div>
          <div class="add-text">OPEN</div>
        </div>
      </div>
    </div>
    <!-- DASHBOARDS部分 -->
    <div class="dashboards">
      <div class="dashboard-top">
        <div class="title">DASHBOARDS</div>
        <div class="dashboard-list">
          <div
            v-for="(item, index) in dashBoardMenus"
            :key="index"
            :class="
              state.activeTab === item.type
                ? 'dashboard-item-active'
                : 'dashboard-item'
            "
            @click="changeCurrentMenu(item.type)"
          >
            <img :src="requireImg(item.img)" alt="" />
            {{ item.name }}
          </div>
        </div>
      </div>
      <div v-if="state.activeTab === 'Browse'" class="browse-container">
        <el-table
          :data="state.browseTableData"
          row-key="id"
          lazy
          :load="load"
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          v-loading="dashBoardLoading"
          element-loading-background="#525252"
          element-loading-text="Loading..."
        >
          <el-table-column prop="name" label="Name"> </el-table-column>
          <el-table-column prop="project" label="Project">
            <template #default="scope">
              <div style="display: flex">
                <span>{{ scope.row.project }}</span>
                <div
                  v-if="!scope.row.children"
                  class="item-btn"
                  @click="openDashBoard(scope.row)"
                >
                  OPEN
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="updated" label="Updated"></el-table-column>
          <el-table-column prop="created" label="Created"></el-table-column>
          <el-table-column align="right">
            <template #header>
              <el-input
                v-model="search"
                size="small"
                placeholder="Search"
                clearable
                @keydown.enter="handleSearch"
              />
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div
        v-else
        v-loading="dashBoardLoading"
        element-loading-background="#525252"
        element-loading-text="Loading..."
      >
        <div class="dashboard-card">
          <div
            v-for="(dashBoardItem, index) in state.dashBoardList"
            :key="index"
            :class="
              state.activeTab === dashBoardItem.type
                ? 'record-item-active'
                : 'record-item'
            "
          >
            <div class="record-img">
              <img
                :src="'data:image/png;base64,' + dashBoardItem.preview"
                alt=""
              />
              <div class="show">
                <div class="open-label" @click="openDashBoard(dashBoardItem)">
                  OPEN
                </div>
              </div>
            </div>

            <el-tooltip placement="bottom">
              <template #content>
                <div>{{ dashBoardItem.name }}</div>
                <div>{{ dashBoardItem.createUserId }}</div>
                <div>{{ dashBoardItem.createDate }}</div>
              </template>

              <div class="record-info">
                <div style="width: 90%">
                  <div class="record-title">{{ dashBoardItem.name }}</div>
                  <div class="label-item">
                    <div class="label-item-info" v-if="dashBoardItem.sharing">
                      <!-- Sharing -->
                      <img src="@/assets/Home/share-to-other.svg" alt="" />
                    </div>
                    <div class="label-item-info" v-if="dashBoardItem.shared">
                      <!-- Shared -->
                      <img src="@/assets/Home/share-with-me.svg" alt="" />
                    </div>
                    <div class="label-item-info" v-if="dashBoardItem.favorite">
                      <img src="@/assets/Home/favorite.svg" alt="" />
                    </div>
                  </div>

                  <div>{{ dashBoardItem.createUserId }}</div>
                  <div>{{ dashBoardItem.createDate }}</div>
                </div>
                <div style="margin: auto">
                  <el-popover
                    placement="right"
                    width="180"
                    trigger="click"
                    effect="dark"
                  >
                    <template #reference>
                      <img src="@/assets/Home/more.svg" />
                    </template>
                    <div
                      v-for="(items, index) in moreOptionList"
                      :key="index"
                      class="more-item"
                      @click="handleOperation(items.operation, dashBoardItem)"
                    >
                      <img :src="requireImg(items.img)" alt="" />

                      <span
                        v-if="
                          items.operation === 'favorites' &&
                          dashBoardItem.favorite
                        "
                        >Remove from favorites</span
                      >
                      <span v-else>{{ items.name }}</span>
                    </div>
                  </el-popover>
                </div>
              </div>
            </el-tooltip>
          </div>
        </div>
        <!-- show more是否展示: 返回数据中的total是否大于10,并且state.dashBoardList.length 是否< 20 -->
        <div
          v-if="state.currentTotal > 10 && state.dashBoardList.length < 20"
          class="show-more"
          @click="handleShowMore"
        >
          Show More...
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
    <ConfirmDialog
      v-model:visible="deleteVisible"
      :title="deleteTitle"
      :content="deleteContent"
      :confirmText="deleteConfirmText"
      @confirm="confirmDelete()"
    ></ConfirmDialog>
    <ShareDialog
      v-model:visible="shareDialogVisible"
      :title="shareTitle"
      confirmText="SHARE"
      @confirm="confirmShare"
    ></ShareDialog>
    <ProjectListDialog
      v-model:visible="showListDialog"
      @refresh="initData"
    ></ProjectListDialog>
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
import { useRoute, useRouter } from "vue-router";

import { ElMessage } from "element-plus";
import moment from "moment";

import { requireImg } from "@/utils/utils";
import TopBar from "/src/views/TopBar.vue";
import ConfirmDialog from "/src/views/components/ConfirmDialog.vue";
import ProjectListDialog from "./ProjectListDialog.vue";
import RenameDialog from "/src/views/components/RenameDialog.vue";
import ShareDialog from "/src/views/components/ShareDialog.vue";

import { fetchProject, createProject, share } from "@/api/project/project";
import {
  deleteDashboard,
  favorite,
  renameDashBoard,
  fetchDashBoard,
  fetchBrowse,
  getById,
} from "@/api/dashBoard/dashBoard";

const router = useRouter();
interface User {
  id: number;
  date: string;
  name: string;
  address: string;
  hasChildren?: boolean;
  children?: User[];
}

let renameVisible = ref(false);
let rename = ref("");
let renameTitle = ref("");
let renameContent = ref("");
let renameConfirmText = ref("");
let showListDialog = ref(false);
let deleteVisible = ref(false);
let deleteTitle = ref("");
let deleteContent = ref("");
let deleteConfirmText = ref("");
let shareDialogVisible = ref(false);
let shareTitle = ref("");
let projectLoading = ref(false);
let dashBoardLoading = ref(false);

const state = reactive({
  form: {},
  projectList: [],
  activeTab: "Recent",
  allDashBoardList: [],
  dashBoardList: [],
  currentTotal: 0,
  currentDashBoardItem: {},
  browseTableData: [],
});
let search = ref("");

const dashBoardMenus = [
  { name: "Recent", id: 0, type: "Recent", img: "Home/recent.svg" },
  { name: "Favorites", id: 1, type: "Favorite", img: "Home/favoriteTitle.svg" },
  { name: "Shared with me", id: 2, type: "Shared", img: "Home/shared.svg" },
  { name: "Shared to other", id: 2, type: "Sharing", img: "Home/sharing.svg" },
  { name: "Browse", id: 3, type: "Browse", img: "Home/browse.svg" },
];

const moreOptionList = [
  { name: "Open", img: "Home/openDashBoard.svg", operation: "open" },
  { name: "Rename", img: "Home/rename.svg", operation: "rename" },
  { name: "Delete", img: "Home/delete.svg", operation: "delete" },
  {
    name: "Add To Favorites",
    img: "Home/more-favorite.svg",
    operation: "favorites",
  },
  { name: "Share", img: "Home/more-share.svg", operation: "share" },
];

const getImageSrc = (src) => {
  return requireImg(src);
};

const changeCurrentMenu = (type) => {
  state.activeTab = type;
  if (type === "Browse") {
    queryBrowse(null);
  } else {
    handleViewDashboardList(type);
  }
};

const addNewProject = () => {
  // dialogVisible.value = true;
  openRenameDialog("projectName", "CREATE PROJECT", "Project Name:", "CREATE");
};

const handleOpenProjectList = () => {
  showListDialog.value = true;
};

const handleOperation = (operation, dashBoardItem) => {
  state.currentDashBoardItem = dashBoardItem;
  const { name } = dashBoardItem;

  switch (operation) {
    case "open":
      openDashBoard(dashBoardItem);
      break;
    case "rename":
      // 打开重命名弹窗
      openRenameDialog(
        "dashBoardName",
        "RENAME DASHBOARD",
        "DashBoard Name:",
        "SAVE"
      );
      break;
    case "delete":
      handleDeleteDashBoard(name);
      break;
    case "favorites":
      handleFavorites(dashBoardItem);
      break;
    case "share":
      openShareDialog(dashBoardItem);
      break;
  }
};
const openDashBoard = async (item) => {
  let res = await getById({ id: item.projectId });

  router.push({
    path: "/DashBoard",
    query: {
      projectId: item.projectId,
      id: item.id,
      type: item.type,
      projectName: res.data.name ? res.data.name : "Empty Project",
    },
  });
};

const handleView = (item) => {
  router.push({
    path: "/DashBoard",
    query: { projectId: item.id, projectName: item.name },
  });
};

const openRenameDialog = (renameType, title, content, text) => {
  rename.value = renameType;
  renameTitle.value = title;
  renameContent.value = content;
  renameConfirmText.value = text;
  renameVisible.value = true;
};

const handleChangeName = (renameValue) => {
  if (rename.value === "dashBoardName") {
    return changeDashBoardName(renameValue);
  } else {
    return handleCreateProject(renameValue);
  }
};

// 重命名DashBoard名称
const changeDashBoardName = async (renameValue) => {
  //  dashBoardLoading.value = true;
  // const data = { ...state.currentDashBoardItem};
  // try {
  //   const res = await renameDashBoard(data);
  //   if (res.msg === "success") {
  //     ElMessage({
  //       showClose: true,
  //       message: "success",
  //       type: "success",
  //     });
  //     queryProject();
  //   }
  // } catch (error) {
  //   console.log(error);
  // } finally {
  //   dashBoardLoading.value = false;
  // }
  const { currentDashBoardItem } = state;
  state.dashBoardList.map((el) => {
    if (el.index === currentDashBoardItem.index) {
      el.title = renameValue;
    }
  });
};
const handleCreateProject = async (renameValue) => {
  projectLoading.value = true;
  const data = { name: renameValue };
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
    projectLoading.value = false;
  }
};

const openDeleteDialog = (titleName, title, content, text) => {
  deleteTitle.value = title;
  deleteContent.value = content;
  deleteConfirmText.value = text;
  deleteVisible.value = true;
};
//是否删除dashboard弹窗
const handleDeleteDashBoard = (title) => {
  openDeleteDialog(
    "deleteDashBoard",
    "Warning",
    `Are you sure you want to delete ${title}？`,
    "DELETE"
  );
};

// 确认删除dashboard
const confirmDelete = async () => {
   dashBoardLoading.value = true;
  const data = { ...state.currentDashBoardItem};
  try {
    const res = await deleteDashboard(data)
    if (res.msg === "success") {
      ElMessage({
        showClose: true,
        message: "success",
        type: "success",
      });
      queryDashBoard(state.activeTab, 10);
    }
  } catch (error) {
    console.log(error);
  } finally {
    dashBoardLoading.value = false;
  }
};
// 收藏
const handleFavorites = async (dashBoardItem) => {
  //  dashBoardLoading.value = true;
  const data = { ...dashBoardItem };
  try {
    const res = await favorite(data);
    if (res.msg === "success") {
      ElMessage({
        showClose: true,
        message: "success",
        type: "success",
      });
      queryDashBoard(state.activeTab, 10);
    }
  } catch (error) {
    console.log(error);
  } finally {
    // dashBoardLoading.value = false;
  }
  state.dashBoardList.map((el) => {
    if (el.index === dashBoardItem.index) {
      el.favorite = !el.favorite;
    }
  });
};

const openShareDialog = (dashBoardItem) => {
  const { title } = dashBoardItem;
  shareDialogVisible.value = true;
  shareTitle.value = `SHARE-${title}`;
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

const handleShowMore = () => {
  // queryDashBoard(state.activeTab, 20)

  state.dashBoardList = [
    {
      title: "DashBoard-11-23",
      user: "XJ",
      index: 1,
      createTime: "2022-11-23 12:00:00",
      img: "Well/Well3DDrawing.png",
      sharing: true,
      favorite: true,
    },
    {
      title: "DashBoard-11-22",
      user: "YK",
      index: 2,
      createTime: "2022-11-22 14:30:00",
      img: "Well/WellBoreStructure.png",
      sharing: true,
      favorite: true,
    },
    {
      title: "DashBoard-11-21",
      user: "ZL",
      index: 3,
      createTime: "2022-11-21 10:00:00",
      img: "Well/WellPlanForm.png",
      favorite: true,
      shared: true,
    },
    {
      title: "DashBoard-11-20",
      user: "MN",
      index: 4,
      createTime: "2022-11-20 11:10:00",
      img: "Well/WellProfile.png",
      shared: true,
    },
    {
      title: "DashBoard-11-19",
      user: "OP",
      index: 5,
      createTime: "2022-11-19 12:50:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-18",
      user: "QR",
      index: 6,
      createTime: "2022-11-18 13:30:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-17",
      user: "QR",
      index: 6,
      createTime: "2022-11-17 14:20:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-16",
      user: "QR",
      index: 6,
      createTime: "2022-11-16 15:10:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-15",
      user: "QR",
      index: 6,
      createTime: "2022-11-15 16:20:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-14",
      user: "QR",
      index: 6,
      createTime: "2022-11-14 17:30:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-13",
      user: "QR",
      index: 6,
      createTime: "2022-11-13 18:10:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-12",
      user: "QR",
      index: 6,
      createTime: "2022-11-12 12:20:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-11",
      user: "QR",
      index: 6,
      createTime: "2021-11-11 12:30:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-10",
      user: "QR",
      index: 6,
      createTime: "2021-11-10 12:10:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-09",
      user: "QR",
      index: 6,
      createTime: "2021-11-09 12:20:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-08",
      user: "QR",
      index: 6,
      createTime: "2021-11-08 12:30:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-07",
      user: "QR",
      index: 6,
      createTime: "2021-11-07 12:10:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-06",
      user: "QR",
      index: 6,
      createTime: "2021-11-06 12:20:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-05",
      user: "QR",
      index: 6,
      createTime: "2021-11-05 12:30:00",
      img: "Well/Well3DDrawing.png",
    },
    {
      title: "DashBoard-11-04",
      user: "QR",
      index: 6,
      createTime: "2021-11-04 12:10:00",
      img: "Well/Well3DDrawing.png",
    },
  ];
};

const load = (
  row: User,
  treeNode: unknown,
  resolve: (data: User[]) => void
) => {
  setTimeout(() => {
    resolve(row.children);
  }, 1000);
};

const handleSearch = () => {
  queryBrowse(search.value);
};

const queryProject = async () => {
  projectLoading.value = true;
  const params = {
    PageIndex: 1,
    PageSize: 5,
  };
  try {
    const res = await fetchProject(params);
    if (res) {
      state.projectList = res.data;
    }
  } catch (error) {
    console.log(error);
  } finally {
    projectLoading.value = false;
  }
};

const handleViewDashboardList = (type) => {
  if (type === "Recent") {
    state.dashBoardList = state.allDashBoardList.slice(0, 20);
  } else if (type === "Favorite") {
    state.dashBoardList = state.allDashBoardList.filter(
      (el) => el.isFavorite === "1"
    );
  } else if (type === "Sharing") {
    state.dashBoardList = state.allDashBoardList.filter(
      (el) => el.identity === "1"
    );
  } else {
    state.dashBoardList = state.allDashBoardList.filter(
      (el) => el.identity === "2"
    );
  }
  state.currentTotal = state.dashBoardList.length;
};

const queryDashBoard = async (type, PageSize) => {
  dashBoardLoading.value = true;
  try {
    const res = await fetchDashBoard();
    if (res) {
      state.allDashBoardList = res.data;
      handleViewDashboardList(type);
    }
  } catch (error) {
    console.log(error);
    dashBoardLoading.value = false;
  } finally {
    dashBoardLoading.value = false;
  }
};

const queryBrowse = async (searchValue) => {
  // dashBoardLoading.value = true;
  // const params = {
  // browseName:searchValue
  // };
  // try {
  //   const res = await fetchBrowse(params);
  //   if (res) {
  //     state.dashBoardList = res.data;
  //   }
  // } catch (error) {
  //   console.log(error);
  // } finally {
  //   dashBoardLoading.value = false;
  // }
  dashBoardLoading.value = true;
  setTimeout(() => {
    (state.browseTableData = [
      {
        id: 1,
        name: "myFile",
        project: "-",
        updated: "2022-11-07",
        created: "2022-11-07",
        hasChildren: true,
        children: [
          {
            id: 11,
            name: "myDemo1",
            project: "project3",
            updated: "2022-11-07",
            created: "2022-11-07",
            hasChildren: false,
          },
          {
            id: 12,
            name: "myDemo2",
            project: "project3",
            updated: "2022-11-07",
            created: "2022-11-07",
            hasChildren: false,
          },
        ],
      },
      {
        id: 2,
        name: "demo1",
        project: "project1",
        updated: "2022-11-06",
        created: "2022-11-06",
      },
      {
        id: 3,
        name: "demo2",
        project: "project2",
        updated: "2022-11-05",
        created: "2022-11-05",
      },
    ]),
      (dashBoardLoading.value = false); // 结束加载
  }, 2000);
};

const initData = () => {
  queryProject();
  queryDashBoard("Recent", 10);
};
onMounted(() => {
  initData();
});
</script>
<style lang="scss" scoped>
.main-container {
  height: 100%;
}

.loading-indicator {
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
  color: #666;
}

.project-container {
  color: #eee;
  // background-image: url("@/assets/Home/banner.webp");
  // opacity: 0.8;
  // display: flex;
  height: 200px;

  & > .title {
    height: 40px;
    font-weight: bold;
    line-height: 40px;
    margin-left: 20px;
  }
  .project-item {
    cursor: pointer;
    color: #eee;
    height: 60px;
    border: 1px solid #fff;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  .project-item:hover {
    color: #fff;
    animation: slider 0.8s;
    border: 1px solid #67c23a;
    background-color: rgba(49, 49, 49, 0.6);
  }
  .project-info {
    margin-left: 10px;
  }
  .project-list {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    .new-project {
      cursor: pointer;
      font-weight: bold;
      color: #fff;
      height: 60px;
      .add-icon {
        width: 26px;
        height: 26px;
        line-height: 26px;
        margin: 7px;
      }
      .add-icon-container {
        width: 40px;
        height: 40px;
        background-color: rgba(49, 49, 49, 0.6);
        border-radius: 50px;
      }
      .add-text {
        height: 20px;
      }
    }
  }
}
.project-container::before {
  content: "";
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 200px;
  background-image: url("@/assets/Home/banner.webp");
  // filter: blur(8px); /* 调整模糊程度 */
  opacity: 0.8;
  z-index: -1; /* 将模糊背景置于内容后面 */
}

.dashboards {
  background-color: #313131;
  color: #eee;
  width: 100%;
  //   height: calc(100vh - 250px);

  .dashboard-top {
    background-color: #414141;
    height: 110px;
    font-weight: bold;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
  }
  .dashboard-list {
    display: flex;
    height: 60px;
    line-height: 60px;

    img {
      width: 18px;
      height: 18px;
      vertical-align: middle; // 垂直居中对齐
      margin-right: 4px; // 图片和文字之间的间距
    }
  }
  .dashboard-item-active {
    border-bottom: 2px solid #67c23a;
    color: #67c23a;
    padding: 0 20px;
    cursor: pointer;
    display: flex; // 使用flex布局
    align-items: center; // 垂直居中
    gap: 4px; // 图片和文字之间的间距

    img {
      filter: brightness(0) saturate(100%) invert(71%) sepia(13%)
        saturate(1217%) hue-rotate(64deg) brightness(93%) contrast(88%); // 将SVG改为#67c23a颜色
    }
  }
  .dashboard-item {
    padding: 0 20px;
    cursor: pointer;
    display: flex; // 使用flex布局
    align-items: center; // 垂直居中
    gap: 4px; // 图片和文字之间的间距
    border-bottom: 2px solid transparent; // 添加透明边框
    &:hover {
      border-bottom: 2px solid #67c23a;
      color: #67c23a;

      img {
        filter: brightness(0) saturate(100%) invert(71%) sepia(13%)
          saturate(1217%) hue-rotate(64deg) brightness(93%) contrast(88%); // 将SVG改为#67c23a颜色
      }
    }
  }
  .dashboard-item:hover {
    border-bottom: 2px solid #67c23a;
    color: #67c23a;
  }
  .dashboard-card {
    min-height: calc(100vh - 360px);
    display: flex;
    padding: 0 20%;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;

    .record-item {
      width: 20%;
     // height: 270px;
    //  height: 100%;
      background-color: #414141;
      margin: 20px;
      border-radius: 5px;
      /* box-shadow: 10px 10px 20px 5px rgba(0, 0, 0, 0.5) inset, 0px 0px 30px #eee; */
      box-shadow: 2px 2px 6px 2px #000;
      cursor: pointer;
      transition: all 0.5s linear;
      font-size: 12px;
    }
    .record-item:hover {
      // transform: scale(1.1);
      // box-shadow: 1px 2px 5px 2px #121212 inset, 0px 0px 30px #eee;
      box-shadow: 0px 0px 20px #eee;
    }
    .record-img {
      width: 100%;
      height: 60%;
      position: relative;
      transition: all 0.5s linear;
      img {
        width: 100%;
        height: 100%;
        border-radius: 5px 5px 0 0;
      }
      .show {
        width: 100%;
        height: 100%;
        display: none;
        position: absolute;
        top: 0;
        text-align: center;
        line-height: 180px;
        //    transition: all 2.5s ease-in-out;
      }
      .open-label {
        width: 80px;
        background-color: #67c23a;
        color: #fff;
        height: 30px;
        line-height: 30px;
        margin: auto;
        display: none;
        border-radius: 5px;
      }
    }
    .record-img:hover .open-label {
      display: block;
    }
    .record-img:hover .show {
      color: #67c23a;
      display: flex;
      background: #525252;
      font-weight: bold;
      border-radius: 5px 5px 0 0;
    }
    // .record-img:hover {
    //     transform: scale(1.1);
    // }
    .record-info {
      padding: 10px 0px 10px 10px;
      border-top: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      height: 100px;
      box-sizing: border-box;
      .record-title {
        font-size: 16px;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
.show-more {
  text-align: center;
  font-size: 20px;
  padding: 20px 0;
  cursor: pointer;
}
.show-more:hover {
  color: #67c23a;
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

// 小标签
.label-item {
  display: flex;
  font-size: 12px;
  align-items: center;
  height: 20px;
}
.label-item-info {
  color: #eee;
  text-align: center;
  border-radius: 5px;
  margin: 2px 8px 2px 0;
  img {
    width: 18px;
    height: 18px;
    vertical-align: middle;
  }
}
.private {
  background-color: #0092ca;
}
.sharing {
  background-color: #f08a5d;
}
.shared {
  background-color: #67c23a;
}

.browse-container {
  min-height: calc(100vh - 360px);
}
.item-btn {
  display: none;
}
:deep(.el-table tr:hover) {
  .item-btn {
    padding: 0px 6px;
    border-radius: 5px;
    background-color: #67c23a;
    position: absolute;
    left: -40px;
    top: 0;
    cursor: pointer;
    display: block;
    font-size: 12px;
  }
  // background-color: #414141;
  // color: #eee;
}
:deep(.el-table th.el-table__cell) {
  background-color: #313131;
  color: #fff;
}
:deep(.el-table tr) {
  background-color: #414141;
  color: #eee;
}
/* 修改Element UI表格hover行的背景颜色 */
:deep(.el-table--enable-row-hover .el-table__body tr:hover > td) {
  background-color: #525252; /* 你想要的颜色 */
  color: #fff;
}

:deep(
    .el-table__expand-icon .el-icon svg,
    .el-table__expand-icon--expanded .el-icon svg
  ) {
  display: none !important;
}
//
/* 覆盖Element UI的展开按钮图标 */
:deep(.el-table__expand-icon) {
  background-image: url("@/assets/Home/browse-file.svg"); /* 替换为你的自定义图标路径 */
  background-size: cover;
  content: "1";
}
:deep(.el-table__expand-icon--expanded) {
  background-image: url("@/assets/Home/browse-file-open.svg"); /* 替换为你的自定义图标路径 */
  background-size: cover;
  transform: none !important;
}

:deep(.el-table .el-table__cell) {
  padding: 0 !important;
}

:deep(.el-table) {
  --el-table-border-color: transparent !important;
}
:deep(.browse-container tbody) {
  outline: none !important;
}

/* 去掉Element UI表格的边框线 */
// :deep(.el-table .el-table__body td, .el-table .el-table__header th) {
//   border: none !important;
// }
// // 去掉所有的横线
// :deep(.el-table__row>td){ border: none; }
// :deep(.el-table::before) { height: 0px; }

// // 只去除表格的最最底部的横线
// :deep(.el-table--border::after,.el-table--group::after,.el-table::before) {
// 	background-color: transparent;
// }

// /* 使用 ::before 伪元素添加自定义折叠图标 */
// :deep(.el-table__expand-icon--expanded::before) {
//   content: '';
//   display: inline-block;
//   width: 16px; /* 根据图片大小调整 */
//   height: 16px; /* 根据图片大小调整 */
//   background-image: url('@/assets/Well/WellIcon.png'); /* 替换为你的折叠图标路径 */
//   background-size: cover;
//   background-repeat: no-repeat;
//   vertical-align: middle;
//   margin-right: 8px;
// }
// /* 当行已展开时，覆盖折叠按钮的图标 */
// :deep(.el-table__expand-icon--expanded .el-icon) {
//   background-image: url('@/assets/Well/WellIcon.png'); /* 替换为你的自定义折叠图标路径 */
//   background-size: cover;
// }

// :deep(.el-dialog__title) {
//   color: #eee;
// }

// :deep(.el-dialog) {
//   --el-dialog-padding-primary: 0 !important;
//   // --el-dialog-padding-primary
// }
// :deep(.el-dialog__body) {
//   padding: 20px;
//   // --el-dialog-padding-primary
// }

// :deep(.dialog-footer) {
//   padding: 10px;
//   // --el-dialog-padding-primary
// }
// :deep(.el-popover) {
//   --el-popover-padding: 0 !important;
// }
</style>
