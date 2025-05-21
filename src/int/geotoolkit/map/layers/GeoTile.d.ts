/**
 * @module geotoolkit/map/layers/GeoTile
 */
import { GeoTile as GeoTileSource } from '@int/geotoolkit/map/sources/GeoTile';
import { Projection } from '@int/geotoolkit/map/layers/Projection';
import type { Merge } from '@int/geotoolkit/base';
import type { GeoTile as GeoTileLoader } from '@int/geotoolkit/map/sources/loaders/GeoTile';
import type { GeoTile as GeoTileFormat } from '@int/geotoolkit/map/sources/formats/GeoTile';
/**
 * GeoTile layer
 */
export declare class GeoTile extends Projection {
    /**
     * @param options options object
     */
    constructor(options: GeoTile.Options);
    clone(): GeoTile;
}
export declare namespace GeoTile {
    /**
     * options object
     */
    type Options = Merge<GeoTileSource.Options, Projection.Options> & {
        /**
         * GeoTile loader
         */
        loader?: GeoTileLoader;
        /**
         * GeoTile format
         */
        format?: GeoTileFormat;
    };
}
