import { Tile as TileFormat } from '@int/geotoolkit/map/sources/formats/Tile';
import { AbstractSource } from '@int/geotoolkit/map/sources/AbstractSource';
import { Events } from '@int/geotoolkit/map/sources/Events';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Tile source that allows user to get tiles from the server
 */
export declare class Tile extends AbstractSource {
    /**
     * Creates tile source
     * @param [options] options
     */
    constructor(options?: Tile.Options);
    on<E extends keyof Tile.EventMap>(type: E, callback: (eventType: E, sender: this, args: Tile.EventMap[E]) => void): this;
    off<E extends keyof Tile.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Tile.EventMap[E]) => void): this;
    notify<E extends keyof Tile.EventMap>(type: E, source: Tile, args?: Tile.EventMap[E]): this;
    /**
     * Notifies source to remove all tiles added.
     * @returns this
     */
    clear(): this;
    /**
     * Sets properties (default properties listed are for construction time only)
     * @param [properties] options
     * @returns this
     */
    setProperties(properties?: Tile.Options): this;
    /**
     * Returns properties
     * @returns options
     */
    getProperties(): Tile.OptionsOut;
}
export declare namespace Tile {
    /**
     * options
     */
    type Options = AbstractSource.Options & {
        /**
         * width for the tiles to use (in px)
         */
        tilewidth?: number;
        /**
         * height for the tiles to use (in px)
         */
        tileheight?: number;
        /**
         * the amount of cache for the tile images
         */
        imagepool?: number;
        /**
         * the minimum level of details for the tiles
         */
        minlod?: number;
        /**
         * the maximum level of details for the tiles
         */
        maxlod?: number;
        /**
         * the function that takes z, y, x and turns that into tile location (replaces the format field)
         */
        formatterfunction?: TileFormat.FormatterCallback;
        /**
         * authorization token (for ArcGIS tile servers if needed)
         */
        token?: string;
    };
    /**
     * options
     */
    type OptionsOut = AbstractSource.OptionsOut & {
        /**
         * authorization token (for ArcGIS tile servers if needed)
         */
        token?: string;
        /**
         * width for the tiles to use (in px)
         */
        tilewidth?: number;
        /**
         * height for the tiles to use (in px)
         */
        tileheight?: number;
        /**
         * the amount of cache for the tile images
         */
        imagepool?: number;
        /**
         * the minimum level of details for the tiles
         */
        minlod?: number;
        /**
         * the maximum level of details for the tiles
         */
        maxlod?: number;
    };
    type EventMap = AbstractSource.EventMap & {
        [Events.TilesUpdated]: Rect;
    };
}
