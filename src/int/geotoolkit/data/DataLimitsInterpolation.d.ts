/**
 * @module geotoolkit/data/DataLimitsInterpolation
 */
import { DataInterpolation } from '@int/geotoolkit/data/DataInterpolation';
import type { DataValueArray } from '@int/geotoolkit/data/DataValueArray';
/**
 * Edge Interpolation types
 * @enum
 * @readonly
 */
export declare enum InterpolationEdge {
    /**
     * Cut edge values
     */
    Cut = "cut",
    /**
     * Interpolate edge values, default interpolation type
     */
    Interpolate = "interpolate"
}
/**
 * This interpolation cuts values lower and upper track limits
 */
export declare class DataLimitsInterpolation extends DataInterpolation {
    constructor(options?: DataLimitsInterpolation.Options);
    constructor(low?: number, high?: number, interpolationedge?: InterpolationEdge | string);
    /**
     * Interpolate array of samples as follows:
     * values smaller than track low limit are adjusted to the low limit
     * whereas
     * values greater than track high limit are adjusted to the high limit
     * @param start start index
     * @param count count of samples to interpolate
     * @param input input data
     * @param output output data
     * @returns true always
     */
    interpolate(start: number, count: number, input: DataValueArray, output: DataValueArray): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): DataLimitsInterpolation.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: DataLimitsInterpolation.Options): this;
}
export declare namespace DataLimitsInterpolation {
    /**
     * JSON properties object
     */
    type Options = {
        /**
         * low limit
         */
        low?: number;
        /**
         * high limit
         */
        high?: number;
        /**
         * type of edge value interpolation
         */
        interpolationedge?: InterpolationEdge | string;
    };
    /**
     * JSON properties object
     */
    type OptionsOut = Required<Options>;
}
