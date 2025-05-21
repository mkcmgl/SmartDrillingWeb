/**
 * @module geotoolkit/map/sources/loaders/ArcGISTile
 */
import { ArcGISImage } from '@int/geotoolkit/map/sources/loaders/ArcGISImage';
import type { AbstractLoader } from '@int/geotoolkit/map/sources/loaders/AbstractLoader';
/**
 * ArcGIS source loader that loads ArcGIS server settings (including tileInfo) and sets the standard tiles url.
 * Supports ArcGIS version 9.3 and higher.
 */
export declare class ArcGISTile extends ArcGISImage {
    /**
     * @param [options] options
     */
    constructor(options?: AbstractLoader.Options);
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     * @throws {Error} if ArcGISTile server returned error
     */
    parse(data: string | Record<string, any>, onload: (loader: AbstractLoader) => void): void;
}
