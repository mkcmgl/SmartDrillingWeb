<template>
  <div class="users-page">
    <div class="content">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="用户管理" name="users">
          <div class="tab-content">
            <div class="search-bar">
              <el-input v-model="searchUser" placeholder="搜索用户"></el-input>
              <el-input v-model="searchEmail" placeholder="搜索邮箱"></el-input>
              <el-button type="primary" @click="search">搜索</el-button>
              <el-button @click="openAddUserDialog">添加用户</el-button>
            </div>
            <el-table :data="usersData">
              <el-table-column type="index" label="序号"></el-table-column>
              <el-table-column v-for="column in userColumns" :key="column.prop" :prop="column.prop"
                :label="column.label"></el-table-column>
              <el-table-column label="操作" width="150">
                <template #default="scope">
                  <el-button @click="handleEdit(scope.row)" type="primary" size="small">编辑</el-button>
                  <el-button @click="handleDelete(scope.row)" type="danger" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="群组管理" name="groups">
          <div class="tab-content">
            <div class="search-bar">
              <el-input v-model="searchGroup" placeholder="搜索群组"></el-input>
              <el-input v-model="searchDescription" placeholder="搜索描述"></el-input>
              <el-button type="primary" @click="search">搜索</el-button>
              <el-button @click="openAddGroupDialog">添加群组</el-button>
            </div>
            <el-table :data="groupData" :key="isUpdate">
              <el-table-column type="index" label="序号"></el-table-column>
              <el-table-column v-for="column in filteredGroupColumns()" :key="column.prop" :prop="column.prop"
                :label="column.label"></el-table-column>
              <el-table-column label="操作" width="300">
                <template #default="scope">
                  <el-button @click="handleUserEditGroup(scope.row)" type="primary" size="small">编辑</el-button>
                  <el-button @click="handleDeleteGroup(scope.row)" type="danger" size="small">删除</el-button>
                  <el-button @click="handleManagerGroup(scope.row)" type="primary" size="small">人员管理</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="角色管理" name="roles">
          <div class="tab-content">
            <div class="search-bar">
              <el-input v-model="searchRole" placeholder="搜索角色"></el-input>
              <el-input v-model="searchPermission" placeholder="搜索权限"></el-input>
              <el-button type="primary" @click="search">搜索</el-button>
              <el-button @click="openAddRoleDialog">添加角色</el-button>
            </div>
            <el-table :data="rolesDatas" :key="isUpdate">
              <el-table-column type="index" label="序号"></el-table-column>
              <el-table-column v-for="column in filteredRolesColumns()" :key="column.prop" :prop="column.prop"
                :label="column.label"></el-table-column>
              <el-table-column label="操作" width="150">
                <template #default="scope">
                  <el-button @click="handleDeleteRole(scope.row)" type="danger" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <el-dialog v-model="addUserDialogVisible" :title="UserDlgTitle()">
      <!-- <template #header>
        <div class="dialog-title">{{ UserDlgTitle() }}</div>
      </template> -->
      <el-form style="background-color: #fff; padding: 20px" :model="newUser">
        <el-row :gutter="20">
          <!-- 第一行 -->
          <el-col :span="12">
            <div class="grid-content">
              <div class="form-item">
                <label>用户名</label>
                <el-input v-model="newUser.userId" placeholder="请输入用户名" class="input-width"></el-input>
              </div>
            </div>
          </el-col>
    
          <el-col :span="12">
            <div class="grid-content">
              <div class="form-item">
                <label>昵称</label>
                <el-input v-model="newUser.RealName" placeholder="请输入用户名" class="input-width"></el-input>
              </div>
            </div>
          </el-col>
          <!-- 第二行 -->
          <el-col :span="12">
            <div class="grid-content">
              <div class="form-item">
                <label>类型</label>
                <el-select effect="dark" v-model="newUser.Type" placeholder="选择类型" class="input-width">
                  <el-option v-for="option in UsertypeOptions" :key="option.value" :label="option.label"
                    :value="option.value"></el-option>
                </el-select>
              </div>
            </div>

          </el-col>
           <el-col :span="12">
            <div class="grid-content">
              <div class="form-item">
                <label>角色</label>
                <el-select effect="dark" v-model="newUser.RoleId" placeholder="选择角色" class="input-width">
                  <el-option v-for="option in rolesOptions" :key="option.value" :label="option.label"
                    :value="option.value"></el-option>
                </el-select>
              </div>
            </div>
          </el-col>
          <!-- 第三行 -->
          <el-col :span="12">
            <div class="grid-content">
              <div class="form-item">
                <label>邮箱</label>
                <el-input v-model="newUser.Email" placeholder="请输入邮箱" class="input-width"></el-input>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <div class="form-item">
                <label>密码</label>
                <el-input type="password" v-model="newUser.password" placeholder="请确认密码" class="input-width"></el-input>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <!-- <template v-slot:footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="ComfirUserDialog">确认</el-button>
          <el-button @click="addUserDialogVisible = false">取消</el-button>
        </span>
      </template> -->
                      <template #footer>
      <div class="dialog-footer">
          <el-button type="primary" @click="ComfirUserDialog">确认</el-button>
          <el-button @click="addUserDialogVisible = false">取消</el-button>
      </div>
    </template>
    </el-dialog>
    <el-dialog v-model="addGroupDialogVisible" :title="GroupDlgTitle()">
      <!-- <template #header>
        <div class="dialog-title">{{ GroupDlgTitle() }}</div>
      </template> -->
      <el-form style="background-color: #fff; padding: 20px" :model="newUser">
        <el-row :gutter="20">
          <!-- 第一行 -->
          <el-col :span="12">
            <div class="grid-content">
              <el-form-item label="群组名称" prop="Name">
                <el-input v-model="newgroup.Name" placeholder="请输入群组名称"></el-input>
              </el-form-item>
            </div>
          </el-col>

             <el-col :span="12">
            <div class="grid-content">
              <div class="form-item">
                <label>国家</label>
                <el-select effect="dark" v-model="newgroup.countryName" placeholder="选择国家" class="input-width"
                  @change="handleGroupCountryselect">
                  <el-option v-for="option in countryOptions" :key="option.value" :label="option.label"
                    :value="option.value"></el-option>
                </el-select>
              </div>
            </div>
          </el-col>
          <!-- 第二行 -->
          <el-col :span="12">
            <div class="grid-content">
              <div class="form-item">
                <label>区域</label>
                <el-select effect="dark" v-model="newgroup.regionName" placeholder="选择区域" class="input-width"
                  @change="handleGroupRegionselect">
                  <el-option v-for="option in regionOptions" :key="option.value" :label="option.label"
                    :value="option.value"></el-option>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <div class="form-item">
                <label>区块</label>
                <el-select effect="dark" v-model="newgroup.blockName" placeholder="选择区块" class="input-width"
                  @change="handleGroupBlockselect">
                  <el-option v-for="option in blockOptions" :key="option.value" :label="option.label"
                    :value="option.value"></el-option>
                </el-select>
              </div>
            </div>
          </el-col>
          <!-- 第三行 -->
          <el-col :span="12">
            <div class="grid-content">
              <div class="form-item">
                <el-checkbox v-model="isIncludeWell">井控制</el-checkbox>
                <el-button type="primary" @click="openWellDialog">选择井</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <!-- <template v-slot:footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="ComfirGroupDialog">确认</el-button>
          <el-button @click="addGroupDialogVisible = false">取消</el-button>
        </span>
      </template> -->
                <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="ComfirGroupDialog">确认</el-button>
          <el-button @click="addGroupDialogVisible = false">取消</el-button>
      </div>
    </template>
    </el-dialog>

    <el-dialog v-model="groupWellDialogVisible" title="选择井">
      <div class="dialog-content">
        <el-row>
          <el-col :span="10">
            <div class="tree-container">
              <div class="tree-title">井列表</div>
              <el-tree :data="WellListdata" show-checkbox node-key="id" default-expand-all
                @check-change="handleCheckChange" class="custom-tree"></el-tree>
            </div>
          </el-col>
          <el-col :span="4" class="button-col">
            <el-button type="primary" @click="moveToRight" class="move-button">→</el-button>
            <el-button type="primary" @click="moveToLeft" class="move-button">←</el-button>
          </el-col>
          <el-col :span="10">
            <div class="tree-container">
              <div class="tree-title">群组井</div>
              <el-tree :data="ChosenWellData" show-checkbox node-key="id" default-expand-all
                @check-change="handleCheckChange" class="custom-tree"></el-tree>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- <template #footer>
        <el-button @click="groupWellDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmSelection">确定</el-button>
      </template> -->
       <template #footer>
      <div class="dialog-footer">
 <el-button @click="groupWellDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmSelection">确定</el-button>
      </div>
    </template>
    </el-dialog>
    <el-dialog v-model="addGroupUserDialogVisible">
      <template #header>
        <div class="dialog-title">编辑群组人员</div>
      </template>
      <el-form style="background-color: #fff; padding: 20px" :model="newUser">
        <el-row :gutter="20">
          <!-- 第一行 -->
          <el-col :span="6">
            <el-select effect="dark" v-model="searchEmail" placeholder="选择群组" class="input-width">
              <el-option v-for="group in groupOptions" :key="group.value" :label="group.label" :value="group.value"
                @change="handleEditGroupselect"></el-option>
            </el-select>
          </el-col>
          <el-col :span="6">
            <el-input v-model="searchUser" placeholder="搜索用户" class="input-width"></el-input>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" @click="reset">搜索</el-button>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" @click="LoadAddGroupUser">添加</el-button>
          </el-col>
          <el-col :span="3">
            <el-button type="danger" @click="deleteGroupUser" v-show="!isUserEdit">批量删除</el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 20px;">
          <el-col :span="24">
            <el-table :data="groupusersData">
              <el-table-column label="选择">
                <template #default="{ row }">
                  <el-checkbox v-model="row.selected"></el-checkbox>
                </template>
              </el-table-column>
              <el-table-column v-for="column in Groupuserscolumns" :key="column.prop" :prop="column.prop"
                :label="column.label"></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-form>
      <!-- <template v-slot:footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="handleConfirm">{{ isUserEdit ? '添加' : '确定' }}</el-button>
          <el-button @click="handleCancel">取消</el-button>
        </span>
      </template> -->
      <template #footer>
      <div class="dialog-footer">
     <el-button type="primary" @click="handleConfirm">{{ isUserEdit ? '添加' : '确定' }}</el-button>
          <el-button @click="handleCancel">取消</el-button>
      </div>
    </template>
    </el-dialog>
    <!-- 添加角色对话框 -->
    <el-dialog v-model="addRoleDialogVisible" title="添加角色">
      <!-- <template #header>
        <div class="dialog-title">添加角色</div>
      </template> -->
      <el-form  style="background-color: #fff; padding: 20px" :model="newRole">
        <el-row :gutter="20">
          <!-- <el-col :span="24">
            <div class="grid-content">
              <div class="form-item">
                <label>上级角色</label>
                <el-select v-model="newRole.ParentId" placeholder="选择上级角色" class="input-width">
                  <el-option v-for="option in rolesOptions" :key="option.value" :label="option.label"
                    :value="option.value"></el-option>
                </el-select>
              </div>
            </div>
          </el-col> -->
          <el-col :span="24">
            <div class="grid-content">
              <el-form style="background-color: #fff; padding: 20px" :model="newRole" :rules="rules" ref="roleForm">
                <el-form-item label="角色名" prop="Name">
                  <el-input v-model="newRole.Name" placeholder="请输入角色名"></el-input>
                </el-form-item>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-form>
      <!-- <template v-slot:footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="confirmAddRole">确认</el-button>
          <el-button @click="addRoleDialogVisible = false">取消</el-button>
        </span>
      </template> -->
       <template #footer>
      <div class="dialog-footer">
         <el-button type="primary" @click="confirmAddRole">确认</el-button>
          <el-button @click="addRoleDialogVisible = false">取消</el-button>
      </div>
    </template>
    </el-dialog>
  </div>
