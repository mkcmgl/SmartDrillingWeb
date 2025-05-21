import { GeodeticSystem } from '@int/geotoolkit/map/GeodeticSystem';
import { GeoRSS as GeoRSSSource } from '@int/geotoolkit/map/sources/GeoRSS';
import { Vector } from '@int/geotoolkit/map/layers/Vector';
import type { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
/**
 * The implementation is capable of loading GeoRSS (Geographically Encoded Objects for RSS feeds) data.<br>
 */
export declare class GeoRSS extends Vector {
    /**
     * @param [options] options
     */
    constructor(options?: GeoRSS.Options);
}
export declare namespace GeoRSS {
    /**
     * options
     */
    type Options = Vector.Options & {
        /**
         * initial data coordinate system
         */
        system?: GeodeticSystem | AbstractSystem;
        /**
         * the layer data source
         */
        source?: GeoRSSSource;
    };
}
