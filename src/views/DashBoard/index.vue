<template>
  <div
    v-loading="loading"
    element-loading-background="#525252"
    element-loading-text="Loading..."
  >
    <TopBar />
    <div class="dashboard">
      <!-- 左侧Project -->
      <div :class="state.isFold ? 'is-fold-list' : 'info-list-left'">
        <div class="dashboard-left">
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
                v-for="(items, index) in moreOptionList"
                :key="index"
                class="more-item"
                @click="handleOperation(items.operation)"
              >
                <img :src="requireImg(items.img)" alt="" />
                <span>{{ items.name }}</span>
              </div>
            </el-popover>
          </div>
        </div>

        <!-- 使用自定义的 Collapse 组件 -->
        <Collapse
          v-model="activeNames"
          :items="collapseItems"
          @change="handleChange"
        >
          <!-- Wells 内容 -->
          <template #wells>
            <el-tree
              ref="treeRef"
              :data="treeData"
              node-key="logSetId"
              :render-content="renderContent"
              :props="treeProps"
              :load="loadNode"
              :draggable="true"
              :allow-drop="() => false"
              :allow-drag="() => true"
              lazy
              @node-drag-start="handleNodeDragStart"
              @node-drag-end="handleNodeDragEnd"
              @node-click="handleNodeClick"
              class="well-tree"
            >
            </el-tree>
          </template>

          <!-- Tops 内容 -->
          <!-- <template #tops>
            <div class="wells-content">
              <p>Tops content goes here</p>
            </div>
          </template> -->

          <!-- Tables 内容 -->
          <!-- <template #tables>
            <div class="wells-content">
              <p>Tables content goes here</p>
            </div>
          </template> -->
        </Collapse>
      </div>
      <!-- 中间内容 -->
      <div
        class="content"
        :style="{
          width: contentWidth,
          marginLeft: state.isFold ? '0' : '260px',
          marginRight: state.isFoldRight ? '0' : '280px',
        }"
      >
        <div class="content-top">
          <!-- 这是中间部分的内容 -->
          <evLayout
            :haveTabIcon="false"
            @addData="addData"
            @deleteData="deleteData"
            :headerItems="headerItems"
            :dragItems="headerItems"
            :isTree="false"
            :isTop="true"
            :isLeft="false"
            ref="layoutDashBoardRef"
            :haveBar="true"
            style="height: 100%; width: 100%"
          >
            <template #headerLeft>
              <div class="content-left">
                <div class="content-fold">
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
            </template>
            <template #headerRight>
              <div class="content-right">
                <div
                  v-for="item in rightMenus"
                  :key="item.id"
                  :class="
                    state.rightMenuActiveTab === item.type
                      ? 'content-right-item-active'
                      : 'content-right-item'
                  "
                  @click="handleContentTopMenu(item.type)"
                >
                  <el-popover
                    v-if="item.type == 'DashBoards'"
                    placement="bottom"
                    trigger="hover"
                    effect="dark"
                  >
                    <template #reference>
                      <div style="display: flex">
                        <div>
                          <div class="content-right-item-img">
                            <img :src="requireImg(item.img)" alt="" />
                          </div>
                          <div>{{ item.name }}</div>
                        </div>
                        <div style="display: flex; align-items: center">
                          <img
                            class="map-right-drop"
                            src="@/assets/Map/dropDown.svg"
                          />
                        </div>
                      </div>
                    </template>
                    <div
                      v-for="(items, index) in dashBoaderOptionList"
                      :key="index"
                      class="more-item"
                      style="width: 100%"
                      @click="handleDashBoardOperation(items.operation)"
                    >
                      <!-- <img :src="requireImg(items.img)" alt="" /> -->
                      <span>{{ items.name }}</span>
                    </div>
                  </el-popover>
                  <div v-else>
                    <div class="content-right-item-img">
                      <img :src="requireImg(item.img)" alt="" />
                    </div>
                    <div @click="handleContentTopMenu(item.type)">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </evLayout>
        </div>
      </div>
      <!-- 右侧功能栏 -->
      <div :class="state.isFoldRight ? 'is-fold-list' : 'info-list-right'">
        <!-- DASHBOARD TEMPLATES/DASHBOARD/系统操作设置...
        设置当前选择的组件名,加载不同的组件
        currentComponentName -->
        <!-- 不同组件有不同的属性,  -->
        <!-- <div
          class="actual-trajectory right-content"
          v-if="
            currentComponentName === 'PROFILE' ||
            currentComponentName === 'TOPVIEW'
          "
        >
          <div class="dashboard-right">{{ currentComponentName }}</div>
          <ActualTrajectory
            ref="ActualTrajectoryRef"
            :currentComponentConfig="currentComponentConfig"
          ></ActualTrajectory>
        </div>
        <div
          class="actual-trajectory right-content"
          v-if="currentComponentName === 'DASHBOARD'"
        >
          <div class="dashboard-right">PANEL</div>
          <Panel
            ref="PanelRef"
            :currentComponentConfig="currentComponentConfig"
          ></Panel>
        </div> -->
        <div
          class="actual-trajectory right-content"
          v-if="
            currentComponentName === 'PROFILE' ||
            currentComponentName === 'TOPVIEW' ||
            currentComponentName === 'DASHBOARD' ||
            currentComponentName === 'TRAJECTORY'||
            currentComponentName === 'WELLLOGS'
          "
        >
          <div class="dashboard-right">{{ currentComponentName }}</div>
          <ComponentSettings
            ref="componentSettingsRef"
            :currentComponentConfig="currentComponentConfig"
            :componentType="currentComponentName"
          ></ComponentSettings>
        </div>

        <div class="right-content" v-else>
          <div>
            <template v-if="currentComponentName === 'Dashboard'">
              <div class="dashboard-right">
                <span v-if="isDashBoardData">DASHBOARD</span>

                <span v-else>DASHBOARD TEMPLATES</span>
              </div>
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
                  {{ item.name }}
                </div>
              </div>
            </template>

            <template v-else-if="currentComponentName === 'Tools'">
              <div class="tools-right">
                <span>TOOLS</span>
                <!-- Add tools content here -->
                <div class="tools-content">Tools content goes here</div>
              </div>
            </template>
          </div>
          <div
            v-loading="rightLoading"
            element-loading-background="#525252"
            v-if="state.activeTab === 'Browse'"
            class="tree-card"
          >
            <div class="search-container">
              <el-input
                v-model="searchText"
                placeholder="Search..."
                class="search-input"
                @input="searchBrowe"
              />
            </div>
            <el-tree
              ref="browseRef"
              :data="tempArray"
              node-key="folderId"
              :props="browseProps"
              class="well-tree"
              :render-content="renderBrowseContent"
            >
            </el-tree>
          </div>
          <div
            v-loading="rightLoading"
            element-loading-background="#525252"
            v-else
            class="dashboard-card"
          >
            <div
              v-for="(dashBoardItem, index) in tempArray"
              :key="index"
              :class="{
                recorded: currentItem?.id == dashBoardItem.id,
                recordItem: !(currentItem?.id == dashBoardItem.id),
              }"
            >
              <div class="record-img">
                <img
                  :src="'data:image/png;base64,' + dashBoardItem.preview"
                  alt=""
                />
                <div class="show">
                  <div class="open-label" @click="loadLayout(dashBoardItem)">
                    OPEN
                  </div>
                </div>
              </div>

              <div class="record-info">
                <div class="record-content">
                  <div class="record-title">{{ dashBoardItem.name }}</div>
                  <div class="label-item">
                    <div class="label-item-info" v-if="dashBoardItem.sharing">
                      <!-- Sharing -->

                      <img src="@/assets/Home/sharing.svg" alt="" />
                    </div>
                    <div class="label-item-info" v-if="dashBoardItem.shared">
                      <!-- Shared -->
                      <img src="@/assets/Home/shared.svg" alt="" />
                    </div>

                    <div v-if="dashBoardItem.isFavorite == '1'">
                      <svg
                        t="1733905402335"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="47480"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="16"
                        height="16"
                      >
                        <path
                          d="M781.186088 616.031873q17.338645 80.573705 30.59761 145.848606 6.119522 27.537849 11.219124 55.075697t9.689243 49.976096 7.649402 38.247012 4.079681 19.888446q3.059761 20.398406-9.179283 27.027888t-27.537849 6.629482q-5.099602 0-14.788845-3.569721t-14.788845-5.609562l-266.199203-155.027888q-72.414343 42.836653-131.569721 76.494024-25.498008 14.278884-50.486056 28.557769t-45.386454 26.517928-35.187251 20.398406-19.888446 10.199203q-10.199203 5.099602-20.908367 3.569721t-19.378486-7.649402-12.749004-14.788845-2.039841-17.848606q1.01992-4.079681 5.099602-19.888446t9.179283-37.737052 11.729084-48.446215 13.768924-54.055777q15.298805-63.23506 34.677291-142.788845-60.175299-52.015936-108.111554-92.812749-20.398406-17.338645-40.286853-34.167331t-35.697211-30.59761-26.007968-22.438247-11.219124-9.689243q-12.239044-11.219124-20.908367-24.988048t-6.629482-28.047809 11.219124-22.438247 20.398406-10.199203l315.155378-28.557769 117.290837-273.338645q6.119522-16.318725 17.338645-28.047809t30.59761-11.729084q10.199203 0 17.848606 4.589641t12.749004 10.709163 8.669323 12.239044 5.609562 10.199203l114.231076 273.338645 315.155378 29.577689q20.398406 5.099602 28.557769 12.239044t8.159363 22.438247q0 14.278884-8.669323 24.988048t-21.928287 26.007968z"
                          fill="#F9ED69"
                          p-id="47481"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div>{{ dashBoardItem.createUserId }}</div>
                  <div>{{ dashBoardItem.lastUseDate }}</div>
                </div>
                <div style="margin: auto">
                  <el-popover
                    placement="right"
                    width="180"
                    trigger="hover"
                    effect="dark"
                  >
                    <template #reference>
                      <img src="@/assets/Home/more.svg" />
                    </template>
                    <div
                      v-for="(items, index) in moreOptionListByDashBoard"
                      :key="index"
                      class="more-item"
                      @click="
                        handleOperationByDashBoard(
                          items.operation,
                          dashBoardItem
                        )
                      "
                    >
                      <img :src="requireImg(items.img)" alt="" />

                      <span
                        v-if="
                          items.operation === 'favorites' &&
                          dashBoardItem.isFavorite == '1'
                        "
                        >Remove from favorites</span
                      >

                      <span v-else>{{ items.name }}</span>
                    </div>
                  </el-popover>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="close-btn" @click="handleCloseComponent">Close</div>
      </div>
    </div>
    <RenameDialog
      v-model:visible="renameVisible"
      :title="renameTitle"
      :content="renameContent"
      :confirmText="renameConfirmText"
      @confirm="handleChangeName"
    ></RenameDialog>
    <RenameDialog
      v-model:visible="renameDashBoardVisible"
      :title="renameDashBoardTitle"
      :content="renameDashBoardContent"
      :confirmText="renameDashBoardConfirmText"
      @confirm="handleDashBoardChangeName"
    ></RenameDialog>
    <ShareDialog
      v-model:visible="shareDialogVisible"
      :title="shareTitle"
      confirmText="SHARE"
      @confirm="confirmShare"
    ></ShareDialog>
    <ShareDialog
      v-model:visible="shareDialogDashBoardVisible"
      :title="shareDashBoardTitle"
      confirmText="SHARE"
      @confirm="confirmDashBoardShare"
    ></ShareDialog>
  </div>
