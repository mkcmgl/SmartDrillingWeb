import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Represents a tile class.
 * Tile is for internal use only
 */
export declare class Tile {
    /**
     * @param rect Stored in model coordinates
     */
    constructor(rect: Rect);
    /**
     * Set tile as invalid
     */
    invalidate(): void;
    /**
     * Returns true if tile is valid, otherwise false
     */
    isValid(): boolean;
}
