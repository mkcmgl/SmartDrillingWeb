<template>
  <el-dialog
    :width="600"
    v-model="showDialog"
    :title="`SELECT PROJECT (${state.totalCount})`"
  >
    <div
      v-loading="projectLoading"
      element-loading-background="#525252"
      element-loading-text="Loading..."
    >
      <el-input
        v-model="search"
        style="width: 100%; padding: 20px 20px 0 20px"
        placeholder="Search"
        clearable
        @keydown.enter="handleSearch"
      />
      <div class="project-all">
        <div
          v-for="(item, index) in state.tableData"
          :key="index"
          class="project-all-list"
        >
          <div>
            <div class="list-item-name">{{ item.name }}</div>
            <div class="list-item-time">
              {{ item.createUserId }}@{{ item.createDate }}
            </div>
            <div class="label-item">
              <!-- <div class=" label-item-info" v-if="item.identity === '0'">
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
          <div class="list-item-btn">
            <div class="item-btn" @click="handleView(item)">VIEW</div>
            <div class="item-btn" @click="handleMap(item)">MAP</div>
            <div class="item-btn" @click="handleDeleteProject(item)">
              DELETE
            </div>
          </div>
        </div>
      </div>
    </div>
    <ConfirmDialog
      v-model:visible="deleteVisible"
      :title="deleteTitle"
      :content="deleteContent"
      :confirmText="deleteConfirmText"
      @confirm="confirmDelete()"
    ></ConfirmDialog>
  </el-dialog>
</template>

<script setup lang="ts" name="ProjectListDialog">
import { watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ref, computed, reactive } from "vue";
import { ElMessage } from "element-plus";
import ConfirmDialog from "/src/views/components/ConfirmDialog.vue";
import { fetchProjectList, deleteProject } from "@/api/project/project";

// 定义子组件向父组件传值/事件
const emits = defineEmits(["refresh", "update:visible"]);
const router = useRouter();

interface PropsType {
  visible: boolean;
}
const showDialog = computed({
  get() {
    return props.visible;
  },
  set(val) {
    emits("update:visible", val);
  },
});
const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
});
const state = reactive({
  tableData: [],
  currentItem: {},
  totalCount: 0,
});

let deleteVisible = ref(false);
let deleteTitle = ref("");
let deleteContent = ref("");
let deleteConfirmText = ref("");
let search = ref("");
let projectLoading = ref(false);

const openDeleteDialog = (titleName, title, content, text) => {
  deleteTitle.value = title;
  deleteContent.value = content;
  deleteConfirmText.value = text;
  deleteVisible.value = true;
};
//是否删除
const handleDeleteProject = (item) => {
  const { name } = item;
  state.currentItem = item;
  openDeleteDialog(
    "deleteProject",
    "Warning",
    `Are you sure you want to delete ${name}？`,
    "DELETE"
  );
};
// 确认删除project
const confirmDelete = async () => {
  projectLoading.value = true;
  const data = { ...state.currentItem };
  try {
    const res = await deleteProject(data);
    if (res.msg === "success") {
      ElMessage({
        showClose: true,
        message: "success",
        type: "success",
      });
      queryProjectList({ PageIndex: 1, PageSize: 20 });
      emits("refresh");
    }
  } catch (error) {
    console.log(error);
  } finally {
    projectLoading.value = false;
  }
};
const handleView = (item) => {
  router.push({
    path: "/DashBoard",
    query: { projectId: item.id, projectName: item.name },
  });
};
const handleMap = (item) => {
  router.push({
    path: "/Map",
    query: { projectId: item.id, projectName: item.name },
  });
};
const handleSearch = () => {
  queryProjectList({ name: search.value });
};

const queryProjectList = async (params) => {
  projectLoading.value = true;
  try {
    const res = await fetchProjectList(params);
    if (res) {
      state.tableData = res.data;
      state.totalCount = res.data.length;
    }
  } catch (error) {
    console.log(error);
  } finally {
    projectLoading.value = false;
  }
};

onMounted(() => {
  queryProjectList({});
});
watch(
  () => props.visible,
  (val) => {
    if (val) {
      console.log(val);
    }
  }
);
</script>
<style scoped lang="scss">
.project-all {
  padding: 20px 0;
}
.project-all-list {
  width: 100%;
  color: #eee;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 20px;
}
.list-item-btn {
  display: none;
}
.item-btn:hover {
  background-color: #67c23a;
}
.project-all-list:hover {
  background-color: #525252;
  .list-item-btn {
    display: flex;
    justify-content: space-between;
    margin: auto 0;
  }
  .item-btn {
    padding: 2px 6px;
    border-radius: 5px;
  }
}
.list-item-name {
  font-weight: bold;
  color: #fff;
  font-size: 16px;
}
.list-item-time {
  color: #eee;
  font-size: 12px;
}

.label-item {
  display: flex;
  font-size: 12px;
  align-items: center;
}
.label-item-info {
  color: #eee;
  text-align: center;
  border-radius: 5px;
  margin: 5px 5px 5px 0;
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
</style>