</template>

<script lang="ts" setup>
import {
  Connent,
  EventTarget,
  SetTreeEventTarget,
  SetEventTarget,
} from "@/plugins/websocket/index.js";
import { throttle } from "lodash";
import {
  getList,
  getBrowse,
  createDashboardTemplate,
  getDashBoardData,
  createDashboard,
  getStyle,
  favoriteDashBoard,
  shareDashBoard,
  updateDashboardTemplate,
  updateDashboard,
  deleteDashboardTemplate,
  deleteDashboard,
  useResource,
  getById,
} from "@/api/dashBoard/dashBoard";
import { evLayout, mittBus } from "@/component/layout/libs/evLayout.js";
import "@/component/layout/libs/evLayout.css";

import {
  onMounted,
  ref,
  onUnmounted,
  nextTick,
  watch,
  reactive,
  computed,
  defineAsyncComponent,
} from "vue";
import { ElMessage } from "element-plus";
import * as echarts from "echarts";
import lodash from "lodash";
import { useRoute, useRouter } from "vue-router";

import { requireImg } from "@/utils/utils";
import {
  getCurveList,
  getCurveInfo,
  getCurveInfoData,
  getWellBoreData,
  getBHAData,
} from "@/api/well/well";
import { updateWorkSpace } from "@/api/workspace/workspace";
import {
  getProjectWellList,
  createProject,
  renameProject,
  saveAsProject,
  changeProjectWell,
  share,
} from "@/api/project/project";
import getFileImg from "@/assets/DashBoard/well-list.svg";
import getWellIcon from "@/assets/Map/well.svg";
import getSIcon from "@/assets/DashBoard/track.svg";
import getTIcon from "@/assets/DashBoard/trajectory.svg";
import getCurveSetIcon from "@/assets/DashBoard/curveSet.svg";

