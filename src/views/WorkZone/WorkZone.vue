<template>
  <div class="WorkZone-page">
    <div class="tab-content">
      <div class="search-bar">
        <el-input v-model="searchUser" placeholder="搜索用户"></el-input>
        <el-input v-model="searchEmail" placeholder="搜索邮箱"></el-input>
        <el-button type="primary">搜索</el-button>
        <el-button @click="openCreateWorkZoneDialog">新建工区</el-button>
      </div>
      <el-table :data="WorkZoneData">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="workName" label="工区名"></el-table-column>
        <el-table-column prop="groupName" label="群组名"></el-table-column>
        <el-table-column prop="wellName" label="参考井"></el-table-column>
        <el-table-column prop="modifyDate" label="最近更新时间"></el-table-column>
        <el-table-column prop="modifyUserId" label="最近更新用户"></el-table-column>
        <el-table-column prop="remarks" label="备注"></el-table-column>
        <!-- <el-table-column v-for="column in WorkZoneColumns" :key="column.prop" :prop="column.prop"
          :label="column.label"></el-table-column> -->
        <el-table-column label="操作" width="300">
          <template #default="scope">
            <span class="operation-item" @click="handleWorkSpaceView(scope.row)">查看</span>
            <span class="operation-item" @click="handleWorkSpaceSaveAs(scope.row)">另存</span>
            <span class="operation-item" @click="handleWorkSpaceDelete(scope.row)">删除</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- <el-table :data="WorkZoneData">
            <el-table-column prop="index" label="序号"></el-table-column>
            <el-table-column prop="name" label="工区名称"></el-table-column>
            <el-table-column prop="Group" label="群组"></el-table-column>
            <el-table-column prop="LastTime" label="最近更新时间"></el-table-column>
            <el-table-column prop="Lastuser" label="最近更新用户"></el-table-column>
            <el-table-column prop="opertion" label="操作"></el-table-column>
      </el-table> -->
    </div>
    <el-dialog v-model="createWorkZoneDialogVisible">
      <template #header>
        <div class="dialog-title">新建工区</div>
      </template>
      <el-form :model="newWorkZone">
        <el-row :gutter="20">
          <!-- 第一行 -->
          <el-col :span="12">
            <div class="grid-content">
              <el-form-item label="工区名" prop="Name">
                <el-input v-model="newWorkZone.workName" placeholder="请输入工区名" class="input-width"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <!-- 第二行 -->
          <el-col :span="12">
            <div class="grid-content">
              <el-form-item label="群组" prop="Name">
                <el-select v-model="newWorkZone.groupName" placeholder="选择群组" class="input-width"
                  @change="handleWorkSpaceGroupselect">
                  <el-option v-for="option in groupOptions" :key="option.value" :label="option.label"
                    :value="option.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-form-item label="井" prop="Name">
                <el-select v-model="newWorkZone.WellId" placeholder="选择井" class="input-width"
                  @change="handleWorkSpaceWellselect">
                  <el-option v-for="option in groupWellOptions" :key="option.value" :label="option.label"
                    :value="option.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px;">
          <el-col :span="24">
            <el-table :data="WorkSpaceWellData">
              <el-table-column label="选择井列表" :selectable="isSelectable">
                <template #default="{ row }">
                  <el-checkbox v-model="row.selected">
                  </el-checkbox>
                </template>
              </el-table-column>
              <el-table-column prop="wellCommonName" label="参考井"></el-table-column>
              <el-table-column prop="country" label="国家"></el-table-column>
              <el-table-column prop="region" label="区域"></el-table-column>
              <el-table-column prop="block" label="区块"></el-table-column>
              <!-- <el-table-column v-for="column in WorkSpaceWellColumns" :key="column.prop" :prop="column.prop"
                :label="column.label"></el-table-column> -->
            </el-table>
          </el-col>
        </el-row>
      </el-form>
      <template v-slot:footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="ComfirWorkSpaceDialog">确认</el-button>
          <el-button @click="createWorkZoneDialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="EditWorkZoneDialogVisible">
      <template #header>
        <div class="dialog-title">另存工区</div>
      </template>
      <el-form :model="saveasWorkZone">
        <el-row :gutter="20">
          <!-- 第一行 -->
          <el-col :span="12">
            <div class="grid-content">
              <el-form-item label="另存工区名称" prop="Name">
                <el-input v-model="saveasWorkZone.newworkName" placeholder="请输入工区名" class="input-width"></el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <el-form-item label="当前工区名称" prop="Name">
                <el-input v-model="saveasWorkZone.workName" placeholder="请输入工区名" class="input-width"></el-input>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <!-- 第二行 -->
          <el-col :span="12">
            <div class="grid-content">
              <el-form-item label="井" prop="Name">
                <el-select v-model="saveasWorkZone.WellId" placeholder="选择井" class="input-width"
                  @change="handleWorkSpaceWellselect">
                  <el-option v-for="option in groupWellOptions" :key="option.value" :label="option.label"
                    :value="option.value"></el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px;">
          <el-col :span="24">
            <el-table :data="SaveAsWorkSpaceWellData">
              <el-table-column label="选择" :selectable="isSelectable">
                <template #default="{ row }">
                  <el-checkbox v-model="row.selected">
                  </el-checkbox>
                </template>
              </el-table-column>
              <el-table-column prop="wellCommonName" label="参考井"></el-table-column>
              <el-table-column prop="country" label="国家"></el-table-column>
              <el-table-column prop="region" label="区域"></el-table-column>
              <el-table-column prop="block" label="区块"></el-table-column>
              <!-- <el-table-column v-for="column in WorkSpaceWellColumns" :key="column.prop" :prop="column.prop"
                :label="column.label"></el-table-column> -->
            </el-table>
          </el-col>
        </el-row>
      </el-form>
      <template v-slot:footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="ComfirSaveasWorkSpaceDialog">确认</el-button>
          <el-button @click="createWorkZoneDialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted, nextTick } from 'vue';
