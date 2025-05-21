<template>
  <div
    class="gl-box"
    :style="{
      display: isLeft ? 'flex' : 'block',
    }"
    @dragstart.prevent
  >
    <div v-if="isTop" class="header">
      <div style="display: flex; align-items: center">
        <slot name="headerLeft"></slot>
        <div id="header"></div>
      </div>
      <slot name="headerRight"></slot>
    </div>
    <div v-if="isLeft" id="header" class="left"></div>
    <div
      ref="layoutContainer"
      class="gl-box-content"
      :style="{
        height: isLeft ? '100%' : 'calc(100% - 46px)',
        width: isLeft ? 'calc(100% - 200px)' : '100%',
      }"
    ></div>
    <input
      type="file"
      ref="fileDom"
      @change="importLayout"
      style="display: none"
      accept=".json"
    />
  </div>
</template>

<script setup lang="ts">
import { debounce } from "lodash";
import html2canvas from "html2canvas";
import {
  ref,
  onMounted,
  defineAsyncComponent,
  createApp,
  onUnmounted,
  nextTick,
  watch,
} from "vue";
import { GoldenLayout, LayoutConfig, LayoutManager } from "golden-layout"; // 引入您的 Vue 组件
const emits = defineEmits(["deleteData", "addData"]);
const layoutContainer = ref(null);
let myLayout: GoldenLayout | null = null;
const props = defineProps({
  headerItems: {
    type: Array,
    default: [],
  },
  dragItems: {
    type: Array,
    default: [],
  },
  isTop: {
    type: Boolean,
    default: true,
  },
  isLeft: {
    type: Boolean,
    default: false,
  },
  isTree: {
    type: Boolean,
    default: false,
  },
});
const startDrag = (item: any) => {
  let componentName = item.name;
  const dragItem = document.createElement("img");
  dragItem.src = item.img;
  dragItem.style.position = "absolute";
  dragItem.style.zIndex = "1000"; // Convert number to string
  dragItem.style.userSelect = "none"; // Prevent the browser from selecting the dragged element
  document.body.appendChild(dragItem);

  const onMouseMove = (event: MouseEvent) => {
    dragItem.style.left = event.pageX + "px";
    dragItem.style.top = event.pageY + "px";
  };

  const onMouseUp = (event: MouseEvent) => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    document.body.removeChild(dragItem);

    // 检查是否在布局容器内释放
    const layoutRect = layoutContainer.value?.getBoundingClientRect();
    if (
      layoutRect &&
      event.clientX >= layoutRect.left &&
      event.clientX <= layoutRect.right &&
      event.clientY >= layoutRect.top &&
      event.clientY <= layoutRect.bottom
    ) {
      addComponent(componentName);
    }
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
};

const saveLayout = (haveData = true) => {
  if (myLayout) {
    const layoutConfig = myLayout.toConfig();

    const layoutJson = haveData
      ? JSON.stringify(LayoutConfig.fromResolved(layoutConfig))
      : JSON.stringify(
          setComponentStateToEmpty(LayoutConfig.fromResolved(layoutConfig))
        );
    return layoutJson;
    // const blob = new Blob([layoutJson], { type: "application/json" });
    // const link = document.createElement("a");
    // const url = URL.createObjectURL(blob);
    // link.href = url;
    // link.download = "layout.json";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    // URL.revokeObjectURL(url); // Ensure the blob URL is revoked after use
  }
};
const setComponentStateToEmpty = (obj) => {
  if (Array.isArray(obj)) {
    obj.forEach((item) => setComponentStateToEmpty(item));
  } else if (typeof obj === "object") {
    if (obj.componentState) {
      obj.componentState = {};
    }
    Object.values(obj).forEach((item) => setComponentStateToEmpty(item));
  }

  return obj;
};
const saveImg = async () => {
  // 截图并保存布局容器区域
  if (layoutContainer.value) {
    const canvas = await html2canvas(layoutContainer.value);
    const base64Image = canvas.toDataURL();
    return base64Image;
  }
};

