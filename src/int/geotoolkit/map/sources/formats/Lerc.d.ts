import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
import { Events as ImageEvents } from '@int/geotoolkit/scene/shapes/Image';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
/**
 * ArcGIS source format that parses Lerc (Limited Error Raster Compression) formatted responses. Can be used both as a features format
 * or parse LERC images (see tutorial for details)
 */
export declare class Lerc extends AbstractFormat {
    /**
     * Creates format
     * @param [options] options
     */
    constructor(options?: Lerc.Options);
    on<E extends keyof Lerc.EventMap>(type: E, callback: (eventType: E, sender: this, args: Lerc.EventMap[E]) => void): this;
    off<E extends keyof Lerc.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Lerc.EventMap[E]) => void): this;
    notify<E extends keyof Lerc.EventMap>(type: E, source: Lerc, args?: Lerc.EventMap[E]): this;
    query(query: AbstractFormat.RectQuery): this;
}
export declare namespace Lerc {
    /**
     * options
     */
    type Options = AbstractFormat.Options & {
        /**
         * color provider to use for one-dimensional
         */
        colorprovider?: ColorProvider;
        /**
         * the tile size for each symbol/feature (in px). Set to use format for the vectors
         */
        symboltilesize?: number;
    };
    type EventMap = AbstractFormat.EventMap & {
        [ImageEvents.ImageLoaded]: string;
    };
}
