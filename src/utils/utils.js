import dayjs from "dayjs";
/**
 * 文件单位转换
 * @param {String} bytes 字节
 * @param {Number} decimalPoint 保留小数位数,默认为2
 */
export const formatFileSize = (bytes, decimalPoint = 2) => {
  if (!bytes) return "";
  if (bytes == 0) return "0 B";
  let k = 1024,
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimalPoint)) + " " + sizes[i]
  );
};

/**
 * 日期格式化
 * @param {Date} date 传入的时间
 * @param {String} fmt 传入的格式
 */
export const formatDate = (date, fmt = "YYYY-MM-DD HH:mm:ss") => {
  if (!date) return "";
  return dayjs(date).format(fmt);
};

/**
 * 解析日期
 * @param {Date} time 传入的时间
 * @param {String} cFormat 传入的格式
 */
export const parseTime = (time, cFormat) => {
  if (arguments.length === 0 || !time) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string") {
      if (/^[0-9]+$/.test(time)) {
        time = parseInt(time);
      } else {
        time = time.replace(new RegExp(/-/gm), "/");
      }
    }

    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key];
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    return value.toString().padStart(2, "0");
  });
  return time_str;
};

/**
 * 设置css变量
 * @param {Array} prop 属性名称
 * @param {String} val 变量值
 * @param {Document} dom 传入的dom
 */
export const setCssVar = (prop, val, dom = document.documentElement) => {
  dom.style.setProperty(prop, val);
};

/**
 * 获取css变量
 * @param {String} prop
 * @param {Document} dom
 * @returns
 */
export const getCssVar = (prop, dom = document.documentElement) => {
  return dom.style.getPropertyValue(prop);
};

/**
 * 生成通用树形结构
 * @param {Array} data
 * @param {String} idKey
 * @param {String} parentIdKey
 * @param {String} childrenKey
 * @returns {Array}
 */

export const generateTree = (
  data,
  idKey = "id",
  parentIdKey = "parentId",
  childrenKey = "children",
) => {
  const tree = [];
  const map = {};

  data.forEach((item) => {
    map[item[idKey]] = { ...item, [childrenKey]: [] };
  });

  data.forEach((item) => {
    if (item[parentIdKey] && map[item[parentIdKey]]) {
      map[item[parentIdKey]][childrenKey].push(map[item[idKey]]);
    } else {
      tree.push(map[item[idKey]]);
    }
  });

  return tree;
};

// 打开新标签页
export const openNewTab = (url) => {
  let a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("target", "_blank");
  a.setAttribute("rel", "noopener noreferrer");
  document.body.appendChild(a);
  a.click();
};

//vite加载图片
export const requireImg = (imgPath) => {
  return new URL(`../assets/${imgPath}`, import.meta.url).href;
}