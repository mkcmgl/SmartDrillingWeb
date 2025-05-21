<template>
  <div class="layout-wrapper">
    <!-- 头部导航栏 -->
    <div class="header">
      <slot name="left"></slot>
      <slot name="right"></slot>
    </div>
    <!-- 布局容器 -->
    <div class="layout-container" ref="layoutContainer">
      <!-- 遍历面板列表 -->
      <div
        v-for="pane in paneList.children"
        :key="pane.id"
        class="pane"
        :style="{
          position: 'absolute',
          top: pane.top + '%',
          left: pane.left + '%',
          width: pane.width + '%',
          height: pane.height + '%',
        }"
        @dragover.prevent.stop
        @drop.stop="handleDrop($event, pane, 0, paneList)"
      >
        <!-- 调整大小的边框 -->
        <div
          class="resize-border right"
          @mousedown="startResize($event, pane, 'right', paneList)"
        ></div>
        <div
          class="resize-border bottom"
          @mousedown="startResize($event, pane, 'bottom', paneList)"
        ></div>

        <!-- 如果面板有子面板,递归渲染子面板 -->
        <div v-if="pane.children && pane.children.length">
          <div
            v-for="(childPane, indez) in pane.children"
            :key="childPane.id"
            class="pane"
            :style="{
              position: 'absolute',
              top: childPane.top + '%',
              left: childPane.left + '%',
              width: childPane.width + '%',
              height: childPane.height + '%',
            }"
            @dragover.prevent.stop
            @drop.stop="handleDrop($event, childPane, indez, pane)"
          >
            <!-- 调整大小的边框 -->
            <div
              class="resize-border right"
              @mousedown="startResize($event, childPane, 'right', pane)"
            ></div>
            <div
              class="resize-border bottom"
              @mousedown="startResize($event, childPane, 'bottom', pane)"
            ></div>

            <!-- 递归处理嵌套的子面板 -->
            <div v-if="childPane.children && childPane.children.length">
              <div
                v-for="nestedPane in childPane.children"
                :key="nestedPane.id"
                class="pane"
                :style="{
                  position: 'absolute',
                  top: nestedPane.top + '%',
                  left: nestedPane.left + '%',
                  width: nestedPane.width + '%',
                  height: nestedPane.height + '%',
                }"
              >
                <!-- 调整大小的边框 -->
                <div
                  class="resize-border right"
                  @mousedown="
                    startResize($event, nestedPane, 'right', childPane)
                  "
                ></div>
                <div
                  class="resize-border bottom"
                  @mousedown="
                    startResize($event, nestedPane, 'bottom', childPane)
                  "
                ></div>

                <!-- 标签页容器 -->
                <div class="tabs-container">
                  <!-- 标签页头部 -->
                  <div class="tabs-header">
                    <!-- 标签页列表 -->
                    <div
                      v-for="(tab, index) in nestedPane.tabs"
                      :key="tab.name"
                      class="tab-item"
                      :class="{
                        active:
                          tab.id ===
                          (nestedPane.activeTabId || nestedPane.tabs[0]?.id),
                      }"
                      draggable="true"
                      @dragstart.stop="
                        handleDragStart($event, nestedPane, childPane, index)
                      "
                      @click="activateTab(nestedPane, tab)"
                    >
                      <span>{{ tab.name }}</span>
                      <span
                        class="close-btn"
                        @click.stop="closeTab(nestedPane, tab, childPane)"
                        >×</span
                      >
                    </div>
                    <!-- 添加标签按钮 -->
                    <!-- <div class="add-tab-btn" @click="addNewTab(nestedPane)">+</div> -->
                  </div>
                  <!-- 标签页内容区域 -->
                  <div
                    class="tab-content"
                    @dragover.prevent="showDirectionSelector(nestedPane)"
                  >
                    <div
                      v-for="tab in nestedPane.tabs"
                      :key="tab.name"
                      class="tab-panel"
                      :class="{
                        active:
                          tab.id ===
                          (nestedPane.activeTabId || nestedPane.tabs[0]?.id),
                      }"
                    >
                      <component
                        :ref="tab['component' + tab.id.toString()]"
                        :is="
                          props.headerItems.find(
                            (item) => item.name === tab.name
                          )?.component
                        "
                        :name="tab.name"
                      />
                    </div>
                    <!-- 拖拽方向选择器 -->
                    <div
                      v-if="activePane === nestedPane"
                      class="direction-selector"
                    >
                      <div
                        class="direction-item top"
                        @dragover.prevent="handleDirectionSelect('top')"
                      >
                        上
                      </div>
                      <div class="direction-row">
                        <div
                          class="direction-item left"
                          @dragover.prevent="handleDirectionSelect('left')"
                        >
                          左
                        </div>
                        <div
                          class="direction-item center"
                          @dragover.prevent="handleDirectionSelect('center')"
                        >
                          中
                        </div>
                        <div
                          class="direction-item right"
                          @dragover.prevent="handleDirectionSelect('right')"
                        >
                          右
                        </div>
                      </div>
                      <div
                        class="direction-item bottom"
                        @dragover.prevent="handleDirectionSelect('bottom')"
                      >
                        下
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 如果没有嵌套子面板 -->
            <div v-else class="tabs-container">
              <div class="tabs-header">
                <div
                  v-for="(tab, index) in childPane.tabs"
                  :key="tab.name"
                  class="tab-item"
                  :class="{
                    active:
                      tab.id ===
                      (childPane.activeTabId || childPane.tabs[0]?.id),
                  }"
                  draggable="true"
                  @dragstart.stop="
                    handleDragStart($event, childPane, pane, index)
                  "
                  @click="activateTab(childPane, tab)"
                >
                  <span>{{ tab.name }}</span>
                  <span
                    class="close-btn"
                    @click.stop="closeTab(childPane, tab, pane)"
                    >×</span
                  >
                </div>
                <!-- <div class="add-tab-btn" @click="addNewTab(childPane)">+</div> -->
              </div>
              <div
                class="tab-content"
                @dragover.prevent="showDirectionSelector(childPane)"
              >
                <div
                  v-for="tab in childPane.tabs"
                  :key="tab.name"
                  class="tab-panel"
                  :class="{
                    active:
                      tab.id ===
                      (childPane.activeTabId || childPane.tabs[0]?.id),
                  }"
                >
                  <component
                    :ref="tab['component' + tab.id.toString()]"
                    :is="
                      props.headerItems.find((item) => item.name === tab.name)
                        ?.component
                    "
                    :name="tab.name"
                  />
                </div>
                <div v-if="activePane === childPane" class="direction-selector">
                  <div
                    class="direction-item top"
                    @dragover.prevent="handleDirectionSelect('top')"
                  >
                    上
                  </div>
                  <div class="direction-row">
                    <div
                      class="direction-item left"
                      @dragover.prevent="handleDirectionSelect('left')"
                    >
                      左
                    </div>
                    <div
                      class="direction-item center"
                      @dragover.prevent="handleDirectionSelect('center')"
                    >
                      中
                    </div>
                    <div
                      class="direction-item right"
                      @dragover.prevent="handleDirectionSelect('right')"
                    >
                      右
                    </div>
                  </div>
                  <div
                    class="direction-item bottom"
                    @dragover.prevent="handleDirectionSelect('bottom')"
                  >
                    下
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 如果没有子面板 -->
        <div v-else class="tabs-container">
          <div class="tabs-header">
            <div
              v-for="(tab, index) in pane.tabs"
              :key="tab.name"
              class="tab-item"
              :class="{
                active: tab.id === (pane.activeTabId || pane.tabs[0]?.id),
              }"
              draggable="true"
              @dragstart.stop="handleDragStart($event, pane, paneList, index)"
              @click="activateTab(pane, tab)"
            >
              <span>{{ tab.name }}</span>
              <span
                class="close-btn"
                @click.stop="closeTab(pane, tab, paneList)"
                >×</span
              >
            </div>
            <!-- <div class="add-tab-btn" @click="addNewTab(pane)">+</div> -->
          </div>
          <div
            class="tab-content"
            @dragover.prevent="showDirectionSelector(pane)"
          >
            <div
              v-for="tab in pane.tabs"
              :key="tab.name"
              class="tab-panel"
              :class="{
                active: tab.id === (pane.activeTabId || pane.tabs[0]?.id),
              }"
            >
              <component
                :ref="tab['component' + tab.id.toString()]"
                :is="
                  props.headerItems.find((item) => item.name === tab.name)
                    ?.component
                "
                :name="tab.name"
              />
            </div>
            <div v-if="activePane === pane" class="direction-selector">
              <div
                class="direction-item top"
                @dragover.prevent="handleDirectionSelect('top')"
              >
                上
              </div>
              <div class="direction-row">
                <div
                  class="direction-item left"
                  @dragover.prevent="handleDirectionSelect('left')"
                >
                  左
                </div>
                <div
                  class="direction-item center"
                  @dragover.prevent="handleDirectionSelect('center')"
                >
                  中
                </div>
                <div
                  class="direction-item right"
                  @dragover.prevent="handleDirectionSelect('right')"
                >
                  右
                </div>
              </div>
              <div
                class="direction-item bottom"
                @dragover.prevent="handleDirectionSelect('bottom')"
              >
                下
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 截图按钮 -->
    <!-- <button @click="captureScreen">Capture Screen</button> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted, onUnmounted } from "vue";
