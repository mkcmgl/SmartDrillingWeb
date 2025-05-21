import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Point } from '@int/geotoolkit/util/Point';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Any layer data has some coordinates, for example: From where to draw a picture for a Image layer, or feature coordinates for Vector layers. There is no single agreement which coordinate system to use and there are thousands of different coordinate systems. <br>
 * Therefore, to draw different layers on one map, the data must be converted to one system. For this purpose, transformers and coordinate systems from the geotoolkit/map/coordinatesystems are used. <br>
 * They contain information about how the coordinates are set in each case and thus can convert from one system to another. This class specifies the generalized coordinate system.
 */
export declare abstract class AbstractSystem {
    /**
     * @param options options to specify coordinate system.
     */
    protected constructor(options: AbstractSystem.Options);
    /**
     * Return a name of the coordinate system
     */
    getName(): string;
    /**
     * Return units of the coordinate system
     */
    getUnits(): AbstractUnit;
    /**
     * Return epsg code of the coordinate system
     * @returns epsg code
     */
    getEpsgCode(): number;
    /**
     * Return if vertical axis goes up
     */
    isVerticalAxisUp(): boolean;
    /**
     * Gets the default minimal rectangular bounding region that will entirely contain
     * this AbstractSystem (approximately). A CSR is an arbitrary complex closed
     * region that touches the rectangular extent at least once on all four sides.
     */
    getDefaultModelLimits(): Rect;
    /**
     * Transforms the specified coordinate to projection from lat / lng
     * @param lon long
     * @param lat lat
     * @param [dst] optional destination point
     * @param [clamp] if set to true, lat and lon will be clamped
     */
    abstract transform(lon: number, lat: number, dst?: Point, clamp?: boolean): Point;
    /**
     * Return transformed point to lat / lng from projection
     * @param x x coordinate
     * @param y y coordinate
     * @param [dst] optional destination point
     */
    abstract inverseTransform(x: number, y: number, dst?: Point): Point;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractSystem {
    /**
     * options to specify coordinate system.
     */
    type Options = {
        /**
         * name of the coordinate system.
         */
        name?: string;
        /**
         * units of the coordinate system.
         */
        units?: string | AbstractUnit;
        /**
         * the default minimal rectangular bounding region that will entirely contain
         */
        limits?: Rect;
        /**
         * epsg code of coordinate system
         * this AbstractSystem (approximately)
         */
        epsg?: number;
    };
}
