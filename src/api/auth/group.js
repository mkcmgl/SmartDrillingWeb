import request from "../../plugins/axios";
// 群组管理

// 获取所有群组
export const getGroupListAll = (params) => {
    return request({
      url: "/identity/group/getAll",
      method: "get",
      params,
    });
  };

  // 获取所有群组成员
export const getGroupListAllUser = (params) => {
    return request({
      url: "/identity/group/user/getAll",
      method: "get",
      params,
    });
  };

// 获取群组列表
export const getGroupListByPage = (params) => {
  return request({
    url: "/identity/group/getPageByType",
    method: "get",
    params,
  });
};
// 获取群组信息
export const getGroupById = (params) => {
  return request({
    url: "/identity/group/getById",
    method: "get",
    params,
  });
};
// 新增群组
export const createGroup = (data) => {
  return request({
    url: "/identity/group/create",
    method: "post",
    data,
  });
};

// 修改群组
export const updateGroup = (data) => {
  return request({
    url: "/identity/group/update",
    method: "post",
    data,
  });
};

// 新增普通群组
export const createNormalGroup = (data) => {
  return request({
    url: "/identity/group/general/create",
    method: "post",
    data,
  });
};
// 修改普通群组
export const updateNormalGroup = (data) => {
  return request({
    url: "/identity/group/general/update",
    method: "post",
    data,
  });
};
// 新增特殊群组
export const createSpecialGroup = (data) => {
  return request({
    url: "/identity/group/custom/create",
    method: "post",
    data,
  });
};
// 修改特殊群组
export const updateSpecialGroup = (data) => {
  return request({
    url: "/identity/group/custom/update",
    method: "post",
    data,
  });
};

// 删除群组
export const deleteGroup = (data) => {
  return request({
    url: "/identity/group/delete",
    method: "post",
  });
};

// 删除群组
export const deleteGroupById = (data, id) => {
  return request({
    url: "/identity/group/delete?id=" + id,
    method: "post",
  });
};

export const getGroupRangeList = (params) => {
  return request({
    url: "/identity/group/range/getList",
    method: "get",
    params,
  });
};

//   获取群组成员分页列表
export const queryGroupUserByPage = (params) => {
  return request({
    url: "/identity/group/user/getPage",
    method: "get",
    params,
  });
};
// 获取可加入群组的用户分页列表
export const queryGroupUserInByPage = (params) => {
  return request({
    url: "/identity/group/user/select/getPage",
    method: "get",
    params,
  });
};

// 新增群组成员
export const createGroupMember = (data) => {
  return request({
    url: "/identity/group/user/create",
    method: "post",
    data,
  });
};


// 更新群组成员
export const updateGroupMember = (data) => {
  return request({
    url: "/identity/group/user/update",
    method: "post",
    data,
  });
};

// 删除群组成员
export const deleteGroupMember = (data) => {
  return request({
    url: "/identity/group/user/delete",
    method: "post",
    data,
  });
};

// 获取群组分配井分页列表
export const queryGroupWellByPage = (params) => {
  return request({
    url: "/identity/group/well/getPage",
    method: "get",
    params,
  });
};

// 获取可分配群组的井分页列表
export const queryGroupWellInByPage = (params) => {
  return request({
    url: "/identity/group/well/select/getPage",
    method: "get",
    params,
  });
};

// 新增群组分配井
export const createGroupWell = (data) => {
  return request({
    url: "/identity/group/well/create",
    method: "post",
    data,
  });
};

// 删除群组成员
export const deleteGroupWell = (data) => {
  return request({
    url: "/identity/group/well/delete",
    method: "post",
    data,
  });
};

// 新增曲线群组
export const createCurveGroup = (data) => {
  return request({
    url: "/identity/group/log/create",
    method: "post",
    data,
  });
};

// 更新曲线群组
export const updateCurveGroup = (data) => {
  return request({
    url: "/identity/group/log/update",
    method: "post",
    data,
  });
};

// 根据类型获取群组列表
export const getGroupListByType = (params) => {
  return request({
    url: "/identity/group/getList",
    method: "get",
    params,
  });
};

// 复制群组
export const copyGroup = (data) => {
  return request({
    url: "/identity/group/user/copy",
    method: "post",
    data,
  });
};
