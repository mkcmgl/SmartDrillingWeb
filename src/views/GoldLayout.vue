<template>
  <div class="gl-box">
    <div class="gl" ref="glayout"></div>
  </div>
</template>

<script setup lang="ts">
import {
  defineAsyncComponent,
  reactive,
  ref,
  onMounted,
  onUnmounted,
  watch,
  computed,
  nextTick,
} from "vue";
import { GoldenLayout } from "golden-layout";

import * as echarts from "echarts";

let glayout: any = ref(null);

onMounted(() => {
  init();
});

let config: any = {
  settings: {
    hasHeaders: true,
    showPopoutIcon: false,
    showMaximiseIcon: false,
    showCloseIcon: false,
  },
  content: [
    {
      type: "stack", // Stack
      content: [
        {
          type: "component",
          componentName: "example1",
          componentState: { text: "Component 1" },
        },
        {
          type: "component",
          componentName: "example2",
          componentState: { text: "Component 2" },
        },
        {
          type: "component",
          componentName: "example3",
          componentState: { text: "Component 3" },
        },
        {
          type: "component",
          componentName: "hello",
          componentState: { text: "Component 4" },
        },
      ],
      activeItemIndex: 1,
    },
  ],
};

/* 
  文档：
  https://golden-layout.com/docs/Config.html

**/
const init: any = () => {
  // let layout = new GoldenLayout({
  //   settings:{
  //       hasHeaders: true,
  //       constrainDragToContainer: true,
  //       reorderEnabled: true,
  //       selectionEnabled: false,
  //       popoutWholeStack: false,
  //       blockedPopoutsThrowError: true,
  //       closePopoutsOnUnload: true,
  //       showPopoutIcon: true,
  //       showMaximiseIcon: true,
  //       showCloseIcon: true
  //   }
  // });
  let myLayout: any = new GoldenLayout(config, glayout.value);
  // let myLayout:any = new GoldenLayout( config );

  // console.log("myLayout.loadLayout",myLayout.loadLayout)

  // myLayout.loadLayout({
  //     root: config
  // })

  myLayout.registerComponent("example1", (container, state) => {
    console.log(
      "container",
      container,
      "container.getElement",
      container.getElement(),
      "container.html",
      container.html,
      "state",
      state
    );
    // container.getElement().html( '<h2>' + state.text + '</h2>');
  });
  myLayout.registerComponent("example2", (container, state) => {
    console.log(
      "container",
      container,
      "container.getElement",
      container.getElement(),
      "container.html",
      container.html,
      "state",
      state
    );
    // container.getElement().html( '<h2>' + state.text + '</h2>');
  });
  myLayout.registerComponent("example3", (container, state) => {
    let chartDom: any = container.getElement();
    let option: any = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };
    let evcharts: any = echarts.init(chartDom);
    evcharts.setOption(option);

    container.on("resize", () => {
      evcharts.resize();
    });
  });
  myLayout.registerComponent("hello", (container, state) => {
    let chartDom: any = container.getElement();
    let option: any = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };
    let evcharts: any = echarts.init(chartDom);
    evcharts.setOption(option);

    container.on("resize", () => {
      evcharts.resize();
    });
  });

  myLayout.init();
};
</script>

<style scoped lang="scss">
h2 {
  font: 14px Arial, sans-serif;
  color: #fff;
  padding: 10px;
  text-align: center;
}

.gl-box {
  width: 100vw;
  height: 100vh;
}

.gl {
  width: 100%;
  height: 90vh;
}
</style>