import { TableColumn, OptionValue, TreeNode } from '@/utils/utilstype.ts'; // 确保路径正确
import { Storage } from '@/utils/storage';
import { ElMessage } from "element-plus";

import {
  getWorkSpaceList,
  getWorkSpaceByid,
  createWorkSpace,
  updateWorkSpace,
  deleteWorkSpace,
  createWorkSpaceWells,
} from "@/api/workspace/workspace";

import {
  getGroupListAll,
  getGroupListByPage,
  getGroupListAllUser,
  getGroupById,
  deleteGroupById,
  updateGroup,
  createGroup,
  deleteGroup,
  queryGroupUserByPage,
  createGroupMember,
  deleteGroupMember,
  queryGroupWellInByPage,

} from "@/api/auth/group.js";

let createWorkZoneDialogVisible = ref(false); // 控制新建工区对话框的显示
let EditWorkZoneDialogVisible = ref(false); // 控制新建工区对话框的显示
let isEditMode = ref(false); // 控制新建工区对话框的显示



let searchUser = ref('')
let searchEmail = ref('')
let searchGroup = ref('')
let searchDescription = ref('')
let searchRole = ref('')
let searchPermission = ref('')

let WorkZoneColumns = ref<TableColumn[]>([])
let WorkZoneData = ref<any[]>([])

let SaveAsWorkSpaceWellData = ref<any[]>([])

let WorkSpaceWellData = ref<any[]>([])
let WorkSpaceWellOptions = ref<any[]>([])
let WorkSpaceWellColumns = ref<TableColumn[]>([])

let groupOptions = ref<OptionValue[]>([]);
let groupWellOptions = ref<OptionValue[]>([]);

let unselectableId = ref(''); // 用于存储不可选的ID

let newWorkZone = ref({
  id: '',
  workName: '',
  newworkName: '',
  groupID: '',
  groupName: '',
  WellId: '',
  WellName: '',
  workDesginUserid: '',
  wellboreId: '',
  workspaceWells: ref<any[]>([]),
});

let saveasWorkZone = ref({
  id: '',
  workName: '',
  newworkName: '',
  groupID: '',
  groupName: '',
  orWellId: '',
  WellId: '',
  WellName: '',
  workDesginUserid: '',
  wellboreId: '',
  workspaceWells: ref<any[]>([]),
});

