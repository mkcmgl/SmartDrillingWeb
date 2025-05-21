/**
 * @module geotoolkit/controls/shapes/LineChart
 */
import { DataSeries } from '@int/geotoolkit/data/DataSeries';
import type { Merge } from '@int/geotoolkit/base';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { Point } from '@int/geotoolkit/util/Point';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { INumericalDataSeries } from '@int/geotoolkit/data/INumericalDataSeries';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Group } from '@int/geotoolkit/scene/Group';
import { Grid } from '@int/geotoolkit/axis/Grid';
import { IChartDataVisual } from '@int/geotoolkit/controls/shapes/IChartDataVisual';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { DataSeriesView } from '@int/geotoolkit/data/DataSeriesView';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { OptimizationType } from '@int/geotoolkit/util/OptimizationType';
/**
 * @deprecated since 4.0, use @int/geotoolkit/util/OptimizationType instead
 */
export { OptimizationType };
/**
 * Enum of Data-Interpolation type for stacked area
 * @enum
 * @readonly
 */
export declare enum DataInterpolationType {
    /**
     * Interpolate as 0 for missing points
     */
    InterpolateZero = "InterpolateZero",
    /**
     * Interpolate as Null for missing points
     */
    InterpolateNull = "InterpolateNull",
    /**
     * Apply linear interpolation for missing points
     */
    InterpolateMissingValues = "InterpolateMissingValues"
}
/**
 * The Line Chart is a chart that displays data with lines. <br>
 * Line Chart can display data with several curve types: <br>
 * - Linear - A simple polyline <br>
 * - Spline - Spline (Bezier) <br>
 * - Logscale - logarithmic <br>
 * It can be further customized by using the options in the constructor.
 * @example
 * // Creating a simple line chart. (X values are shared for the chart )
 * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
 * const x = [0, 2, 4, 6, 8, ...];
 * const y = [
 *      [10, 53.3022600566037, 40.79461201233789, 53.4218930513598, ...],
 *      [1000, 642.6507126996294, 696.8659508964047, 618.771930876188, ...]
 * ];
 * const linechart = new LineChart({
 *   'x': x,
 *   'y': y,
 *   'linestyles': [...],
 *   'series': [{
 *      'visible': true
 *   }]
 * });
 * return lineChart;
 *
 * // To draw a Line Chart but not display the gridlines user can do the following:
 * linechart.getGrid().setVisible(false);
 *
 * // or use Css
 * linechart.setCss(new CssStyle({'css': '.geotoolkit.axis.Grid { visible: false;}' }));
 */
