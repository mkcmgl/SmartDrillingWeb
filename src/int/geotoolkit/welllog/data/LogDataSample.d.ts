import { DataSample } from '@int/geotoolkit/data/DataSample';
/**
 * Represent a processed data sample
 */
export declare class LogDataSample extends DataSample {
    /**
     * Constructor
     * @param [params] properties object
     */
    constructor(params: LogDataSample.Options);
    /**
     * Constructor
     * @param [depth] depth
     * @param [value] value
     * @param [level] level
     * @param [valid] valid
     * @param [srcIndex] srcIndex
     */
    constructor(depth?: number, value?: number, level?: number, valid?: boolean, srcIndex?: number);
    /**
     * Sets depth
     * @param depth depth
     * @returns this
     */
    setDepth(depth: number): this;
    /**
     * Return depth
     */
    getDepth(): number;
    /**
     * Create clone
     * @returns clone
     */
    clone(): LogDataSample;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogDataSample.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: LogDataSample.Options): this;
}
export declare namespace LogDataSample {
    /**
     * depth or properties object
     */
    type Options = DataSample.Options & {
        /**
         * depth
         */
        depth?: number;
    };
    /**
     * properties object
     */
    type OptionsOut = DataSample.OptionsOut & {
        /**
         * depth
         */
        depth: number;
    };
}
