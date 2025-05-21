/**
 * @module geotoolkit/map/sources/connectors/Proxy
 */
import { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
import { HttpRequest } from '@int/geotoolkit/map/sources/connectors/HttpRequest';
/**
 * Source connector that proxies another connector's request using the callback provided by user
 */
export declare class Proxy extends AbstractConnector {
    /**
     * @param [options]
     */
    constructor(options?: Proxy.Options);
    send(url: string, options: AbstractConnector.SendOptions | null, callback: (err: Error | null, data?: Record<string, any> | string) => void): void;
}
export declare namespace Proxy {
    type Options = HttpRequest.Options & {
        /**
         * connector to proxy
         */
        connector?: AbstractConnector;
        /**
         * callback to modify the data
         */
        callback?: Callback;
    };
    type Callback = (err: Error | null, data?: Record<string, any> | string) => Record<string, any> | string;
}
