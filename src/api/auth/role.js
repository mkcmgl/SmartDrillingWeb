import request from "../../plugins/axios"

// 创建角色
export const createRole = data => {
  return request({
    url: "/identity/role/create",
    method: "post",
    data,
  })
}

// 修改角色
export const updateRole = data => {
  return request({
    url: "/identity/role/update",
    method: "post",
    data,
  })
}

// 删除角色 (根据id删除角色)
export const deleteRole = data => {
  return request({
    url: "/identity/role/deleteByIds",
    method: "post",
    data,
  })
}

// 获取角色列表
export const getRolelist = params => {
  return request({
    url: "/identity/role/getList",
    method: "get",
    params,
  })
}

// 获取角色列表(分页)
export const getRolelistByPage = params => {
  return request({
    url: "/identity/role/getPage",
    method: "get",
    params,
  })
}

// 根据上级角色ID获取下级角色信息集合
export const getRoleInfoByParentId = params => {
  return request({
    url: "/identity/role/getListByParentId",
    method: "get",
    params,
  })
}
