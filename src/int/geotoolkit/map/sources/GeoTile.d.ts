import { Projection } from '@int/geotoolkit/map/sources/Projection';
import { Events } from '@int/geotoolkit/map/sources/Events';
import type { GeoTile as GeoTileLoader } from '@int/geotoolkit/map/sources/loaders/GeoTile';
import type { GeoTile as GeoTileFormat } from '@int/geotoolkit/map/sources/formats/GeoTile';
import type { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import type { Image } from '@int/geotoolkit/map/sources/Image';
/**
 * GeoTile source
 * @throws {Error} if user doesn't provide GeoTile loader and GeoTile format
 */
export declare class GeoTile extends Projection {
    /**
     * @param options options object
     */
    constructor(options: GeoTile.Options);
    on<E extends keyof GeoTile.EventMap>(type: E, callback: (eventType: E, sender: this, args: GeoTile.EventMap[E]) => void): this;
    off<E extends keyof GeoTile.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: GeoTile.EventMap[E]) => void): this;
    notify<E extends keyof GeoTile.EventMap>(type: E, source: GeoTile, args?: GeoTile.EventMap[E]): this;
    clone(): GeoTile;
    protected copyConstructor(src: GeoTile, deepCopy?: boolean): this;
}
export declare namespace GeoTile {
    /**
     * options object
     */
    type Options = Projection.Options & {
        /**
         * GeoTile loader
         */
        loader?: GeoTileLoader;
        /**
         * GeoTile format
         */
        format?: GeoTileFormat;
        /**
         * tiled shape additional options to use another tiled shape manager
         */
        tiledshape?: {
            /**
             * source for error image (it will be rendered if tile is not available)
             */
            errimgsrc?: string;
            /**
             * Width of a tile
             */
            tilew?: number;
            /**
             * Height of a tile
             */
            tileh?: number;
            /**
             * minimum load layer to use OSM
             */
            minlod?: number;
            /**
             * maximum load layer to use OSM
             */
            maxlod?: number;
            /**
             * images sources to use simple image
             */
            images?: {
                id: string;
                width: number;
                height: number;
            }[];
        };
    };
    type EventMap = Image.EventMap & {
        [Events.InfoUpdated]: {
            epsg: string | number | AbstractSystem;
        };
    };
}
