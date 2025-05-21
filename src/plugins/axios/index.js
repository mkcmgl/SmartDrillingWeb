import axios from "axios";
// import { MessageBox } from "element-ui";
// import { message } from "../ElementUI";
import { checkErrorCode } from "./checkErrorCode";
import { refreshToken } from "@/api/auth/user";
import { Storage } from "../../utils/storage";
import router from "@/router";
// 开关全局加密
const isEncrypt = false;
// 是否弹出重置
let isReset = false;

const key = "EGCNPCV1";
const iv = "CNPCV1EG";
const storageNowTime = Storage.get("NOWTIME");
if (!storageNowTime) {
  Storage.set("NOWTIME", getTimeStamp());
}
let nowTime = Storage.get("NOWTIME") * 1;
let newTime = getTimeStamp();
let requests = [];
let isRefresh = false;
// 定义过期时间
let expiresTime = 1000 * 60 * 120;

// 获取时间戳
function getTimeStamp() {
  return new Date().getTime();
}

// 修改储存的请求的token
function changeNewToken(config) {
  const token = Storage.get("TOKEN");
  config.headers["Authorization"] = `Bearer ${token}`;
}

// 刷新token
async function getNewToken(config) {
  isRefresh = true;
  // 如果是退出登录不需要刷新token
  try {
    const result = await refreshToken();
    Storage.set("TOKEN", result.data.accessToken);
    Storage.set("WEBLINKTOKEN", result.data.webLinkToken);
  } catch (error) {
    console.log(error);
  } finally {
    nowTime = getTimeStamp(); // 更新时间戳
    Storage.set("NOWTIME", nowTime);
    newTime = getTimeStamp();
    requests.forEach((cb) => {
      cb();
    });
    requests = []; // 重新请求完清空
    isRefresh = false;
    return config;
  }
}

const request = axios.create({
  baseURL: "/v1",
  timeout: 20 * 1000,
});

request.interceptors.request.use(
  (config) => {
    if (config.local) {
      config.baseURL = "";
      return config;
    }
    // // 加密
    const token = Storage.get("TOKEN");
    if (token) {
      // 从token中截取token失效时间
      config.headers["Authorization"] = `Bearer ${token}`;
      expiresTime = token.split(".")[3] * 1000;
      if (token.split(".")[3] === 0 || token.split(".")[3] === "0") {
        expiresTime = 7200 * 1000;
      }
    }


    

    // 如果参数是文件不处理
    if (config.file) {
      return config;
    }
    if(config.isWidget){
      config.baseURL = ''
    }
    if (config.method === "get") {
      config.params = {
        ...config.params,
        // 解决ie浏览器网络请求缓存问题
        t: getTimeStamp(),
      };
    } else if (config.method === "post") {
      // config.data.t = getTimeStamp()
      if (config?.encrypt || isEncrypt) {
        config.data = config.data
          ? GetRequestJson(config.data, true, 1, key, iv)
          : config.data;
      } else {
        config.data = config.data
          ? GetRequestJson(config.data, false, 1, key, iv)
          : config.data;
      }
    }
    if (!config.isLogin) {
      newTime = getTimeStamp();
      // 这里调整为10分钟-2小时活跃刷新token，否则会遇到只使用了半个小时的情况 token不被刷新导致下线
      if (newTime - nowTime > (600 * 1000) / 2) {
        if (!isRefresh) {
          config = getNewToken(config);
        } else {
          return new Promise((resolve) => {
            // 用函数形式将 resolve 存入，等待刷新后再执行
            // 存储的config的token需要更新
            requests.push((_) => {
              changeNewToken(config);
              resolve(config);
            });
          });
        }
      }
    } else {
      // 如果是登录接口,就重置时间
      nowTime = getTimeStamp();
      Storage.set("NOWTIME", nowTime);
      newTime = getTimeStamp();
    }
    return config;
  },
  (error) => {
    console.log(error);
  },
);

request.interceptors.response.use(
  (response) => {
    const config = response.config;
    // 正常返回数据将isReset重置
    isReset = false;
    // 解密
    response.data = getServerRespones(response.data, key, iv);
    if (response.data.code === 1 || response.data.Code === 1) {
      let url = response.config.url;
      let index = url.indexOf("?");
      // 截取?号前的字符串
      if (index !== -1) {
        url = url.substring(0, index);
      }

      // 如果是大屏接口不弹出错误提示
      if (!config.screen) {
        checkErrorCode(response.data);
      }

      return Promise.reject(response);
    }
    // 解密
    return response.data.result ? response.data.result : response.data;
  },
  (error) => {
    const config = error.config;
    if (!config.screen) {
      switch (error.response?.status) {
        case 401:
          const hideToast = router.history.current.meta.hideToast;
          if (hideToast) {
            Storage.deal();
            window.location.href = "/login";
          } else {
            MessageBox.alert("登录已过期,请重新登录", "提示", {
              confirmButtonText: "确定",
              callback: () => {
                Storage.deal();
                window.location.href = "/login";
              },
            });
          }
          break;
        case 400:
          message.error(JSON.stringify(error.message));
          break;
        case 404:
          message.error("服务资源未找到");
          break;
        case 500:
          message.error("服务器内部错误");
          break;
        case 502:
          message.error("网关错误");
          break;
        default:
          message.error("服务器内部错误");
          break;
      }
    }
    // 如果是大屏接口不弹出错误提示
    if (!config.screen) {
      if (error.code === "ECONNABORTED" || error.code === "ERR_BAD_RESPONSE") {
        if (!isReset) {
          MessageBox.alert("请求超时，请稍后重试", "提示", {
            confirmButtonText: "确定",
          });
          isReset = true;
          return false;
        }
      }
    }
    return Promise.reject(error);
  },
);

export default request;
