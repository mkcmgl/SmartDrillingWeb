import request from "../../plugins/axios";

export const fetchDashBoard = (params) => {
  return request({
    url: "/userResource/dashboard/getList",
    method: "get",
    params,
  });
};

export const fetchBrowse = (params) => {
  return request({
    url: "/dashBoard/cdDashBoard/getBrowseList",
    method: "get",
    params,
  });
};
// 收藏
export const favorite = (data) => {
  return request({
    url: "/dashBoard/cdDashBoard/favorite",
    method: "post",
    data,
  });
};
export const favoriteDashBoard = (data) => {
  return request({
    url: "/userResource/resource/favorite",
    method: "post",
    data,
  });
};
export const shareDashBoard = (data) => {
  return request({
    url: "/userResource/resource/share",
    method: "post",
    data,
  });
};
// 重命名
export const renameDashBoard = (data) => {
  return request({
    url: "/dashBoard/cdDashBoard/favorite",
    method: "post",
    data,
  });
};
// 获取dashboard 模板列表
export const getList = (params) => {
  return request({
    url: "/userResource/dashboardTemplate/getList",
    method: "get",
    params,
  });
};
// 获取dashboard 列表
export const getDashBoardData = (params) => {
  return request({
    url: "/userResource/dashboard/getList",
    method: "get",
    params,
  });
};
// 获取文件目录树列表
export const getBrowse = (params) => {
  return request({
    url: "/userResource/resource/getBrowse",
    method: "get",
    params,
  });
};
//新增dashboard模板
export const createDashboardTemplate = (data) => {
  return request({
    url: "/userResource/dashboardTemplate/create",
    method: "post",
    data,
  });
};
//新增dashboard
export const createDashboard = (data) => {
  return request({
    url: "/userResource/dashboard/create",
    method: "post",
    data,
  });
};
export const getStyle = (params) => {
  return request({
    url: "/userResource/resource/getStyle",
    method: "get",
    params,
  });
};
//更新dashboard模板
export const updateDashboardTemplate = (data) => {
  return request({
    url: "/userResource/dashboardTemplate/update",
    method: "post",
    data,
  });
};
//更新dashboard
export const updateDashboard = (data) => {
  return request({
    url: "/userResource/dashboard/update",
    method: "post",
    data,
  });
};
//删除dashboard模板
export const deleteDashboardTemplate = (data) => {
  return request({
    url: "/userResource/dashboardTemplate/delete",
    method: "post",
    data,
  });
};
//删除dashboard
export const deleteDashboard = (data) => {
  return request({
    url: "/userResource/dashboard/delete",
    method: "post",
    data,
  });
};
//使用资源
export const useResource = (data) => {
  return request({
    url: "/userResource/resource/use",
    method: "post",
    data,
  });
};
//使用资源
export const getById = (params) => {
  return request({
    url: "/userResource/project/getById",
    method: "get",
    params,
  });
};
