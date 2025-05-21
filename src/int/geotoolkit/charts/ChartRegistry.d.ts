import { ChartType } from '@int/geotoolkit/charts/ChartType';
import { LineChart } from '@int/geotoolkit/charts/LineChart';
import { AreaChart } from '@int/geotoolkit/charts/AreaChart';
import { AreaRangeChart } from '@int/geotoolkit/charts/AreaRangeChart';
import { BarChart } from '@int/geotoolkit/charts/BarChart';
import { BubbleChart } from '@int/geotoolkit/charts/BubbleChart';
import { CrossPlotChart } from '@int/geotoolkit/charts/CrossPlotChart';
import { DonutChart } from '@int/geotoolkit/charts/DonutChart';
import { HistogramChart } from '@int/geotoolkit/charts/HistogramChart';
import { TornadoChart } from '@int/geotoolkit/charts/TornadoChart';
import { HeatMapChart } from '@int/geotoolkit/charts/HeatMapChart';
import { BoxPlotChart } from '@int/geotoolkit/charts/BoxPlotChart';
import { DensityContourChart } from '@int/geotoolkit/charts/DensityContourChart';
import { RegressionLine } from '@int/geotoolkit/charts/RegressionLine';
import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
/**
 * This class provides registry of charts (geotoolkit.charts.AbstractChart).
 */
export declare class ChartRegistry {
    constructor();
    /**
     * Register chart in registry
     * @param type chart type
     * @param Chart chart class
     * @returns this
     */
    register(type: ChartType, Chart: new (options?: ChartRegistry.ChartOptions) => AbstractChart): this;
    /**
     * Creates chart with given type and options
     * @param options chart options
     */
    createChart(options: ChartRegistry.ChartOptions): AbstractChart | null;
    /**
     * Returns the default registry instance
     */
    static getInstance(): ChartRegistry;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace ChartRegistry {
    type ChartOptions = (LineChart.Options & {
        type?: ChartType.LineChart;
    }) | (AreaChart.Options & {
        type?: ChartType.AreaChart;
    }) | (AreaRangeChart.Options & {
        type?: ChartType.AreaRangeChart;
    }) | (BarChart.Options & {
        type?: ChartType.BarChart;
    }) | (BarChart.Options & {
        type?: ChartType.FloatingBarChart;
    }) | (BubbleChart.Options & {
        type?: ChartType.BubbleChart;
    }) | (CrossPlotChart.Options & {
        type?: ChartType.CrossPlotChart;
    }) | (DonutChart.Options & {
        type?: ChartType.DonutChart;
    }) | (DonutChart.Options & {
        type?: ChartType.PieChart;
    }) | (HistogramChart.Options & {
        type?: ChartType.HistogramChart;
    }) | (BoxPlotChart.Options & {
        type?: ChartType.BoxPlotChart;
    }) | (HeatMapChart.Options & {
        type?: ChartType.HeatMapChart;
    }) | (DensityContourChart.Options & {
        type?: ChartType.DensityContourChart;
    }) | (RegressionLine.Options & {
        type?: ChartType.RegressionLine;
    }) | (TornadoChart.Options & {
        type?: ChartType.TornadoChart;
    });
}