let layoutConfig = {
  header: {
    show: true,
  },
};

const fileDom = ref();
const showImport = () => {
  fileDom.value.click();
};
const importLayout = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const layoutJson = await file.text();
    let obj = JSON.parse(layoutJson);
    obj.header.show = false;

    layoutConfig = obj;
    // myLayout?.loadLayout(obj);
    myLayout?.destroy();
    initLayout();
  }
};
const edit = () => {
  let obj = LayoutConfig.fromResolved(myLayout?.saveLayout());
  obj.header.show = obj.header.show && obj.header.show == "top" ? false : "top";
  layoutConfig = obj;
  // myLayout?.loadLayout(obj);
  myLayout?.destroy();
  initLayout();
};
const dragData = ref<any>(null);
const isDragData = ref<boolean>(false);
const dragType = ref("reset");
const startDragData = (val: any, type = "reset") => {
  dragData.value = val;
  isDragData.value = true;
  dragType.value = type;
};
const initLayout = async () => {
  if (layoutContainer.value) {
    myLayout = new GoldenLayout(layoutConfig, layoutContainer.value);
    props.headerItems.forEach((item) => {
      myLayout.registerComponent(
        item.name,
        async (container, componentState) => {
          if (!isDragData.value) {
            await updateNum(componentState, "addData");
            temPane.value = {
              deleteData: [],
              addData: [],
            };
          }
          const app = createApp(item.component, componentState);
          let dom = container.getElement();

          dom.onmouseenter = async () => {
            if (isDragData.value) {
              let obj = container.getState();
              if (dragType.value == "reset") {
                await updateNum(obj, "deleteData");

                temPane.value = {
                  deleteData: [],
                  addData: [],
                };
                let arr = [dragData.value];
                container.replaceComponent({
                  title: item.name,
                  type: "component",
                  componentType: item.name,
                  componentState: {
                    dragData: JSON.stringify(arr),
                    paneID: obj["paneID"] ? obj["paneID"] : generateUniqueId(),
                  },
                });
                // container.setState({
                //   dragData: JSON.stringify(arr),
                // });
                emits("addData", dragData.value);
              } else {
                let arr = obj["dragData"] ? JSON.parse(obj["dragData"]) : [];
                arr.push(dragData.value);
                container.replaceComponent({
                  title: item.name,
                  type: "component",
                  componentType: item.name,
                  componentState: {
                    dragData: JSON.stringify(arr),
                    paneID: obj["paneID"] ? obj["paneID"] : generateUniqueId(),
                  },
                });

                // container.setState({
                //   dragData: JSON.stringify(arr),
                // });
                emits("addData", dragData.value);
              }
              isDragData.value = false;
            }
          };

          // Destroy the component when the container is removed
          container.on("destroy", async () => {
            let obj = container.getState();

            await updateNum(obj, "deleteData");
            temPane.value = {
              deleteData: [],
              addData: [],
            };
            app.unmount();
          });

          app.mount(dom); // 将 Vue 组件挂载到 Golden Layout 的容器中
        }
      );
    });

    myLayout.init();
    // console.log(myLayout.getRegisteredComponentTypeNames());
    addMenuItem();
  }
};
const generateUniqueId = () => {
  return (
    "component-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8)
  );
};
const temPane = ref({
  deleteData: [],
  addData: [],
});
const updateNum = (obj, type) => {
  return new Promise((resolve, reject) => {
    try {
      let current = obj["dragData"] ? JSON.parse(obj["dragData"]) : [];
      if (temPane.value[type].indexOf(obj["paneID"]) == -1) {
        current.forEach((v) => {
          emits(type, v);
        });
      }
      temPane.value[type].push(obj["paneID"]);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
const addMenuItem = () => {
  let headerDom = document.getElementById("header");
  headerDom.innerHTML = ""; // 清空headerDom

  if (props.isTree) {
    dragTree(props.dragItems, headerDom);
  } else {
    props.headerItems.forEach((item, index) => {
      let childDiv = document.createElement("img");
      childDiv.src = item.img;
      childDiv.style = "margin:0 5px;cursor: pointer";

      headerDom.appendChild(childDiv);
      myLayout?.newDragSource(childDiv, () => {
        return {
          title: item.title ? item.title : item.name,
          type: "component",
          componentType: item.name,
          componentState: {
            dragData: item.data ? JSON.stringify(item.data) : "[]",
            paneID: generateUniqueId(),
          },
        };
      });
    });
  }
};
const dragTree = (items, parentElement) => {
  items.forEach((item) => {
    const nodeDiv = document.createElement("div");
    nodeDiv.className = "tree-node";

    const icon = document.createElement("img");
    icon.src = item.isParent ? "folder-icon.png" : "file-icon.png";
    icon.style = "margin:0 5px; cursor: pointer";
    const nameSpan = document.createElement("span");
    nameSpan.textContent = item.title ? item.title : item.name;
    nodeDiv.appendChild(icon);
    nodeDiv.appendChild(nameSpan);
    if (!item.isParent) {
      myLayout?.newDragSource(icon, () => ({
        title: item.title ? item.title : item.name,
        type: "component",
        componentType: item.name,
        componentState: {
          dragData: item.data ? JSON.stringify(item.data) : "[]",
          paneID: generateUniqueId(),
        },
      }));
    }
    if (item.children?.length) {
      const childrenContainer = document.createElement("div");
      childrenContainer.className = "children-container";
      dragTree(item.children, childrenContainer);
      nodeDiv.appendChild(childrenContainer);
    }

    parentElement.appendChild(nodeDiv);
  });
};
const addComponent = (componentName: string) => {
  if (myLayout) {
    myLayout.addComponent(componentName);
  }
};

const loadLayout = (obj: any) => {
  layoutConfig = JSON.parse(obj);
  isDragData.value = false;
  myLayout?.destroy();
  initLayout();
};

const refreshComponent = () => {
  if (myLayout) {
    layoutConfig = LayoutConfig.fromResolved(myLayout.toConfig());

    isDragData.value = false;
    myLayout.destroy(); // 销毁当前布局
    initLayout(); // 重新初始化布局
  }
};
const resize = () => {
  if (myLayout) {
    myLayout.updateSize();
  }
};

onMounted(() => {
  initLayout();
});

onUnmounted(() => {});

defineExpose({
  startDrag,
  startDragData,
  saveLayout,
  saveImg,
  edit,
  showImport,
  importLayout,
  refreshComponent,
  resize,
  loadLayout,
});
</script>

<style scoped lang="scss">
.gl-box {
  width: 100%;
  height: 100%;
  display: flex;
}
.gl-box-content {
  width: 100%;
}
.header {
  height: 46px;
  width: 100%;
  background-color: #212121;
  display: flex;
  justify-content: space-between;
}
.left {
  height: 100%;
  width: 300px;
}
.gl-box-header {
  background: #f0f0f0;

  color: #fff;

  .headers {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    .right {
      display: flex;
      margin-right: 10px;
      gap: 5px;
    }
    .left {
      display: flex;
    }
  }
  .items {
    width: 100%;
    height: 24px;
    line-height: 24px;
    color: #000;
    cursor: pointer;
    padding: 5px;
  }
  .items:hover,
  .items:active {
    background: #548efa;
    color: #fff;
  }
}

.drag-button {
  cursor: pointer;
  padding: 5px;
  background: #007bff;
  color: white;
  border-radius: 4px;
}

.gl {
  flex: 1;
  width: 100vw;
  display: flex;

  .left {
    flex: 1;
  }
  .right {
    width: 200px;
  }
}
</style>
