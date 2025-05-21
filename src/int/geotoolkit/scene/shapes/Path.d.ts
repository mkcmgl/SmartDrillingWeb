import { GraphicsPath, PointType } from '@int/geotoolkit/renderer/GraphicsPath';
import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines Path node
 */
export declare class Path extends ScaledShape {
    /**
     * @param [options] PathParamsType
     */
    constructor(options?: Path.Options);
    /**
     * @param [visible] visibility
     * @param [linestyle] linestyle
     */
    constructor(visible?: boolean, linestyle?: LineStyle | string | LineStyle.Options);
    clone(): Path;
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: Path, deepCopy?: boolean): this;
    /**
     * Remove all of this path's points.
     */
    clear(): this;
    /**
     * Returns true if there are no elements in this path
     */
    isEmpty(): boolean;
    /**
     * Make path API compatible with graphics context
     */
    beginPath(): this;
    /**
     * Add command to move the current position.
     * @param x The x-coordinate of the destination point
     * @param y The y-coordinate of the destination point
     */
    moveTo(x: number, y: number): this;
    /**
     * Close path
     * @returns this
     */
    close(): this;
    /**
     * Close path (same as .close)
     * @returns this
     */
    closePath(): this;
    /**
     * Add command to draw a line from the current position to specified point
     * @param x The x-coordinate of the destination point
     * @param y The y-coordinate of the destination point
     * @returns this
     */
    lineTo(x: number, y: number): this;
    /**
     * Add command to draw an arc from the current position to specified point
     * @param x1 The x-coordinate of the destination point
     * @param y1 The y-coordinate of the destination point
     * @param x2 x-coordinate of control point
     * @param y2 y-coordinate of control point
     * @param radius The radius of arc
     * @returns this
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): this;
    /**
     * Draws a cubic Bezier curve from the current point to the point (x, y),
     * @param options BezierParamsType
     */
    bezierCurveTo(options?: Path.BezierOptions): this;
    /**
     * Draws a cubic Bezier curve from the current point to the point (x, y),
     * @param cp1x x coordinate of the first control point
     * @param cp1y y coordinate of the first control point
     * @param cp2x x coordinate of the second control point
     * @param cp2y y coordinate of the second control point
     * @param x x coordinate of the end point
     * @param y y coordinate of the end point
     */
    bezierCurveTo(cp1x?: number, cp1y?: number, cp2x?: number, cp2y?: number, x?: number, y?: number): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    render(context: RenderingContext): void;
    /**
     * Returns the geometry of this item as a GeometryPath in
     * model coordinates.
     */
    getGeometry(): GraphicsPath;
    /**
     * Sets a geometry for the path in model coordinates
     * @param geometry New geometry
     */
    setGeometry(geometry: GraphicsPath): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Path.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set see {@link import("geotoolkit/renderer/GraphicsPath").GraphicsPath.setProperties}
     */
    setProperties(properties?: Path.Options): this;
}
export declare namespace Path {
    /**
     * options or visible flag
     */
    type Options = Shape.Options & {
        /**
         * geometry the path
         */
        geometry?: GraphicsPath;
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
    /**
     * options for bezier curve
     */
    type BezierOptions = {
        x: number;
        y: number;
        cp1x: number;
        cp1y: number;
        cp2x: number;
        cp2y: number;
    };
    /**
     * properties
     */
    type OptionsOut = Shape.OptionsOut & {
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
}
