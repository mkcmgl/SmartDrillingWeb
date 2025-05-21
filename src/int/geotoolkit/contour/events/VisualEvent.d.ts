/**
 * @module geotoolkit/contour/events/VisualEvent
 */
import { Event } from '@int/geotoolkit/contour/events/Event';
/**
 * The EventType enumeration describes what this VisualEvent actually is.
 * @enum
 * @readonly
 */
export declare enum EventType {
    /**
     * The visual has been invalidated
     */
    VISUAL_INVALIDATED = "onVisualInvalidated",
    /**
     * The visibility of the visual has changed
     */
    VISIBILITY_CHANGED = "onVisualVisibilityChanged",
    /**
     * The colormap for the visual has changed
     */
    COLORMAP_CHANGED = "onVisualColorMapChanged"
}
/**
 * Constructs new visual event object, based on specified values
 * @deprecated since 4.0, use common event flow instead
 */
export declare class VisualEvent extends Event {
}
