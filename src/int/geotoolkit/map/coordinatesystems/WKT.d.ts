import { AxisDirection } from '@int/geotoolkit/map/coordinatesystems/AxisDirection';
import { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import { Point } from '@int/geotoolkit/util/Point';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Based on WKT converter, can use parameters spheroid, towgs84, primem
 */
export declare class WKT extends AbstractSystem {
    /**
     * @param [options] options
     */
    constructor(options?: WKT.Options | string);
    transform(lon: number, lat: number, dst?: Point): Point;
    inverseTransform(mercatorX: number, mercatorY: number, dst?: Point): Point;
    /**
     * Gets spheroid
     * @returns spheroid
     */
    getSpheroid(): number[];
    /**
     * Gets toWGS84
     * @returns toWGS84
     */
    getToWGS84(): number[];
    /**
     * Gets prime meridian
     * @returns prime meridian
     */
    getPrimeMeridian(): number;
    /**
     * Gets spheroid units
     * @returns spheroid units
     */
    getSpheroidUnits(): AbstractUnit;
    /**
     * Parses Well-Known text projection representation into WKT coordinate system
     * @param str WKT text
     */
    static parse(str: string): null | WKT;
}
export declare namespace WKT {
    /**
     * options
     */
    type Options = AbstractSystem.Options & {
        /**
         * spheroid
         */
        spheroid?: number[];
        /**
         * towgs84
         */
        towgs84?: number[];
        /**
         * prime meridian
         */
        primem?: number;
        /**
         * spheroid units
         */
        spheroidunits?: AbstractUnit | string;
        /**
         * axis directions
         */
        axis?: AxisDirection[];
        /**
         * UTM zone
         */
        zone?: number;
        /**
         * true, if it is south hemisphere, false, if north
         */
        southhemi?: boolean;
        /**
         * sp1 latitude
         * @deprecated since 4.0. Use correct spelling standardparallel1
         */
        standartparallel1?: number;
        /**
         * sp2 latitude
         * @deprecated since 4.0. Use correct spelling standardparallel2
         */
        standartparallel2?: number;
        /**
         * sp1 latitude
         */
        standardparallel1?: number;
        /**
         * sp2 latitude
         */
        standardparallel2?: number;
        /**
         * origin latitude
         */
        latitudeoforigin?: number;
        /**
         * origin longitude
         */
        centralmeridian?: number;
        /**
         * false easting
         */
        falseeasting?: number;
        /**
         * false northing
         */
        falsenorthing?: number;
        /**
         * scale
         */
        scalefactor?: number;
    };
}
