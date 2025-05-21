import { ArcGISToken } from '@int/geotoolkit/map/sources/connectors/ArcGISToken';
import { AbstractLoader } from '@int/geotoolkit/map/sources/loaders/AbstractLoader';
/**
 * ArcGIS source loader that loads settings and styles from FeatureService server. Supports ArcGIS version 10.0 and higher
 */
export declare class ArcGISFeature extends AbstractLoader {
    constructor(options?: AbstractLoader.Options);
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     * @throws {Error} if ArcGISFeature server returned error
     */
    parse(data: string | Record<string, any>, onload: (loader: AbstractLoader) => void): void;
    /**
     * Returns server settings request url
     * @returns request server data request
     */
    getSettingsUrl(): string;
    protected getRequestOptions(): ArcGISToken.SendOptions;
}
