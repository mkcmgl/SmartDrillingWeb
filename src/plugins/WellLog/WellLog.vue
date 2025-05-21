<template>
  <div class="plot-well-log">
    <canvas ref="plotContainer"></canvas>
  </div>
</template>

<script lang="ts">
import { Plot } from "@int/geotoolkit/plot/Plot";
import { KnownColors } from "@int/geotoolkit/util/ColorUtil";
import { WellLogWidget } from "@int/geotoolkit/welllog/widgets/WellLogWidget";
import { TrackType } from "@int/geotoolkit/welllog/TrackType";
import { HeaderType } from "@int/geotoolkit/welllog/header/LogAxisVisualHeader";
import { LogAbstractData } from "@int/geotoolkit/welllog/data/LogAbstractData";
import { createCurve } from "./curveData";
import { LogCurve } from "@int/geotoolkit/welllog/LogCurve";
import { LogData } from "@int/geotoolkit/welllog/data/LogData";
import { deepMergeObject } from "@int/geotoolkit/base";
import { DateUtil } from "@int/geotoolkit/util/DateUtil";
import curveData from "./curves.json";
import { CompositeLogCurve } from "@int/geotoolkit/welllog/CompositeLogCurve";
import { LogMarker } from "@int/geotoolkit/welllog/LogMarker";
import { ColorUtil } from "@int/geotoolkit/util/ColorUtil";
import {
  Events as SelectionEvents,
  Selection,
} from "@int/geotoolkit/controls/tools/Selection";
import { EditMode } from "@int/geotoolkit/controls/tools/EditMode";
import { PaintMode } from "@int/geotoolkit/controls/tools/PaintMode";
import { defineComponent, onMounted, ref } from "vue";
import { IndexType } from "@int/geotoolkit/welllog/IndexType";
import {
  DragAndDrop,
  Events as DragAndDropEvents,
} from "@int/geotoolkit/controls/tools/DragAndDrop";
import { SelectionEventArgs } from "@int/geotoolkit/controls/tools/SelectionEventArgs";
import { from as queryFromNode } from "@int/geotoolkit/selection/from";

import { DragAndDropEventArgs } from "@int/geotoolkit/controls/tools/DragAndDropEventArgs";
import { LogTrack } from "@int/geotoolkit/welllog/LogTrack";

