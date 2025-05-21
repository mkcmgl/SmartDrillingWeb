/**
 * @module geotoolkit/contour/projections/mercatorprojection
 */
import { AbstractProjection } from '@int/geotoolkit/contour/projections/AbstractProjection';
/**
 * The projection class that projects latitude and longitude to mercator coordinates.
 */
export declare class MercatorProjection extends AbstractProjection {
    /**
     * @param [minLatitude] The minimum latitude.
     * @param [maxLatitude] The maximum latitude.
     */
    constructor(minLatitude?: number, maxLatitude?: number);
    getReverse(): AbstractProjection;
    getId(): string;
    projectPoint(x: number, y: number): Float64Array;
    projectPoints(x: Float64Array | number[], y: Float64Array | number[], size: number): void;
    projectPath(x: Float64Array, y: Float64Array, size: number): Float64Array[];
}
/**
 * The projection class that projects mercator coordinates to latitude and longitude.
 */
export declare class InverseMercatorProjection extends AbstractProjection {
    /**
     * @param minMercatorY The minimum mercator Y.
     * @param maxMercatorY The maximum mercator Y.
     */
    constructor(minMercatorY: number, maxMercatorY: number);
    getReverse(): AbstractProjection;
    getId(): string;
    projectPoint(x: number, y: number): Float64Array;
    projectPoints(x: Float64Array | number[], y: Float64Array | number[], size?: number): void;
    projectPath(x: Float64Array, y: Float64Array, size: number): Float64Array[];
}
