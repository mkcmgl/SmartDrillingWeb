import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * @module geotoolkit/scene/InvalidateEventArgs
 */
/**
 * Event arguments for {@link import("geotoolkit/scene/Node").Events.Invalidate}
 */
export declare class InvalidateEventArgs {
    /**
     * Creates event args
     * @param [bounds] an area to be invalidated
     * @param [force] force invalidate
     */
    constructor(bounds?: Rect, force?: boolean);
    /**
     * Return invalidated area. if area is undefined or null, whole sender is invalidated
     */
    getBounds(): Rect | null;
    /**
     * Return flag is invalidation is forced
     */
    isForced(): boolean;
}
