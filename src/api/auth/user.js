import request from "../../plugins/axios";

//  encrypt: true  是否加密传输
//  isLogin: true 是否为需要激活活跃状态
// 用户登录
export const login = (data) => {
  return request({
    url: "/identity/sso/login",
    method: "post",
    data,
    // encrypt: true,
    isLogin: true,
  });
};

// 加密登录
export const cryptoLogin = (data) => {
  return request({
    url: "/identity/sso/login",
    method: "post",
    data,
    encrypt: true,
    isLogin: true,
  });
};

// 刷新token
export const refreshToken = (data) => {
  return request({
    url: "/identity/sso/refreshtoken",
    method: "post",
    data,
    // encrypt: true,
    isLogin: true,
    screen: true,
  });
};

// 用户下线
export const logout = (data) => {
  return request({
    url: "/identity/sso/logout",
    method: "post",
    data,
    isLogin: true,
  });
};

//获取验证码
export const getVerifyCode = (params) => {
  return request({
    url: "/identity/sso/code/getByUserId",
    method: "get",
    params,
    isLogin: true,
  });
};
// 获取登录信息
export const getLoginInfo = (params) => {
  return request({
    url: "/identity/sso/getLoginInfo",
    method: "get",
    params,
  });
};
// 新增用户
export const createUser = (data) => {
  return request({
    url: "/identity/user/create",
    method: "post",
    data,
    encrypt: true,
  });
};

// 修改用户
export const updateUser = (data) => {
  return request({
    url: "/identity/user/update",
    method: "post",
    data,
  });
};

// 更新密码
export const updatePassword = (data) => {
  return request({
    url: "/identity/user/updatePwd",
    method: "post",
    data,
    encrypt: true,
  });
};

// 根据id删除用户
export const deleteUserById = (data) => {
  return request({
    url: "/identity/user/deleteByUserIds",
    method: "post",
    data,
  });
};

// 获取用户列表分页
export const getUserListByPage = (params) => {
  return request({
    url: "/identity/user/getPage",
    method: "get",
    params,
  });
};

// 获取用户列表
export const getUserList = (params) => {
  return request({
    url: "/identity/user/getList",
    method: "get",
    params,
  });
};

// 根据角色id获取用户列表
export const getUserByRoleId = (params) => {
  return request({
    url: "/identity/user/getListByRoleId",
    method: "get",
    params,
  });
};

// 根据userid获取用户信息
export const getUserByUserId = (params) => {
  return request({
    url: "/identity/user/getByUserId",
    method: "get",
    params,
  });
};

// 重置密码
export const resetPassword = (data) => {
  return request({
    url: "/identity/user/resetPwd?userId=" + data.userId,
    method: "post",
  });
};

// 重置用户
export const resetUser = (data) => {
  return request({
    url: "/identity/user/resetLock?userId=" + data.userId,
    method: "post",
  });
};

// 双因素验证

// 获取绑定密匙
export const getTotpAuthenticateCode = (params) => {
  return request({
    url: "/identity/totp/code/getById",
    method: "get",
    params,
    isLogin: true,
  });
};

// 绑定密匙
export const bindingTotpAuthenticateCode = (data) => {
  return request({
    url: "/identity/totp/binding",
    method: "post",
    data,
    isLogin: true,
  });
};

// 校验密匙
export const checkTotpAuthenticateCode = (data) => {
  return request({
    url: "/identity/totp/check",
    method: "post",
    data,
    isLogin: true,
  });
};

// 通过会话登录
export const getAuthenticateSession = (data) => {
  return request({
    url: "/identity/totp/session/login",
    method: "post",
    data,
    isLogin: true,
  });
};

// 重置totp绑定
export const resetTotpBinding = (data) => {
  return request({
    url: "/identity/totp/reset",
    method: "post",
    data,
  });
};

//获取协同办公跳转url
export const getPhiloRunUrl = (params) => {
  return request({
    url: "/identity/auth/getPhiloRunUrl",
    method: "get",
    params,
  });
};

//查询访问统计分页列表
export const getAccessPersonList = (params) => {
  return request({
    url: "/identity/stat/access/getPage",
    method: "get",
    params,
  });
};

// 获取在线人数
export const getOnlineCount = (params) => {
  return request({
    url: "/identity/sso/getOnlineCount",
    method: "get",
    params,
    screen: true,
  });
};
