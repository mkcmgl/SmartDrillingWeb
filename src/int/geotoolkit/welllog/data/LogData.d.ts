/**
 * @module geotoolkit/welllog/data/LogData
 */
import { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import { Order } from '@int/geotoolkit/util/Order';
import { Range } from '@int/geotoolkit/util/Range';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { AbstractLoader } from '@int/geotoolkit/welllog/data/loaders/AbstractLoader';
/**
 * This class is the default implementation of a welllog datasource. It contains both the index values (md, tvd, etc) and the corresponding log values.
 * {@link @int/geotoolkit/welllog/LogCurve~LogCurve} can use LogData as a datasource to render a welllog as a curve in a track.<br>
 * <br>
 * The LogData does not require the index to be strictly increasing and it will not sort the indices/values.
 * It also keeps track of its state (typically for realtime scenario) through {@link @int/geotoolkit/welllog/data/LogDataState~LogDataState}.
 * The LogData computes and maintains some statistics about its data (min, max) that are used by the shapes to render properly and efficiently.<br>
 * <br>
 * Any data sample can be marked as null. Null data values are
 * supported by visuals as breaks in the curve. The null value of sample can be specified using Number.NaN or NaN value.
 * <br>
 * It offers several functions to change the data it contains and will fire events accordingly. Note that most of the shapes that use LogData as datasource are optimized based on those events.
 * Therefore care must be given when changing the data. For example, clearing and setting all the values+1 is more expensive than adding a value.
 * @example
 * import {LogData} from '@int/geotoolkit/welllog/data/LogData';
 * const data1 = new LogData('GR');
 * const data2 = new LogData(depths, values);
 * const data3 = new LogData({
 *      'name': 'GR',
 *      'depths': depths,
 *      'values': values
 * });
 */
export declare class LogData<T = null> extends LogAbstractData {
    /**
     * Constructor
     * @param [options] array of depths, data name, or object
     * @param [values] array of values
     */
    constructor(options?: LogData.Options<T> | number[] | string, values?: number[]);
    getName(): string;
    /**
     * Set name of the data
     * @param name The log data name
     * @returns this
     */
    setName(name: string): this;
    /**
     * Clear log data. Removes all samples and reset depth limits
     * @returns this
     */
    clear(): this;
    getSize(): number;
    /**
     * Return depth by index
     *
     * @param index index at the depth
     */
    getDepth(index: number): number;
    /**
     * Return value by index
     *
     * @param index index of the sample in the array
     */
    getValue(index: number): number;
    /**
     * Set value by index
     *
     * @param index index of the sample
     * @param value sample values
     * @returns this
     */
    setValue(index: number, value: number): this;
    /**
     * Sets values
     *
     * @param depths The array of ordered depths
     * @param values The array of values
     * @param [metaInfos] The array of metaInfo
     * @param [deepCopy] if false, provided arrays shouldn't be changed outside
     * @returns this
     * @example
     * // Following example shows how to reverse depths and values for the curve displayed.
     * new LogData('Curve Name')
     *   .setValues(depths.reverse(), values.reverse());
     */
    setValues(depths: number[], values: number[], metaInfos?: T[], deepCopy?: boolean): this;
    /**
     * Update data statistics
     * @returns this
     */
    protected updateDataStatistics(): this;
    /**
     * Add values
     *
     * @param depth The depth for which you want to compute the value
     * @param value value at the specified depth
     * @param metaInfo meta info
     * @returns this
     */
    addValue(depth: number, value: number, metaInfo?: T): this;
    /**
     * Add values at the bottom of the log
     *
     * @param depths The array of ordered depths
     * @param values The array of values
     * @param [metaInfos] meta info
     * @returns this
     */
    addValues(depths: number[], values: number[], metaInfos?: T[]): this;
    /**
     * Remove values
     *
     * @param index position where to remove the values
     * @param count count of samples
     * @returns this
     */
    removeValues(index: number, count: number): this;
    /**
     * Insert/Replace the given value at the correct place in the log.
     * This function works ONLY if the existing data is ordered.
     *
     * @example
     *             Depth       Value
     *              100          0
     *              200          1
     *
     * mergeValue(150,3)
     *
     *             Depth       Value
     *              100          0
     *              150          3
     *              200          1
     * @param depth The depth for which you want to compute the value
     * @param value value at the depth
     * @param [metaInfo] meta info
     * @returns this
     */
    mergeValue(depth: number, value: number, metaInfo?: T): this;
    /**
     * Remove values from start to end depth.
     * If startDepth is NaN or endDepth is NaN then it uses infinity values
     *
     * @param startDepth where to start trim
     * @param endDepth where to end trim
     * @returns this
     */
    trimValues(startDepth: number, endDepth: number): this;
    /**
     * Inserts/Replace the given values at the correct place in the log.
     * This function works ONLY if the existing data is ordered.
     *
     * @example
     *             Depth       Value
     *              50           0
     *              100          1
     *              200          2
     *              300          3
     *
     * mergeValue([0,100,150,500], [-1,-100,-150,-500])
     *
     *    ----     Depth       Value
     *    ===>       0           -1
     *    ----      50            0
     *    ===>      100         -100
     *    ===>      150         -150
     *    ----      200           2
     *    ----      300           3
     *    ===>      500         -500
     * @param depths the place where to merge in the log
     * @param values the values to merge
     * @param [checkValues] check values before merge
     * @param [metaInfos] metaInfos
     * @returns this
     */
    mergeValues(depths: number[], values: number[], checkValues?: boolean, metaInfos?: T[]): this;
    /**
     * Sets the depths and values of this logdata using the given string arrays.
     * Uses parseFloat() to parse strings, also recognize 'NaN' values as Number.NaN.
     *
     * @param depths array of strings
     * @param values array of strings
     */
    parseFromString(depths: string, values: string): this;
    getMinDepth(): number;
    getMaxDepth(): number;
    /**
     * Return minimum Meaning depth (first depth with value)
     */
    getMinMeaningDepth(): number;
    /**
     * Return maximum Meaning depth (last depth with value)
     */
    getMaxMeaningDepth(): number;
    getMinValue(): number;
    getMaxValue(): number;
    getValues(): number[];
    getDepths(): number[];
    isForwardOnly(): boolean;
    getDataOrder(): Order;
    /**
     * Return value by depth, using linear interpolation if necessary.
     *
     * See LogAbstractData.findValueAt.
     *
     * @param depth The depth for which you want to compute the value
     * @param prev The index of the largest previous depth
     * @param next The index of the smallest following depth
     */
    getValueInRange(depth: number, prev: number, next: number): number;
    requestData(range: Range, scale: number, callback?: () => void): void;
    /**
     * Sets value unit
     *
     * @param unit value unit
     * @returns this
     */
    setValueUnit(unit: AbstractUnit | string): this;
    getValueUnit(): AbstractUnit;
    /**
     * Sets index unit
     *
     * @param unit index unit
     * @returns this
     */
    setIndexUnit(unit: AbstractUnit | string): this;
    getIndexUnit(): AbstractUnit;
    calculateNeatLimits(logScale: boolean, centerOnZeroOnNegativeMin: boolean, displayUnit: string | AbstractUnit): number[];
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogData.OptionsOut<T>;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogData.Options<T>): this;
    /**
     * Returns array of additional info
     */
    getMetaInfos(): T[];
    /**
     * Sets array of additional info
     * @param infos additions
     * @returns this
     */
    setMetaInfo(infos: T[]): this;
    /**
     * Gets additional info by index
     * @param index index
     */
    getMetaInfo(index: number): T;
}
export declare namespace LogData {
    /**
     * array of depths, data name, or object
     */
    type Options<T = null> = {
        /**
         * The array of depths
         */
        depths?: number[];
        /**
         * The array of values
         */
        values?: number[];
        /**
         * name of data
         */
        name?: string;
        /**
         * unit index unit
         */
        indexunit?: AbstractUnit | string;
        /**
         * unit values unit
         */
        valuesunit?: AbstractUnit | string;
        /**
         * array of additional info
         */
        metainfos?: T[];
        /**
         * loader for loading data of curve
         */
        loader?: AbstractLoader;
    };
    /**
     * properties object
     */
    type OptionsOut<T = null> = {
        /**
         * depths
         */
        depths: number[];
        /**
         * values
         */
        values: number[];
        /**
         * The log data name
         */
        name: string;
        /**
         * index unit
         */
        indexunit: AbstractUnit;
        /**
         * value unit
         */
        valuesunit: AbstractUnit;
        /**
         * array of additional info
         */
        metainfos: T[];
    };
}
