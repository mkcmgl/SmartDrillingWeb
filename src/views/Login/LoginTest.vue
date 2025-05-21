
<template>
    <div class="login-container">
      <div class="description-container">
        <img src="@/assets/login-logo2.svg" alt="公司 Logo" class="logo">
        <h2>欢迎登录</h2>
        <p>随钻测井智能导向模块化云原生架构平台</p>
      </div>
      <div class="login-form">
        <div>
          <img src="@/assets/login-logo1.svg" alt="公司 Logo" @click="LogingOut">
          <p>随钻测井智能导向模块化平台</p>
        </div>
        <h2>账号密码登入</h2>
        <el-form :model="form" @submit.prevent="login" ref="loginForm" label-width="80px">
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名" @blur="fetchVerificationCode"></el-input>
            <i class="el-icon-user" slot="prefix" style="font-size: 30px; color: #becfe9"></i>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
            <i class="el-icon-lock" slot="prefix" style="font-size: 30px; color: #becfe9"></i>
          </el-form-item>
          <el-form-item prop="verificationCode">
            <el-row :gutter="10">
              <el-col :span="10">
                <el-input v-model="form.verifyCode" placeholder="请输入验证码"></el-input>
              </el-col>
              <el-col :span="10">
                <VerifCode :identifyCode="verificationCode" @click="fetchVerificationCode"/>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginFun" style="width: 100%;">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import { useRoute, useRouter } from 'vue-router';
  const router = useRouter();
  import { Storage } from '@/utils/storage';
  
  import VerifCode from './VerifCode.vue';
  import LoginPageScript from './LoginPageScript.js';
  
  import {
    login,
    getUserList,
    cryptoLogin,
    getVerifyCode,
    getUserByUserId,
  } from "@/api/auth/user.js";
  
  
  const form = ref({
    username: "wyf",
    password: "123456",
    verifyCode: "",
  })
  let rules = {
    username: [
      {
        required: true,
        trigger: "blur",
      },
    ],
  }
  let verificationCode = ref("")
  let loading = ref(false)
  
  const loginFun = async () => {
    if (form.value.username === "") {
      ElMessage.error("请输入用户名");
      return;
    }
    if (form.value.password === "") {
      ElMessage.error("请输入密码");
      return;
    }
    if (form.value.verifyCode != verificationCode.value) {
      ElMessage.error("请输入正确的验证码");
      return;
    }
    loading.value = true;
    const postData = {
      UserId: form.value.username,
      PassWord: form.value.password,
      AuthWay: 0,
      Code: form.value.verifyCode,
    };
  
    const key = "EGCNPCV1";
    const iv = "CNPCV1EG";
    const str = await GetRequestJson(postData, true, 1, key, iv)
    const response: any = await login(str)
      .then(async (res: any) => {
        const {
          accessToken,
          userRealName,
          userID,
          userType,
          requireBinding,
          requireTOTP,
          totpAuthenticateId,
          regions,
          requireChangePwd,
          roles,
        } = res.data;
  
        Storage.set("USERNAME", userRealName);
        Storage.set("PASSWORD", form.value.password);
        Storage.set("ROLENAME", roles ? roles[0] : "");
        Storage.set("USERID", userID);
        Storage.set("TOKEN", accessToken);
        Storage.set("USETYPE", userType);
        Storage.set("USERREGIONS", JSON.stringify(regions || []));
        Storage.set("ENCRYOPTION", form.value.password);
  
        router.push('/main/Overview'); // 导航到 Mainviewpage
      })
      .catch((err:any) => {
  
      });
  
  }
  const fetchVerificationCode = async () => {
    console.log('fetchVerificationCode called'); // 添加日志
    try {
      if (form.value.username === '') {
        return;
      }
      const rlt = await getVerifyCode({ userId: form.value.username });
      verificationCode.value = rlt.data.code; // 假设返回的数据中包含验证码
      form.value.verifyCode = rlt.data.code; // 假设返回的数据中包含验证码
    } catch (error) {
      console.error('获取验证码失败:', error);
    }
  }
  
  
  onMounted(() => {
    fetchVerificationCode(); // 组件挂载时获取验证码
  })
  
  
  </script>
  
  <style scoped>
  .login-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    /* 上下居中 */
  }
  
  .description-container {
    display: flex;
    flex-direction: column;
    /* 元素上下排列 */
    justify-content: center;
    /* 上下居中 */
    align-items: flex-start;
    /* 靠左对齐 */
    padding-left: 10%;
    /* 左侧留白 30px */
    flex: 1;
    /* 占据一半空间 */
    color: #ff0000;
  }
  
  .login-form {
    height: 50%;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    flex: 1;
    /* 各占一半 */
  }
  
  .form-group {
    max-width: 300px;
    /* 限制最大宽度 */
    width: 100%;
    /* 确保输入框宽度为100% */
    margin: 0 auto;
    /* 水平居中 */
    margin-bottom: 1rem;
    /* 底部外边距 */
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .logo {
    width: 300px;
    height: 300px;
    margin-right: 0.5rem;
    margin-bottom: 1rem;
    /* 添加下边距，使图片与下方元素分开 */
    display: block;
    /* 确保图片是块级元素 */
  }
  
  .description-container h2 {
    font-size: 1.5rem;
    /* 设置标题字体大小 */
    color: #333;
    /* 设置段落颜色 */
    margin-bottom: 0.5rem;
    /* 设置标题下边距 */
  }
  
  .description-container p {
    color: #007bff;
    /* 设置标题颜色 */
    font-size: 2.6rem;
    /* 设置段落字体大小 */
  }
  
  .el-form-item {
    margin-bottom: 15px;
  }
  
  .el-input {
    width: 100%;
  }
  
  .el-button {
    width: 100%;
  }
  </style>