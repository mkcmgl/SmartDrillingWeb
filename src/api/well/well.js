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
// 查询井型
export const getWellTypeList = (params) => {
  return request({
    url: "/dic/welltype/getPage",
    method: "get",
    params,
  });
};
// 查询井别
export const getWellShapeList = (params) => {
  return request({
    url: "/dic/wellshape/getPage",
    method: "get",
    params,
  });
};
// 根据井id获取井信息
export const getWellInfoById = (params) => {
  return request({
    url: "/well/cdWell/getById",
    method: "get",
    params,
  });
};
// 新建井
export const createWell = (data) => {
  return request({
    url: "/well/cdWell/create",
    method: "post",
    data,
  });
};

// 删除井
export const deleteWell = (data) => {
  return request({
    url: "/well/cdWell/deleteByIds",
    method: "post",
    data,
  });
};

// 更新井
export const updateWell = (data) => {
  return request({
    url: "/well/cdWell/update",
    method: "post",
    data,
  });
};

//尚未修改
// 查询井数据
export const getWellTreeData = (params) => {
  return request({
    url: "/witsml/well/getTree",
    method: "get",
    params,
  });
};

// 根据状态获取井
export const getStatusTreeData = (params) => {
  return request({
    url: "/witsml/well/getTreeByStatus",
    method: "get",
    params,
  });
};

// 获取井分页列表
export const getWellListPage = (params) => {
  return request({
    url: "/witsml/well/getPage",
    method: "get",
    params,
  });
};

// 获取订阅井
export const getWellListSubscribePage = (params) => {
  return request({
    url: "/witsml/well/subscribe/getPage",
    method: "get",
    params,
  });
};

// 获取实时井
export const getWellListRealTimePage = (params) => {
  return request({
    url: "/witsml/well/active/getPage",
    method: "get",
    params,
  });
};

// 订阅井
export const subscribeWell = (data) => {
  return request({
    url: "/subscribe/well/sub",
    method: "post",
    data,
  });
};

// 取消订阅井
export const unSubscribeWell = (data) => {
  return request({
    url: "/subscribe/well/unsub",
    method: "post",
    data,
  });
};

// 获取各个井状态井数量
export const getAmountByStatus = (params) => {
  return request({
    url: "/witsml/well/getAmountByStatus",
    method: "get",
    params,
  });
};

// 获取轨迹列表分页
export const getTrajectoryListPage = (params) => {
  return request({
    url: "/witsml/private/traj/getPage",
    method: "get",
    params,
  });
};

// 根据井id获取run列表
export const getRunListByWellId = (params) => {
  return request({
    url: "/witsml/private/wb/run/getList",
    method: "get",
    params,
  });
};
export const getAmountByRiskLevel = (params) => {
  return request({
    url: "/witsml/well/getAmountByRiskLevel",
    method: "get",
    params,
  });
};
//获取轨迹列表(runId)
export const getTrajectoryListByRunId = (params) => {
  return request({
    url: "/witsml/private/traj/getListByRun",
    method: "get",
    params,
  });
};


//获取井实时数据
export const getRtData = (params) => {
  // let uri = "";
  // if (data.ids.length > 0) {
  //   data.ids.forEach((item, index) => {
  //     if (index == 0) {
  //       uri += "?wellIds=" + item;
  //     } else {
  //       uri += "&wellIds=" + item;
  //     }
  //   });
  // }

  return request({
    url: "/witsml/well/getRtData",
    method: "get",
    screen: true,
    params,
  });
};

// 获取井树形结构
export const getWellTree = (params) => {
  return request({
    url: "/witsml/well/getTree",
    method: "get",
    params,
  });
};

// 获取钻次信息
export const getDrillById = (params) => {
  return request({
    url: "/well/cdWellboreRun/getById",
    method: "get",
    params,
  });
};
// 获取run列表
export const getRunList = (params) => {
  return request({
    url: "/well/cdWellboreRun/getList",
    method: "get",
    params,
  });
};

// 获取run
export const getRunById = (params) => {
  return request({
    url: "/witsml/run/getById",
    method: "get",
    params,
  });
};

// 新建run
export const createRun = (data) => {
  return request({
    url: "/well/cdWellboreRun/create",
    method: "post",
    data,
  });
};

// 更新run
export const updateRun = (data) => {
  return request({
    url: "/well/cdWellboreRun/update",
    method: "post",
    data,
  });
};
// 删除run
export const deleteRun = (data) => {
  return request({
    url: "/well/cdWellboreRun/deleteByIds",
    method: "post",
    data,
  });
};

//通过井id获取run列表
export const getRunsByWellId = (params) => {
  return request({
    url: "/witsml/run/getList",
    method: "get",
    params,
  });
};

//获取日报Run列表
export const getDailyRunsByWellId = (params) => {
  return request({
    url: "/drs/report/job/run/getList",
    method: "get",
    params,
  });
};

// 当前井明细界面
// 仪器串列表查询
export const getWellInstrumentData = (params) => {
  return request({
    url: "/well/cdWellInstrument/getList",
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
export const getCurveInfoData = (params) => {
  return request({
    url: "/well/log/getCurveInfoData",
    method: "get",
    params,
  });
};

// 获取井身结构
export const getWellBoreData = (params) => {
  return request({
    url: "/well/structure/getList",
    method: "get",
    params,
  });
};

// 获取BHA
export const getBHAData = (params) => {
  return request({
    url: "/well/WellboreRunToolheader/getList",
    method: "get",
    params,
  });
};

// 获取BHA工具串
export const getBHAToolData = (params) => {
  return request({
    url: "/well/WellboreRunTool/getList",
    method: "get",
    params,
  });
};
//导钻指令下发
export const create= (data) => {
  return request({
    url: "/well/directionalCommand/create",
    method: "post",
    data,
  });
};