<template>
    <div>
        <!-- <div class="top-bar"></div> -->
        <canvas ref="plotContainer" style="width: 100%; height: 100%"> </canvas>
    </div>

</template>
<script lang="ts">
import { Plot } from '@int/geotoolkit/plot/Plot';
import { Grid } from '@int/geotoolkit/axis/Grid';
import { AdaptiveTickGenerator } from '@int/geotoolkit/axis/AdaptiveTickGenerator';
import { ViewCache } from '@int/geotoolkit/scene/ViewCache';
import { Group } from '@int/geotoolkit/scene/Group';
import { LineChart } from '@int/geotoolkit/controls/shapes/LineChart';
import { Events as AxisDimensionEvents } from '@int/geotoolkit/axis/AxisDimension';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { LabelPosition, TickPosition } from '@int/geotoolkit/axis/TickInfo';
import { Axis } from '@int/geotoolkit/axis/Axis';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { AxisMappingDimension } from '@int/geotoolkit/axis/AxisMappingDimension';
import { ChartWidget } from '@int/geotoolkit/charts/widgets/ChartWidget';
import { DataTable } from '@int/geotoolkit/data/DataTable';
import { DataSource } from '@int/geotoolkit/charts/DataSource';
import { KnownColors } from '@int/geotoolkit/util/ColorUtil';
import { ChartType } from '@int/geotoolkit/charts/ChartType';
import { Rect } from '@int/geotoolkit/util/Rect';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { CssStyle } from '@int/geotoolkit/css/CssStyle';

import { defineComponent, onMounted, ref } from 'vue';

const dataLimits = new Rect(-480, -500, 480, 500);
const plot2D = ref<Plot | null>(null);
const dataTable = new DataTable({
    'cols': [
        { 'id': 'x-data', 'type': 'number' },
        { 'id': 'y-data', 'type': 'number' },
    ]
});


export default defineComponent({
    name: 'Plot2D',

    setup(_, { expose }) {
        const plotContainer = ref<HTMLCanvasElement | null>(null);
        const createPlot2D = () => {
            initialize();
            InsertData();
        };

        const InsertSampleData = () => {
            const data1 = [];
            const n = 500;
            const step = dataLimits.getWidth() / n;
            const amp = (dataLimits.getHeight()) / 2;
            const multiplier = 50 / n;
            const beta = 3.0 / n;
            const x = [], y = [];
            for (let i = 0; i < n; ++i) {
                x[i] = dataLimits.getX() + i * step;
                y[i] = (amp * Math.exp(-beta * i)) * Math.sin(multiplier * i);
                data1.push([x[i], y[i]]);
            }

            dataTable.addRows(data1);

        };

        const InsertData = (x:number[], y:number[]) => {
            if (!x || !y ) {
                return;
            }
            if (x.length != y.length ) {
                return;
            }
            const xyData = [];
            for (let i = 0; i < x.length; ++i) {
                xyData.push([x[i], y[i]]);
            }
            dataTable.addRows(xyData);
        };

        const initialize= () =>  {
            // Create a model
            //const model = createModel();
            // Create a widget to display a model
            const widget = createWidget();
            // Get the canvas as a DOM object
            console.log("plotContainer", plotContainer.value);
           
            const canvas = plotContainer.value;//document.getElementById('canvas1');
            // Create a new Plot object from the canvas and group
            plot2D.value = new Plot({
                'canvasElement': canvas,
                'root': widget
            });
            return plot2D.value;
        }

        onMounted(() => {
            // initialize();

        });

        expose({
            createPlot2D,
            InsertData,
            InsertSampleData
        });

        return {
            plotContainer
        };
    }
});

function createWidget() {

    // Create a XY widget with two axes
    let axisSouth, axisWest;
    // Create space to calculate nice model limits and step for vertical direction
    // This step is needed only for automatic model limits and step
    const verticalSpace = new AxisMappingDimension({ 'neatlimits': true });
    const widget = new ChartWidget({
        'data': new DataSource(dataTable),
        'tooltip': {
            'autoflip': true,
            'alignment': AnchorType.LeftCenter,
            'offsetx': 15,
            'offsety': 15
        },
        'axes': {
            'x-axis': {
                'location': AnnotationLocation.South,
                'labels': 'year2010:months'
            },
            'y-axis': {
                'location': AnnotationLocation.West,
                'dimension': {
                    'neatlimits': true
                },
                'title': {
                    'text': 'Temperature (℉)',
                    'textstyle': '#757575'
                }
            }
        }
    });

    widget.addChart({
        'type': ChartType.LineChart,
        'name': 'LineChart',
        'series': {
            'x': {
                'data': 'x-data',
                'name': 'Month',
            },
            'y': {
                'data': 'y-data',
                'name': 'Temperature',
            }
        },
        'spline': true,
        'axes': {
            'x': 'x-axis',
            'y': 'y-axis'
        }
    });
    widget.setCss(new CssStyle({
        'css': '*[cssclass="linechart-series"]:hover { linestyle-width: 4;}' // adjust styles via css
    }));
    return widget;
}



function createLineChart(x: any, y: any) {
    const lineChart = new LineChart({
        'x': x,
        'y': y,
        'linestyles': ['#0a6aa1'],
        'gridvisible': false
    });
    lineChart.setBounds(lineChart.getModelLimits());
    return lineChart;
}





</script>

<style>
/* .top-bar {
    width: 800px;
    height: 50px;
    background-color: red;
    margin-bottom: 10px;
} */
</style>
