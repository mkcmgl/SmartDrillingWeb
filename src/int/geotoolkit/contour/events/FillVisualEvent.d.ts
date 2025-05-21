/**
 * @module geotoolkit/contour/events/FillVisualEvent
 */
import { VisualEvent } from '@int/geotoolkit/contour/events/VisualEvent';
/**
 * The EventType enumeration describes what this FillVisualEvent actually is.
 * @enum
 * @readonly
 */
export declare enum EventType {
    /**
     * The visual has been invalidated
     */
    VISUAL_INVALIDATED = "onFillVisualInvalidated",
    /**
     * The visibility of the visual has changed
     */
    VISIBILITY_CHANGED = "onFillVisibilityChanged",
    /**
     * The colormap for the visual has changed
     */
    COLORMAP_CHANGED = "onFillColorMapChanged",
    /**
     * The style of holes has changed
     */
    HOLES_CHANGED = "onFillHolesChanged"
}
/**
 * The fill visual event. This class encapsulates more event types that its superclass.
 * @deprecated since 4.0, use common event flow instead
 */
export declare class FillVisualEvent extends VisualEvent {
}
