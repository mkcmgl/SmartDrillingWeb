import { VectorTile as VectorTileLoader } from '@int/geotoolkit/map/sources/loaders/VectorTile';
import { VectorTile as VectorTileFormat } from '@int/geotoolkit/map/sources/formats/VectorTile';
import { Vector } from '@int/geotoolkit/map/sources/Vector';
import { Events } from '@int/geotoolkit/map/sources/Events';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Tile } from '@int/geotoolkit/map/sources/formats/Tile';
/**
 * Vector Tile source that allows user to get features from remote resource in Pbf format
 */
export declare class VectorTile extends Vector {
    /**
     * Creates vector tile
     * @param [options] options
     */
    constructor(options?: VectorTile.Options);
    on<E extends keyof VectorTile.EventMap>(type: E, callback: (eventType: E, sender: this, args: VectorTile.EventMap[E]) => void): this;
    off<E extends keyof VectorTile.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: VectorTile.EventMap[E]) => void): this;
    notify<E extends keyof VectorTile.EventMap>(type: E, source: VectorTile, args?: VectorTile.EventMap[E]): this;
    /**
     * Returns font names that are used in VectorTile styling
     */
    getFonts(): string[];
}
export declare namespace VectorTile {
    /**
     * options
     */
    type Options = Vector.Options & {
        /**
         * the remote features format
         */
        format?: VectorTileFormat;
        /**
         * the remote features format
         */
        loader?: VectorTileLoader;
        /**
         * features drawing styles file url, if no set default styles are used
         */
        styleurl?: string;
        /**
         * the function that takes z, y, x and turns that into tile location (replaces the format field)
         */
        formatterfunction?: Tile.FormatterCallback;
    };
    type EventMap = Vector.EventMap & {
        [Events.TilesUpdated]: Rect;
    };
}
