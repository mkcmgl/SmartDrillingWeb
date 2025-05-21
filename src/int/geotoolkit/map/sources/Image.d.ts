import { AbstractSource } from '@int/geotoolkit/map/sources/AbstractSource';
import { Events } from '@int/geotoolkit/map/sources/Events';
import type { Image as ImageShape } from '@int/geotoolkit/scene/shapes/Image';
import type { LayerServerData } from '@int/geotoolkit/map/layers/LayerServerData';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Image source that allows user to get map data as an image using the format provided
 */
export declare class Image extends AbstractSource {
    /**
     * Creates image source
     * @param [options] options
     */
    constructor(options?: Image.Options);
    on<E extends keyof Image.EventMap>(type: E, callback: (eventType: E, sender: this, args: Image.EventMap[E]) => void): this;
    off<E extends keyof Image.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Image.EventMap[E]) => void): this;
    notify<E extends keyof Image.EventMap>(type: E, source: Image, args?: Image.EventMap[E]): this;
    /**
     * Notifies source to remove all data added.
     * @returns this
     */
    clear(): this;
    /**
     * Sets image inflate ratio to use
     * @param ratio image inflate ratio (e.g. 0.2 means the 20% inflation)
     * @returns this
     */
    setInflateRatio(ratio: number): this;
    /**
     * Returns current inflate ratio
     */
    getInflateRatio(): number;
    /**
     * Sets timeout
     * @param timeout timeout
     * @returns this
     */
    setSourceTimeout(timeout: number): this;
    /**
     * Returns timeout
     */
    getSourceTimeout(): number;
    /**
     * Sets the server layer name(s) to be shown on the layer
     * @param layers layer id(s) to be shown
     * @returns this
     */
    showLayers(layers: null | string | number | (string | number)[]): this;
    /**
     * Adds the passed in ID's to the list of layers to hide
     * @param [id] ID(s) for the layers to show
     * @returns this
     */
    hideLayers(id?: string | number | (string | number)[]): this;
    /**
     * Returns the server layer ids that are requested.
     * @returns layers
     */
    getVisibleLayers(): (string | number)[];
    /**
     * Returns layers JSON data loaded from the server
     * Should be used asynchronically after loadServerData() method is called
     */
    getLayers(): LayerServerData[];
}
export declare namespace Image {
    /**
     * options
     */
    type Options = AbstractSource.Options & {
        /**
         * the timeout (in ms) between viewport changed and new image requested
         */
        timeout?: number;
        /**
         * inflate ratio for requesting area (0.2 by default means +20%)
         */
        inflate?: number;
        /**
         * set true to clip requesting image with the layer limits, false otherwise
         */
        uselayerlimits?: boolean;
    };
    type EventMap = AbstractSource.EventMap & {
        [Events.ImageLoaded]: ImageShape | ImageShape[] | {
            image: HTMLCanvasElement;
            bounds: Rect;
        };
        [Events.ImageCleared]: void;
    };
}
