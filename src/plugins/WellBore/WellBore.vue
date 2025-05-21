<template>
  <div style="height: 100%; width: 100%" class="plot-well-bore">
    <canvas ref="plotContainer"></canvas>
  </div>
</template>

<script lang="ts">
import { Plot } from "@int/geotoolkit/plot/Plot";
import { WellBoreData } from "@int/geotoolkit/schematics/data/WellBoreData";
import {
  WellBoreNode,
  ViewMode,
} from "@int/geotoolkit/schematics/scene/WellBoreNode";
import { ComponentNodeFactoryRegistry } from "@int/geotoolkit/schematics/factory/ComponentNodeFactoryRegistry";
import demoData from "./wellBoreData.json";

import type { ComponentNode } from "@int/geotoolkit/schematics/scene/ComponentNode";

import { LocationType } from "@int/geotoolkit/schematics/labeling/LocationType";
import { Mode } from "@int/geotoolkit/schematics/labeling/Mode";
import { Patterns } from "@int/geotoolkit/attributes/LineStyle";
import { AlignmentType } from "@int/geotoolkit/schematics/labeling/AlignmentType";
import { LineConnector } from "@int/geotoolkit/schematics/labeling/LineConnector";

import { CompositeSchematicsWidget } from "@int/geotoolkit/schematics/widgets/CompositeSchematicsWidget";
import { defineComponent, onMounted, ref, onUnmounted } from "vue";

export default defineComponent({
  name: "WellBore",
  setup(_, { expose }) {
    const plotContainer = ref<HTMLCanvasElement | null>(null);
    let plot: Plot | null = null;
    let currentData: any = null; // 存储当前数据
    const createWellBoreData = (data) => {
      const wellBoreData = new WellBoreData();
      if (Array.isArray(data)) {
        wellBoreData.addComponents(data);
      } else {
        wellBoreData.addComponents([data]);
      }
      return wellBoreData;
    };
    const InsertData = (data) => {
      if (!plotContainer.value) {
        return;
      }
      currentData = data;
      if (plot) {
        plot.dispose();
        plot = null;
      }

      const labelingOptions = {
        locationMap: [
          {
            location: LocationType.Right,
            // 'component': ['casing', 'cement', 'perforation']
          },
        ],
        defaultLocation: LocationType.Right,
        defaultAlignment: AlignmentType.Inner, // Inner  Middle Outer
        connectorShape: new LineConnector().setLineStyle({
          pattern: Patterns.Solid,
          color: "#fff",
          width: 2,
        }),
        //      visible: boolean;
        // labeldata?: LabelData;
        // linestyle?: LineStyle;
        defaultlocation: LocationType.Right,
        mode: Mode.Trajectory,
      };

      // // 获取 casinga 的尺寸信息
      // const casingData = demoData.find((item) => item.name === "casinga")?.data
      //   .geometry;
      // const depthDiff = casingData
      //   ? casingData.depth.to - casingData.depth.from
      //   : 10;
      // const outerDiameter = casingData ? casingData.diameter.outer : 26;

      // // 使用 PatternFactory 创建图案
      // const patternFactory = PatternFactory.getInstance();
      // const pattern = patternFactory.createPattern(getWellBoreIcon, {
      //   desiredwidth: outerDiameter, // 使用实际外径
      //   desiredheight: depthDiff, // 使用实际深度差
      //   scalable: true, // 启用缩放以适应容器
      // });

      // const renderingHints = {
      //   casinga: {
      //     fillstyle: new FillStyle({
      //       color: "transparent",
      //       pattern: pattern,
      //     }),
      //     linestyle: new LineStyle({
      //       color: "transparent",
      //       width: 1,
      //     }),
      //   },
      // };
      const wellBoreData = createWellBoreData(data);

      const wellBoreWidget = new CompositeSchematicsWidget({
        data: wellBoreData,
        deviation: {
          trackwidth: 30,
        },
        wellborenode: {
          viewmode: ViewMode.Regular, // 使用视图模式  Regular,Compressed"KeepAspectRatio"
          // 设置线条颜色
          // linestyle: {
          //   color: 'pink',
          //   width: 2
          // }
        },
        fillstyle: {
          color: "#000",
        },
        //  gap :{
        //   visible:true,
        //   resizable:true,
        //   size:10,
        //   linestyle:Patterns.Solid,
        //   fillstyle:new FillStyle({
        //     color:"transparent",
        //     pattern:pattern,
        //   }),
        //         },

        labeling: labelingOptions,
        tooltip: {
          gettext: (componentNodes: ComponentNode[]) => {
            return componentNodes[0]
              ? `<div style="background-color: #ffffff; border: 1px solid #cccccc; border-radius: 4px; padding: 8px; font-size: 14px; color: #333333; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                  ${componentNodes[0].toString()}
                 </div>`
              : null;
          },
          autoflip: true,
        },
      });

      plot = new Plot({
        canvaselement: plotContainer.value,
        root: wellBoreWidget,
        autosize: true,
      });
    };

    const initialize = () => {
      //   if (shapedSchematicsWidget.value) {
      //     shapedSchematicsWidget.value.dispose();
      //   }
      //    createScene(plotContainer.value);
    };
    // 处理窗口大小变化
    const handleResize = () => {
      if (plot) {
        plot.onResize();
      }
    };
    // 创建 ResizeObserver 实例
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    onMounted(() => {
      // 监听容器大小变化
      if (plotContainer.value) {
        resizeObserver.observe(plotContainer.value);
      }

      // 添加窗口大小变化监听
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      // 清理监听器
      if (plotContainer.value) {
        resizeObserver.unobserve(plotContainer.value);
      }
      window.removeEventListener("resize", handleResize);

      // 清理 plot 实例
      if (plot) {
        plot.dispose();
        plot = null;
      }
    });
    expose({
      initialize,
      InsertData,
    });

    return {
      plotContainer,
    };
  },
});
</script>

<style>
.plot-well-bore canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
