import type { Surface } from '@int/geotoolkit/renderer/Surface';
/**
 * Keeps handles to HTML Canvas objects so they can be re-used
 */
export declare class TileResourceManager {
    /**
     * Create TileResourceManager
     * @param memoryLimit Upper memory limit in Megabyte
     */
    constructor(memoryLimit?: number);
    /**
     * Returns upper memory limit
     *
     * @returns Memory limit in MB
     */
    getMemoryLimit(): number;
    /**
     * Sets upper memory limit
     *
     * @param memoryLimit in MB
     * @returns this
     */
    setMemoryLimit(memoryLimit: number): this;
    /**
     * Access surface. This function should be called whenever the surface has been drawn.
     *
     * @param surface surface to be released
     */
    accessSurface(surface: Surface): void;
    /**
     * Returns TileResourceManager instance
     *
     * @returns manager
     */
    static getInstance(): TileResourceManager;
}
