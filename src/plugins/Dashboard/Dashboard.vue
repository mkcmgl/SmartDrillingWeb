<template>
  <div ref="chartRef" class="dashboard-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  initialData: {
    type: Array,
    default: () => [],
  },
});

const chartRef = ref(null);
let chartInstance = ref(null);
let dashboardTimer: ReturnType<typeof setInterval> | null = null;
let currentIndex = 0;
let resizeObserver: ResizeObserver | null = null;
let containerWidth = ref(0);
let containerHeight = ref(0);

// 计算字体大小的函数
const calculateFontSize = () => {
  if (!chartRef.value)
    return {
      title: "14px",
      value: "16px",
      unit: "12px",
      axisLabel: "10px",
      axisLabelDistance: 40,
    };

  // 获取容器尺寸
  const rect = chartRef.value.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  // 计算基准尺寸 (使用较小的尺寸作为参考)
  const minDimension = Math.min(width, height);

  // 根据基准尺寸计算字体大小
  // 标题字体大小
  const titleSize = Math.min(18, Math.round(minDimension * 0.07));

  // 数值字体大小
  const valueSize = Math.min(16, Math.round(minDimension * 0.07));

  // 单位字体大小
  const unitSize = Math.min(12, Math.round(minDimension * 0.02));

  // 轴标签字体大小
  const axisLabelSize = Math.min(10, Math.round(minDimension * 0.04));

  // 轴标签距离
  const axisLabelDistance = Math.min(20, Math.round(minDimension * 0.12));

  // 刻度线宽度
  // const lineWidth = Math.max(6, Math.round(minDimension * 0.04));

  // // 标题偏移量
  // const titleOffsetY = Math.min(-10, -Math.round(minDimension * 0.07));

  // // 刻度线长度
  // const tickLength = Math.max(3, Math.round(minDimension * 0.02));

  // // 分隔线长度
  // const splitLineLength = Math.max(5, Math.round(minDimension * 0.03));

  // // 刻度线距离
  // const tickDistance = Math.max(1, Math.round(minDimension * 0.006));

  // // 分隔线距离
  // const splitLineDistance = Math.max(1, Math.round(minDimension * 0.006));

  console.log(
    `尺寸计算: 容器大小(${width}x${height}), 标题: ${titleSize}px, 数值: ${valueSize}px, 轴标签距离: ${axisLabelDistance}`
  );

  return {
    title: `${titleSize}px`,
    value: `${valueSize}px`,
    unit: `${unitSize}px`,
    axisLabel: `${axisLabelSize}px`,
    axisLabelDistance: axisLabelDistance,
    // lineWidth: lineWidth,
  };
};

// 更新图表字体大小和距离
const updateFontSizes = () => {
  if (!chartInstance.value) return;

  const fontSizes = calculateFontSize();

  // 更新图表配置
  chartInstance.value.setOption({
    series: [
      {
        title: {
          textStyle: {
            fontSize: fontSizes.title,
          },
        },
        detail: {
          rich: {
            value: {
              fontSize: fontSizes.value,
            },
            unit: {
              fontSize: fontSizes.unit,
            },
          },
        },
        axisLabel: {
          fontSize: fontSizes.axisLabel,
          distance: fontSizes.axisLabelDistance,
        },
      },
    ],
  });
};