import getCurveIcon from "@/assets/DashBoard/curve.svg";
import getWellBoreIcon from "@/assets/DashBoard/well-bore-structure.svg";
import getBHAIcon from "@/assets/DashBoard/BHA.svg";
import getImportIcon from "@/assets/DashBoard/import.svg";
import getImportSelectIcon from "@/assets/DashBoard/import-select.svg";

import getArrowDown from "@/assets/DashBoard/arrow-down.svg";
import getArrowRight from "@/assets/DashBoard/arrow-right.svg";
import TopBar from "@/views/TopBar.vue";
import Collapse from "@/views/components/Collapse.vue";
import ComponentSettings from "@/views/DashBoard/ComponentSettings.vue";

import { UpLoadFiles } from "@/utils/fileupload/evget-fileupload";
const contentWidth = computed(() => {
  layoutResize();
  if (!state.isFold && !state.isFoldRight) {
    return "calc(100% - 540px)";
  } else if (!state.isFold && state.isFoldRight) {
    return "calc(100% - 260px)";
  } else if (state.isFold && !state.isFoldRight) {
    return "calc(100% - 280px)";
  } else {
    return "100%";
  }
});
import RenameDialog from "/src/views/components/RenameDialog.vue";
import ShareDialog from "/src/views/components/ShareDialog.vue";
const currentComponentName = ref("Dashboard");
const currentComponentPaneID = ref(null);
let currentComponentConfig = ref({});
const route = useRoute();
const router = useRouter();
const titleName = route.query.workName;
const visible = ref(false);
let loading = ref(false);
const tableRef = ref(null);
const treeRef = ref(null);

const componentSettingsRef = ref(null);

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
let treeData = [];

interface Tree {
  name: string;
  logSetId: string;
  children?: Tree[];
}
interface Node {
  data: Tree;
  level: number;
}

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

const state = reactive({
  runInfo: {
    wellboreId: props.currentRunInfo.runId,
    wellId: props.currentRunInfo.wellId,
  },
  currentInfo: {},
  tableData: [],
  selectedRows: [],
  isFold: false,
  isFoldRight: false,
  projectName: route.query.projectName || "Empty Project",
  projectId: route.query.projectId,
  activeTab: "Recent",
  rightMenuActiveTab: null,
});
const activeNames = ref([0]); // 默认展开第一个面板

const collapseItems = [
  { title: "Wells", name: "wells", img: "DashBoard/well-list.svg" },
  // { title: "Tops", name: "tops" },
  // { title: "Tables", name: "tables" },
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
  { name: "Share", img: "Home/share.svg", operation: "share" },
];
// //树结构渲染
const renderContent = (h, { node, data }) => {
  if (node.level == 1) {
    return h(
      "div",
      {
        class: "el-tree-node__label-first",
        style:
          "width: 100%;overflow: hidden;padding-right:10px;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 12px;display: flex;justify-content: space-between;", // 设置父元素的样式
      },
      h(
        "div",
        { class: "el-tree-node-children-left" },
        h("img", {
          class: "treeimg",
          onClick: () => {
            handleEdit(data);
          },
          src: `${getWellIcon}`,
          style: "vertical-align: middle;width: 16px;height: 16px;",
        }),
        h(
          "span",
          {
            class: "node-label",
            onClick: () => {
              getCurveTableData(data);
            },
            style: "padding-left:4px",
          },
          data.wellName
        )
      ),
      h("img", {
        class: "treeimg",
        onClick: () => {
          handleEdit(data);
        },
        src: node.expanded ? `${getArrowDown}` : `${getArrowRight}`,
        style: "vertical-align: middle;width: 16px;height: 16px;",
      })
    );
  } else if (node.level == 2) {
    return h(
      "div",
      {
        class: "el-tree-node__label-second",
        style:
          "position: relative;display: flex;justify-content: space-between;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 12px;", // 设置父元素的样式
      },
      h("img", {
        class: "treeimg",
        onClick: () => {
          handleEdit(data);
        },
        src:
          node.data.name === "Design Trajectory"
            ? `${getTIcon}`
            : node.data.name === "Actual Trajectory"
            ? `${getSIcon}`
            : node.data.name === "WellBoreStructure"
            ? `${getWellBoreIcon}`
            : node.data.name === "BHA"
            ? `${getBHAIcon}`
            : `${getCurveSetIcon}`,
        style:
          "vertical-align: middle;position: absolute;width: 16px;height: 16px;padding-left:20px",
      }),
      h(
        "div",
        {
          class: "el-tree-node__label",
          style:
            "width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 12px;padding-left: 40px;", // 设置父元素的样式
        },
        h(
          "div",
          {
            class: "node-label",
          },
          recordObj.value[node.data.name + node.data.wellId]
            ? h(
                "div",
                {
                  class: "node-label",
                  style: "display:flex;justify-content: space-between;", // 设置父元素的样式
                },
                h(
                  "div",
                  {
                    class: "second-node-label", // 设置父元素的样式 ,
                  },
                  node.label
                ),
                h(
                  "div",
                  {
                    class: "select-count-label",
                    style:
                      "background-color: #67c23a;font-size: 12px;padding: 0 5px;border-radius: 30px;color: #eee;",
                  },
                  recordObj.value[node.data.name + node.data.wellId]
                )
              )
            : h(
                "div",
                {
                  class: "design-trajectory-label",
                  style:
                    "display:flex;justify-content: space-between;width: 100%",
                },
                h(
                  "div",
                  {
                    class: "second-node-label", // 设置父元素的样式 ,
                  },
                  node.label
                ),

                node.data.name === "Design Trajectory" &&
                  h("img", {
                    class: "treeimg",
                    onClick: () => {
                      handleImport(data);
                    },
                    src: `${getImportIcon}`,
                    style: "vertical-align: middle;width: 16px;height: 16px;",
                  })
              )
          // h("span", { class: "node-label" }, node.label)
        )

        // h(
        //   "span",
        //   { class: "node-label" },
        //   recordObj.value[node.data.name + node.data.wellId]
        //     ? node.label
        //     +
        //         "(" +
        //         recordObj.value[node.data.name + node.data.wellId] +
        //         ")"
        //     : node.label
        // )
      ),
      // ),
      h(
        "div",
        { class: "has-children-right", style: "padding-right: 10px" },
        node.data.name !== "Design Trajectory" &&
          node.data.name !== "Actual Trajectory" &&
          node.data.name !== "WellBoreStructure"
          ? h("img", {
              class: "treeimg",
              onClick: () => {
                handleEdit(data);
              },
              src: node.expanded ? `${getArrowDown}` : `${getArrowRight}`,
              style: "vertical-align: middle",
            })
          : null
      )
    );
  } else if (node.level == 3) {
    return h(
      "div",
      {
        class: "el-tree-node__label-third",
        style:
          "position: relative;display: flex;justify-content: space-between;width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 12px", // 设置父元素的样式
      },
      h("img", {
        class: "treeimg",
        src:
          node.data.parentName && node.data.parentName === "BHA"
            ? `${getBHAIcon}`
            : `${getCurveIcon}`,
        style:
          "position: absolute;width: 16px;height: 16px;padding-left: 40px;",
      }),
      // h(
      //   "span",
      //   {
      //     class: "node-label",
      //     onClick: () => {
      //       getCurveTableData(data);
      //     },
      //     style: "margin-left:30px",
      //   },
      //   recordObj.value[
      //     node.data.parentName && node.data.parentName === "BHA"
      //       ? node.data.runId
      //       : node.data.logcurveId
      //   ]
      //     ? node.label +
      //         "(" +
      //         recordObj.value[
      //           node.data.parentName && node.data.parentName === "BHA"
      //             ? node.data.runId
      //             : node.data.logcurveId
      //         ] +
      //         ")"
      //     : node.label
      // )
      h(
        "div",
        {
          class: "node-label",
          onClick: () => {
            getCurveTableData(data);
          },
          style: "margin-left:60px;width: 100%;margin-right:20px",
        },
        recordObj.value[
          node.data.parentName && node.data.parentName === "BHA"
            ? node.data.runId
            : node.data.logcurveId
        ]
          ? h(
              "div",
              {
                class: "node-label",
                style:
                  "display:flex;justify-content: space-between;width: 100%", // 设置父元素的样式
              },
              h(
                "div",
                {
                  class: "node-label", // 设置父元素的样式 ,
                },
                node.label
              ),
              h(
                "div",
                {
                  class: "node-label",
                  style:
                    "background-color: #67c23a;font-size: 12px;padding: 0 5px;border-radius: 30px;color: #eee;",
                },
                recordObj.value[
                  node.data.parentName && node.data.parentName === "BHA"
                    ? node.data.runId
                    : node.data.logcurveId
                ]
              )
            )
          : h("span", { class: "node-label" }, node.label)
      )
    );
  }
};