onMounted(() => {
  Loading(); // 组件挂载时获取验证码
})
//#region 初始化
const Loading = async () => {
  WorkSpaceWellData = ref<any[]>([]);

  const responseGroup = await getGroupListAll();
  //添加选项
  groupOptions.value = responseGroup.data.map((group: any) => ({
    value: group.id,
    label: group.name,
  }));

  const response = await getWorkSpaceList();

  WorkZoneData.value = response.data;


  const workspaceist = response.data; // 将获取的数据存入 rolesDatas
  WorkZoneData.value = response.data;
  // 动态生成列
  if (response.data.length > 0) {
    const keys = Object.keys(response.data[0]);
    WorkZoneColumns.value = keys.map(key => {
      let label = key.charAt(0).toUpperCase() + key.slice(1);
      if (key === 'workName') label = '工区名称';
      if (key === 'wellId') label = '参考井';
      if (key === 'wellboreId') label = '井眼';
      if (key === 'workSpaceWells') label = '邻井';
      if (key === 'workDesginUserid') label = '设计者';
      if (key === 'modifyDate') label = '修改时间';
      if (key === 'modifyUserId') label = '修改者';
      if (key === 'remarks') label = '备注';
      if (key === 'remarks') {
        label = '备注';
      }
      return {
        prop: key,
        label: label,
      };
    });
  }
}
//#endregion

//#region 新建工区
const openCreateWorkZoneDialog = () => {
  isEditMode.value = false;

  groupWellOptions = ref<OptionValue[]>([]);
  createWorkZoneDialogVisible.value = true;
};
const handleWorkSpaceWellselect = async (value: any) => {

  unselectableId.value = value;
}


const handleWorkSpaceGroupselect = async (value: any) => {
  newWorkZone.value.groupID = value;
  newWorkZone.value.id = value;
  const responseGroup = await queryGroupWellInByPage({ GroupId: value });
  //添加选项
  groupWellOptions.value = responseGroup.data.map((group: any) => ({
    value: group.wellId,
    label: group.wellCommonName,
  }));


  const wellInfos = await Promise.all(
    responseGroup.data.map(async (well: any) => {
      return {
        selected: false,
        wellId: well.wellId,
        wellCommonName: well.wellCommonName,
        country: well.country,
        region: well.region,
        block: well.block,
      };
    })
  );
  WorkSpaceWellData.value = wellInfos;


  const workspacelist = responseGroup.data; // 将获取的数据存入 rolesDatas
  {
    
    // 动态生成列
    if (responseGroup.data.length > 0) {
      const keys = Object.keys(responseGroup.data[0]);
      WorkSpaceWellColumns.value = keys.map(key => {
        let label = key.charAt(0).toUpperCase() + key.slice(1);
        if (key === 'workName') label = '工区名称';
        if (key === 'wellId') label = '参考井';
        if (key === 'wellboreId') label = '井眼';
        if (key === 'workSpaceWells') label = '邻井';
        return {
          prop: key,
          label: label,
        };
      });
    }
  }
}
const ComfirWorkSpaceDialog = async () => {
  // 新建井的逻辑
  createWorkZoneDialogVisible.value = false;
  newWorkZone.value.workDesginUserid = Storage.get("USERNAME");
  newWorkZone.value.wellboreId = newWorkZone.value.WellId;
  // 过滤选中的井，并分别存储wellId和wellBoreId
  const selectedWells = WorkSpaceWellData.value.filter((well: any) => well.selected);
  newWorkZone.value.workspaceWells = selectedWells.map((well: any) => ({
    wellId: well.wellId,
    wellBoreId: well.wellId,
  }));



  const response = await createWorkSpace(newWorkZone.value);
  if (response.code === 200 || response.msg === 'success') {
    if (response.msg === "success") {
      ElMessage({
        showClose: true,
        message: "创建成功",
        type: "success",
      });
    }
    Loading();
  } else {
    console.error(response);
  }

}
const isSelectable = (row: any) => {
  // 动态设定某一行的复选框是否可选
  return row.wellId !== unselectableId.value; // 如果wellId与unselectableId不一致，则可选
};


const WorkSpaceDlgTitle = () => {
  return isEditMode.value ? '另存工区信息' : '新建工区';
}
//#endregion

