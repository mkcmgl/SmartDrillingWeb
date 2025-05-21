import type { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
/**
 * Abstract source loader that loads server settings by sending appropriate query and parsing its response
 * The settings request could be flexibly adjusted the by additional parameters specified in 'options'. All of them
 * will be added as a query parameter.
 *
 * @example
 * import {ArcGISFeature} from '@int/geotoolkit/map/sources/loaders/ArcGISFeature';
 * const loader = new ArcGISFeature({
 *      // all undocumented parameters would be directly added to the request:
 *      'token': 'TikYtCP33k_Ql2mt_233AJZm3iHkFbowqWSUe9ZmkRp15PBbZLgYTEUP0sc46Nxjt5DPWBfSZst5b9ykD7x9mQ..'
 * });
 */
export declare abstract class AbstractLoader {
    /**
     * Creates loader
     * @param [options] options
     */
    protected constructor(options?: AbstractLoader.Options);
    /**
     * Resolves loading promise asynchronically
     * @param callback resolving callback
     */
    protected loaded(callback: (loader: AbstractLoader) => void): void;
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     */
    abstract parse(data: Record<string, any> | string, onload: (loader: AbstractLoader) => void): void;
    /**
     * Returns server settings request url
     * @returns request server data request
     */
    abstract getSettingsUrl(): string;
    /**
     * Returns server settings request options
     */
    protected getRequestOptions(): AbstractConnector.SendOptions;
    /**
     * Returns connector
     */
    getConnector(): AbstractConnector;
    /**
     * Sets the query parameter to add to the server settings request
     * @param param parameter name
     * @param value parameter value
     * @returns this
     */
    setQueryParameter(param: string, value: any): this;
    /**
     * Copies query parameters from another loader
     * @param loader loader to clone parameters
     * @returns this
     */
    cloneQueryParameters(loader: AbstractLoader): this;
    /**
     * Returns copyright information.
     */
    getCopyright(): null | string;
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     * @returns clone
     */
    clone(): AbstractLoader;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     * @param [deepCopy] deep copy
     * @returns this
     */
    protected copyConstructor(src: AbstractLoader, deepCopy?: boolean): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractLoader {
    /**
     * options
     */
    type Options = {
        [key: string]: any;
        /**
         * connector to use
         */
        connector?: AbstractConnector;
    };
}
