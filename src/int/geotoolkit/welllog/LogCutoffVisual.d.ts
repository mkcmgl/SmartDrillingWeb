import { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Range } from '@int/geotoolkit/util/Range';
import { ScaleType } from '@int/geotoolkit/welllog/data/ScaleType';
import { LogPointSet } from '@int/geotoolkit/welllog/LogPointSet';
import { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import { DataSeries } from '@int/geotoolkit/data/DataSeries';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { NumericalDataSeriesView } from '@int/geotoolkit/data/NumericalDataSeriesView';
import type { DataSeriesView } from '@int/geotoolkit/data/DataSeriesView';
import type { DiscreteDataMap } from '@int/geotoolkit/data/DiscreteDataMap';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
/**
 * LogCutoffVisual CuttingsMode
 *
 * @enum
 * @readonly
 */
export declare enum CutoffMode {
    /**
     * Continuous mode.
     */
    Continuous = "continuous",
    /**
     * Discrete mode.
     */
    Discrete = "discrete"
}
/**
 * LogCutoffVisual DisplayMode
 *
 * @enum
 * @readonly
 */
export declare enum DisplayMode {
    /**
     * Value mode.
     */
    Value = "value",
    /**
     * Categorized mode.
     */
    Categorized = "categorized"
}
/**
 * Enum of step mode
 * @enum
 * @readonly
 */
export declare enum StepMode {
    /**
     * End
     */
    EndStep = "endstep",
    /**
     * Start
     */
    StartStep = "startstep"
}
/**
 * Enum of cutoff limits type
 * @enum
 * @readonly
 */
export declare enum LimitsType {
    /**
     * Auto limits
     */
    Auto = "auto",
    /**
     * Manual limits
     */
    Manual = "manual"
}
/**
 * Define a cut off visual to support continues and discrete mode.
 */
export declare class LogCutoffVisual extends LogPointSet {
    /**
     * @param [params] The cut off visual options
     */
    constructor(params: LogCutoffVisual.Options);
    /**
     * @param [data] The cut off visual options
     * @param [autoUpdate] automatic update from data
     */
    constructor(data?: LogAbstractData, autoUpdate?: boolean);
    clone(): LogCutoffVisual;
    protected copyConstructor(src: LogCutoffVisual, deepCopy?: boolean): this;
    /**
     * Returns minimum normalization limit
     */
    getMinimumNormalizationLimit(): number;
    /**
     * Returns maximum normalization limit
     */
    getMaximumNormalizationLimit(): number;
    /**
     * Sets normalization limits of the data values. The data limits are used by default.
     *
     * @param minValue min value which can be specified for normalization
     * @param [maxValue] max value which can be specified for normalization
     * @returns this
     * @example
     * cutOffVisual.setNormalizationLimits(100, 200); // It means that each sample value that is less than 100 should have value 100, Same for 200
     * @example
     * cutOffVisual.setNormalizationLimits(200, 100); // same but orientation is reversed
     */
    setNormalizationLimits(minValue: number | Range, maxValue?: number): this;
    /**
     * This method resets custom normalization limits
     * @returns this
     */
    resetNormalizationLimits(): this;
    /**
     * Sets data source to be displayed.
     * @param data data to display
     * @param [resetNormalizationLimits] resets custom normalization limits
     * @param [autoUpdate] automatic update from data source
     * @returns this
     */
    setData(data: LogAbstractData | LogCutoffVisual.DataOptions, resetNormalizationLimits?: boolean, autoUpdate?: boolean): this;
    /**
     * Returns WellLog Data
     */
    getDataSource(): LogAbstractData;
    /**
     * Sets scale type. This applies function to data values.
     * @param type scale type
     * @returns this
     */
    setScaleType(type: ScaleType): this;
    /**
     * Returns current scale type.
     */
    getScaleType(): ScaleType;
    /**
     * Return true if the representation is flipped horizontally
     *
     * @returns horizontal flip
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     *
     * @param enable enable flip
     * @returns this
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Sets values cutoff mode.
     * @param cutoffMode values cutoff mode
     * @returns this
     */
    setCutoffMode(cutoffMode: CutoffMode): this;
    /**
     * Returns current cutoff mode.
     */
    getCutoffMode(): CutoffMode;
    /**
     * Sets values display mode.
     * @param displayMode values display mode
     * @returns this
     */
    setDisplayMode(displayMode: DisplayMode): this;
    /**
     * Returns current display mode.
     */
    getDisplayMode(): DisplayMode;
    /**
     * Returns limits type
     */
    getLimitsType(): LimitsType;
    /**
     * Sets values step display mode.
     * @param stepMode values step display mode
     * @returns this
     */
    setStepMode(stepMode: StepMode): this;
    /**
     * Returns current display mode.
     */
    getStepMode(): StepMode;
    /**
     * Set  cut off settings
     * @param cutOff cut off settings
     * @returns this
     */
    setCutOff(cutOff: LogCutoffVisual.CutOffOptions | null): this;
    /**
     * Return cut off settings
     * @returns cutOff settings
     */
    getCutOff(): LogCutoffVisual.CutOffOptions | null;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Gets the fill style
     * @returns fillStyle The fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Gets the auto update flag
     * @returns autoUpdate Flag that determines whether to automatically update from data.
     */
    getAutoUpdate(): boolean;
    /**
     * Sets the auto update flag
     * @param autoUpdate Flag that determines whether to automatically update from data.
     * @returns this
     */
    setAutoUpdate(autoUpdate: boolean): this;
    /**
     * Synchronize state from data
     * @param [rect] optional area to invalidate track
     * @returns this
     */
    updateFromData(rect?: Rect): this;
    /**
     * Returns meaning data limits
     *
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits: boolean): Rect | null;
    /**
     * Returns model limits
     * @returns model limits
     */
    getModelLimits(): Rect | null;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns The object properties
     */
    getProperties(): LogCutoffVisual.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogCutoffVisual.Options): this;
}
export declare namespace LogCutoffVisual {
    /**
     * The cut off visual options
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * data source to be displayed
         */
        data?: LogAbstractData | DataOptions;
        /**
         * Whether to automatically update from data
         */
        autoupdate?: boolean;
        /**
         * values scale type
         */
        scaletype?: ScaleType;
        /**
         * limits type
         */
        limitstype?: LimitsType;
        /**
         * min limits value in case of props.limitstype==LimitsType.Manual
         */
        limitsmin?: number;
        /**
         * max limits value in case of props.limitstype==LimitsType.Manual
         */
        limitsmax?: number;
        /**
         * horizontal flip
         */
        horizontalflip?: boolean;
        /**
         * values cutoff mode
         */
        cutoffmode?: CutoffMode;
        /**
         * values display mode
         */
        displaymode?: DisplayMode;
        /**
         * values step display mode
         */
        stepmode?: StepMode;
        /**
         * The fill style.
         */
        fillstyle?: FillStyle.Type;
        /**
         * cutOff value
         */
        cutoff?: CutOffOptions;
    };
    /**
     * data to display
     */
    type DataOptions = {
        /**
         * curve name
         */
        name?: string;
        /**
         * datasource depths series/array
         */
        depths?: NumericalDataSeries | NumericalDataSeriesView | number[];
        /**
         * datasource values series/array, strings array is designated to use with categories mode only
         */
        values?: DataSeries | DataSeriesView | number[] | string[];
    };
    /**
     * cut off settings
     */
    type CutOffOptions = {
        /**
         * cutOff names
         */
        names?: string[];
        /**
         * cutOff codes
         */
        codes?: any[];
        /**
         * cutOff casesensitive flag, default is not false
         */
        casesensitive?: boolean;
        /**
         * cutOff ranges
         */
        ranges?: number | number[] | number[][];
        /**
         * fill styles
         */
        fillstyles?: FillStyle[] | DiscreteDataMap<FillStyle>;
        /**
         * line styles
         */
        linestyles?: LineStyle[] | DiscreteDataMap<LineStyle>;
    };
    /**
     * The object properties
     */
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * Flag that determines whether to automatically update from data.
         */
        autoupdate: boolean;
        /**
         * values scale type
         */
        scaletype: ScaleType;
        /**
         * limits type
         */
        limitstype?: LimitsType;
        /**
         * min limits value in case of props.limitstype==LimitsType.Manual
         */
        limitsmin?: number;
        /**
         * max limits value in case of props.limitstype==LimitsType.Manual
         */
        limitsmax?: number;
        /**
         * horizontal flip
         */
        horizontalflip?: boolean;
        /**
         * values cutoff mode
         */
        cutoffmode: CutoffMode;
        /**
         * values display mode
         */
        displaymode: DisplayMode;
        /**
         * values step display mode
         */
        stepmode: StepMode;
        /**
         * fill style
         */
        fillstyle: FillStyle;
        /**
         * The cutOff properties
         */
        cutoff: CutOffOptions | null;
    };
}