const initializeChart = async () => {
  console.log("initializeChart", chartRef.value);

  // // 确保DOM已经渲染完成
  // await nextTick();

  if (chartRef.value) {
    // 确保容器有可见尺寸
    const container = chartRef.value;

    // 如果父容器没有明确设置高度，临时设置一个最小高度
    // if (container.offsetHeight === 0) {
    //   console.warn("容器高度为0，设置临时高度");
    //   container.style.minHeight = "300px";
    // }

    // 获取容器尺寸
    // const rect = container.getBoundingClientRect();
    // containerWidth.value = rect.width;
    // containerHeight.value = rect.height;

    // 计算初始字体大小
    // const fontSizes = calculateFontSize();

    // 销毁已存在的实例以避免重复
    if (chartInstance.value) {
      chartInstance.value.dispose();
    }

    // 创建新实例
    chartInstance.value = echarts.init(container, "#000");

    // 设置选项
    chartInstance.value.setOption({
      series: [
        {
          type: "gauge",
          min: 0,
          max: 3000,
          splitNumber: 6,
          itemStyle: {
            color: "rgba(43,101,246,1)",
            // 渐变色color:   {
            //                 type: 'linear', // 使用线性渐变
            //                 x: 1, // 渐变起始点 x 坐标（相对于容器宽度）
            //                 y: 0, // 渐变起始点 y 坐标（相对于容器高度）
            //                 x2: 0, // 渐变结束点 x 坐标（相对于容器宽度）
            //                 y2: 0, // 渐变结束点 y 坐标（相对于容器高度）
            //                 colorStops: [ // 渐变中的颜色停留点数组
            //                     {offset: 0, color: 'red'}, // 0% 处的颜色
            //                     {offset: 1, color: 'blue'} // 100% 处的颜色
            //                 ],
            //                 globalCoord: false // 缺省为 false
            //             }
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 16,
              color: [
                [0, "#1D3A7E"],
                [0.5, "#1D3A7E"],
                [1.0, "#1D3A7E"],
              ],
            },
          },
          progress: {
            show: true,
            roundCap: true,
            width: 16,
          },
          pointer: {
            show: false,
          },
          axisTick: {
            distance: 2,
            length: 6,
            lineStyle: {
              color: "#fff",
              width: 3,
            },
          },
          splitLine: {
            distance: 2,
            length: 10,
            lineStyle: {
              color: "#fff",
              width: 4,
            },
          },
          axisLabel: {
            color: "#fff",
            distance: 20,
            fontSize: 16,
          },
          detail: {
            valueAnimation: true,
            formatter: function (value) {
              return (
                "{value|" +
                (value ? value.toFixed(0) : "") +
                "}{unit|" +
                (value ? "km/h" : "") +
                "}"
              );
            },
            color: "#2B65F6",
            offsetCenter: [0, 0],
            rich: {
              value: {
                fontSize: 16,
                fontWeight: "bolder",
                color: "#fff",
              },
              unit: {
                fontSize: 12,
                color: "#fff",
                padding: [0, 0, 0, 10],
              },
            },
          },
          title: {
            show: true,
            offsetCenter: [0, -20],
            textStyle: {
              fontWeight: "normal",
              color: "#fff",
              fontSize: 16,
            },
          },
          data: [
            {
              value: "",
              name: "",
            },
          ],
          responsive: true, // 开启响应式
        },
      ],
    });
  }
};

const insertData = (data: any, curveName: string, isAddFlag: boolean) => {
  if (chartInstance.value) {
    // if (isAddFlag) {
    //   // 存储数据和设置计数器
    //   let valueArray = Array.isArray(data) ? data : [];
    //   currentIndex = 0;
    //   console.log("insertData", data);

    //   // 清除任何可能存在的旧定时器
    //   if (dashboardTimer) {
    //     clearInterval(dashboardTimer);
    //     dashboardTimer = null;
    //   }

    //   // 创建新的定时器，按顺序遍历数组
    //   dashboardTimer = setInterval(function () {
    //     // 确保索引在数组范围内
    //     if (currentIndex >= valueArray.length) {
    //       currentIndex = 0; // 循环显示
    //     }

    //     // 获取当前值
    //     const currentValue = valueArray[currentIndex];

    //     // 更新仪表盘显示
    //     chartInstance.value.setOption({
    //       series: [
    //         {
    //           data: [
    //             {
    //               value: currentValue,
    //               name: curveName,
    //             },
    //           ],
    //         },
    //       ],
    //     });

    //     // 移动到下一个值
    //     currentIndex++;
    //   }, 2000); // 每2秒更新一次
    // } else {
    // 如果isAddFlag为false，直接设置数据
    chartInstance.value.setOption({
      series: [
        {
          data: Array.isArray(data)
            ? data.map((value) => ({ value, name: curveName }))
            : [{ value: data, name: curveName }],
          title: {
            text: curveName,
          },
        },
      ],
    });
    // }
  }
};

