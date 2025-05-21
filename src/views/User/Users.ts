import { ref } from 'vue';
import { onMounted,ref,onUnmounted,nextTick } from 'vue';

import {
    createRole,
    updateRole,
    deleteRole,
    getRolelist,
    getRolelistByPage,
    getRoleInfoByParentId,
  }  from "@/api/auth/role.js";

  import {
    getGroupListAll,
    getGroupListByPage,
    getGroupListAllUser,
    getGroupById,

  }  from "@/api/auth/group.js";
  import {
    getUserList,
    createUser,
    getUserByUserId,
    deleteUserById,
    updateUser,
    updatePassword,
  }  from "@/api/auth/user.js";



let isEditMode = ref(false) // 用于区分添加和编辑模式
let addUserDialogVisible= ref(false) // 控制添加用户弹窗的显示
let activeTab= ref('users')
let searchUser= ref('')
let searchEmail= ref('')
let searchGroup= ref('')
let searchDescription = ref('')
let searchRole= ref('')
let searchPermission= ref('')
let userscolumns= ref([])
let usersData= ref([])
let groupcolumns= ref([])
let groupData= ref([])
let rolescolumns= ref([]) // 动态列
let rolesDatas= ref([])
let rolesOptions= ref([])
let rolesColumns = ref([])
let userColumns = ref([])

let newUser= ref({
  userId: "zkkzkk1",
  RealName: "周开馗",
  password: "123456",
  Type: 1,
  RoleIds: ["1cef4f9c6db04555933c97b8c735652b", "aa8d7fd26f7a4db78527b20188a19a1c"],
  Regions: ["1"],
  Identity: "0",
  Email: "Email@qq.com",
  GroupIds: [],
  })
let originalpassword = ref("") // 用于存储原始用户数据
let originalUser = ref(null) // 用于存储原始用户数据

onMounted(()=>{
  Loading(); // 组件挂载时获取验证码
})