</template>


<script lang="ts" setup>
import { onMounted, ref, onUnmounted, nextTick } from 'vue';

import {
  getWellList,
  getWellInfoById,
  createWell,
} from "@/api/well/well.js";

import {
  getDictRegionData,
  getDicCountrytData,
  getDictBlockData,
} from "@/api/dic/dic.js";

import {
  createRole,
  updateRole,
  deleteRole,
  getRolelist,
  getRolelistByPage,
  getRoleInfoByParentId,
} from "@/api/auth/role.js";

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
  updateGroupMember,

} from "@/api/auth/group.js";

import {
  getUserList,
  createUser,
  getUserByUserId,
  deleteUserById,
  updateUser,
  updatePassword,
} from "@/api/auth/user.js";
import { fa } from 'element-plus/es/locales.mjs';
import { TableColumn, OptionValue, TreeNode } from '@/utils/utilstype.ts'; // 确保路径正确
import { ElMessage } from "element-plus";

let isUserEdit = ref(false) // 用于区分添加和编辑模式
let isIncludeWell = ref(false) // 用于区分添加和编辑模式
let isEditMode = ref(false) // 用于区分添加和编辑模式
let addUserDialogVisible = ref(false) // 控制添加用户弹窗的显示
let addRoleDialogVisible = ref(false) // 控制添加角色弹窗的显示
let addGroupDialogVisible = ref(false) // 控制添加群组弹窗的显示
let addGroupUserDialogVisible = ref(false) // 控制添加群组成员弹窗的显示
let groupWellDialogVisible = ref(false) // 控制添加群组成员弹窗的显示
let activeTab = ref('users')
let searchUser = ref('')
let searchEmail = ref('')
let searchGroup = ref('')
let searchDescription = ref('')
let searchRole = ref('')
let searchPermission = ref('')

