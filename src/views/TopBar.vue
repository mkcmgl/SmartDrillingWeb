<template>
  <div class="top-bar">
    <div class="top-section">
      <div class="left-section">
        <div class="logo">
          <img src="@/assets/TopBar.png" alt="顶部图标" class="top-icon" />
        </div>
        <div
          v-for="(item, index) in menuList"
          :key="index"
          :class="[
            currentMenuPath === item.path ? 'menu-item-active' : 'menu-item',
            index === menuList.length - 1 ? 'last-item' : '',
          ]"
          @click="changeCurrentMenu(item.path)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="right-section">
        <el-button class="theme-toggle" @click="toggleTheme">
          <img
            :src="
              theme === 'light'
                ? requireImg('Home/sun.svg')
                : requireImg('Home/moon.svg')
            "
            :alt="theme === 'light' ? '深色模式' : '浅色模式'"
            class="theme-icon"
          />
        </el-button>
        <el-button class="theme-toggle"
          ><img
            src="@/assets/Home/users.svg"
            @click="changeCurrentRouter('/main/Users')"
            alt="顶部图标"
            class="right-icon"
        /></el-button>
        <el-button class="theme-toggle"
          ><img
            src="@/assets/Home/dictionary.svg"
            @click="changeCurrentRouter('/main/Dictionary')"
            alt="顶部图标"
            class="right-icon"
        /></el-button>
        <el-button class="theme-toggle"
          ><img
            src="@/assets/Home/setting.svg"
            @click="test"
            alt="顶部图标"
            class="right-icon"
          />
        </el-button>
        <el-button class="theme-toggle">
          <img
            src="@/assets/Home/message.svg"
            alt="顶部图标"
            class="right-icon"
          />
        </el-button>
        <el-popover
          placement="top-start"
          title=""
          :width="200"
          trigger="hover"
          effect="dark"
          :popper-class="theme === 'dark' ? 'dark-popover' : ''"
        >
          <div class="logout-content">
            <el-button type="text" @click="LogingOut" class="logout-button">
              退出登录
            </el-button>
          </div>
          <template #reference>
            <div class="user-icon">
              <img
                src="@/assets/Home/person.svg"
                alt="顶部图标"
                class="right-icon"
              /><span style="margin-left: 8px">XJ</span>
            </div>
          </template>
        </el-popover>
      </div>
    </div>
    <commandDialog v-model:visible="commandDialogVisible"></commandDialog>
    <!-- <button @click="toggleTheme">切换主题</button> -->
  </div>
</template>

<script lang="ts" setup>
import { requireImg } from "@/utils/utils";
import { useRoute, useRouter } from "vue-router";
import { Storage } from "@/utils/storage";
import { onMounted, ref, reactive, computed } from "vue";
import { Theme, applyTheme } from "@/utils/theme.ts";
import commandDialog from "./components/command.vue";
const commandDialogVisible = ref(false);
const test = async () => {
  commandDialogVisible.value = true;
};
const router = useRouter();
const route = useRoute();

const currentRoute = router.currentRoute.value;
interface PropsType {
  titleName: string;
}
const props = withDefaults(defineProps<PropsType>(), {
  titleName: "",
});
import { logout } from "@/api/auth/user.js";
if (router.path === "/") {
  router.push("/Home"); // 初始默认跳转到 Overview 页面
}
// const isActive = (route) => {
//   return currentRoute.path === route;
// }
const theme = ref<Theme>(Storage.get("theme") || "dark");

const toggleTheme = () => {
  // theme.value = theme.value === "light" ? "dark" : "light";
  // Storage.set("theme", theme.value);
  // applyTheme(theme.value);
};

onMounted(() => {
  applyTheme(theme.value);
});

let currentMenuPath = currentRoute.path;

const menuList = [
  { name: "Home", id: 0, path: "/Home" },
  { name: "Map", id: 1, path: "/Map" },
  { name: "DashBoard", id: 2, path: "/DashBoard" },
  { name: "DataSource", id: 3, path: "/main/Wells" },
];
const LogingOut = async () => {
  const postData = {
    UserId: Storage.get("USERNAME"),
    PassWord: Storage.get("PASSWORD"),
    AuthWay: 0,
  };
  Storage.set("TOKEN", null);

  await logout(postData);

  router.push("/login");
};

