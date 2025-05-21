import { Box3, Vector2, Vector3 } from 'three';
/**
 * A XYCoordinates coordinates object.<br>
 * <br>
 * This object holds the information about the XY coordinates of a seismic volume.<br>
 * It is used to compute the Index-to-XY transformation and provides some utility function to retrieve the XY coordinates.<br>
 */
export declare class XYCoordinates {
    constructor();
    /**
     * Initialize XYCoordinates using given json.<br>
     * <br>
     * Only 3 corners out of 4 are required.<br>
     * @param xy The xy json
     * @returns this
     */
    fromJSONXY(xy: XYCoordinates.XY): this;
    /**
     * Initialize XYCoordinates using given json.<br>
     * <br>
     * Only 3 corners out of 4 are required.<br>
     * @param xy json with points
     * @returns this
     */
    fromJSONPoints(xy: XYCoordinates.PointsXY): this;
    /**
     * Returns the bounding box
     * @returns The xyz coordinates as a box 3d
     */
    asBox3(): Box3;
    /**
     * Returns the bounding box with z being elevation
     * @returns The xyz coordinates as a box 3d
     */
    asElevationBox3(): Box3;
    /**
     * Returns if the point is inside the box
     * @param point the point to check if it is inside the box
     * @returns true if the point is inside the box
     */
    isPointInside(point: Vector3): boolean;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace XYCoordinates {
    /**
     * The xy json
     */
    type XY = {
        /**
         * The first point x value
         */
        x0?: number;
        /**
         * The first point y value
         */
        y0?: number;
        /**
         * The second point x value
         */
        x1?: number;
        /**
         * The second point y value
         */
        y1?: number;
        /**
         * The third point x value
         */
        x2?: number;
        /**
         * The third point y value
         */
        y2?: number;
        /**
         * The fourth point x value
         */
        x3?: number;
        /**
         * The fourth point y value
         */
        y3?: number;
        /**
         * The start depth
         */
        z0?: number;
        /**
         * The end depth
         */
        z1?: number;
    };
    /**
     * json with points
     */
    type PointsXY = {
        /**
         * The first point
         */
        p0?: Vector2;
        /**
         * The second point
         */
        p1?: Vector2;
        /**
         * The third point
         */
        p2?: Vector2;
        /**
         * The fourth point
         */
        p3?: Vector2;
        /**
         * The first z value
         */
        z0?: number;
        /**
         * The last z value
         */
        z1?: number;
    };
}
