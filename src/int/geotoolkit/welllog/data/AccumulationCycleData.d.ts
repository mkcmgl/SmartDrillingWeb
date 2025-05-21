/**
 * @module geotoolkit/welllog/data/AccumulationCycleData
 */
import { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import { Order } from '@int/geotoolkit/util/Order';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { Range } from '@int/geotoolkit/util/Range';
/**
 * Define data for AccumulationCycle visual
 * @example
 * const data1 = new AccumulationCycleData('AccumulationCycle', depths, values);
 * const data2 = new AccumulationCycleData({
 *   'depths': depths,
 *   'values': values,
 *   'name': 'AccumulationCycle'
 * });
 */
export declare class AccumulationCycleData extends LogAbstractData {
    /**
     * Constructor
     * @param [name] data name, or object
     * @param [depth] array of depth values
     * @param [values] array of values
     * @param [colors] array of colors
     * @param [titles] array of titles
     */
    constructor(name?: AccumulationCycleData.Options | string, depth?: number[], values?: number[], colors?: string[], titles?: string[]);
    /**
     * Return titles of the data
     */
    getTitles(): string[];
    /**
     * Return title by index
     *
     * @param index index at the depth
     */
    getTitle(index: number): string | null;
    /**
     * Set titles of the data
     * @param titles The log data titles
     * @returns this
     */
    setTitles(titles: string[]): this;
    /**
     * Return name of the data
     */
    getName(): string;
    /**
     * Set name of the data
     * @param name The log data name
     * @returns this
     */
    setName(name: string): this;
    /**
     * Clear log data. Removes all samples and reset depth limits
     */
    clear(): this;
    /**
     * Return a count of the samples
     */
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
     * Set fill color by index
     *
     * @param index index of the sample
     * @param color fill color
     * @returns this
     */
    setColor(index: number, color: string): this;
    /**
     * Return color by index
     *
     * @param index index of the sample in the array
     */
    getColor(index: number): string;
    /**
     * Sets values
     *
     * @param depths The array of ordered depths
     * @param values The array of values
     * @param colors The array of colors
     * @param [titles] The array of titles
     * @returns this
     */
    setValues(depths: number[], values: number[], colors: string[], titles?: string[]): this;
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
     * @param color color at the specified depth
     */
    addValue(depth: number, value: number, color: string): void;
    /**
     * Add values at the bottom of the log
     *
     * @param depths The array of ordered depths
     * @param values The array of values
     * @param colors The array of colors
     */
    addValues(depths: number[], values: number[], colors: string[]): void;
    /**
     * Remove values
     *
     * @param index position where to remove the values
     * @param count count of samples
     */
    removeValues(index: number, count: number): void;
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
     * @param color color at the depth
     */
    mergeValue(depth: number, value: number, color: string): void;
    /**
     * Remove values from start to end depth.
     * If startDepth is NaN or endDepth is NaN then it uses infinity values
     *
     * @param startDepth where to start trim
     * @param endDepth where to end trim
     */
    trimValues(startDepth: number, endDepth: number): void;
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
     * @param colors the colors to merge
     */
    mergeValues(depths: number[], values: number[], colors: string[]): void;
    /**
     * Sets the depths and values of this AccumulationCycleData using the given string arrays.
     * Uses parseFloat() to parse strings, also recognize 'NaN' values as Number.NaN.
     *
     * @param depths comma-delimited array of depths
     * @param values comma-delimited array of values
     * @param colors comma-delimited array of colors
     */
    parseFromString(depths: string, values: string, colors: string): this;
    /**
     * Return minimum depth
     */
    getMinDepth(): number;
    /**
     * Return maximum depth
     */
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
    /**
     * Return values
     */
    getValues(): number[];
    /**
     * Return an array of depths
     */
    getDepths(): number[];
    /**
     * Return an array of colors
     */
    getColors(): string[];
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
    getProperties(): AccumulationCycleData.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: AccumulationCycleData.Options): this;
    requestData(range: Range, scale: number, callback?: () => void): void;
}
export declare namespace AccumulationCycleData {
    /**
     * data name, or object
     */
    type Options = {
        /**
         * array of depth values
         */
        depths?: number[];
        /**
         * array of values
         */
        values?: number[];
        /**
         * array of colors
         */
        colors?: string[];
        /**
         * array of titles
         */
        titles?: string[];
        /**
         * The log data name
         */
        name?: string;
        /**
         * array of titles
         */
        indexunit?: AbstractUnit;
        /**
         * The log data name
         */
        valuesunit?: AbstractUnit;
    };
    /**
     * properties object
     */
    type OptionsOut = {
        /**
         * The array of ordered depths
         */
        depths: number[];
        /**
         * The array of values
         */
        values: number[];
        /**
         * The array of colors
         */
        colors: string[];
        /**
         * array of titles
         */
        titles: string[];
        /**
         * The log data name
         */
        name: string;
        /**
         * array of titles
         */
        indexunit: AbstractUnit;
        /**
         * The log data name
         */
        valuesunit: AbstractUnit;
    };
}
