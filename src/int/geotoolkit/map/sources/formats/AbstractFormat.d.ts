/**
 * @module geotoolkit/map/sources/formats/AbstractFormat
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { Events } from '@int/geotoolkit/map/sources/Events';
import type { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Abstract source format that formats data queries and sends it using the connector provided
 * The data requests could be flexibly adjusted the by additional parameters specified in 'options'. All of them
 * will be added as a query parameter.
 * @example
 * import {ArcGISFeature as ArcGISFeatureFormat} from '@int/geotoolkit/map/sources/formats/ArcGISFeature';
 * const format = new ArcGISFeatureFormat({
 *      // all undocumented parameters would be directly added to the send requests:
 *      'token': 'TikYtCP33k_Ql2mt_233AJZm3iHkFbowqWSUe9ZmkRp15PBbZLgYTEUP0sc46Nxjt5DPWBfSZst5b9ykD7x9mQ..'
 * });
 */
export declare class AbstractFormat extends EventDispatcher {
    /**
     * @param [options] options
     */
    constructor(options?: AbstractFormat.Options);
    on<E extends keyof AbstractFormat.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractFormat.EventMap[E]) => void): this;
    off<E extends keyof AbstractFormat.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractFormat.EventMap[E]) => void): this;
    notify<E extends keyof AbstractFormat.EventMap>(type: E, source: AbstractFormat, args?: AbstractFormat.EventMap[E]): this;
    /**
     * Sends a request based on a settings provided
     * That's a basic implementation for the file requests. Implement parse method to use it or override this method directly.
     * @param [query] query params
     * @returns this
     */
    query(query?: AbstractConnector.SendOptions): this;
    /**
     * Parses the data provided and notifies about the result.
     * Is used in the default query implementation.
     * @param data data object or its string representation
     * @returns this
     */
    parse(data: string | Record<string, any>): this;
    /**
     * Aborts all previous requests
     * @param [key] key of the connections to abort (all connections aborted if nothing provided)
     * @returns this
     */
    abort(key?: string): this;
    /**
     * Checks if some of the requests haven't been finished yet. Returns true if some data is loading, false otherwise.
     */
    isLoading(): boolean;
    /**
     * Sets the query parameter to add to the data requests
     * @param param parameter name
     * @param value parameter value
     * @returns this
     */
    setQueryParameter(param: string, value: any): this;
    /**
     * Copies query parameters from another format
     * @param format format to clone parameters
     * @returns this
     */
    cloneQueryParameters(format: AbstractFormat): this;
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     * @returns clone
     */
    clone(): AbstractFormat;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     * @param [deepCopy] deep copy
     * @returns this
     */
    protected copyConstructor(src: AbstractFormat, deepCopy?: boolean): this;
    /**
     * Gets connector
     * @returns connector
     */
    getConnector(): AbstractConnector;
}
export declare namespace AbstractFormat {
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
    type RectQuery = AbstractConnector.SendOptions & {
        /**
         * requesting left limit in model coordinates
         */
        left: number;
        /**
         * requesting right limit in model coordinates
         */
        right: number;
        /**
         * requesting top limit in model coordinates
         */
        top: number;
        /**
         * requesting bottom limit in model coordinates
         */
        bottom: number;
        /**
         * requesting image width in device coordinates
         */
        width?: number;
        /**
         * requesting image height in device coordinates
         */
        height?: number;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.FeatureAdded]: AbstractFeature[] | {
            tile?: Record<string, AbstractFeature[]>;
        };
        [Events.FeatureRemoved]: AbstractFeature;
        [Events.FeaturesCleared]: Iterator<AbstractFeature>;
    };
}
