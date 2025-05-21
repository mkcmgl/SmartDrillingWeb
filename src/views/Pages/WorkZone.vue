<template>
  <div class="WorkZone-page">
    <div class="tab-content">
      <div class="search-bar">
            <el-input v-model="searchUser" placeholder="搜索用户"></el-input>
            <el-input v-model="searchEmail" placeholder="搜索邮箱"></el-input>
            <el-button type="primary" @click="search">搜索</el-button>
            <el-button @click="reset">搜索工区</el-button>
      </div>
      <el-table :data="WorkZoneData">
            <el-table-column prop="index" label="序号"></el-table-column>
            <el-table-column prop="name" label="工区名称"></el-table-column>
            <el-table-column prop="Group" label="群组"></el-table-column>
            <el-table-column prop="LastTime" label="最近更新时间"></el-table-column>
            <el-table-column prop="Lastuser" label="最近更新用户"></el-table-column>
            <el-table-column prop="opertion" label="操作"></el-table-column>
      </el-table>
    </div>      
  </div>
</template>

<script lang="ts" setup>
import { onMounted,ref,onUnmounted,nextTick } from 'vue';

let searchUser = ref('')
let searchEmail = ref('')
let searchGroup = ref('')
let searchDescription = ref('')
let searchRole = ref('')
let searchPermission = ref('')
let WorkZoneData = ref([
  { index: 1, name: '北京工区', Group: '北方区', LastTime: '2023-09-15 14:30', Lastuser: '张三', opertion: '编辑' },
  { index: 2, name: '上海工区', Group: '东部区', LastTime: '2023-09-14 09:20', Lastuser: '李四', opertion: '编辑' },
  { index: 3, name: '广州工区', Group: '南方区', LastTime: '2023-09-13 16:45', Lastuser: '王五', opertion: '编辑' },
  { index: 4, name: '成都工区', Group: '西南区', LastTime: '2023-09-12 11:00', Lastuser: '赵六', opertion: '编辑' },
  { index: 5, name: '武汉工区', Group: '中部区', LastTime: '2023-09-11 13:15', Lastuser: '孙七', opertion: '编辑' }
])

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
  font-size: 1.2rem;
  font-family: '黑体';
  display: flex;
  flex-direction: column;
  justify-content: center; /* 上下居中 */
  padding-left: 15px;
  background-color: #f2f2f2; /* 设置背景颜色 */
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
  border-radius: 10px; /* 设置圆角 */
  
  background-color: #fff; /* 设置背景颜色 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  height: 100%;
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
</style>