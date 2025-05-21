/**
 * @module geotoolkit/welllog/data/LogAbstractData
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Events } from '@int/geotoolkit/welllog/data/Events';
import { Order } from '@int/geotoolkit/util/Order';
import { InterpolationType } from '@int/geotoolkit/data/DataStepInterpolation';
import { LogDataState } from '@int/geotoolkit/welllog/data/LogDataState';
import type { LogDataEvent } from '@int/geotoolkit/welllog/data/LogDataEvent';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { Range } from '@int/geotoolkit/util/Range';
/**
 * Define abstract Log data
 */
export declare abstract class LogAbstractData extends EventDispatcher {
    protected constructor();
    on<E extends keyof LogAbstractData.EventMap>(type: E, callback: (eventType: E, sender: this, args: LogAbstractData.EventMap[E]) => void): this;
    off<E extends keyof LogAbstractData.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LogAbstractData.EventMap[E]) => void): this;
    notify<E extends keyof LogAbstractData.EventMap>(type: E, source: LogAbstractData, args?: LogAbstractData.EventMap[E]): this;
    /**
     * Return the value to indicate if data source was changed
     */
    getTimeStamp(): number;
    /**
     * Update time stamp
     */
    updateTimeStamp(): void;
    /**
     * Sets state of data.
     * Values can be (Empty,Normal, Warning,Error,Fetching).
     *
     * @param state state of data.
     * @returns this
     */
    setState(state: LogDataState): this;
    /**
     * Return state
     */
    getState(): LogDataState;
    /**
     * Notify when data has been changed.
     * @param [args] optional parameters
     */
    protected update(args?: LogDataEvent): void;
    /**
     * Return index for specified depth
     * @param depth The depth for which you want to compute the index
     * @param [fromIndex] index of sample in depths
     * @param [toIndex] index of sample in depths
     */
    getIndexAt(depth: number, fromIndex?: number, toIndex?: number): number;
    /**
     * Return the value matching the given depth or NaN if the given depth is out of the logdata depth range.
     *
     * If the depths are strictly increasing:
     * - The returned value will be interpolated when necessary. See example 1
     *
     * If the depths are not strictly increasing but never decreasing:
     * - The value returned will be the first one found (in the insertion order). See example 2
     * - The value returned will be interpolated between the last one found and its closest larger neighbor. See example 2
     *
     * If the depths are not always increasing (not forward only):
     * - The value returned will be the last one found (in the insertion order). See example 3
     * - The value returned will be interpolated between the first one found and its closest larger neighbor. See example 3
     *
     * Examples assume the default linear interpolation
     * @example
     * // Depth Value
     * // 0      0
     * // 100    1
     * // 200    2
     *
     * getValueAt(100) // -> 1
     * getValueAt(150) // -> 1.5
     * @example
     * // Depth Value
     * // 0      0
     * // 100    1
     * // 100    2
     * // 200    3
     *
     * getValueAt(100) // -> 1
     * getValueAt(150) // -> 2.5
     * @example
     * // Depth Value
     * // 0      0
     * // 100    1
     * // 200    2
     * // 100    3
     *
     * getValueAt(100) // -> 3
     * getValueAt(150) // -> 1.5
     * @param depth The depth for which you want to compute the value
     * @param [fromIndex] index of sample in depths
     * @param [toIndex] index of sample in depths
     * @param [interpolation] interpolation type for the value
     */
    getValueAt(depth: number, fromIndex?: number, toIndex?: number, interpolation?: InterpolationType): number;
    /**
     * Suspend update
     * @returns this
     */
    suspendUpdate(): this;
    /**
     * Resume update.
     * forceUpdate updates data statistics (update min, max of values, depths...)
     * @param forceUpdate force update based on the state of the data
     * @returns this
     */
    resumeUpdate(forceUpdate: boolean): this;
    /**
     * Utility function to interpolate a value between two depths.
     *
     * @param depth The depth for which you want to compute the value
     * @param depths The array of ordered depths
     * @param values The array of values
     * @param prev The index of the largest previous depth
     * @param next The index of the smallest following depth
     * @param [interpolation] interpolation type for the value
     * @returns The interpolated value or Number.NaN if outside the range
     */
    static findValueAt(depth: number, depths: number[], values: number[], prev: number, next: number, interpolation?: InterpolationType): number;
    /**
     * Utility function to interpolate a value between two depths.
     *
     * @param depth The depth for which you want to compute the value
     * @param depthPrev prev depth
     * @param valuePrev prev value
     * @param depthNext next depth
     * @param valueNext next value
     * @param [interpolation] interpolation type for the value
     * @returns The interpolated value or Number.NaN if outside the range
     */
    static interpolateValueAt(depth: number, depthPrev: number, valuePrev: number, depthNext: number, valueNext: number, interpolation?: InterpolationType): number;
    /**
     * Return the count of the samples
     */
    abstract getSize(): number;
    /**
     * Sets value unit
     * @param unit value unit
     * @throws {Error} when this method is not implemented
     * @returns this
     */
    abstract setValueUnit(unit: AbstractUnit | string): this;
    /**
     * Return the depth unit
     * @throws {Error} when this method is not implemented
     */
    abstract getValueUnit(): AbstractUnit;
    /**
     * Sets index unit
     * @param unit index unit
     * @throws {Error} when this method is not implemented
     * @returns this
     */
    abstract setIndexUnit(unit: AbstractUnit | string): this;
    /**
     * Return the value unit
     * @throws {Error} when this method is not implemented
     */
    abstract getIndexUnit(): AbstractUnit;
    /**
     * Return name of the data
     */
    abstract getName(): string;
    /**
     * Set name of the data
     * @param name The log data name
     * @returns this
     */
    abstract setName(name: string): this;
    /**
     * Clear log data. Removes all samples and reset depth limits
     * @returns this
     */
    abstract clear(): this;
    /**
     * Return minimum depth
     * @throws {Error} when this method is not implemented
     */
    abstract getMinDepth(): number;
    /**
     * Return maximum depth
     * @throws {Error} when this method is not implemented
     */
    abstract getMaxDepth(): number;
    /**
     * Return minimum data value
     */
    abstract getMinValue(): number;
    /**
     * Return maximum data value
     */
    abstract getMaxValue(): number;
    /**
     * Return minimum Meaning depth (first depth with value)
     */
    abstract getMinMeaningDepth(): number;
    /**
     * Return maximum Meaning depth (last depth with value)
     */
    abstract getMaxMeaningDepth(): number;
    /**
     * Return an array of values
     */
    abstract getValues(): number[];
    /**
     * Return an array of depths
     */
    abstract getDepths(): number[];
    /**
     * Return depth by index
     * @param index index at the depth
     */
    getDepth(index: number): number;
    /**
     * Return value by index
     * @param index index of the sample in the array
     */
    getValue(index: number): number;
    /**
     * Set value by index
     * @param index index of the sample
     * @param value sample values
     * @returns this
     * @throws {Error} when this method is not implemented
     */
    abstract setValue(index: number, value: number): this;
    /**
     * @param range range
     * @param scale scale
     * @param [callback] callback to be called after loading data
     */
    abstract requestData(range: Range, scale: number, callback?: () => void): void;
    /**
     * Return true if data is in ascending order
     */
    abstract isForwardOnly(): boolean;
    /**
     * Return the order of the log data
     */
    abstract getDataOrder(): Order;
    /**
     * Return an array of neat min and max
     * @param logScale scale log scale
     * @param centerOnZeroOnNegativeMin If negative and positive values, center around 0
     * @param displayUnit displayed unit
     */
    abstract calculateNeatLimits(logScale: boolean, centerOnZeroOnNegativeMin: boolean, displayUnit: string | AbstractUnit): number[];
    /**
     * Return value by depth, using linear interpolation if necessary.
     * See LogAbstractData.findValueAt.
     * @param depth The depth for which you want to compute the value
     * @param prev The index of the largest previous depth
     * @param next The index of the smallest following depth
     * @throws {Error} when this method is not implemented
     */
    abstract getValueInRange(depth: number, prev: number, next: number): number;
    /**
     * Update data statistics
     * @returns this
     */
    protected abstract updateDataStatistics(): this;
}
export declare namespace LogAbstractData {
    type EventMap = EventDispatcher.EventMap & {
        [Events.Updated]: LogDataEvent;
        [Events.UnitChanged]: AbstractUnit;
    };
}
