import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Point } from '@int/geotoolkit/util/Point';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { OptimizationType } from '@int/geotoolkit/util/OptimizationType';
/**
 * @deprecated since 4.0, use @int/geotoolkit/util/OptimizationType instead
 */
export { OptimizationType };
/**
 * A line defined by x and y arrays of coordinates.
 */
export declare class Polyline extends ScaledShape {
    /**
     * @param [options] PolylineParamsType
     */
    constructor(options?: Polyline.Options);
    /**
     * @param [x] set of x coordinates
     * @param [y] set of y coordinates
     * @param [visible] visibility
     * @param [linestyle] linestyle
     */
    constructor(x?: number[], y?: number[], visible?: boolean, linestyle?: LineStyle | string | LineStyle.Options);
    clone(): Polyline;
    /**
     * copy constructor
     * @param src Source to copy from
     * @returns this
     */
    protected copyConstructor(src: Polyline, deepCopy?: boolean): this;
    /**
     * Sets optimization type
     * @param optimizationType optimization type which used with current line
     * @returns this
     */
    setOptimizationType(optimizationType: OptimizationType): this;
    /**
     * Returns optimization type
     * @returns optimization type
     */
    getOptimizationType(): OptimizationType;
    /**
     * Turns on/off optimization for line
     * @param [needOptimization] Is optimization for line on
     * @returns this
     */
    setOptimization(needOptimization?: boolean): this;
    /**
     * Returns current optimization state
     * @returns optimization state
     */
    getOptimization(): boolean;
    /**
     * Check collision
     *
     * @param context Rendering Context
     * @returns true if object is inside of rendering area
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Update shape bounds
     */
    updateBounds(): this;
    /**
     * Return bounds
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Sets arrays of points
     *
     * @param x an array of x coordinates
     * @param y an array of y coordinates
     * @returns this
     */
    setCoordinates(x: number[], y: number[]): this;
    /**
     * Adds point to array of points.
     * @param x x-coordinate
     * @param y y coordinate
     * @returns this
     */
    push(x: number, y: number): this;
    /**
     * Adds point to array of points.
     * @param point Point
     * @returns this
     */
    push(point: Point): this;
    /**
     * Inserts point into array at specified index.
     * @param index the point position index
     * @param point Point
     * @returns this
     */
    insert(index: number, point: Point): this;
    /**
     * Inserts point into array at specified index.
     * @param index the point position index
     * @param x x-coordinate
     * @param y y-coordinate
     * @returns this
     */
    insert(index: number, x: number, y: number): this;
    /**
     * Removes point(s) from the polygon.
     * @param start index of the first removing point
     * @param [count] the number of points to be removed
     * @returns an object containing the deleted points
     */
    remove(start: number, count?: number): Polyline.XYCoords;
    /**
     * Sets new coordinates for the polyline point at specified index
     * @param index the point index
     * @param point Point
     * @returns this
     */
    setPoint(index: number, point: Point): this;
    /**
     * Sets new coordinates for the polyline point at specified index
     * @param index the point index
     * @param x point x-coordinate
     * @param y point y-coordinate
     * @returns this
     */
    setPoint(index: number, x: number, y: number): this;
    /**
     * Returns polyline point at specified index (null if no point found)
     * @param index the point index
     */
    getPoint(index: number): null | Point;
    /**
     * Gets x-coords of points
     */
    getPointsX(): number[];
    /**
     * Gets y-coords of points
     */
    getPointsY(): number[];
    /**
     * @returns a number of the points
     */
    getSize(): number;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Polyline.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     */
    setProperties(properties?: Polyline.Options): this;
}
export declare namespace Polyline {
    /**
     * set of x coordinates or object, which contains shape properties
     */
    type Options = Shape.Options & XYCoords & {
        /**
         * optimization type boolean || ['none' | 'rdp' | 'closepoints']
         */
        optimization?: boolean | 'none' | 'rdp' | 'closepoints';
    };
    type XYCoords = {
        /**
         * set of x coordinates
         */
        x?: number[];
        /**
         * set of y coordinates
         */
        y?: number[];
    };
    /**
     * properties
     */
    type OptionsOut = Shape.OptionsOut & XYCoords & {
        /**
         * optimization settings 'none' | 'rdp' | 'closepoints'
         */
        optimization?: 'none' | 'rdp' | 'closepoints';
        /**
         * number of points
         */
        npts?: number;
    };
}
