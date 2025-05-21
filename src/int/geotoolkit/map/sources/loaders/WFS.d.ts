import { AbstractLoader } from '@int/geotoolkit/map/sources/loaders/AbstractLoader';
/**
 * WFS source loader that loads settings from WFS (Web Feature Service) server
 */
export declare class WFS extends AbstractLoader {
    constructor(options?: AbstractLoader.Options);
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     * @throws {Error} if Wrong GetCapabilities info was provided
     */
    parse(data: string | XMLDocument, onload: (loader: AbstractLoader) => void): void;
    /**
     * Returns server settings request url
     * @returns request server data request
     */
    getSettingsUrl(): string;
}
