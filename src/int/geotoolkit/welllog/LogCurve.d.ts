import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import { DataSeries } from '@int/geotoolkit/data/DataSeries';
import type { Merge } from '@int/geotoolkit/base';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { LogPointSet } from '@int/geotoolkit/welllog/LogPointSet';
import { ScaleType } from '@int/geotoolkit/welllog/data/ScaleType';
import { InterpolationType } from '@int/geotoolkit/data/DataStepInterpolation';
import { InterpolationEdge } from '@int/geotoolkit/data/DataLimitsInterpolation';
import { CutoffMode } from '@int/geotoolkit/data/DataGapFillInterpolation';
import { DecimalFormat } from '@int/geotoolkit/util/DecimalFormat';
import { StateChanges } from '@int/geotoolkit/scene/Node';
import { Events as WelllogDataEvents } from '@int/geotoolkit/welllog/data/Events';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LogDataEvent } from '@int/geotoolkit/welllog/data/LogDataEvent';
import { Range } from '@int/geotoolkit/util/Range';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { LogGradientStyle } from '@int/geotoolkit/welllog/attributes/LogGradientStyle';
import { Point } from '@int/geotoolkit/util/Point';
import type { Dimension } from '@int/geotoolkit/util/Dimension';
import type { LogCurveEvents } from '@int/geotoolkit/welllog/LogCurveEvents';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import type { LogDataSample } from '@int/geotoolkit/welllog/data/LogDataSample';
import type { LogCurveLimitsStrategy } from '@int/geotoolkit/welllog/LogCurveLimitsStrategy';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AbstractScaledData } from '@int/geotoolkit/data/AbstractScaledData';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { OptimizationType } from '@int/geotoolkit/util/OptimizationType';
import type { LogReferenceLine } from '@int/geotoolkit/welllog/LogReferenceLine';
/**
 * @deprecated since 4.0, use @int/geotoolkit/util/OptimizationType instead
 */
export { OptimizationType };
/**
 * Enum of display modes
 * @enum
 * @readonly
 */
export declare enum DisplayMode {
    None = 0,
    Line = 1,
    Symbol = 2,
    Both = 3,
    Value = 4,
    Bar = 8,
    Fill = 16
}
/**
 * Enum of rendering optimization types
 * @enum
 * @readonly
 */
export declare enum SymbolOptimizationType {
    /**
     * The same optimization as for curve
     */
    SameAsCurve = "SameAsCurve",
    /**
     * Symbols bbox intersection optimization
     */
    Intersection = "Intersection"
}
/**
 * Enum of curve limits type
 * @enum
 * @readonly
 */
export declare enum LimitsType {
    /**
     * Auto limits
     */
    Auto = "Auto",
    /**
     * Neat limits
     */
    Neat = "Neat",
    /**
     * Manual limits
     */
    Manual = "Manual"
}
/**
 * Enum of step interpolation type
 * @enum
 * @readonly
 */
export declare enum ClippingType {
    /**
     * None
     */
    None = "None",
    /**
     * Software
     */
    Software = "Software",
    /**
     * Hardware
     */
    Hardware = "Hardware"
}
/**
 * Enum of text references
 * @enum
 * @readonly
 */
export declare enum TextReference {
    Track = "track",
    Curve = "curve",
    Sample = "sample"
}
/**
 * Creates the standard representation of a well log curve. Data is passed in a LogAbstractData.<br>
 * The LogCurve is constructed from the passed data source, then addChild() has to be used to add the curve to the track. The corresponding Line Style and interpolation type is set with helper methods.<br>
 * Several methods are also available to handle Clipping, Wrapping, Display Modes( symbols, values etc), curve limits , decimation etc.<br>
 * setMicroPosition() can be used to place log curve at a specified position of the track in horizontal direction.<br>
 * Similarly, the add/remove/get-Child() has to be used to add the track containing the curve, to the TrackContainer.
 *
 * @example
 * import {TrackContainer} from '@int/geotoolkit/welllog/TrackContainer';
 * import {LogTrack} from '@int/geotoolkit/welllog/LogTrack';
 * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
 *
 * new TrackContainer(..)
 *      .addChild(new LogTrack(..)
 *                  .addChild(new LogCurve(dataSource))
 *       )
 */
