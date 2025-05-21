/**
 * @module geotoolkit/map/sources/connectors/ArcGISToken
 */
import { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
import { HttpRequest } from '@int/geotoolkit/map/sources/connectors/HttpRequest';
/**
 * Source connector that wraps another one, adding (and requesting) ArcGIS token if needed
 */
export declare class ArcGISToken extends AbstractConnector {
    /**
     * @param [options]
     */
    constructor(options?: ArcGISToken.Options);
    send(url: string, options: ArcGISToken.SendOptions | null, callback: (err: Error | null, data?: Record<string, any> | string) => void): void;
}
export declare namespace ArcGISToken {
    type Options = HttpRequest.Options & {
        /**
         * connector to wrap
         */
        connector?: AbstractConnector;
        /**
         * connector to use for token request
         */
        tokenconnector?: HttpRequest;
    };
    /**
     * extra options for the request (null if no needed)
     */
    type SendOptions = AbstractConnector.SendOptions & {
        /**
         * ArcGIS token to use for secured connection
         */
        token?: string;
    };
}