// 参考井
const loadNode = async (node: Node, resolve: (data: Tree[]) => void) => {
  if (node.level === 0 && state.projectId) {
    const res = await getProjectWellList({ projectId: state.projectId });
    const wellInfoList = res.data.map((item) => {
      return {
        ...item,
        type: "Well",
      };
    });
    return resolve(wellInfoList);
  } else if (node.level === 1) {
    const listData = await getListData(node.data);
    const wellboreData = await getWellBoreData(node.data);

    const list = [
      { name: "Actual Trajectory", ...node.data, leaf: true },
      { name: "Design Trajectory", leaf: true },
      {
        ...wellboreData.data[0],
        name: "WellBoreStructure",
        leaf: true,
        wellId: node.data.wellId,
      },
      { name: "BHA", wellId: node.data.wellId },
      ...listData,
    ];
    return resolve(list);
  } else if (node.level === 2) {
    if (node.data.name === "BHA") {
      const { wellId } = node.data;
      const BHAData = await getBHAData({ wellId });
      const BHADataList = BHAData.data.map((item) => {
        return {
          name: item.tubularName,
          ...item,
          parentName: "BHA",
          wellId,
        };
      });
      return resolve(BHADataList);
    } else {
      const curveData = await getCurveInfoList(node.data);

      const newCurveData = curveData.map((item) => {
        return {
          ...item,
          parentName: "curve",
        };
      });
      return resolve(newCurveData);
      // return resolve(await getCurveInfoList(node.data));
    }
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
const handleFold = async (isFoldFlag) => {
  state[isFoldFlag] = !state[isFoldFlag];
  await nextTick();
  layoutDashBoardRef.value.resize();
};
const handleEdit = (data) => {
  console.log(data);
  // 重置功能的实现
};
// 设计轨迹导入
const handleImport = (data) => {
  //
  const input = document.createElement("input");
  input.type = "file";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File value:", file, e.target.files);
      console.log("File name:", file.name);
      console.log("File size:", file.size + " bytes");
    }
  };
  input.click();

  // UpLoadFiles
  // 在这个函数中,调用浏览器上传文件接口
  //  fileInput.click();
  // console.log(data);
  // //打开上传文件
  // const uploadIcon = document.getElementById("upload-icon");
  // uploadIcon.addEventListener("click", () => {
  //   const fileInput = document.getElementById("file-upload");
  //   fileInput.click();
  // });
  // <img id="upload-icon" src="upload-icon.png" alt="Upload" style="width: 100px; height: 100px; cursor: pointer;">
  // <input id="file-upload" type="file" style="display: none;">

  // document.getElementById('upload-icon').addEventListener('click', function() {
  //     document.getElementById('file-upload').click();
  // });
};
const getCurveTableData = (data) => {
  console.log(data);
};

const getListData = async (data) => {
  const { wellId } = data;
  const params = {
    wellId,
    WellboreId: wellId,
  };
  const response = await getCurveList(params);
  const curveList = response.data;
  curveList.map((element) => {
    return { ...element, children: [], leaf: false };
  });
  return curveList;
};
const handleNodeClick = (data) => {
  // layoutDashBoardRef.value.startDragData(data);
  //   const dragData = JSON.parse(JSON.stringify(data));
  // layoutDashBoardRef.value.startDragData(dragData);
};
const handleNodeDragStart = (node, event) => {
  const dragData = JSON.parse(JSON.stringify(node.data));

  if (node.level == 2) {
    dragData.dragId = node.data.name + node.data.wellId;
  }

  // const type = dragData.parentName === "curve" ? "add" : "reset";
  const type =
    dragData.parentName === "curve" || dragData.name === "Actual Trajectory"
      ? "add"
      : "reset";
  layoutDashBoardRef.value.startDragData(dragData, type);
};

const handleNodeDragEnd = (node, endNode, position, event) => {
  // event.preventDefault();
  // if (treeRef.value) {
  //   treeRef.value.store.refresh();
  // }
};

