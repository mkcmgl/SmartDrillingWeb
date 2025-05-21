import Cookies from "js-cookie";
class CookieStorage {
  // 获取Cookies
  get(key) {
    return Cookies.get(key);
  }
  // 设置Cookies
  set(key, value, seconds) {
    return Cookies.set(key, value, {
      expires: new Date(new Date() * 1 + seconds * 1000),
    });
  }
  // 移除Cookies
  remove(key) {
    return Cookies.remove(key);
  }
}

export default new CookieStorage();
