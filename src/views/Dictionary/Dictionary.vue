<template>
  <div class="dictionary-page">
    <div class="dashboard">
      <div class="block block1">
        <div class="left-section">
          <div class="block1-title" style="width: 100%;">
            <div>字典分类</div>            
          </div>     
          <div class="block1-content">
            <div class="divider-ver"></div>
            <ul>
              <li
                v-for="(item, index) in ['国家', '区域', '区块', '井型', '井状态','井别','作业公司', '作业者', '风险类型', '风险等级', '作业状态','用户类型','用户状态', '用户身份','系统功能','资源类型',]"
                :key="index"
                :class="{ selected: selectedItem === index }"
                @click="selectItem(index)"
              >
                <a href="#">{{ item }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="divider-hor"></div>
        <div class="right-section">          
          <div class="block2-content">
           <div class="tab-content">
          <div class="search-bar">
            <el-input v-model="searchUser" placeholder="搜索用户"></el-input>
            <el-input v-model="searchEmail" placeholder="搜索邮箱"></el-input>
            <el-button type="primary" @click="search">搜索</el-button>
            <el-button @click="reset">{{ buttonText }}</el-button>
          </div>
          <el-table :data="contryDatas">
            <el-table-column
              v-for="column in columns"
              :key="column.prop"
              :prop="column.prop"
              :label="column.label"
            ></el-table-column>
          </el-table>
        
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dicktionary from './Dicktionary.js';

export default {
  name: 'Dicktionary',
  ...Dicktionary,
};
</script>

<style scoped>
.dictionary-page {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 确保页面高度为视口高度 */
  background-color: #f2f2f2; /* 设置背景颜色 */
}

.dashboard {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.tab-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.block1-title {
  height: 40px;
  text-align: left;
  font-size: 1.2rem;
  font-family: '黑体';
  display: flex;
  flex-direction: column;
  justify-content: center; /* 上下居中 */
  padding-left: 10px;
}
.block1-content {
  text-align: left;
}

.block1-content ul li:hover {
  background-color: #f0f0f0; /* 悬浮时的背景颜色 */
  border-radius: 10px; /* 设置圆角矩形 */
}

.block1-content ul li.selected {
  background-color: #d0d0d0; /* 选中时的背景颜色 */
  color: #ff0000; /* 选中时的文字颜色 */
  border-radius: 10px; /* 设置圆角矩形 */
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

.block {
    background-color: #ffffff; /* 分块背景色 */
    border-radius: 8px; /* 圆角矩形 */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    height: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    position: relative;
  }
.left-section {
  margin-top: 0%;
  min-width: 100px;
  width: 20%;
  height: 100%;
}

.right-section {
  width: 100%;
  height: 100%;
}

.divider-hor {
  width: 1px;
  background-color: #ccc;
  margin: 0 10px;
  position: absolute;
  z-index: 10;
}

.divider-ver {
    width: 100%;
    height: 1px;
    background-color: #cccccc; /* 竖线颜色 */
  }
  

h1 {
  font-size: 2rem;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  cursor: pointer;
  height: 40px; /* 设置 li 的高度 */
  line-height: 40px; /* 设置行高，使文字垂直居中 */
  padding-left: 20px; /* 左边留白 20 像素 */
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  text-decoration: underline;
}
</style>