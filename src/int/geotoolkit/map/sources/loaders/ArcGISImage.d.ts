import { ArcGISToken } from '@int/geotoolkit/map/sources/connectors/ArcGISToken';
import { AbstractLoader } from '@int/geotoolkit/map/sources/loaders/AbstractLoader';
/**
 * ArcGIS source loader that loads settings from MapService or ImageService server. Supports ArcGIS version 9.3 and higher.
 */
export declare class ArcGISImage extends AbstractLoader {
    constructor(options?: AbstractLoader.Options);
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     * @throws {Error} if ArcGISImage server returned error
     */
    parse(data: string | Record<string, any>, onload: (loader: AbstractLoader) => void): void;
    /**
     * Returns server settings request url
     * @returns request server data request
     */
    getSettingsUrl(): string;
    getRequestOptions(): ArcGISToken.SendOptions;
}
