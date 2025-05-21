import request from "../../plugins/axios";
// 井列表

// 根据权限获取井列表
export const getWellList = (params) => {
  return request({
    // url: "/well/cdWell/getList",
    url: "/well/cdWell/getPage",
    method: "get",
    params,
  });
};

// 当前钻次明细界面
// 曲线集查询
export const getCurveList = (params) => {
  return request({
    url: "/well/log/getLogSet",
    method: "get",
    params,
  });
};
// 曲线查询
export const getCurveInfo = (params) => {
  return request({
    url: "/well/log/getCurceHeaderByMnemonics",
    method: "get",
    params,
  });
};
// 曲线数据查询
export const getCurveInfoData = (data) => {
  return request({
    url: "/well/log/getCurveInfoData",
    method: "get",
    data,
  });
};
// 曲线数据查询
export const getCurveData = (data) => {
  return request({
    url: "/well/log/getList",
    method: "post",
    data,
  });
};

// 轨迹数据查询
export const getTrajectoryData = (params) => {
  return request({
    url: "/well/trajectory/realTime/getRunList",
    method: "get",
    params,
  });
};

export const getWellTrajectoryData = (params) => {
  return request({
    url: "/well/trajectory/realTime/getWellList",
    method: "get",
    params,
  });
};

// 获取曲线Log数据查询
export const getWellLogData = (data) => {
  return request({
    url: "/well/log/getList",
    method: "post",
    data,
  });
};
