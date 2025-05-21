/**
 * @module geotoolkit/contour/events/ContourEvent
 */
import { Event } from '@int/geotoolkit/contour/events/Event';
import type { ContourShape } from '@int/geotoolkit/contour/shapes/ContourShape';
/**
 * The EventType enumeration is used to describe the type of event fired by ContourShape
 * @enum
 * @readonly
 */
export declare enum EventType {
    /**
     * The Contour Scale has changed
     */
    SCALE_CHANGED = "onContourScaleChanged",
    /**
     * The Contour Grid has changed
     */
    GRID_CHANGED = "onContourGridChanged",
    /**
     * The Contour Processor has changed
     */
    PROCESSOR_CHANGED = "onContourProcessorChanged",
    /**
     * The Bounding Box of the Contour Shape has changed
     */
    BBOX_CHANGED = "onContourBBoxChanged",
    /**
     * A visual has been added to the contour shape
     */
    VISUAL_ADDED = "onContourVisualAdded",
    /**
     * A visual has been removed from the contour shape
     */
    VISUAL_REMOVED = "onContourVisualRemoved",
    /**
     * The projection has changed
     */
    PROJECTION_CHANGED = "onContourProjectionChanged",
    /**
     * The faults have changed
     */
    FAULTS_CHANGED = "onContourFaultsChanged"
}
/**
 * Event is fired by an object to notify other objects about changes that might affect them
 * E.g. changing a parameter or data, changes the final display
 * Constructs new event object, based on specified values
 * @deprecated since 4.0, use common event flow instead
 */
export declare class ContourEvent extends Event {
    getSource(): ContourShape;
}
