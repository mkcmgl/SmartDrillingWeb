import { Rect } from '@int/geotoolkit/util/Rect';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import { NumericalDataSeriesView } from '@int/geotoolkit/data/NumericalDataSeriesView';
import { Point } from '@int/geotoolkit/util/Point';
import { Range } from '@int/geotoolkit/util/Range';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Merge } from '@int/geotoolkit/base';
import type { Unit } from '@int/geotoolkit/util/Unit';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { INumericalDataSeries } from '@int/geotoolkit/data/INumericalDataSeries';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import { Polygon } from '@int/geotoolkit/util/Polygon';
/**
 * Histogram's Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when this shapes data has been updated, kept for compatible purpose
     */
    DataUpdated = "dataUpdated",
    /**
     * Event type fired when model limits has been updated.
     */
    ModelLimitsUpdated = "modelLimitsUpdated",
    /**
     * set or get new calculated bin count
     */
    BinsUpdated = "binsUpdated"
}
/**
 * FrequencyType
 * @enum
 * @readonly
 */
export declare enum FrequencyType {
    /**
     * Represents the total number of observations within a given interval or frequency bin. Sum of the absolute frequencies is equal to the total number of data.
     */
    Absolute = "absolute",
    /**
     * Height of the histogram bar represents the proportion of the data in each class.
     */
    Normalized = "normalized",
    /**
     * Histogram vertical axis uses relative or proportional frequency instead of simple frequency. It then shows the proportion of cases that fall into each of several categories
     */
    Relative = "relative"
}
/**
 * AccumulatedMode
 * @enum
 * @readonly
 */
export declare enum AccumulatedMode {
    /**
     * Disabled
     */
    Disabled = "disabled",
    /**
     * Enabled
     */
    Enabled = "enabled"
}
/**
 * HistogramMode
 * @enum
 * @readonly
 */
export declare enum HistogramMode {
    /**
     * Linear
     */
    Linear = "linear",
    /**
     * Logarithmic
     */
    Logarithmic = "logarithmic"
}
/**
 * Create a advanced histogram shape, which is a graphical display of tabulated frequencies, shown as bars.<br>
 * The histogram can be customized using the options like 'bin spacing','Frequency Type', 'colors' etc. Refer to options below for more details.
 */
