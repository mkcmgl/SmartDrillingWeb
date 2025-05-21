<template>
  <div class="main-container">
    <!-- <nav class="sidebar">
      <router-link to="/main/Overview" class="nav-item" active-class="active">
        <img :src="getImageSrc('/main/Overview', 'Overview')" alt="图标1" />
      </router-link>
      <router-link to="/main/Wells" class="nav-item" active-class="active">
        <img :src="getImageSrc('/main/Wells', 'Wells')" alt="图标2" />
      </router-link>
      <router-link to="/main/WorkZone" class="nav-item" active-class="active">
        <img :src="getImageSrc('/main/WorkZone', 'WorkZone')" alt="图标3" />
      </router-link>
      <router-link to="/main/Users" class="nav-item" active-class="active">
        <img :src="getImageSrc('/main/Users', 'Users')" alt="图标4" />
      </router-link>
      <router-link to="/main/Dictionary" class="nav-item" active-class="active">
        <img :src="getImageSrc('/main/Dictionary', 'Dictionary')" alt="图标5" />
      </router-link>
    </nav> -->
    <TopBar />
    <div class="router-view-content">
      <router-view class="bottom-section"></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { requireImg } from "@/utils/utils";
import { useRoute, useRouter } from "vue-router";
import { Storage } from "@/utils/storage";
import TopBar from "@/views/TopBar.vue";

const router = useRouter();
const currentRoute = router.currentRoute.value;

import { logout } from "@/api/auth/user.js";
if (router.path === "/") {
  // router.push('/main/Overview'); // 初始默认跳转到 Overview 页面
  router.push("/Home"); // 初始默认跳转到 Overview 页面
}
const isActive = (route) => {
  return currentRoute.path === route;
};
const getImageSrc = (router, name) => {
  return isActive(router)
    ? requireImg(`${name}_selected.svg`)
    : requireImg(`${name}.svg`);
};

const LogingOut = async () => {
  const postData = {
    UserId: Storage.get("USERNAME"),
    PassWord: Storage.get("PASSWORD"),
    AuthWay: 0,
  };
  await logout(postData);

  router.push("/login");
};
</script>

<style scoped>
.main-container {
  height: 100%;
}
/* 
.sidebar {
  width: 60px;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  top: 50px;
  left: 0;
  bottom: 0;
  position: fixed;
  box-sizing: border-box; 
}

.nav-item {
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.3s; 
}

.nav-item img {
  width: 32px;
  height: 26px;
}

.nav-item.active {
  border-radius: 8px; 
} */

.router-view-content {
  padding: 20px;
  background-color: #525252;
  height: calc(100vh - 90px);
}
</style>
