import { WMS as WMSSource } from '@int/geotoolkit/map/sources/WMS';
import { Image } from '@int/geotoolkit/map/layers/Image';
import { Events } from '@int/geotoolkit/map/sources/Events';
import type { Point } from '@int/geotoolkit/util/Point';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import type { WMS as WMSFormat } from '@int/geotoolkit/map/sources/formats/WMS';
/**
 * This shape connects to WMS server to display a map as a single image.
 */
export declare class WMS extends Image {
    /**
     * Creates WMS layer
     * @param [options] options
     */
    constructor(options?: WMS.Options);
    on<E extends keyof WMS.EventMap>(type: E, callback: (eventType: E, sender: this, args: WMS.EventMap[E]) => void): this;
    off<E extends keyof WMS.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: WMS.EventMap[E]) => void): this;
    notify<E extends keyof WMS.EventMap>(type: E, source: WMS, args?: WMS.EventMap[E]): this;
    /**
     * Sets the image format to use by the layer
     *
     * @param format image format to use
     * @returns this
     */
    setImageFormat(format: WMSFormat.Image): this;
    /**
     * Returns the image format used by the layer
     * @returns format image format that is used
     */
    getImageFormat(): WMSFormat.Image;
    /**
     * Sets the transparency of the layer
     *
     * @param bool true if layer should be transparent
     * @returns this
     */
    setTransparent(bool: boolean): this;
    /**
     * Returns the transparency of the layer
     *
     * @returns bool true if layer is transparent
     */
    getTransparent(): null | boolean;
    /**
     * Sets WMS version to use
     * @param version version to use (in '1.3.0' format)
     * @returns this
     */
    setVersion(version: string): this;
    /**
     * Returns WMS version currently used
     */
    getVersion(): null | string;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing the properties
     */
    getProperties(): WMS.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] options
     * @returns this
     */
    setProperties(properties: WMS.Options): this;
    hitTest(pt: Point, radius?: number): AbstractFeature[];
}
export declare namespace WMS {
    /**
     * options
     */
    type Options = Image.Options & {
        source?: WMSSource;
        /**
         * image format to use
         */
        imageformat?: WMSFormat.Image;
        /**
         * layer name(s) to be shown
         */
        layers?: string | string[];
        /**
         * WMS version to be used
         */
        version?: string;
        /**
         * inflate ratio for requesting area (0.2 by default means +20%)
         */
        inflate?: number;
        /**
         * true if layer should be transparent
         */
        transparent?: boolean;
        /**
         * the timeout (in ms) between viewport changed and new image requested
         */
        timeout?: number;
    };
    /**
     * object containing the properties
     */
    type OptionsOut = Image.OptionsOut & {
        /**
         * image format to use
         */
        imageformat?: WMSFormat.Image;
        /**
         * layer name(s) to be shown
         */
        layers?: (string | number)[];
        /**
         * the WMS version currently used
         */
        version?: string;
        /**
         * current source inflate ratio
         */
        inflate?: number;
        /**
         * current source timeout
         */
        timeout?: number;
        /**
         * the layer transparency
         */
        transparent?: boolean;
    };
    type EventMap = AbstractLayer.EventMap & {
        [Events.InfoUpdated]: AbstractFeature[];
    };
}
