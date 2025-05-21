import { Point } from '@int/geotoolkit/util/Point';
import { Area } from '@int/geotoolkit/util/Area';
import { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Represents a polygon with methods that allow the geometry of the polygon
 * to be queried and modified.
 */
export declare class Polygon extends Area {
    /**
     * @param [x] x coordinates
     * @param [y] y coordinates
     * @param [evenOddMode] even odd mode
     */
    constructor(x?: number[], y?: number[], evenOddMode?: boolean);
    /**
     * Return bounds and locks the bounds rect from further editing.
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Sets arrays of points. Will overwrite any existing points in this polygon.
     *
     * @param x array of x coordinates
     * @param y array of y coordinates
     */
    setCoordinates(x: number[], y: number[]): this;
    /**
     * Add point to array of points.
     * @param x x coordinate
     * @param y y coordinate
     */
    push(x: number, y: number): void;
    /**
     * Gets x-coords of points
     * @returns array of x-coordinates
     */
    getPointsX(): number[];
    /**
     * Gets y-coords of points
     * @returns array of y-coordinates
     */
    getPointsY(): number[];
    /**
     * Gets number of points
     * @returns points the number of points in this polygon
     */
    getSize(): number;
    /**
     * Set even odd mode
     * @param mode even odd mode
     */
    setEvenOddMode(mode: boolean): this;
    /**
     * Get even odd mode
     * @returns will this use even odd mode or not
     */
    getEvenOddMode(): boolean;
    /**
     * Check if polygon contains point
     * @param x x position of the point
     * @param y y position of the point
     * @throws {Error} if illegal argument count
     */
    contains(x: number, y: number): boolean;
    /**
     * Check if polygon contains point
     * @param point point
     * @throws {Error} if illegal argument count
     */
    contains(point: Point): boolean;
    /**
     * Check if polygon contains polygon
     * @param polygon polygon
     * @returns true if contains, else false
     */
    containsPolygon(polygon: Polygon): boolean;
    /**
     * Check if polygon intersects polygon
     * @param polygon polygon
     * @returns true if intersects, else false
     */
    intersectsPolygon(polygon: Polygon): boolean;
    /**
     * Check if polygon contains rectangle
     * @param rectangle rectangle
     * @returns true if contains, else false
     */
    containsRectangle(rectangle: Rect): boolean;
    /**
     * Check if polygon intersects rectangle
     * @param rectangle rectangle
     * @returns true if intersects, else false
     */
    intersectsRectangle(rectangle: Rect): boolean;
    /**
     * Clone polygon
     * @returns polygon
     */
    clone(): Polygon;
    /**
     * Intersects polygon with the rectangle and leaves only the inner part of polygon
     * WARNING! The result might have self-intersections in some cases
     * @param rectangle rectangle
     * @returns this
     */
    intersectRectangle(rectangle: Rect): this;
    /**
     * Create polygon from rect
     * @param rect rectangle
     * @returns instance
     */
    static fromRect(rect: Rect): Polygon;
}
