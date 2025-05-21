/**
 * @module geotoolkit/data/DataClipInterpolation
 */
import { DataInterpolation } from '@int/geotoolkit/data/DataInterpolation';
import { DataConversion } from '@int/geotoolkit/data/DataConversion';
import type { DataValueArray } from '@int/geotoolkit/data/DataValueArray';
/**
 * The DataClipInterpolation implements a simple clipping interpolation for the curve data.
 *
 * @throws Error if conversion is null
 */
export declare class DataClipInterpolation extends DataInterpolation {
    /**
     * Creates DataClipInterpolation
     * @param options properties object
     */
    constructor(options: DataClipInterpolation.Options);
    /**
     * Creates DataClipInterpolation
     * @param conversion conversion from current to new coordinate system or properties object
     * @param low low limits
     * @param high high limits
     */
    constructor(conversion: DataConversion, low: number, high: number);
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
    getProperties(): DataClipInterpolation.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: DataClipInterpolation.Options): this;
}
export declare namespace DataClipInterpolation {
    /**
     * conversion from current to new coordinate system or properties object
     */
    type Options = {
        /**
         * low limits
         */
        low?: number;
        /**
         * high limits
         */
        high?: number;
        /**
         * conversion from current to new coordinate system
         */
        conversion?: DataConversion;
    };
    /**
     * Properties object
     */
    type OptionsOut = Required<Options>;
}
