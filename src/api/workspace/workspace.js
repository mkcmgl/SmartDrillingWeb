import request from "../../plugins/axios";
// 井列表


// 根据权限获取工区列表
export const getWorkSpaceList = (params) => {
    return request({
      url: "/workSpace/cdWorkSpace/getList",
      method: "get",
      params,
    });
  };

    // 根据井id获取工区信息
  export const getWorkSpaceByid = (params) => {
    return request({
      url: "/workSpace/cdWorkSpace/getById",
      method: "get",
      params,
    });
  };

    // 新建工区
    export const createWorkSpace = (data) => {
        return request({
          url: "/workSpace/cdWorkSpace/create",
          method: "post",
          data,
        });
      };
  // 更新工区
  export const updateWorkSpace = (data) => {
    return request({
      url: "/workSpace/cdWorkSpace/update",
      method: "post",
      data,
    });
  };

  // 删除工区
  export const deleteWorkSpace = (data) => {
    return request({
      url: "/workSpace/cdWorkSpace/deleteByIds",
      method: "post",
      data,
    });
  };
  // 创建工区邻井
  export const createWorkSpaceWells = (data) => {
    return request({
      url: "/workSpace/cdWorkSpace/createWorkSpaceWells",
      method: "post",
      data,
    });
  };