/**
 * @module geotoolkit/data/DataWrapInterpolation
 */
import { DataInterpolation } from '@int/geotoolkit/data/DataInterpolation';
import { DataConversion } from '@int/geotoolkit/data/DataConversion';
import type { DataValueArray } from '@int/geotoolkit/data/DataValueArray';
/**
 * The DataWrapInterpolation implements a simple wrapping interpolation for the curve data.
 *
 * @throws Error if conversion is null
 */
export declare class DataWrapInterpolation extends DataInterpolation {
    /**
     * Creates DataWrapInterpolation
     * @param [options] properties object
     */
    constructor(options?: DataWrapInterpolation.Options);
    /**
     * Creates DataWrapInterpolation
     * @param [conversion] conversion from current to new coordinate system
     * @param [low] track low limits
     * @param [high] track high limits
     * @param [maxWraps] maximum count of wraps (by default 5)
     */
    constructor(conversion?: DataConversion, low?: number, high?: number, maxWraps?: number);
    /**
     * Interpolate array of samples
     * @param start start index
     * @param count count of samples to interpolate
     * @param input input data
     * @param output output (interpolated) data
     * @returns true if interpolation is successful
     */
    interpolate(start: number, count: number, input: DataValueArray, output: DataValueArray): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): DataWrapInterpolation.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: DataWrapInterpolation.Options): this;
}
export declare namespace DataWrapInterpolation {
    /**
     * JSON properties object
     */
    type Options = {
        /**
         * track low limits
         */
        low?: number;
        /**
         * track high limits
         */
        high?: number;
        /**
         * conversion from current to new coordinate system
         */
        conversion?: DataConversion;
        /**
         * maximum count of wraps
         */
        maxwraps?: number;
    };
    /**
     * JSON properties object
     */
    type OptionsOut = Required<Options>;
}
