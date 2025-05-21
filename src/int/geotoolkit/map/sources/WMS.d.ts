import { WMS as WMSFormat } from '@int/geotoolkit/map/sources/formats/WMS';
import { Image } from '@int/geotoolkit/map/sources/Image';
import { Events } from '@int/geotoolkit/map/sources/Events';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { Point } from '@int/geotoolkit/util/Point';
import type { WMS as _WMS } from '@int/geotoolkit/map/layers/WMS';
/**
 * Image source that allows user to get map data as an image using the WMS (Web Map Service) server
 */
export declare class WMS extends Image {
    /**
     * Creates WMS source
     * @param [options] options
     */
    constructor(options?: WMS.Options);
    on<E extends keyof WMS.EventMap>(type: E, callback: (eventType: E, sender: this, args: WMS.EventMap[E]) => void): this;
    off<E extends keyof WMS.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: WMS.EventMap[E]) => void): this;
    notify<E extends keyof WMS.EventMap>(type: E, source: WMS, args?: WMS.EventMap[E]): this;
    /**
     * Sets the image format to be used
     * @param format image format to use (e.g. 'png')
     * @returns this
     */
    setImageFormat(format: WMSFormat.Image): this;
    /**
     * Returns the image format currently used
     */
    getImageFormat(): WMSFormat.Image;
    /**
     * Sets the image transparency
     * @param transparent image transparency
     * @returns this
     */
    setTransparent(transparent: boolean): this;
    /**
     * Returns the image current transparency
     */
    getTransparent(): boolean;
    /**
     * Sets WMS version to use
     * @param version version to use (in '1.3.0' format)
     * @returns this
     */
    setVersion(version: string): this;
    /**
     * Returns WMS version currently used
     */
    getVersion(): string;
    /**
     * Queries data by the geometry provided.
     * @param geometry area geometry to request
     * @param layer layer for query
     */
    getFeatureInfo(geometry: Point, layer: _WMS): AbstractFeature[];
    /**
     * Sets layers to show as the tooltip info (in .getFeatureInfo method)
     * @param layers layers to show tooltip
     * @returns this
     */
    setTooltipLayers(layers: number | number[]): this;
    /**
     * Aborts all the geometry data queried
     * @returns this
     */
    abortGeometryQueries(): this;
}
export declare namespace WMS {
    /**
     * options
     */
    type Options = Image.Options & {
        /**
         * image format to use
         */
        imageformat?: WMSFormat.Image;
        /**
         * true if tiles should be transparent, false otherwise
         */
        transparent?: boolean;
        /**
         * wms server version to use
         */
        version?: string;
    };
    type EventMap = Image.EventMap & {
        [Events.InfoUpdated]: AbstractFeature[];
    };
}