import type { PropType } from "vue";
// import html2canvas from "html2canvas";

// 生成唯一ID
const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// 标签页接口定义
interface Tab {
  id: string;
  name: string;
}

// 面板接口定义
interface Pane {
  id: string;
  title: string;
  tabs: Tab[];
  activeTabId?: string;
  type: "x" | "y"; // x表示水平布局,y表示垂直布局
  children: Pane[];
  top: number;
  left: number;
  width: number;
  height: number;
}

// Header项接口定义
interface HeaderItem {
  id: string;
  name: string;
  component: any;
}

// Header项列表
const props = defineProps({
  headerItems: {
    type: Array as PropType<HeaderItem[]>,
    default: () => [],
  },
  data: {
    type: Object as PropType<Pane>,
    default: () => ({
      id: "ttt",
      title: "",
      tabs: [],
      type: "x",
      children: [
        {
          id: "ttt",
          title: "",
          tabs: [],
          type: "y",
          children: [],
          top: 0,
          left: 0,
          width: 100,
          height: 100,
        },
      ],
      top: 0,
      left: 0,
      width: 100,
      height: 100,
    }),
  },
});
onMounted(() => {
  paneList.value = props.data;
  addEventListener("mouseup", () => {
    if (activePane.value) {
      activePane.value = null;
    }
  });
});
onUnmounted(() => {
  removeEventListener("mouseup", () => {
    if (activePane.value) {
      activePane.value = null;
    }
  });
});
// 初始化面板列表
const paneList = ref<Pane>({});
// 拖拽相关的状态
const draggedPane = ref<Pane | null>(null); // 被拖拽的面板
const sourceParent = ref<Pane | null>(null); // 拖拽源的父面板
const draggedTabIndex = ref<number | null>(null); // 被拖拽的标签索引
const activePane = ref<Pane | null>(null); // 当前激活的面板
const selectedDirection = ref<string | null>(null); // 选中的拖拽方向
const draggedHeaderItem = ref<HeaderItem | null>(null); // 被拖拽的header项

