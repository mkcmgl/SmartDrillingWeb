import { GeodeticSystem } from '@int/geotoolkit/map/GeodeticSystem';
import { GPX as GPXSource } from '@int/geotoolkit/map/sources/GPX';
import { Vector } from '@int/geotoolkit/map/layers/Vector';
import type { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
/**
 * The implementation is capable of loading GPX (Global Positioning System Exchange Format) data.<br>
 */
export declare class GPX extends Vector {
    /**
     * @param [options] options
     */
    constructor(options?: GPX.Options);
}
export declare namespace GPX {
    /**
     * options
     */
    type Options = Vector.Options & {
        /**
         * coordinate system this layer's data is in
         */
        system?: GeodeticSystem | AbstractSystem;
        /**
         * the layer data source
         */
        source?: GPXSource;
    };
}
