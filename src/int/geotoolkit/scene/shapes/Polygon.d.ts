import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Point } from '@int/geotoolkit/util/Point';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * A polygon node which is defined by arrays of points.
 */
export declare class Polygon extends ScaledShape {
    /**
     * @param options PolygonParamsType
     */
    constructor(options?: Polygon.Options);
    /**
     * @param [x] set of x coordinates
     * @param [y] set of y coordinates
     * @param [visible] visibility
     * @param [linestyle] linestyle
     * @param [fillstyle] apply polygon fillstyle
     */
    constructor(x?: number[], y?: number[], visible?: boolean, linestyle?: LineStyle | string | LineStyle.Options, fillstyle?: FillStyle | string | FillStyle.Options);
    /**
     * Returns path geometry of the polygon
     */
    getGeometry(): GraphicsPath;
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: Polygon): this;
    /**
     * Returns bounds and locks the bounds rect from further editing.
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Sets arrays of points. Will overwrite any existing points in this polygon.
     *
     * @param x array of x coordinates
     * @param y array of y coordinates
     * @returns this
     */
    setCoordinates(x: number[], y: number[]): this;
    /**
     * Adds point to array of points
     * @param point Point
     * @returns this
     */
    push(point: Point): this;
    /**
     * Adds point to array of points
     * @param x x-coordinate
     * @param [y] y-coordinate
     * @returns this
     */
    push(x: number, y?: number): this;
    /**
     * Inserts point into array at specified index.
     * @param index the point position index
     * @param point point to insert
     */
    insert(index: number, point: Point): this;
    /**
     * Inserts point into array at specified index.
     * @param index the point position index
     * @param x x-coordinate
     * @param [y] y-coordinate
     */
    insert(index: number, x: number, y?: number): this;
    /**
     * Removes point(s) from the polygon.
     * @param start index of the first removing point
     * @param [count] the number of points to be removed
     * @returns an object containing the deleted points
     */
    remove(start: number, count?: number): Polygon.Points;
    /**
     * Sets new coordinates for the polygon point at specified index
     * @param index the point index
     * @param point point to set
     */
    setPoint(index: number, point: Point): this;
    /**
     * Sets new coordinates for the polygon point at specified index
     * @param index the point index
     * @param x point x-coordinate
     * @param y point y-coordinate
     */
    setPoint(index: number, x: number, y: number): this;
    /**
     * Returns polygon point at specified index (null if no point found)
     * @param index the point index
     */
    getPoint(index: number): Point | null;
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
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Polygon.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Polygon.Options): this;
}
export declare namespace Polygon {
    /**
     * set of x coordinates or object, which contains shape properties
     */
    type Options = Shape.Options & Partial<Points>;
    /**
     * polygon points
     */
    type Points = {
        /**
         * array of x-coordinate of the points
         */
        x: number[];
        /**
         * array of y-coordinate of the points
         */
        y: number[];
    };
    /**
     * properties
     */
    type OptionsOut = Shape.OptionsOut & Points & {
        /**
         * number of points
         */
        npts: number;
    };
}
