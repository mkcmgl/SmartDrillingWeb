import { GeodeticSystem } from '@int/geotoolkit/map/GeodeticSystem';
import { Rect } from '@int/geotoolkit/util/Rect';
import { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import { Events, Node } from '@int/geotoolkit/scene/Node';
import type { AbstractSource } from '@int/geotoolkit/map/sources/AbstractSource';
import type { IFilter } from '@int/geotoolkit/renderer/IFilter';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Cache } from '@int/geotoolkit/scene/Cache';
import type { Point } from '@int/geotoolkit/util/Point';
import type { IFormatter } from '@int/geotoolkit/map/features/formatters/IFormatter';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { Events as MapSourceEvents } from '@int/geotoolkit/map/sources/Events';
/**
 * Defines a Map Layer, an Abstract class that will be used by the Map.
 * Map layer represents the geographic layer which can be a tile layer, map layer or any custom layer. <br>
 * addLayer(), insertLayer() and removeLayer() is used to add and remove layers.
 */
export declare abstract class AbstractLayer extends Node {
    /**
     * Creates layer
     * @param [options] options
     */
    protected constructor(options?: AbstractLayer.Options);
    on<E extends keyof AbstractLayer.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractLayer.EventMap[E]) => void): this;
    off<E extends keyof AbstractLayer.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractLayer.EventMap[E]) => void): this;
    notify<E extends keyof AbstractLayer.EventMap>(type: E, source: AbstractLayer, args?: AbstractLayer.EventMap[E]): this;
    /**
     * Return visible model limits
     * @param [ignoreModelLimits] flag defines whether to ignore ModelLimits or not
     */
    getVisibleModelLimits(ignoreModelLimits?: boolean): Rect;
    /**
     * Gets user defined model limits if set; calculated model limits otherwise
     * @returns limits user defined or calculated model limits
     */
    getModelLimits(): Rect;
    /**
     * Sets model limits
     * @param limits new model limits
     * @returns this
     */
    setModelLimits(limits: Rect | null): this;
    /**
     * Gets calculated model limits
     *
     * @returns limits calculated model limits
     */
    getDefaultModelLimits(): Rect;
    /**
     * Returns default model limits (based on the map coordinate system)
     * @param data feature data changed (for feature layers), nothing otherwise
     */
    protected calculateDefaultModelLimits(data?: AbstractFeature[] | Iterator<AbstractFeature>): Rect;
    /**
     * Return a the alpha of the layer
     * between 0.0 (fully transparent) and 1.0 (fully opaque). The default value is 1.0.
     * @returns alpha alpha
     */
    getLayerAlpha(): number;
    /**
     * Set the alpha of the layer
     * @param alpha between 0.0 (fully transparent) and 1.0 (fully opaque). The default value is 1.0.
     * @returns this
     */
    setLayerAlpha(alpha: number): this;
    /**
     * Gets options
     * @returns options options
     */
    getOptions(): AbstractLayer.Options;
    /**
     * Sets options (default options listed are for construction time only)
     *
     * @param [options] options
     */
    setOptions(options: AbstractLayer.OptionsBase): this;
    /**
     * Return coordinate system for this layer
     */
    getCoordinateSystem(): AbstractSystem;
    render(context: RenderingContext): void;
    /**
     * Renders layer content
     * @param context rendering context
     */
    abstract renderContent(context: RenderingContext): void;
    /**
     * Renders async layer content
     * @param context the Rendering Context
     * @param callback callback to be called after rendering of layer content
     */
    renderContentAsync(context: RenderingContext, callback: () => void): void;
    /**
     * Returns promise that is resolved when all layer data is loaded and ready to be rendered
     */
    load(): Promise<this>;
    /**
     * Checks if layer data is still loading and not ready
     */
    isLoading(): boolean;
    /**
     * Sets cache to be used to cache
     *
     * @param cache cache to be used
     * @returns this
     */
    setCache(cache: Cache): this;
    /**
     * Invalidate layer
     * @param [bounds] bounds of the invalid rectangle in the inner node coordinates
     * @param [force] true if parent should be invalidated immediately
     * if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     * @returns this
     */
    invalidate(bounds?: Rect, force?: boolean): this;
    /**
     * Return cache strategy to be used to cache children nodes
     *
     * @returns cache cache strategy
     */
    getCache(): Cache;
    /**
     * Clear cache
     * @returns this
     */
    clearCache(): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns options
     */
    getProperties(): AbstractLayer.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] options
     * @returns this
     */
    setProperties(properties: AbstractLayer.Options): this;
    /**
     * Return a map coordinate system
     */
    getMapCoordinateSystem(): AbstractSystem;
    /**
     * Sets a map coordinate system
     * @param [system] new map coordinate system
     */
    setMapCoordinateSystem(system: AbstractSystem | GeodeticSystem | number): this;
    /**
     * Transform point
     * @param point point to transform
     * @param from system converting from
     * @param to system converting to
     * @param [dst] optional destination point
     */
    transformPoint(point: Point, from: GeodeticSystem | AbstractSystem, to: GeodeticSystem | AbstractSystem, dst?: Point): Point;
    /**
     * Transform a point from layer coordinate system to map coordinate system
     * @param point point to transform
     * @param [dst] optional destination point
     */
    transformToMap(point: Point, dst?: Point): Point;
    /**
     * Transform a point from map coordinate system to layer coordinate system
     * @param point point to transform
     * @param [dst] optional destination point
     */
    transformFromMap(point: Point, dst?: Point): Point;
    /**
     * Sets the url to the layer source
     * @param url server url
     */
    setServerURL(url: string | string[]): this;
    /**
     * Gets the server url from the layer source
     */
    getServerURL(): string | string[];
    /**
     * Disposes this layer, once disposed it should not be used anymore.<br>
     */
    dispose(): void;
    /**
     * Returns current data source
     * @returns source
     */
    getDataSource(): AbstractSource;
    /**
     * Performs selection of the data with its device coordinates. Returns null, if no data available but will be loaded
     * asynchronously later (fires {@link @int/geotoolkit/map/sources/Events~Events.InfoUpdated}).
     *
     * @param pt is the device coordinates to select
     * @param [radius] the radius of selection (in px)
     * @returns data data selected
     */
    hitTest(pt: Point, radius?: number): (AbstractNode | AbstractFeature)[];
    /**
     * Returns the format function to use for the tooltip info (null if tooltips are not visible)
     */
    getTooltipFormatter(): AbstractLayer.Formatter | null;
    protected copyConstructor(src: AbstractLayer, deepCopy?: boolean): this;
}
export declare namespace AbstractLayer {
    /**
     * options
     */
    export type Options = Node.Options & OptionsBase & {
        /**
         * the layer data source
         */
        source?: AbstractSource;
        /**
         * coordinate system this layer's data is in
         */
        system?: GeodeticSystem | AbstractSystem;
        /**
         * server url
         */
        url?: string | string[];
        /**
         * tooltip options
         */
        tooltip?: {
            /**
             * tooltip visibility flag
             */
            visible?: boolean;
            /**
             * tooltip data formatter
             */
            formatter?: Formatter;
        };
    };
    export type Formatter = IFormatter | TooltipFormatterCallback;
    /**
     * options
     */
    export type OptionsBase = {
        /**
         * limits of this layer
         */
        limits?: Rect;
        /**
         * layer drawing filter (default "layerfilter=null" means layer _is_ drawn)
         */
        layerfilter?: IFilter;
        /**
         * the alpha of the layer
         */
        alpha?: number;
    };
    /**
     * options
     */
    export type OptionsOut = Node.OptionsOut & OptionsBase & {
        /**
         * the layer data source
         */
        source?: AbstractSource;
        /**
         * coordinate system this layer's data is in
         */
        system?: GeodeticSystem | AbstractSystem;
        /**
         * server url
         */
        url?: string | string[];
    };
    type TooltipFormatterCallback = (data: (AbstractFeature | Node)[], tooltip?: string, pt?: Point) => string;
    export type EventMap = Node.EventMap & {
        [Events.ModelLimitsChanged]: Rect;
        [MapSourceEvents.InfoUpdated]: any;
    };
    export {};
}
