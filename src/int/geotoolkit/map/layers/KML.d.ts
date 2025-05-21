import { KML as KMLSource } from '@int/geotoolkit/map/sources/KML';
import { Vector } from '@int/geotoolkit/map/layers/Vector';
/**
 * The implementation is capable of loading KML (Keyhole Markup Language) data.<br>
 */
export declare class KML extends Vector {
    /**
     * @param [options] options
     */
    constructor(options?: KML.Options);
}
export declare namespace KML {
    /**
     * options
     */
    type Options = Vector.Options & {
        /**
         * the layer data source
         */
        source?: KMLSource;
    };
}
