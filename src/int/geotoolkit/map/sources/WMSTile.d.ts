import { Tile } from '@int/geotoolkit/map/sources/Tile';
import type { WMS as _WMS } from '@int/geotoolkit/map/sources/WMS';
import type { LayerServerData } from '@int/geotoolkit/map/layers/LayerServerData';
/**
 * Tile source that allows user to get map data as a bunch of tiles using the WMS (Web Map Service) server
 */
export declare class WMSTile extends Tile {
    /**
     * @param [options] options
     */
    constructor(options?: _WMS.Options);
    /**
     * Sets the image format to be used for tiles
     * @param format image format to use (e.g. 'png')
     * @returns this
     */
    setImageFormat(format: string): this;
    /**
     * Returns the image format currently used for tiles
     */
    getImageFormat(): null | string;
    /**
     * Sets the tiles transparency
     * @param transparent tiles transparency
     * @returns this
     */
    setTransparent(transparent: boolean): this;
    /**
     * Returns the tiles current transparency
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
     * Sets the server layer name(s) to be shown on the layer
     * @param layers layer id(s) to be shown
     * @returns this
     */
    showLayers(layers: string | number | (string | number)[]): this;
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