//#region 操作
const handleWorkSpaceView = (row: any) => {
  // return isEditMode.value ? '另存工区信息' : '新建工区';
      window.open(`/WorkAreaInfo?workName=${row.workName}`);
}
const handleWorkSpaceSaveAs = async (row: any) => {
  SaveAsWorkSpaceWellData = ref<any[]>([]);
  const workdata = WorkZoneData.value.find((item: any) => item.workID === row.workID);
  const responseGroup = await queryGroupWellInByPage({ GroupId: workdata.groupId });
  //添加选项
  groupWellOptions.value = responseGroup.data.map((group: any) => ({
    value: group.wellId,
    label: group.wellCommonName,
  }));


  Object.assign(saveasWorkZone.value, {
    ...workdata,
    orWellId: saveasWorkZone.value.orWellId, // 保留 orWellId 的值
  });
  saveasWorkZone.value.id = workdata.workId;

  const wellInfos = await Promise.all(
    responseGroup.data.map(async (well: any) => {
      return {
        selected: false,
        wellId: well.wellId,
        wellCommonName: well.wellCommonName,
        country: well.country,
        region: well.region,
        block: well.block,
      };
    })
  );
  SaveAsWorkSpaceWellData.value = wellInfos;


  const workspacelist = responseGroup.data; // 将获取的数据存入 rolesDatas
  {
    //WorkZoneData.value = responseGroup.data;
    // 动态生成列
    if (responseGroup.data.length > 0) {
      const keys = Object.keys(responseGroup.data[0]);
      WorkSpaceWellColumns.value = keys.map(key => {
        let label = key.charAt(0).toUpperCase() + key.slice(1);
        if (key === 'workName') label = '工区名称';
        if (key === 'wellId') label = '参考井';
        if (key === 'wellboreId') label = '井眼';
        if (key === 'workSpaceWells') label = '邻井';
        return {
          prop: key,
          label: label,
        };
      });
    }
  }

  EditWorkZoneDialogVisible.value = true;
}
const ComfirSaveasWorkSpaceDialog = async (row: any) => {
  // 新建井的逻辑
  createWorkZoneDialogVisible.value = false;
  saveasWorkZone.value.workDesginUserid = Storage.get("USERNAME");
  saveasWorkZone.value.wellboreId = saveasWorkZone.value.WellId;
  saveasWorkZone.value.workName = saveasWorkZone.value.newworkName;
  // 过滤选中的井，并分别存储wellId和wellBoreId
  const selectedWells = WorkSpaceWellData.value.filter((well: any) => well.selected);
  saveasWorkZone.value.workspaceWells = selectedWells.map((well: any) => ({
    wellId: well.wellId,
    wellBoreId: well.wellId,
  }));
  console.log(saveasWorkZone.value);
  const response = await createWorkSpace(saveasWorkZone.value);
  if (response.code === 200 || response.msg === 'success') {

    Loading();
  } else {
    console.error(response);
  }
}

const handleWorkSpaceDelete = async (row: any) => {
  const postdata = {
    ids: [row.workId],
  }
  const rlt = await deleteWorkSpace(postdata);
  if (rlt.code === 200 || rlt.msg === 'success') {
    Loading();
  } else {
    console.error(rlt);
  }
}
//#endregion

const search = () => {
  console.log('搜索功能待实现');
}
const reset = () => {
  searchUser.value = '';
  searchEmail.value = '';
  searchGroup.value = '';
  searchDescription.value = '';
  searchRole.value = '';
  searchPermission.value = '';
}
</script>

<style scoped>
.WorkZone-page {
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* 上下居中 */
  padding-left: 15px;
  background-color: #f2f2f2;
  /* 设置背景颜色 */
}

.full-height {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tab-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  /* 设置圆角 */

  background-color: #fff;
  /* 设置背景颜色 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  /* 添加阴影效果 */
  height: 100%;
}

.grid-content {
  padding: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.search-bar .el-input {
  margin-right: 1rem;
}

.search-bar .el-button {
  margin-right: 1rem;
}

.el-table {
  flex: 1;
}

.operation-item {
  cursor: pointer;
  transition: color 0.3s;
  margin-right: 12px;
}

.operation-item-divider {
  cursor: pointer;
  transition: color 0.3s;
  margin-right: 12px;
}

.operation-item:hover {
  color: #66b1ff;
}
</style>