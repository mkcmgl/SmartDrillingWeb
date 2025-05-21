/**
 * @module geotoolkit/contour/events/LineVisualEvent
 */
import { VisualEvent } from '@int/geotoolkit/contour/events/VisualEvent';
/**
 * The EventType enumeration describes what this LineVisualEvent actually represents
 * @enum
 * @readonly
 */
export declare enum EventType {
    /**
     * The visual has been invalidated
     */
    VISUAL_INVALIDATED = "onLineVisualInvalidated",
    /**
     * The visibility of the visual has changed
     */
    VISIBILITY_CHANGED = "onLineVisibilityChanged",
    /**
     * The colormap for the visual has changed
     */
    COLORMAP_CHANGED = "onLineColorMapChanged",
    /**
     * The line or label style has changed
     */
    STYLE_CHANGED = "onLineStyleChanged",
    /**
     * The index stepping for the isolines has changed
     */
    STEP_CHANGED = "onLineStepChanged",
    /**
     * The format for the label text has changed
     */
    FORMAT_CHANGED = "onLineFormatChanged",
    /**
     * The size of the margins around the labels, has changed
     */
    MARGIN_CHANGED = "onLineMarginChanged",
    /**
     * The spacing of labels along the isolines, has changed
     */
    SPACING_CHANGED = "onLineSpacingChanged"
}
/**
 * Constructs new visual event object, based on specified values
 * @deprecated since 4.0, use common event flow instead
 */
export declare class LineVisualEvent extends VisualEvent {
}
