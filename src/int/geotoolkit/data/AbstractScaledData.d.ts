import type { DataConversion } from '@int/geotoolkit/data/DataConversion';
import type { DataInterpolation } from '@int/geotoolkit/data/DataInterpolation';
import type { DataSample } from '@int/geotoolkit/data/DataSample';
import type { Order } from '@int/geotoolkit/util/Order';
import type { Range } from '@int/geotoolkit/util/Range';
/**
 * Defines an scaled data interface
 */
export declare abstract class AbstractScaledData {
    /**
     * Sets conversion
     * @param conversion
     */
    abstract setConversion(conversion: DataConversion): void;
    /**
     * Set interpolation
     * @param interpolation
     */
    abstract setInterpolation(interpolation: DataInterpolation): void;
    /**
     * Gets samples
     */
    abstract getSamples(): DataSample[];
    /**
     * Return sample at specified index
     * @param index index of the sample
     * @returns sample
     */
    abstract getSample(index: number): DataSample;
    /**
     * Get length
     */
    abstract getLength(): number;
    /**
     * Is data source forward only
     */
    abstract isForwardOnly(): boolean;
    /**
     * return the order of the data set
     */
    abstract getDataOrder(): Order;
    /**
     * Gets index range
     * @param from from position
     * @param to to position
     */
    abstract getIndexRange(from: number, to: number): Range;
    /**
     * Gets value
     * @param position
     */
    abstract getValue(position: number): number;
    /**
     * Gets value
     * @param position
     */
    abstract getValueAt(position: number): number;
    /**
     * Get data source
     */
    abstract getSource(): any;
    /**
     * Gets min wrap level
     */
    abstract getMinWrapLevel(): number;
    /**
     * Gets max wrap level
     */
    abstract getMaxWrapLevel(): number;
    /**
     * Gets min value
     */
    abstract getMinValue(): number;
    /**
     * Gets max value
     */
    abstract getMaxValue(): number;
    /**
     * Gets min depth
     */
    abstract getMinPosition(): number;
    /**
     * Gets max depth
     */
    abstract getMaxPosition(): number;
    /**
     * If data is outdated
     */
    abstract isOutdated(): boolean;
    /**
     * Convert value from original source to current scaled data
     * @param v value of the original data source
     * @param d depth of the original data source
     */
    abstract convertValueFromSource(v: number, d?: number): number;
    /**
     * Convert array of values from original source to current scaled data
     * @param v array of values of the original data source
     * @param d array of depths of the original data source
     */
    abstract convertValueFromSource(v: number[], d?: number[]): number[];
    /**
     * Convert value from scaled data source to original source
     * @param v value of the scaled data source
     */
    abstract convertValueToSource(v: number): number;
    /**
     * Convert array of values  from scaled data source to original source
     * @param v array of values of the scaled data source
     */
    abstract convertValueToSource(v: number[]): number[];
    /**
     * Gets value array either
     * @returns Value array
     */
    abstract getValueArray(): number[];
    /**
     * Gets position array
     * @returns Position array
     */
    abstract getPositionArray(): number[];
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): Record<string, any>;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties: Record<string, any>): this;
    static getClassName(): string;
    getClassName(): string;
}
