/**
 * @module geotoolkit/map/sources/connectors/HttpRequest
 */
import { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
import { Cancel } from '@int/geotoolkit/util/Cancel';
import type { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
/**
 * Source connector that sends requests by creating XMLHttpRequest with appropriate GET request
 */
export declare class HttpRequest extends AbstractConnector<Cancel> {
    /**
     * @param [options] options
     */
    constructor(options?: HttpRequest.Options);
    send(url: string, options: HttpRequest.SendOptions | null, callback: (err: Error | null, data?: Record<string, any> | string) => void): void;
    protected abortConnection(request: Cancel): this;
}
export declare namespace HttpRequest {
    /**
     * options
     */
    type Options = {
        /**
         * http service to make any HTTP request
         */
        httpservice?: AbstractHttpService;
    };
    /**
     * extra options for the request (null if no needed)
     */
    type SendOptions = AbstractConnector.SendOptions & {
        /**
         * request response type if necessary
         */
        responsetype?: AbstractHttpService.RequestResponse;
        /**
         * request priority (more priority requests are sending earlier)
         */
        priority?: number;
        /**
         * request http method ('get'/'post')
         */
        method?: AbstractHttpService.RequestMethods | Lowercase<AbstractHttpService.RequestMethods>;
        /**
         * request headers
         */
        headers?: Record<string, string>;
        /**
         * cancel
         */
        cancel?: Cancel;
    };
}
