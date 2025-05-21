import { Stream as StreamFormat } from '@int/geotoolkit/map/sources/formats/Stream';
import { Stream as StreamLoader } from '@int/geotoolkit/map/sources/loaders/Stream';
import { Vector } from '@int/geotoolkit/map/sources/Vector';
/**
 * Vector source that allows user to get features from ArcGIS Stream server
 */
export declare class Stream extends Vector {
    /**
     * @param [options] options
     */
    constructor(options?: Stream.Options);
    /**
     * Sets the authorization token for ArcGIS stream server (if needed, null otherwise)
     * @param token the authorization token for ArcGIS server
     * @returns this
     */
    setToken(token: string): this;
    /**
     * Returns the authorization token (if set, null otherwise)
     */
    getToken(): string;
}
export declare namespace Stream {
    /**
     * options
     */
    type Options = Vector.Options & {
        /**
         * loader for loading server settings
         */
        loader?: StreamLoader;
        /**
         * the remote features format
         */
        format?: StreamFormat;
        /**
         * authorization token (for ArcGIS stream servers if needed)
         */
        token?: string;
    };
}
