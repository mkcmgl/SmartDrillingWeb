import type { Box3, Vector3, Vector4 } from 'three';
/**
 * Abstract class for interpolators (transformers irregular data to regular)
 */
export declare abstract class AbstractInterpolator {
    /**
     * Method for interpolation irregular data to regular (raw) data
     * @param boundingBox bounding box
     * @param stepsCount step count
     * @param x points with values or array with x coordinates
     * @param [y] array with y coordinates
     * @param [z] array with z coordinates
     * @param [values] array with values
     * @returns array with raw data
     */
    abstract interpolate(boundingBox: Box3, stepsCount: Vector3, x: Vector4[] | number[], y?: number[], z?: number[], values?: number[]): Float32Array;
    static getClassName(): string;
    getClassName(): string;
}