// 调整大小相关状态
const isResizing = ref(false);
const resizingPane = ref<Pane | null>(null);
const resizingParent = ref<Pane | null>(null);
const resizeDirection = ref<string | null>(null);
const startX = ref(0);
const startY = ref(0);
const startWidth = ref(0);
const startHeight = ref(0);

// 开始调整大小
const startResize = (
  event: MouseEvent,
  pane: Pane,
  direction: string,
  parent: Pane
) => {
  isResizing.value = true;
  resizingPane.value = pane;
  resizingParent.value = parent;
  resizeDirection.value = direction;
  startX.value = event.clientX;
  startY.value = event.clientY;
  startWidth.value = pane.width;
  startHeight.value = pane.height;

  // 添加全局事件监听
  document.addEventListener("mousemove", handleResize);
  document.addEventListener("mouseup", stopResize);
};

// 处理调整大小
const handleResize = (event: MouseEvent) => {
  if (!isResizing.value || !resizingPane.value || !resizingParent.value) return;

  const deltaX = event.clientX - startX.value;
  const deltaY = event.clientY - startY.value;

  // 计算容器的实际像素尺寸
  const containerRect = document
    .querySelector(".layout-container")
    ?.getBoundingClientRect();
  if (!containerRect) return;

  // 将像素差转换为百分比
  const deltaWidthPercent = (deltaX / containerRect.width) * 100;
  const deltaHeightPercent = (deltaY / containerRect.height) * 100;

  // 检查是否需要在父节点上调整大小
  const shouldAdjustParent =
    (resizingParent.value.type === "x" && resizeDirection.value === "bottom") ||
    (resizingParent.value.type === "y" && resizeDirection.value === "right");

  if (shouldAdjustParent) {
    // 在父节点上调整大小
    const parentSiblings = resizingParent.value.children;
    if (!parentSiblings) return;

    const parentIndex = parentSiblings.findIndex(
      (p) => p.id === resizingPane.value?.id
    );
    if (parentIndex === -1 || parentIndex >= parentSiblings.length - 1) return;

    if (resizingParent.value.type === "x") {
      // 调整垂直大小
      const newHeight = Math.max(
        5,
        Math.min(90, startHeight.value + deltaHeightPercent)
      );
      const heightDiff = newHeight - resizingPane.value.height;

      resizingPane.value.height = newHeight;
      parentSiblings[parentIndex + 1].height -= heightDiff;
      parentSiblings[parentIndex + 1].top += heightDiff;
    } else {
      // 调整水平大小
      const newWidth = Math.max(
        5,
        Math.min(90, startWidth.value + deltaWidthPercent)
      );
      const widthDiff = newWidth - resizingPane.value.width;

      resizingPane.value.width = newWidth;
      parentSiblings[parentIndex + 1].width -= widthDiff;
      parentSiblings[parentIndex + 1].left += widthDiff;
    }
  } else {
    // 在当前面板上调整大小
    const siblings = resizingParent.value.children;
    if (!siblings) return;

    const currentIndex = siblings.findIndex(
      (p) => p.id === resizingPane.value?.id
    );
    if (currentIndex === -1 || currentIndex >= siblings.length - 1) return;

    if (resizeDirection.value === "right") {
      // 调整水平大小
      const newWidth = Math.max(
        5,
        Math.min(90, startWidth.value + deltaWidthPercent)
      );
      const widthDiff = newWidth - resizingPane.value.width;

      resizingPane.value.width = newWidth;
      siblings[currentIndex + 1].width -= widthDiff;
      siblings[currentIndex + 1].left += widthDiff;
    } else if (resizeDirection.value === "bottom") {
      // 调整垂直大小
      const newHeight = Math.max(
        5,
        Math.min(90, startHeight.value + deltaHeightPercent)
      );
      const heightDiff = newHeight - resizingPane.value.height;

      resizingPane.value.height = newHeight;
      siblings[currentIndex + 1].height -= heightDiff;
      siblings[currentIndex + 1].top += heightDiff;
    }
  }
};