let isUpdate = ref(false)
let groupusersData = ref<any>([])
let oRgroupusersData = ref<any>([])

let usersData = ref([])
let groupData = ref([])
let rolesDatas = ref<any[]>([])

let countryOptions = ref<OptionValue[]>([]);
let regionOptions = ref<OptionValue[]>([]);
let blockOptions = ref<OptionValue[]>([]);
let groupOptions = ref<OptionValue[]>([]);
let rolesOptions = ref<OptionValue[]>([])
let UsertypeOptions = ref<OptionValue[]>([
  { value: '0', label: '普通用户' },
  { value: '1', label: '区域管理员' },
  { value: '2', label: '系统管理员' },
  { value: '3', label: '超级管理员' },
])
let Groupuserscolumns = ref<TableColumn[]>([])
let groupcolumns = ref<TableColumn[]>([])
let rolescolumns = ref<TableColumn[]>([]) // 动态列
let rolesColumns = ref<TableColumn[]>([])
let userColumns = ref<TableColumn[]>([])

let currentGroupId = ref<number | null>(null); // 当前群组ID

let newRole = ref({
  ParentId: "",
  Name: "",
});

let newgroup = ref({
  id: '',
  Name: "",
  GroupRanges: [
    {
      // "Type": "区域类型1",
      // "Codes": ["编码1", "编码2", "编码3"]
    },
  ],
  countryName: "",
  regionName: "",
  blockName: "",
  countryCode: '',
  regionCode: "",
  blockCode: "",
  WellIds: [],
  UserIds: [],
  Remarks: "",
});

let originalgroup = ref(null); // 用于存储原始用户数据
let originalgroupUser = ref(null); // 用于存储原始用户数据

let newUser = ref({
  userId: "zkkzkk1",
  RealName: "周开馗",
  password: "123456",
  Type: 0,
  RoleId: "",
  RoleIds: [""],
  Regions: [""],
  Identity: "",
  Email: "Email@qq.com",
  GroupIds: [],
})
let originalpassword = ref("") // 用于存储原始用户数据
let originalUser = ref(null) // 用于存储原始用户数据

const WellListdata = ref<TreeNode[]>([]);
const ChosenWellData = ref<TreeNode[]>([]);

// 表单验证规则
const rules = ref({
  Name: [
    { required: true, message: '角色名不能为空', trigger: 'blur' }
  ],
  ParentId: [
    { required: false, message: '上级角色不能为空', trigger: 'change' }
  ],
});

const grouprules = ref({
  countryCode: [
    { required: true, message: '请选择国家', trigger: 'change' }
  ],
  blockCode: [
    { required: true, message: '请选择区块', trigger: 'change' }
  ],
  regionCode: [
    { required: true, message: '请选择区域', trigger: 'change' }
  ],
  Name: [
    { required: true, message: '请输入群组名称', trigger: 'blur' }
  ]
});

onMounted(() => {
  Loading(); // 组件挂载时获取验证码
})

