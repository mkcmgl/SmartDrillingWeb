/**
 * @module geotoolkit/charts/BubbleChart
 */
import { DataSeries } from '@int/geotoolkit/data/DataSeries';
import { DataSeriesView } from '@int/geotoolkit/data/DataSeriesView';
import type { Merge } from '@int/geotoolkit/base';
import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import type { LabelLocation } from '@int/geotoolkit/controls/shapes/BubbleChart';
import { BubbleChart as ShapeBubbleChart } from '@int/geotoolkit/controls/shapes/BubbleChart';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { RegressionLine } from '@int/geotoolkit/controls/shapes/RegressionLine';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import { DataEvents } from '@int/geotoolkit/charts/DataEvents';
import type { DataSource } from '@int/geotoolkit/charts/DataSource';
import type { RegressionBase } from '@int/geotoolkit/controls/util/regression/RegressionBase';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { INumericalDataSeries } from '@int/geotoolkit/data/INumericalDataSeries';
import { AxisDimensionType } from '@int/geotoolkit/charts/AxisDimensionType';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Chart shape to display data as BubbleChart
 */
export declare class BubbleChart extends AbstractChart {
    /**
     * Chart shape to display data as BubbleChart
     * @param [options] chart options
     */
    constructor(options?: BubbleChart.Options);
    getSeriesInfo(id: string | AxisDimensionType): AbstractChart.Series | null;
    setProperties(options?: BubbleChart.Options): this;
    getProperties(): BubbleChart.OptionsOut;
    onDataUpdated(): this;
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: string[]): void;
}
export declare namespace BubbleChart {
    /**
     * chart options
     */
    type Options = AbstractChart.Options & Merge<ShapeBubbleChart.Options, {
        /**
         * chart series info
         */
        series?: {
            /**
             * x-values or x-data series identifier
             */
            x: number[] | string | AbstractChart.SeriesWithData;
            /**
             * y-values or y-data series identifier
             */
            y: number[] | string | AbstractChart.SeriesWithData;
            /**
             * z-values or z-data (color) series identifier
             */
            z?: number[] | string | AbstractChart.SeriesWithData;
            /**
             * s-values or s-data (size) series identifier
             */
            s?: number[] | string | AbstractChart.SeriesWithData;
        };
        /**
         * labels options
         */
        label?: {
            /**
             * label location
             */
            location?: LabelLocation;
            secondarylocation?: LabelLocation;
            /**
             * text style
             */
            textstyle?: TextStyle | TextStyle.Options | string;
            /**
             * visibility of labels
             */
            visible?: boolean;
            /**
             * padding
             */
            padding?: number;
        };
        /**
         * The colorProvider used to color points based on their Z value
         */
        colorprovider?: ColorProvider;
        /**
         * trend line options
         */
        trendline?: TrendLineOptions;
        /**
         * labels series or array of strings
         */
        labels?: DataSeries | DataSeriesView | string[];
    }>;
    type OptionsOut = AbstractChart.OptionsOut & {
        /**
         * line style
         */
        linestyle?: LineStyle;
        /**
         * fill style
         */
        fillstyle?: FillStyle;
        /**
         * chart series info
         */
        series: {
            /**
             * x-data series identifier
             */
            x: string | AbstractChart.Series;
            /**
             * y-data series identifier
             */
            y: string | AbstractChart.Series;
            /**
             * z-data (color) series identifier
             */
            z: string | AbstractChart.Series;
            /**
             * s-data (size) series identifier
             */
            s: string | AbstractChart.Series;
        };
        /**
         * The s minimum to use
         */
        mins?: number;
        /**
         * The s maximum to use
         */
        maxs?: number;
        /**
         * minimum size in pixels
         */
        minsize?: number;
        /**
         * maximum size in pixels
         */
        maxsize?: number;
        /**
         * The color provider used to color points based on their Z value
         */
        colorprovider?: ColorProvider;
    };
    /**
     * trend line options
     */
    type TrendLineOptions = RegressionLine.OptionsBase & {
        /**
         * regression model
         */
        model?: RegressionBase | RegressionBase.PredictFunction | typeof RegressionBase;
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
        /**
         * visibility of trend line
         */
        visible?: boolean;
        enable?: boolean;
        /**
         * x values
         */
        datax?: number[] | INumericalDataSeries;
        /**
         * y values
         */
        datay?: number[] | INumericalDataSeries;
    };
}
