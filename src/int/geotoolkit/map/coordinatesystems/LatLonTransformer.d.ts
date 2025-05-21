/**
 * @module geotoolkit/map/coordinatesystems/LatLonTransformer
 */
import { Transformer } from '@int/geotoolkit/map/coordinatesystems/Transformer';
import { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Created by dmitriy on 2/9/2016.
 */
/**
 * Used to transform points to lat/lon coordinate system.
 */
export declare class LatLonTransformer extends Transformer {
    /**
     * @param initSystem options to specify transformer or initial coordinate system
     */
    constructor(initSystem: LatLonTransformer.InitSystem);
    /**
     * Return transformed point
     * @param point to transform
     * @param [dst] optional destination point
     */
    transformPoint(point: Point, dst?: Point): Point;
}
export declare namespace LatLonTransformer {
    /**
     * options to specify transformer or initial coordinate system
     */
    type InitSystem = AbstractSystem | {
        /**
         * initial coordinate system
         */
        initialcoordinatesystem?: AbstractSystem;
    };
}