// 处理窗口大小变化
const handleResize = () => {
  if (chartInstance.value) {
    // 更新字体大小
    updateFontSizes();

    // 调整图表大小
    chartInstance.value.resize({
      animation: {
        duration: 300,
      },
    });
  }
};

const getOption = () => {
  if (chartInstance.value) {
    return chartInstance.value.getOption();
  }
};

const setOption = (newSetting) => {
  console.log("setOption", newSetting);
  if (chartInstance.value) {
    chartInstance.value.setOption({
      series: [
        {
          // min: 0,
          //   max: 3000,
          ...newSetting,
        },
      ],
    });
  }
};

onMounted(() => {
  // 添加resize事件监听
  window.addEventListener("resize", handleResize);

  // 使用 ResizeObserver 观察容器大小变化
  if (window.ResizeObserver) {
    resizeObserver = new ResizeObserver((entries) => {
      // 当观察到容器大小变化时，调整图表大小
      for (let entry of entries) {
        const { width, height } = entry.contentRect;

        // 只有当尺寸确实变化时才更新
        if (
          width !== containerWidth.value ||
          height !== containerHeight.value
        ) {
          // console.log(
          //   "容器大小变化:",
          //   width,
          //   height,
          //   "之前:",
          //   containerWidth.value,
          //   containerHeight.value
          // );

          // 更新存储的尺寸
          containerWidth.value = width;
          containerHeight.value = height;

          // 避免处理无效尺寸
          if (width > 0 && height > 0) {
            // 使用短暂延迟以确保DOM完全更新
            setTimeout(() => {
              updateFontSizes();
              handleResize();
            }, 50);
          }
        }
      }
    });

    // 开始观察容器
    if (chartRef.value) {
      resizeObserver.observe(chartRef.value);
      // console.log("开始观察容器大小变化");
    }
  } else {
    console.warn("ResizeObserver API不可用，仅使用window resize事件");
  }

  // // 初始调整大小确保正确渲染
  // nextTick(() => {
  //   updateFontSizes();
  //   handleResize();
  // });
});

// 暴露方法给父组件
defineExpose({
  initializeChart,
  insertData,
  getOption,
  setOption,
  resize: handleResize,
});

// 组件卸载时清理资源
onUnmounted(() => {
  // 清理定时器
  if (dashboardTimer) {
    clearInterval(dashboardTimer);
    dashboardTimer = null;
  }

  // 销毁图表实例
  if (chartInstance.value) {
    chartInstance.value.dispose();
    chartInstance.value = null;
  }

  // 移除resize事件监听
  window.removeEventListener("resize", handleResize);

  // 停止观察容器大小变化
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});
</script>

<style>
/* 仪表盘容器 - 确保占据父容器的全部空间 */
.dashboard-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 提供最小高度以确保图表可见 min-height: 300px */
  padding: 10px; /* 添加一些内边距以确保内容不会紧贴边缘 */
  box-sizing: border-box; /* 确保内边距不会增加容器的总体尺寸 */
  transition: all 0.3s ease; /* 添加过渡效果使尺寸变化更平滑 */
}

/* 确保 echarts 容器填充满整个空间 */
:deep(.echarts) {
  width: 100% !important;
  height: 100% !important;
  transition: all 0.3s ease; /* 平滑过渡 */
}

/* 确保 canvas 元素填充满整个 echarts 容器 */
:deep(canvas) {
  width: 100% !important;
  height: 100% !important;
  transition: all 0.3s ease; /* 平滑过渡 */
}
</style>
