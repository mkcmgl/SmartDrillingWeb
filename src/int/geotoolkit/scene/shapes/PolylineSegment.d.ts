/**
 * @module geotoolkit/scene/shapes/PolylineSegment
 */
import { Rect } from '@int/geotoolkit/util/Rect';
/**
 * The set of polyline shape.
 */
export declare class PolylineSegment {
    /**
     * @param options options
     */
    constructor(options: PolylineSegment.Options);
    /**
     * @param x set of x coordinates
     * @param y set of y coordinates
     */
    constructor(x: number[], y: number[]);
    /**
     * Return bounds
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): PolylineSegment.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     */
    setProperties(properties?: PolylineSegment.Options): this;
}
export declare namespace PolylineSegment {
    /**
     * object containing the properties to set OR set of x coordinates
     */
    type Options = {
        /**
         * set of x coordinates
         */
        x?: number[];
        /**
         * set of y coordinates
         */
        y?: number[];
        /**
         * shape bounds
         */
        bounds?: Rect;
    };
    /**
     * properties
     */
    type OptionsOut = {
        /**
         * set of x coordinates
         */
        x?: number[];
        /**
         * set of y coordinates
         */
        y?: number[];
        /**
         * shape bounds
         */
        bounds?: Rect;
        /**
         * number of points
         */
        npts?: number;
    };
}
