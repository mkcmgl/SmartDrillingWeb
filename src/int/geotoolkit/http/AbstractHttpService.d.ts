import { Cancel } from '@int/geotoolkit/util/Cancel';
/**
 * Provide an abstract service for HTTP requests
 * @example
 * // Cancellation of request from external token
 * import {Cancel} from '@int/geotoolkit/util/Cancel';
 * ...
 * const token = new Cancel();
 * http.get('/cancel', {
 *    'cancel': token
 * }).then( (response) => { ... }, (error) => {
 *    // TODO: Cancel
 * }).catch((error) => { ... });
 * setTimeout(() => {
 *   token.cancel();
 * });
 */
export declare abstract class AbstractHttpService {
    protected constructor(options?: AbstractHttpService.Options);
    /**
     * Add request interceptor
     * @param onFulfilled on fulfilled function to be called in promise
     * @param [onRejected] on function to be called in promise if it is rejected
     * @returns id of the interceptor, which can be used to delete
     * @example
     * // Add request interceptor
     * import {deepMergeObject} from '@int/geotoolkit/base';
     * http.addRequestInterceptor((options) => {
     *   return new Promise((resolve, reject) => {
     *       const newOptions = deepMergeObject({'headers': {
     *           'Authorization': 'Bearer ' + token
     *       }}, options, true);
     *       resolve(newOptions);
     *   });
     *  }, (error) => Promise.reject(error)
     * );
     */
    addRequestInterceptor(onFulfilled: (options: any) => Promise<any>, onRejected?: (reason: Error) => Promise<any>): string;
    /**
     * Remove interceptor
     * @param id id of interceptor to remove
     * @returns true if interceptor is removed
     */
    removeRequestInterceptor(id: string): boolean;
    /**
     * Verify if request interceptor with specified id exists
     * @param id id of interceptor to verify
     */
    containsRequestInterceptor(id: string): boolean;
    /**
     * Add response interceptor
     * @param onFulfilled on fulfilled function to be called in promise
     * @param [onRejected] on function to be called in promise if it is rejected
     * @returns id of the interceptor, which can be used to delete
     * @example
     * // Add response interceptor
     * http.addResponseInterceptor(function (response) {
     *   return new Promise((resolve, reject) => {
     *       // TODO with response
     *       resolve(response);
     *   });
     * }, (error) => Promise.reject(error) );
     */
    addResponseInterceptor(onFulfilled: (options: any) => Promise<any>, onRejected?: (reason: Error) => Promise<any>): string;
    /**
     * Remove response interceptor
     * @param id id of interceptor to remove
     * @returns true if interceptor is removed
     */
    removeResponseInterceptor(id: string): boolean;
    /**
     * Verify if response interceptor with specified id exists
     * @param id id of interceptor to verify
     */
    containsResponseInterceptor(id: string): boolean;
    /**
     * Send request
     * It is necessary to specify baseUrl, url or both to make request. This method return promise to execute
     * query.
     * <p>Response object contains:</p>
     * <ul>
     * <li>data: response data</li>
     * <li>options: provided options </li>
     * <li>status: as a rule response status of response<li>
     * <li>statusText: status text<li>
     * <li>request: an instance of request</li>
     * </ul>
     * @param [options] options all options keys are case insensitive
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials|withCredentials}
     * @example
     * // make a simple GET request
     * http.request({ method: 'get', 'url': url ).then((response) => {
     *  // Process data
     * }, (error) => {
     *  // Error
     * });
     */
    request(options?: AbstractHttpService.RequestOptions): Promise<any>;
    /**
     * Dispatch request
     * @param [options] options
     * @see {@link https://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2}
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials|withCredentials}
     */
    protected abstract dispatch(options?: AbstractHttpService.RequestOptions): Promise<any>;
    /**
     * Create an instance of a new service with new default settings
     * @param [options] options
     */
    abstract clone(options?: AbstractHttpService.Options): AbstractHttpService;
    /**
     * Sets default options for the current instance of the service
     * @param [options] options all options keys are case insensitive
     */
    setOptions(options?: AbstractHttpService.Options): void;
    /**
     * Gets a default options
     * @returns options all options keys are case insensitive. It will be transformed to lowercase
     */
    getOptions(): AbstractHttpService.Options;
    /**
     * Send post request
     * @param url url
     * @param data data to be sent as the request message data.
     * @param [options] options
     * @example
     * // make a simple POST request
     * http.post(url, data).then((response) => {
     *  // Process data
     * }, (error) => {
     *  // Error
     * });
     */
    post(url: string, data: any, options?: AbstractHttpService.RequestOptions): Promise<any>;
    /**
     * Send get request
     * @param url url
     * @param [options] options
     * @example
     * // make a simple GET request
     * http.get(url).then((response) => {
     *  // Process data
     * }, (error) => {
     *  // Error
     * });
     * @example
     * // make GET request and transform output
     * http.get(url, {
     *   'responsetype': 'json',
     *   'transformresponse': (response) => {
     *       if (response['data']['version'] != null) {
     *           return Promise.resolve(response['data']);
     *       }
     *       return Promise.reject('Server error');
     *   }
     * }).then((data) => {
     *  // Process data
     * }, (error) => {
     *  // Error
     * });
     */
    get(url: string, options?: AbstractHttpService.RequestOptions): Promise<any>;
    /**
     * Send put request
     * @param url url
     * @param data data to be sent as the request message data.
     * @param [options] options
     */
    put(url: string, data: any, options?: AbstractHttpService.RequestOptions): Promise<any>;
    /**
     * Send delete request
     * @param url url
     * @param [options] options
     */
    delete(url: string, options?: AbstractHttpService.RequestOptions): Promise<any>;
    /**
     * Send patch request
     * @param url url
     * @param data data to be sent as the request message data.
     * @param [options] options
     */
    patch(url: string, data: any, options?: AbstractHttpService.RequestOptions): Promise<any>;
    /**
     * Send head request
     * @param url url
     * @param [options] options
     */
    head(url: string, options?: AbstractHttpService.RequestOptions): Promise<any>;
    protected getRequestInterceptors(): any[];
    protected getResponseInterceptors(): any[];
    /**
     * @param options options to merge
     * @returns merged options
     */
    protected mergeOptions<T extends Record<string, any> = Record<string, any>>(options: T): T;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractHttpService {
    /**
     * default options
     */
    type Options = {
        /**
         * A timeout in milliseconds to abort a request. If set to 0 (default) a timeout is not created.
         */
        timeout?: number;
        /**
         * a function executed before requests
         */
        transformrequest?: (request: RequestOptions) => void;
        /**
         * a function executed after response
         */
        transformresponse?: (response: any) => any;
        /**
         * Cancellation token.
         * Type of function to receive cancel token is deprecated since 4.0
         */
        cancel?: Cancel | DeprecatedCancelCallback;
        /**
         * a function to be executed to handle progress
         */
        onprogress?: (progressObject: {
            loaded: number;
            total: number;
        }) => void;
        /**
         * credential options
         */
        withcredentials?: boolean;
        /**
         * custom headers to be sent
         */
        headers?: Record<string, string>;
    };
    /**
     * options all options keys are case insensitive
     */
    type RequestOptions = Options & {
        /**
         * method
         */
        method?: RequestMethods | Lowercase<RequestMethods>;
        /**
         * url to combine with baseURL
         */
        url?: string;
        /**
         * a base URL will be prepended to url unless url is absolute.
         */
        baseurl?: string;
        /**
         * an object, which contains parameters: key, value
         */
        params?: Record<string, any>;
        /**
         * Data to be sent as the request message data.
         */
        data?: any;
        /**
         * Define response type
         */
        responsetype?: RequestResponse;
    };
    type RequestMethods = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
    /**
     * Define request response type
     */
    type RequestResponse = '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
}
/**
 * @deprecated since 4.0
 */
declare type DeprecatedCancelCallback = (token: Cancel) => void;
export {};
