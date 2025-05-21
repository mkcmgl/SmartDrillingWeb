/**
 * storage封装
 */

// 存储方式 'localStorage' | 'sessionStorage'
const storageType = "localStorage";

//  重写调用本地存储的方法，统一项目的调用方式
class storage {
  constructor(type) {
    this.type = type;
  }
  get(key) {
    // 解密
    if (window[this.type].getItem(key)) {
      return getDesDecrypt(window[this.type].getItem(key));
    }
  }
  set(key, value) {
    // 加密
    if (value !== undefined && value !== null && value !== "") {
      try {
        window[this.type].setItem(key, getDesEncrypt(value.toString()));
      } catch (error) {
        console.log(error);
      }
    }
  }
  deal() {
    Object.keys(window[this.type]).forEach((item) => {
      if (!["VERSION", "Account", "Password", "infoChecked"].includes(item)) {
        window[this.type].removeItem(item);
      }
    });
  }
  remove(key) {
    window[this.type].removeItem(key);
  }
  clear() {
    window[this.type].clear();
  }
}
const Storage = new storage(storageType);
export {
  Storage
}