// 停止调整大小
const stopResize = () => {
  isResizing.value = false;
  resizingPane.value = null;
  resizingParent.value = null;
  resizeDirection.value = null;

  // 移除全局事件监听
  document.removeEventListener("mousemove", handleResize);
  document.removeEventListener("mouseup", stopResize);
};

// 开始拖拽处理
const handleDragStart = (
  event: DragEvent,
  pane: Pane,
  parent,
  index: number
) => {
  draggedPane.value = pane;
  sourceParent.value = parent;
  draggedTabIndex.value = index;
};

// Header项拖拽开始处理
const handleHeaderDragStart = (event: DragEvent, item: HeaderItem) => {
  draggedHeaderItem.value = item;
};

// 显示方向选择器
const showDirectionSelector = (pane: Pane) => {
  activePane.value = pane;
};

// 隐藏方向选择器
const hideDirectionSelector = () => {
  activePane.value = null;
};

// 处理方向选择
const handleDirectionSelect = (direction: string) => {
  selectedDirection.value = direction;
};

// 添加新标签页
const addNewTab = (pane: Pane) => {
  const name = prompt("请输入标签名称:");
  if (name) {
    const newTab = { id: generateUUID(), name };
    pane.tabs.push(newTab);
    pane.activeTabId = newTab.id;
  }
};