export declare class LineChart extends Group implements IChartDataVisual {
    /**
     * Create LineChart
     * @param [options] array of X coordinates or parameters object
     * @param [y] array of Y coordinates
     * @param [lineStyles] Line styles to apply to curves
     * @param [bounds] bounds or position on the chart
     * @param [spline] smooth the curve or not
     * @param [logscale] use log scale or not
     * @param [fillStyles] Fill Styles
     * @param [baseLine] Y value of a horizontal line which will define the base line for fill
     * @param [stackedarea] use to determine if stacked area or not
     * @param [percentarea] use to determine if percent area of not
     * @param [arearange] Defines Area Range
     * @param [series] Defines the visibility of linechart series. By default it's true
     */
    constructor(options?: LineChart.Options | INumericalDataSeries[] | number[] | number[][], y?: number[][], lineStyles?: LineStyle[], bounds?: Rect, spline?: boolean, logscale?: boolean | {
        y?: boolean;
        x?: boolean;
    }, fillStyles?: FillStyle[], baseLine?: number, stackedarea?: boolean, percentarea?: boolean, arearange?: LineChart.AreaRange, series?: {
        visible?: boolean;
    }[]);
    /**
     * Sets optimization type
     * @param optimizationType optimization type which used with current line
     * @returns this
     */
    setOptimizationType(optimizationType: OptimizationType): this;
    /**
     * Turns on/off optimization for line
     * @param [needOptimization] Is optimization for line on
     * @returns this
     */
    setOptimization(needOptimization?: boolean): this;
    /**
     * Turns on/off optimization for symbols
     * @param [needOptimize] Is optimization for symbols on
     * @returns this
     */
    setOptimizationSymbol(needOptimize?: boolean): this;
    /**
     * Return the current chart setting
     */
    getData(): LineChart.DataModel;
    /**
     * Set the data to be plotted in the line chart.
     * @param data data
     * @returns this
     */
    setData(data: Partial<LineChart.DataModel>): this;
    /**
     * Sets options
     * @param options An object containing the properties to set, see {@link import("geotoolkit/controls/shapes/LineChart").LineChart.setProperties}
     * @returns this
     */
    setOptions(options: LineChart.Options): this;
    /**
     * Gets visual options for the chart
     */
    getOptions(): LineChart.OptionsBaseOut;
    /**
     * Gets model limits, the limits of this groups inside space
     *
     * @returns the current model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Sets inner model limits and it sets autodatalimits to false
     *
     * @param limits inner limits
     * @returns this
     */
    setModelLimits(limits: Rect): this;
    /**
     * Set grid line styles
     */
    setGridStyle(tickStyles?: {
        x?: {
            major?: LineStyle.Type;
            minor?: LineStyle.Type;
            edge?: LineStyle.Type;
        };
        y?: {
            major?: LineStyle.Type;
            minor?: LineStyle.Type;
            edge?: LineStyle.Type;
        };
    }): this;
    /**
     * Return embedded gridlines
     */
    getGrid(): Grid;
    /**
     * Hit test in the device coordinate. This method checks if any point is inside the area and shape
     * intersects area.
     * @param area model area or position
     * @param [radius] radius of selection
     * @param [ignoreOrientation] Orientation to ignore - this parameter is ignored for arrays of points
     * @returns a collection of objects
     */
    hitTest(area: Rect | Point, radius?: number, ignoreOrientation?: Orientation): LineChart.Hits;
    /**
     * Returns flag to indicate automatic calculation of data limits
     */
    getAutoDataLimits(): boolean;
    /**
     * Sets a flag to indicate automatic calculation of data limits
     * @param enable enable or disable calculation of the data limits
     * @returns this
     */
    setAutoDataLimits(enable: boolean): this;
    /**
     * Return original data limits
     */
    getDataLimits(): Rect;
    /**
     * Gets all the properties pertaining to this object
     * @returns options
     */
    getProperties(): LineChart.OptionsOut;
    /**
     * Sets visual options for the chart
     * @param [properties] options
     * @returns this
     */
    setProperties(properties?: LineChart.Options): this;
    /**
     * Sets the value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero.
     * @param cutoff The cutoff value. When non zero is set
     * @returns this
     */
    setGapFillCutoffValue(cutoff: number): this;
    /**
     * Returns the value of the cutoff used for removing NaN valued samples
     * @returns The cutoff value
     */
    getGapFillCutoffValue(): number;
    /**
     * Set the value of the gap. Value will be used to disconnect the sample if the distance between two samples in x axis is more than specified value
     * @param value The maximum discontinuity allowed in x axis
     * @returns this
     */
    setGapValue(value: number): this;
    /**
     * Returns The maximum discontinuity allowed in x axis
     * @returns value
     */
    getGapValue(): number;
}
export declare namespace LineChart {
    /**
     * array of X coordinates or parameters object
     */
    type Options = Group.Options & Partial<DataModel> & {
        /**
         * boolean flag that specify cache usage
         */
        cache?: boolean;
        /**
         * model limits of chart. if it is not set then model limits are calculated.
         */
        modellimits?: Rect;
        /**
         * bounds or position on the chart
         */
        bounds?: Rect;
    };
    /**
     * The area range definition.
     */
    type AreaRange = {
        /**
         * Defines upper bound range and lowerbound range
         */
        range?: number[][] | INumericalDataSeries[] | number[];
        /**
         * Linestyles for area range series
         */
        linestyles?: LineStyle.Type[];
        /**
         * fillstyle to apply between ranges
         */
        fillstyle?: FillStyle.Type;
    };
    type DataModel = {
        size: number;
        logscale: boolean | {
            y: boolean;
            x: boolean;
        };
        datainterpolationstrategy: DataInterpolationType;
        autodatalimits: boolean;
        /**
         * array of X coordinates
         */
        x: number[] | number[][] | INumericalDataSeries[] | INumericalDataSeries;
        /**
         * array of Y coordinates
         */
        y: number[] | number[][] | INumericalDataSeries[];
        /**
         * Line styles to apply to curves
         */
        linestyles: LineStyle.Type[];
        /**
         * Fill styles to apply to curves
         */
        fillstyles: FillStyle.Type[];
        /**
         * A base line for the fill
         */
        baseline: number;
        /**
         * value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero.
         */
        gapfillcutoffvalue: number;
        /**
         * Maximum value will be used to disconnect the sample if the distance between two samples in x axis is more than specified value
         */
        gapvalue: number;
        symbols: {
            decimate?: boolean;
            /**
             * Symbols width, for all series
             */
            width?: number;
            /**
             * Symbols height, for all series
             */
            height?: number;
            /**
             * Symbols dimensions, for each one series
             */
            dimensions?: Dimension[];
            /**
             * Flag that determines if symbols must keep device size
             */
            sizeisindevicespace?: boolean;
            /**
             * painters for series. Nulls are acceptable if a series should not have a symbols
             */
            painters?: SymbolShape.Painter[];
            /**
             * Number of steps at which symbol should be displayed, for all series
             */
            step?: number;
            /**
             * define visibility of the symbols
             */
            visible?: boolean | boolean[];
            /**
             * Defines series symbols line styles
             */
            linestyles?: LineStyle.Type[];
            /**
             * Defines series symbols fill styles
             */
            fillstyles?: FillStyle.Type[];
        };
        /**
         * set visible the gridlines
         */
        gridvisible?: boolean;
        /**
         * Defines if chart is stacked area chart
         */
        stackedarea?: boolean;
        /**
         * Defines if chart is percene area chart
         */
        percentarea?: boolean;
        /**
         * Defines Area Range
         */
        arearange?: AreaRange[];
        /**
         * labels for linechart points
         */
        labels?: {
            /**
             * text margin for label in x-direction
             */
            offsetx?: number;
            /**
             * text margin for label in y-direction
             */
            offsety?: number;
            /**
             * annotations for linechart points, if not specified y value of linechart will be displayed
             */
            annotations?: number[][] | string[][] | DataSeries[] | DataSeriesView[];
            /**
             * textstyles for label
             */
            textstyles?: TextStyle[];
            /**
             * fillstyles for label
             */
            fillstyles?: FillStyle[];
            /**
             * linestyles for label
             */
            linestyles?: LineStyle[];
            /**
             * show ellipses for textstyle
             */
            showellipsis?: boolean;
        };
        /**
         * returns the visibility of line chart series
         */
        series?: {
            visible?: boolean;
        }[];
        /**
         * true to display spline chart instead of polyline
         */
        spline: boolean;
    };
    type OptionsBaseOut = {
        /**
         * curve linestyles
         */
        linestyles?: LineStyle.Type[];
        /**
         * curve fillstyles
         */
        fillstyles?: FillStyle.Type[];
        /**
         * A base line for the fill
         */
        baseline?: number;
        /**
         * Maximum value will be used to disconnect the sample if the distance between two samples in x axis is more than specified value
         */
        gapvalue?: number;
        /**
         * Spline or polygon path
         */
        spline?: boolean;
        /**
         * automatic model limits calculation
         */
        autodatalimits?: boolean;
        /**
         * model limits of chart. if it is not set then model limits are calculated.
         */
        modellimits?: Rect;
        /**
         * Defines the visibility of linechart series. By default it's true
         */
        series?: {
            visible?: boolean;
        }[];
        /**
         * Symbols definition for data series. This object may contain definition for more than one series
         */
        symbols?: {
            /**
             * Symbols width, for all series
             */
            width?: number;
            /**
             * Symbols height, for all series
             */
            height?: number;
            /**
             * Symbols dimensions for each one series
             */
            dimensions?: Dimension[];
            /**
             * Flag that determines if symbols must keep device size,
             */
            sizeisindevicespace?: boolean;
            /**
             * painters for series. Nulls are acceptable if a series should not have a symbols
             */
            painters?: SymbolShape.Painter[];
            /**
             * Number of steps at which symbol should be displayed, for all series
             */
            step?: number;
            /**
             * visibility of the symbols
             */
            visible?: boolean | boolean[];
            /**
             * Series symbols line styles
             */
            linestyles?: LineStyle[];
            /**
             * Series symbols fill styles
             */
            fillstyles?: FillStyle[];
        };
        /**
         * labels for linechart points
         */
        labels?: {
            /**
             * Number of steps at which label should be displayed, for all series
             */
            step?: number;
            /**
             * text padding in pixel for label
             */
            padding?: number;
            /**
             * text margin in pixel for label in x-y-direction (in device space) calculated automatically according label anchor
             */
            offset?: number;
            /**
             * text margin for label in x-direction
             */
            offsetx?: number;
            /**
             * text margin for label in y-direction
             */
            offsety?: number;
            /**
             * text anchor type for label (in device space)
             */
            anchor?: AnchorType;
            /**
             * annotations for linechart points, if not specified y value of linechart will be displayed
             */
            annotations?: number[][] | string[][] | DataSeries[] | DataSeriesView[];
            /**
             * textstyles for labels
             */
            textstyles?: TextStyle[];
            /**
             * fillstyles for labels
             */
            fillstyles?: FillStyle[];
            /**
             * linestyles for labels
             */
            linestyles?: LineStyle[];
            /**
             * show ellipses for textstyle
             */
            showellipsis?: boolean;
        };
    };
    type Hits = {
        series: number;
        indices: number[];
        points: {
            index: number;
            x: number;
            y: number;
            y1: number[] | number;
        }[];
    }[];
    /**
     * options
     */
    type OptionsOut = Merge<Group.OptionsOut, OptionsBaseOut>;
}
