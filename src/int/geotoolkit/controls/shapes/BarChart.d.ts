import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { SeriesElementInfo } from '@int/geotoolkit/controls/data/SeriesElementInfo';
import { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { Group } from '@int/geotoolkit/scene/Group';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { Point } from '@int/geotoolkit/util/Point';
import { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Enum for BarChart.BarMode
 * @enum
 * @readonly
 */
export declare enum BarMode {
    /**
     * Default
     */
    Default = "Default",
    /**
     * Stacked
     */
    Stacked = "Stacked",
    /**
     * Float
     */
    Float = "Float"
}
/**
 * Enum for BarChart.DataMode
 * @enum
 * @readonly
 */
export declare enum DataMode {
    /**
     * Associative
     */
    Associative = "Associative",
    /**
     * Single
     */
    Single = "Single"
}
/**
 * Enum for BarChart.BarValueLocation
 * @enum
 * @readonly
 */
export declare enum BarValueLocation {
    /**
     * TopOutside
     */
    TopOutside = "TopOutside",
    /**
     * TopInside
     */
    TopInside = "TopInside",
    /**
     * BottomInside
     */
    BottomInside = "BottomInside",
    /**
     * Center
     */
    Center = "Center"
}
/**
 * Enum for BarChart.Orientation
 * @enum
 * @readonly
 */
export declare enum Orientation {
    /**
     * Bottom
     */
    Bottom = "Bottom",
    /**
     * Left
     */
    Left = "Left",
    /**
     * Top
     */
    Top = "Top",
    /**
     * Right
     */
    Right = "Right"
}
/**
 * @enum
 * @readonly
 */
declare enum PropertyStyle {
    /**
     * fill styles
     */
    FillStyles = "fillstyles",
    /**
     * line styles
     */
    LineStyles = "linestyles",
    /**
     * selected fill styles
     */
    SelectedFillStyles = "selected-fillstyles",
    /**
     * selected line styles
     */
    SelectedLineStyles = "selected-linestyles"
}
/**
 * A bar chart is a chart that uses either horizontal or vertical bars to show comparisons among categories. <br>
 * One axis of the chart shows the specific categories being compared, and the other axis represents a discrete value. <br>
 * Display Modes and Styles can be selected based on the Enum. <br>
 * geotoolkit.controls.shapes.BarChart is used internally by the {@link @int/geotoolkit/widgets/BarChartWidget~BarChartWidget}
 */
export declare class BarChart extends Group {
    constructor(options?: BarChart.Options, data?: BarChart.Data);
    /**
     * Sets data to display
     *
     * @param data data object
     * @returns this
     */
    setData(data: BarChart.Data): this;
    /**
     * Whether BarChart has data initialized
     * @returns True if BarChart has data initialized, false otherwise
     */
    hasData(): boolean;
    /**
     * Set data series visibility
     * @param series Visibility of series
     * @returns this
     */
    setDataSeriesVisible(series: {
        visible?: boolean;
    }[]): this;
    /**
     * Get data series visibility
     * @returns series Visibility of series
     */
    getDataSeriesVisible(): {
        visible: boolean;
    }[];
    /**
     * Sets shape options
     *
     * @param options options object
     * @returns this
     * @example
     * // How to use 'barstyles':
     *
     * // Example 1 - no specific negative styles, no selected styles (simplest case):
     * 'barstyles': [
     * // "Element1" styles:
     * {
     *    'linestyles': myElement1LineStyle,
     *    'fillstyles': myElement1FillStyle,
     * },
     * // "Element2" styles:
     * {...},
     * // so on:
     * ...
     * ],
     *
     * // Example 2 - positive and negative styles, no selected styles:
     * 'barstyles': [
     * // "Element1" styles:
     * {
     *    'linestyles': [myElement1PositiveLineStyle, myElement1NegativeLineStyle]
     *    'fillstyles': [myElement1PositiveFillStyle, myElement1NegativeFillStyle]
     * },
     * // "Element2" styles:
     * {...},
     * // so on:
     * ...
     * ],
     *
     * // Example 3 - non-selected ("regular") and selected styles:
     * 'barstyles': [
     * // "Element1" styles:
     * {
     *    'linestyles': myElement1NonSelectedLineStyle,
     *    'fillstyles': myElement1NonSelectedFillStyle,
     *    'selected-linestyles': myElement1SelectedLineStyle,
     *    'selected-fillstyles': myElement1SelectedFillStyle,
     * },
     * // "Element2" styles:
     * {...},
     * // so on:
     * ...
     * ],
     *
     * // Example 4 - Disable bar chart 2nd series
     * 'series': [
     *      {'visible': true},
     *      {'visible': false},
     *      {'visible': true}
     * ]
     */
    setOptions(options: BarChart.OptionsBase): this;
    /**
     * Return shape options
     *
     * @returns options object
     */
    getOptions(): BarChart.OptionsBaseOut;
    /**
     * Calculates minimal neat limit based on input limits
     * (see {@link import("geotoolkit/util/MathUtil").MathUtil.calculateNeatLimits} for more info)
     *
     * @param minValue min value to create neat limits from
     * @param maxValue max value to create neat limits from
     * @returns minimal neat limit
     */
    static getNeatMinValue(minValue: number, maxValue: number): number;
    /**
     * Calculates maximal neat limit based on input limits
     * (see {@link import("geotoolkit/util/MathUtil").MathUtil.calculateNeatLimits} for more info)
     *
     * @param minValue min value to create neat limits from
     * @param maxValue max value to create neat limits from
     * @returns maximal neat limit
     */
    static getNeatMaxValue(minValue: number, maxValue: number): number;
    /**
     * Get data limits
     * @returns Data limits
     */
    getDataLimits(): Rect;
    /**
     * Select elements at specified canvas coordinates
     *
     * @param x x-ordinate OR `{x,y}`-coordinates
     * @param [y] y-ordinate
     * @param [highlight] highlight selected elements
     * @returns array of {@link @int/geotoolkit/controls/data/SeriesElementInfo~SeriesElementInfo} selected bars
     */
    selectBarsAt(x: number | Point, y?: number, highlight?: boolean): SeriesElementInfo[];
    /**
     * Hit test in the device coordinate
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of selected data
     */
    hitTest(area: Rect | Point, radius?: number): SeriesElementInfo[];
    /**
     * Gets value of sample
     * @param series series id
     * @param sample sample id
     * @returns a value of sample for the specified series
     */
    getValueAt(series: number, sample: number): number | number[] | null;
    /**
     * Highlight specified bars
     *
     * @param bars array of {@link @int/geotoolkit/controls/data/SeriesElementInfo~SeriesElementInfo} bars to highlight
     * @param [append] append or replace flag
     * @returns this
     */
    highlightBars(bars: SeriesElementInfo[], append?: boolean): this;
    /**
     * set format handler for labels
     * @param handler format handler
     * @example
     * <caption> acceptable parameters for handler function </caption>
     * text `{string}`: current text that already fixed by value precision
     * groupId `{number}`: the index of current data series
     * itemId `{number}`: the index of the data in the current data series
     * value `{number}`: raw value in data series
     * @example
     * // The example simply show how to control the text content by value </caption>
     * // For data series [[1,2,3][2,3,4]], the following example return '3+' when value is more than 2
     * barchart.setFormatLabelHandler(
     *      (text: string, groupId?: number, id?: number, value?: number) => {
     *          if(value > 2)
     *              return '3+';
     *          else return value;
     *      });
     * @returns this
     */
    setFormatLabelHandler(handler: BarChart.FormatLabelHandler): this;
    /**
     * Render value and symbol
     * @param context rendering context
     * @param rectInfo ?
     * @param groupId group id
     * @param itemId item id
     */
    protected renderValueAndSymbol(context: RenderingContext, rectInfo: number[], groupId: number, itemId: number): void;
    /**
     * Whether barvalues only show total value only
     * @returns True if barvalues will only show total values, False otherwise
     */
    protected isShowTotalOnly(): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns options object
     */
    getProperties(): BarChart.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties options object
     * @returns this
     */
    setProperties(properties?: BarChart.Options): this;
}
export declare namespace BarChart {
    export type Options = Group.Options & {
        /**
         * symbol
         */
        symbol?: SymbolShape.Options;
        /**
         * array of barstyles
         */
        barstyles?: BarStylesTypes[];
        /**
         * value limits parameters
         */
        valuelimits?: {
            /**
             * min value to set
             */
            minvalue?: number | ValueCallback;
            /**
             * max value to set
             */
            maxvalue?: number | ValueCallback;
        };
        /**
         * value limits for bars positions data
         */
        positionlimits?: {
            /**
             * min value to for bars positions data
             */
            minvalue?: number;
            /**
             * max value to for bars positions data
             */
            maxvalue?: number;
        };
        /**
         * use neatlimits flag
         */
        neatlimits?: boolean;
        /**
         * bar values parameters
         */
        barvalues?: BarValues;
        /**
         * orientation of the chart
         */
        orientation?: Orientation;
        /**
         * Bar display mode of the chart
         */
        barmode?: BarMode;
        /**
         * width of the bars
         */
        barwidth?: number;
        /**
         * padding between the datasets
         */
        barpad?: number;
        /**
         * maximum width of bar in device space
         */
        barmaxwidth?: number;
        /**
         * enables auto gradient of the bars
         */
        autogradient?: boolean;
        /**
         * missing value verification criteria; default is `function(value){ return (value===null); }`
         */
        ismissingvalue?: IsMissingValue;
        /**
         * method to create selected style based on "regular" one
         */
        createselectedstyle?: CreateSelectedStyle;
        /**
         * Enable/disable specific bar chart series
         */
        series?: {
            /**
             * visibility
             */
            visible?: boolean;
        }[];
    };
    /**
     * data object
     */
    export type Data = {
        /**
         * append/replace flag
         */
        append?: boolean;
        /**
         * Data mode for the barchart
         */
        mode?: DataMode;
        /**
         * Array of Values for non-float and Array of Array(2) Values for float charts
         */
        datasets?: DataSeries[];
        /**
         * Visibility of series
         */
        series?: {
            /**
             * visibility
             */
            visible?: boolean;
        }[];
        /**
         * Array of data determines bars positions
         */
        positions?: number[] | NumericalDataSeries;
    };
    /**
     * options object
     */
    export type OptionsBase = {
        /**
         * array of barstyles (see example below)
         */
        barstyles?: BarStylesTypes[];
        /**
         * value limits parameters
         */
        valuelimits?: {
            /**
             * min value to set
             */
            minvalue?: number | ValueCallback;
            /**
             * max value to set
             */
            maxvalue?: number | ValueCallback;
        };
        /**
         * value limits for bars positions data
         */
        positionlimits?: {
            /**
             * min value to for bars positions data
             */
            minvalue?: number;
            /**
             * max value to for bars positions data
             */
            maxvalue?: number;
        };
        /**
         * use neatlimits flag
         */
        neatlimits?: boolean;
        /**
         * bar values parameters
         */
        barvalues?: BarValues;
        /**
         * orientation of the chart
         */
        orientation?: Orientation;
        /**
         * Bar display mode of the chart
         */
        barmode?: BarMode;
        /**
         * width of the bars
         */
        barwidth?: number;
        /**
         * padding between the datasets
         */
        barpad?: number;
        /**
         * maximum width of bar in device space
         */
        barmaxwidth?: number;
        /**
         * enables auto gradient of the bars
         */
        autogradient?: boolean;
        /**
         * missing value verification criteria; default is `function(value){ return (value===null); }`
         */
        ismissingvalue?: IsMissingValue;
        /**
         * method to create selected style based on "regular" one
         */
        createselectedstyle?: CreateSelectedStyle;
        /**
         * Enable/disable specific bar chart series
         */
        series?: {
            /**
             * visibility
             */
            visible?: boolean;
        }[];
        /**
         * Options for symbols on top of each bar (see {@link import("geotoolkit/scene/shapes/SymbolShape").SymbolShape.setProperties} for detail)
         */
        symbol?: SymbolShape.Options;
    };
    /**
     * options object
     */
    export type OptionsBaseOut = {
        /**
         * array of barstyles
         */
        barstyles?: BarStylesTypes[];
        /**
         * value limits parameters
         */
        valuelimits?: {
            /**
             * min value to set
             */
            minvalue?: number | ValueCallback;
            /**
             * max value to set
             */
            maxvalue?: number | ValueCallback;
        };
        /**
         * value limits for bars positions data
         */
        positionlimits?: {
            /**
             * min value to for bars positions data
             */
            minvalue?: number;
            /**
             * max value to for bars positions data
             */
            maxvalue?: number;
        };
        /**
         * use neatlimits flag
         */
        neatlimits?: boolean;
        /**
         * bar values parameters
         */
        barvalues?: BarValues;
        /**
         * orientation of the chart
         */
        orientation?: Orientation;
        /**
         * Bar display mode of the chart
         */
        barmode?: BarMode;
        /**
         * width of the bars
         */
        barwidth?: number;
        /**
         * padding between the datasets
         */
        barpad?: number;
        /**
         * maximum width of bar in device space
         */
        barmaxwidth?: number;
        /**
         * enables auto gradient of the bars
         */
        autogradient?: boolean;
        /**
         * missing value verification criteria; default is `function(value){ return (value===null); }`
         */
        ismissingvalue?: IsMissingValue;
        /**
         * method to create selected style based on "regular" one
         */
        createselectedstyle?: CreateSelectedStyle;
        /**
         * Enable/disable specific bar chart series
         */
        series?: {
            /**
             * visibility
             */
            visible?: boolean;
        }[];
        /**
         * Options for symbols on top of each bar
         */
        symbol: SymbolShape.Options;
    };
    export type BarStylesTypes = {
        label?: string;
        [PropertyStyle.FillStyles]?: FillStyle.Type | FillStyle.Type[];
        [PropertyStyle.LineStyles]?: LineStyle.Type | LineStyle.Type[];
        [PropertyStyle.SelectedFillStyles]?: FillStyle | FillStyle[];
        [PropertyStyle.SelectedLineStyles]?: LineStyle | LineStyle[];
    };
    export type DataSeries = {
        values?: number[] | number[][];
    };
    export type FormatLabelHandler = (text: string, groupId?: number, id?: number, value?: number) => string | number;
    /**
     * options object
     */
    export type OptionsOut = Group.OptionsOut & {
        /**
         * array of barstyles
         */
        barstyles?: BarStylesTypes[];
        /**
         * value limits parameters
         */
        valuelimits?: {
            /**
             * min value to set
             */
            minvalue?: number | ValueCallback;
            /**
             * max value to set
             */
            maxvalue?: number | ValueCallback;
        };
        /**
         * value limits for bars positions data
         */
        positionlimits?: {
            /**
             * min value to for bars positions data
             */
            minvalue?: number;
            /**
             * max value to for bars positions data
             */
            maxvalue?: number;
        };
        /**
         * use neatlimits flag
         */
        neatlimits?: boolean;
        /**
         * bar values parameters
         */
        barvalues?: BarValues;
        /**
         * orientation of the chart
         */
        orientation?: Orientation;
        /**
         * Bar display mode of the chart
         */
        barmode?: BarMode;
        /**
         * width of the bars
         */
        barwidth?: number;
        /**
         * padding between the datasets
         */
        barpad?: number;
        /**
         * maximum width of bar in device space
         */
        barmaxwidth?: number;
        /**
         * enables auto gradient of the bars
         */
        autogradient?: boolean;
        /**
         * missing value verification criteria; default is `function(value){ return (value===null); }`
         */
        ismissingvalue?: IsMissingValue;
        /**
         * method to create selected style based on "regular" one
         */
        createselectedstyle?: CreateSelectedStyle;
        /**
         * Enable/disable specific bar chart series
         */
        series?: {
            /**
             * visibility
             */
            visible?: boolean;
        }[];
    };
    export type ValueCallback = (min: number, max: number) => number;
    type BarValues = {
        /**
         * to only show total bar values for stacked bar mode
         */
        totalonly?: boolean;
        /**
         * bar values visibility flag, supports individual bar value visibility flag
         * if value visible is a function, it'll be in this format: function (groupIndex, barIndex, value, valueType, textWidth, textHeight, orientation) and return a boolean
         */
        visible?: boolean | boolean[] | boolean[][] | IsVisibleValue;
        /**
         * bar values' label location
         */
        location?: BarValueLocation;
        /**
         * bar values decimal precision
         */
        decimalprecision?: number;
        /**
         * bar value labels rotation
         */
        rotationangle?: number;
        /**
         * margins options
         */
        margins?: {
            /**
             * labels anchor x margin in pixels. This value will be added to anchor _before_ text rotation
             */
            anchorx?: number;
            /**
             * labels anchor y margin in pixels. This value will be added to anchor _before_ text rotation
             */
            anchory?: number;
        };
        /**
         * bar value text style
         */
        textstyle?: TextStyle.Type;
    };
    type IsMissingValue = (v: number | number[]) => boolean;
    type CreateSelectedStyle = (s: LineStyle | FillStyle) => LineStyle | FillStyle;
    export type IsVisibleValue = (iReadout: number, iProperty: number, value: number, valueType: string, textWidth: number, textHeight: number, barWidth: number, barHeight: number, orientation: Orientation) => boolean;
    export {};
}
export {};
