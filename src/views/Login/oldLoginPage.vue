<template>
  <div class="login-page">
      <div class="login-container">
          <div class="login-left">
              <img src="@/assets/Login-left.jpg" alt="背景图片" class="background-image">
              <div class="h-title">欢迎使用</div>
              <div class="config-title">随钻测井智能导向模块化云原生架构平台</div>
              <div class="copyright-title">copyright@ information 2024</div>
          </div>
          <div class="login-right">
              <div class="login-header">
                  <img src="@/assets/login-logo1.svg" alt="图标" class="icon">
                  <span class="platform-title">随钻测井智能导向模块化云原生架构平台</span>
              </div>
              <el-form :model="form" :rules="rules" ref="formRef" label-width="80px">
                  <h3>账户密码登入</h3>
                  <el-form-item label="用户名" prop="username">
                      <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop="password">
                      <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
                  </el-form-item>
                  <el-form-item prop="verificationCode">
                      <el-row :gutter="10">
                          <el-col :span="10">
                              <el-input v-model="form.verifyCode" placeholder="请输入验证码"></el-input>
                          </el-col>
                          <el-col :span="10">
                              <VerifCode :identifyCode="verificationCode" @click="fetchVerificationCode" />
                          </el-col>
                      </el-row>
                  </el-form-item>
                  <el-form-item>
                      <el-row :gutter="10" class="remember-forgot-row">
                          <el-col :span="12">
                              <el-checkbox v-model="form.rememberMe">记住密码</el-checkbox>
                          </el-col>
                          <el-col :span="12" class="forgot-password-col">
                              <a href="#" class="forgot-password" @click="handleForgotPassword">忘记密码？</a>
                          </el-col>
                      </el-row>
                  </el-form-item>
                  <el-form-item>
                      <el-button type="primary" @click="loginFun" class="login-button">登录</el-button>
                  </el-form-item>
              </el-form>
          </div>
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
  rememberMe: false,
})
let verificationCode = ref("")
let loading = ref(false)


const rules = {
  username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
  ],
  verifyCode: [
      { required: true, message: '请输入y验证码', trigger: 'blur' },
  ],
};

const formRef = ref(null);

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

          // router.push('/main/Overview'); // 导航到 Mainviewpage
            router.push('/Home'); 
      })
      .catch((err: any) => {

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
const handleForgotPassword = () => {
  ElMessage.info('忘记密码功能待实现');
};


onMounted(() => {
   fetchVerificationCode(); // 组件挂载时获取验证码
})


</script>

<style scoped>
.login-page {
  background-image: url('@/assets/LoginBackground.jpg');
  background-size: cover;
  background-position: center;
  background-color: #f2f2f2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  background-color: #fff;
  display: flex;
  width: 60%;
  height: 33.33%;
  min-width: 900px;
  min-height: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.login-left {
  flex: 3;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
}

.h-title {
  position: absolute;
  top: 45px;
  left: 35px;
  font-size: 20;
  font-weight: 400;
  color: #ffffff;
}

.config-title {
  position: absolute;
  top: 75px;
  left: 35px;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
}

.copyright-title {
  position: absolute;
  top: 90%;
  font-size: 8px;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
}




.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-right {
  flex: 2;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.login-header .icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.login-header span {
  font-size: 18px;
  color: #333;
}

.login-button {
  width: 100%;
  max-width: 200px;
  font-size: 18px;
}

.forgot-password {
  float: right;
  color: #409EFF;
  cursor: pointer;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.platform-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

h3 {
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  font-size: 10px;
  color: #acacac;
}

h3::before,
h3::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 25%;
  height: 1px;
  background-color: #ccc;
}


h3::after {
  right: 60%;
}
h3::before {
  left: 60%;
}
</style>