const Loading = async () => {
  LoadRoles();
  LoadingGroup();
  LoadingUsers();
}
const LoadRoles = async () => {
  try {
    const response = await getRolelist();
    rolesDatas = response.data; // 将获取的数据存入 rolesDatas
    rolesDatas = response.data.map((role: any) => ({
      ...role, // 保留其他属性
      type: convertRoleType(role.type) // 转换 Type 属性
    }));

    //添加选项
    rolesOptions.value = rolesDatas.map((role: any) => ({
      value: role.id,
      label: role.name,
    }));
    // 动态生成列
    if (response.data.length > 0) {
      const keys = Object.keys(response.data[0]);
      rolesColumns.value = keys.map(key => {
        let label = key.charAt(0).toUpperCase() + key.slice(1);
        let width;
        let hidden = false;
        switch (key) {
          case 'id':
            label = 'ID';
            hidden = true;
            break;
          case 'CreateUserId':
            label = 'CreateUserId';
            hidden = true;
            break;
          case 'name':
            label = '角色名';
            break;
          case 'type':
            label = '类型';
            break;
          default:
            width = undefined; // 让默认情况下使用自动宽度
        }

        return {
          prop: key,
          label: label,
          width: width,
        };
      });
    }
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
  isUpdate.value = !isUpdate.value;
}
const LoadingGroup = async () => {
  try {
    const response = await getGroupListAll();

    // 动态生成列
    if (response.data.length > 0) {
      const keys = Object.keys(response.data[0]);
      groupcolumns.value = keys.map(key => {
        let label = key.charAt(0).toUpperCase() + key.slice(1);
        if (key === 'name') label = '群组名';
        if (key === 'groupType') label = '群组类型';
        if (key === 'regionCode') label = '区域';
        if (key === 'expireDate') label = '有效期';
        if (key === 'remarks') label = '备注';
        if (key === 'modifyDate') label = '修改日期';
        if (key === 'modifyUserId') label = '修改者';
        if (key === 'createDate') label = '创建日期';
        if (key === 'createUserId') label = '创建者';
        return {
          prop: key,
          label: label,
        };
      });
    }
    groupData = response.data; // 将获取的数据存入 rolesDatas
    groupData = response.data.map((role: any) => ({
      ...role, // 保留其他属性
      groupType: convertGroupType(role.groupType) // 转换 Type 属性
    }));
    //添加选项
    groupOptions.value = groupData.map((group: any) => ({
      value: group.id,
      label: group.name,
    }));
  } catch (error) {
    console.error('Error fetching roles:', error);
  }

  isUpdate.value = !isUpdate.value;


}
const LoadingUsers = async () => {

  const response = await getUserList();
  const userlist = response.data; // 将获取的数据存入 rolesDatas


  // 获取用户信息
  const userInfos = await Promise.all(
    userlist.map(async (user: any) => {
      const userResponse = await getUserByUserId({ userId: user.userId });
      return {
        realname: userResponse.data.realName,
        type: convertUsertype(userResponse.data.type),
        gender: convertUserGender(userResponse.data.gender),
        identity: userResponse.data.identity,
        email: userResponse.data.email,
        state: convertState(userResponse.data.state),
        userId: user.userId,
      };
    })
  );
  usersData.value = userInfos;


  // 动态生成列
  if (userInfos.length > 0) {
    const keys = Object.keys(userInfos[0]);
    userColumns.value = keys.map(key => {
      let label = key.charAt(0).toUpperCase() + key.slice(1);
      if (key === 'userId') label = '用户名';
      if (key === 'realname') label = '昵称';
      if (key === 'gender') label = '性别';
      if (key === 'type') label = '用户类型';
      if (key === 'roleIds') label = '角色ID';
      if (key === 'regions') label = '区域';
      if (key === 'identity') label = '身份';
      if (key === 'email') label = '邮箱';
      if (key === 'state') label = '用户状态';
      return {
        prop: key,
        label: label,
      };
    });
  }
}
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
const convertState = (state: any) => {
  switch (state) {
    case 0:
      return '正常';
    case 1:
      return '锁定';
    case 2:
      return '未启用';
    case 3:
      return '禁用';
    default:
      return '未知';
  }
}
const convertUsertype = (type: any) => {
  switch (type) {
    case 0:
      return '普通用户';
    case 1:
      return '区域管理员';
    case 2:
      return '系统管理员';
    case 3:
      return '超级管理员';
    default:
      return '未知';
  }
}
const convertUserGender = (gender: any) => {
  switch (gender) {
    case 0:
      return '男';
    case 1:
      return '女';
    default:
      return '未知';
  }
}
const convertGroupType = (groupType: any) => {
  switch (groupType) {
    case 0:
      return '特殊群组  打开井权限';
    case 1:
      return '特殊群组  打开字典授权';
    default:
      return '未知';
  }
}
const convertRoleType = (Type: any) => {
  switch (Type) {
    case 0:
      return '超级管理员';
    case 1:
      return '系统管理员';
    case 2:
      return '普通用户';
    default:
      return '未知';
  }
}
const convertUserType = (Type: any) => {
  switch (Type) {
    case '超级管理员':
    case '3':
      return 3;
    case '系统管理员':
    case '2':
      return 2;
    case '区域管理员':
    case '1':
      return 1;
    case '普通用户':
    case '0':
      return 0;
    default:
      return 0;
  }
}
const handleEdit = async (row: any) => {
  console.log('编辑:', row);

  isEditMode.value = true; // 设置为编辑模式
  newUser.value.Type = row.type;
  newUser.value.RealName = row.realname;
  newUser.value.userId = row.userId;
  newUser.value.state = row.state;
  newUser.value.Email = row.email;
  newUser.value.gender = row.gender;
  newUser.value.groupName = row.groupName; // 将当前行的数据复制到 newUser
  originalpassword.value = newUser.value.password;
  originalUser = {
    Type: newUser.value.Type,
    RealName: newUser.value.RealName,
    userId: newUser.value.userId,
    state: row.state,
    email: newUser.value.Email,
    gender: row.gender,
    groupName: row.groupName,
  }; // 保存原始用户数据
  addUserDialogVisible.value = true; // 打开弹窗
}
const handleDelete = async (row: any) => {
  console.log('删除:', row.userId);
  const arr = [row.userId];
  const response = await deleteUserById(arr);
  if (response.msg === "success") {
    await LoadingUsers();
    ElMessage({
      showClose: true,
      message: "删除成功",
      type: "success",
    });
  }
  // Loading();
  // .then(async (res: any) => {
  //   await LoadingUsers();
  // }).catch((err: any) => {

  // });
}
const handleUserEditGroup = async (row: any) => {
  isEditMode.value = true; // 设置为编辑模式
  const courtrys = await getDicCountrytData().then(async (res: any) => {
    countryOptions = res.data.map((country: any) => ({
      value: country.countryCode,
      label: country.name,
    }));
  });

  console.log('编辑:', row.id);
  isEditMode.value = true;

  const rlt = await getGroupById({ id: row.id })
    .then(async (res: any) => {

      newgroup.value.GroupRanges = res.data.groupRanges;

    });

  newgroup.value.GroupRanges.forEach((range: any) => {
    const codes = typeof range.codes === 'string' ? range.codes : String(range.codes);
    switch (range.type) {
      case 'country':
        newgroup.value.countryCode = range.codes;
        break;
      case 'region':
        newgroup.value.regionCode = codes.replace(/"/g, "'");
        break;
      case 'block':
        newgroup.value.blockCode = codes.replace(/"/g, "'");
        break;
      default:
        console.warn(`未知的类型: ${range.type}`);
    }
  });
  newgroup.countryName = newgroup.value.countryCode;
  // countryOptions.value.forEach(range => {
  //   if (range.value == newgroup.value.countryCode) {
  //     newgroup.value.countryName = range.label;
  //   }
  //   if (String(range.value) == String(newgroup.value.countryCode)) {
  //     newgroup.value.countryName = range.label;
  //   }

  // });
  // selectedCountry = countryOptions[2].value;
  // const cselectedOption = countryOptions.find(option => option.value === String(newgroup.countryCode));
  // if (cselectedOption) {
  //   selectedCountry = 'CN';
  // } else {
  //   console.warn(`未找到对应的国家选项: ${newgroup.value.countryCode}`);
  // }
  // await handleGroupRegionselect(newgroup.value.countryCode);
  // const rselectedOption = regionOptions.value.find(option => option.value == newgroup.value.regionCode);
  // if (rselectedOption) {
  //   regionOptions = rselectedOption.value;
  // } else {
  //   console.warn(`未找到对应的国家选项: ${newgroup.value.regionCode}`);
  // }
  // await handleGroupBlockselect(newgroup.value.regionCode);
  // const bselectedOption = blockOptions.value.find(option => option.value === newgroup.value.blockCode);
  // if (bselectedOption) {
  //   blockCode = bselectedOption.value;
  // } else {
  //   console.warn(`未找到对应的国家选项: ${newgroup.value.blockCode}`);
  // }
  newgroup.value.id = row.id;
  newgroup.value.Name = row.name;
  // newgroup.countryName = row.countryName;
  // newgroup.countryCode = row.countryCode;
  // newgroup.regionCode = row.regionCode;
  // newgroup.regionName = row.regionName;
  // newgroup.blockCode = row.blockCode;
  // newgroup.blockName = row.blockName;
  newgroup.value.WellIds = row.WellIds;
  newgroup.value.UserIds = row.UserIds;
  originalgroup = {
    id: newgroup.value.id,
    Name: newgroup.value.Name,
    GroupRanges: newgroup.value.GroupRanges,
    countryName: newgroup.value.countryName,
    regionName: newgroup.value.regionName,
    blockName: newgroup.value.blockName,
    countryCode: newgroup.value.countryCode,
    regionCode: newgroup.value.regionCode,
    blockCode: newgroup.value.blockCode,
    WellIds: newgroup.value.WellIds,
    UserIds: newgroup.value.UserIds,
  }; // 保存原始用户数据
  addGroupDialogVisible.value = true;
}
const handleDeleteGroup = async (row: any) => {
  console.log('删除:', row.id);
  isIncludeWell.value = false;
  const arr = [row.id];
  const response = await deleteGroupById({}, row.id);
  if (response.msg === "success") {
    await LoadingGroup();
    ElMessage({
      showClose: true,
      message: "删除成功",
      type: "success",
    });
  }
  //  .then.then(async (res: any) => {
  //   await LoadingGroup();
  // })
  //   .catch((err: any) => {
  //   });
}

//#region 群组人员管理
const handleManagerGroup = async (row: any) => {
  groupusersData.value = [];
  await LoadexistGroupUser(row.id);
  addGroupUserDialogVisible.value = true;
}

const LoadexistGroupUser = async (id: any) => {
  console.log('人员管理:', id);
  currentGroupId.value = id;
  groupusersData.value = [];
  isUserEdit.value = false; // 设置为查看模式
  const response = await queryGroupUserByPage({ GroupId: id });
  const userlist = response.data; // 将获取的数据存入 rolesDatas
  // 获取用户信息
  const userInfos = await Promise.all(
    userlist.map(async (user: any) => {
      const userResponse = await getUserByUserId({ userId: user.userId });
      return {
        selected: false,
        userId: user.userId,
        realname: userResponse.data.realName,
        type: convertUsertype(userResponse.data.type),
        gender: convertUserGender(userResponse.data.gender),
        identity: userResponse.data.identity,
        email: userResponse.data.email,
        state: convertState(userResponse.data.state),
      };
    })
  );
  groupusersData.value = userInfos;

  // 动态生成列
  if (userInfos.length > 0) {
    const keys = Object.keys(userInfos[0]);
    Groupuserscolumns.value = keys.map(key => {
      let label = key.charAt(0).toUpperCase() + key.slice(1);
      if (key === 'selected') label = '选择';
      if (key === 'userId') label = '用户名';
      if (key === 'realname') label = '昵称';
      if (key === 'gender') label = '性别';
      if (key === 'type') label = '用户类型';
      if (key === 'roleIds') label = '角色ID';
      if (key === 'regions') label = '区域';
      if (key === 'identity') label = '身份';
      if (key === 'email') label = '邮箱';
      if (key === 'state') label = '用户状态';

      return {
        prop: key,
        label: label,
      };
    });
  }

  addGroupUserDialogVisible.value = true;
}

const LoadAddGroupUser = async () => {
  isUserEdit.value = true;

  const response = await getUserList();
  const userlist = response.data; // 将获取的数据存入 rolesDatas 

  // 获取用户信息
  const userInfos = await Promise.all(
    userlist.map(async (user: any) => {
      const userResponse = await getUserByUserId({ userId: user.userId });
      return {
        selected: false,
        userId: user.userId,
        realname: userResponse.data.realName,
        type: convertUsertype(userResponse.data.type),
        gender: convertUserGender(userResponse.data.gender),
        identity: userResponse.data.identity,
        email: userResponse.data.email,
        state: convertState(userResponse.data.state),

      };
    })
  );

  let originalUserIds = groupusersData.value.map((user:any) => ({ ...user }));

  groupusersData.value = userInfos;

  groupusersData.value.forEach((userinfo:any) => {
    originalUserIds.find((user:any) => {
      if  (user.userId === userinfo.userId) {
        userinfo.selected = true;
      }
    });
    
  });
  

  // groupusersData.value.forEach((user:any) => {
  //   user.selected = originalUserIds.value.includes(user.userId);
  // });
  // 遍历 groupusersData，根据 originalUserIds 设置 selected 属性

  //  处理 userInfos
  groupusersData.value.forEach((userInfo: any) => {
    if (originalgroupUser.value && Array.isArray(originalgroupUser.value)) {
      const existingUser = originalgroupUser.value.find((user: any) => user.userId === userInfo.userId);
      if (existingUser) {
        existingUser.selected = true;
      }
    }
  });

  // 动态生成列
  if (userInfos.length > 0) {
    const keys = Object.keys(userInfos[0]);
    Groupuserscolumns.value = keys.map(key => {
      let label = key.charAt(0).toUpperCase() + key.slice(1);
      if (key === 'selected') label = '选择';
      if (key === 'realname') label = '用户名';
      if (key === 'gender') label = '性别';
      if (key === 'type') label = '用户类型';
      if (key === 'roleIds') label = '角色ID';
      if (key === 'regions') label = '区域';
      if (key === 'identity') label = '身份';
      if (key === 'email') label = '邮箱';
      if (key === 'state') label = '用户状态';
      if (key === 'userId') label = '用户ID';
      return {
        prop: key,
        label: label,
      };
    });
  }
};

const deleteGroupUser = async () => {
  const postData = {
    GroupId: currentGroupId.value,
    UserIds: groupusersData.value.filter((user: any) => user.selected).map((user: any) => user.userId),
  };

  const response = await deleteGroupMember(postData);
  if (response.msg === "success") {
    LoadexistGroupUser(currentGroupId.value);
    ElMessage({
      showClose: true,
      message: "删除成功",
      type: "success",
    });
  }
  console.log('添加用户:', postData);

};

const ComfirGroupUserDialog = async () => {
  const postData = {
    GroupId: currentGroupId.value,
    UserIds: groupusersData.value.filter((user: any) => user.selected).map((user: any) => user.userId),
  };




  const response = await updateGroupMember(postData);
  if (response.msg === "success") {
    isUserEdit.value = false; // 切换为查看模式  
    LoadexistGroupUser(currentGroupId.value);
    ElMessage({
      showClose: true,
      message: "添加成功成功",
      type: "success",
    });
  }
  console.log('添加用户:', postData);
};

const removeUserFromGroup = async (row: any) => {

}

// 处理确定按钮点击事件
const handleConfirm = () => {
  if (isUserEdit.value) {
    // 添加逻辑
    //console.log('添加用户:', selectedUsers.value);
    ComfirGroupUserDialog();

    isUserEdit.value = false; // 切换为查看模式
    false; // 切换为查看模式  
  } else {
    // 确定逻辑
    console.log('确定');

    LoadAddGroupUser();
    addGroupUserDialogVisible.value = false;
  }
};

// 处理取消按钮点击事件
const handleCancel = () => {
  if (isUserEdit.value) {
    isUserEdit.value = false; // 切换为查看模式
    LoadexistGroupUser(currentGroupId.value);
  } else {
    // 关闭窗口逻辑
    console.log('取消');
    addGroupUserDialogVisible.value = false;
  }
};

//#endregion

const handleDeleteRole = async (row: any) => {
  console.log('删除:', row.id);
  const arr = [row.id];
  const response = await deleteRole(arr);
  if (response.msg === "success") {
    await Loading();
    ElMessage({
      showClose: true,
      message: "删除成功",
      type: "success",
    });
  }
  // Loading();
  // .then(async (res: any) => {
  //   await LoadRoles();
  // })
  // .catch((err: any) => {
  // });
}
const openAddGroupDialog = async () => {
  isEditMode.value = false; // 设置为添加模式          
  addGroupDialogVisible.value = true;
  const courtrys = await getDicCountrytData().then(async (res: any) => {
    countryOptions = res.data.map((country: any) => ({
      value: country.countryCode,
      label: country.name,
    }));
  });
}
const openAddRoleDialog = () => {
  addRoleDialogVisible.value = true;
}
const openAddUserDialog = () => {
  newUser.value = {
    userId: "",
    RealName: "",
    password: "",
    Type: '',
    RoleIds: [],
    Regions: [],
    Identity: "0",
    Email: "",
    GroupIds: [],
  };

  isEditMode.value = false; // 设置为添加模式
  addUserDialogVisible.value = true;
}
const handleGroupCountryselect = async (value: any) => {
  const postinfo = {
    countryCode: value,
  };
  newgroup.value.countryCode = value;
  const regions = await getDictRegionData(postinfo).then(async (res: any) => {
    regionOptions = res.data.map((region: any) => ({
      value: region.regionCode,
      label: region.name,
    }));
  });
}
const handleGroupRegionselect = async (value: any) => {
  const postinfo = {
    regionCode: value,
  };
  newgroup.value.regionCode = value;
  const regions = await getDictBlockData(postinfo).then(async (res: any) => {
    blockOptions = res.data.map((block: any) => ({
      value: block.blockCode,
      label: block.name,
    }));
  });
}
const handleGroupBlockselect = async (value: any) => {
  newgroup.value.blockCode = value;
}

const handleEditGroupselect = async (value: any) => {

  //   const rlt = await getGroupById({ id: value }).then(async (res:any) => {
  //   newgroup.value.GroupRanges = res.data.groupRanges;

  // });
}


const confirmAddRole = async () => {
  // if (!newRole.value.ParentId || !newRole.value.Name) {
  //   console.error('上级角色和角色名不能为空');
  //   return;
  // }
  if (!newRole.value.Name) {
    alert("角色名不能为空");
    return;
  }


  console.log('确认添加角色:', newRole.value.Name, '上级角色ID:', newRole.value.ParentId);
  const newrole = {
    Name: newRole.value.Name,
    // ParentId: newRole.value.ParentId,
    ParentId: '',
  };
  const response = await createRole(newrole);
  if (response.msg === "success") {
    await Loading();
    addRoleDialogVisible.value = false;
    ElMessage({
      showClose: true,
      message: "创建成功",
      type: "success",
    });
  }
  // Loading();
  // .then(async (res: any) => {
  //   LoadRoles();
  // })
  // .catch((err: any) => {

  // });

}

//#region 群组添加编辑
const ComfirGroupDialog = async () => {
  if (isEditMode.value) {
    editGroup();
  }
  else {
    addGroup();
  }

}
const addGroup = async () => {
  newgroup.value.GroupRanges = [
    {
      Type: "country",
      Codes: [newgroup.value.countryCode]
    },
    {
      Type: "region",
      Codes: [newgroup.value.regionCode]
    },
    {
      Type: "block",
      Codes: [newgroup.value.blockCode]
    },
  ]
  if (!isIncludeWell) {
    newgroup.value.WellIds = [];
  }

  const response = await createGroup(newgroup.value);
  if (response.msg === "success") {
    await LoadingGroup();
    addGroupDialogVisible.value = false;
    ElMessage({
      showClose: true,
      message: "添加成功",
      type: "success",
    });
  }
  // .then(async (res: any) => {
  //   LoadingGroup();
  //   addGroupDialogVisible.value = false;
  // });
}
const editGroup = async () => {
  const fieldsToCompare = ['Name', 'countryName', 'regionName', 'blockName', 'countryCode', 'regionCode', 'blockCode', 'WellIds'];
  const rlt1 = fieldsToCompare.some(field => {
    const newValue = newgroup.value[field];
    const originalValue = originalgroup[field];
    return newValue !== originalValue;
  });
  if (!rlt1) {
    console.log('数据未修改');
    return;
  }
  newgroup.value.GroupRanges = [
    {
      Type: "country",
      Codes: [newgroup.value.countryCode]
    },
    {
      Type: "region",
      Codes: [newgroup.value.regionCode]
    },
    {
      Type: "block",
      Codes: [newgroup.value.blockCode]
    },
  ]
  console.log('编辑群组:', newgroup);
  const response = await updateGroup(newgroup.value);
  if (response.msg === "success") {
    await LoadingGroup();
    addGroupDialogVisible.value = false;
    ElMessage({
      showClose: true,
      message: "编辑成功",
      type: "success",
    });
  }
  //Loading();
  // .then(async (res: any) => {
  // LoadingGroup();
  // addGroupDialogVisible.value = false;
  // });
}
//#endregion

//#region 群組井编辑
const openWellDialog = async () => {
  groupWellDialogVisible.value = true;
  try {
    const response = await getWellList();
    //if (response.status === 200) {
    const data = response.data;
    const groupData: { [key: string]: TreeNode[] } = {};

    // 根据 block 字段分组
    data.forEach((item: any) => {
      const block = item.block;
      if (!groupData[block]) {
        groupData[block] = [];
      }
      groupData[block].push({
        block: item.block,
        id: item.wellId,
        label: item.wellCommonName,
        checked: false, // 初始化 checked 属性
        parent: null // 初始化 parent 属性
      });
    });

    // 构建树形结构
    WellListdata.value = Object.keys(groupData).map(block => ({
      block: block,
      id: block, // 从 groupData[block].id 获取 id
      label: block,
      children: groupData[block]
    }));
    setParent(WellListdata.value, null);
    // } else {
    //   console.error('获取数据失败:', response.status, response.statusText);
    // }
  } catch (error) {
    console.error('请求数据时出错:', error);
  }

};

const setParent = (nodes: TreeNode[], parent: TreeNode | null) => {
  nodes.forEach(node => {
    node.parent = parent;
    if (node.children) {
      setParent(node.children, node);
    }
  });
};

// 处理复选框变化
const handleCheckChange = (data: any, checked: boolean, indeterminate: boolean) => {
  data.checked = checked; // 更新 checked 属性
  if (data.children) {
    data.children.forEach((child: any) => {
      child.checked = checked; // 更新子节点的 checked 属性
    });
  }
  // 遍历 WellListdata 并同步更新 checked 属性
  const syncCheckedStatus = (nodes: any[]) => {
    nodes.forEach((node: any) => {
      if (node.id === data.id) {
        node.checked = checked;
      }
      if (node.children) {
        syncCheckedStatus(node.children);
      }
    });
  };
  syncCheckedStatus(WellListdata.value);
  console.log('复选框变化:', data, checked, indeterminate);
};

// 删除右侧树中的选中节点
const deleteNodes = (nodes: TreeNode[]) => {
  const deleteCheckedNodes = (nodes: TreeNode[], parent: TreeNode | null = null) => {
    nodes.forEach((node: TreeNode, index: number) => {
      if (node.checked) {
        if (parent) {
          parent.children = parent.children?.filter((_, i) => i !== index);
        } else {
          nodes.splice(index, 1);
        }
      } else if (node.children) {
        deleteCheckedNodes(node.children, node);
      }
    });
  };

  deleteCheckedNodes(nodes);
};

// 移动节点及其上级节点，不删除左侧树中的节点
const moveNodes = (source: TreeNode[], target: TreeNode[], checked: boolean) => {
  const move = (nodes: TreeNode[], parent: TreeNode | null = null) => {
    nodes.forEach((node: TreeNode) => {
      if (node.checked === checked) {
        // 复制节点
        const newNode = { ...node, parent, checked: false, children: [] };
        if (!findNode(target, node.id)) {
          if (parent) {
            // 查找右侧树中是否已有对应的父节点
            const parentNode = findNode(target, parent.id);
            if (parentNode) {
              if (!parentNode.children) {
                parentNode.children = [];
              }
              parentNode.children.push(newNode);
            } else {
              // 如果右侧树中没有对应的父节点，则将父节点也复制过去
              const newParentNode = { ...parent, checked: false, children: [newNode] };
              target.push(newParentNode);
            }
          } else {
            // 如果没有父节点，将新节点添加到目标数组中
            target.push(newNode);
          }
        }
        // 递归处理子节点
        if (node.children) {
          move(node.children, newNode);
        }

      } else if (node.children) {
        // 递归处理子节点
        move(node.children, node);
      }
    });
  };

  const findNode = (nodes: TreeNode[], id: string): TreeNode | null => {
    for (const node of nodes) {
      if (node.id === id) {
        return node;
      }
      if (node.children) {
        const found = findNode(node.children, id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  move(source);
};
// 移动到右边
const moveToRight = () => {
  moveNodes(WellListdata.value, ChosenWellData.value, true);
};

// 移动到左边
const moveToLeft = () => {
  deleteNodes(ChosenWellData.value);
};

// 确认选择
const confirmSelection = () => {
  const collectIds = (nodes: TreeNode[]) => {
    nodes.forEach((node: TreeNode) => {
      if (node.parent != null) {
        newgroup.value.WellIds.push(node.id);
      }
      if (node.children) {
        collectIds(node.children);
      }
    });
  };

  newgroup.value.WellIds = []; // 清空之前的 ID
  collectIds(ChosenWellData.value); // 收集右侧树中的 ID

  console.log('选中的井:', newgroup.value.WellIds);
  groupWellDialogVisible.value = false;
};
//#endregion



const ComfirUserDialog = async () => {
  if (isEditMode.value) {
    editUser();
  }
  else {
    addUser();
  }
}
const editUser = async () => {
  newUser.value.RoleIds = [newUser.value.RoleId];
  // const fieldsToCompare = ['RealName', 'userId', 'state', 'email', 'gender', 'groupName'];
  // const rlt = fieldsToCompare.some((field) => newUser.value[field] !== (originalUser.value ? originalUser.value[field] : ''));
  if (!isUserModified() && originalpassword.value != newUser.value.password) {
    console.log('用户数据未修改');
    return;
  }

  // {
  //   "oldPassword": "string",
  //   "password": "string"
  // }
  const newpassword = {
    oldPassword: originalpassword.value,
    password: newUser.value.password,
  };

  const pwresponse = await updatePassword(newpassword);
  console.log('编辑用户:', newUser.value);
  // TODO Regions需要加入
  const { password, gender, state, RoleId, Regions, ...userWithoutPassword } = newUser.value;
  userWithoutPassword.Type = convertUserType(userWithoutPassword.Type);
  const response = await updateUser(userWithoutPassword);
  if (response.msg === "success") {
    await LoadingUsers();
    isUpdate.value = !isUpdate.value;
    ElMessage({
      showClose: true,
      message: "编辑成功",
      type: "success",
    });

  } else {
    console.error(response);
  }
  // .then(async (res: any) => {
  //   await LoadingUsers();
  //   isUpdate.value = !isUpdate.value;
  // })
  // .catch((err: any) => {

  // });
  addUserDialogVisible.value = false;

}
const addUser = async () => {
  console.log('添加用户:', newUser.value);
  try {
    const { gender, state, RoleId, ...userWithoutPassword } = newUser.value;
    userWithoutPassword.Type = convertUserType(userWithoutPassword.Type);
    const response = await createUser(userWithoutPassword);
    // .then(async (res: any) => {
    //   await LoadingUsers();
    //   isUpdate.value = !isUpdate.value;
    // }).catch((err: any) => {

    // });


    if (response.msg === "success") {
      await LoadingUsers();
      isUpdate.value = !isUpdate.value;
      ElMessage({
        showClose: true,
        message: "创建成功",
        type: "success",
      });

    } else {
      console.error(response);
    }



    // const response = await createUser(newUser.value);
    // if (response.status === 200) {
    //   console.log('用户创建成功:', response.data);
    //   await LoadingUsers();
    // } else {
    //   console.error('用户创建失败:', response.status, response.statusText);
    //   // 处理失败逻辑，例如显示错误消息
    // }
  } catch (error) {
    console.error('请求失败:', error);
    // 处理请求失败逻辑，例如显示网络错误消息
  }
  addUserDialogVisible.value = false;
}

const UserDlgTitle = () => {
  return isEditMode.value ? '编辑用户' : '添加用户';
}
const GroupDlgTitle = () => {
  return isEditMode.value ? '编辑群组' : '添加群组';
}
const isUserModified = () => {
  const fieldsToCompare = ['RealName', 'userId', 'state', 'email', 'gender', 'groupName'];
  return fieldsToCompare.some((field) => newUser.value[field] !== (originalUser.value ? originalUser.value[field] : ''));
}
const filteredRolesColumns = () => {
  return rolesColumns.value.filter(column => column.prop !== 'id');
}
const filteredGroupColumns = () => {
  return groupcolumns.value.filter(column => column.prop !== 'id' && column.prop !== 'deleteMark');
}
const filteredUsersColumns = () => {
  return userColumns.value.filter(column => column.prop !== 'id' && column.prop !== 'userId');
}
const filteredUsers = () => {
  return usersData.value.filter((user: any) => {
    return (
      user.userName.includes(searchUser) &&
      user.email.includes(searchEmail)
    );
  });
}

const filteredGroups = () => {
  return groupData.value.filter((group: any) => {
    return (
      group.groupName.includes(searchGroup.value) &&
      group.description.includes(searchDescription.value)
    );
  });
}
const filteredRoles = () => {
  return rolesDatas.value.filter((role: any) => {
    return (
      role.roleName.includes(searchRole) &&
      role.permission.includes(searchPermission)
    );
  });
}

</script>


<style lang="scss" scoped>
.users-page {

  display: flex;
  flex-direction: column;
  height: 100%;
  /* 填充父页面的所有空白区域 */
  background-color: #f2f2f2;
  /* 设置背景颜色 */
}

.content {
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
  padding-bottom: 10px;
}

.dialog-title {
  font-size: 18px;
  font-weight: bold;
  color: #eee;
  text-align: left;
  /* 标签靠左 */
  padding: 10px;
  /* 增加内边距 */
  width: 100%;
  /* 宽度占满 */
  // border-bottom: 1px solid #e0e0e0;
  /* 增加底部边框 */
  box-sizing: border-box;
  /* 包括内边距和边框在内的宽度计算 */
}


.form-item {
  color: #606266;
  display: flex;
  align-items: center;
  /* 垂直居中 */
  margin-bottom: 15px;
  /* 每个表单项之间的间距 */
}

.form-item label {
  width: 80px;
  /* 固定标签宽度 */
  margin-bottom: 5px;
  /* 标签与输入框之间的间距 */
  text-align: left;
  /* 标签靠左 */
}

.input-width {
  width: 100%;
  /* 设置下拉框和输入框宽度一致 */
  box-sizing: border-box;
  /* 确保宽度计算包括内边距和边框 */
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
  padding: 1rem;
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

.tree {
  max-width: 300px;
  /* 设置树形结构的最大宽度 */
  overflow: auto;
  /* 当内容超出最大宽度时，显示滚动条 */
}


.dialog-content {
  align-items: center;
  padding: 20px;
  background-color: #fff;
  color: #606266;
}

.custom-tree {
  height: calc(100% - 40px);
  /* 减去标题和内边距的高度 */
  overflow-y: auto;
}

.custom-tree .el-tree-node {
  color: #333;
  /* 节点文字颜色 */
  font-weight: 500;
  /* 节点文字加粗 */
  transition: background-color 0.3s;
  /* 背景颜色渐变 */
  padding: 10px 15px;
  /* 节点的内边距 */
  border-radius: 5px;
  /* 节点的圆角 */
}

.custom-tree .el-tree-node:hover {
  background-color: #e0f7fa;
  /* 悬停背景颜色 */
}

.custom-tree .el-tree-node.is-leaf {
  background-color: #fff;
  /* 叶子节点的背景颜色 */
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  /* 叶子节点的阴影 */
}

.custom-tree .el-tree-node.is-checked {
  background-color: #b2ebf2;
  /* 选中节点的背景颜色 */
  border: 1px solid #009688;
  /* 选中节点的边框 */
}

.custom-tree .el-tree-node .el-checkbox {
  margin-left: 10px;
  /* 复选框的左边距 */
}

/* 自定义展开图标 */
.custom-tree .el-tree-node.is-open>.el-tree-node__content .el-tree-node__expand-icon {
  color: #00796b;
  /* 展开图标颜色 */
}

/* 边距调整 */
.custom-tree .el-tree-node:not(:last-child) {
  margin-bottom: 5px;
  /* 节点间距 */
}

.tree-container {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 10px;
  background-color: #ffffff;
  height: 400px;
  overflow-y: auto;
}

.button-col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.move-button {
  margin: 10px 0;
  /* 上下间隔10像素 */
}


.dialog-footer {
  background-color: #fff !important;
  padding: 0 20px 20px 20px;
}
</style>