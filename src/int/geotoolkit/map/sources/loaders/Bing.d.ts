/**
 * @module geotoolkit/map/sources/loaders/Bing
 */
import { AbstractLoader } from '@int/geotoolkit/map/sources/loaders/AbstractLoader';
/**
 * Bing source loader that loads settings from Bing Maps server
 */
export declare class Bing extends AbstractLoader {
    /**
     * @param [options] options
     */
    constructor(options?: AbstractLoader.Options);
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     * @throws {Error} if BingMap server returned error
     */
    parse(data: string | Record<string, any>, onload: (loader: AbstractLoader) => void): void;
    /**
     * Returns server settings request url
     * @returns request server data request
     * @throws {Error} if centerPoint parameter is not provided
     */
    getSettingsUrl(): string;
}