// 生成唯一ID
const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
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
const startDrag = (item) => {
  layoutDashBoardRef.value.startDrag(item);
};
const handleOperation = (operation: any) => {
  console.log("选中的菜单项:", operation);
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
        `Are you sure you want to close ${state.projectName}?`,
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

const openCloseDialog = (titleName, title, content, text) => {
  closeTitle.value = title;
  closeContent.value = content;
  closeConfirmText.value = text;
  closeVisible.value = true;
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
          path: "/DashBoard",
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
  } else {
    // 另存为
    const data = {
      oldProjectId: state.projectId,
      NewProjectName: renameValue,
    };
    try {
      const res = await saveAsProject(data);
      if (res) {
        ElMessage({
          showClose: true,
          message: "success",
          type: "success",
        });
        console.log(res);
        // getWellListData();
        router.push({
          path: "/DashBoard",
          query: {
            projectId: res.id, // 新返回的projectId?projectId=${res.id}&projectName=${res.name} || ${renameValue}
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
// currentContentTopMenu是当前选中组件的id即paneId
let currentPaneId = ref(null);
let allComponent = ref([]); // 所有组件的配置{paneId, setting}

const handleChangeContentTopMenu = (value) => {
  currentPaneId.value = value?.activeID;
  const component = allComponent.value.find((item) => {
    if (item.paneID === value?.activeID) {
      return item;
    }
  });
  handleSetComponentConfig(value?.activeID, component.componetConfig);
};

const handleSetComponentConfig = (id, componetConfig) => {
  let componentNameObj = layoutDashBoardRef.value.getStateById(
    currentPaneId.value
  );
  componentNameObj.componetConfig = componetConfig;
  layoutDashBoardRef?.value?.changeData(currentPaneId.value, componentNameObj);
};

const handleContentTopMenu = (type) => {
  if (!currentPaneId.value) return;

  let componentNameObj = layoutDashBoardRef.value.getStateById(
    currentPaneId.value
  );
  const { componetConfig, dragData, name, paneID } = componentNameObj;
  // 取obj中name的值, 转为大写
  currentComponentName.value = name.toUpperCase();
  currentComponentPaneID.value = paneID;
  currentComponentConfig.value = componetConfig;
  state.isFoldRight = false;
  // currentComponentName === 'PROFILE'
  //   // Properties
  //   switch (type) {
  //     case "Properties":

  //        let obj = layoutDashBoardRef.value.getStateById(currentPaneId.value);

  //       // 属性
  //       break;
  //     case "Tools":
  //       break;
  //     case "Filter":
  //       break;
  //     case "DashBoards":
  //       break;
  //   }
  // 改变currentComponentName的值,
  //   const { componentName, paneID } = componentNameObj;
  //   currentComponentName.value = componentName;
  //   currentComponentPaneID.value = paneID;
  //   state.isFoldRight = false;
  // };
  // 获取当前组件的setting, 打开右侧菜单栏,componentName, paneID
  // handleChangeComponent({componentName:name.toUpperCase(),paneID})
  //
  // obj需要取出seeting值{},展示在ActualTrajectory这个组件里面的min, max值
  //  seting
  // obj====> ActualTrajectory
  // index

  // ActualTrajectoryref=obj;
  // 轨迹 ActualTrajectory
  // 曲线 WElloLog
  // bha BHa---
  // layoutDashBoardRef.value.changeData(currentPaneId.value, obj);

  state.rightMenuActiveTab = type;
  state.isFoldRight = false;
};
/**
 * 中间区域功能
 */
const layoutDashBoardRef = ref(null);
//dashboard功能菜单
const dashBoaderOptionList = computed(() => {
  return [
    { name: "Open DashBoard", operation: "open" },
    {
      name: "Save DashBoard",
      operation: "save",
    },
    {
      name: "Save As DashBoard",
      operation: "saveAs",
    },
    {
      name: "Clear DashBoard",
      operation: "clear",
    },
    {
      name: "Open Template",
      operation: "openTemp",
    },
    {
      name: "Save As Template",
      operation: "saveAsTemp",
    },
  ];
});
const rightMenus = [
  {
    name: "Properties",
    id: 0,
    type: "Properties",
    img: "DashBoard/properties.svg",
  },
  { name: "Tools", id: 1, type: "Tools", img: "DashBoard/tools.svg" },
  { name: "Filter", id: 3, type: "Filter", img: "DashBoard/filter.svg" },
  {
    name: "DashBoards",
    id: 3,
    type: "DashBoards",
    img: "DashBoard/dashBoard.svg",
  },
];
/**
 * 右侧区域功能
 */

//cards功能菜单
const moreOptionListByDashBoard = [
  { name: "Rename", img: "Home/rename.svg", operation: "rename" },
  { name: "Delete", img: "Home/delete.svg", operation: "delete" },
  {
    name: "Add To Favorites",
    img: "Home/more-favorite.svg",
    operation: "favorites",
  },
  { name: "Share", img: "Home/share.svg", operation: "share" },
];
const clearRoute = () => {
  if (route.query.type) {
    router.push({
      path: "/DashBoard",
      query: {
        projectId: state.projectId,
        projectName: state.projectName,
      },
    });
  }
};
//清空dashboard
const clearDashBoard = async () => {
  currentItem.value = null;
  layoutDashBoardRef.value.loadLayout("{}");
  recordObj.value = {};
  clearRoute();
};
//右侧区域tabs
const dashBoardMenus = [
  { name: "Recent", id: 0, type: "Recent" },
  { name: "Favorites", id: 1, type: "Favorite" },
  { name: "Browse", id: 3, type: "Browse" },
];
//需要保存的类型
const saveType = ref(null);
const handleDashBoardOperation = (operation: String) => {
  switch (operation) {
    case "open":
      isDashBoardData.value = true;
      state.isFoldRight = false;
      state.activeTab = "Recent";
      changeCurrentMenu(state.activeTab);
      break;
    case "save":
      saveType.value = 0;

      if (currentItem.value && currentItem.value.type == "1") {
        saveLayout(null);
      } else {
        setName(true);
      }
      break;
    case "saveAs":
      saveType.value = 0;
      setName(true);
      break;
    case "clear":
      clearDashBoard();
      break;
    case "openTemp":
      isDashBoardData.value = false;
      state.isFoldRight = false;
      changeCurrentMenu(state.activeTab);
      break;
    case "saveAsTemp":
      saveType.value = 1;
      if (currentItem.value && currentItem.value.type == "3") {
        saveLayout(null);
      } else {
        setName(true);
      }
      break;
    default:
      break;
  }
};
//右侧区域加载
const rightLoading = ref(false);
//Browse tabs
const searchText = ref("");
const searchBrowe = throttle(() => {
  changeCurrentMenu("Browse");
}, 1000);
//查询方法
const changeCurrentMenu = async (type: String) => {
  rightLoading.value = true;
  state.activeTab = type;
  if (isDashBoardData.value) {
    if (type == "Recent") {
      getDashBoardList(0);
    } else if (type == "Favorite") {
      getDashBoardList(1);
    } else if (type == "Browse") {
      let res = await getBrowse({ name: searchText.value });
      tempArray.value = res.data;
      rightLoading.value = false;
    }
  } else {
    if (type == "Recent") {
      getDashBoardTemplateList(0);
    } else if (type == "Favorite") {
      getDashBoardTemplateList(1);
    } else if (type == "Browse") {
      let res = await getBrowse({ name: searchText.value });
      tempArray.value = res.data;
      rightLoading.value = false;
    }
  }
};
// 查询dashboard
const getDashBoardTemplateList = async (isFavorite) => {
  const res = await getList({ isFavorite });
  tempArray.value = res.data;
  rightLoading.value = false;
};
// 查询dashboardTemplate
const getDashBoardList = async (isFavorite) => {
  const res = await getDashBoardData({ isFavorite });
  tempArray.value = res.data;
  rightLoading.value = false;
};
const handleChange = (val: number[]) => {
  console.log("当前展开的面板:", val);
};

//记录当前数据模式是否是dashboard,
const isDashBoardData = ref(false);
//是否自动加载
const isAuto = ref(false);
//自动打开方法
const autoOpen = () => {
  isDashBoardData.value = route.query.type == "1";
  state.isFoldRight = false;
  state.activeTab = "Recent";
  isAuto.value = true;
  changeCurrentMenu(state.activeTab);
};
//记录当前操作的数据
const currentDashBoardItemByDashBoard = ref<any>(null);
const handleOperationByDashBoard = async (operation, dashBoardItem) => {
  currentDashBoardItemByDashBoard.value = dashBoardItem;
  const { title } = dashBoardItem;
  switch (operation) {
    case "rename":
      // 打开重命名弹窗
      setName(false, dashBoardItem.name);
      currentDashBoardItemByDashBoard.value = null;
      break;
    case "delete":
      handleDeleteDashBoard(dashBoardItem);
      break;
    case "favorites":
      handleFavorites(dashBoardItem);
      break;
    case "share":
      handleShare(dashBoardItem);
      break;
  }
};
// 删除
const handleDeleteDashBoard = async (dashBoardItem) => {
  const { id, type } = dashBoardItem;
  if (type == "1") {
    await deleteDashboard({ id });
  } else {
    await deleteDashboardTemplate({ id });
  }
  changeCurrentMenu(state.activeTab);
};
// 收藏
const handleFavorites = async (dashBoardItem) => {
  try {
    const res = await favoriteDashBoard({ resourceId: dashBoardItem.id });
    if (res.msg === "success") {
      ElMessage({
        showClose: true,
        message: "success",
        type: "success",
      });
    }
    changeCurrentMenu(state.activeTab);
  } catch (error) {
    console.log(error);
  } finally {
    // dashBoardLoading.value = false;
  }
};
//分享
const shareDialogDashBoardVisible = ref(false);
const shareDashBoardTitle = ref("");
const shareData = ref();
const handleShare = (dashBoardItem: any) => {
  const { name } = dashBoardItem;
  shareData.value = dashBoardItem;
  shareDialogDashBoardVisible.value = true;
  shareDashBoardTitle.value = `SHARE-${name}`;
  // confirmDashBoardShare("113");
};
//确定分享的回调
const confirmDashBoardShare = async (selectValue: string) => {
  try {
    const res = await shareDashBoard({
      resourceId: shareData.value.id,
      resourceType: shareData.value.type,
      userIds: [],
    });
    if (res.msg === "success") {
      ElMessage({
        showClose: true,
        message: "success",
        type: "success",
      });
    }
    shareData.value = null;
    shareDialogDashBoardVisible.value = false;
    changeCurrentMenu(state.activeTab);
  } catch (error) {
    console.log(error);
  } finally {
    // dashBoardLoading.value = false;
  }
};
//设置名称
const renameDashBoardVisible = ref(false);
const renameDashBoardTitle = ref("");
const renameDashBoardContent = ref("");
const renameDashBoardConfirmText = ref("");
const isReName = ref(false);
const setName = (isNew = true, val = "") => {
  renameDashBoardTitle.value = isNew ? `SET NAME` : `RENAME-${val}`;
  renameDashBoardContent.value = `DashBoard Name:`;
  renameDashBoardConfirmText.value = "SAVE";
  renameDashBoardVisible.value = true;
  isReName.value = !isNew;
};

const handleDashBoardChangeName = async (newName: string) => {
  //重命名才会调用
  if (isReName.value) {
    let obj = {
      name: newName,
      preview: currentDashBoardItemByDashBoard.value["preview"],
      style: currentDashBoardItemByDashBoard.value["style"],
      id: currentDashBoardItemByDashBoard.value["id"],
    };
    if (currentDashBoardItemByDashBoard.value["type"] == "1") {
      obj["projectId"] = currentDashBoardItemByDashBoard.value["projectId"];

      await updateDashboard(obj);
    } else {
      await updateDashboardTemplate(obj);
    }

    changeCurrentMenu(state.activeTab);
  } else {
    if (currentItem.value) {
      saveAsLayout(newName);
    } else {
      saveLayout(newName);
    }
  }
  isReName.value = false;
};

const saveLayout = async (name) => {
  let val = saveType.value;
  let style = await layoutDashBoardRef.value.saveLayout(val == 0, false, true);
  console.log(JSON.parse(style));

  let preview = await layoutDashBoardRef.value.saveImg();

  let obj = {
    style,
    preview,
  };
  if (val == 0) {
    saveType.value = null;
    if (currentItem.value) {
      obj.projectId = currentItem.value.projectId;
      obj.id = currentItem.value.id;
      obj.name = currentItem.value.name;
      await updateDashboard(obj);
    } else {
      obj.name = name;
      obj.projectId = state.projectId;
      await createDashboard(obj);
      // obj.type = 1;
      // currentItem.value = obj;
    }
  } else {
    saveType.value = null;
    if (currentItem.value) {
      obj.id = currentItem.value.id;
      obj.name = currentItem.value.name;
      await updateDashboardTemplate(obj);
    } else {
      obj.name = name;
      await createDashboardTemplate(obj);
      // obj.type = 3;
      // currentItem.value = obj;
    }
  }
  changeCurrentMenu(state.activeTab);
};

const saveAsLayout = async (name) => {
  let style = await layoutDashBoardRef.value.saveLayout(
    saveType.value == 0,
    false,
    true
  );
  console.log(JSON.parse(style));

  let preview = await layoutDashBoardRef.value.saveImg();

  let obj = {
    style,
    preview,
  };
  obj.name = name;
  if (saveType.value == 0) {
    obj.projectId = state.projectId;
    await createDashboard(obj);
  } else {
    await createDashboardTemplate(obj);
  }
  changeCurrentMenu(state.activeTab);
};
const layoutResize = async () => {
  await nextTick();
  layoutDashBoardRef.value.resize();
};
// 浏览树结构渲染
const renderBrowseContent = (h, { node, data }) => {
  if (data.type === 0) {
    return h(
      "div",
      {
        class: "el-tree-node__label",
        style:
          "width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 12px;display: flex;", // 设置父元素的样式
      },
      h("img", {
        src: `${getFileImg}`,
        style: { width: "14px", height: "14px", margin: "0 10px" },
      }),
      h(
        "span",
        {
          class: "node-label",
        },
        data.name
      )
    );
  } else if (data.type === 1) {
    return h(
      "div",
      {
        class: "el-tree-node__label",
        style:
          "width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;text-align:left;font-size: 12px;display: flex;margin-left:10px", // 设置父元素的样式
      },
      h(
        "span",
        {
          class: "node-label",
          onClick: () => {
            loadLayoutById(data.id);
          },
        },

        data.name
      )
    );
  }
};

// 获取指定路径下所有的vue文件，包括多层嵌套的
const components = import.meta.glob(
  "/src/component/layout/components/**/*.vue",
  {
    eager: false,
  }
);

const tempArray = ref([]);
const browseProps = {
  label: "folderName",
  children: "children",
};
const currentItem = ref(null);
const loadLayout = async (item) => {
  currentItem.value = item;

  recordObj.value = {};
  let res = await getStyle({ resourceId: item.id });
  layoutDashBoardRef.value.loadLayout(JSON.parse(res.data.style).layout);
  console.log(JSON.parse(res.data.style));

  clearRoute();
  useResource({ resourceId: item.id });
};
const loadLayoutById = async (id) => {
  let res = await getStyle({ resourceId: id });

  layoutDashBoardRef.value.loadLayout(res.data.style);
};

const iconMap = ref({
  Profile: "DashBoard/profile.svg",
  TopView: "DashBoard/top-view.svg",
  Trajectory: "DashBoard/3D-trajectory.svg", // 3d轨迹图
  WellLogs: "DashBoard/well-log.svg", // 散点图
  WellBoreStructure: "DashBoard/well-bore-structure.svg",
  BHA: "DashBoard/BHA.svg",
  Text: "DashBoard/text.svg",
  Dashboard: "DashBoard/instrument-panel.svg",
  // 可以添加更多组件的图标映射
});
// 提取组件名称并创建列表
const headerItems = ref(
  Object.keys(iconMap.value).map((fileName) => {
    // 获取文件名（不包括路径和扩展名）

    // const fileName = filePath.split("/").pop()?.replace(".vue", "") || "";

    // 获取对应的图标，如果没有映射则使用默认图标
    const icon = iconMap.value[fileName] || "Home/openDashBoard.svg";

    return {
      id: generateUUID(),
      name: fileName, // 保留原始名称用于组件识别
      icon: icon, // 添加图标属性
      img: requireImg(icon),
      component: defineAsyncComponent(
        () => import("/src/component/layout/components/" + fileName + ".vue")
      ),
    };
  })
);

watch(
  [() => route.query.projectId, () => route.query.projectName],
  ([newProjectId, newProjectName]) => {
    if (newProjectId) {
      state.projectId = newProjectId;
      state.projectName = newProjectName || "Empty Project";

      // 重新加载树数据
      if (treeRef.value) {
        loading.value = true;
        treeRef.value.store.setData([]);
        getProjectWellList({ projectId: newProjectId })
          .then((res) => {
            if (res.data) {
              treeRef.value.store.setData(res.data);
            }
          })
          .catch((error) => {
            console.error("Failed to load well list:", error);
            ElMessage.error("Failed to load project data");
          })
          .finally(() => {
            loading.value = false;
          });
      }
    }
  },
  { immediate: true }
);
watch(
  () => tempArray.value,
  (val) => {
    if (isAuto.value && val) {
      let index = val.findIndex((v) => {
        return v["id"] == route.query.id;
      });
      if (index != -1) {
        loadLayout(val[index]);
      }
      isAuto.value = false;
    }
  },
  { deep: true, immediate: true }
);

// 处理关闭项目
const handleClose = async () => {
  try {
    loading.value = true;
    // 清空当前项目数据
    if (treeRef.value) {
      treeRef.value.store.setData([]);
    }

    // 跳转到空项目状态
    router.push({
      path: "/DashBoard",
      query: {
        projectId: "",
        projectName: "Empty Project",
      },
    });

    ElMessage({
      type: "success",
      message: "Project closed successfully",
    });
  } catch (error) {
    console.error(error);
    ElMessage.error("Failed to close project");
  } finally {
    loading.value = false;
    closeVisible.value = false;
  }
};

// 确认关闭对话框
const confirmClose = () => {
  handleClose();
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
const recordObj = ref({});
const deleteData = (obj) => {
  if (obj) {
    if (obj["dragId"]) {
      recordObj.value[obj["dragId"]]--;
    }
    if (obj["logcurveId"]) {
      recordObj.value[obj["logcurveId"]]--;
    }
    if (obj["runId"]) {
      recordObj.value[obj["runId"]]--;
    }
  }
};
const addData = (obj) => {
  if (obj) {
    if (obj["dragId"]) {
      if (!recordObj.value[obj["dragId"]]) {
        recordObj.value[obj["dragId"]] = 1;
      } else {
        recordObj.value[obj["dragId"]]++;
      }
    }
    if (obj["logcurveId"]) {
      if (!recordObj.value[obj["logcurveId"]]) {
        recordObj.value[obj["logcurveId"]] = 1;
      } else {
        recordObj.value[obj["logcurveId"]]++;
      }
    }
    if (obj["runId"]) {
      if (!recordObj.value[obj["runId"]]) {
        recordObj.value[obj["runId"]] = 1;
      } else {
        recordObj.value[obj["runId"]]++;
      }
    }
  }
};
const loadWebSocketEvent = () => {
  let target = new EventTarget();
  SetEventTarget(target);
  target.addHandler("MessageEvent", (e) => {
    console.log("我收到消息了", e);
  });
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
  window.addEventListener("resize", layoutResize);
  mittBus.on("getComponentSetting", (obj) => handleGetComponentSetting(obj));
  mittBus.on("ChangeTab", (value) => handleChangeContentTopMenu(value));

  loadWebSocketEvent();
  if (route.query.type) {
    autoOpen();
  } else {
    changeCurrentMenu(state.activeTab);
  }
});
onUnmounted(() => {
  window.removeEventListener("resize", layoutResize);
  mittBus.off("ChangeTab");
  mittBus.off("getComponentSetting");
});

const handleCloseComponent = () => {
  // if (currentComponentPaneID.value) {

  // }
  // Get the component configuration from our unified settings component

  // Update the component settings
  if (currentComponentPaneID.value) {
    const componetConfig = componentSettingsRef.value.state;

    const obj = {
      paneID: currentComponentPaneID.value,
      componetConfig,
    };
    handleGetComponentSetting(obj);

    mittBus.emit("closeComponent", obj);
    currentComponentPaneID.value = null;
    currentComponentName.value = "Dashboard";
  }
  state.isFoldRight = true;
};
const handleGetComponentSetting = (setting) => {
  // 判断allComponent中是否存在setting.paneID的值, 如果存在, 则替换, 否则添加
  const index = allComponent.value.findIndex(
    (item) => item.paneID === setting.paneID
  );
  if (index !== -1) {
    allComponent.value[index] = setting;
  } else {
    allComponent.value.push(setting);
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  height: 100%;
  background-color: #313131;
  position: relative;
  overflow: hidden;
  user-select: none;
}
.info-list-left {
  width: 260px;
  position: fixed;
  left: 0;
  top: 50px;
  height: calc(100vh - 50px);
  z-index: 2;
  display: flex;
  flex-direction: column;
}
.info-list-right {
  position: fixed;
  width: 280px;
  right: 0;
  top: 50px; /* TopBar 的高度 */
  height: calc(100vh - 50px);
  z-index: 2;
  overflow-y: auto;
}
.is-fold-list {
  display: none;
}
.dashboard-left,
.dashboard-right {
  background-color: #212121;
  font-size: 16px;
  height: 46px;
  line-height: 46px;
  padding-left: 10px;
  font-weight: bold;
  color: #eee;
  //border-top: 1px solid #eee;
}
.map-right-drop {
  cursor: pointer;
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
.more-item_disabled {
  display: flex;
  align-items: center;
  height: 30px;
  margin-left: 2px;
  color: #666;
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

.content {
  // border-left: 2px solid #525252;
  // border-right: 2px solid #525252;
  width: 100%;
  min-height: calc(100vh - 50px);
}

.work-info-content {
  flex: 1;
  display: flex;
}
.tree-card {
  width: calc(100% - 20px);
  height: calc(100% - 108px);
  overflow-y: auto;
}
.dashboard-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  width: calc(100% - 20px);
  height: calc(100% - 128px);
  flex-direction: column;
  overflow-y: auto;

  .recordItem {
    width: 100%;
    height: 100px;
    background-color: #414141;

    cursor: pointer;
    transition: all 0.1s linear;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .recorded {
    width: 100%;
    height: 100px;
    background-color: #525252;

    cursor: pointer;
    transition: all 0.1s linear;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .recordItem:hover {
    // transform: scale(1.1);
    // box-shadow: 1px 2px 5px 2px #121212 inset, 0px 0px 30px #eee;
    box-shadow: 0px 0px 10px #8b8b8b;
  }
  .record-img {
    width: 80px;
    height: 80px;
    position: relative;
    transition: all 0.5s linear;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
    }
    .show {
      width: 80px;
      height: 80px;
      display: none;
      position: absolute;
      top: 0;
      text-align: center;
      line-height: 180px;
      //    transition: all 2.5s ease-in-out;
    }
    .open-label {
      width: 60px;
      background-color: #67c23a;
      color: #fff;
      height: 20px;
      line-height: 20px;
      margin: auto;
      display: none;
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
    display: flex;
    justify-content: space-between;
    color: #fff;
    height: calc(100% - 10px);

    .record-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 90%;
      height: 100%;
    }
    .record-title {
      font-size: 16px;
      font-weight: bold;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
.right-content {
  height: calc(100% - 30px);
  overflow: auto;
}
.content-top {
  height: calc(100% - 2px);
  width: 100%;
  background-color: #212121;
  display: flex;
  justify-content: space-between;
}
.content-bottom {
  height: calc(100vh - 96px);
  width: 100%;
  background-color: #212121;
  display: flex;
  justify-content: space-between;
}
.content-fold {
  height: 26px;
  margin: 8px;
  width: 26px;
  position: relative;
}
.content-fold:hover {
  background-color: var(--menuHoverBg);
  border-radius: 5px;
}
.content-left {
  height: 46px;
  line-height: 46px;
  display: flex;
  justify-content: space-between;
}
.content-left-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #212121;
  color: #fff;
  font-size: 12px;
  img {
    cursor: pointer;
  }
}
.content-right {
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 12px;
  gap: 10px;
}
.content-right-item {
  padding: 4px;
  color: #fff;
  transition: none;
}
.content-right-item:hover {
  background-color: var(--menuHoverBg);
  border-radius: 5px;
  color: #67c23a;
  cursor: pointer;
  img {
    filter: brightness(0) saturate(100%) invert(71%) sepia(13%) saturate(1217%)
      hue-rotate(64deg) brightness(93%) contrast(88%);
  }
}
.content-right-item-active {
  background-color: var(--menuHoverBg);
  border-radius: 5px;
  color: #67c23a;
  margin: auto 10px;
  padding: 4px;
  img {
    filter: brightness(0) saturate(100%) invert(71%) sepia(13%) saturate(1217%)
      hue-rotate(64deg) brightness(93%) contrast(88%);
  }
}

.content-right-item-img {
  width: 16px;
  height: 16px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
}
.fold-img {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 5px;
  left: 5px;
  &:hover {
    cursor: pointer;
  }
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

:deep(.el-tree-node__content > .el-tree-node__expand-icon) {
  display: none;
}
:deep(.el-tree-node__content) {
  padding-left: 30px !important;
}
.well-tree {
  // max-width: 600px;
  // font-style: italic;
  color: #eee;
  // padding: 10px;
  background-color: #313131;
}
.well-tree .well-title {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
}
:deep(.well-tree .el-tree-node__content:hover) {
  background: #525252;
  // color: #fff;
  font-weight: bold;
  // font-style: initial;
}
:deep(.well-tree .el-tree-node .is-current > .el-tree-node__content) {
  background-color: #525252;
  // color: #fff;
  font-weight: bold;
  // font-style: initial;
}
:deep(.el-tree) {
  --el-tree-node-hover-bg-color: #525252 !important;
}

// .wells-content {
//   padding: 8px 0;
//   color: var(--textWhiteColor);
// }

.menu-item {
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: var(--textWhiteColor);

  // &:hover {
  //   background-color: var(--menuHoverBg);
  // }
}
.dashboard-content {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.dashboard-list {
  display: flex;
  height: 30px;
  line-height: 30px;
  color: #eee;
  font-size: 14px;
  justify-content: space-between;
  padding: 0 10px;
}
.dashboard-item-active {
  border-bottom: 2px solid #67c23a;
  color: #67c23a;
  padding: 0 5px;
  cursor: pointer;
}
.dashboard-item {
  padding: 0 5px;
  cursor: pointer;
}
.dashboard-item:hover {
  border-bottom: 2px solid #67c23a;
  color: #67c23a;
}

// 深色模式样式
:root[data-theme="dark"] {
  // .wells-content {
  //   background-color: var(--menuBg);
  // }

  .menu-item {
    color: var(--textWhiteColor);

    // &:hover {
    //   background-color: var(--menuHoverBg);
    // }
  }
}

.dashboard-right {
  background-color: #212121;
  font-size: 16px;
  height: 46px;
  line-height: 46px;
  padding-left: 10px;
  font-weight: bold;
  color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  font-size: 14px;
  width: 100%;
  height: 28px;
  color: #fff;
  text-align: center;
  line-height: 28px;
  border-top: 1px solid #696969;
  cursor: pointer;
  position: relative;
  bottom: 0;
}

.el-tree-node__content {
  cursor: grab !important;
}
.el-tree-node__content:active {
  cursor: grabbing !important;
}
.actual-trajectory {
  color: #eee;
}
</style>
