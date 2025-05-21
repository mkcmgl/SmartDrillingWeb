<template>
  <div ref="chartRef" style="width: 100%; height: 100%; overflow: hidden"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import * as echarts from "echarts";
interface XYData {
  xdata: number[];
  ydata: number[];
}
const props = defineProps({
  initialData: {
    type: Array,
    default: () => [],
  },
});
const chartRef = ref(null);
let chartInstance: any = ref(null);
var seriesDate: any[] = [];
const initializeChart = () => {
  if (chartRef.value) {
    chartInstance = echarts.init(chartRef.value, "dark");
    chartInstance.setOption({
      backgroundColor: "#000",
      xAxis: {
        type: "value",
        name: "West(-)East(+)[m]",
        axisLine: {
          show: true,
        },
        splitLine: {
          show: true,
        },
        minorTick: {
          show: true,
        },
        minorSplitLine: {
          show: true,
        },
        nameLocation: "middle",
        nameTextStyle: {
          fontWeight: "bold",
        },
        nameGap: 20,
        axisLabel: {
          formatter: function (value) {
            return parseFloat(value).toFixed(2);
          },
        },
        min: -1000, // 默认值
        max: 1000, // 默认值
      },
      yAxis: {
        type: "value",
        name: "South(-)North(+)[m]",
        axisLine: {
          show: true,
        },
        splitLine: {
          show: true,
        },
        minorTick: {
          show: true,
        },
        minorSplitLine: {
          show: true,
        },
        nameLocation: "middle",
        nameTextStyle: {
          fontWeight: "bold",
        },
        nameGap: 50,
        axisLabel: {
          formatter: function (value, index) {
            return value.toFixed(1);
          },
        },
        min: 0, // 默认值
        max: 2000, // 默认值
      },
      tooltip: {
        trigger: "axis",
        formatter: (params) => {
          const data = params[0].data;
          return `
            <div style="padding: 5px; background: rgba(0,0,0,0.7); border-radius: 4px">
              <div>South(-)North(+)[m]: ${data[1].toFixed(2)}</div>
              <div>West(-)East(+)[m]: ${data[0].toFixed(2)}</div>
            </div>
          `;
        },
        backgroundColor: "transparent",
        borderColor: "transparent",
        textStyle: {
          color: "#fff",
          fontSize: 12,
        },
      },
      series: [
        {
          type: "line",
          symbolSize: 1,
          symbol: "circle",
          data: seriesDate,
          smooth: true,
        },
      ],
    });
  }
};

const setXAxis = (xAxis) => {
  if (chartInstance) {
    chartInstance.setOption({
      xAxis,
    });
  }
};

const setYAxis = (yAxis) => {
  if (chartInstance) {
    chartInstance.setOption({
      yAxis,
    });
  }
};
const addData = (data: any) => {
  if (chartInstance) {
    const option = chartInstance.getOption();
    option.series[0].data.push(data);
    chartInstance.setOption(option);
  }
};

const addXYData = (xydata: XYData[]) => {
  for (const data of xydata) {
    if (data.xdata.length !== data.ydata.length) {
      console.error("X and Y data lengths do not match");
      return;
    }
  }
  if (chartInstance) {
    const option = chartInstance.getOption();
    const seriesData = option.series[0].data;
    const series = xydata.map((data, index) => ({
      type: "line",
      symbol: "none",
      data: data.xdata.map((xi, i) => [xi, data.ydata[i]]),
      // lineStyle: {
      //   color: index === 0 ? '#ff6b6b' : '#4ecdc4', // Different colors for each line
      //   width: 2
      // }
    }));
    // for (let i = 0; i < x.length; i++) {
    //   seriesData.push([x[i], y[i]]);
    // }
    chartInstance.setOption({
      series: series,
      //    {
      //         data: x.map((xi, i) => [xi, y[i]]),
      //       },
      // {
    });
  }
};
// 添加新的系列而不影响现有系列
const addSeries = (id, xyData) => {
  if (!chartInstance) return;

  const option = chartInstance.getOption();
  const series = option.series || [];

  // 检查是否已存在该ID的系列
  const existingIndex = series.findIndex((s) => s.id === id);

  if (existingIndex >= 0) {
    // 如果已存在，更新数据
    series[existingIndex].data = xyData.xdata.map((xi, i) => [
      xi,
      xyData.ydata[i],
    ]);
    series[existingIndex].name = xyData.name;
    if (xyData.color) {
      series[existingIndex].lineStyle.color = xyData.color;
      series[existingIndex].itemStyle.color = xyData.color;
    }
  } else {
    // 如果不存在，添加新系列
    series.push({
      id: id,
      type: "line",
      name: xyData.name || "",
      lineStyle: {
        color: xyData.color || "#67c23a",
        width: 2,
        type: "solid",
      },
      itemStyle: {
        color: xyData.color || "#67c23a",
      },
      // symbol: "none",
      symbolSize: 5,
      symbol: "circle",
      data: xyData.xdata.map((xi, i) => [xi, xyData.ydata[i]]),
    });
  }

  chartInstance.setOption({
    legend: {
      show: true,
      textStyle: {
        color: "#fff",
      },
    },
    series: series,
  });
};

// 更新特定ID的系列数据
const updateSeriesData = (id, xyData) => {
  if (!chartInstance) return;

  const option = chartInstance.getOption();
  const series = option.series || [];

  // 查找对应ID的系列
  const existingIndex = series.findIndex((s) => s.id === id);

  if (existingIndex >= 0) {
    // 将新数据转换为点数组
    const newData = xyData.xdata.map((xi, i) => [xi, xyData.ydata[i]]);

    // 追加新数据到现有数据，而不是替换
    if (series[existingIndex].data && series[existingIndex].data.length > 0) {
      series[existingIndex].data = [...series[existingIndex].data, ...newData];
    } else {
      series[existingIndex].data = newData;
    }

    // 更新图表
    chartInstance.setOption({
      series: series,
    });
  } else {
    // 如果不存在，添加新系列
    addSeries(id, xyData);
  }
};
const removeData = () => {
  if (chartInstance) {
    const option = chartInstance.getOption();
    option.series[0].data = [];
    chartInstance.setOption(option);
  }
};

const removeChart = () => {
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
};

const resizeChart = () => {
  if (chartInstance) {
    setTimeout(() => {
      chartInstance.resize({
        width: chartRef.value?.clientWidth,
        height: chartRef.value?.clientHeight,
      });
    }, 0);
  }
};
const getOption = () => {
  if (chartInstance) {
    return chartInstance.getOption();
  }
};
const observeResize = () => {
  if (chartRef.value) {
    const resizeObserver = new ResizeObserver(() => {
      resizeChart();
    });
    resizeObserver.observe(chartRef.value);
    return resizeObserver;
  }
};

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  resizeObserver = observeResize();
  window.addEventListener("resize", resizeChart);
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  window.removeEventListener("resize", resizeChart);
  if (chartInstance) {
    chartInstance.dispose();
  }
});

watch(
  () => props.initialData,
  (newData) => {
    if (chartInstance) {
      chartInstance.setOption({
        series: [
          {
            data: newData,
          },
        ],
      });
    }
  }
);
// 使用 defineExpose 暴露接口
defineExpose({
  initializeChart,
  setXAxis,
  setYAxis,
  addData,
  addXYData,
  removeData,
  removeChart,
  resizeChart,
  addSeries,
  updateSeriesData,
  getOption,
});
</script>

<style scoped>
/* 确保容器能正确响应尺寸变化 */
:deep(.echarts) {
  width: 100% !important;
  height: 100% !important;
}
</style>
