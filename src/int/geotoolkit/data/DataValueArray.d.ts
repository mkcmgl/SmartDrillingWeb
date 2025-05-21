import type { DataSample } from '@int/geotoolkit/data/DataSample';
/**
 * Defines two arrays depths and values of samples
 */
export declare class DataValueArray {
    constructor(options?: DataValueArray.Options);
    constructor(samples?: DataSample[]);
    /**
     * Sets samples array
     * @param samples the samples array
     */
    setSamples(samples: DataSample[]): this;
    /**
     * Gets samples array
     */
    getSamples(): DataSample[];
    /**
     * Sets a minimal wrap level
     * @param minWrapLevel the minimal wrap level
     */
    setMinWrapLevel(minWrapLevel: number): this;
    /**
     * Sets a maximal wrap level
     * @param maxWrapLevel the maximal wrap level
     */
    setMaxWrapLevel(maxWrapLevel: number): this;
    /**
     * Return minimum wrap level. By default, it is 0
     */
    getMinWrapLevel(): number;
    /**
     * Return maximum wrap level. By default, it is 0
     */
    getMaxWrapLevel(): number;
    /**
     * Create a deep copy
     *
     * @returns clone
     */
    clone(): DataValueArray;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): DataValueArray.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: DataValueArray.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace DataValueArray {
    /**
     * JSON properties object
     */
    type Options = {
        /**
         * samples
         */
        samples?: DataSample[];
        /**
         * min wrap level
         */
        minwraplevel?: number;
        /**
         * max wrap level
         */
        maxwraplevel?: number;
    };
    /**
     * JSON properties object
     */
    type OptionsOut = Required<Options>;
}
