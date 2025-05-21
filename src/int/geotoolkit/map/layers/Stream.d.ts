import { Stream as StreamSource } from '@int/geotoolkit/map/sources/Stream';
import { Vector } from '@int/geotoolkit/map/layers/Vector';
/**
 * This shape connects to an ArcGIS Stream Server and displays a single layer from it.
 */
export declare class Stream extends Vector {
    /**
     * @param [options] options
     */
    constructor(options?: Stream.Options);
}
export declare namespace Stream {
    /**
     * options
     */
    type Options = Vector.Options & {
        /**
         * the layer data source
         */
        source?: StreamSource;
        /**
         * authorization token (for ArcGIS stream server if needed)
         */
        token?: string;
    };
}
