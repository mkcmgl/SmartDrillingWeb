import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Range } from '@int/geotoolkit/util/Range';
import { ScaleType } from '@int/geotoolkit/welllog/data/ScaleType';
import { LogPointSet } from '@int/geotoolkit/welllog/LogPointSet';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import type { StateChanges } from '@int/geotoolkit/scene/Node';
/**
 * Creates a LogBar visual. Data is passed in an LogData.
 */
export declare class LogBarVisual extends LogPointSet {
    /**
     * Constructor
     * @param [options] The log bar visual options object.
     */
    constructor(options?: LogBarVisual.Options);
    clone(): LogBarVisual;
    protected copyConstructor(src: LogBarVisual, deepCopy?: boolean): this;
    /**
     * Gets the flag which indicates whether auto value limits are enabled.
     * @returns enableAutoLimits The autoLimits flag.
     */
    getEnableAutoLimits(): boolean;
    /**
     * Sets the flag which indicates whether auto value limits are enabled.
     * @param enableAutoLimits The autoLimits flag.
     * @returns this
     */
    setEnableAutoLimits(enableAutoLimits: boolean): this;
    /**
     * Gets the value limits
     * @returns limits The manual limits.
     */
    getLimits(): Range;
    /**
     * Sets the manual value limits
     * @param limits The value limits.
     * @returns this
     */
    setLimits(limits: Range): this;
    /**
     * Sets data source to be displayed.
     * @param data data to display
     * @param [autoUpdate] automatic update from data source
     * @returns this
     */
    setData(data: LogAbstractData, autoUpdate?: boolean): this;
    /**
     * Returns WellLog Data
     */
    getDataSource(): LogAbstractData;
    /**
     * Returns reference bar
     * @returns reference bar
     */
    getReferenceBar(): LogBarVisual;
    /**
     * Set reference bar
     * @param referenceBar reference bar
     * @returns this
     */
    setReferenceBar(referenceBar: LogBarVisual): this;
    /**
     * Sets scale type. This applies function to data values.
     * @param type scale type
     * @returns this
     */
    setScaleType(type: ScaleType | string): this;
    /**
     * Returns current scale type.
     */
    getScaleType(): ScaleType | string;
    /**
     * Sets reverse mode state
     * @param reverse reverse flag
     * @returns this
     */
    setReverse(reverse: boolean): this;
    /**
     * Gets reverse mode state
     * @returns state of the reverse mode
     */
    getReverse(): boolean;
    /**
     * Sets the amount of space between adjacent bars.
     * @param barSpacing The amount of space between adjacent bars.
     * @returns this
     */
    setBarSpacing(barSpacing: number): this;
    /**
     * Gets the amount of space between adjacent bars.
     * @returns barSpacing The amount of space between adjacent bars.
     */
    getBarSpacing(): number;
    /**
     * Sets the width of each bar
     * @param barWidth The width of each bar
     * @returns this
     */
    setBarWidth(barWidth: number | number[]): this;
    /**
     * Gets the width of each bar.
     */
    getBarWidth(): number | number[];
    /**
     * Sets the depth unit
     * @param unit The type of unit for bar width and bar spacing.
     * @returns this
     */
    setUnit(unit: AbstractUnit): this;
    /**
     * Gets the depth unit
     * @returns The type of unit for bar width and bar spacing.
     */
    getUnit(): AbstractUnit;
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
    getDataLimits(fullLimits?: boolean): Rect | null;
    /**
     * Returns original data value limits
     */
    getValueDataLimits(): Range;
    /**
     * Returns model limits
     * @returns model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Update state
     * @param [regions] optional array to return invalid rectangles
     * @returns this
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns The object properties
     */
    getProperties(): LogBarVisual.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogBarVisual.Options): this;
}
export declare namespace LogBarVisual {
    /**
     * The log bar visual options object.
     */
    type Options = LogAbstractVisual.Options & {
        /**
         * data source to be displayed
         */
        data?: LogAbstractData;
        /**
         * Whether to automatically update from data
         */
        autoupdate?: boolean;
        /**
         * The amount of space between adjacent bars
         */
        barspacing?: number;
        /**
         * The width of each bar
         */
        barwidth?: number | number[];
        /**
         * The type of unit for bar width and bar spacing.
         */
        unit?: AbstractUnit;
        /**
         * The fill style.
         */
        fillstyle?: FillStyle.Type;
        /**
         * Whether the limits should be automatically calculated
         */
        enableautolimits?: boolean;
        /**
         * The value limits that should be used if autoLimits is disabled
         */
        limits?: Range;
        /**
         * values scale type
         */
        scaletype?: ScaleType | string;
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
         * The amount of space between adjacent bars.
         */
        barspacing: number;
        /**
         * The width of each bar
         */
        barwidth: number | number[];
        /**
         * The type of unit for bar width and bar spacing.
         */
        unit: AbstractUnit;
        /**
         * fill style
         */
        fillstyle: FillStyle;
        /**
         * The autoLimits flag.
         */
        enableautolimits: boolean;
        /**
         * The value limits.
         */
        limits: Range;
        /**
         * values scale type
         */
        scaletype: ScaleType | string;
    };
}
