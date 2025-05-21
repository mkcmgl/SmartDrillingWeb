<template>
  <div class="overview-page">
    <div class="dashboard">
      <div class="block block1">
        <div class="left-section">
          <div class="block1-year-selection"> 
            <div class="block1-top-selection">            
            <span style="margin-left: 5px;font-family: '黑体', sans-serif;">年份</span>
            <select style="width: calc(100% - 100px);height: 30px;  padding: 2px; font-size: 12px;">
              <option value="2023">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
          <div class="divider-ver"></div>
          </div>          
          <div class="description">
            <div class="desc-part">
              <p style="font-size: 32px;text-decoration: underline;">总井数</p>
              <p style="font-size: 32px;color: #02a7f0;">1000</p>
            </div>
            <div class="divider-ver"></div>
            <div class="desc-part">
              <div class="aligned-text">
                <p style="font-size: 16px;">完成导向井数： </p>
                <p style="font-size: 16px;color: #02a7f0;">66</p>
              </div>
              <div class="aligned-text">
                <p>正在导向设计井数：</p>
                <p style="font-size: 16px;color: #02a7f0;">5</p>
              </div>
            </div>
            <div class="divider-ver"></div>
            <div class="desc-part">
              <div class="aligned-text">
                <p>注册用户数：</p>
                <p style="font-size: 16px;color: #02a7f0;">400</p>
              </div>
              <div class="aligned-text">
                <p>实时在线数：</p>
                <p style="font-size: 16px;color: #02a7f0;">15</p>
              </div>
            </div>
          </div>
        </div>
        <div class="divider-hor"></div>
        <div class="right-section">
          <div class="chart-title">
            <div >每月井次统计</div>
            <div class="divider-ver"></div>
          </div>                 
          <div class="chart" ref="chart"></div>
        </div>
      </div>
      <div class="block block2">
        <div class="block2-title" style="width: 100%;">
          <div>动态操作</div>
          <div class="divider-ver"></div>
        </div>       
        <div class="block2-content">  
          <table class="custom-table">
            <thead>
              <tr>
                <th>序号</th>
                <th>内容</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>示例内容1</td>
                <td>2023-01-01</td>
              </tr>
              <tr>
                <td>2</td>
                <td>示例内容2</td>
                <td>2023-01-02</td>
              </tr>
              <tr>
                <td>3</td>
                <td>示例内容3</td>
                <td>2023-01-03</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="block block3">
        <div class="block2-title" style="width: 100%;">
          <div>更新日志</div>
          <div class="divider-ver"></div>
        </div>       
        <div class="block2-content">  
          <hr style="margin-top: 0%;border-top: #797979;" width="90%">
          <div  v-for="(item, index) in list" :key="index">
            <p style="margin-left: 5%;"> {{item}}</p>
            <hr  style="margin-top: 0%;width: 90%;;border-top: #797979;" v-if="index < list.length - 1"> <!-- 在每一行之后添加横线，除了最后一行 -->
          </div>
        </div>
      </div>
      <div class="block block4">
        <div class="block2-title" style="width: 100%;">
          <div>公告</div>
          <div class="divider-ver"></div>
        </div>       
        <div class="block2-content">  
          <table class="custom-table">
            <thead>
              <tr>
                <th>序号</th>
                <th>内容</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>示例内容1</td>
                <td>2023-01-01</td>
              </tr>
              <tr>
                <td>2</td>
                <td>示例内容2</td>
                <td>2023-01-02</td>
              </tr>
              <tr>
                <td>3</td>
                <td>示例内容3</td>
                <td>2023-01-03</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted,ref,onUnmounted,nextTick } from 'vue';

onMounted(()=>{
  nextTick(()=>{
    initChart();
    window.addEventListener('resize', resizeChart);
  })
})
onUnmounted(()=>{
  window.removeEventListener('resize', resizeChart);
})


let chart = ref('')
let myChart
const initChart = () => {
  const chartDom = chart.value;
  myChart = echarts.init(chartDom);
  const option = {
    title: {
      text: '井次'
    },
    tooltip: {},
    xAxis: {
      data: ['1月', '2月', '3月', '4月', '5月']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10]
      }
    ]
  };
  myChart.setOption(option);
}
const resizeChart = () => {
  if (myChart) {
    myChart.resize();
  }
}


let list = ref(['v2.0.0  -  2024年8月28日', 'v1.1.2  -  2024年8月25日', 
'v1.1.1  -  2024年8月20日', 'v1.1.0  -  2024年8月15日', 
'v1.0.2  -  2024年8月8日', 'v1.0.1  -  2024年8月2日']) // 确保定义了list

</script>

<style scoped src="./Overview.css"></style>