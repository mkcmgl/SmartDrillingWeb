import { AbstractScaledData } from '@int/geotoolkit/data/AbstractScaledData';
import { DataTable } from '@int/geotoolkit/data/DataTable';
import { DataTableView } from '@int/geotoolkit/data/DataTableView';
import { Order } from '@int/geotoolkit/util/Order';
import { DataSample } from '@int/geotoolkit/data/DataSample';
import { Range } from '@int/geotoolkit/util/Range';
import type { DataConversion } from '@int/geotoolkit/data/DataConversion';
import type { DataInterpolation } from '@int/geotoolkit/data/DataInterpolation';
/**
 * The ScaledData is a helper object that encapsulates the data
 * representing a time series line and allows to associate either
 * conversion and/or interpolation objects with this data.
 */
export declare class ScaledData extends AbstractScaledData {
    /**
     * Create ScaledData
     * @param data abstract log data
     * @param conversion data conversion
     * @param [interpolation] algorithm to interpolate samples
     * @param [useOutOfRangeData] convert values equals or less to zero to 0 instead of NaN
     */
    constructor(data: ScaledData.Options | DataTableView | DataTable, conversion: DataConversion, interpolation?: DataInterpolation, useOutOfRangeData?: boolean);
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
     * Gets data source
     */
    getSource(): DataTableView | DataTable;
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
     */
    getSamples(): DataSample[];
    getSample(index: number): DataSample;
    /**
     * Gets a count of samples
     */
    getLength(): number;
    /**
     * Always return true for time series data
     */
    isForwardOnly(): boolean;
    /**
     * Always return {@link @int/geotoolkit/util/Order~Order.Ascending} for time series data
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
     * Convert array of values from scaled data source to original source
     * @param v array of values of the scaled data source
     */
    convertValueToSource(v: number[]): number[];
    getDataTimeStamp(): number;
    getValueArray(): number[];
    getPositionArray(): number[];
    /**
     * Return a wrap levels, If data doesn't have wraps than it returns null
     * @throws Error if scaled data cannot be created
     * @param fromPosition from position
     * @param toPosition to position
     */
    getIndexRange(fromPosition: number, toPosition: number): Range;
    /**
     * Find index corresponding to depth
     *
     * @param scaledSamples samples
     * @param position depth
     * @param length length of the array in the sample
     */
    static findIndex(scaledSamples: DataSample[], position: number, length: number): number;
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
     * @param position to return value
     * @returns return value by depth
     */
    getValue(position: number): number;
    protected getValueInternal(position: number, samples: DataSample[]): number;
    getValueAt(position: number): number;
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
     * abstract log data
     */
    type Options = {
        /**
         * abstract log data
         */
        data?: DataTableView | DataTable;
        /**
         * scaled samples
         */
        scaledsamples?: DataSample[];
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
        data: DataTableView | DataTable;
        /**
         * scaled samples
         */
        scaledsamples: DataSample[];
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
