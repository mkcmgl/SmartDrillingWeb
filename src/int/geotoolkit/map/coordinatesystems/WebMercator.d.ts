import { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import { Point } from '@int/geotoolkit/util/Point';
/**
 * This class specifies the Web Mercator coordinate system
 */
export declare class WebMercator extends AbstractSystem {
    /**
     * @param [epsg] epsg code of coordinate system
     */
    constructor(epsg?: number);
    /**
     * Transforms the specified coordinate to projection from lat / lng
     * @param lon long
     * @param lat lat
     * @param [dst] optional destination point
     * @param [clamp] if set to true, lat be limited by [-85, 85], lon: [-180, 180]
     */
    transform(lon: number, lat: number, dst: Point, clamp?: boolean): Point;
    /**
     * Return transformed point to lat / lng from projection
     * @param mercatorX x coordinate
     * @param mercatorY y coordinate
     * @param [dst] optional destination point
     */
    inverseTransform(mercatorX: number, mercatorY: number, dst?: Point): Point;
}
