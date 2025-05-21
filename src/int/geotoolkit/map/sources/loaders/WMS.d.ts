import { AbstractLoader } from '@int/geotoolkit/map/sources/loaders/AbstractLoader';
/**
 * WMS source loader that loads settings from WMS (Web Map Service) server
 */
export declare class WMS extends AbstractLoader {
    constructor(options?: AbstractLoader.Options);
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     */
    parse(data: string | XMLDocument, onload: (loader: AbstractLoader) => void): void;
    /**
     * Returns server settings request url
     * @returns request server data request
     */
    getSettingsUrl(): string;
}
