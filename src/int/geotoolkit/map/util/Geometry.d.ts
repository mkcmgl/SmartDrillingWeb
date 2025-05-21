import { Rect } from '@int/geotoolkit/util/Rect';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { Polygon } from '@int/geotoolkit/map/features/Polygon';
/**
 * Defines helper methods to work with feature geometries
 */
export declare class Geometry {
    /**
     * Gets bounds for a geometry defined by arrays of x-ordinates and y-ordinates.
     *
     * @param geometry feature geometry
     */
    static getCachedGeometryBounds(geometry: AbstractFeature.Geometry): Rect;
    /**
     * Returns true if polygon geometry is clockwise, false otherwise
     * @param geometry polygon geometry
     */
    static isClockwise(geometry: Polygon.Geometry): boolean;
    static getClassName(): string;
    getClassName(): string;
}
