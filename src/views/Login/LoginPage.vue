<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-content">
        <div class="login-left">
          <div style="text-align: center">
            <img src="@/assets/login-logo.png" alt="登录左侧图标" />
            <h1>智能导钻闭环决策软件平台</h1>
          </div>
        </div>
        <div class="login-right">
          <div class="login-header">
            <span>欢迎登录!</span>
          </div>

          <!-- <h3>账户密码登入</h3> -->

          <el-form :model="form" :rules="rules" ref="formRef" label-width="0">
            <div class="login-header-title">
              <div style="text-align: center; width: 80px">账户密码登入</div>
            </div>
            <el-form-item prop="username">
              <el-input v-model="form.username" placeholder="请输入用户名">
                <template #prefix>
                  <img src="@/assets/user.png" />
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="form.password"
                placeholder="请输入密码"
              >
                <template #prefix>
                  <img src="@/assets/password.png" /> </template
              ></el-input>
            </el-form-item>

            <el-form-item prop="verificationCode">
              <!-- <el-row :gutter="20"> -->
              <el-col :span="16">
                <el-input
                  v-model="form.verifyCode"
                  placeholder="请输入验证码"
                ></el-input>
              </el-col>
              <el-col :span="8">
                <VerifCode
                  :identifyCode="verificationCode"
                  @click="fetchVerificationCode"
                  class="verification-code"
                />
              </el-col>
              <!-- </el-row> -->
            </el-form-item>
            <el-form-item>
              <el-button type="success" @click="loginFun" class="login-button"
                >登录</el-button
              >
            </el-form-item>
            <el-form-item>
              <!-- <el-row :gutter="10" class="remember-forgot-row"> -->
              <el-col :span="12" style="display: flex; justify-content: end">
                <el-checkbox v-model="form.rememberMe"
                  ><span style="color: #b2b2b2">记住密码</span></el-checkbox
                >
              </el-col>
              <el-col :span="12" class="forgot-password-col" style="display: flex; justify-content: flex-end">
                <span style="color: #b2b2b2">忘记密码？</span>
                <a
                  href="#"
                  class="forgot-password"
                  @click="handleForgotPassword"
                  >请联系管理员</a
                >
              </el-col>
              <!-- </el-row> -->
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { ElMessage } from "element-plus";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();

import { Storage } from "@/utils/storage";

import VerifCode from "./VerifCode.vue";
import LoginPageScript from "./LoginPageScript.js";

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
});
let verificationCode = ref("");
let loading = ref(false);

const rules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  verifyCode: [{ required: true, message: "请输入y验证码", trigger: "blur" }],
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
  const str = await GetRequestJson(postData, true, 1, key, iv);
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
      router.push("/Home");
    })
    .catch((err: any) => {});
};
const fetchVerificationCode = async () => {
  console.log("fetchVerificationCode called"); // 添加日志
  try {
    if (form.value.username === "") {
      return;
    }
    const rlt = await getVerifyCode({ userId: form.value.username });
    verificationCode.value = rlt.data.code; // 假设返回的数据中包含验证码
    form.value.verifyCode = rlt.data.code; // 假设返回的数据中包含验证码
  } catch (error) {
    console.error("获取验证码失败:", error);
  }
};
const handleForgotPassword = () => {
  ElMessage.info("忘记密码功能待实现");
};

onMounted(() => {
  fetchVerificationCode(); // 组件挂载时获取验证码
});
</script>

<style scoped>
.login-page {
  background-image: url("@/assets/LoginBackground.png");
  background-size: cover;
  background-position: center;
  background-color: #f2f2f2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  display: flex;
  width: 50%;
  height: 33.33%;
  min-width: 900px;
  min-height: 500px;
}
.login-content {
  width: 100%;
  display: flex;
}

.login-left {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  color: #fff;
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
  width: 40%;
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
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}

.login-button {
  width: 100%;
  min-width: 200px;
  font-size: 18px;
  font-family: "Microsoft YaHei" !important;
}

.forgot-password {
  float: right;
  color: #67c23a;
  cursor: pointer;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.platform-title {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.login-header-title {
  position: relative;
  margin-bottom: 20px;
  font-size: 10px;
  color: #b2b2b2;
  display: flex;
  justify-content: center;
}

.login-header-title::before,
.login-header-title::after {
  content: "";
  position: absolute;
  top: 50%;
  width: calc(50% - 40px);
  height: 1px;
  background-color: #b2b2b2;
}

.login-header-title::after {
  right: 0;
}
.login-header-title::before {
  left: 0;
}
.verification-code {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
