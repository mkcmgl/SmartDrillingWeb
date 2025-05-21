/**
 * @module geotoolkit/util/Region
 */
import { Point } from '@int/geotoolkit/util/Point';
import { Rect } from '@int/geotoolkit/util/Rect';
import { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
import { Polygon } from '@int/geotoolkit/util/Polygon';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * Class with can handle some operation with rectangles and polygons and represent a geometry region
 */
export declare class Region {
    /**
     * @param [epsilon] epsilon, accuracy of clipping
     */
    constructor(epsilon?: number);
    /**
     * Check if region is empty
     * @returns true if it is empty, else false
     */
    isEmpty(): boolean;
    /**
     * Transform region
     * @param transformation transformation
     * @returns this
     */
    transformRegion(transformation: Transformation): this;
    /**
     * Return bounding rectangle
     * @returns bounding box
     */
    getBoundingBox(): Rect;
    /**
     * Return polygon as any array of non-overlapping graphics paths.
     * @returns array of graphic paths
     */
    getGraphicsPaths(): GraphicsPath[];
    /**
     * Return polygon as graphics path
     * @returns graphics path
     */
    getGraphicsPath(): GraphicsPath;
    /**
     * Returns polygons
     * @returns polygons
     */
    getPolygons(): Polygon[];
    /**
     * Clear region
     * @returns this
     */
    clear(): this;
    /**
     * Union shape
     * @param shape shape
     * @param [dest] destination region
     * @returns result polygons
     */
    union(shape: Polygon | Rect | Region | GraphicsPath | Polygon[] | Rect[] | Region[] | GraphicsPath[], dest?: Region): Polygon[];
    /**
     * Intersect shape
     * @param shape shape
     * @param [dest] destination region
     * @returns result polygons
     */
    intersect(shape: Polygon | Rect | Region | GraphicsPath | Polygon[] | Rect[] | Region[] | GraphicsPath[], dest?: Region): Polygon[];
    /**
     * Subtract polygon
     * @param shape shape
     * @param [dest] destination region
     * @returns result polygons
     */
    subtract(shape: Polygon | Rect | Region | GraphicsPath | Polygon[] | Rect[] | Region[] | GraphicsPath[], dest?: Region): Polygon[];
    /**
     * Check if region contains shape
     * @param shape shape
     * @returns true if contains, else false
     */
    contains(shape: Polygon | Rect | Region): boolean;
    /**
     * Check if region intersects shape
     * @param shape shape
     * @returns true if intersects, else false
     */
    intersects(shape: Polygon | Rect | Region): boolean;
    /**
     * Check if region contains point
     * @param point point
     * @returns true if contains, else false
     */
    containsPoint(point: Point): boolean;
    /**
     * Return an array of non-overlapping rectangles that make up the region
     * @param [eps] epsilon, accuracy
     * @returns array array of non-overlapping rectangles that make up the region
     */
    getRectangles(eps?: number): Rect[];
}
