/**
 * @module geotoolkit/data/DataStepInterpolation
 */
import { DataInterpolation } from '@int/geotoolkit/data/DataInterpolation';
import type { DataValueArray } from '@int/geotoolkit/data/DataValueArray';
/**
 * Enum of step interpolation type
 * @enum
 * @readonly
 */
export declare enum InterpolationType {
    /**
     * Linear
     */
    Linear = "Linear",
    /**
     * Middle
     */
    MiddleStep = "MiddleStep",
    /**
     * End
     */
    EndStep = "EndStep",
    /**
     * Start
     */
    StartStep = "StartStep"
}
/**
 * Provides step-like interpolation for well log data. It provides zigzag-type
 * interpolation with alternate horizontal and vertical lines.
 */
export declare class DataStepInterpolation extends DataInterpolation {
    constructor(interpolationType?: DataStepInterpolation.Options | InterpolationType);
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
    getProperties(): DataStepInterpolation.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: DataStepInterpolation.Options): this;
}
export declare namespace DataStepInterpolation {
    /**
     * JSON properties object
     */
    type Options = {
        /**
         * Type of step interpolation
         */
        interpolationtype?: InterpolationType;
    };
    /**
     * JSON properties object
     */
    type OptionsOut = Required<Options>;
}
