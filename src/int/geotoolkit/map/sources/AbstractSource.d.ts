/**
 * @module geotoolkit/map/sources/AbstractSource
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Transformer } from '@int/geotoolkit/map/coordinatesystems/Transformer';
import { Events } from '@int/geotoolkit/scene/Node';
import type { AbstractLoader } from '@int/geotoolkit/map/sources/loaders/AbstractLoader';
import type { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
import type { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Abstract map source that loads server settings and then queries some sort of data from it
 */
export declare abstract class AbstractSource extends EventDispatcher {
    /**
     * Creates source
     * @param [options] options
     */
    protected constructor(options?: AbstractSource.Options);
    on<E extends keyof AbstractSource.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractSource.EventMap[E]) => void): this;
    off<E extends keyof AbstractSource.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractSource.EventMap[E]) => void): this;
    notify<E extends keyof AbstractSource.EventMap>(type: E, source: AbstractSource, args?: AbstractSource.EventMap[E]): this;
    /**
     * Sets the server url to use for requesting
     * @param url server url
     * @returns this
     */
    setServerURL(url: string | string[]): this;
    /**
     * Returns true if server data is already loaded (or no loader provided)
     */
    isDataLoaded(): boolean;
    /**
     * Gets the server url that is currently used for requests
     * @returns server url
     */
    getServerURL(): string | string[];
    /**
     * Returns promise that is loaded when server settings are ready to process
     */
    loadServerData(): Promise<this>;
    /**
     * Returns promise that is resolving when data are ready to process
     */
    loadSourceData(): Promise<this>;
    /**
     * Checks if source (current visible) data is loaded and ready to be rendered
     */
    isDataReady(): boolean;
    /**
     * Returns server data loaded from the server
     * Should be used asynchronically after loadServerData() method is called
     */
    getServerData(): Record<string, any>;
    /**
     * Sets source (current visible) data ready/not ready, changes the corresponding promise
     * @param isReady true if source data was loaded, false if it needs to be reset
     * @returns this
     */
    protected setDataReady(isReady: boolean): this;
    /**
     * Returns the current data model limits (presumably loaded from the server if it's settled)
     */
    getModelLimits(): Rect;
    /**
     * Sets map coordinate system.
     * @param system map coordinate system
     * @returns this
     */
    setMapCoordinateSystem(system: string | AbstractSystem): this;
    /**
     * Gets current map coordinate system.
     */
    getMapCoordinateSystem(): AbstractSystem;
    /**
     * Sets the data initial coordinate system.
     * @param system initial coordinate system
     * @returns this
     */
    setInitialCoordinateSystem(system: string | AbstractSystem): this;
    /**
     * Gets current data initial coordinate system.
     */
    getInitialCoordinateSystem(): AbstractSystem;
    /**
     * Gets transformer to transform data to map coordinate system
     */
    getTransformerToMap(): Transformer;
    /**
     * Gets transformer to transform data from map coordinate system
     */
    getTransformerFromMap(): Transformer;
    /**
     * Initializes the loader provided
     * @param [loader] loader to use
     * @returns this
     */
    protected initLoader(loader?: AbstractLoader): this;
    /**
     * Clears all the data.
     * @returns this
     */
    clear(): this;
    /**
     * Aborts all the sent requests, resends the last one
     * @returns this
     */
    update(): this;
    /**
     * Disposes this source, once disposed it should not be used anymore.<br>
     */
    dispose(): void;
    /**
     * Checks if some of the requests haven't been finished yet. Returns true if some data is loading, false otherwise.
     */
    isLoading(): boolean;
    /**
     * Returns copyright information.
     */
    getCopyright(): null | string;
    /**
     * Returns server data loader (if exists)
     */
    protected getDataLoader(): AbstractLoader;
    /**
     * Sets custom query parameter to add to the data requests
     * @param param parameter name or custom parameters object (in name -> value format)
     * @param [value] parameter value
     * @returns this
     */
    setQueryParameter(param: string | Record<string, string | number>, value?: string | number): this;
    /**
     * Resets saved last queried limits and layer
     * @returns this
     */
    protected resetLastQueryParams(): this;
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: AbstractSource.Options): this;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): AbstractSource.OptionsOut;
}
export declare namespace AbstractSource {
    /**
     * options
     */
    type Options = {
        /**
         * loader for loading server settings. If loader=null,
         */
        loader?: AbstractLoader;
        /**
         * after loader load data
         */
        ondataloaded?: () => void;
        /**
         * after loader failed to load data
         * there's not server settings request sending.
         */
        ondatafailed?: (err: Error) => void;
        /**
         * format for the server data requests formatting
         */
        format?: AbstractFormat;
        /**
         * initial data coordinate system
         */
        system?: string | AbstractSystem;
        /**
         * data server url
         */
        url?: string | string[];
    };
    /**
     * properties
     */
    type OptionsOut = {
        /**
         * data server url
         */
        url?: string | string[];
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.ModelLimitsChanged]: Rect | null;
    };
}
