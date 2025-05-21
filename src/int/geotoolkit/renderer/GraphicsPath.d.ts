import { Rect } from '@int/geotoolkit/util/Rect';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * PointType
 * @enum
 * @readonly
 */
export declare enum PointType {
    /**
     * Line to
     */
    LINETO = "LineTo",
    /**
     * Move to
     */
    MOVETO = "MoveTo",
    /**
     * Bezier curve to
     */
    BEZIERCURVETO = "BezierCurveTo",
    /**
     * Close
     */
    CLOSE = "Close",
    /**
     * Arc to
     */
    ARCTO = "ArcTo"
}
/**
 * Provides a container for connected lines, curves.
 */
export declare class GraphicsPath {
    constructor(options?: GraphicsPath.Options);
    /**
     * Copy constructor
     * @param src instance to create a copy from
     */
    protected copyConstructor(src: GraphicsPath): void;
    /**
     * Copy path from source
     * @param src source path to copy from
     */
    copy(src: GraphicsPath): this;
    /**
     * Create a deep copy
     * @returns clone
     */
    clone(): GraphicsPath;
    /**
     * Add command to move the current position.
     *
     * @param x The x-coordinate of the destination point
     * @param y The y-coordinate of the destination point
     */
    moveTo(x: number, y: number): this;
    /**
     * Close path
     *
     * @returns this
     */
    close(): this;
    /**
     * Add command to draw a line from the current position to specified point
     *
     * @param x The x-coordinate of the destination point
     * @param y The y-coordinate of the destination point
     * @returns this
     */
    lineTo(x: number, y: number): this;
    /**
     * Add command to draw an arc from the current position to specified point
     *
     * @param x1 x-coordinate of control point
     * @param y1 y-coordinate of control point
     * @param x2 The x-coordinate of the destination point
     * @param y2 The y-coordinate of the destination point
     * @param radius The radius of arc
     * @returns this
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    /**
     * Draws a cubic Bezier curve from the current point to the point (x, y),
     * with control points (cp1x, cp1y) and (cp2x, cp2y).
     *
     * @param cp1x the x coordinate of the first control point
     * @param cp1y the y coordinate of the first control point
     * @param cp2x the x coordinate of the second control point
     * @param cp2y the y coordinate of the second control point
     * @param x the x coordinate of the end point
     * @param y the y coordinate of the end point
     * @returns this
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Remove all of this path's points.
     * @returns this
     */
    clear(): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): GraphicsPath.OptionsOut;
    /**
     * Returns true if there are no elements in this path
     */
    isEmpty(): boolean;
    /**
     * Returns the length of the current path.
     */
    getLength(): number;
    /**
     * Returns an array of tags.
     */
    getTags(): PointType[];
    /**
     * Returns an array of x coordinates.
     */
    getX(): number[];
    /**
     * Returns an array of y coordinates.
     */
    getY(): number[];
    /**
     * Returns a start index in the x and y for the current command.
     * @param i index of the element
     */
    getIndex(i: number): number;
    /**
     * Returns the element at the given index in the painter path.
     * @param i index of the element
     */
    getElement(i: number): {
        type: PointType.LINETO | PointType.MOVETO;
        x: number;
        y: number;
    } | {
        type: PointType.ARCTO;
        x1: number;
        y1: number;
        x2: number;
        y2: number;
        radius: number;
    } | {
        type: PointType.BEZIERCURVETO;
        cp1x: number;
        cp1y: number;
        cp2x: number;
        cp2y: number;
        x: number;
        y: number;
    } | {
        type: PointType.CLOSE;
    };
    /**
     * Returns the number of elements
     */
    getElementCount(): number;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: GraphicsPath.Options): this;
    /**
     * Returns the path's string representation
     */
    toString(): string;
    /**
     * Makes the intersection of this path's fill area
     * and rectangle. This method is experimental and work for
     * bounds only.
     *
     * @param rect the specified rectangle
     * @returns this
     * @throws {Error} if the rect is null
     */
    intersect(rect: Rect): this;
    /**
     * Transform path using the current transformation
     * @param transformation the specified transformation
     */
    transform(transformation: Transformation): this;
    /**
     * Returns a path shape which represents a rectangle
     * @param rect rectangle
     * @returns instance
     */
    static fromRect(rect: Rect): GraphicsPath;
    /**
     * Returns a path shape created from SVG formatted path string
     * @param str SVG formatted path
     */
    static fromSVG(str: string): GraphicsPath;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace GraphicsPath {
    /**
     * properties object
     */
    type Options = {
        /**
         * x
         */
        x?: number[];
        /**
         * y
         */
        y?: number[];
        /**
         * index
         */
        index?: number[];
        /**
         * tags
         */
        tags?: PointType[];
        /**
         * bounds
         */
        bounds?: Rect;
    };
    type OptionsOut = Required<Options>;
}
