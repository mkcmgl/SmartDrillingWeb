import { Area } from '@int/geotoolkit/util/Area';
import { Point } from '@int/geotoolkit/util/Point';
import { GeometryOperation } from '@int/geotoolkit/util/GeometryOperation';
import type { Polygon } from '@int/geotoolkit/util/Polygon';
/**
 * Represents a rectangle with sides parallel to the axes. This rectangle has methods that allow the geometry
 * to be queried and modified. The geometry that makes up a rectangle consists
 * of two coordinate points that define the diagonal between the left bottom
 * corner and the right top corner. Note that the bottom vertical coordinate is
 * guaranteed to be less than the top vertical coordinate, and that the left
 * horizontal coordinate is less than the right horizontal coordinate.
 *
 * @example
 * const r1 = new Rect({'x': 4,
 *                      'y': 3,
 *                      'width': 2,
 *                      'height': 1
 *                    });
 *
 * const r2 = new Rect(r1);
 * const r3 = new Rect(4, 3, 6, 4);  // x1, y1, x2, y2
 * // r1, r2, and r3 are now equal
 */
export declare class Rect extends Area {
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
     * Return clone object.
     * @returns clone a copy of this object
     */
    clone(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): Rect.Options;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Rect.Options): this;
    /**
     * return Rect state. If true, rect cannot be modified.
     *
     * @returns readOnly
     */
    isReadOnly(): boolean;
    /**
     * protect Rect instance from modification.
     *
     * @returns this
     */
    lock(): this;
    /**
     * Intersects this rectangle with the specified one
     *
     * @param x The x coordinate
     * @param y The y coordinate
     * @param width The width
     * @param height The height
     * @returns this
     * @throws {Error} if the rect is null or if illegal arguments
     */
    intersect(x: number, y: number, width: number, height: number): this;
    /**
     * Intersects this rectangle with the specified one
     *
     * @param rect rectangle to intersect with
     * @returns this
     * @throws {Error} if the rect is null or if illegal arguments
     */
    intersect(rect: Rect): this;
    /**
     * Union this Rect with the specified
     * @param rect The rect to union with current one
     * @returns this
     */
    union(rect: Rect): this;
    /**
     * Unions this Rect with the specified x,y-point
     * @param x The x coordinate
     * @param y The y coordinate
     * @returns this
     */
    unionPoint(x: number, y: number): this;
    /**
     * Returns true if rectangles are identical
     *
     * @param rect rect to compare to
     * @param [epsilon] acceptance criteria
     * @returns equals this and rect have same x, y, width, height
     */
    equalsRect(rect: Rect | Rect.Options, epsilon?: number): boolean;
    /**
     * Determines whether or not this Rectangle and the specified Rectangle
     * intersection. Two rectangles intersect if their intersection is non-empty or if they touch on either side.
     *
     * @param x The x coordinate or another rectangle
     * @param [y] The y coordinate
     * @param [w] The width
     * @param [h] The height
     */
    intersects(x: number | Rect, y?: number, w?: number, h?: number): boolean;
    /**
     * Set left position
     * @param x left position
     * @returns this
     */
    setX(x: number): this;
    /**
     * Set top position
     * @param y top position
     * @returns this
     */
    setY(y: number): this;
    /**
     * Return left position
     */
    getX(): number;
    /**
     * Return top position
     * @returns y
     */
    getY(): number;
    /**
     * Sets width
     * @param w width
     */
    setWidth(w: number): this;
    /**
     * Sets height
     * @param h height
     */
    setHeight(h: number): this;
    /**
     * Return height
     */
    getHeight(): number;
    /**
     * Return width
     */
    getWidth(): number;
    /**
     * Return coordinate of left corner
     * @returns x
     */
    getLeft(): number;
    /**
     * Return coordinate of right corner
     * @returns x
     */
    getRight(): number;
    /**
     * Return top coordinate
     * @returns y
     */
    getTop(): number;
    /**
     * Return bottom coordinate (always top < bottom)
     * @returns y
     */
    getBottom(): number;
    /**
     * Return bounds
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Sets rectangle center
     * @param x X coordinate of the rectangle's center
     * @param y Y coordinate of the rectangle's center
     * @returns the actual instance
     */
    setCenter(x: number, y: number): this;
    /**
     * Gets X coordinate of the rectangle's center
     *
     * @returns X coordinate of the center
     */
    getCenterX(): number;
    /**
     * Gets Y coordinate of the rectangle's center
     *
     * @returns Y coordinate of the center
     */
    getCenterY(): number;
    /**
     * Gets coordinates of the rectangle's center
     *
     * @returns coordinates of the center
     */
    getCenter(): Point;
    /**
     * Return left top position
     *
     * @returns a new point to specify left top position
     */
    getLeftTop(): Point;
    /**
     * Return left top position
     *
     * @returns a new point to specify left top position
     */
    getRightTop(): Point;
    /**
     * Return right bottom position
     *
     * @returns a new point to specify right bottom position
     */
    getRightBottom(): Point;
    /**
     * Return left bottom position
     *
     * @returns a new point to specify right bottom position
     */
    getLeftBottom(): Point;
    /**
     * Return Left center position
     *
     * @returns a new point to specify right bottom position
     */
    getLeftCenter(): Point;
    /**
     * Return Right center position
     *
     * @returns a new point to specify right bottom position
     */
    getRightCenter(): Point;
    /**
     * Return Top center position
     *
     * @returns a new point to specify right bottom position
     */
    getTopCenter(): Point;
    /**
     * Return Bottom center position
     *
     * @returns a new point to specify right bottom position
     */
    getBottomCenter(): Point;
    /**
     * Sets rectangle
     *
     * @param rect rect or params
     * @returns this
     * @throws {Error} if illegal argument count
     */
    setRect(rect: Rect | Rect.Options): this;
    /**
     * Sets rectangle
     *
     * @param x1 the x-coordinate of one corner
     * @param y1 the y-coordinate of one corner
     * @param x2 the x-coordinate of the opposite corner
     * @param y2 the y coordinate of the opposite corner
     * @returns this
     * @throws {Error} if illegal argument count
     */
    setRect(x1: number, y1: number, x2: number, y2: number): this;
    contains(x: number | Point, y?: number): boolean;
    /**
     * Check if rectangle contains rectangle
     * @param x x position
     * @param y y position
     * @param w width
     * @param h height
     * @throws {Error} if illegal argument count
     */
    containsRect(x: number, y: number, w: number, h: number): boolean;
    /**
     * Check if rectangle contains rectangle
     * @param rect rect
     * @throws {Error} if illegal argument count
     */
    containsRect(rect: Rect): boolean;
    /**
     * Clips a line by rectangle.
     *
     * a1 [IN] the start position of the line. a2 [IN] the end position of the
     * line. result1 [OUT] the first point of the clipped line. result2 [OUT]
     * the end point of the clipped line. return true if clipped rectangle
     * intersects line or line is inside of the rectangle.
     * @param a1 the first input point
     * @param a2 the second input point
     * @param result1 the first output point
     * @param result2 the second output point
     * @returns how many times line intersects rectangle
     */
    clipLine(a1: Point, a2: Point, result1: Point, result2: Point): number;
    /**
     * Translates rectangle a specified distance
     * @param tx x translation
     * @param ty y translation
     * @returns this
     */
    translate(tx: number, ty: number): this;
    /**
     * Inflate rectangle from each side by width and height
     *
     * @param width extend in horizontal direction
     * @param [height] extend in vertical direction
     */
    inflate(width: number, height?: number): this;
    /**
     * Inflate rectangle
     *
     * @param source rect to be inflated
     * @param w The width to inflate
     * @param h The height to inflate
     * @returns a new inflated rectangle
     */
    static inflateRect(source: Rect, w: number, h: number): Rect;
    /**
     * returns Rect state
     * @returns true if width or height == 0
     */
    isEmpty(): boolean;
    /**
     * Round this rectangle to integer values for coordinates.
     * This method sets the largest whole numbers less than or equal to the current
     * values of left-top corner and sets the smallest whole numbers greater than or equal
     * to the current values of right-bottom corner of the rectangle.
     * @returns this
     */
    round(): this;
    /**
     * Returns string like: "Rect: x1,y1:x2,y2"
     * With x1 left
     * With y1 top
     * With x2 right
     * With y2 bottom
     * @returns string value
     */
    toString(): string;
    /**
     * Merges provided rectangular areas according to the operation applied.
     *
     * @param oldRect 1st rect to merge
     * @param newRect 2nd rect to merge
     * @param [operation] operation to be performed on the new rect
     * @param [dstRect] destination rectangular geometry
     * @returns merged rectangular geometry
     * @throws {Error} if either of the rects provided is null
     */
    static merge(oldRect: Rect, newRect: Rect, operation?: GeometryOperation, dstRect?: Rect): Rect;
    /**
     * Merges with provided rectangular area according to the operation applied.
     *
     * @param newRect rect to be merged with the current
     * @param [operation] operation to apply
     * @returns this
     * @throws {Error} if the rects provided is null
     */
    merge(newRect: Rect, operation?: GeometryOperation): this;
    /**
     * Check if rectangle1 contains rectangle2
     * @param rect1 rectangle 1
     * @param rect2 rectangle 2
     * @returns true if contains, else false
     */
    static containsRect(rect1: Rect, rect2: Rect): boolean;
    /**
     * Check if rectangle1 intersects rectangle2.
     * Two rectangles intersect if their intersection is non-empty or if they touch on either side.
     * @param rect1 rectangle 1
     * @param rect2 rectangle 2
     * @returns true if intersects, else false
     */
    static intersectsRect(rect1: Rect, rect2: Rect): boolean;
    /**
     * Check if rectangle contains polygon
     * @param polygon polygon
     * @returns true if contains, else false
     */
    containsPolygon(polygon: Polygon): boolean;
    /**
     * Create or get rect from object
     * @param [object] object can be in format of constructor of {@link @int/geotoolkit/util/Rect~Rect}
     * @returns rect
     */
    static fromObject(object?: Rect.Type): Rect | null;
    /**
     * Get diagonal length of rectangle
     * @returns diagonal length
     */
    getDiagonalLength(): number;
}
export declare namespace Rect {
    /**
     * source object
     */
    type Options = {
        /**
         * readonly
         */
        readonly?: boolean;
        /**
         * left
         */
        x?: number;
        /**
         * top
         */
        y?: number;
        /**
         * width
         */
        width?: number;
        /**
         * height
         */
        height?: number;
    };
    type Type = Rect | Options | null;
}
