<template>
  <div
    ref="plotContainer"
    style="width: 100%; height: 100%; position: relative"
    v-bind="$attrs"
  ></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onBeforeUnmount } from "vue";
import { DefaultColorProvider } from "@int/geotoolkit/util/DefaultColorProvider";
import { Plot } from "@int/geotoolkit3d/Plot";
import { Box3, Vector3 } from "three";
import { Grid } from "@int/geotoolkit3d/scene/grid/Grid";
import { TrajectoryLine } from "@int/geotoolkit3d/scene/well/TrajectoryLine";
import wellDemo from "./data.json";
import { max } from "moment";
// import { TrajectoryTube } from "@int/geotoolkit3d/scene/well/TrajectoryTube";
import { CursorTool } from "@int/geotoolkit3d/tool/cursor/CursorTool";
import { CrossHairCursor } from "@int/geotoolkit3d/tool/cursor/CrossHairCursor";

let X_SCALE = 1; // 每个网格的缩放比例
let Y_SCALE = 1;
let Z_SCALE = 2.2;
// let CAMERA_DISTANCE = -9000; // 0-2000的参考值// 距离中心点的距离(需要调整时变量, 根据轴范围range, miny, minz)
let CAMERA_DISTANCE = -7000; // 将初始值从 -9000 改为 -15000
let grid = null;
// -range*5-10倍   range为0-2000的参考值是-9000, 0-1000的参考值是-9000, 0-500的参考值是-5000
let resizeObserver: ResizeObserver | null = null;
export type Well3410A44Type = {
  dls: number[];
  incl: number[];
  azim: number[];
  mds: number[];
  x: number[];
  y: number[];
  xRef: number;
  yRef: number;
  xDeviation: number[];
  yDeviation: number[];
  elevation: number[];
};

const DEFAULT_COLORPROVIDER = new DefaultColorProvider({
  values: [0, 1, 2],
  colors: ["green", "yellow", "red"],
});

let allTrajectoryPath = ref([]); // 所有存在的轨迹线[{wellId, trajectoryPath, currentData:{x,y,z,name,color}},{},{}]
/// currentData当前的数据(是处理过以后得数据,用于展示 ) originData: 原始数据: ()
// 如果是调整x,y,z的范围, 需要重新计算currentData, 然后更新grid, 然后更新轨迹
// 加载新的数据后也是走这个逻辑----(分段加载的方法) 如果是更新新的轨迹, 在原有的currentData上去add, 且originData也需要add新的数据
// 如果是添加新的轨迹, 则allTrajectoryPath去push新的一条记录

// 添加一个全局标记来跟踪是否正在进行grid更新
let isUpdatingGrid = false;
// 添加一个清除定时器的引用
let clearTrajectoryTimer = null;

const initXmin = -400;
const initXmax = 400;
const initYmin = -400;
const initYmax = 400;
const initZmin = 0;
const initZmax = 2000;

