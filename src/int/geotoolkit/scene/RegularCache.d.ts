/**
 * @module geotoolkit/scene/RegularCache
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Cache } from '@int/geotoolkit/scene/Cache';
import { TileResourceManager } from '@int/geotoolkit/scene/TileResourceManager';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * Defines a cache strategy to prerender composite node's children into a single shared image and cut it into
 * a set of tiles.
 */
export declare class RegularCache extends Cache {
    /**
     * Creates cache
     * @param [options] options
     */
    constructor(options?: RegularCache.Options);
    render(context: RenderingContext): void;
    /**
     * Flags the RegularCache as needing a clear / rebuild.
     * Called after zooming or when we've hit the cap for number of images
     * @param [force] force flag
     * @returns this
     */
    rebuild(force?: boolean): this;
    setRenderContent(renderContentDelegate: ((context: RenderingContext) => void) | null): this;
    /**
     * Sets total cache limits
     * @param limits total cache limits to use instead of the owner model limits (if needed)
     * @returns this
     */
    setLimits(limits: Rect | RegularCache.LimitsCallback | null): this;
    /**
     * Returns total cache limits (if used)
     */
    getLimits(): Rect | RegularCache.LimitsCallback | null;
    setOwner(owner: CompositeNode): this;
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
}
export declare namespace RegularCache {
    /**
     * cache options
     */
    type Options = {
        /**
         * total cache limits to use instead of the owner model limits (if needed)
         */
        limits?: Rect | LimitsCallback;
        /**
         * tile width in pixels
         */
        tilewidth?: number;
        /**
         * tile height in pixels
         */
        tileheight?: number;
        /**
         * upper memory limit in Mb
         */
        memorylimit?: number;
    };
    /**
     * Return cache model limits to be cached
     */
    type LimitsCallback = (tr: Transformation) => Rect | null;
}
