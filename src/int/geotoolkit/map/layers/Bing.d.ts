import { Bing as BingSource } from '@int/geotoolkit/map/sources/Bing';
import { Tile } from '@int/geotoolkit/map/layers/Tile';
import { BingImagerySet } from '@int/geotoolkit/map/BingImagerySet';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * This shape connects to a Bing Maps server to display a map.<br>
 */
export declare class Bing extends Tile {
    /**
     * @param [options]
     */
    constructor(options?: Bing.Options);
}
export declare namespace Bing {
    type Options = Tile.Options & {
        /**
         * Bing Maps source
         */
        source?: BingSource;
        /**
         * Bing Maps API key. Get yours at http://www.bingmapsportal.com/
         */
        key?: string;
        /**
         * the culture code to use for the request
         */
        culture?: string;
        /**
         * server uri scheme to use
         */
        urischeme?: string;
        /**
         * the type of imagery for request. See
         * geotoolkit.map.BingImagerySet enum for all imagery supported
         */
        imageryset?: BingImagerySet;
        /**
         * the center point to use for the imagery
         * WARNING! center point is required for the Birdseye imagery and its varieties
         */
        centerpoint?: Point;
    };
}
