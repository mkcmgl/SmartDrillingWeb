import type { Node } from '@int/geotoolkit/scene/Node';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { TileResourceManager } from '@int/geotoolkit/scene/TileResourceManager';
/**
 * Enum of cache mode
 * Defines tile allocation and sharing strategy
 * @enum
 * @readonly
 */
export declare enum CacheMode {
    /**
     * Shared
     * This is default mode, Cache instance share titles with other instances
     */
    Shared = "Shared",
    /**
     * Independent
     * Cache instance owns titles exclusively
     */
    Independent = "Independent",
    /**
     * FullScreen
     * Cache instance owns tiles exclusively and minimize the number of tiles used to render the scene, it uses only one tile per widget whenever it is possible.
     */
    FullScreen = "FullScreen"
}
/**
 * Abstract parent class of caches
 */
export declare abstract class Cache {
    /**
     * Sets cache owner.
     * @param owner node which should be cached
     * @returns this
     */
    setOwner(owner: Node): this;
    /**
     * Returns cache owner.
     * @returns owner
     */
    getOwner(): Node | null;
    /**
     * Sets render content delegate.
     * @param renderContentDelegate parameter which can render content for this node
     */
    setRenderContent(renderContentDelegate: ((context: RenderingContext) => void) | null): void;
    /**
     * Render cache.
     * @param context rendering context
     */
    abstract render(context: RenderingContext): void;
    /**
     * Rebuilds cache.
     * @returns this
     */
    rebuild(force?: boolean): this;
    /**
     * Invalidates cache. Marks cache to be rendered.
     * @param [bounds] rectangular area to be invalidated
     * @returns this
     */
    invalidate(bounds?: Rect): this;
    /**
     * Returns resource manager.
     */
    abstract getResourceManager(): TileResourceManager | null;
    /**
     * Returns a cloned cache object.
     * All inheritors should implement copy constructor or provide custom implementation for this method.
     */
    clone(): Cache;
    getClassName(): string;
    static getClassName(): string;
}
