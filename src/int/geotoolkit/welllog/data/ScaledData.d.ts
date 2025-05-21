/**
 * @module geotoolkit/welllog/data/ScaledData
 */
import { AbstractScaledData } from '@int/geotoolkit/data/AbstractScaledData';
import { LogAbstractData } from '@int/geotoolkit/welllog/data/LogAbstractData';
import { Order } from '@int/geotoolkit/util/Order';
import { LogDataSample } from '@int/geotoolkit/welllog/data/LogDataSample';
import { Range } from '@int/geotoolkit/util/Range';
import type { DataConversion } from '@int/geotoolkit/data/DataConversion';
import type { DataInterpolation } from '@int/geotoolkit/data/DataInterpolation';
import type { InterpolationType } from '@int/geotoolkit/data/DataStepInterpolation';
/**
 * The ScaledData is a helper object that encapsulates the data
 * representing a well log curve and allows to associate either
 * conversion and/or interpolation objects with this data.
 */
export declare class ScaledData extends AbstractScaledData {
    /**
     * Create ScaledData
     * @param [options] options object
     */
    constructor(options: ScaledData.Options);
    /**
     * Create ScaledData
     * @param [data] abstract log data
     * @param [conversion] data conversion
     * @param [interpolation] algorithm to interpolate samples
     * @param [useOutOfRangeData] convert values equals or less to zero to 0 instead of NaN
     */
    constructor(data?: LogAbstractData, conversion?: DataConversion, interpolation?: DataInterpolation, useOutOfRangeData?: boolean);
    /**
     * Return name of the data
     */
    getName(): string | null;
    /**
     * Sets conversion
     *
     * @param conversion conversion of the data
     * @returns this
     */
    setConversion(conversion: DataConversion): this;
    /**
     * Sets interpolation
     *
     * @param interpolation algorithm to interpolate samples
     * @returns this
     */
    setInterpolation(interpolation: DataInterpolation): this;
    /**
     * Gets source
     */
    getSource(): LogAbstractData;
    /**
     * Get minimum depth
     */
    getMinDepth(): number;
    /**
     * Returns maximum depth
     */
    getMaxDepth(): number;
    /**
     * Get minimum depth
     */
    getMinPosition(): number;
    /**
     * Returns maximum depth
     */
    getMaxPosition(): number;
    /**
     * Returns minimum value
     */
    getMinValue(): number;
    /**
     * Returns maximum value
     */
    getMaxValue(): number;
    /**
     * Gets scaled samples
     * @returns array of {@link @int/geotoolkit/welllog/data/LogDataSample~LogDataSample}.
     */
    getSamples(): LogDataSample[];
    /**
     * Return sample at specified index
     * @param index index of the sample
     * @returns sample
     */
    getSample(index: number): LogDataSample;
    /**
     * Gets a count of samples
     */
    getLength(): number;
    /**
     * Return the count of the samples
     */
    getSize(): number;
    /**
     * Return true if array of the depths is ordered
     */
    isForwardOnly(): boolean;
    /**
     * return the order of depths array
     */
    getDataOrder(): Order;
    /**
     * Convert value from original source to current scaled data
     * @param v value of the original data source
     * @param d depth of the original data source
     */
    convertValueFromSource(v: number, d?: number): number;
    /**
     * Convert array of values from original source to current scaled data
     * @param v array of values of the original data source
     * @param d array of depths of the original data source
     */
    convertValueFromSource(v: number[], d?: number[]): number[];
    /**
     * Convert value from scaled data source to original source
     * @param v value of the scaled data source
     */
    convertValueToSource(v: number): number;
    /**
     * Convert values from scaled data source to original source
     * @param v values of the scaled data source
     */
    convertValueToSource(v: number[]): number[];
    getTimeStamp(): number;
    /**
     * Gets value array either
     * @returns Value array
     */
    getValueArray(): number[];
    /**
     * Gets position array
     * @returns Position array
     */
    getPositionArray(): number[];
    /**
     * Return a wrap levels, If data doesn't have wraps than it returns null
     * @throws Error if scaled data cannot be created
     * @param fromDepth from depth
     * @param toDepth to depth
     */
    getIndexRange(fromDepth: number, toDepth: number): Range;
    /**
     * Find index corresponding to depth
     *
     * @param scaledSamples samples
     * @param depth depth
     * @param length length of the array in the sample
     */
    static findIndex(scaledSamples: LogDataSample[], depth: number, length: number): number;
    /**
     * Return minimum wrap level. By default it is 0
     */
    getMinWrapLevel(): number;
    /**
     * Sets minimum wrap level value
     *
     * @param level minimum wrap level
     * @returns this
     */
    setMinWrapLevel(level: number): this;
    /**
     * Return maximum wrap level. By default it is 0
     */
    getMaxWrapLevel(): number;
    /**
     * Sets maximum wrap level value
     *
     * @param level maximum wrap level.
     * @returns this
     */
    setMaxWrapLevel(level: number): this;
    /**
     * Returns value at specified depth
     * @param depth to return value
     * @returns return value by depth
     */
    getValue(depth: number): number;
    protected getValueInternal(depth: number, samples: LogDataSample[]): number;
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
     * @param depth The depth for which you want to compute the value
     * @param [fromIndex] index of sample in depths
     * @param [toIndex] index of sample in depths
     * @param [interpolation] interpolation type for the value
     */
    getValueAt(depth: number, fromIndex?: number, toIndex?: number, interpolation?: InterpolationType): number;
    /**
     * private
     * @param samples samples
     * @param depth depth
     * @param prev prev
     * @param next next
     */
    getSampleAt(samples: LogDataSample[], depth: number, prev: number, next: number): number;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): ScaledData.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: ScaledData.Options): this;
    isOutdated(): boolean;
}
export declare namespace ScaledData {
    /**
     * abstract log data or properties object
     */
    type Options = {
        /**
         * abstract log data
         */
        data?: LogAbstractData;
        /**
         * scaled samples
         */
        scaledsamples?: LogDataSample[];
        /**
         * minimum wrap level
         */
        minwraplevel?: number;
        /**
         * maximum wrap level
         */
        maxwraplevel?: number;
        /**
         * data conversion
         */
        conversion?: DataConversion;
        /**
         * algorithm to interpolate samples
         */
        interpolation?: DataInterpolation;
    };
    /**
     * properties object
     */
    type OptionsOut = {
        /**
         * abstract log data
         */
        data: LogAbstractData;
        /**
         * scaled samples
         */
        scaledsamples: LogDataSample[];
        /**
         * minimum wrap level
         */
        minwraplevel: number;
        /**
         * maximum wrap level
         */
        maxwraplevel: number;
        /**
         * data conversion
         */
        conversion: DataConversion;
        /**
         * algorithm to interpolate samples
         */
        interpolation: DataInterpolation;
    };
}
