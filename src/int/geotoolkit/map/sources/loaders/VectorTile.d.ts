import { AbstractLoader } from '@int/geotoolkit/map/sources/loaders/AbstractLoader';
/**
 * VectorTile source loader that loads settings and styles from Mapbox VectorTile layer
 */
export declare class VectorTile extends AbstractLoader {
    /**
     * Create vector tile loader
     * @param [options] options
     */
    constructor(options?: AbstractLoader.Options);
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     */
    parse(data: string | Record<string, any>, onload: (loader: AbstractLoader) => void): void;
    /**
     * Returns server settings request url
     * @returns request server data request
     */
    getSettingsUrl(): string;
}