export declare class LogCurve extends LogPointSet {
    constructor(params?: LogCurve.Options);
    constructor(data?: LogAbstractData, autoUpdate?: boolean);
    on<E extends keyof LogCurve.EventMap>(type: E, callback: (eventType: E, sender: this, args: LogCurve.EventMap[E]) => void): this;
    off<E extends keyof LogCurve.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LogCurve.EventMap[E]) => void): this;
    notify<E extends keyof LogCurve.EventMap>(type: E, source: LogCurve, args?: LogCurve.EventMap[E]): this;
    clone(): LogCurve;
    protected copyConstructor(src: LogCurve, deepCopy?: boolean): this;
    /**
     * Returns the curve description
     *
     * @returns The node name
     */
    getDescription(): string | null;
    /**
     * Sets description of the node
     *
     * @param description The node description
     * @returns this
     */
    setDescription(description: string | null): this;
    /**
     * Returns reference curve
     * @returns reference curve
     */
    getReferenceCurve(): LogCurve | LogReferenceLine | null;
    /**
     * Set reference curve
     * @param referenceCurve reference curve
     * @returns this
     */
    setReferenceCurve(referenceCurve: LogCurve | LogReferenceLine | null): this;
    /**
     * Sets symbol's skip intersection ratio
     * @param symbolSkipIntersectionRatio value to set
     */
    setSymbolSkipIntersectionRatio(symbolSkipIntersectionRatio: number): this;
    /**
     * Gets symbols' skip intersection ratio
     */
    getSymbolsSkipIntersectionRatio(): number;
    /**
     * Sets data source to be displayed.
     *
     * @param [data] data to display
     * @param [resetNormalizationLimits] resets custom normalization limits
     * and take it from data. By default it is true
     * @param [autoUpdate] automatic update from data source. If it sets to true then curve listens on data changes from data source.
     */
    setData(data?: LogCurve.Data, resetNormalizationLimits?: boolean, autoUpdate?: boolean): this;
    /**
     * Synchronize state from data
     * @param [rect] optional area to invalidate
     * @param [args] event arguments
     */
    updateFromData(rect?: Rect, args?: LogDataEvent): this;
    /**
     * Returns WellLog Data
     */
    getDataSource(): LogAbstractData;
    /**
     * Returns whether wrapping is enabled
     */
    isWrapping(): boolean;
    /**
     * Sets whether wrapping is enabled.
     *
     * @param wrapping wrapping on or off, based on if you want to see the clipped part of the track or not
     * @returns this
     * @example
     * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
     * // if you enable wrapping, you also need to specify ClippingLimits
     * const logCurve = new LogCurve()
     *      .setWrapping(true)
     *      .setClippingLimits(0, 100);
     */
    setWrapping(wrapping: boolean): this;
    /**
     * Sets maximum count of wraps for wrap interpolation
     *
     * @param count count of wraps
     * @throws {Error} if count is less then zero
     * @returns this
     */
    setMaxWraps(count: number): this;
    /**
     * Returns maximum count of the wraps
     */
    getMaxWraps(): number;
    /**
     * Sets normalization limits of the data values. The data limits are used by
     * default.
     *
     * @param minValue min value which can be specified for normalization
     * @param [maxValue] max value which can be specified for normalization
     * @param [interpolationEdge] edge values interpolation type, edge interpolation type does not change if it was not specified
     * @returns this
     * @example
     * curve.setNormalizationLimits(100, 130); // It means that each sample value that is less than 100 should have value 100, Same for 130
     */
    setNormalizationLimits(minValue: number | Range, maxValue?: number, interpolationEdge?: InterpolationEdge): this;
    /**
     * Default Clipping type
     */
    static get DefaultClippingType(): ClippingType;
    /**
     * Sets Clipping limits of the data values. The data limits are used by
     * default.
     *
     * @param minValue This provides a way to specify min limit for clipping.
     * @param maxValue This provides a way to specify max limit for clipping.
     * @param [clippingType] optional clipping type
     * @returns this
     */
    setClippingLimits(minValue: number, maxValue: number, clippingType?: ClippingType): this;
    /**
     * Returns true if clipping is enabled
     */
    isClippingEnabled(): boolean;
    /**
     * Returns true if normalization is enabled
     */
    isNormalizationEnabled(): boolean;
    /**
     * Returns true if limits are custom
     */
    isCustomLimits(): boolean;
    /**
     * Sets auto limits strategy
     *
     * @param strategy strategy to calculate auto limits
     * @returns this
     */
    setAutoLimitsStrategy(strategy: LogCurveLimitsStrategy | null): this;
    /**
     * Return auto limits strategy. If it is null then default logic
     * will be used depending on limits type
     */
    getAutoLimitsStrategy(): LogCurveLimitsStrategy | null;
    /**
     * Sets neat log limits
     *
     * @param centerOnZeroOnNegativeMin center the limits
     * @returns this
     */
    setNeatLogLimits(centerOnZeroOnNegativeMin: boolean): this;
    /**
     * Gets the value of centerOnZeroOnNegativeMin property
     */
    getNeatLogLimits(): boolean;
    /**
     * This method resets custom normalization limits
     * @returns this
     */
    resetNormalizationLimits(): this;
    /**
     * This method resets clipping limits
     * @returns this
     */
    resetClippingLimits(): this;
    /**
     * Returns minimum normalization limit
     */
    getMinimumNormalizationLimit(): number;
    /**
     * Returns maximum normalization limit
     */
    getMaximumNormalizationLimit(): number;
    /**
     * Returns edge values interpolation type
     */
    getInterpolationEdge(): InterpolationEdge;
    /**
     * Set edge values interpolation type in case of properties.limitstype==LimitsType.Manual
     * @param interpolationEdge edge values interpolation type
     * @returns this
     */
    setInterpolationEdge(interpolationEdge: InterpolationEdge): this;
    /**
     * Returns minimum clipping limit
     */
    getMinimumClippingLimit(): number;
    /**
     * Returns maximum clipping limit
     */
    getMaximumClippingLimit(): number;
    /**
     * Returns original data value limits
     */
    getValueDataLimits(): Range;
    /**
     * Returns model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Update state
     * @param [regions] optional array to return invalid rectangles
     * @param [changes] optional parameter to specify a reason of changes
     * @returns this
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
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
     * Returns interpolation type
     */
    getInterpolationType(): InterpolationType;
    /**
     * Sets interpolation type
     * @param interpolationType interpolation type
     * @returns this
     */
    setInterpolationType(interpolationType: InterpolationType): this;
    /**
     * Returns display mode
     * @returns any combination of values: 'line', 'symbol', 'value', 'bar' or an empty array
     */
    getDisplayMode(): string[];
    /**
     * Sets display mode
     * @param displayMode display mode; an array with a combination of values: 'line', 'symbol', 'both', 'value', 'bar' or 'none'
     * @returns this
     */
    setDisplayMode(displayMode: string[]): this;
    /**
     * Returns display mode
     */
    protected _getDisplayMode(): DisplayMode;
    /**
     * Sets display mode
     * @param displayMode display mode
     * @returns this
     */
    protected _setDisplayMode(displayMode: DisplayMode): this;
    /**
     * Helper method to setup line visibility
     *
     * @param enable visibility of the line
     * @returns this
     */
    setVisibleLine(enable: boolean): this;
    /**
     * Returns true if line is visible (convenience method)
     */
    isVisibleLine(): boolean;
    /**
     * Helper method to set up symbols visibility
     *
     * @param enable symbols visibility on or off
     * @returns this
     */
    setVisibleSymbol(enable: boolean): this;
    /**
     * Returns true if symbols are visible (convenience method)
     */
    isVisibleSymbol(): boolean;
    /**
     * Helper method to set up values visibility.
     *
     * @param enable values visibility on or off
     * @returns this
     */
    setVisibleValue(enable: boolean): this;
    /**
     * Returns true if values are visible (convenience method)
     */
    isVisibleValue(): boolean;
    /**
     * Helper method to set up value-bars visibility.
     *
     * @param enable value-bars visibility on or off
     * @returns this
     */
    setVisibleBar(enable: boolean): this;
    /**
     * Returns true if value-bars are visible
     */
    isVisibleBar(): boolean;
    /**
     * Helper method to set value-bars line style.
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setBarLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Helper method to get value-bars line style
     */
    getBarLineStyle(): LineStyle;
    /**
     * Helper method to set alignment of value-bars to the right
     * @param enable defines if value-bars right align is true or false
     * @returns this
     */
    setBarsRightAligned(enable: boolean): this;
    /**
     * Returns true if value-bars right align is true
     */
    isBarsRightAligned(): boolean;
    /**
     * Converts data sample value to curve model value
     *
     * @param v data value
     * @param [d] data depth
     * @returns a curve value
     */
    convertDataToCurveValue(v: number, d?: number): number;
    /**
     * Converts curve model value to data sample value
     *
     * @param v curve value
     * @returns a data value
     */
    convertCurveToDataValue(v: number): number;
    /**
     * Set state of rendering for out of range values
     * @param outOfRangeValues value to set
     * @returns this
     */
    setDrawOutOfRangeValues(outOfRangeValues: boolean): this;
    /**
     * Returns true if zero is a valid value in logarithmic mode
     */
    getDrawOutOfRangeValues(): boolean;
    /**
     * Sets the value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero and the unit is convertible to the index unit.
     * @param cutoff The cutoff value. When non zero and a matching unit is set
     * @returns this
     */
    setGapFillCutoffValue(cutoff: number): this;
    /**
     * Returns the value of the cutoff used for removing NaN valued samples
     * @returns The cutoff value
     */
    getGapFillCutoffValue(): number;
    /**
     * Set the value of the gap. Value will be used to disconnect the sample if the distance between two samples in depth or time is more than specified value
     * @param value The maximum discontinuity allowed in depth or time
     * @returns this
     */
    setGapValue(value: number): this;
    /**
     * Returns The maximum discontinuity allowed in depth or time
     * @returns value
     */
    getGapValue(): number;
    /**
     * Sets the unit of the cutoff used for removing NaN valued samples. Gaps will only be 'filled'
     * when the cutoff value is non zero and the unit is convertible to the index unit. If unit is not specified
     * then curve index unit is used. if a depth or time interval is less than specified cutoff value then interval is connected and NaN
     * values between are removed.
     * @param unit The unit or unit symbol to use for the gap fill cutoff
     * @returns this
     */
    setGapFillCutoffUnit(unit: AbstractUnit | string): this;
    /**
     * Returns the unit of the cutoff used for removing NaN valued samples
     * @returns The cutoff unit
     */
    getGapFillCutoffUnit(): AbstractUnit;
    /**
     * Set a flag how to process NaN samples in cutoff range
     * @param cutoffMode mode, by default is {@link @int/geotoolkit/data/DataGapFillInterpolation~CutoffMode.RemoveSample}
     * @returns this
     */
    setGapFillCutoffMode(cutoffMode: CutoffMode): this;
    /**
     * Return cutoff mode
     */
    getGapFillCutoffMode(): CutoffMode;
    /**
     * Sets the unit of the gap to show discontinuity in sample
     * when the cutoff value is non-zero and the unit is convertible to the index unit. If unit is not specified
     * then curve index unit is used. if a depth or time interval is less than specified cutoff value then interval is connected and NaN
     * values between are removed.
     * @param unit The unit
     * @returns this
     */
    setGapUnit(unit: AbstractUnit | string): this;
    /**
     * Returns the unit of the gap
     * @returns The cutoff unit
     */
    getGapUnit(): AbstractUnit;
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
     * Gets hide overlapped values flag
     * @returns hide overlapped values
     */
    getHideOverlappedValues(): boolean;
    /**
     * Sets hide overlapped values
     * @param enable hide overlapped values
     * @returns this
     */
    setHideOverlappedValues(enable: boolean): this;
    /**
     * Converts optimization type value
     * @param optimizationType optimization type
     */
    static convertOptimizationTypeValue(optimizationType: OptimizationType): OptimizationType;
    /**
     * Returns scaled data
     * @param [transformation] transformation
     */
    getScaledData(transformation?: Transformation): AbstractScaledData | null;
    /**
     * Returns data range
     * @param fromDepth from depth
     * @param toDepth to depth
     * @param transformation transformation
     * @returns data range
     */
    getDataRange(fromDepth: number, toDepth: number, transformation?: Transformation): AbstractScaledData;
    /**
     * Sets optimization type
     * @param optimizationType optimization type which used with current curve
     * @returns this
     */
    setOptimizationType(optimizationType: OptimizationType): this;
    /**
     * Turns on/off optimization for curve
     * @param [needOptimize] Is optimization for curve on
     * @returns this
     */
    setOptimizationCurve(needOptimize?: boolean): this;
    /**
     * Returns curve optimization flag
     */
    getOptimizationCurve(): boolean;
    /**
     * Turns on/off optimization for bars
     * @param [needOptimize] Is optimization for bars on
     * @returns this
     */
    setOptimizationBar(needOptimize?: boolean): this;
    /**
     * Returns bars optimization flag
     */
    getOptimizationBar(): boolean;
    /**
     * Sets optimization type
     * @param optimizationType optimization type which used with current symbols
     * @returns this
     */
    setSymbolOptimizationType(optimizationType: SymbolOptimizationType): this;
    /**
     * Turns on/off optimization for symbols
     * @param [needOptimize] Is optimization for symbols on
     * @returns this
     */
    setOptimizationSymbol(needOptimize?: boolean): this;
    /**
     * Returns symbol optimization flag
     */
    getOptimizationSymbol(): boolean;
    /**
     * Turns on/off optimization for values
     * @param [needOptimize] Is optimization for values on
     * @returns this
     */
    setOptimizationValue(needOptimize?: boolean): this;
    /**
     * Returns values optimization flag
     */
    getOptimizationValue(): boolean;
    render(context: RenderingContext): void;
    /**
     * Set wrap line style handler. Custom colors can be set for different wrap levels, please refer to example below.
     * @param wrapLineStyleHandler handler should return {@link @int/geotoolkit/attributes/LineStyle~LineStyle}
     * @returns this
     * @example
     * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
     * curve
     *  .setClippingLimits(60, 90)
     *  .setWrapping(true)
     *  .setMaxWraps(1)
     *  .setWrapLineStyleHandler((sender, wrapLevel) => {
     *               if (wrapLevel < 0) {
     *                   return new LineStyle('blue');
     *               }
     *               if (wrapLevel > 0) {
     *                   return new LineStyle('red');
     *               }
     *               return null;
     *           }));
     */
    setWrapLineStyleHandler(wrapLineStyleHandler: LogCurve.WrapLineStyleHandlerCallback): this;
    /**
     * Returns wrap line style handler
     * @returns wrap style handler
     */
    getWrapLineStyleHandler(): LogCurve.WrapLineStyleHandlerCallback;
    /**
     * Set log gradient style
     * @param gradientLineStyle style
     * @returns this
     */
    setGradientLineStyle(gradientLineStyle: LogGradientStyle): this;
    /**
     * Returns log gradient style
     * @returns log gradient style
     */
    getGradientLineStyle(): LogGradientStyle;
    /**
     * Enable / disable automatic text alignment for text values, which intersects border of the track
     * If it is enabled text is shifted inside the track. By default it is false.
     *
     * @param enabled enable automatic text alignment
     * @returns this
     */
    setTextAutoAlignment(enabled: boolean): this;
    /**
     * Gets status if automatic text alignment is enabled for text values which intersect border of the track
     *
     * @returns enable enable automatic text alignment
     */
    getTextAutoAlignment(): boolean;
    /**
     * Return nearest original sample index from data source by device point
     * @param pt device point to find index of the sample
     * @param [maxDistance] maximum distance in pixels from the current point
     * @param [transformation] transformation of curve to device.
     * If it is not specified, <code>getSceneTransform()</code> is used.
     * @returns index of the sample. if data is not specified or sample is nof found it returns -1
     */
    getNearestSampleIndex(pt: Point, maxDistance?: number, transformation?: Transformation): number;
    /**
     * Returns interpolated value
     * @param depth depth
     */
    getValue(depth: number): number;
    /**
     * Sets symbol to be used to render markers for null value
     *
     * @param symbol symbol used at the start and end of the gap(null value)
     * @returns this
     */
    setNullValueSymbol(symbol: SymbolShape): this;
    /**
     * Returns symbol to be used to draw markers for null value
     */
    getNullValueSymbol(): SymbolShape;
    /**
     * Returns true if symbol to be used to draw markers for null value is visible
     */
    isVisibleNullValueSymbol(): boolean;
    /**
     * Display or hide null values symbols
     * @param visible visible null value symbols
     * @returns this
     */
    setVisibleNullValueSymbol(visible: boolean): this;
    /**
     * Sets symbol to be used to render markers
     *
     * @param symbol symbols to be used for markers
     * @returns this
     */
    setSymbol(symbol: SymbolShape): this;
    /**
     * Returns symbol to be used to draw markers
     */
    getSymbol(): SymbolShape;
    /**
     * Sets symbol decimation step
     *
     * @param step range to skip the symbols
     * @returns this
     */
    setSymbolDecimationStep(step: number): this;
    /**
     * Returns symbols gap
     */
    getSymbolsGap(): Dimension;
    /**
     * Returns symbol decimation step
     */
    getSymbolDecimationStep(): number;
    /**
     * Returns display unit
     */
    getDisplayUnit(): AbstractUnit;
    /**
     * Sets display unit
     *
     * @param unit display unit like feet, meters etc
     * @returns this
     */
    setDisplayUnit(unit: AbstractUnit | string): this;
    /**
     * Returns limits type
     */
    getLimitsType(): LimitsType;
    /**
     * Sets text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     */
    setTextStyle(textStyle: TextStyle.Options | TextStyle | string | null, merge?: boolean): this;
    /**
     * Gets text style
     */
    getTextStyle(): TextStyle;
    /**
     * Sets text anchor type
     *
     * @param anchorType position to place the anchor
     * @throws {Error} if anchorType value is not valid
     */
    setTextAnchorType(anchorType: AnchorType): this;
    /**
     * Gets text anchor type
     */
    getTextAnchorType(): AnchorType;
    /**
     * Sets formatter to be used to format values
     *
     * @param format number formatter
     * @returns this
     */
    setValueFormat(format: DecimalFormat | DecimalFormat.Options): this;
    /**
     * Returns formatter to format values
     */
    getValueFormat(): NumberFormat;
    /**
     * Return symbol formatter
     */
    getSymbolFormatter(): LogCurve.SymbolFormatterCallback;
    /**
     * Set symbol formatter
     * @param symbolFormatter formatter to be used to adjust symbol
     * @example
     *
     * curve.setSymbolFormatter(function (symbol, sample) {
     *      symbol.setPainter(sample.getOriginalValue() > 70 ? CirclePainter : DiamondPainter);
     *      if (sample.getOriginalValue() < 60) {
     *          symbol.getFillStyle().setColor('red');
     *      } else if (sample.getOriginalValue() > 80) {
     *          symbol.getFillStyle().setColor('green');
     *      } else {
     *          symbol.getFillStyle().setColor('blue');
     *      }
     *      return symbol;
     * });
     */
    setSymbolFormatter(symbolFormatter: LogCurve.SymbolFormatterCallback): this;
    /**
     * Sets text reference.
     * Accepted values: 'curve', 'track' or 'sample'.
     *
     * @param textReference sets textreference 'curve', 'track' or 'sample'.
     * @returns this
     */
    setTextReference(textReference: TextReference): this;
    /**
     * Gets sample's text reference type: 'track' or 'sample'
     */
    getTextReference(): TextReference;
    /**
     * Sets text decimation step
     *
     * @param step range to skip while decimating
     */
    setTextDecimationStep(step: number): this;
    /**
     * Returns text decimation step
     */
    getTextDecimationStep(): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): LogCurve.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogCurve.Options): this;
    /**
     * Hit test symbols of the curve in the device coordinates
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of selected symbols indices
     */
    hitTest(area: Rect | Point, radius?: number): number[];
}
export declare namespace LogCurve {
    /**
     * data source to be displayed or object containing log visual configuration
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * datasource
         */
        data?: Data;
        /**
         * automatic update from datasource. If true, curve listens to data changes from source
         */
        autoupdate?: boolean;
        /**
         * The node description
         */
        description?: string;
        /**
         * value-bar line style
         */
        barlinestyle?: LineStyle.Type;
        /**
         * text style
         */
        textstyle?: TextStyle.Options | TextStyle | string;
        /**
         * values scale type
         */
        scaletype?: ScaleType;
        /**
         * type of the text to be put on the track
         */
        textreference?: TextReference;
        /**
         * automatic text alignment for text values, which intersects border of the track
         */
        textautoalignment?: boolean;
        /**
         * reference curve
         */
        referencecurve?: LogCurve;
        /**
         * display unit
         */
        displayunit?: AbstractUnit | string;
        /**
         * display mode like 'line' , 'symbol'
         */
        displaymode?: string[];
        /**
         * hide overlapped value
         */
        hideoverlappedvalues?: boolean;
        /**
         * limits type
         */
        limitstype?: LimitsType;
        /**
         * min limits value in case of data.limitstype==LimitsType.Manual
         */
        limitsmin?: number;
        /**
         * max limits value in case of data.limitstype==LimitsType.Manual
         */
        limitsmax?: number;
        /**
         * limits strategy in case of data.limitstype==LimitsType.Auto
         */
        autolimitsstrategy?: LogCurveLimitsStrategy;
        /**
         * edge values interpolation type in case of properties.limitstype==LimitsType.Manual
         */
        interpolationedge?: InterpolationEdge;
        /**
         * interpolation type
         */
        interpolationtype?: InterpolationType;
        /**
         * flag set to center the limits
         */
        centeronzeroonnegativemin?: boolean;
        /**
         * symbol to be used
         */
        symbol?: SymbolShape;
        /**
         * null value symbol
         */
        nullvaluesymbol?: SymbolShape;
        /**
         * flag to change visibility of null value symbol
         */
        nullvaluesymbolvisible?: boolean;
        /**
         * symbol decimation step or level
         */
        symboldecimationstep?: number;
        /**
         * maximum count of wraps (by default 5)
         */
        maxwraps?: number;
        /**
         * flag to enable wrapping based on if you want to see the clipped part of the track or not
         */
        wrapping?: boolean;
        /**
         * flag to enable clipping
         */
        clipping?: boolean;
        /**
         * min clipping limits
         */
        cliplimitsmin?: number;
        /**
         * max clipping limits
         */
        cliplimitsmax?: number;
        /**
         * text decimation step
         */
        textdecimationstep?: number;
        /**
         * style
         */
        gradientlinestyle?: LogGradientStyle;
        /**
         * an object containing cutoff options
         */
        gapfillcutoff?: {
            /**
             * The cutoff value. When non zero and a matching unit is set
             */
            value?: number;
            /**
             * unit The unit or unit symbol to use for the gap fill cutoff
             */
            unit?: AbstractUnit | string;
        };
        /**
         * format options (see {@link @int/geotoolkit/util/DecimalFormat~DecimalFormat} for more info)
         */
        formatoptions?: {
            /**
             * format
             */
            format?: string;
            /**
             * specify maximum fraction digits
             */
            maximumfractiondigits?: number;
        };
        /**
         * outofrangevalues flag
         */
        outofrangevalues?: boolean;
        /**
         * horizontal flip
         */
        horizontalflip?: boolean;
        /**
         * optimization flags
         */
        optimization?: boolean | {
            /**
             * curve optimization flag
             */
            curve?: boolean;
            /**
             * bar optimization flag
             */
            bar?: boolean;
            /**
             * symbol optimization flag
             */
            symbol?: boolean;
            /**
             * value optimization flag
             */
            value?: boolean;
        };
    };
    /**
     * data to display
     */
    type Data = LogAbstractData | {
        /**
         * datasource
         */
        data?: LogAbstractData | LogDataStruct;
    };
    type LogDataStruct = {
        /**
         * curve name
         */
        name?: string;
        /**
         * datasource depths series/array
         */
        depths?: DataSeries | number[];
        /**
         * datasource values series/array
         */
        values?: DataSeries | number[];
    };
    /**
     * Callback wrap style
     */
    type WrapLineStyleHandlerCallback = (curve: LogCurve, n: number) => LineStyle.Type | LogGradientStyle;
    /**
     * Callback for symbol formatter
     */
    type SymbolFormatterCallback = (symbol: SymbolShape, sample: LogDataSample) => SymbolShape | null;
    type OptionsOut = LogAbstractVisual.OptionsOut & {
        /**
         * automatic update from datasource. If true, curve listens to data changes from source
         */
        autoupdate?: boolean;
        /**
         * The node description
         */
        description?: string;
        /**
         * value-bar line style
         */
        barlinestyle?: LineStyle;
        /**
         * text style
         */
        textstyle?: TextStyle;
        /**
         * values scale type
         */
        scaletype?: ScaleType;
        /**
         * type of the text to be put on the track
         */
        textreference?: TextReference;
        /**
         * display unit
         */
        displayunit?: AbstractUnit;
        /**
         * true, if scale is logarithmic
         */
        logscale?: boolean;
        /**
         * automatic text alignment for text values, which intersects border of the track
         */
        textautoalignment?: boolean;
        /**
         * reference point set
         */
        referencecurve?: LogCurve | LogReferenceLine;
        /**
         * display mode like 'line' , 'symbol'
         */
        displaymode?: string[];
        /**
         * hide overlapped value
         */
        hideoverlappedvalues?: boolean;
        /**
         * limits type
         */
        limitstype?: LimitsType;
        /**
         * min limits value in case of properties.limitstype==LimitsType.Manual
         */
        limitsmin?: number;
        /**
         * max limits value in case of properties.limitstype==LimitsType.Manual
         */
        limitsmax?: number;
        /**
         * limits strategy
         */
        autolimitsstrategy?: LogCurveLimitsStrategy;
        /**
         * edge values interpolation type in case of properties.limitstype==LimitsType.Manual
         */
        interpolationedge?: InterpolationEdge;
        /**
         * interpolation type
         */
        interpolationtype?: InterpolationType;
        /**
         * flag set to center the limits
         */
        centeronzeroonnegativemin?: boolean;
        /**
         * symbol to be used
         */
        symbol?: SymbolShape;
        /**
         * null value symbol
         */
        nullvaluesymbol?: SymbolShape;
        /**
         * flag to change visibility of null value symbol
         */
        nullvaluesymbolvisible?: boolean;
        /**
         * symbol decimation step or level
         */
        symboldecimationstep?: number;
        /**
         * maximum count of wraps (by default 5)
         */
        maxwraps?: number;
        /**
         * flag to enable wrapping based on if you want to see the clipped part of the track or not
         */
        wrapping?: boolean;
        /**
         * flag to enable clipping
         */
        clipping?: boolean;
        /**
         * min clipping limits
         */
        cliplimitsmin?: number;
        /**
         * max clipping limits
         */
        cliplimitsmax?: number;
        /**
         * text decimation step
         */
        textdecimationstep?: number;
        /**
         * style
         */
        gradientlinestyle?: LogGradientStyle;
        /**
         * an object containing cutoff options
         */
        gapfillcutoff?: {
            /**
             * The cutoff value. When non zero and a matching unit is set
             */
            value?: number;
            /**
             * unit The unit or unit symbol to use for the gap fill cutoff
             */
            unit?: AbstractUnit;
        };
        /**
         * format options (see {@link @int/geotoolkit/util/DecimalFormat~DecimalFormat} for more info)
         */
        formatoptions?: NumberFormat;
        /**
         * outofrangevalues flag
         */
        outofrangevalues?: boolean;
        /**
         * horizontal flip
         */
        horizontalflip?: boolean;
        /**
         * optimization flags
         */
        optimization?: {
            /**
             * curve optimization flag
             */
            curve?: boolean;
            /**
             * bar optimization flag
             */
            bar?: boolean;
            /**
             * symbol optimization flag
             */
            symbol?: boolean;
            /**
             * value optimization flag
             */
            value?: boolean;
        };
    };
    type EventMap = Merge<LogAbstractVisual.EventMap, {
        [WelllogDataEvents.Updated]: void;
        [LogCurveEvents.MicropositionChanged]: void;
    }>;
}
