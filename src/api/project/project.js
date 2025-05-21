import request from "../../plugins/axios";

// 分页查询项目
export const fetchProject = (params) => {
  return request({
    url: "/userResource/project/getPage",
    method: "get",
    params,
  });
};

// 查询所有项目
export const fetchProjectList = (params) => {
  return request({
    url: "/userResource/project/getList",
    method: "get",
    params,
  });
};

// 新建项目
export const createProject = (data) => {
  return request({
    url: "/userResource/project/create",
    method: "post",
    data,
  });
};

// 删除项目
export const deleteProject = (data) => {
  return request({
    url: "/userResource/project/delete",
    method: "post",
    data,
  });
};

// 重命名项目
export const renameProject = (data) => {
  return request({
    url: "/userResource/project/update",
    method: "post",
    data,
  });
};

//更新项目中的井列表
export const changeProjectWell = (data) => {
  return request({
    url: "/userResource/projectWells/update",
    method: "post",
    data,
  });
};

//获取所有井列表
export const getAllWellList = (params) => {
  return request({
    url: "/well/cdWell/getList",
    method: "get",
    params,
  });
};
//获取项目井列表
export const getProjectWellList = (params) => {
  return request({
    url: "/userResource/projectWells/getList",
    method: "get",
    params,
  });
};
//另存项目
export const saveAsProject = (data) => {
  return request({
    url: "/userResource/project/saveAs",
    method: "post",
    data,
  });
};

//分享
export const share = (data) => {
  return request({
    url: "/userResource/resource/share",
    method: "post",
    data,
  });
};
// 收藏
export const favorite = (data) => {
  return request({
    url: "/userResource/resource/favorite",
    method: "post",
    data,
  });
};