// 激活标签页
const activateTab = (pane: Pane, tab: Tab) => {
  pane.activeTabId = tab.id;
};

// 处理拖拽放置
const handleDrop = (
  event: DragEvent,
  targetPane: Pane,
  targetIndex: number,
  targetParent: Pane
) => {
  try {
    activePane.value = null;
    if (!selectedDirection.value) return;
    let tabs = {};
    // 处理从header拖拽的情况
    if (draggedHeaderItem.value) {
      let id = generateUUID();
      tabs = {
        id: id,
        name: draggedHeaderItem.value.name,
      };
      let key = "component" + tabs["id"].toString();
      tabs[key] = ref(null);
    } else {
      if (
        !draggedPane.value ||
        !sourceParent.value ||
        draggedTabIndex.value === null
      )
        return;

      const sourceChildren = sourceParent.value.children;
      if (!sourceChildren) return;

      // 获取拖拽的标签数据
      const index = sourceChildren.findIndex(
        (p) => p.id === draggedPane.value?.id
      );
      tabs = JSON.parse(
        JSON.stringify(sourceChildren[index].tabs[draggedTabIndex.value])
      );
      sourceChildren[index].tabs.splice(draggedTabIndex.value, 1);

      // 处理源面板标签为空的情况
      if (sourceChildren[index].tabs.length === 0) {
        sourceChildren.splice(index, 1);
        if (sourceChildren.length > 0) {
          let isX = sourceParent.value.type === "x";
          let totalSize = sourceChildren.reduce(
            (sum, child) => sum + (isX ? child.width : child.height),
            0
          );

          // 重新计算剩余面板的尺寸和位置
          let offset = 0;
          sourceChildren.forEach((child) => {
            let ratio = (isX ? child.width : child.height) / totalSize;
            if (isX) {
              child.width = ratio * 100;
              child.left = offset;
              child.height = 100;
              child.top = 0;
              child.id = generateUUID();
              offset += child.width;
            } else {
              child.height = ratio * 100;
              child.top = offset;
              child.width = 100;
              child.left = 0;
              offset += child.height;
              child.id = generateUUID();
            }
          });
        }
      }
    }

    // 创建新面板
    const newPane = {
      tabs: [tabs],
      children: [],
    };
    if (targetPane.children.length == 0 && targetPane.tabs.length == 0) {
      targetPane.tabs.push(tabs as Tab);
      targetPane.activeTabId = (tabs as Tab).id;
      // 计算新面板的尺寸和位置
      const newHeight = 100;
      const newWidth = 100;
      targetPane.children.forEach((child, idx) => {
        child.height = newHeight;
        child.top = 100;
        child.left = 0;
        child.width = newWidth;
        child.type = "x";
        child.id = generateUUID();
      });
    } else {
      // 处理上下中方向的拖放
      if (
        selectedDirection.value == "top" ||
        selectedDirection.value == "bottom"
      ) {
        if (targetPane.type == "x") {
          if (selectedDirection.value == "top") {
            targetParent.children.splice(targetIndex, 0, newPane as Pane);
          } else if (selectedDirection.value == "bottom") {
            targetParent.children.splice(targetIndex + 1, 0, newPane as Pane);
          }
          // 计算新面板的尺寸和位置
          const newHeight = 100 / targetParent.children.length;
          const newWidth = 100;
          targetParent.children.forEach((child, idx) => {
            child.height = newHeight;
            child.top = idx * newHeight;
            child.left = 0;
            child.width = newWidth;
            child.type = "x";
            child.id = generateUUID();
          });
        } else {
          if (targetPane.children.length == 0) {
            if (selectedDirection.value == "top") {
              targetPane.children = [
                newPane as Pane,
                { tabs: targetPane.tabs, children: [] } as Pane,
              ];
              targetPane.tabs = [];
            } else if (selectedDirection.value == "bottom") {
              targetPane.children = [
                { tabs: targetPane.tabs, children: [] } as Pane,
                newPane as Pane,
              ];
              targetPane.tabs = [];
            }
            // 计算新面板的尺寸和位置
            const newHeight = 100 / targetPane.children.length;
            const newWidth = 100;
            targetPane.children.forEach((child, idx) => {
              child.height = newHeight;
              child.top = idx * newHeight;
              child.left = 0;
              child.width = newWidth;
              child.type = "x";
              child.id = generateUUID();
            });
          } else {
            if (selectedDirection.value == "top") {
              targetPane.children.splice(targetIndex, 0, newPane as Pane);
            } else if (selectedDirection.value == "bottom") {
              targetPane.children.splice(targetIndex + 1, 0, newPane as Pane);
            }
            // 重新计算所有子面板的尺寸和位置
            const newHeight = 100 / targetPane.children.length;
            const newWidth = 100;
            targetPane.children.forEach((child, idx) => {
              child.height = newHeight;
              child.top = idx * newHeight;
              child.left = 0;
              child.width = newWidth;
              child.type = "x";
              child.id = generateUUID();
            });
          }
        }
      } else if (selectedDirection.value == "center") {
        if (targetPane.children.length == 0) {
          targetPane.tabs.push(tabs as Tab);
          targetPane.activeTabId = (tabs as Tab).id;
        } else {
          targetPane.children[targetIndex].tabs.push(tabs as Tab);
          targetPane.children[targetIndex].activeTabId = (tabs as Tab).id;
        }
      } else {
        if (targetPane.type == "y") {
          if (selectedDirection.value == "left") {
            targetParent.children.splice(targetIndex, 0, newPane as Pane);
          } else if (selectedDirection.value == "right") {
            targetParent.children.splice(targetIndex + 1, 0, newPane as Pane);
          }
          // 计算新面板的尺寸和位置
          const newHeight = 100;
          const newWidth = 100 / targetParent.children.length;
          targetParent.children.forEach((child, idx) => {
            child.height = newHeight;
            child.top = 0;
            child.left = idx * newWidth;
            child.width = newWidth;
            child.type = "y";
            child.id = generateUUID();
          });
        } else {
          // 处理左右方向的拖放
          if (targetPane.children.length == 0) {
            let tab = JSON.parse(JSON.stringify(targetPane.tabs));
            targetPane.tabs = [];
            const tempPane = {
              tabs: tab,
              children: [],
            };
            targetPane.children = [];
            targetPane.children.push(tempPane as Pane);
            if (selectedDirection.value == "left") {
              targetPane.children.unshift(newPane as Pane);
            } else if (selectedDirection.value == "right") {
              targetPane.children.push(newPane as Pane);
            }

            // 计算新面板的尺寸和位置
            const newHeight = 100;
            const newWidth = 100 / targetPane.children.length;
            targetPane.children.forEach((child, idx) => {
              child.height = newHeight;
              child.top = 0;
              child.left = idx * newWidth;
              child.width = newWidth;
              child.type = "y";
              child.id = generateUUID();
            });
          } else if (targetPane.children.length > 0) {
            if (selectedDirection.value == "left") {
              targetPane.children.splice(targetIndex, 0, newPane as Pane);
            } else if (selectedDirection.value == "right") {
              targetPane.children.splice(targetIndex + 1, 0, newPane as Pane);
            }

            // 重新计算所有子面板的尺寸和位置

            const newHeight = 100;
            const newWidth = 100 / targetPane.children.length;
            targetPane.children.forEach((child, idx) => {
              child.height = newHeight;
              child.top = 0;
              child.left = idx * newWidth;
              child.width = newWidth;
              child.type = "y";
              child.id = generateUUID();
            });
          }
        }
      }
    }

    // 重置拖拽相关的状态
    draggedPane.value = null;
    sourceParent.value = null;
    draggedTabIndex.value = null;
    activePane.value = null;
    selectedDirection.value = null;
    draggedHeaderItem.value = null;
  } catch (error) {
    console.log(error);
  }
};

