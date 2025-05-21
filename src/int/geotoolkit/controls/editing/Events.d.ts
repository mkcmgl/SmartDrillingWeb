/**
 * @module geotoolkit/controls/editing/Events
 */
/**
 * An enumerator containing events fired by Editing tools
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event fired when the handle or a ghost is captured
     */
    DragStart = "dragstart",
    /**
     * Event fired before the first move is executed on a handle
     */
    BeforeDragging = "beforedragging",
    /**
     * Event fired on every move of the handle if the ghost handle is disabled
     */
    Dragging = "dragging",
    /**
     * Event fired after dragging is completed but before the handle or a ghost is released
     */
    AfterDragging = "afterdragging",
    /**
     * Event fired when the handle or a ghost is released
     */
    DragEnd = "dragend",
    /**
     * Event fired when deleting occurs
     */
    Delete = "delete",
    /**
     * Event fired when inserting occurs
     */
    Insert = "insert",
    /**
     * Event fired when mouse has been moved across the plot, but no dragging happens
     */
    Move = "move"
}
