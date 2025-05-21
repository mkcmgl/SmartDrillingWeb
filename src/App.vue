<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import {
  Connent,
  EventTarget,
  SetTreeEventTarget,
} from "@/plugins/websocket/index.js";
import { onMounted } from "vue";
import { Storage } from "@/utils/storage";
onMounted(() => {
  Connent("ws://123.57.26.173:6058/MessageBusService", Storage.get("USERID"));
});
</script>

<template>
  <div id="app">
    <div class="app-container">
      <!-- <router-view></router-view> -->
    </div>
  </div>
  <RouterView />
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%; /* 确保 #app 填满整个页面 */
  display: flex;
  flex-direction: column;
}

.app-container {
  display: flex;
  align-items: flex-start;
  flex: 1; /* 确保 .app-container 填满父容器的剩余空间 */
  height: 100%;
}

.description-container {
  flex: 1;
  padding: 1rem;
  border-right: 1px solid #ccc;
}

.login-container {
  flex: 1;
  width: 100%;
}
</style>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  /* font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;  */
}
/* 全局样式 */
/* 下拉框样式-点击时不出现黑框线 */
.el-popper {
  outline: none !important; /* 确保没有outline */
}
.el-select .el-select__wrapper {
  outline: none !important; /* 下拉框样式-确保没有outline */
  box-shadow: 0 0 0 1px var(--el-input-border-color, #212121) inset;
}
.el-input.is-disabled .el-input__wrapper {
  outline: none !important; /* 输入框-确保没有outline */
}

/* 全局弹窗样式 */
.el-dialog__header {
  background-color: #121212 !important;
  padding: 8px !important;
}
.el-dialog__title {
  color: #eee !important;
}

.el-dialog {
  --el-dialog-padding-primary: 0 !important;
}
.el-dialog__body {
  /* padding: 20px; */
  background-color: #212121;
  color: #eee;
}
.dialog-footer {
  background-color: #212121;
  padding: 0 20px 20px 20px;
}

.el-popover {
  --el-popover-padding: 0 !important;
}
.el-input {
  --el-input-focus-border: #212121 !important;
  --el-input-focus-border-color: #212121 !important;
  --el-input-border-color: #212121 !important;
}
.el-dialog__headerbtn:focus .el-dialog__close,
.el-dialog__headerbtn:hover .el-dialog__close {
  color: #eee !important;
}
:root {
  --el-border-radius-base: 5px !important;
  --el-font-family: "Microsoft YaHei" !important;
  --el-font-size-base: 12px !important;
  --background-color: #eee;
  --text-color: #333;
  --content-bg: #fff;
}

:root[data-theme="dark"] {
  --background-color: #121212;
  --text-color: #fff;
  --content-bg: #212121;
}

/* 添加平滑过渡效果 */
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.el-popper.is-dark,
.el-popper.is-dark > .el-popper__arrow:before {
  background: #313131;
  border: 1px solid #313131;
}
.el-popover.el-popper.is-dark {
  --el-popover-border-color: #313131;
  --el-popover-bg-color: #313131;
}

.el-select__placeholder {
  /* color: #eee !important; */
}
.el-select-dropdown__item {
  color: #eee; /* 这里设置为你想要的颜色 */
}

.el-select-dropdown__item.selected,
.el-select-dropdown__item:hover {
  color: #eee !important;
  background: #525252 !important;
}
/* 鼠标移出下拉框时选中项背景色 */
.el-select-dropdown__item.is-hovering {
  background-color: #525252 !important;
}
.el-select-dropdown__item.is-selected {
  color: #fff !important;
}

.el-input-group__prepend {
  background-color: #212121 !important;
}
.el-input-group__append {
  background-color: #212121 !important;
  padding: 0 12px !important;
}

.el-checkbox {
  height: auto !important;
}

.el-select__placeholder {
  /* color: #b2b2b2 !important; */
}
</style>