// 关闭标签页
const closeTab = (pane: Pane, tab: Tab, parent: Pane) => {
  const index = pane.tabs.findIndex((t) => t.name === tab.name);
  if (index > -1) {
    pane.tabs.splice(index, 1);
    if (pane.tabs.length > 0) {
      pane.activeTabId = pane.tabs[0].id;
    } else {
      // 如果没有剩余标签，删除该面板
      const paneIndex = parent.children?.findIndex((p) => p.id === pane.id);
      if (paneIndex !== undefined && paneIndex > -1) {
        parent.children?.splice(paneIndex, 1);
        if (parent.children && parent.children.length > 0) {
          // 重新计算剩余面板的尺寸和位置
          const isX = parent.type === "x";
          const totalSize = parent.children.reduce(
            (sum, child) => sum + (isX ? child.width : child.height),
            0
          );
          let offset = 0;
          parent.children.forEach((child) => {
            const ratio = (isX ? child.width : child.height) / totalSize;
            if (isX) {
              child.width = ratio * 100;
              child.left = offset;
              child.height = 100;
              child.top = 0;
              offset += child.width;
            } else {
              child.height = ratio * 100;
              child.top = offset;
              child.width = 100;
              child.left = 0;
              offset += child.height;
            }
            child.id = generateUUID();
          });
        }
      }
    }
  }
};
// 截图并下载
const captureScreen = () => {
  const layoutContainer = document.querySelector(".layout-container");
  if (layoutContainer) {
    html2canvas(layoutContainer, {
      useCORS: true,
      scale: 1,
    }).then((canvas) => {
      let url = canvas.toDataURL("image/png");
      let a = document.createElement("a");
      a.href = url;
      a.download = "layout.png";
      a.target = "_blank";
      a.click();
      a.remove();
    });
  }
};
const emit = defineEmits(["save"]);
const save = () => {
  const data = JSON.stringify(paneList.value);
  const blob = new Blob([data], { type: "application/json;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "paneList.json");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const importLayout = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const data = JSON.parse(e.target.result);
    paneList.value = data;
  };
  reader.readAsText(file);
};

defineExpose({
  save,
  handleHeaderDragStart,
  importLayout,
});
</script>

<style lang="scss" scoped>
.layout-wrapper {
  padding: 0 10px;
  width: calc(100vw - 20px);
  height: calc(100vh - 35px);
}

// 头部导航栏样式
.header {
  display: flex;
}

// 布局容器样式
.layout-container {
  position: relative;
  width: 100%;
  height: calc(100% - 58px);
  background: #f0f0f0;
}

// 面板样式
.pane {
  border: 1px solid #ddd;
  background: #fff;
  box-sizing: border-box;
  padding: 8px;
  overflow: hidden;
  position: relative;
}

// 调整大小的边框样式
.resize-border {
  position: absolute;
  background: transparent;
  z-index: 1000;

  &.right {
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    cursor: e-resize;
  }

  &.bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    cursor: s-resize;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
}

// 标签容器样式
.tabs-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

// 标签头部样式
.tabs-header {
  display: flex;
  border-bottom: 1px solid #ddd;
  padding: 4px;
}

// 标签项样式
.tab-item {
  padding: 4px 8px;
  margin-right: 4px;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: #e5e5e5;
  }

  &.active {
    background: #e0e0e0;
    font-weight: bold;
  }

  // 关闭按钮样式
  .close-btn {
    margin-left: 8px;
    font-size: 14px;

    &:hover {
      color: #f00;
    }
  }
}

// 添加标签按钮样式
.add-tab-btn {
  padding: 4px 8px;
  margin-left: 4px;
  background: #f5f5f5;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  &:hover {
    background: #e5e5e5;
  }
}

// 标签内容区域样式
.tab-content {
  flex: 1;
  padding: 8px;
  overflow: auto;
  position: relative;
}

// 标签面板样式
.tab-panel {
  display: none;

  &.active {
    display: block;
  }
}

// 方向选择器样式
.direction-selector {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
}

// 方向选择器行样式
.direction-row {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

// 方向选择器项样式
.direction-item {
  width: 60px;
  height: 40px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #e0e0e0;
  }

  &.center {
    background: #e8f0fe;
    border-color: #4a90e2;
  }
}
</style>