export default defineComponent({
  name: "WellLog",
  props: {
    id: {
      type: String,
      default: () => `welllog-${Math.random().toString(36).substring(2, 9)}`,
    },
  },
  emits: ["track-clicked"],
  setup(props, { emit, expose }) {
    const componentId = props.id;
    const plotContainer = ref<HTMLCanvasElement | null>(null);
    const wellLogWidget = ref<WellLogWidget>();
    const currentCurveData = ref<any[]>([]);
    const currentCurveDataIndex = ref<any[]>([]);
    const currentHighlightedTrack = ref(null);
    let plot: Plot | null = null;

    console.log(`WellLog component created with ID: ${componentId}`);

    const initialize = () => {
      if (wellLogWidget.value) {
        wellLogWidget.value.dispose();
      }
      createScene(plotContainer.value);
      currentCurveData.value = [];
      currentCurveDataIndex.value = [];
    };

    const FitWindowSize = () => {
      wellLogWidget.value?.fitToHeight();
    };

    const updateCurveToStackedTrack = async (
      trackList,
      logcurveId,
      indexArray,
      valueArray,
      currentCurve
    ) => {
      if (!currentCurve || !currentCurve.curveLog || !currentCurve.curve) {
        console.warn("Missing curve data in updateCurveToStackedTrack");
        return;
      }

      if (!indexArray || !Array.isArray(indexArray)) {
        console.warn("indexArray is null or not an array");
        return;
      }

      if (!currentCurve.indexArray || !Array.isArray(currentCurve.indexArray)) {
        console.warn("currentCurve.indexArray is null or not an array");
        currentCurve.indexArray = [];
      }

      if (!valueArray || !Array.isArray(valueArray)) {
        console.warn("valueArray is null or not an array");
        return;
      }

      const filterIndexArray = [];
      const filterValueArray = [];
      for (let i = 0; i < indexArray.length; i++) {
        if (!currentCurve.indexArray.includes(indexArray[i])) {
          filterIndexArray.push(indexArray[i]);
          filterValueArray.push(valueArray[i]);
        }
      }

      if (!trackList || !Array.isArray(trackList) || trackList.length === 0) {
        console.warn("trackList is null, not an array, or empty");
        return;
      }

      if (trackList.length > 0) {
        const newIndexArray = [...currentCurve.indexArray, ...filterIndexArray];
        const newValueArray = [...currentCurve.valueArray, ...filterValueArray];

        const minIndex = Math.min(...newIndexArray);
        const maxIndex = Math.max(...newIndexArray);
        const minValue = Math.min(...newValueArray);
        const maxValue = Math.max(...newValueArray);
        const newCurveLog = new LogData({
          name: currentCurve.curveLog.getName(),
          depths: newIndexArray,
          values: newValueArray,
        });

        currentCurve.curve.setData(newCurveLog, true, true);

        currentCurve.curveLog = newCurveLog;

        currentCurve.curve.setNormalizationLimits(minValue, maxValue);

        const curveIndex = currentCurveData.value.findIndex(
          (item) => item.logcurveId === logcurveId
        );
        if (curveIndex !== -1) {
          currentCurveData.value[curveIndex] = {
            ...currentCurveData.value[curveIndex],
            indexArray: newIndexArray,
            valueArray: newValueArray,
            curveLog: newCurveLog,
            minLimits: minIndex,
            maxLimits: maxIndex,
            minValue: minValue,
            maxValue: maxValue,
          };
        }

        let overallMinIndex = Infinity;
        let overallMaxIndex = -Infinity;

        currentCurveData.value.forEach((item) => {
          if (item.indexArray && item.indexArray.length > 0) {
            const curveMinIndex = Math.min(...item.indexArray);
            const curveMaxIndex = Math.max(...item.indexArray);

            if (curveMinIndex < overallMinIndex)
              overallMinIndex = curveMinIndex;
            if (curveMaxIndex > overallMaxIndex)
              overallMaxIndex = curveMaxIndex;
          }
        });

        if (isFinite(overallMinIndex) && isFinite(overallMaxIndex)) {
          const range = overallMaxIndex - overallMinIndex;
          const buffer = range * 0.05;
          wellLogWidget.value?.setDepthLimits(
            overallMinIndex,
            overallMaxIndex + buffer
          );
        }

        trackList.forEach((item) => {
          if (item.track) item.track.invalidate();
        });

        wellLogWidget.value?.invalidate();
      }
    };
    const addCurveToStackedTrack = (
      logcurveId,
      curveName,
      indexArray,
      valueArray,
      indexType,
      indexCurve,
      color,
      isAddDataFlag,
      trackIndex,
      minLimits: number = 0,
      maxLimits: number = 200
    ) => {
      if (!wellLogWidget.value) return;

      if (
        !indexArray ||
        !Array.isArray(indexArray) ||
        indexArray.length === 0
      ) {
        console.warn("indexArray is null, not an array, or empty");
        return;
      }

      if (
        !valueArray ||
        !Array.isArray(valueArray) ||
        valueArray.length === 0
      ) {
        console.warn("valueArray is null, not an array, or empty");
        return;
      }

      const minIndex = Math.min(...indexArray);
      const maxIndex = Math.max(...indexArray);
      const minValue = Math.min(...valueArray);
      const maxValue = Math.max(...valueArray);

      const curveLog = new LogData({
        name: curveName,
        depths: indexArray,
        values: valueArray,
      });

      const curve = new LogCurve(curveLog)
        .setLineStyle({
          color: color,
          width: 2,
        })
        .setNormalizationLimits(minValue, maxValue);

      const existingTrack =
        currentCurveDataIndex.value.find(
          (item) => item.trackIndex === trackIndex
        ) || null;

      let track;
      if (existingTrack) {
        if (existingTrack.logcurveIds.includes(logcurveId)) {
          return;
        }
        existingTrack.track.addChild([curve]);
        existingTrack.logcurveIds = `${existingTrack.logcurveIds},${logcurveId}`;
      } else {
        track = wellLogWidget.value
          .addTrack(TrackType.AnnotationTrack)
          .addChild([curve]);
        currentCurveDataIndex.value.push({
          track: track,
          logcurveIds: logcurveId,
          trackIndex: trackIndex,
        });
        wellLogWidget.value.setTrackWidth(150, track);
      }

      currentCurveData.value.push({
        logcurveId: logcurveId,
        curveName: curveName,
        indexCurve: indexCurve,
        color: color,
        indexArray: indexArray,
        valueArray: valueArray,
        curveLog: curveLog,
        curve: curve,
        minLimits: minIndex,
        maxLimits: maxIndex,
        minValue: minValue,
        maxValue: maxValue,
      });

      let overallMinIndex = Infinity;
      let overallMaxIndex = -Infinity;

      currentCurveData.value.forEach((item) => {
        if (item.indexArray && item.indexArray.length > 0) {
          const curveMinIndex = Math.min(...item.indexArray);
          const curveMaxIndex = Math.max(...item.indexArray);

          if (curveMinIndex < overallMinIndex) overallMinIndex = curveMinIndex;
          if (curveMaxIndex > overallMaxIndex) overallMaxIndex = curveMaxIndex;
        }
      });

      if (isFinite(overallMinIndex) && isFinite(overallMaxIndex)) {
        const range = overallMaxIndex - overallMinIndex;
        const buffer = range * 0.05;
        wellLogWidget.value.setDepthLimits(
          overallMinIndex - buffer,
          overallMaxIndex + buffer
        );
      }

      wellLogWidget.value.setDepthScale(5);

      wellLogWidget.value.setHeaderHeight("auto");

      wellLogWidget.value.invalidate();
    };

    const InsertData = (
      logcurveId: string,
      curveName: string,
      indexArray: number[],
      valueArray: number[],
      indexType: string = "depth",
      indexCurve: string,
      color,
      isAddDataFlag,
      trackIndex: number = 0
    ) => {
      if (!currentCurveData.value) currentCurveData.value = [];
      if (!currentCurveDataIndex.value) currentCurveDataIndex.value = [];

      if (
        !indexArray ||
        !Array.isArray(indexArray) ||
        indexArray.length === 0
      ) {
        console.warn("indexArray is null, not an array, or empty");
        return;
      }

      if (
        !valueArray ||
        !Array.isArray(valueArray) ||
        valueArray.length === 0
      ) {
        console.warn("valueArray is null, not an array, or empty");
        return;
      }

      if (isAddDataFlag) {
        let existingTrack = [];
        currentCurveDataIndex.value.forEach((item) => {
          if (item.logcurveIds.includes(logcurveId)) {
            existingTrack.push(item);
          }
        });
        const currentCurve =
          currentCurveData.value.find(
            (item) => item.logcurveId === logcurveId
          ) || null;
        updateCurveToStackedTrack(
          existingTrack,
          logcurveId,
          indexArray,
          valueArray,
          currentCurve
        );
      } else {
        if (!wellLogWidget.value) {
          return;
        }
        const indexTrack = wellLogWidget.value.getTrackAt(0);

        if (indexTrack) {
          wellLogWidget.value.removeTrack(indexTrack);
        }

        wellLogWidget.value
          .insertTrack(0, {
            type: TrackType.IndexTrack,
            indextrack: {
              axis: {
                name: "MD<br>(m)",
              },
              // styles: {
              //   label: {
              //     minor: { color: 'red' },
              //     major: { color: 'red' },
              //     edge: { color: 'red' },
              //   },
              //   tick: {
              //     minor: { color: 'pink', width: 1 },
              //     major: { color: 'pink', width: 1.5 },
              //     edge: { color: 'pink', width: 2 },
              //   }
              // }
            },
          })
          .setLayoutStyle({
            minwidth: 50,
            maxwidth: 50,
          });
        wellLogWidget.value.setIndexType(IndexType.Depth);
        addCurveToStackedTrack(
          logcurveId,
          curveName,
          indexArray,
          valueArray,
          indexType,
          indexCurve,
          color,
          isAddDataFlag,
          trackIndex,
          Math.min(...valueArray),
          Math.max(...valueArray)
        );
        const setMinValue = Math.min(...indexArray);
        const setMaxValue = Math.max(...indexArray);

        wellLogWidget.value.setDepthLimits(setMinValue, setMaxValue);

        FitWindowSize();
        wellLogWidget.value.setDepthScale(5);
      }
    };
    const clearCurve = () => {
      if (!wellLogWidget.value) {
        return;
      }
      currentCurveData.value = [];
      currentCurveDataIndex.value = [];
      const ctx = plotContainer.value?.getContext("2d");
      if (ctx) {
        ctx.clearRect(
          0,
          0,
          plotContainer.value?.width,
          plotContainer.value?.height
        );
      }

      initialize();
      return;
      const track = wellLogWidget.value.getTrackAt(1);
      if (!track) {
        return;
      }
      const TrackChildren = track.getChildren();
      TrackChildren.forEach((element) => {
        if (element instanceof LogCurve) {
          track.removeChild(element);
          element.setVisibleLine(false);
          element.setVisibleSymbol(false);
        }
      });
    };
    const createNewTrack = () => {
      if (!wellLogWidget.value) return;

      const newTrack = wellLogWidget.value.addTrack(TrackType.AnnotationTrack);
      wellLogWidget.value.setTrackWidth(150, newTrack);

      const trackCount = wellLogWidget.value.getTracksCount() - 1;

      wellLogWidget.value.invalidate();

      currentCurveDataIndex.value.push({
        track: newTrack,
        logcurveIds: "",
        trackIndex: trackCount,
      });

      return trackCount;
    };

    const setupTrackClickHandler = (emit) => {
      if (!wellLogWidget.value) {
        console.warn("wellLogWidget 不存在，无法设置点击事件处理器");
        return;
      }

      // 添加原生点击事件 - 这是最可靠的方式
      const canvasElement = plotContainer.value;
      if (canvasElement) {
        canvasElement.addEventListener("click", (e) => {
          console.log("Canvas 点击事件", e);

          // 获取鼠标点击的位置相对于canvas的坐标
          const rect = canvasElement.getBoundingClientRect(); // 需要修改
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          if (wellLogWidget.value) {
            // 获取点击位置的栈道
            const track = wellLogWidget.value.getTrackAtPosition(x, y);

            if (track) {
              const trackIndex = wellLogWidget.value.getTrackIndex(track);
              if (trackIndex === 0) return; // 忽略索引栈道

              console.log("Canvas点击栈道:", trackIndex);
              highlightSelectedTrack(trackIndex);

              // 确保使用正确的方式触发事件
              emit("track-clicked", trackIndex);
            }
          }
        });
      }
    };

    const highlightSelectedTrack = (trackIndex) => {
      console.log("高亮栈道:", trackIndex);
      if (!wellLogWidget.value) {
        console.warn("wellLogWidget 不存在，无法高亮栈道");
        return;
      }

      try {
        // 先取消之前的高亮
        const currentHighlightedTrackValue = currentHighlightedTrack.value;
        if (
          currentHighlightedTrackValue !== null &&
          currentHighlightedTrackValue !== undefined
        ) {
          console.log("取消之前高亮的栈道:", currentHighlightedTrackValue);
          const previousTrack = wellLogWidget.value.getTrackAt(
            currentHighlightedTrackValue
          );
          if (previousTrack) {
            wellLogWidget.value.highlightVisual(previousTrack, false);
          }
        }

        // 高亮当前选中的栈道
        console.log("高亮新栈道:", trackIndex);
        //执行方法
        const selectedTrack = wellLogWidget.value.getTrackAt(trackIndex);
        if (selectedTrack) {
          wellLogWidget.value.highlightVisual(selectedTrack, true);
          currentHighlightedTrack.value = trackIndex;
        } else {
          console.warn(`未找到索引为 ${trackIndex} 的栈道`);
        }
      } catch (error) {
        console.error("高亮栈道时出错:", error);
      }
    };

    const createScene = (canvas: HTMLCanvasElement) => {
      if (!canvas) return;

      const widget = createWellLogWidget().setAxisHeaderType(HeaderType.Simple);

      widget
        .getToolByName("pick")
        .on(SelectionEvents.onSelectionChanged, (evt, sender, eventArgs) => {
          console.log("getToolByName('pick')", eventArgs);
        });

      wellLogWidget.value = widget;
      widget.setHeaderHeight("auto");

      return {
        plot: new Plot({
          canvaselement: canvas,
          root: widget,
        }),
        widget: widget,
      };
    };

    const getOption = () => {
      // const options = wellLogWidget.value.getOptions();

      const depthScale = wellLogWidget.value.getDepthScale();
      return {
        // ...options,
        step: depthScale,
      };
    };

    const setOption = (option) => {
      // console.log("设置新选项:", option);
      wellLogWidget.value.setDepthScale(option.step);
    };
    onMounted(() => {
      if (!currentCurveData.value) currentCurveData.value = [];
      if (!currentCurveDataIndex.value) currentCurveDataIndex.value = [];

      if (plotContainer.value) {
        createScene(plotContainer.value);
        // 延迟一下再设置事件处理器，确保 wellLogWidget 已经完全初始化
        setTimeout(() => {
          setupTrackClickHandler(emit);
          console.log("栈道点击处理器设置完成");
        }, 500);
      }
    });

    expose({
      initialize,
      InsertData,
      clearCurve,
      FitWindowSize,
      addCurveToStackedTrack,
      updateCurveToStackedTrack,
      createNewTrack,
      getOption,
      setOption,
      highlightTrack: (trackIndex) => highlightSelectedTrack(trackIndex),
    });

    return {
      plotContainer,
    };
  },
});

