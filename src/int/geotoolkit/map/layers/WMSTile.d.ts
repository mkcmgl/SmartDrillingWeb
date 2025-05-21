/**
 * @module geotoolkit/map/layers/WMSTile
 */
import type { Merge } from '@int/geotoolkit/base';
import { Tile } from '@int/geotoolkit/map/layers/Tile';
import type { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import type { LayerServerData } from '@int/geotoolkit/map/layers/LayerServerData';
/**
 * This shape connects to WMS server to display a map with the tiles approach. Has its pros and cons compared to the standard
 * WMS layer such as strict tiling structure but potentially better performance.
 */
export declare class WMSTile extends Tile {
    /**
     * @param [options] layer options
     */
    constructor(options?: WMSTile.Options);
    /**
     * Sets the image format to use by the layer
     *
     * @param format image format to use
     * @returns this
     */
    setImageFormat(format: string): this;
    /**
     * Returns the image format used by the layer
     * @returns format image format that is used
     */
    getImageFormat(): null | string;
    /**
     * Sets the transparency of the layer
     *
     * @param transparent true if layer should be transparent
     * @returns this
     */
    setTransparent(transparent: boolean): this;
    /**
     * Returns the transparency of the layer
     * @returns bool true if layer is transparent
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
     * Gets the JSON data of the available layers for the server
     */
    getLayers(): LayerServerData[];
    /**
     * Returns the server layer names that are requested.
     * @returns layers
     */
    getVisibleLayers(): (string | number)[];
    /**
     * Adds the passed in ID's to the list of layers to show
     * @param id id(s) for the layer(s) to show
     * @returns this
     */
    showLayers(id: number | string | (string | number)[]): this;
    /**
     * Adds the passed in ID's to the list of layers to hide
     * @param [id] ID(s) for the layers to show
     * @returns this
     */
    hideLayers(id?: number | string | (string | number)[]): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing the properties
     */
    getProperties(): WMSTile.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties
     * @returns this
     */
    setProperties(properties: WMSTile.Options): this;
    /**
     * Sets options
     * @param [options] object containing the properties
     * @returns this
     */
    setOptions(options: AbstractLayer.OptionsBase & WMSTile.OptionsBase): this;
}
export declare namespace WMSTile {
    /**
     * layer options
     */
    type Options = Tile.Options & OptionsBase;
    /**
     * object containing the properties
     */
    type OptionsOut = Tile.OptionsOut & Merge<OptionsBase, {
        showlayers?: (string | number)[];
    }>;
    /**
     * object containing the properties
     */
    type OptionsBase = {
        /**
         * the image format used by the layer
         */
        format?: string;
        /**
         * the WMS version currently used
         */
        version?: string;
        /**
         * the layer transparency
         */
        transparent?: boolean;
        /**
         * the server layer names that are requested
         */
        showlayers?: string[];
    };
}
