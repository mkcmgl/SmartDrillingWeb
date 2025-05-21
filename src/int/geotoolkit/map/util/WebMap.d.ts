import { HttpRequest } from '@int/geotoolkit/map/sources/connectors/HttpRequest';
import type { Map } from '@int/geotoolkit/map/Map';
import type { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
/**
 * ArcGIS Web Map layers parser
 */
export declare class WebMap {
    /**
     * Creates WebMap
     * @param [options] options
     */
    protected constructor(options?: HttpRequest.Options);
    /**
     * Loads WebMap layers from the server and adds them to the map. When all added layers are loaded, the returned promise is resolved.
     * @param map the map widget for the result
     * @param webmap the ArcGIS WebMap server url or WebMap JSON settings object
     */
    load(map: Map, webmap: string | Record<string, any>): Promise<any>;
    /**
     * Return instance of WebMap
     * @param [options] options. if options is passed, a new instance is created
     * @returns new instance
     */
    static getInstance(options?: HttpRequest.Options): WebMap;
    /**
     * Loads WebMap layers from the server and adds them to the map. When all added layers are loaded, the returned promise is resolved.
     * @param map the map widget for the result
     * @param webmap the ArcGIS WebMap server url or WebMap JSON settings object
     * @param [httpservice] http service to use for the webmap server
     */
    static load(map: Map, webmap: string | Record<string, any>, httpservice?: AbstractHttpService): Promise<any>;
    /**
     * Sets the Bing Maps API key to use in the Webmap-created Bing layers. Get yours key at http://www.bingmapsportal.com/
     * @param key Bing Maps API key
     */
    static setBingMapsKey(key: string): void;
    /**
     * Sets the default httpservice to use in Webmap requests if no widget-specific service is provided.
     * @param service http service to be used by default
     */
    static setHttpRequestService(service: AbstractHttpService): void;
    static getClassName(): string;
    getClassName(): string;
}