const changeCurrentMenu = (path) => {
  let queryObj = {
    projectName: route.query.projectName || "Empty Project",
    projectId: route.query.projectId,
  };
  if (route.query.id) {
    queryObj["id"] = route.query.id;
  }
  if (route.query.type) {
    queryObj["type"] = route.query.type;
  }
  router.push({
    path: path,
    query: queryObj,
  });
};

const changeCurrentRouter = (path) => {
  router.push(path);
};
</script>
<style scoped>
.top-bar {
  width: 100%;
  height: 50px;
}
.top-section {
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: var(--background-color);
  height: 50px;
  line-height: 50px;
  position: fixed; /* 固定在顶部 */
  top: 0;
  left: 0; /* 确保不被侧边栏遮挡 */
  right: 0; /* 确保填充整个顶部 */
  box-sizing: border-box; /* 包括内边距和边框在内的宽度和高度 */
  z-index: 999;
  color: #eee; /* 设置段落颜色 */
  justify-content: space-between;
}

.left-section {
  display: flex;
  font-weight: bold;
}
.top-icon {
  width: 154px;
  height: 32px;
  margin: 9px 0;
}
.logo {
  display: flex;
  width: 240px;
}
.title {
  font-size: 20px;
  color: var(--text-color);
}

.right-section {
  display: flex;
}

.right-section > img {
  width: 20px;
  height: 20px;
  margin: 5px 10px;
}
.menu-item {
  padding: 0 10px;
  cursor: pointer;
  position: relative;
}
.menu-item:hover {
  background-color: var(--menuHoverBg);
  color: #fff;
  border-bottom: 1px solid #fff;
  transition: left 0.3s ease;
}
.menu-item-active {
  background-color: var(--menuHoverBg);
  color: #fff;
  padding: 0 10px;
  cursor: pointer;
  border-bottom: 1px solid #fff;
  position: relative;
}
.last-item::before {
  content: "";
  position: absolute;
  left: -10px;
  top: 10px; /* 上边距 */
  bottom: 10px; /* 下边距 */
  width: 1px; /* 竖线宽度 */
  background-color: #fff;
}
.last-item {
  margin-left: 20px;
}

.user-icon {
  border-radius: 50%;
  background-color: var(--menuHoverBg);
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  display: flex;
  margin: 0 16px;
}

.theme-toggle {
  background: transparent;
  border: none;
  padding: 8px;
  /* margin: 0 10px; */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
}

.theme-toggle:hover {
  background-color: var(--menuHoverBg);
  border-radius: 5px;
}

/* 深色模式下的菜单项样式 */
:root[data-theme="dark"] .menu-item {
  color: #fff;
}

:root[data-theme="dark"] .menu-item:hover {
  background-color: var(--menuHoverBg);
  color: #fff;
}

:root[data-theme="dark"] .menu-item-active {
  background-color: var(--menuHoverBg);
  color: #fff;
}

/* 深色模式下的分隔线样式 */
:root[data-theme="dark"] .last-item::before {
  background-color: var(--menuHoverBg);
}

.logout-content {
  padding: 8px 0;
}

.logout-button {
  width: 100%;
  text-align: center;
  color: var(--text-color);
  padding: 8px 16px;
}

.logout-button:hover {
  background-color: var(--menuHoverBg);
}

.right-icon {
  cursor: pointer;
}

/* .right-icon:hover {
  background-color: var(--menuHoverBg);
  border-radius: 5px;
} */
/* 深色模式下的弹出框样式 */
:deep(.dark-popover) {
  background-color: var(--menuBg);
  border-color: var(--borderColor);
}

:deep(.dark-popover .el-popper__arrow::before) {
  background-color: var(--menuBg);
  border-color: var(--borderColor);
}

:deep(.el-button.el-button--text) {
  color: var(--text-color);
}

:deep(.el-button.el-button--text:hover) {
  color: var(--menuActiveColor);
}
</style>
