/**
 * @module geotoolkit3d/util/interpolators/InverseDistanceWeighting
 */
import type { Box3 } from 'three';
import { Vector3, Vector4 } from 'three';
import { AbstractInterpolator } from '@int/geotoolkit3d/util/interpolators/AbstractInterpolator';
/**
 * Implementation of inverse distance weighting interpolator
 * https://en.wikipedia.org/wiki/Inverse_distance_weighting
 */
export declare class InverseDistanceWeighting extends AbstractInterpolator {
    interpolate(boundingBox: Box3, stepsCount: Vector3, x: Vector4[] | number[], y?: number[], z?: number[], values?: number[]): Float32Array;
}
