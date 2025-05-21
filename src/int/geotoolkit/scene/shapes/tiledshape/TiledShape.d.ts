/**
 * @module geotoolkit/scene/shapes/tiledshape/TiledShape
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { RectangularShape } from '@int/geotoolkit/scene/shapes/RectangularShape';
import { Events } from '@int/geotoolkit/scene/shapes/tiledshape/Events';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LoaderType } from '@int/geotoolkit/scene/shapes/tiledshape/LoaderType';
import type { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
import type { AbstractCancellationStrategy } from '@int/geotoolkit/scene/shapes/tiledshape/AbstractCancellationStrategy';
import type { Cancel } from '@int/geotoolkit/util/Cancel';
import type { ErrorCodes } from '@int/geotoolkit/http/ErrorCodes';
import type { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
/**
 * Defines a shape which displays tiled images
 */
export declare class TiledShape<TFormatResult extends object = TiledShape.ImageData> extends RectangularShape {
    constructor(options?: TiledShape.Options<TFormatResult>);
    on<E extends keyof TiledShape.EventMap>(type: E, callback: (eventType: E, sender: this, args: TiledShape.EventMap[E]) => void): this;
    off<E extends keyof TiledShape.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: TiledShape.EventMap[E]) => void): this;
    notify<E extends keyof TiledShape.EventMap>(type: E, source: TiledShape<TFormatResult>, args?: TiledShape.EventMap[E]): this;
    /**
     * The first tile is started loading
     */
    protected onStartTilesLoading(): void;
    /**
     * All requested tiles are rendered
     */
    protected onAllTilesRendered(): void;
    /**
     * Sets options
     * @param options object with parameters
     * @returns this
     */
    setOptions(options: TiledShape.Options<TFormatResult>): this;
    /**
     * Gets options
     * @returns object with parameters
     */
    getOptions(): TiledShape.Options<TFormatResult>;
    /**
     * Render method, overrides render method of the parent. Calculates tiles required
     * for the invalidated area (all the calculations are made in device coordinates),
     * renders existing ones, or requests non existing ones
     *
     * @param context a rendering context
     */
    render(context: RenderingContext): void;
    /**
     * Gets image size of the tiled shape
     */
    getModelArea(): Rect;
    /**
     * Returns model visible limits
     */
    getVisibleModelLimits(): Rect | null;
    /**
     * Returns transformation
     */
    getContentsTransform(): Transformation | null;
    /**
     * Sets collect performance information mode enabled
     * @param collectPerformanceInfoEnabled true for collection performance information mode enabled
     * @returns this
     */
    setCollectPerformanceInformation(collectPerformanceInfoEnabled: boolean): this;
    /**
     * Gets collect performance information mode enabled
     * @returns true if collection performance information mode enabled
     */
    getCollectPerformanceInformation(): boolean;
}
export declare namespace TiledShape {
    /**
     * object with parameters
     */
    type ReceiverOptions<TFormatResult extends object = ImageData> = {
        /**
         * Maximum number of requests that can be sent at the same time
         */
        maxnumreq?: number;
        /**
         * tries of downloading image, if server isn't available
         */
        tries?: number;
        /**
         * timeout of next request, if server isn't available
         */
        timeout?: number;
        /**
         * type for tile loader
         */
        loadertype?: LoaderType;
        /**
         * Instance of tile formatter
         */
        formatter?: Formatter<TFormatResult>;
        /**
         * http service to make any HTTP request
         */
        httpservice?: AbstractHttpService;
        /**
         * source for error image (it will be rendered if tile is not available)
         */
        errimgsrc?: string;
        /**
         * strategy for cancelling of requests
         */
        cancellationstrategy?: AbstractCancellationStrategy;
        /**
         * delay callback
         */
        delaycallback?: DelayCallback;
        /**
         * image loader callback
         */
        imageloader?: ImageCallback<TFormatResult>;
    };
    type Formatter<TLoaderFormat extends object = TiledShape.ImageData> = (data: ImageData) => TLoaderFormat | string;
    /**
     * data of image
     */
    type ImageData = {
        /**
         * id of image
         */
        id: number | string;
        /**
         * model area of image
         */
        tilerect: Rect;
        /**
         * Tile rect in device coordinates
         */
        devicearea: Rect;
        /**
         * Image rect in device coordinates
         */
        transformedmodelrect: Rect;
        devicetilerect?: Rect;
        i?: number;
        j?: number;
        z?: number;
    };
    /**
     * data
     */
    type ImageLoadData<TLoaderFormat extends object = TiledShape.ImageData> = Partial<TLoaderFormat> & {
        /**
         * url of image
         */
        url?: string;
        /**
         * cancel
         */
        cancel?: Cancel;
    };
    /**
     * Callback as result of image loaded. it can have error if loading is fail
     */
    type ImageLoadedCallback = (error?: ErrorCodes | {
        'code': ErrorCodes;
    } | Error | string | null, response?: any) => void;
    /**
     * Need to delay request callback
     */
    type DelayCallback = (data: ImageData) => number;
    /**
     * Image loader callback
     */
    type ImageCallback<TLoaderFormat extends object = TiledShape.ImageData> = (
    /**
     * data
     */
    data: ImageLoadData<TLoaderFormat>, 
    /**
     * callback to be called
     */
    callback: ImageLoadedCallback) => Promise<any> | Cancel | void;
    /**
     * object with parameters
     */
    type CommonManagerOptions<TFormatResult extends object = TiledShape.ImageData> = {
        /**
         * Number of tiles stored in cache (0 - endless capacity)
         */
        capacity?: number;
        /**
         * Maximum number of requests that can be sent at the same time
         */
        maxnumreq?: number;
        /**
         * tries of downloading image, if server isn't available
         */
        tries?: number;
        /**
         * timeout of next request, if server isn't available
         */
        timeout?: number;
        /**
         * Set to true if server provide base64 encoded string instead of raw image
         */
        base64?: boolean;
        /**
         * Instance of tile formatter
         */
        formatter?: TiledShape.Formatter<TFormatResult>;
        /**
         * time to wait for loading tiles (for async rendering)
         */
        asynctimeout?: number;
        /**
         * source for error image (it will be rendered if tile is not available)
         */
        errimgsrc?: string;
        /**
         * http service to make any HTTP request
         */
        httpservice?: AbstractHttpService;
    };
    namespace ImageManager {
        /**
         * object with parameters
         */
        type Options<TFormatResult extends object = TiledShape.ImageData> = CommonManagerOptions<TFormatResult> & {
            /**
             * model area of image
             */
            modelarea?: Rect;
            /**
             * array of images to load
             */
            images?: ImageData[];
        };
        type ImageData = {
            /**
             * image id
             */
            id: string;
            /**
             * image width
             */
            width: number;
            /**
             * image height
             */
            height: number;
        };
    }
    /**
     * object with parameters
     */
    type OSMManagerOptions<TFormatResult extends object = TiledShape.ImageData> = CommonManagerOptions<TFormatResult> & {
        /**
         * option to request more data not only visible part (in Tiles)
         */
        extendedrenderingborders?: number;
        /**
         * Width of a tile
         */
        tilew?: number;
        /**
         * Height of a tile
         */
        tileh?: number;
        /**
         * option to define minimum level of loading tiles
         */
        minlod?: number;
        /**
         * option to define maximum level of loading tiles
         */
        maxlod?: number;
    };
    type TileManagerOptions<TFormatResult extends object = TiledShape.ImageData> = CommonManagerOptions<TFormatResult> & {
        /**
         * option to request more data not only visible part (in Tiles)
         */
        extendedrenderingborders?: number;
        /**
         * option to show should it be const tiles or rendered on server side
         */
        isconsttiles?: boolean;
        /**
         * freeze updating shape until new tiles are loaded
         */
        freezeupdate?: boolean;
        /**
         * Width of a tile
         */
        tilew?: number;
        /**
         * Height of a tile
         */
        tileh?: number;
    };
    /**
     * object with parameters
     */
    type Options<TFormatResult extends object = TiledShape.ImageData> = RectangularShape.Options & ReceiverOptions & (TileManagerOptions<TFormatResult> | ImageManager.Options<TFormatResult> | OSMManagerOptions<TFormatResult>) & {
        delaycallback?: DelayCallback;
        imageloader?: ImageCallback<TFormatResult>;
    };
    type EventMap = AbstractNode.EventMap & {
        [Events.TileLoading]: {
            modelarea: Rect;
        };
        [Events.TileLoaded]: {
            modelarea: Rect;
            time: number;
        };
        [Events.TileCancelled]: {
            modelarea: Rect;
            time: number;
        };
        [Events.TileRendering]: {
            modelarea: Rect;
        };
        [Events.TileRendered]: {
            modelarea: Rect;
            time: number;
        };
        [Events.FirstTileLoading]: null;
        [Events.LastTileRendered]: {
            tilesloading?: Record<string, number>;
            tilescancelling?: Record<string, number>;
            tilesrendering?: Record<string, number>;
            time?: number;
        };
    };
}
