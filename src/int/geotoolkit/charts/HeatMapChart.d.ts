import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import type { PlotType } from '@int/geotoolkit/controls/shapes/HeatMap';
import type { DataSource } from '@int/geotoolkit/charts/DataSource';
import { AxisDimensionType } from '@int/geotoolkit/charts/AxisDimensionType';
import type { DataEvents } from '@int/geotoolkit/charts/DataEvents';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
/**
 * Chart shape to display data as HeatMapChart
 */
export declare class HeatMapChart extends AbstractChart {
    /**
     * Chart shape to display data as HeatMapChart
     * @param [options] chart options
     */
    constructor(options?: HeatMapChart.Options);
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: string[]): void;
    setProperties(options?: HeatMapChart.Options): this;
    getProperties(): HeatMapChart.OptionsOut;
    getSeriesInfo(id: string | AxisDimensionType): AbstractChart.Series | null;
}
export declare namespace HeatMapChart {
    /**
     * chart options
     */
    type Options = AbstractChart.Options & {
        /**
         * chart series info
         */
        series?: {
            /**
             * x-data series identifier for x-dimension annotations
             */
            x?: string | number[] | AbstractChart.Series;
            /**
             * y-data series identifier for y-dimension annotations
             */
            y?: string | number[] | AbstractChart.Series;
            /**
             * z-data series identifier for color-dimension values. Should have X*Y values, where X is number of columns
             * and Y is number of rows for the heatmap values table.
             */
            z?: string | number[] | AbstractChart.Series;
        };
        /**
         * Rows length for the heatmap values table to be used instead of the x-series length (if needed). Columns size
         * is calculated automatically as (z-series length / rowsize);
         */
        rowsize?: number;
        /**
         * plot type of column
         */
        colplottype?: PlotType;
        /**
         * plot type of row
         */
        rowplottype?: PlotType;
        /**
         * minimum value limit in data source
         */
        min?: number;
        /**
         * maximum value limit in data source
         */
        max?: number;
        /**
         * offset of x axis
         */
        offsetx?: number | number[];
        /**
         * offset of y axis
         */
        offsety?: number | number[];
        /**
         * options for labels
         */
        labels?: {
            /**
             * visibility of labels
             */
            visible?: boolean;
            /**
             * of labels
             */
            textstyle?: TextStyle;
        };
        /**
         * The colorProvider used to color points based on their Z value
         */
        colorprovider?: ColorProvider;
    };
    type OptionsOut = AbstractChart.OptionsOut & {
        /**
         * chart series info
         */
        series: {
            /**
             * x-data series identifier
             */
            x: AbstractChart.Series;
            /**
             * y-data series identifier
             */
            y: AbstractChart.Series;
            /**
             * z-data (color) series identifier
             */
            z: AbstractChart.Series;
        };
        /**
         * Rows length for the heatmap values table to be used instead of the x-series length (if needed). Columns size
         * is calculated automatically as (z-series length / rowsize);
         */
        rowsize: number;
        /**
         * plot type of column
         */
        colplottype: PlotType;
        /**
         * plot type of row
         */
        rowplottype: PlotType;
        /**
         * minimum value limit in data source
         */
        min: number;
        /**
         * maximum value limit in data source
         */
        max: number;
        /**
         * offset of x axis
         */
        offsetx: number | number[];
        /**
         * offset of y axis
         */
        offsety: number | number[];
        /**
         * options for labels
         */
        labels: {
            /**
             * visibility of labels
             */
            visible?: boolean;
            /**
             * of labels
             */
            textstyle?: TextStyle;
        };
    };
}