function createWellLogWidget(options?: WellLogWidget.Options) {
  const widgetOptions: WellLogWidget.Options = deepMergeObject(options, {
    horizontalscrollable: "floating",
    verticalscrollable: "floating",
    trackcontainer: {
      border: {
        visible: false,
      },
    },
    footer: {
      visible: "none",
    },
    header: {
      border: {
        visible: false,
      },
    },
    //     track: {
    //  background: { color: '#fff'},
    //          header: {
    //                 border: {
    //                     visible: true,
    //                     color: 'red',
    //                     width: 1,
    //                     background: '#fff',
    //                 }
    //             }
    //     },
    border: {
      visible: false,
    },

    scroll: {
      fittocontent: true,
      headerverticalscroll: {
        size: 11,
        visible: true,
        options: { resizable: false },
      },
      trackverticalscroll: {
        size: 11,
        visible: true,
        options: { resizable: false },
      },
      trackhorizontalscroll: {
        size: 11,
        visible: true,
        options: { resizable: false },
      },
    },
    tools: {
      cursortracking: {
        tooltip: {
          enabled: true,
        },
      },
    },
  });
  const css = [
    " .geotoolkit.widgets.overlays.AnnotationShape {",
    "   opacity: 0.5;",
    "}",
    "* {",
    "   textstyle-color: #fff;",
    "   textstyle-font: 12px; ",
    "   textstyle-alignment: center;  ",
    "}",
  ].join("\n");
  return new WellLogWidget(widgetOptions).setCss(css);
}

function getSelection() {
  let selection = null;
  if (this._annotationsOverlay.getEnabled()) {
    this._annotationsOverlay.editAnnotation(null);
    selection = this._annotationsOverlay.getActiveAnnotation();
  }

  if (selection == null) {
    selection = this._widget.getSelectedVisuals();
    if (selection == null || selection.length === 0) {
      selection = this._widget.getSelectedTracks();
    }
  }

  selection =
    selection == null ? [] : Array.isArray(selection) ? selection : [selection];
  return selection;
}
function zoomIn(widget: WellLogWidget) {
  widget.scale(5 / 4);
}

function zoomOut(widget: WellLogWidget) {
  widget.scale(4 / 5);
}

function fitToHeight(widget: WellLogWidget) {
  widget.fitToHeight();
}

export { fitToHeight, zoomIn, zoomOut };
</script>

<style scoped>
/* .top-bar {
    width: 800px;
    height: 50px;
    background-color: red;
    margin-bottom: 10px;
} */

.plot-well-log canvas {
  width: 100% !important;
  height: 100% !important;
  background-color: #000;
}

.active-track-indicator {
  display: inline-block;
  color: #67c23a;
  margin-left: 5px;
}
</style>