const Loading = async()=>{
  LoadRoles();
  LoadingGroup();
  LoadingUsers();
}
const LoadRoles = async()=>{
  try {
      const response = await getRolelist();
      rolesDatas = response.data; // 将获取的数据存入 rolesDatas
      
      //添加选项
      rolesOptions = rolesDatas.map(role => ({
          value: role.id,
          label: role.name,
        }));
      // 动态生成列
      if (response.data.length > 0) {
      const keys = Object.keys(response.data[0]);
      rolesColumns.value = keys.map(key => {
          let label = key.charAt(0).toUpperCase() + key.slice(1);
          if (key === 'name') label = '角色名';
          if (key === 'type') label = '类型';
          return {
          prop: key,
          label: label,
          };
      });
      }
  } catch (error) {
      console.error('Error fetching roles:', error);
  }
}
const LoadingGroup = async()=>{
  try {
      const response = await getGroupListAll();
      groupData = response.data; // 将获取的数据存入 rolesDatas

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
  } catch (error) {
      console.error('Error fetching roles:', error);
  }
}
const LoadingUsers = async() => {
  
  const response = await getUserList();
  const userlist = response.data; // 将获取的数据存入 rolesDatas
  

  // 获取用户信息
  const userInfos = await Promise.all(
      userlist.map(async user => {
      const userResponse = await getUserByUserId({ userId: user.userId });
      return {
          realname: userResponse.data.realName,
          gender: userResponse.data.gender,
          state: convertState(userResponse.data.state),
          groupName: "",
          email: userResponse.data.email,
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
      if (key === 'realname') label = '用户名';
      if (key === 'gender') label = '性别';
      if (key === 'state') label = '用户状态';
      if (key === 'groupName') label = '群组名';
      if (key === 'email') label = '邮箱';
      return {
          prop: key,
          label: label,
      };
      });
  }

  //  // 获取用户列表
  //  const groupListResponse = await getGroupListAll();
  //  const groupList = groupListResponse.data;

  //  // 获取群组名
  //  const groupNames = await Promise.all(
  //      groupList.map(async group => {
  //      const groupResponse = await getGroupById(group.groupID);
  //      return {
  //          groupID: group.groupID,
  //          groupName: groupResponse.data.groupName,
  //      };
  //      })
  //  );

  // try {
  //     const response = await getGroupListAllUser();
  //     usersData = response.data; // 将获取的数据存入 rolesDatas

  //     // 动态生成列
  //     if (response.data.length > 0) {
  //     const keys = Object.keys(response.data[0]);
  //     userscolumns = keys.map(key => {
  //         let label = key.charAt(0).toUpperCase() + key.slice(1);
  //         if (key === 'name') label = '角色名';
  //         if (key === 'type') label = '类型';
  //         return {
  //         prop: key,
  //         label: label,
  //         };
  //     });
  //     }
  // } catch (error) {
  //     console.error('Error fetching roles:', error);
  // }
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
const convertState = (state) => {
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
const handleEdit = async(row) => {
  console.log('编辑:', row);

  isEditMode.value = true; // 设置为编辑模式
  newUser.value.RealName = row.realname;
  newUser.value.userId = row.userId;
  newUser.value.state = row.state;
  newUser.value.email = row.email;
  newUser.value.gender = row.gender;
  newUser.value.groupName = row.groupName; // 将当前行的数据复制到 newUser
  originalpassword = newUser.value.password;
  originalUser.value = {
    RealName: newUser.value.RealName,
    userId: newUser.value.userId,
    state: newUser.value.state,
    email: newUser.value.email,
    gender: newUser.value.gender,
    groupName: newUser.value.groupName,
  }; // 保存原始用户数据
  addUserDialogVisible.value = true; // 打开弹窗
}
const handleDelete = async(row) => {
  console.log('删除:', row.userId);
  const arr = [row.userId];
  const response =  await deleteUserById(arr)
  .then(async (res) => {
    await LoadingUsers();
}).catch((err) => {
  
});
}

const openAddUserDialog = () => {
  newUser.value =  {
    userId: "zkkzkk1",
    RealName: "周开馗",
    password: "123456",
    Type: 1,
    RoleIds: ["1cef4f9c6db04555933c97b8c735652b", "aa8d7fd26f7a4db78527b20188a19a1c"],
    Regions: ["1"],
    Identity: "0",
    Email: "Email@qq.com",
    GroupIds: [],
    };

  isEditMode.value = false; // 设置为添加模式
  addUserDialogVisible.value = true;
} 
const ComfirDialog = async() => {
    if(isEditMode.value){
        editUser();
      }
    else{
        addUser();
      }
}
const editUser = async() => {
  const fieldsToCompare = ['RealName', 'userId', 'state', 'email', 'gender', 'groupName'];
  const rlt = fieldsToCompare.some(field => newUser.value[field] !== originalUser.value[field]);
  if (!isUserModified() && originalpassword.value != newUser.value.password)
  {
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

  const pwresponse =  await updatePassword(newpassword);
  console.log('编辑用户:', newUser).value;
  const { password, ...userWithoutPassword } =  newUser.value;
  const response =  await updateUser(userWithoutPassword)
  .then(async (res) => {
    await LoadingUsers();
  })
  .catch((err) => {
  
  });
  addUserDialogVisible = false;

}   
const addUser = async() => {
  console.log('添加用户:', newUser.value);
  const response =  await createUser(newUser.value)
  .then(async (res) => {
    await LoadingUsers();
  })
  .catch((err) => {
  
  });
  
  addUserDialogVisible.value = false;
}






const dialogTitle = () => {
  return isEditMode.value ? '编辑用户' : '添加用户';
}
const isUserModified = () => {
  const fieldsToCompare = ['RealName', 'userId', 'state', 'email', 'gender', 'groupName'];
  return fieldsToCompare.some(field => newUser.value[field] !== originalUser.value[field]);
}
const filteredRolesColumns = () => {
  return rolesColumns.value.filter(column => column.prop !== 'id');
}
const filteredGroupColumns = () => {
  return groupcolumns.value.filter(column => column.prop !== 'id' && column.prop !== 'deleteMark');
}
const filteredUsersColumns = () => {
  return userColumns.value.filter(column => column.prop !== 'id'&& column.prop !== 'userId')  ;
}
const filteredUsers = () => {
  return usersData.value.filter(user => {
    return (
    user.userName.includes(searchUser) &&
      user.email.includes(searchEmail)
    );
  });
}
const filteredGroups = () => {
  return groupData.filter(group => {
    return (
      group.groupName.includes(searchGroup.value) &&
      group.description.includes(searchDescription.value)
    );
  });
}
const filteredRoles = () => {
  return rolesDatas.filter(role => {
    return (
      role.roleName.includes(searchRole) &&
      role.permission.includes(searchPermission)
    );
  });
}