export declare class Histogram extends Shape {
    /**
     * Create Histogram
     * @param [options] object
     * @param [bounds] bounds of the node
     * @param [bins] number of bins this histogram has
     */
    constructor(options?: Histogram.Options | LineStyle.Type, bounds?: Rect, bins?: number);
    on<E extends keyof Histogram.EventMap>(type: E, callback: (eventType: E, sender: this, args: Histogram.EventMap[E]) => void): this;
    off<E extends keyof Histogram.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Histogram.EventMap[E]) => void): this;
    notify<E extends keyof Histogram.EventMap>(type: E, source: Histogram, args?: Histogram.EventMap[E]): this;
    /**
     * Set the data to be plotted in the histogram, optionally with min and max values.
     *
     * @param values Data to be charted in histogram or options for histogram (for compatibility)
     * @param [minValue] Lowest value to display
     * @param [maxValue] Highest value to display
     * @returns this
     */
    setData(values: number[] | INumericalDataSeries | {
        data?: number[] | INumericalDataSeries;
        minvalue?: number;
        maxvalue?: number;
    }, minValue?: number, maxValue?: number): this;
    /**
     * get raw data
     */
    getData(): {
        data: number[];
        minvalue: number;
        maxvalue: number;
    };
    /**
     * set shape properties
     * @param properties object
     * @returns this
     */
    setProperties(properties?: Histogram.Options): this;
    setOptions(options: Histogram.OptionsBase): this;
    /**
     * set neat limits for x axis
     * @param neatlimits set if apply neat limits for x axis
     * @returns this
     */
    setNeatLimitsX(neatlimits: boolean): this;
    /**
     * set neat limits for y axis
     * @param neatlimits set if apply neat limits for y axis
     * @returns this
     */
    setNeatLimitsY(neatlimits: boolean): this;
    /**
     * Returns shape properties
     * @returns object
     */
    getProperties(): Histogram.OptionsOut;
    getOptions(): Histogram.OptionsBaseOut;
    /**
     * set desired unit for data source, the finally display unit could be not the desired one due to failling of unit coversion
     * @param unit represent the `{string}` name, `{string}` symbol or `{Unit}` unit to be created
     * @returns this
     */
    setUnit(unit: string | Unit): this;
    /**
     * Return histogram data source
     * @returns data source
     */
    getDataSource(): number[] | NumericalDataSeries | NumericalDataSeriesView | null;
    /**
     * set orientation
     * @param orientation orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * get orientation
     */
    getOrientation(): Orientation;
    /**
     * get displayed unit
     * @returns unit
     */
    getDisplayUnit(): AbstractUnit;
    /**
     * Resets the highest and lowest values to be computed values
     */
    resetValues(): void;
    /**
     * Set the highest and lowest values to be displayed in this histogram
     *
     * @param minValue lowest value to be displayed
     * @param maxValue highest value to be displayed
     * @returns this
     */
    setValueRange(minValue: number, maxValue: number): this;
    /**
     * Resets the highest and lowest values to be computed values
     * @returns _areCustomizedEdges
     */
    areValuesCustomized(): boolean;
    /**
     * Get lowest value to be displayed
     *
     * @returns _minValue
     */
    getMinValue(): number;
    /**
     * Get highest value to be displayed
     *
     * @returns _maxValue
     */
    getMaxValue(): number;
    /**
     * Returns calculated statistics of values
     * see description {@link import("geotoolkit/controls/shapes/Histogram").Histogram.getStatisticsDescription}
     * @example
     *
     * - Data samples count
     * - min sample value
     * - max sample value
     * - average value
     * - variance value
     * - average deviation value
     * - standard deviation value
     * - skewness value
     * - standard kurtosis value
     * - Theoretical P10 value (centile)
     * - Theoretical P50 value (centile)
     * - Theoretical P90 value (centile)
     * @returns statistics
     */
    getStatistics(): number[];
    /**
     * Descriptions of statistics
     * @example
     *
     * return ["Sample Count", "Min", "Max", "Average", "Variance", "Avg. Deviation", "Std. Deviation", "Skewness", "Kurtosis", "P10", "P50", "P90"]
     */
    getStatisticsDescription(): string[];
    /**
     * Maximum frequency
     */
    getMaxFrequency(): number;
    /**
     * Gets the frequency for the current index
     * @param index current index
     * @param [ignoreMode] ignore mode on or not
     */
    getFrequency(index: number, ignoreMode?: boolean): number;
    /**
     * Calculate distribution with normalization
     * @param [keepModelLimits] set if keep model limits unchanged
     */
    calculate(keepModelLimits?: boolean): this;
    /**
     * Gets the values of the bins in the following array format
     * Array `[{ 'minvalue' : number, 'maxvalue' : number, 'binnumber' : number, 'frequency' : number }, ...]`
     * @returns Array of bins objects
     */
    getBins(): Histogram.Bin[];
    /**
     * Gets the bin at the input x value
     * @param x input x value
     * @param [excludeGaps] True if gaps between bins should be excluded
     * @returns - bin at input x value
     */
    getBinAt(x: number, excludeGaps?: boolean): Histogram.Bin & {
        indices?: number[];
    };
    /**
     * Gets indices by bin number
     * @param index index
     * @returns of indices
     */
    getIndicesByBin(index: number): number[];
    /**
     * Returns bin numbers for specified indices
     * @param indices of indices
     */
    getBinsByIndices(indices: number[]): number[];
    /**
     * Get hit bins
     * @param hitArea selected area
     * @returns selected bins array
     */
    hitTest(hitArea: Rect | Polygon): Histogram.HitTestResult;
    /**
     * Get hit bins
     * @param hitArea selected point
     * @param [radius] the bins in certain range along x axis
     * @returns selected bins array
     */
    hitTest(hitArea: Point, radius?: number): Histogram.HitTestResult;
    /**
     * Get hit bins
     * @param hitArea selected area
     * @param bins the bins in certain range along x axis
     * @returns selected bins number array
     */
    hitTest(hitArea: Rect | Polygon, bins: Histogram.Bin[]): Histogram.HitTestResult;
    /**
     * Get hit bins
     * @param hitArea selected point
     * @param bins the bins in certain range along x axis
     * @returns selected bins number array
     */
    hitTest(hitArea: Point, bins: Histogram.Bin[]): Histogram.HitTestResult;
    /**
     * Gets the bin at the input x value
     * @param x input x value
     * @returns Array of bins objects
     */
    getBinsAt(x: Point | Range | Rect): Histogram.Bin[];
    /**
     * Highlight Bins
     * @param bins indices
     * @param [reset] previous selection
     */
    highlightBins(bins: number[] | null, reset?: boolean): void;
    /**
     * get highlighted bins
     * @returns bins number array
     */
    getHighlightedBins(): number[];
    /**
     * Updates the model limits
     */
    updateModelLimits(): void;
    /**
     * Sets bin count.
     *
     * @param binCount a count of the bins
     */
    setBinCount(binCount: number): this;
    /**
     * Sets bin count using a step value
     *
     * @param binStep a count of the bins
     */
    setBinSteps(binStep: number): this;
    /**
     * Resets the bin count
     */
    resetBinCount(): void;
    isAutoBinCount(): boolean;
    /**
     * Calculates the automatic amount of bins
     * @param [force] force calculation of bins count
     */
    updateBinCount(force?: boolean): this;
    /**
     * Return bin count
     * @returns a count of bins
     */
    getBinCount(): number;
    /**
     * sets if the high value is inclusive
     * @param inclusive high value is inclusive or not
     */
    setHighValueInclusive(inclusive: boolean): this;
    /**
     * gets if the high value is inclusive
     */
    getHighValueInclusive(): boolean;
    /**
     * Gets model limits
     *
     * @returns the current model limits
     */
    getModelLimits(): Rect;
    /**
     * Returns current bounds
     *
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Check collision
     *
     * @param context Rendering Context
     * @returns true if object is inside of rendarable area
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Retrieves the world transformation of the spatial.
     */
    getContentsTransform(): Transformation;
    render(context: RenderingContext): void;
    setHighLightStyles(styles: Record<string, {
        linestyle?: LineStyle.Type;
        fillstyle?: FillStyle.Type;
    }>): this;
    /**
     * Computers the statics based on the new data
     */
    computeStatistics(): void;
    /**
     * @param isAutoGradient Autogradient on or off
     */
    setAutoGradient(isAutoGradient: boolean): this;
    /**
     * Gets percentage of fill
     */
    getBinSpacing(): number;
    /**
     * Sets percentage of fill
     * Everything lower than 50 is set to 50
     * Everything higher than 100 is set to 100
     * All values in between are saved as is
     * @param percentage percentage of fill
     */
    setBinSpacing(percentage: number): this;
    /**
     * Sets bars vertical scale
     * @param percentage percentage of fill
     */
    setVerticalScaling(percentage: number): this;
    /**
     * Gets vertical scale
     */
    getVerticalScaling(): number;
    /**
     * Gets if we are auto gradient
     */
    getAutoGradient(): boolean;
    /**
     * Sets frequency type
     * @param frequencyType enum of FrequencyType
     */
    setFrequencyType(frequencyType: FrequencyType | string): this;
    /**
     * Gets frequency type
     */
    getFrequencyType(): FrequencyType;
    /**
     * Sets accumulated mode
     * @param accumulatedMode enum of AccumulatedMode (Disabled or Enabled)
     */
    setAccumulatedMode(accumulatedMode: AccumulatedMode | string): this;
    /**
     * Gets accumulated mode
     */
    getAccumulatedMode(): AccumulatedMode;
    /**
     * Sets histogram mode
     * @param histogramMode enum of HistogramMode (Linear or Logarithmic)
     */
    setHistogramMode(histogramMode: HistogramMode | string): this;
    /**
     * Gets the histogram mode
     */
    getHistogramMode(): HistogramMode;
    /**
     * Gets log start value
     */
    getStartValue(): number;
    /**
     * Sets highlight style
     * @param fillStyle a new fill style
     */
    setHighlightStyle(fillStyle: FillStyle.Type): this;
    /**
     * Gets highlight style
     */
    getHighlightStyle(): FillStyle;
    /**
     * Sets log start value
     * @param logStartValue log start value
     * @returns this
     */
    setLogStartValue(logStartValue: number): this;
}
export declare namespace Histogram {
    /**
     * object
     */
    type Options = Shape.Options & OptionsBase;
    /**
     * object
     */
    type OptionsOut = Shape.OptionsOut & OptionsBaseOut;
    type OptionsBase = Merge<OptionsBaseOut, {
        fillstyle?: FillStyle.Type;
        linestyle?: LineStyle.Type;
        /**
         * data array
         */
        data?: number[] | NumericalDataSeries | NumericalDataSeriesView;
        binstep?: number;
        /**
         * highlight style
         */
        highlightstyle?: FillStyle.Type;
        /**
         * represent the `{string}` name, `{string}` symbol or `{Unit}` unit to be created
         */
        unit?: string | Unit;
        autominmax?: boolean;
    }>;
    type OptionsBaseOut = {
        /**
         * bounds of the node
         */
        bounds?: Rect;
        /**
         * number of bins this histogram has
         */
        bins?: number;
        /**
         * frequency type
         */
        frequencytype?: FrequencyType;
        /**
         * accumulated mode
         */
        accumulatedmode?: AccumulatedMode;
        /**
         * histogram mode
         */
        histogrammode?: HistogramMode;
        /**
         * auto gradient inside the bin to give a 3D look
         */
        autogradient?: boolean;
        /**
         * bin spacing in percentage
         */
        binspacing?: number;
        /**
         * vertical scale in percentage
         */
        verticalscale?: number;
        /**
         * log start value
         */
        logstartvalue?: number;
        /**
         * highlight style
         */
        highlightstyle?: FillStyle;
        /**
         * high value inclusive
         */
        highvalueinclusive?: boolean;
        /**
         * Lowest value to display
         */
        minvalue?: number;
        /**
         * Highest value to display
         */
        maxvalue?: number;
        /**
         * set if apply neat limits for x axis
         */
        neatlimitsx?: boolean;
        /**
         * set if apply neat limits for y axis
         */
        neatlimitsy?: boolean;
        /**
         * represent the `{string}` name, `{string}` symbol or `{Unit}` unit to be created
         */
        unit?: AbstractUnit;
        /**
         * set the flag if swap the min and max of X values
         */
        flipedx?: boolean;
        /**
         * orientation
         */
        orientation?: Orientation;
    };
    /**
     * Define bin
     */
    type Bin = {
        /**
         * Minimum value
         */
        minvalue: number;
        /**
         * Maximum value
         */
        maxvalue: number;
        /**
         * Bin number
         */
        binnumber: number;
        /**
         * Frequency
         */
        frequency: number;
    };
    /**
     * Hit test result
     */
    type HitTestResult = {
        /**
         * Bins
         */
        bins: Histogram.Bin[];
        /**
         * Return a count of bins
         * @deprecated since 4.0 Use bins instead
         */
        length: number;
        /**
         * Return bin index
         * @deprecated since 4.0 Use bins instead
         */
        [i: number]: number;
    };
    type EventMap = AbstractNode.EventMap & {
        [Events.DataUpdated]: {
            minValue: number;
            maxValue: number;
            count: number;
            binCount: number;
        };
        [Events.ModelLimitsUpdated]: Rect;
        [Events.BinsUpdated]: number;
    };
}
