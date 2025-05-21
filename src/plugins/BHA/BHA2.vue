<template>
  <div style="height: 100%; width: 100%" class="Plot-GEO">
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
import demoBHAData from "./BHAData.json";

import type { ComponentNode } from "@int/geotoolkit/schematics/scene/ComponentNode";

import { LocationType } from "@int/geotoolkit/schematics/labeling/LocationType";
import { Mode } from "@int/geotoolkit/schematics/labeling/Mode";
import { Patterns } from "@int/geotoolkit/attributes/LineStyle";
import { AlignmentType } from "@int/geotoolkit/schematics/labeling/AlignmentType";
import { LineConnector } from "@int/geotoolkit/schematics/labeling/LineConnector";

import { CompositeSchematicsWidget } from "@int/geotoolkit/schematics/widgets/CompositeSchematicsWidget";

import { FillStyle } from "@int/geotoolkit/attributes/FillStyle";
import { LineStyle } from "@int/geotoolkit/attributes/LineStyle";
import { PatternFactory } from "@int/geotoolkit/attributes/PatternFactory";

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

    // const getImageDimensions = (iconData: string): Promise<{ width: number; height: number }> => {
    //   return new Promise((resolve, reject) => {
    //     const img = new Image();

    //     img.onload = () => {
    //       // 使用 naturalWidth 和 naturalHeight 获取图片的原始尺寸
    //       const dimensions = {
    //         width: img.naturalWidth,
    //         height: img.naturalHeight
    //       };
    //       console.log('Image dimensions:', dimensions);
    //       resolve(dimensions);
    //     };

    //     img.onerror = (error) => {
    //       console.error('Error loading image:', error);
    //       reject(error);
    //     };

    //     // 设置图片源
    //     if (iconData.startsWith('data:')) {
    //       img.src = iconData;
    //     } else {
    //       img.src = `data:image/png;base64,${iconData}`;
    //     }
    //   });
    // };

    const createRenderingHints = (data: any[]) => {
      // 遍历data,获取data中的name属性的值
      const names = data.map((item) => item.name);
      const renderingHints = {};

      // 定义需要处理的组件类型
      const componentTypes = [...names];

      // 遍历所有需要处理的组件类型
      componentTypes.forEach((type) => {
        const componentData = data.find((item) => item.name === type)?.data;
        if (!componentData) return;

        const depthDiff = componentData.geometry
          ? componentData.geometry.depth.to - componentData.geometry.depth.from
          : 10;
        const outerDiameter = componentData.geometry
          ? componentData.geometry.diameter.outer
          : 26;
        if (componentData.toolIcon) {
          const icon = "data:image/png;base64," + componentData.toolIcon;
          // "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAScwAAE" +
          // "nMBjCK5BwAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAAo0lEQVRIS81WQQ6AIAzj/5/GaAIq26DVQDmYYEJ1XVtGyjm" +
          // "n8qR0Lu93dq3Am+K/FlFwq/EXgfanbBFKvCm+ZyePWEQW3fsbj/pcZZG2oUZthIDSIiOL1xBHRBiJvW/Mxg8JIAop9xgC7AnUFr8a/yKwa1B7C" +
          // "odTmO2kKujuIGOvFrODCimABpFVZnZGqFNox4zABFQej+xcm4lYR+lxbxI/SR1oUFAhMA7PXAAAAABJRU5ErkJggg==";
          // );
          //         const img = new Image();
          // img.src = icon

          //  width: img.naturalWidth,   // 使用 naturalWidth 获取原始宽度
          //         height: img.naturalHeight  // 使用 naturalHeight 获取原始高度
          const patternFactory = PatternFactory.getInstance();
          const pattern = patternFactory.createPattern(icon, {
            desiredwidth: outerDiameter,
            desiredheight: depthDiff,
            scalable: true,
          });
          // {
          //   desiredwidth: outerDiameter,
          //   desiredheight: depthDiff,
          //   //      desiredwidth: width,
          //   // desiredheight: height,
          //   scalable: false,
          // }

          renderingHints[type] = {
            fillstyle: new FillStyle({
              color: "transparent",
              pattern: pattern,
            }),
            linestyle: new LineStyle({
              color: "transparent",
              width: 1,
            }),
          };
        }
      });
      return renderingHints;
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
          // 'color': 'red',
          width: 2,
        }),
        //      visible: boolean;
        // labeldata?: LabelData;
        // linestyle?: LineStyle;
        defaultlocation: LocationType.Right,
        mode: Mode.Trajectory,
      };

      const factoryRegistry = new ComponentNodeFactoryRegistry(true);
      const renderingHints = createRenderingHints(data);
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
        // 隐藏偏差轨道
        deviation: {
          trackwidth: 30,
        },
        // // 隐藏所有间隙区域（包括坐标轴所在区域）
        // gap: {
        //   left: { visible: false, size: 0 },
        //   right: { visible: false, size: 0 },
        //   top: { visible: false, size: 0 },
        //   bottom: { visible: false, size: 0 }
        // },
        // // 隐藏图例
        // legend: {
        //   visible: false
        // },
        wellborenode: {
          registry: factoryRegistry,
          renderinghints: renderingHints,
          viewmode: ViewMode.Regular, // 使用视图模式  Regular,Compressed"KeepAspectRatio"
        },
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
.Plot-GEO canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
