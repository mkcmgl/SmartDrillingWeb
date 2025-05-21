import { Rect } from '@int/geotoolkit/util/Rect';
import { GeodeticSystem } from '@int/geotoolkit/map/GeodeticSystem';
import { Functions } from '@int/geotoolkit/animation/Easing';
import { CacheMode } from '@int/geotoolkit/scene/Cache';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { PointerMode } from '@int/geotoolkit/controls/tools/PointerMode';
import { Group } from '@int/geotoolkit/scene/Group';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import { Image } from '@int/geotoolkit/scene/shapes/Image';
import { PolygonSelection } from '@int/geotoolkit/controls/tools/PolygonSelection';
import { ToolTipTool } from '@int/geotoolkit/controls/tools/ToolTipTool';
import { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import { Measure } from '@int/geotoolkit/map/tools/Measure';
import { Point } from '@int/geotoolkit/util/Point';
import { AnimationStyle } from '@int/geotoolkit/attributes/AnimationStyle';
import type { MapScale } from '@int/geotoolkit/map/util/MapScale';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { ZoomEventArgs } from '@int/geotoolkit/controls/tools/ZoomEventArgs';
import type { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
/**
 * Map Events
 * @enum
 * @readonly
 * @events
 */
export declare enum Events {
    /**
     * Map layer added
     * @event module:geotoolkit/map/Map~Events~onLayerAdded
     * @param {import("geotoolkit/map/layers/AbstractLayer").AbstractLayer[]} layers
     */
    onLayerAdded = "LayerAdded",
    /**
     * Map layer removed
     * @event module:geotoolkit/map/Map~Events~onLayerRemoved
     * @param {import("geotoolkit/map/layers/AbstractLayer").AbstractLayer[]} layers
     */
    onLayerRemoved = "LayerRemoved",
    /**
     * Map layers list order changed
     * @event module:geotoolkit/map/Map~Events~onLayersModified
     * @param {import("geotoolkit/map/layers/AbstractLayer").AbstractLayer[]} layers
     */
    onLayersModified = "LayersModified",
    /**
     * Map zoom started
     * @event module:geotoolkit/map/Map~Events~onZoomStart
     * @param {import("geotoolkit/controls/tools/ZoomEventArgs").ZoomEventArgs} eventArgs
     */
    onZoomStart = "onZoomStart",
    /**
     * Map zoom ended
     * @event module:geotoolkit/map/Map~Events~onZoomEnd
     */
    onZoomEnd = "onZoomEnd",
    /**
     * Map zoom triggered by double click
     * @event module:geotoolkit/map/Map~Events~onDoubleClick
     * @param {import("geotoolkit/controls/tools/ZoomEventArgs").ZoomEventArgs} eventArgs
     */
    onDoubleClick = "onDoubleClick",
    /**
     * Map resized
     * @event module:geotoolkit/map/Map~Events~onResize
     * @param {import("geotoolkit/util/Rect").Rect} rect
     */
    onResize = "onResize"
}
/**
 * Map fly status for {@link @int/geotoolkit/map/Map~Map#flyTo} callback
 * @enum
 * @readonly
 */
export declare enum FlyStatus {
    /**
     * Fly has been successfully done
     */
    Done = "Done",
    /**
     * Fly has been interrupted and not finished
     */
    Interrupted = "Interrupted"
}
/**
 * Map Widget defines a single map which is a collection of the different map layers ( WFS, WMTS, Shape, GeoJson layer..) Its supports different map providers that are tile and feature based.<br>
 * addLayer(), insertLayer() and removeLayer() functions are used to add or remove MapJS layers ( {@link import("geotoolkit/map/layers/AbstractLayer").AbstractLayer } ).<br>
 * Widget supports changing the Z-order of layers as shown in Advanced Map Tutorial. <br>
 * getModelLimits/setModelLimits handle the bounds for the layer and other properties can be set using setOptions().<br>
 * Some navigation/utility functions like PanTo allows moving view position of the map to the specified map coordinate or focuses the map on a point.<br>
 * In version 2.6 map has no API for dynamic rotation.
 * <br>
 * Widget includes some default tools like:
 * <ul>
 *     <li> Pan Tool </li>
 *     <li> Zoom </li>
 *     <li> RubberBand Tool </li>
 *     <li> Selection </li>
 *     <li> Pinch Zoom </li>
 *     <li> Zoom with Scroll Wheel</li>
 * </ul>
 *
 * @example
 * // 1). Initialize Maps. As with other widgets, you need to add map to a canvas and attach the tools.
 * import {Map} from '@int/geotoolkit/map/Map';
 * import {Tile} from '@int/geotoolkit/map/layers/Tile';
 * const map = new Map();
 * const wmts = new Tile({..});
 * map.addLayer(wmts);
 * @example
 * // 2). This example shows how to change the Spatial Reference for the map while using the @int/geotoolkit/map/Map with @int/geotoolkit/map/layers/Tile.
 * // Only lat/lon, wgs84 and UTM coordinate systems are available, so map data must be transformed to one of them.
 * import {LatLon} from '@int/geotoolkit/map/coordinatesystems/LatLon';
 * const map = new Map({
 *  ...
 *  'system': new LatLon() // lat/long coordinate system
 * });
 */
export declare class Map extends AnnotatedWidget {
    getToolByName<T extends keyof Map.Tools>(toolName: T): Map.Tools[T];
    /**
     * Creates map widget
     * @param [options] Data passed in
     */
    constructor(options?: Map.Options);
    on<E extends keyof Map.EventMap>(type: E, callback: (eventType: E, sender: this, args: Map.EventMap[E]) => void): this;
    off<E extends keyof Map.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Map.EventMap[E]) => void): this;
    notify<E extends keyof Map.EventMap>(type: E, source: Map, args?: Map.EventMap[E]): this;
    /**
     * Transform a point from coordinate system to map coordinate system
     * @param point point to transform
     * @param from system converting from
     */
    transformToMap(point: Point, from: GeodeticSystem | AbstractSystem): Point;
    /**
     * Transform a point from map coordinate system to specified coordinate system
     * @param point point to transform
     * @param to system converting from
     */
    transformFromMap(point: Point, to: GeodeticSystem | AbstractSystem): Point;
    /**
     * Transform point
     * @param point point to transform
     * @param from system converting from
     * @param to system converting to
     */
    transformPoint(point: Point, from: GeodeticSystem | AbstractSystem, to: GeodeticSystem | AbstractSystem): Point;
    /**
     * Returns the map logo (if exists)
     */
    getMapImage(): Image;
    /**
     * Scale node's contents.
     *
     * @param amount zoom factor (> 1 for in, \< 1 for out)
     * @param [posX] x position to scale from (in pxl)
     * @param [posY] y position to scale from (in pxl)
     * @returns this
     */
    zoom(amount: number, posX?: number, posY?: number): this;
    /**
     * Sets the current map scale
     * @param scale map scale
     * @param [onCurrentParallel] true, if you need to use factor, else false
     * @returns this
     */
    setMapScale(scale: number, onCurrentParallel?: boolean): this;
    /**
     * gets the current map scale
     * @param [onCurrentParallel] true, if you need to use factor, else false
     * @returns current map scale
     */
    getMapScale(onCurrentParallel?: boolean): number;
    /**
     * Changes current map scale so it fits provided zoom level
     * @param level desired zoom level
     * @returns this
     */
    setZoomLevel(level: number): this;
    /**
     * Returns current zoom level (based on current scale). May be a fractional number
     */
    getZoomLevel(): number;
    /**
     * Returns map options
     */
    getOptions(): {
        maplimits: Rect;
        mapimage: Image;
        system: AbstractSystem;
        mapscale: number;
        mapscaleobject: MapScale;
        scaleunit: AbstractUnit;
        webmap: string | Record<string, any>;
    };
    /**
     * Sets options
     * @param [options] options
     */
    setOptions(options?: Map.OptionsBase): this;
    /**
     * Gets the working system of the map
     */
    getCoordinateSystem(): AbstractSystem;
    initializeLayout(settings: Map.Options): Group;
    /**
     * Method to add a map layer. Layers can be added on top of existing layers.
     * @param layer layer to add
     * @returns this
     * @fires @int/geotoolkit/map/Map~Events.onLayerAdded
     */
    addLayer(layer: AbstractLayer): this;
    /**
     * Sets inner model limits
     *
     * @param limits inner limits
     * @returns this
     */
    setCenterModelLimits(limits: Rect): this;
    /**
     * Gets model limits, the limits of this groups inside space
     *
     * @returns the current model limits
     */
    getCenterModelLimits(): Rect;
    /**
     * Sets the Map scale object that is anchored in the one position of the map
     *
     * @param mapscale map scale
     * @returns this
     */
    setMapScaleObject(mapscale: MapScale): this;
    /**
     * Returns current map scale object (if exists)
     */
    getMapScaleObject(): MapScale;
    /**
     * gets the center point on the map.
     */
    getMapCenter(): Point;
    /**
     * Pans the map to the point.
     * @param center point where to pan
     * @param [coordSystem] if null assumes map system
     */
    panTo(center: Point, coordSystem?: GeodeticSystem | AbstractSystem): this;
    /**
     * Return layer count
     */
    getLayerCount(): number;
    /**
     * Return layer by index
     *
     * @param i index of the node
     */
    getLayer(i: number): AbstractLayer;
    /**
     * Removes a Layer
     * @param layer Layer to remove
     * @fires @int/geotoolkit/map/Map~Events.onLayerRemoved
     */
    removeLayer(layer: AbstractLayer): this;
    /**
     * Inserts a Layer, if the layer is already a child, this moves it.  Layer can be inserted at a z depth or index as required.<br>
     * For Example <code> map.insertLayer(layer, index); </code>
     * @param layer Layer to insert
     * @param index where to insert layer
     * @fires @int/geotoolkit/map/Map~Events.onLayersModified
     * @fires @int/geotoolkit/map/Map~Events.onLayerAdded
     */
    insertLayer(layer: AbstractLayer, index: number): this;
    /**
     * Animates map viewport to a given point on the map, simulating the effect of flight. For this, animation effects with
     * attributeName(s) 'scale' and 'location' are used. Set your own effects to customize the animation.
     * @param options animation fly options
     * @returns this
     */
    flyTo(options: Map.FlyToOptions): this;
    /**
     * Gets scale unit
     * @returns unit of this map
     */
    getScaleUnit(): AbstractUnit;
    /**
     * Sets scale unit
     * @param unit new unit of this map
     * @returns this
     */
    setScaleUnit(unit: AbstractUnit | string): this;
    /**
     * Sets visible model limits, keeping the full limits resolution
     * @param [limits] the visible model limits
     */
    zoomToRect(limits?: Rect): void;
    /**
     * Sets bounds of the map
     * @param bounds bound of the map
     * @returns this
     */
    setBounds(bounds: Rect | Rect.Options): this;
    /**
     * Returns promise that is resolved when all current map layers are loaded and map is ready to be rendered
     */
    load(): Promise<this>;
    setAnimationStyle(style: AnimationStyle | null): this;
}
export declare namespace Map {
    /**
     * Data passed in
     */
    type Options = AnnotatedWidget.Options & OptionsBase & {
        /**
         * bounds where to place the widget
         */
        bounds?: Rect;
        /**
         * geodetic system we want the map to use
         */
        system?: GeodeticSystem | AbstractSystem;
        /**
         * optional model of the center
         */
        model?: Group;
        /**
         * defined a container of map layers.
         * If it is not specified than the default container is used. If a container specified than it must be inserted the model.
         */
        layerscontainer?: Group<AbstractLayer>;
        /**
         * is map model limits wrapped in infinite loop
         */
        wrapped?: boolean;
        /**
         * enable tiled cache for all map layers. It increases rendering performance for historical data
         */
        viewcache?: boolean;
        /**
         * viewcachesize options to set
         */
        viewcachesize?: {
            /**
             * set tiled cache size.
             */
            width?: number;
            /**
             * set tiled cache size.
             */
            height?: number;
        };
        /**
         * set tiled cache mode
         */
        viewcachemode?: CacheMode;
        /**
         * set tiled cache memory limit
         */
        viewcachememorylimit?: number;
        /**
         * set tiled cache asynchrony
         */
        viewcacheasync?: boolean;
        /**
         * tooltip options
         */
        tooltip?: {
            /**
             * HTML div tooltip element or it will be created with className cg-tooltip-container
             */
            divelement?: HTMLElement;
            /**
             * offset of tooltip from current position by x in pixels
             */
            offsetx?: number;
            /**
             * offset of tooltip from current position by y in pixels
             */
            offsety?: number;
            /**
             * tooltip alignment according to the point set by offsets
             */
            alignment?: AnchorType;
            /**
             * tooltip appearance mode
             */
            mode?: PointerMode | string;
            /**
             * delay in ms between mouse event and tooltip appearing (async for delay > 0)
             */
            delay?: number;
            /**
             * max number of the features info showing (set to Infinity for unlimited selection)
             */
            max?: number;
            /**
             * true if tooltip info should be auto updated after map.invalidate() was called
             */
            autoupdate?: boolean;
        };
    };
    /**
     * options
     */
    type OptionsBase = {
        /**
         * the ArcGIS WebMap server url or WebMap JSON settings object. The old webmap layers will
         * be removed. if the url equals to loaded webmap url then nothing happens.
         */
        webmap?: string | Record<string, any>;
        /**
         * Http service to be used for the WebMap server
         */
        webmapservice?: AbstractHttpService;
        /**
         * image to be displayed locked at the bottom right of the map
         */
        mapimage?: Image;
        /**
         * limits of the map
         */
        maplimits?: Rect;
        /**
         * scale unit
         */
        scaleunit?: AbstractUnit | string;
        /**
         * sets the initial map scale
         */
        mapscale?: number;
        /**
         * MapScale information to be locked at the bottom left of the map
         */
        mapscaleobject?: MapScale;
        /**
         * map zoom options
         */
        zoom?: {
            /**
             * maximum zoom limit (i.e. '500' value means user cannot zoom-out after 1:500 scale - 500 meters in 1 pixel). Scale is counted on the equator (by .getMapScale() method), so it can be different with the actual scale on current parallel
             */
            max?: number;
            /**
             * minimum zoom limit (i.e. '100' value means user cannot zoom-in after 1:100 scale - 100 meters in 1 pixel). Scale is counted on the equator (by .getMapScale() method), so it can be different with the actual scale on current parallel
             */
            min?: number;
            /**
             * zoom speed (e.g. 2 means that zoom-in brings the map x2 times closer)
             */
            speed?: number;
            /**
             * zoom time in milliseconds (set to 0 for instant zoom)
             */
            time?: number;
            /**
             * easing animation function for elastic zooming
             */
            easing?: Functions;
        };
    };
    /**
     * animation fly options
     */
    type FlyToOptions = {
        /**
         * final point scale (see .setMapScale for more info)
         */
        scale?: number;
        /**
         * final point zoom level (see .setZoomLevel for more info). Has less priority than 'scale', if both provided.
         */
        level?: number;
        /**
         * final point location. May be a point,
         * an array ([x, y]), coordinates object of the form `{x: x, y: y}`, or array of such locations to move along the corresponding trajectory
         */
        location?: Point | Point.Options | [
            number,
            number
        ] | Point[] | Point.Options[];
        /**
         * coordinate system for the location
         * coordinates. Latitude/longitude is used by default.
         */
        system?: GeodeticSystem | AbstractSystem;
        /**
         * positive fly duration (in ms)
         */
        duration?: number;
        /**
         * easing function for viewport change
         */
        easing?: Functions;
        /**
         * callback to be called when fly is over. Receives {@link @int/geotoolkit/map/Map~FlyStatus} enum
         * to check if animation was finished or interrupted by user actions.
         */
        callback?: (status: FlyStatus) => void;
    };
    type Tools = {
        'polygon-selection': PolygonSelection;
        'tooltip': ToolTipTool;
        'measure': Measure;
    } & AnnotatedWidget.Tools;
    type EventMap = AnnotatedWidget.EventMap & {
        [Events.onLayerAdded]: AbstractLayer[];
        [Events.onLayerRemoved]: AbstractLayer[];
        [Events.onLayersModified]: AbstractLayer[];
        [Events.onZoomStart]: ZoomEventArgs;
        [Events.onZoomEnd]: ZoomEventArgs;
        [Events.onDoubleClick]: ZoomEventArgs;
        [Events.onResize]: Rect;
    };
}
