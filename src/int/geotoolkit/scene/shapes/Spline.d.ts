import { Path } from '@int/geotoolkit/scene/shapes/Path';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
/**
 * Define spline shape
 */
export declare class Spline extends Path {
    /**
     * @param options spline options
     */
    constructor(options?: Spline.Options);
    /**
     * @param x coordinates
     * @param y coordinates
     * @param linestyle style
     */
    constructor(x: number[], y: number[], linestyle?: LineStyle | string | LineStyle.Options);
    protected copyConstructor(src: Spline): this;
    /**
     * Sets arrays of points
     *
     * @param x x coordinates
     * @param y y coordinates
     * @returns this
     */
    setCoordinates(x: number[], y: number[]): this;
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
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     */
    setProperties(properties?: Spline.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing the properties to set
     */
    getProperties(): Spline.OptionsOut;
}
export declare namespace Spline {
    /**
     * coordinates
     */
    type Options = Path.Options;
    /**
     * object containing the properties to set
     */
    type OptionsOut = Path.OptionsOut;
}
