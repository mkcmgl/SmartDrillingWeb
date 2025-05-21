import request from "../../plugins/axios";
// 动态字典

// 根据类型获取字典列表
export const getDictDataByCode = (params) => {
  return request({
    url: "/dic/country/getListByType",
    method: "get",
    params,
  });
};

// 获取字典列表
export const getDicCountrytData = (params) => {
  return request({
    url: "/dic/country/getList",
    method: "get",
    params,
  });
};

// 获取区域字典列表
export const getDictRegionData = (params) => {
  return request({
    url: "/dic/region/getList",
    method: "get",
    params,
  });
};

// 获取区块字典列表
export const getDictBlockData = (params) => {
  return request({
    url: "/dic/block/getList",
    method: "get",
    params,
  });
};

// 获取井状态字典列表
export const getDictWellstatusData = (params) => {
  return request({
    url: "/dic/wellstatus/getList",
    method: "get",
    params,
  });
};

// 获取井型字典列表
export const getDictWelltypeData = (params) => {
  return request({
    url: "/dic/welltype/getList",
    method: "get",
    params,
  });
};

// 获取景别字典列表
export const getDictWellshapeData = (params) => {
  return request({
    url: "/dic/wellshape/getList",
    method: "get",
    params,
  });
};

// 获取作业公司字典列表
export const getDictOperatordivisionData = (params) => {
  return request({
    url: "/dic/operatordivision/getList",
    method: "get",
    params,
  });
};

// 获取作业者字典列表
export const getDictOperatorData = (params) => {
  return request({
    url: "/dic/operator/getList",
    method: "get",
    params,
  });
};

// 获取风险类型字典列表
export const getDictriskTypeData = (params) => {
  return request({
    url: "/dic/riskType/getList",
    method: "get",
    params,
  });
};

// 获取风险等级字典列表
export const getDictRiskLevelData = (params) => {
  return request({
    url: "/dic/riskLevel/getList",
    method: "get",
    params,
  });
};

// 获取作业状态字典列表
export const getDictOperationStatusData = (params) => {
  return request({
    url: "/dic/operationStatus/getList",
    method: "get",
    params,
  });
};

// 获取用户类型字典列表
export const getDictuserTypeData = (params) => {
  return request({
    url: "/dic/userType/getList",
    method: "get",
    params,
  });
};

// 获取用户类型字典列表
export const getDictuserStateData = (params) => {
  return request({
    url: "/dic/userState/getList",
    method: "get",
    params,
  });
};

// 获取用户身份字典列表
export const getDictuserIdentityData = (params) => {
  return request({
    url: "/dic/userIdentity/getList",
    method: "get",
    params,
  });
};

// 获取系统功能列表
export const getDictFolderTypeData = (params) => {
  return request({
    url: "/dic/folderType/getList",
    method: "get",
    params,
  });
};

// 获取资源类型字典列表
export const getDictresourceTypeData = (params) => {
  return request({
    url: "/dic/resourceType/getList",
    method: "get",
    params,
  });
};


// 根据类型获取字典分页列表
export const getDictDataByPage = (params) => {
  return request({
    url: "/dic/country/getPageByType",
    method: "get",
    params,
  });
};

// 根据id获取字典信息
export const getDictDataById = (params) => {
  return request({
    url: "/dic/country/getById",
    method: "get",
    params,
  });
};

// 新增数据字典表
export const createDictData = (data) => {
  return request({
    url: "/dic/country/create",
    method: "post",
    data,
  });
};

// 更新数据字典表
export const updateDictData = (data) => {
  return request({
    url: "/dic/country/update",
    method: "post",
    data,
  });
};

// 删除数据字典表
export const deleteDictDataById = (data, id) => {
  return request({
    url: "/dic/country/delete?id=" + id,
    method: "post",
    data,
  });
};

// 获取字典分类列表
export const getDictType = (params) => {
  return request({
    url: "/dictionary/type/getList",
    method: "get",
    params,
  });
};

// 根据类型获取字典分页列表
export const getDictTypeById = (params) => {
  return request({
    url: "/dictionary/type/getById",
    method: "get",
    params,
  });
};

// 新增数据字典分类表
export const createDictType = (data) => {
  return request({
    url: "/dictionary/type/create",
    method: "post",
    data,
  });
};

// 更新数据字典分类表
export const updateDictType = (data) => {
  return request({
    url: "/dictionary/type/update",
    method: "post",
    data,
  });
};

// 删除数据字典分类表
export const deleteDictTypeById = (data, id) => {
  return request({
    url: "/dictionary/type/delete?modelType=" + id,
    method: "post",
    data,
  });
};
// 根据类型获取字典分页列表
export const getListByType = (tt) => {
  return request({
    url: `/dic/country/getListByType?type=${tt}`,
    method: "get",
  });
};
// 根据类型获取字典分页列表
export const getListByModelTypes = (tt) => {
  return request({
    url: `/dic/country/getListByModelTypes?modelTypes=${tt}`,
    method: "get",
  });
};
