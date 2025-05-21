import { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Represents a readonly rectangle with sides parallel to the axes. This rectangle has methods that allow the geometry
 * to be queried. The geometry that makes up a rectangle consists
 * of two coordinate points that define the diagonal between the left bottom
 * corner and the right top corner. Note that the bottom vertical coordinate is
 * guaranteed to be less than the top vertical coordinate, and that the left
 * horizontal coordinate is less than the right horizontal coordinate.
 */
export declare class ReadOnlyRect extends Rect {
    constructor();
    /**
     * @param rect Rect instance to copy
     */
    constructor(rect: Rect);
    /**
     * @param properties object to copy
     */
    constructor(properties: Rect.Options);
    /**
     * @param x1 left
     * @param y1 top
     * @param x2 right
     * @param y2 bottom
     */
    constructor(x1: number, y1: number, x2: number, y2: number);
    /**
     * Gets empty rectangle
     */
    static getEmpty(): ReadOnlyRect;
    /**
     * Gets unit square (0, 0, 1, 1)
     */
    static getUnitSquare(): ReadOnlyRect;
    setRect(x1: Rect | Rect.Options | number, y1?: number, x2?: number, y2?: number): this;
    intersect(x: number | Rect, y?: number, width?: number, height?: number): this;
}
