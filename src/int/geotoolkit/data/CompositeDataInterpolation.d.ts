/**
 * @module geotoolkit/data/CompositeDataInterpolation
 */
import { DataInterpolation } from '@int/geotoolkit/data/DataInterpolation';
import type { DataValueArray } from '@int/geotoolkit/data/DataValueArray';
/**
 * Represents a chain of interpolations
 */
export declare class CompositeDataInterpolation extends DataInterpolation {
    constructor(interpolators?: CompositeDataInterpolation.Options | DataInterpolation[]);
    /**
     * Add data interpolator
     * @param interpolator data interpolator
     * @returns this
     */
    addInterpolator(interpolator: DataInterpolation): this;
    /**
     * Remove data interpolator
     * @param interpolator interpolator to be removed
     */
    removeInterpolator(interpolator: DataInterpolation): this;
    /**
     * Insert data interpolator at specified index
     * @param index specified index
     * @param interpolator interpolator to add
     */
    insertInterpolator(index: number, interpolator: DataInterpolation): this;
    /**
     * Get data interpolator by index
     * @param index interpolator index
     * @returns interpolatore
     */
    getInterpolator(index: number): DataInterpolation;
    /**
     * Return amount of interpolators
     */
    getInterpolatorsCount(): number;
    /**
     * Interpolate
     *
     * @param start The start index
     * @param count The count of samples to interpolate
     * @param input The input data
     * @param output The output data
     * @returns true if interpolation is successful
     */
    interpolate(start: number, count: number, input: DataValueArray, output: DataValueArray): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): CompositeDataInterpolation.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: CompositeDataInterpolation.Options): this;
}
export declare namespace CompositeDataInterpolation {
    /**
     * data interpolator or properties object
     */
    type Options = {
        /**
         * data interpolator
         */
        interpolators?: DataInterpolation[];
    };
    /**
     * Properties object
     */
    type OptionsOut = Required<Options>;
}
