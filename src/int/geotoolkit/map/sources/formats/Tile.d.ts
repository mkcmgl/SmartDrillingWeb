import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
import { Events } from '@int/geotoolkit/scene/shapes/Image';
import type { Image } from '@int/geotoolkit/scene/shapes/Image';
import type { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
import type { Dimension } from '@int/geotoolkit/util/Dimension';
/**
 * Tile source format that formats tile queries based on formatter function provided
 */
export declare class Tile extends AbstractFormat {
    /**
     * Creates format
     * @param [options] options
     */
    constructor(options?: Tile.Options);
    on<E extends keyof Tile.EventMap>(type: E, callback: (eventType: E, sender: this, args: Tile.EventMap[E]) => void): this;
    off<E extends keyof Tile.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Tile.EventMap[E]) => void): this;
    notify<E extends keyof Tile.EventMap>(type: E, source: Tile, args?: Tile.EventMap[E]): this;
    query(query: Tile.Query): this;
    /**
     * Gets the current formatter function
     */
    getFormatter(): Tile.FormatterCallback;
    /**
     * Sets the formatter function
     * @param formatter formatter function
     * @returns this
     */
    setFormatter(formatter: Tile.FormatterCallback): this;
}
export declare namespace Tile {
    /**
     * options
     */
    type Options = AbstractFormat.Options & {
        /**
         * formatter function that formats a tile request based on its z, y, x indices
         */
        formatterfunction?: FormatterCallback;
    };
    type FormatterCallback = (z: number, y: number, x: number) => string;
    type EventMap = AbstractFormat.EventMap & {
        [Events.ImageLoaded]: string;
    };
    /**
     * query params
     */
    type Query = AbstractConnector.SendOptions & {
        x: number;
        y: number;
        z: number;
        dst?: Image;
        grid?: Dimension;
        priority?: number;
    };
}
