import { Range } from '@int/geotoolkit/util/Range';
import { Rect } from '@int/geotoolkit/util/Rect';
import { CutoffMode } from '@int/geotoolkit/data/DataGapFillInterpolation';
import { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import { InterpolationType } from '@int/geotoolkit/data/DataStepInterpolation';
import { StateChanges } from '@int/geotoolkit/scene/Node';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Point } from '@int/geotoolkit/util/Point';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * Enum of Gap Stacking mode
 * @readonly
 * @enum
 */
export declare enum GapStackingMode {
    /**
     * Default Gap Stacking mode, keep all stacked samples
     */
    KeepSample = "KeepSample",
    /**
     * Remove all stacked sample after NaN
     */
    RemoveSamples = "RemoveSamples"
}
/**
 * StackedLogFill class implements a fill between array of {@link @int/geotoolkit/welllog/data/LogAbstractData~LogAbstractData}.<br>
 */
export declare class StackedLogFill extends LogAbstractVisual {
    /**
     * Constructor
     * @param [params] properties object
     */
    constructor(params?: StackedLogFill.Options);
    /**
     * Constructor
     * @param [options] log data array
     * @param [autoUpdate] automatic update from data source. If it sets to true then fill listens on data changes from data source.
     */
    constructor(data: LogAbstractData[], autoUpdate?: boolean);
    /**
     * Disposes the stacked fill
     */
    dispose(): void;
    clone(): StackedLogFill;
    protected copyConstructor(src: StackedLogFill, deepCopy?: boolean): this;
    /**
     * Returns interpolation type
     * ('Linear', 'MiddleStep', 'EndStep', 'StartStep')
     */
    getInterpolationType(): InterpolationType;
    /**
     * Sets interpolation type
     *
     * @param interpolationType interpolation type
     * @throws {Error} If interpolationType is not correct
     */
    setInterpolationType(interpolationType: InterpolationType): this;
    /**
     * Sets the value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero and the unit is convertible to the index unit.
     * @param cutoff  The cutoff value. When non zero and a matching unit is set
     */
    setGapFillCutoffValue(cutoff: number): this;
    /**
     * Returns the value of the cutoff used for removing NaN valued samples
     */
    getGapFillCutoffValue(): number;
    /**
     * Sets the unit of the cutoff used for removing NaN valued samples. Gaps will only be 'filled'
     * when the cutoff value is non zero and the unit is convertible to the index unit. If unit is not specified
     * then curve index unit is used. if a depth or time interval is less than specified cutoff value then interval is connected and NaN
     * values between are removed.
     * @param unit The unit or unit symbol to use for the gap fill cutoff
     */
    setGapFillCutoffUnit(unit: string | AbstractUnit | null): this;
    /**
     * Returns the unit of the cutoff used for removing NaN valued samples
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
     * Set a flag how to stack sample after NaN value
     * @param stackingMode mode, by default is {@link @int/geotoolkit/welllog/StackedLogFill~GapStackingMode.KeepSample}
     * @returns this
     */
    setGapStackingMode(stackingMode: GapStackingMode): this;
    /**
     * Return gap stacking mode
     */
    getGapStackingMode(): GapStackingMode;
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
     * Return bounds
     * @returns bounds
     */
    getBounds(): Rect;
    render(context: RenderingContext): void;
    /**
     * Update state
     * @param [regions] optional array to return invalid rectangles
     * @param [changes] optional parameter to specify a reason of changes
     * @returns this
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Hit test in the device coordinates
     * @param area model area or position
     * @param [radius] radius of selection
     * @returns a collection of selected nodes
     */
    hitTest(area: Rect | Point, radius?: number): StackedLogFill.Hits;
    /**
     * Returns displayed data sources
     */
    getData(): Iterator<LogAbstractData>;
    /**
     * Sets data source to be displayed.
     *
     * @param logDataArray data to display
     * @param [resetNormalizationLimits] resets custom normalization limits
     * and take it from data. By default it is true
     * @param [autoUpdate] automatic update from data source. If it sets to true then fill listens on data changes from data source.
     */
    setData(logDataArray: LogAbstractData[], resetNormalizationLimits?: boolean, autoUpdate?: boolean): this;
    /**
     * Return curve count
     */
    getCurvesCount(): number;
    /**
     * Returns curve and fill options
     * @param index data source index
     */
    getCurveOptions(index: number): StackedLogFill.CurveOptionsOut | null;
    /**
     * Set curve and fill options
     * @param index data source index
     * @param options curve options
     */
    setCurveOptions(index: number, options: StackedLogFill.CurveOptions): this;
    /**
     * Set reference line options
     * @param options reference line options
     */
    setReferenceLineOptions(options: StackedLogFill.LineOptions): this;
    /**
     * Returns reference line options
     */
    getReferenceLineOptions(): StackedLogFill.LineOptionsOut | null;
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
     * @param range limits of normalization
     * @returns this
     */
    setNormalizationLimits(range: Range): this;
    /**
     * Sets normalization limits of the data values. The data limits are used by default.
     * @param minValue min value which can be specified for normalization
     * @param maxValue max value which can be specified for normalization
     * @returns this
     * @example
     * StackedLogFill.setNormalizationLimits(100, 130); // It means that each sample value that is less than 100 should have value 100, Same for 130
     */
    setNormalizationLimits(minValue: number, maxValue: number): this;
}
export declare namespace StackedLogFill {
    /**
     * log data array or properties object
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * log data array or properties object
         */
        logdataarray?: LogAbstractData[];
        /**
         * automatic update from data source. If it sets to true then fill listens on data changes from data source.
         */
        autoupdate?: boolean;
    };
    /**
     * a collection of selected nodes
     */
    type Hits = {
        /**
         * a collection of indices selected nodes
         */
        fills?: number[];
        /**
         * a collection of indices selected nodes
         */
        curves?: number[];
    };
    type CurveOptionsOut = {
        /**
         * fill style
         */
        fillstyle: FillStyle;
        /**
         * line style
         */
        linestyle: LineStyle;
        /**
         * symbol to be used to draw markers
         */
        symbol: SymbolShape;
        /**
         * display mode
         */
        displaymode: string[];
    };
    /**
     * curve options
     */
    type CurveOptions = {
        /**
         * fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
        /**
         * symbol to be used for markers
         */
        symbol?: SymbolShape;
        /**
         * display mode
         */
        displaymode?: string[];
    };
    /**
     * reference line options
     */
    type LineOptions = {
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
        /**
         * visibility flag
         */
        visible?: boolean;
    };
    type LineOptionsOut = {
        /**
         * line style
         */
        linestyle: LineStyle;
        /**
         * visibility flag
         */
        visible: boolean;
    };
}
