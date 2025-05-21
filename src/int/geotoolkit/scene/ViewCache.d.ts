/**
 * @module geotoolkit/scene/ViewCache
 */
import { Cache, CacheMode } from '@int/geotoolkit/scene/Cache';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { TileResourceManager } from '@int/geotoolkit/scene/TileResourceManager';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines a cache strategy to prerender composite node's children in a set of tiles,
 * which have a raster format. For example, it can be an image or texture. The format
 * depends on rendering engine.
 */
export declare class ViewCache extends Cache {
    constructor();
    /**
     * Creates cache
     * @param [options] cache options
     */
    constructor(options: ViewCache.Options);
    /**
     * Creates cache
     * @param [tileWidth] tile width in device coordinates
     * @param [tileHeight] tile height in device coordinates
     * @param [mode] Shared mode by default
     * @param [memoryLimit] memoryLimit Upper memory limit in Megabyte, ignored when in Shared mode
     * use `TileResourceManager.getInstance().setMemoryLimit()` to set memory limit in Shared mode
     * @param [async] true if actions are performed asynchronously
     */
    constructor(tileWidth: number, tileHeight: number, mode?: CacheMode, memoryLimit?: number, async?: boolean);
    /**
     * Set debug mode states
     * @param debugInfo debug information
     */
    static setDebugMode(debugInfo: ViewCache.DebugInfo): void;
    /**
     * Return current debug mode states
     */
    static getDebugMode(): ViewCache.DebugInfo;
    /**
     * Set extend
     * @param extend overlap between 2 tiles
     * @returns this
     */
    setExtend(extend: Dimension): this;
    /**
     * Set keep alive strategy, keep tiles alive when rebuild as much as possible
     * @param keepAlive flag
     */
    setKeepAlive(keepAlive: boolean): this;
    /**
     * When this is set to true will essentially freeze the cache - tiles will no longer be created, existing tiles will be used and scaled to fit the visible bounds
     * if tiles do not exist for a particular area nothing will be rendered.
     *
     * @param stop flag to freeze the cache
     * @returns this
     */
    setStopCreationOrUpdate(stop: boolean): this;
    /**
     * Returns flag which freezes the cache.
     * @returns stop
     */
    getStopCreationOrUpdate(): boolean;
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: ViewCache): void;
    /**
     * Sets cache owner.
     * @param owner node which should be cached
     * @throws Error
     * This exception is thrown if type is not supported
     * @returns this
     */
    setOwner(owner: Node): this;
    /**
     * Returns cache owner.
     * @returns owner this cache's owner
     */
    getOwner(): Node | null;
    /**
     * Returns resource manager.
     */
    getResourceManager(): TileResourceManager;
    /**
     * Returns tile width.
     * @returns width
     */
    getTileWidth(): number;
    /**
     * Returns tile height.
     * @returns height
     */
    getTileHeight(): number;
    /**
     * Render to context. Will only render tiles within visible model limits.
     * @param context rendering context
     */
    render(context: RenderingContext): void;
    /**
     * Sets render content.
     * @param renderContentDelegate external method to render tiles
     * @returns this
     */
    setRenderContent(renderContentDelegate: ((context: RenderingContext) => void) | null): this;
    /**
     * Invalidates cache. Marks cache to be rendered.
     * @param [bounds] rectangular area to be invalidated
     * @returns this
     */
    invalidate(bounds?: Rect): this;
    /**
     * Stops all asynchronous rendering processes (if existed)
     * @returns this
     */
    stopRenderAsync(): this;
    /**
     * Checks if cache is asynchronous
     */
    isAsync(): boolean;
    /**
     * Sets asynchronous cache rendering
     * @param [bool] true if cache should be asynchronous
     * @returns this
     */
    setAsync(bool?: boolean): this;
    /**
     * Flags the ViewCache as needing a clear / rebuild.
     * Called after zooming or when we've hit the cap for number of images
     * @param [force] force flag
     * @returns this
     */
    rebuild(force?: boolean): this;
}
export declare namespace ViewCache {
    /**
     * tile width in device coordinates
     */
    type Options = {
        /**
         * tile width in device coordinates
         */
        tilewidth?: number;
        /**
         * tile height in device coordinates
         */
        tileheight?: number;
        /**
         * Shared mode by default
         */
        mode?: CacheMode;
        /**
         * Upper memory limit in Megabyte, ignored when in Shared mode
         * use `TileResourceManager.getInstance().setMemoryLimit()` to set memory limit in Shared mode
         */
        memorylimit?: number;
        /**
         * true if actions are performed asynchronously
         */
        async?: boolean;
        /**
         * keep alive strategy, keeps tiles alive when rebuild as much as possible
         */
        keepalive?: boolean;
    };
    /**
     * debug information
     */
    type DebugInfo = {
        /**
         * display tile border flag
         */
        showborder?: boolean;
        /**
         * display tile invalid area
         */
        showinvalidarea?: boolean;
    };
}
