/**
 * @module geotoolkit/map/coordinatesystems/Transformer
 */
import { Point } from '@int/geotoolkit/util/Point';
import { Rect } from '@int/geotoolkit/util/Rect';
import { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
/**
 * Used to transform points from one CoordinateSystem to another.
 *
 * @example
 * // transform points from one CoordinateSystem to another.
 * import {Transformer} from '@int/geotoolkit/map/coordinatesystems/Transformer';
 * import {GeodeticSystem} from '@int/geotoolkit/map/GeodeticSystem';
 * import {Point} from '@int/geotoolkit/util/Point';
 * ...
 * const transform = new Transformer({
 *           // initial system: latitude/longitude:
 *           'initialcoordinatesystem': GeodeticSystem.LatLon,
 *           // target system: WGS84:
 *           'targetcoordinatesystem': GeodeticSystem.WGS84
 *       });
 * transform.transform(new Point(longitude, latitude));
 */
export declare class Transformer {
    /**
     * @param systems options to specify initial and target coordinate systems
     */
    constructor(systems: Transformer.Options);
    /**
     * @param initSystem initial coordinate system
     * @param targetSystem target coordinate system
     */
    constructor(initSystem: AbstractSystem | string, targetSystem: AbstractSystem | string);
    /**
     * Returns transformed point, rectangle or polygonal geometry object
     * @param source origin to be transformed
     * @param [dst] optional destination object
     */
    transform<T extends Point | Rect | Transformer.PolygonGeometry>(source: T, dst?: T): T;
    /**
     * Returns transformed point
     * @param point to transform
     * @param [dst] optional destination point
     */
    transformPoint(point: Point, dst?: Point): Point;
    /**
     * Returns transformed rectangle
     * @param rect rectangle to transform
     * @param [dst] optional destination rectangle
     */
    transformRect(rect: Rect, dst?: Rect): Rect;
    /**
     * Returns transformed polygonal geometry object
     * @param geometry polygonal geometry object to transform
     * @param [dst] optional destination geometry
     */
    transformPolygon(geometry: Transformer.PolygonGeometry, dst?: Transformer.PolygonGeometry): Transformer.PolygonGeometry;
    /**
     * Sets initial coordinate system
     * @param system initial coordinate system
     * @returns this
     */
    setInitialCoordinateSystem(system: string | AbstractSystem): this;
    /**
     * Gets initial coordinate system
     */
    getInitialCoordinateSystem(): AbstractSystem;
    /**
     * Sets target coordinate system
     * @param system target coordinate system
     * @returns this
     */
    setTargetCoordinateSystem(system: string | AbstractSystem): this;
    /**
     * Gets target coordinate system
     */
    getTargetCoordinateSystem(): AbstractSystem;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Transformer {
    /**
     * options to specify transformer or initial coordinate system
     */
    type Options = {
        /**
         * initial coordinate system
         */
        initialcoordinatesystem: AbstractSystem | string;
        /**
         * target coordinate system
         */
        targetcoordinatesystem: AbstractSystem | string;
    };
    /**
     * polygonal geometry object to transform
     */
    type PolygonGeometry = {
        /**
         * x-ordinates to be transformed
         */
        x: number[];
        /**
         * y-ordinates to be transformed
         */
        y: number[];
    };
}