export default defineComponent({
  name: "WellTrajectory",
  setup(_, { expose }) {
    const plotContainer = ref<HTMLDivElement | null>(null);
    let plot: Plot | null = null;

    const createPlot = (divElement: HTMLDivElement, camera, loc) => {
      // 检查元素尺寸
      if (!divElement || divElement.clientWidth <= 0 || divElement.clientHeight <= 0) {
        console.error('Container element has invalid dimensions', divElement);
        return null;
      }

      return new Plot({
        container: divElement,
        camera: {
          position: loc
            ? loc
            : camera.clone().add(new Vector3(0, CAMERA_DISTANCE, 1000)),
          lookat: camera.clone(),
        },
        scale: new Vector3(1, 1, 1.2),
      });
    };

    const resetCamera = (direction: string) => {
      switch (direction) {
        case "top":
          plot.fitCamera(new Vector3(0, 0, 1), false, 0, 0.2);
          break;
        case "left":
          plot.fitCamera(new Vector3(1, 0, 0));
          break;
        default:
          plot.resetCamera();
          break;
      }
    };
    const createPlotGrid = (
      xmin: number,
      xmax: number,
      ymin: number,
      ymax: number,
      zmin: number,
      zmax: number
    ) => {
      // 确保所有值都是有效的数字
      if (isNaN(xmin) || isNaN(xmax) || isNaN(ymin) || 
          isNaN(ymax) || isNaN(zmin) || isNaN(zmax)) {
        console.error('Invalid grid parameters', { xmin, xmax, ymin, ymax, zmin, zmax });
        return null;
      }
      
      // 确保最大值大于最小值
      if (xmax <= xmin || ymax <= ymin || zmax <= zmin) {
        console.error('Grid max values must be greater than min values', 
                    { xmin, xmax, ymin, ymax, zmin, zmax });
        // 设置默认值
        xmin = -400; xmax = 400;
        ymin = -400; ymax = 400;
        zmin = 0; zmax = 2000;
      }
      
      return new Grid({
        // 网格线
        start: new Vector3(xmin, ymin, zmax),
        end: new Vector3(xmax, ymax, zmin),
        // 标签
        modelstart: new Vector3(xmin, ymin, zmax),
        modelend: new Vector3(xmax, ymax, zmin),
        title: {
          distance: 0.6,
          texts: {
            x: "West(-)East(+)[m]",
            y: "South(-)North(+)[m]",
            z: "TVD[m]",
          },
        },
      });
    };
    const resize = () => {
      if (plot && plotContainer.value) {
        updateSizes(
          plotContainer.value.clientWidth,
          plotContainer.value.clientHeight
        );
      }
    };

    const updateSizes = (clientWidth: number, clientHeight: number) => {
      plot.setSize(clientWidth, clientHeight);
      // plot.setBounds(new Rect(0, 0, clientWidth, clientHeight));
    };
    const getOption = () => {
      return grid.getOptions();
    };

    const setOption = (option) => {
      // 取消之前的任何延时操作
      if (clearTrajectoryTimer) {
        clearTimeout(clearTrajectoryTimer);
        clearTrajectoryTimer = null;
      }

      // 标记正在更新
      isUpdatingGrid = true;

      const { xmin, xmax, ymin, ymax, zmin, zmax } = option;

      // 创建相机位置
      // const loc = new Vector3(
      //   0 - zmax / 2 + 1000,
      //   0 - zmax / 2 - 1000,
      //   2 * zmax
      // );
      // const camera = new Vector3(0, 0, zmax / 2);

      // 创建新网格
      const newGrid = createPlotGrid(xmin, xmax, ymin, ymax, zmin, zmax);

      // 创建轨迹副本并清空原数组
      const trajectoriesToRestore = [...allTrajectoryPath.value];
      allTrajectoryPath.value = []; // 清空数组防止其他地方访问

      // 先移除所有轨迹
      if (plot && plot.getRoot()) {
        const children = [...plot.getRoot().children];
        children.forEach((child) => {
          if (child instanceof TrajectoryLine) {
            plot.getRoot().remove(child);
          }
        });
      }

      // 清除所有元素
      plot.getRoot().clear();

      // 添加新网格
      plot.getRoot().add(newGrid);

      // 更新全局grid引用
      grid = newGrid;

      // 重新创建轨迹
      if (trajectoriesToRestore.length > 0) {
        const newTrajectories = trajectoriesToRestore.map((trajectory) => {
          // 获取原始数据
          const rawData = {
            x: [],
            y: [],
            z: [],
          };
          // Filter data points based on x, y, z ranges
          for (let i = 0; i < trajectory.originalData.x.length; i++) {
            const x = trajectory.originalData.x[i];
            const y = trajectory.originalData.y[i];
            const z = trajectory.originalData.z[i];

            // Only keep points that are within all ranges
            if (
              x >= xmin &&
              x <= xmax &&
              y >= ymin &&
              y <= ymax &&
              z >= zmin &&
              z <= zmax
            ) {
              rawData.x.push(x);
              rawData.y.push(y);
              rawData.z.push(z);
            }
          }
          // 处理rawData,截取掉

          // 为了处理超出zmax范围的情况，我们需要更仔细地处理Z值
          // 1. 计算X和Y的偏移量
          const xDev = computeDeviation(rawData.x);
          const yDev = computeDeviation(rawData.y);
          const zDev = computeDeviation(rawData.z);

          // // 2. 过滤掉超出zmax的z值
          // const filteredData = {
          //   x: [],
          //   y: [],
          //   z: []
          // };

          // // 遍历原始数据,只保留z值小于等于zmax的点
          // for(let i = 0; i < rawData.z.length; i++) {
          //   if(rawData.z[i] <= zmax) {
          //     filteredData.x.push(rawData.x[i]);
          //     filteredData.y.push(rawData.y[i]);
          //     filteredData.z.push(rawData.z[i]);
          //   }
          // }

          // // 3. 计算深度值 - 将过滤后的z值转换为相对深度
          // const maxFilteredZ = Math.max(...filteredData.z);
          // const depth = filteredData.z.map(z => maxFilteredZ - z);

          const depth = [...zDev].map((z) => zmax - z);

          // 创建新的轨迹数据
          const scaledData = {
            x: xDev,
            y: yDev,
            z: depth,
            values: depth,
          };

          // 创建新轨迹
          const newTrajectoryPath = new TrajectoryLine({
            data: [scaledData],
            color: trajectory.color || "blue",
          });
          // 重新创建的轨迹有问题, 轨迹线不对

          // 设置位置
          newTrajectoryPath.position.set(0, 0, 0);

          // 添加到场景
          plot.getRoot().add(newTrajectoryPath);

          // 返回更新后的轨迹对象
          return {
            wellId: trajectory.wellId,
            trajectoryPath: newTrajectoryPath,
            currentData: scaledData,
            originalData: trajectory.originalData,
            color: trajectory.color || "blue",
          };
        });

        // 更新轨迹数组
        allTrajectoryPath.value = newTrajectories;
      }

      // 重置相机
      plot.resetCamera();

      // 添加延时检查，确保没有漏网之鱼
      clearTrajectoryTimer = setTimeout(() => {
        if (plot && plot.getRoot()) {
          // 获取所有有效轨迹的UUID
          const validUuids = allTrajectoryPath.value.map(
            (t) => t.trajectoryPath.uuid
          );

          // 检查并移除任何不在列表中的轨迹
          const children = [...plot.getRoot().children];
          children.forEach((child) => {
            if (
              child instanceof TrajectoryLine &&
              !validUuids.includes(child.uuid)
            ) {
              plot.getRoot().remove(child);
            }
          });
        }

        // 重置标记
        isUpdatingGrid = false;
      }, 1000);
    };

    const computeDeviation = (values: number[]): number[] => {
      const dev = [];
      for (let i = 0; i < values.length; i++) {
        dev.push(values[i] - values[0]);
      }
      return dev;
    };
    const insertData = (wellId, x: number[], y: number[], z: number[]) => {
      if (!plotContainer.value) {
        return;
      }
      const minx = Math.min(...x);
      const maxx = Math.max(...x);
      const miny = Math.min(...y);
      const maxy = Math.max(...y);
      const minz = Math.min(...z);
      const maxz = Math.max(...z);

      // // 将高程值转换为相对于最高点的深度值（最高点为0，向下为正）
      const depth = z.map((z) => maxz - z);

      const camera = new Vector3(
        (minx + maxx) / 2,
        (miny + maxy) / 2,
        (minz + maxz) / 2
      );
      // plot = createPlot(plotContainer.value, camera);
      //     const trajectoryData = trajectoryDataArray.map((data) => {
      //   // 将高程值转换为相对于最高点的深度值
      //   // const depth = data.z.map((z) => 7071 - z);
      //   const depth = 7071 - data.z;

      const xDev = computeDeviation(x).map((item) => item);
      const yDev = computeDeviation(y).map((item) => item);

      //   return {
      //     x: xDev,
      //     y: yDev,
      //     z: depth,
      //     values: depth,
      //   };
      // });
      //  const xDev = computeDeviation(trajectoryDataArray.x).map((item) => item);
      //   const yDev = computeDeviation(trajectoryDataArray.y).map((item) => item);
      //   // const depth = data.z.map((z) => 7071 - z);
      //   const depth = 7071 - trajectoryDataArray.z;
      //         const trajectoryData = {
      //     x: xDev,
      //     y: yDev,
      //     z: depth,
      //     values: depth,

      // }
      const trajectoryPath = new TrajectoryLine({
        data: [
          {
            x: xDev, // X 方向的偏移量
            y: yDev, // Y 方向的偏移量
            z: depth, // 深度值（从0开始向下为正）
            values: depth, // 使用深度值作为颜色映射
          },
        ],
        colorprovider: DEFAULT_COLORPROVIDER,
      });

      trajectoryPath.position.set(0, 0, 0);
      const [rangeMinx, rangeMaxx] = calculateXRange(minx, maxx);
      const [rangeMiny, rangeMaxy] = calculateXRange(miny, maxy);
      // 清除现有轨迹
      plot.getRoot().clear();
      // 重新创建和添加网格
      plot
        .getRoot()
        .add(
          createPlotGrid(rangeMinx, rangeMaxx, rangeMiny, rangeMaxy, 0, maxz)
        );
      plot.getRoot().add(trajectoryPath);
      plot.resetCamera();
      // return wellsContainer;
    };

    const calculateXRange = (min: number, max: number) => {
      // 取max和min的最大绝对值*2
      const maxAbs = Math.max(Math.abs(min), Math.abs(max));
      // 返回对称范围
      return [-maxAbs * 2, maxAbs * 2];
    };

    const initializeChart = () => {
      if (!plotContainer.value) {
        console.warn('Plot container is not available');
        return;
      }
      
      // 检查容器尺寸
      if (plotContainer.value.clientWidth <= 0 || plotContainer.value.clientHeight <= 0) {
        console.warn('Plot container has invalid dimensions, waiting for resize');
        
        // 可以考虑添加一个尺寸变化的监听器
        if (!resizeObserver) {
          resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
              if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                // 现在容器尺寸有效，可以初始化
                initializeChart();
                // 完成后可以断开观察器
                resizeObserver.disconnect();
                resizeObserver = null;
              }
            }
          });
          resizeObserver.observe(plotContainer.value);
        }
        return;
      }

      // 正常的初始化逻辑
      const loc = new Vector3(
        0 - initZmax / 2 + 1000,
        0 - initZmax / 2 - 1000,
        2 * initZmax
      );
      const camera = new Vector3(0, 0, initZmax / 2);
      if (!plot) {
        plot = createPlot(plotContainer.value, camera, loc);
        
        if (!plot) {
          console.error('Failed to create plot');
          return;
        }

        const [rangeMinx, rangeMaxx] = calculateXRange(initXmin, initXmax);
        const [rangeMiny, rangeMaxy] = calculateXRange(initYmin, initYmax);

        grid = createPlotGrid(
          rangeMinx,
          rangeMaxx,
          rangeMiny,
          rangeMaxy,
          0,
          initZmax
        );

        // 只在初始化时添加网格
        plot.getRoot().add(grid);
      }
    };
    const updateTrajectory = (id, xyData, type) => {
      // 如果正在更新网格，跳过处理
      if (isUpdatingGrid) {
        return;
      }

      // if (!plotContainer.value) {
      //   return;
      // }
      // const minx = -400;
      // const maxx = 400;
      // const miny = -400;
      // const maxy = 400;
      // const minz = 0;
      // const maxz = 2000;
      // // // -1000, 1000/  2000  maxz/2 + 500
      // const loc = new Vector3(
      //   0 - maxz / 2 + 1000,
      //   0 - maxz / 2 - 1000,
      //   2 * maxz
      // );
      // const camera = new Vector3(0, 0, maxz / 2);

      //  const mid = Math.floor(logarrayData.x.length / 2);

      // const loc = new Vector3(
      //     logarrayData.x[mid] - 2000,
      //     logarrayData.y[mid] - 4000,
      //     logarrayData.elevation[mid] + 500
      // );
      // const lookat = new Vector3(
      //     logarrayData.x[mid],
      //     logarrayData.y[mid],
      //     logarrayData.elevation[mid]
      // );

      // plot = createPlot(plotContainer.value);
      // 只在第一次初始化时创建 plot
      // if (!plot) {
      //   plot = createPlot(plotContainer.value, camera, loc);

      //   const [rangeMinx, rangeMaxx] = calculateXRange(minx, maxx);
      //   const [rangeMiny, rangeMaxy] = calculateXRange(miny, maxy);

      //   grid = createPlotGrid(
      //     rangeMinx,
      //     rangeMaxx,
      //     rangeMiny,
      //     rangeMaxy,
      //     0,
      //     maxz
      //   );

      //   // 只在初始化时添加网格
      //   plot.getRoot().add(grid);

      //   //      plot.addTool(new CursorTool( // 3d轨迹增加工具
      //   //     {
      //   //         'cursor': new CrossHairCursor({
      //   //             'limits': new Box3(new Vector3(minx, miny, 0), new Vector3(maxx, maxy, maxz))
      //   //         })
      //   //     }
      //   // ));
      // }

      const depth = [...xyData.z].map((z) => initZmax - z);

      const newData = {
        x: xyData.x,
        y: xyData.y,
        z: depth,
        values: depth,
      };
      if (type === "add") {
        const newTrajectory = new TrajectoryLine({
          data: [newData],
          color: xyData.color,
        });
        newTrajectory.position.set(0, 0, 0);
        plot.getRoot().add(newTrajectory);
        allTrajectoryPath.value.push({
          wellId: id,
          trajectoryPath: newTrajectory,
          currentData: newData,
          originalData: {
            x: [...xyData.x], // 保存未转换的原始数据
            y: [...xyData.y],
            z: [...xyData.z], // 保存未经过深度转换的z值
            values: [...xyData.z],
          },
          color: xyData.color,
        });
        // 强制重新渲染
        // plot.invalidate();
      } else {
        const existingIndex = allTrajectoryPath.value.findIndex(
          (s) => s.wellId === id
        );
        let oldTrajectoryPath =
          allTrajectoryPath.value[existingIndex].trajectoryPath;
        if (existingIndex >= 0) {
          // const depth = xyData.z.map((z) => maxz - z);

          const newCurrentData = {
            x: [
              ...allTrajectoryPath.value[existingIndex].currentData.x,
              ...newData.x,
            ],
            y: [
              ...allTrajectoryPath.value[existingIndex].currentData.y,
              ...newData.y,
            ],
            z: [
              ...allTrajectoryPath.value[existingIndex].currentData.z,
              ...newData.z,
            ],
            values: [
              ...allTrajectoryPath.value[existingIndex].currentData.values,
              ...newData.values,
            ],
          };
          const originalData = {
            x: [
              ...allTrajectoryPath.value[existingIndex].originalData.x,
              ...xyData.x,
            ],
            y: [
              ...allTrajectoryPath.value[existingIndex].originalData.y,
              ...xyData.y,
            ],
            z: [
              ...allTrajectoryPath.value[existingIndex].originalData.z,
              ...xyData.z,
            ],
            values: [
              ...allTrajectoryPath.value[existingIndex].originalData.values,
              ...xyData.values,
            ],
          };

          // allTrajectoryPath.value[existingIndex].currentData.x.push(newData.x);
          // allTrajectoryPath.value[existingIndex].currentData.y.push(newData.y);
          // allTrajectoryPath.value[existingIndex].currentData.z.push(newData.z);
          // allTrajectoryPath.value[existingIndex].currentData.values.push(
          //   newData.values
          // );
          const oldTrajectoryUuid = oldTrajectoryPath.uuid;
          const oldTrajectory = plot
            .getRoot()
            .children.find((child) => child.uuid === oldTrajectoryUuid);
          if (oldTrajectory) {
            plot.getRoot().remove(oldTrajectory);
          }
          const newTrajectoryPath = new TrajectoryLine({
            data: [newCurrentData],
            color: allTrajectoryPath.value[existingIndex].color,
          });
          newTrajectoryPath.position.set(0, 0, 0);
          allTrajectoryPath.value[existingIndex].currentData = newCurrentData;
          allTrajectoryPath.value[existingIndex].trajectoryPath =
            newTrajectoryPath;
          allTrajectoryPath.value[existingIndex].originalData = originalData;
          plot.getRoot().add(newTrajectoryPath);
        }
      }
    };

    // 清除所有轨迹的方法
    // const clearAllTrajectories = () => {
    //   trajectoryPaths.forEach(trajectory => {
    //     plot.getRoot().remove(trajectory);
    //   });
    //   trajectoryPaths = [];
    //   plot.invalidate();
    // };

    // // 在组件销毁时清理
    // onBeforeUnmount(() => {
    //   clearAllTrajectories();
    //   if (timer) {
    //     clearInterval(timer);
    //   }
    // });

    // 添加新的系列而不影响现有系列

    // const insertSampleData = () => {
    //   if (!plotContainer.value) {
    //     return;
    //   }
    //   const minx = -1000;
    //   const maxx = 1000;
    //   const miny = -1000;
    //   const maxy = 1000;
    //   const minz = 0;
    //   const maxz = 2000;
    //   // // -1000, 1000/  2000
    //   const loc = new Vector3(0 - 2000, 0 - 4000, 1000 + 500);
    //   const camera = new Vector3(0, 0, 1000);

    //   // plot = createPlot(plotContainer.value);
    //   // 只在第一次初始化时创建 plot
    //   if (!plot) {
    //     plot = createPlot(plotContainer.value, camera, loc);

    //     const [rangeMinx, rangeMaxx] = calculateXRange(minx, maxx);
    //     const [rangeMiny, rangeMaxy] = calculateXRange(miny, maxy);

    //     // 只在初始化时添加网格
    //     plot
    //       .getRoot()
    //       .add(
    //         createPlotGrid(rangeMinx, rangeMaxx, rangeMiny, rangeMaxy, 0, maxz)
    //       );
    //   }
    //   // test数据

    //   // const depth2 = zData.map((z) => maxz - z);

    //   const newData = [wellDemo.wellDemo];

    //   // 存储所有轨迹线的数组
    //   // let trajectoryPaths = [];

    //   // 创建初始轨迹线
    //   let trajectoryPath2 = new TrajectoryLine({
    //     data: newData,
    //     color: "pink",
    //   });
    //   // 设置位置并添加到场景
    //   trajectoryPath2.position.set(0, 0, 0);
    //   plot.getRoot().add(trajectoryPath2);
    //   allTrajectoryPath.value.push({
    //     wellId: "001",
    //     trajectoryPath: trajectoryPath2,
    //     currentData: newData[0],
    //     color: "pink",
    //   });

    //   // 定时器2s后清除轨迹线
    // };
    // const insertSampleUpdata = () => {
    //   if (!plotContainer.value) {
    //     return;
    //   }
    //   // 生成初始100个点的数据
    //   const generatePoints = (length) => {
    //     const points = [];
    //     for (let i = 0; i < length; i++) {
    //       points.push({
    //         x: wellDemo.newWellDemo.x[0] + i,
    //         y: wellDemo.newWellDemo.y[0] + i,
    //         z: wellDemo.newWellDemo.z[0] + i,
    //         values: wellDemo.newWellDemo.values[0] + i,
    //       });
    //     }
    //     return points;
    //   };

    //   let targetPoints = [
    //     {
    //       x: generatePoints(100).map((p) => p.x),
    //       y: generatePoints(100).map((p) => p.y),
    //       z: generatePoints(100).map((p) => p.z),
    //       values: generatePoints(100).map((p) => p.values),
    //     },
    //   ];

    //   // 每2秒增加3个点
    //   const updateInterval = setInterval(() => {
    //     const newPoints = generatePoints(3);

    //     targetPoints[0].x.push(...newPoints.map((p) => p.x));
    //     targetPoints[0].y.push(...newPoints.map((p) => p.y));
    //     targetPoints[0].z.push(...newPoints.map((p) => p.z));
    //     targetPoints[0].values.push(...newPoints.map((p) => p.values));

    //     // 通过uuid移除旧轨迹
    //     if (allTrajectoryPath.value[0].trajectoryPath) {
    //       const oldTrajectoryUuid =
    //         allTrajectoryPath.value[0].trajectoryPath.uuid;

    //       const oldTrajectory = plot
    //         .getRoot()
    //         .children.find((child) => child.uuid === oldTrajectoryUuid);
    //       if (oldTrajectory) {
    //         plot.getRoot().remove(oldTrajectory);
    //         // oldTrajectory.dispose();

    //         // 添加新轨迹
    //         const trajectoryPath3 = new TrajectoryLine({
    //           data: targetPoints,
    //           color: "blue",
    //         });
    //         trajectoryPath3.position.set(0, 0, 0);
    //         plot.getRoot().add(trajectoryPath3);

    //         // 更新引用
    //         allTrajectoryPath.value[0].currentData = targetPoints[0];
    //         allTrajectoryPath.value[0].trajectoryPath = trajectoryPath3;
    //       }
    //     }

    //   }, 2000);

    //   // 50秒后清除定时器
    //   setTimeout(() => {
    //     clearInterval(updateInterval);
    //   }, 50000);

    // };

    onMounted(() => {
      // if (plotContainer.value) {
      //   resizeObserver = new ResizeObserver(handleResize);
      //   resizeObserver.observe(plotContainer.value);
      // }
    });
    onBeforeUnmount(() => {
      resizeObserver?.disconnect();
    });
    expose({
      insertData,
      resetCamera,
      // insertSampleData,
      updateTrajectory,
      getOption,
      setOption,
      initializeChart,
      // insertSampleUpdata,
    });

    return {
      plotContainer,
    };
  },
});
</script>

<style scoped>
/* 添加样式确保 canvas 填满容器 */
:deep(canvas) {
  width: 100% !important;
  height: 100% !important;
}

/* 确保容器也是 100% */
.Plot-GEO {
  width: 100%;
  height: 100%;
}

/* .top-bar {
  width: 800px;
  height: 50px;
  background-color: red;
  margin-bottom: 10px;
} */
</style>
