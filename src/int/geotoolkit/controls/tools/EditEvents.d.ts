/**
 * @module geotoolkit/controls/tools/EditEvents
 */
/**
 * Events fired by {@link @int/geotoolkit/controls/tools/editors/AbstractEditor~AbstractEditor} tools and {@link @int/geotoolkit/controls/tools/Paint~Paint}
 * while creating/modifying a node
 * @enum
 * @readonly
 */
export declare enum EditEvents {
    /**
     * Node was resized
     */
    Resized = "Resized",
    /**
     * Node was translated
     */
    Translated = "Translated",
    /**
     * Node was rotated
     */
    Rotated = "Rotated",
    /**
     * Node creation started (e.g. first point was added)
     */
    Start = "Start",
    /**
     * Node creation continues (e.g. second point was added)
     */
    Continue = "Continue",
    /**
     * Node creation ended
     */
    End = "End",
    /**
     * Node point was dragged
     */
    Drag = "Drag",
    /**
     * Node point was inserted
     */
    Inserted = "Inserted",
    /**
     * Node point was deleted
     */
    Deleted = "Deleted",
    /**
     * Node points was reversed
     */
    Reversed = "Reversed",
    /**
     * Node was inserted
     */
    NodeInserted = "NodeInserted",
    /**
     * Node was deleted
     */
    NodeDeleted = "NodeDeleted",
    /**
     * Node was flipped (vertically/horizontally)
     */
    Flipped = "Flipped",
    /**
     * Several nodes were grouped into {@link @int/geotoolkit/scene/Group~Group}
     */
    Grouped = "Grouped",
    /**
     * Group node was ungrouped into set of its children
     */
    Ungrouped = "Ungrouped",
    /**
     * Node text was changed (for text editors only)
     */
    PropertyChanged = "PropertyChanged",
    /**
     * Node has been moved throughout the scene graph
     */
    SceneChanged = "SceneChanged",
    /**
     * Node has been replaced by another instance in scene graph
     */
    NodeReplaced = "NodeReplaced",
    /**
     * Current editor changed (other node(s) editing started)
     */
    EditorChanged = "EditorChanged",
    /**
     * The last history command was undone
     */
    Undo = "Undo",
    /**
     * The last history command was redone
     */
    Redo = "Redo",
    /**
     * Before any command was applied (duplicates any other command event). The applied command can be rejected at this point.
     */
    BeforeCommandApplied = "BeforeCommandApplied",
    /**
     * After any command was applied (duplicates any other command event) but before
     * {@link import("geotoolkit/controls/tools/EditEvents").EditEvents.CommandApplied} event was raised.
     * The applied command can be rejected at this point.
     */
    CommandApplying = "CommandApplying",
    /**
     * Any command was applied (duplicates any other command event)
     */
    CommandApplied = "CommandApplied"
}
