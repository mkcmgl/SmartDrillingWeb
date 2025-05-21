import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { TimeSeriesObjectBase } from '@int/geotoolkit/widgets/timeseries/TimeSeriesObjectBase';
import { Group } from '@int/geotoolkit/scene/Group';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { DataTable } from '@int/geotoolkit/data/DataTable';
import { DataTableView } from '@int/geotoolkit/data/DataTableView';
import { TimeSeriesObjectEvents } from '@int/geotoolkit/widgets/timeseries/TimeSeriesObjectEvents';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Format } from '@int/geotoolkit/util/Format';
import type { FillDirection } from '@int/geotoolkit/widgets/timeseries/FillDirection';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { InterpolationType } from '@int/geotoolkit/data/DataStepInterpolation';
import type { Dimension } from '@int/geotoolkit/util/Dimension';
import type { FillType } from '@int/geotoolkit/widgets/timeseries/FillType';
import type { LegendItem } from '@int/geotoolkit/controls/shapes/LegendItem';
/**
 * TimeSeriesObject is a container of visuals used in TimeSeries Widget.
 * It primarily lets you get and set options of the different visuals.
 */
export declare class TimeSeriesObject extends TimeSeriesObjectBase {
    protected _options: TimeSeriesObject.Options;
    constructor(options?: TimeSeriesObject.Options);
    on<E extends keyof TimeSeriesObject.EventMap>(type: E, callback: (eventType: E, sender: this, args: TimeSeriesObject.EventMap[E]) => void): this;
    off<E extends keyof TimeSeriesObject.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: TimeSeriesObject.EventMap[E]) => void): this;
    notify<E extends keyof TimeSeriesObject.EventMap>(type: E, source: TimeSeriesObject, args?: TimeSeriesObject.EventMap[E]): this;
    /**
     * Get curve's data
     */
    getData(): DataTableView | DataTable;
    /**
     * Sets the data object for the line
     * @param options data source or object to specify data source
     * @throws {Error} if parameters indices and values are not specified properly
     * @returns this
     */
    setData(options: TimeSeriesObject.DataOptions | DataTableView | DataTable): this;
    /**
     * Set curve options
     * @param [options] object containing curve options
     * @example
     * // If you have several curves, which share the same unit and min&max,
     * // you can set the min and max of each curve dynamically and independently of each other without having to recreate the widget.
     * // You will have to iterate through the curves which you want to update and set their min and max value as follows:
     * widget.getTimeSeriesObjectById(curveid).setCurveOptions(
     * { 'autoscale': false, 'min': newMinValue, 'max': newMaxValue}
     * );
     */
    setCurveOptions(options?: TimeSeriesObject.CurveOptions): this;
    /**
     * Get curve options
     */
    getCurveOptions(): TimeSeriesObject.CurveOptionsOut | null;
    /**
     * Set symbol options
     * @param [options] JSON of symbol options
     */
    setSymbolOptions(options?: TimeSeriesObject.SymbolOptions): this;
    /**
     * Get symbol options
     */
    getSymbolOptions(): TimeSeriesObject.SymbolOptionsOut;
    /**
     * Get Curve Limits group option
     */
    getCurveLimitsGroupOptions(): TimeSeriesObject.CurveLimitsOptionsOut;
    /**
     * Set curve limits group options
     * @param [options] JSON describing curve limits group options
     */
    setCurveLimitsGroupOptions(options?: TimeSeriesObject.CurveLimitsOptions): this;
    /**
     * Get legend options
     * @returns JSON which defines legend options
     */
    getLegendOptions(): TimeSeriesObject.LegendOptionsOut;
    /**
     * Set legend item options
     * @param [options] JSON which defines legend options
     * @returns this
     */
    setLegendOptions(options?: TimeSeriesObject.LegendOptions): this;
    /**
     * Set tooltip options
     * @param [options] JSON which defines tooltip options
     * @returns this
     */
    setTooltipOptions(options?: TimeSeriesObject.TooltipItemOptions): this;
    /**
     * Get tooltip options
     * @returns JSON which defines tooltip options
     */
    getTooltipOptions(): TimeSeriesObject.TooltipOptions;
    /** */
    dispose(): void;
    /**
     * Returns all properties
     * @returns properties object
     */
    getProperties(): TimeSeriesObject.OptionsOut;
    /**
     * Sets all properties
     * @param props props
     * @returns this
     */
    setProperties(props?: TimeSeriesObject.Options): this;
}
export declare namespace TimeSeriesObject {
    type TooltipItemOptions = Group.Options & {
        /**
         * represents the number formatter for the tooltip
         */
        formatter?: Format;
        /**
         * margin between edge and text of tooltip
         */
        margintext?: number;
        /**
         * font
         */
        font?: string;
        /**
         * text color
         */
        textcolor?: string;
        /**
         * size of symbol
         */
        symbolsize?: number;
        /**
         * height
         */
        height?: number;
        /**
         * internal padding
         */
        internalpadding?: number;
        /**
         * external padding
         */
        externalpadding?: number;
        /**
         * value visible
         */
        valuevisible?: boolean;
        /**
         * optional function to prepare value text, symbol
         */
        formatdatahandler?: Function;
        /**
         * fixed width
         */
        fixedwidth?: number | null;
        /**
         * if true then tooltip also display with value NaN
         */
        nanvisibility?: boolean;
        /**
         * if true then text display in tooltip single row
         */
        singlerow?: boolean;
    };
    /**
     * object
     */
    type Options = TimeSeriesObjectBase.Options & {
        /**
         * Object's uri
         */
        uri?: string;
        /**
         * curve options
         */
        curve?: {
            /**
             * data
             */
            data?: DataTableView | DataTable | DataOptions;
            /**
             * curve properties
             */
            properties?: CurveOptions;
        };
        /**
         * javascript object used to define curvesymbol properties
         */
        curvesymbol?: SymbolOptions;
        /**
         * javascript object used to define curvelimits properties
         */
        curvelimits?: CurveLimitsOptions;
        /**
         * JSON which defines legend options
         */
        legenditem?: LegendOptions;
        /**
         * JSON which defines tooltip options
         */
        tooltipitem?: TimeSeriesObject.TooltipItemOptions;
    };
    type FillData = {
        id1: string;
        id2: string | number | null;
        fillstyle: FillStyle;
        filltype: FillType;
        filldirection: FillDirection;
    };
    /**
     * data source or object to specify data source
     */
    type DataOptions = {
        /**
         * name of the curve
         */
        name?: string;
        /**
         * name or index of series in data table / view if it is provided
         */
        indices?: string | number;
        /**
         * name or index of series in data table / view if it is provided
         */
        values?: string | number;
        /**
         * DataTable or DataTableView which contains time and value column
         */
        datatable?: DataTableView | DataTable;
    };
    /**
     * object containing curve options
     */
    type CurveOptions = {
        /**
         * name of curve
         */
        name?: string;
        /**
         * visibility of curve
         */
        visible?: boolean;
        /**
         * curve line visibility flag
         */
        curvevisible?: boolean;
        /**
         * curve linestyle
         */
        linestyle?: LineStyle | string | LineStyle.Options;
        /**
         * true if curve in auto-scaling mode
         */
        autoscale?: boolean;
        /**
         * curve min value
         */
        min?: number;
        /**
         * curve max value
         */
        max?: number;
        /**
         * neatlimits setting, true of set neatlimits object to enable, false or null|undefined to disable
         */
        neatlimits?: boolean | {
            /**
             * enable /disable neat limits
             */
            enable?: boolean;
            /**
             * keep original precise limits and calculates only step and origin
             */
            precise?: boolean;
            /**
             * min value parameter to calculate neatlimits
             */
            min?: number;
            /**
             * max value parameter to calculate neatlimits
             */
            max?: number;
        };
        /**
         * true if curve in neat-limits mode
         */
        neatlimitscenteredonzero?: boolean;
        /**
         * unit string
         */
        unit?: string | AbstractUnit;
        /**
         * 'left'/'right'
         */
        axisposition?: string;
        /**
         * interpolation type
         */
        interpolationtype?: InterpolationType;
        /**
         * micro position limits
         */
        microposition?: {
            /**
             * vertical start micro position in the range from 0 to 1
             */
            top?: number;
            /**
             * vertical end micro position in the range from 0 to 1
             */
            bottom?: number;
        };
        /**
         * timeseriesshape border line style
         */
        borderlinestyle?: LineStyle | string | LineStyle.Options;
        /**
         * toggle spline interpolation
         */
        spline?: boolean;
        /**
         * curve title
         */
        title?: {
            anchor?: AnchorType;
            offset?: Dimension;
        };
        decimationspacing?: number;
        /**
         * visibility of point markers
         */
        markervisible?: boolean;
        /**
         * object containing marker symbol
         */
        marker?: Marker | SymbolShape;
        /**
         * object containing point values options
         */
        values?: Values;
        /**
         * options
         */
        barmode?: {
            /**
             * enabled barmode
             */
            enabled?: boolean;
            /**
             * Width of each bar in device space
             */
            barwidth?: number;
            /**
             * Line style for bars,
             * default is line style of TimeSeriesLine
             */
            linestyle?: LineStyle | string | LineStyle.Options;
            /**
             * Fill style for bars,
             * default is line color of TimeSeriesLine
             */
            fillstyle?: FillStyle | string | FillStyle.Options;
            /**
             * Bar values options
             */
            barvalues?: {
                /**
                 * Formatter for bar value texts
                 */
                formatter?: NumberFormat;
                /**
                 * Options to set bar values margins in device space
                 */
                margins?: {
                    /**
                     * Left margin in device space
                     */
                    left?: number;
                    /**
                     * Top margin in device space
                     */
                    top?: number;
                };
                /**
                 * Bar value rotation angle
                 */
                rotationangle?: number;
                /**
                 * Bar value text style
                 */
                textstyle?: TextStyle | string | TextStyle.Options;
            };
        };
        /**
         * logarithmic scale
         */
        logarithmicscale?: boolean;
    };
    type CurveOptionsOut = {
        id: string;
        /**
         * name of curve
         */
        name: string;
        /**
         * visibility of curve
         */
        visible: boolean;
        /**
         * curve linestyle
         */
        linestyle: LineStyle;
        /**
         * is vertically flipped
         */
        flip: boolean;
        /**
         * true if curve in auto-scaling mode
         */
        autoscale: boolean;
        /**
         * curve min value
         */
        min: number;
        /**
         * curve max value
         */
        max: number;
        /**
         * neatlimits setting, true of set neatlimits object to enable, false or null|undefined to disable
         */
        neatlimits: boolean | {
            /**
             * enable /disable neat limits
             */
            enable?: boolean;
            /**
             * keep original precise limits and calculates only step and origin
             */
            precise?: boolean;
            /**
             * min value parameter to calculate neatlimits
             */
            min?: number;
            /**
             * max value parameter to calculate neatlimits
             */
            max?: number;
        };
        /**
         * true if curve in neat-limits mode
         */
        neatlimitscenteredonzero: boolean;
        /**
         * unit string
         */
        unit: string | AbstractUnit;
        /**
         * micro position limits
         */
        microposition: {
            /**
             * vertical start micro position in the range from 0 to 1
             */
            top?: number;
            /**
             * vertical end micro position in the range from 0 to 1
             */
            bottom?: number;
        };
        /**
         * 'left'/'right'
         */
        axisposition: string;
        interpolationtype: InterpolationType;
        /**
         * timeseriesshape border line style
         */
        borderlinestyle: LineStyle;
        /**
         * options
         */
        barmode: {
            /**
             * enabled barmode
             */
            enabled?: boolean;
            /**
             * Width of each bar in device space
             */
            barwidth?: number;
            /**
             * Line style for bars,
             * default is line style of TimeSeriesLine
             */
            linestyle?: LineStyle | string | LineStyle.Options;
            /**
             * Fill style for bars,
             * default is line color of TimeSeriesLine
             */
            fillstyle?: FillStyle | string | FillStyle.Options;
            /**
             * Bar values options
             */
            barvalues?: {
                /**
                 * Formatter for bar value texts
                 */
                formatter?: NumberFormat;
                /**
                 * Options to set bar values margins in device space
                 */
                margins?: {
                    /**
                     * Left margin in device space
                     */
                    left?: number;
                    /**
                     * Top margin in device space
                     */
                    top?: number;
                };
                /**
                 * Bar value rotation angle
                 */
                rotationangle?: number;
                /**
                 * Bar value text style
                 */
                textstyle?: TextStyle | string | TextStyle.Options;
            };
        };
        /**
         * logarithmic scale
         */
        logarithmicscale: boolean;
    };
    /**
     * JSON of symbol options
     */
    type SymbolOptions = {
        /**
         * visibility of curve highlighting symbol
         */
        visible?: boolean;
        /**
         * width of symbol
         */
        width?: number;
        /**
         * height of symbol
         */
        height?: number;
        /**
         * type of painter
         * @deprecated since 4.0 use "painter" instead
         */
        type?: 'cross' | 'diamond' | 'plus' | 'square' | 'star' | 'triangle' | 'circle';
        /**
         * Painter
         */
        painter?: SymbolShape.Painter;
        /**
         * fillstyle of symbol
         */
        fillstyle?: FillStyle;
    };
    type SymbolOptionsOut = {
        visible: boolean;
        /**
         * width of symbol
         */
        width: number;
        /**
         * height of symbol
         */
        height: number;
        /**
         * type of painter
         * @deprecated since 4.0 use "painter" instead
         */
        type: string;
        /**
         * Painter
         */
        painter: SymbolShape.Painter;
        fillstyle: FillStyle;
    };
    type CurveLimitsOptionsOut = {
        /**
         * visibility of curve limits area
         */
        visible: boolean;
        /**
         * curve limits area margin (top and bottom)
         */
        margin: number;
        /**
         * width for each curve limits column
         */
        width: number;
        /**
         * curve limits text font
         */
        font: string;
    };
    /**
     * JSON describing curve limits group options
     */
    type CurveLimitsOptions = {
        /**
         * visibility of curve limits area
         */
        visible?: boolean;
        /**
         * curve limits area margin (top and bottom)
         */
        margin?: number;
        /**
         * width for each curve limits column
         */
        width?: number;
        /**
         * 10px Arial] curve limits text font
         */
        font?: string;
    };
    /**
     * JSON which defines legend options
     */
    type LegendOptionsOut = {
        /**
         * represents the legend number formatter.
         */
        formatter: Format;
        /**
         * margin of text
         */
        margintext: number;
        /**
         * font
         */
        font: string;
        /**
         * height
         */
        height: number;
        /**
         * internal padding
         */
        internalpadding: number;
        /**
         * fixed width
         */
        fixedwidth: number;
        /**
         * label color
         */
        labelcolor: string;
        /**
         * line style
         */
        linestyle: LineStyle;
        /**
         * fill style
         */
        fillstyle: FillStyle;
    };
    /**
     * JSON which defines legend options
     */
    type LegendOptions = {
        /**
         * represents the legend number formatter.
         */
        formatter?: Format;
        /**
         * margin between edge and text of legend
         */
        margintext?: number;
        /**
         * 12px Arial] legend font
         */
        font?: string;
        /**
         * legend height
         */
        height?: number;
        /**
         * legend padding
         */
        internalpadding?: number;
        /**
         * fixed width option
         */
        fixedwidth?: number;
        autocolorlabel?: boolean;
        /**
         * '6b6b6b' legend text color
         */
        labelcolor?: string;
        /**
         * legend border linestyle
         */
        linestyle?: LineStyle.Type;
        /**
         * legend fillstyle
         */
        fillstyle?: FillStyle.Type;
    };
    /**
     * JSON which defines tooltip options
     */
    type TooltipOptions = {
        /**
         * represents the tooltip number formatter.
         */
        formatter: Format;
        /**
         * margin between edge and text of tooltip
         */
        margintext: number;
        /**
         * font
         */
        font: string;
        /**
         * text color
         */
        textcolor: string;
        /**
         * size of symbol
         */
        symbolsize: number;
        /**
         * internal padding
         */
        internalpadding: number;
        /**
         * external padding
         */
        externalpadding: number;
        /**
         * line style
         */
        linestyle: LineStyle;
        /**
         * fill style
         */
        fillstyle: FillStyle;
        /**
         * fixed width
         */
        fixedwidth: number;
        /**
         * if true then tooltip also display with value NaN
         */
        nanvisibility: boolean;
        /**
         * if true then text display in tooltip single row
         */
        singlerow: boolean;
    };
    /**
     * properties object
     */
    type OptionsOut = TimeSeriesObjectBase.OptionsOut & {
        /**
         * Object's uri
         */
        uri: string;
        /**
         * curve options
         */
        curve: {
            /**
             * curve properties
             */
            properties: CurveOptionsOut;
        };
        /**
         * JSON which defines curvesymbol properties
         */
        curvesymbol: SymbolOptionsOut;
        /**
         * JSON which defines curvelimits properties
         */
        curvelimits: CurveLimitsOptionsOut;
        /**
         * JSON which defines legend options
         */
        legenditem: LegendOptionsOut;
        /**
         * JSON which defines tooltip options
         */
        tooltipitem: TooltipOptions;
    };
    type Marker = {
        /**
         * marker's painter's className
         */
        painter?: SymbolShape.Painter;
        /**
         * marker width
         */
        width?: number;
        /**
         * marker height
         */
        height?: number;
        /**
         * size is in device space
         */
        sizeisindevicespace?: boolean;
        /**
         * anchor type of marker
         */
        alignment?: AnchorType;
        /**
         * style applied on outline
         */
        linestyle?: LineStyle | string | LineStyle.Options;
        /**
         * style applied on fill
         */
        fillstyle?: FillStyle | string | FillStyle.Options;
    };
    type Values = {
        /**
         * visibility of point values
         */
        visible?: boolean;
        anchor?: AnchorType;
        offset?: number;
        offsetx?: number;
        offsety?: number;
        /**
         * color of value text font
         */
        color?: string;
        /**
         * value text font
         */
        font?: string;
        /**
         * fillstyle of value text container
         */
        fillstyle?: FillStyle | string | FillStyle.Options;
        /**
         * linestyle of value text container
         */
        linestyle?: LineStyle | string | LineStyle.Options;
        textstyle?: TextStyle | string | TextStyle.Options;
        padding?: number;
        /**
         * formatter for value text
         */
        format?: NumberFormat;
    };
    type EventMap = TimeSeriesObjectBase.EventMap & {
        [TimeSeriesObjectEvents.DataSet]: {
            old: DataTableView | DataTable | TimeSeriesObject.DataOptions;
            new: DataTableView | DataTable;
        };
        [TimeSeriesObjectEvents.CurveAxisChanged]: Group;
        [TimeSeriesObjectEvents.LimitsUpdated]: TimeSeriesObject;
        [TimeSeriesObjectEvents.LegendItemChanged]: LegendItem;
        [TimeSeriesObjectEvents.LegendValueChanged]: Group;
    };
}
