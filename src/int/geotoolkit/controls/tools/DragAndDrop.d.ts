import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { DragAndDropEventArgs } from '@int/geotoolkit/controls/tools/DragAndDropEventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * DragAndDrop events.
 * @enum
 * @type {string}
 */
export declare enum Events {
    /**
     * Event fired when the element was picked
     * @event module:geotoolkit/controls/tools/DragAndDrop~Events~onPick
     */
    onPick = "onPick",
    /**
     * Event fired when the element is being dragged
     * @event module:geotoolkit/controls/tools/DragAndDrop~Events~onDrag
     */
    onDrag = "onDrag",
    /**
     * Event fired when the element was dropped
     * @event module:geotoolkit/controls/tools/DragAndDrop~Events~onDrop
     */
    onDrop = "onDrop"
}
/**
 * DragAndDrop drag mode.
 * @enum
 * @readonly
 */
export declare enum DragMode {
    /**
     * Drag only visible part of node
     */
    VisibleModelLimits = "VisibleModelLimits",
    /**
     * Drag whole node
     */
    ModelLimits = "ModelLimits"
}
/**
 * Drag-and-drop tool
 */
export declare class DragAndDrop extends AbstractTool {
    constructor(options?: DragAndDrop.Options);
    on<E extends keyof DragAndDrop.EventMap>(type: E, callback: (eventType: E, sender: this, args: DragAndDrop.EventMap[E]) => void): this;
    off<E extends keyof DragAndDrop.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DragAndDrop.EventMap[E]) => void): this;
    notify<E extends keyof DragAndDrop.EventMap>(type: E, source: DragAndDrop, args?: DragAndDrop.EventMap[E]): this;
    /**
     * Get node filters
     */
    getNodeFilters(): DragAndDrop.NodeFilter[];
    /**
     * Set node filters
     * @param nodeFilters node filters
     * @returns this
     */
    setNodeFilters(nodeFilters: DragAndDrop.NodeFilter[]): this;
    /**
     * Gets drag mode
     */
    getDragMode(): DragMode;
    /**
     * Sets drag mode
     * @param mode drag mode
     * @returns this
     */
    setDragMode(mode: DragMode): this;
    /**
     * Sets cursor
     * @param cursor cursor see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor for possible values
     */
    setCursor(cursor: string): void;
}
export declare namespace DragAndDrop {
    /**
     * options
     */
    export type Options = AbstractTool.Options & {
        /**
         * filters for nodes
         */
        nodefilters?: NodeFilter[];
        /**
         * which part of node will be displayed on drag preview
         */
        dragmode?: DragMode;
        /**
         * inflate bounds axis X
         */
        inflatex?: number;
        /**
         * inflate bounds axis Y
         */
        inflatey?: number;
    };
    /**
     * Defines node filter for nodes to drag and drop
     */
    export type NodeFilter = {
        /**
         * node filter for nodes to drag and drop. if returns an array - container for render should be specified
         */
        drag?: DragCallback;
        /**
         * node filter for container
         */
        container?: ContainerCallback;
    };
    type DragCallback = (nodes: Node[]) => Node | Node[] | null;
    type ContainerCallback = (nodes: Node[]) => Node | null;
    export type EventMap = AbstractTool.EventMap & {
        [Events.onPick]: DragAndDropEventArgs;
        [Events.onDrag]: DragAndDropEventArgs;
        [Events.onDrop]: DragAndDropEventArgs;
    };
    export {};
}
