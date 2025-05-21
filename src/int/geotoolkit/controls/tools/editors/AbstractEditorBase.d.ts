import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Rect } from '@int/geotoolkit/util/Rect';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { EditMode } from '@int/geotoolkit/controls/tools/EditMode';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { History } from '@int/geotoolkit/controls/tools/editors/History';
import { Path } from '@int/geotoolkit/scene/shapes/Path';
import { EditEvents } from '@int/geotoolkit/controls/tools/EditEvents';
import { PaintEventArgs } from '@int/geotoolkit/controls/tools/PaintEventArgs';
import { Point } from '@int/geotoolkit/util/Point';
import { Node } from '@int/geotoolkit/scene/Node';
import { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { NodeOrder } from '@int/geotoolkit/scene/CompositeNode';
import type { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
import type { Plot } from '@int/geotoolkit/plot/Plot';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * Defines edit handles identifiers. Matches the handle index in handles group
 * @readonly
 * @enum
 */
export declare enum EditHandleId {
    /**
     * Center (bounding) handle id
     */
    Center = 0,
    /**
     * Left-top handle id
     */
    LeftTop = 1,
    /**
     * Left-center handle id
     */
    LeftCenter = 2,
    /**
     * Left-bottom handle id
     */
    LeftBottom = 3,
    /**
     * Center-bottom handle id
     */
    CenterBottom = 4,
    /**
     * Right-bottom handle id
     */
    RightBottom = 5,
    /**
     * Right-center handle id
     */
    RightCenter = 6,
    /**
     * Right-top handle id
     */
    RightTop = 7,
    /**
     * Center-top handle id
     */
    CenterTop = 8,
    /**
     * Rotation handle id
     */
    Rotate = 9
}
/**
 * The base abstract class for tools to edit/create {@link @int/geotoolkit/scene/Node~Node}.
 */
export declare abstract class AbstractEditorBase extends AbstractTool {
    protected constructor(options?: AbstractEditorBase.Options);
    on<E extends keyof AbstractEditorBase.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractEditorBase.EventMap[E]) => void): this;
    off<E extends keyof AbstractEditorBase.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractEditorBase.EventMap[E]) => void): this;
    notify<E extends keyof AbstractEditorBase.EventMap>(type: E, source: AbstractEditorBase, args?: AbstractEditorBase.EventMap[E]): this;
    protected getActivePlot(): Plot;
    /**
     * Checks if editor supports the options provided
     * @param options editor options
     */
    protected isSupported(options: Record<string, any>): boolean;
    /**
     * Handles mouse double click event
     * @param eventArgs event args
     */
    protected onDoubleClick(eventArgs: EventArgs): void;
    /**
     * Handles mouse down event
     * @param eventArgs event args
     */
    protected onMouseDown(eventArgs: EventArgs): void;
    /**
     * Handles mouse move event
     * @param eventArgs event args
     */
    protected onMouseMove(eventArgs: EventArgs): void;
    /**
     * Handles mouse up event
     * @param eventArgs event args
     */
    protected onMouseUp(eventArgs: EventArgs): void;
    /**
     * Handles mouse leave event
     * @param eventArgs event args
     */
    protected onLeave(eventArgs: EventArgs): void;
    /**
     * Handles key up event
     * @param eventArgs event args
     */
    protected onKeyUp(eventArgs: EventArgs): void;
    /**
     * Handles key down event
     * @param eventArgs event args
     */
    protected onKeyDown(eventArgs: EventArgs): void;
    /**
     * Fires the {@link import("geotoolkit/controls/tools/EditEvents").EditEvents.End} event
     * @param node the created node
     * @param [eventArgs] the event arguments
     */
    protected onNodeCreated(node: Node, eventArgs?: EventArgs): void;
    /**
     * Fires the {@link import("geotoolkit/controls/tools/EditEvents").EditEvents.BeforeCommandApplied} event
     * @param command the command applied
     */
    protected onBeforeCommandApplied(command: AbstractCommand): void;
    /**
     * Fires the {@link import("geotoolkit/controls/tools/EditEvents").EditEvents.CommandApplying} event
     * @param command the command applied
     */
    protected onCommandApplying(command: AbstractCommand): void;
    /**
     * Fires the {@link import("geotoolkit/controls/tools/EditEvents").EditEvents.CommandApplied} and the `command.getEventName()` events
     * @param command command applied
     */
    protected onCommandApplied(command: AbstractCommand): void;
    /**
     * Gets the edited node visibility state
     */
    protected getVisible(): boolean;
    /**
     * @param eventArgs event args
     * @param [cursor] browser cursor to set
     */
    protected updateBrowserCursor(eventArgs: EventArgs, cursor?: string): void;
    /**
     * Pushes command to the history after applying it and firing the corresponding event
     * @param command command to add to the history
     * @returns this
     */
    protected push(command: AbstractCommand): this;
    /**
     * Applies command to the current node
     * @param command command to apply
     * @returns this
     */
    apply(command: AbstractCommand): this;
    protected translateNode(node: Node, x: number, y: number, hint?: any): boolean;
    protected transformNode(node: Node, tr: Transformation, hint?: any): boolean;
    protected rotateNode(node: Node, angle: number, hint?: any): boolean;
    protected setNodeBounds(node: Node, p1: Point, p2: Point, hint?: any): boolean;
    /**
     * Determines if the editor can insert a new node at the point
     * @param eventArgs the event arguments
     */
    protected canInsert(eventArgs: EventArgs): boolean;
    /**
     * Returns current bounding box handle if no arguments provided, or bounding box element index that is currently
     * under mouse event, null if nothing is
     * @param [eventArgs] event args
     */
    protected getBboxHandle(eventArgs?: EventArgs): EditHandleId | null;
    /**
     * Swaps active handles vertically/horizontally
     * @param handleId current active handle id
     * @param vertical true if handles should be swapped vertically and false otherwise
     * @returns swapped handle id
     */
    protected swapActiveHandles(handleId: EditHandleId, vertical: boolean): EditHandleId;
    /**
     * Creates a clone of the current node
     */
    protected createGhost(): Node | null;
    /**
     * Resets the current node to its ghost state
     */
    protected abstract resetNodeToGhost(): this;
    /**
     * Returns the ghost registered with this editor. If ghost does not exist, returns null
     */
    protected getGhost(): Node | null;
    /**
     * Returns the ghost if ghost mode is enabled and initialized and the original node otherwise
     */
    getActiveNode(): Node | null;
    /**
     * Sets edit mode to determine operations that can be applied to the current node. Use bitwise operations for the
     * full customization.
     * @param mode mode to edit
     * @returns this
     */
    setEditMode(mode: EditMode): this;
    /**
     * Returns current edit mode
     */
    getEditMode(): EditMode;
    /**
     * Returns current node
     */
    getNode(): Node;
    /**
     * Sets node to edit
     * @param node node to edit
     * @returns this
     */
    protected setNode(node: Node): this;
    /**
     * Cancels last command in history (if possible)
     * @returns this
     */
    undo(): this;
    /**
     * Reapplies last canceled command in history (if possible)
     * @returns this
     */
    redo(): this;
    /**
     * Checks if there is command in history to undo
     */
    canUndo(): boolean;
    /**
     * Checks if there is command in history to redo
     */
    canRedo(): boolean;
    /**
     * Returns current history
     */
    getHistory(): History;
    /**
     * Forces editing handles to be updated
     * @returns this
     */
    updateHandles(): this;
    /**
     * Forces editing shapes and handles to be updated
     * @returns this
     */
    update(): this;
    /**
     * Sets properties to the editing elements
     * @param properties editor properties
     * @returns this
     */
    setProperties(properties?: AbstractEditorBase.Options): this;
    /**
     * Returns properties
     * @returns editor properties
     */
    getProperties(): AbstractEditorBase.OptionsOut;
    /**
     * Returns bounds for the bounding box elements
     */
    getBounds(): Rect | null;
    /**
     * Returns current node-to-device transformation
     */
    getDeviceTransform(): Transformation;
    /**
     * Returns current node local transformation
     */
    protected getLocalTransform(): Transformation;
    /**
     * Updates active node's position if scene transformation was changed but pointer position wasn't
     */
    protected updateNodePosition(): void;
    /**
     * Flip node vertically and/or horizontally
     * @param flipX true if node should be flipped horizontally, false otherwise
     * @param flipY true if node should be flipped vertically, false otherwise
     * @returns this
     */
    flipNodeOrientation(flipX: boolean, flipY: boolean): this;
    /**
     * changes the z-order of the nodes being rendered.
     * @param order position to be added
     * @param [anchor] anchor node to specify changeNodeOrder with respect to this node
     * @returns this
     */
    changeNodeOrder(order: NodeOrder, anchor?: Node): this;
    /**
     * Delete node or array of nodes to specified trash container
     * @param trash
     * @param shape
     * @returns this
     */
    deleteNode(trash?: CompositeNode, shape?: Node | Node[]): this;
}
export declare namespace AbstractEditorBase {
    /**
     * editor options
     */
    export type Options = AbstractTool.Options & {
        /**
         * node to create/edit
         */
        node?: Node | Shape.Options;
        /**
         * history to store commands (use for shared history)
         */
        history?: History;
        /**
         * node edit mode
         */
        editmode?: EditMode;
        /**
         * bounding box path to draw bounding rectangle OR bounding box path properties (see {@link @int/geotoolkit/scene/shapes/Path~Path#setProperties})
         */
        bbox?: Path | Path.Options;
        /**
         * handles properties
         */
        handles?: HandlesOptions;
        /**
         * options for {@link import("geotoolkit/controls/tools/EditMode").EditMode.Ghost} mode
         */
        ghost?: GhostOptions;
    };
    export type GhostOptions = {
        /**
         * ghost fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * ghost line style
         */
        linestyle?: LineStyle.Type;
        /**
         * ghost opacity from 0 to 1
         */
        opacity?: number;
    };
    /**
     * editor properties
     */
    export type OptionsOut = AbstractTool.OptionsOut & {
        /**
         * current node properties (see {@link @int/geotoolkit/scene/Node~Node#getProperties})
         */
        node?: Node.OptionsOut;
        /**
         * bbox path properties(see {@link @int/geotoolkit/scene/shapes/Path~Path#getProperties})
         */
        bbox: Path.OptionsOut;
        /**
         * node edit mode
         */
        editmode: EditMode;
        /**
         * handles properties
         */
        handles: HandlesOptionsOut;
        /**
         * properties for {@link import("geotoolkit/controls/tools/EditMode").EditMode.Ghost} mode
         */
        ghost: Required<GhostOptions>;
    };
    /**
     * handles properties
     */
    export type HandlesOptions = {
        /**
         * bbox resize handles properties (see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties})
         */
        bbox?: SymbolShape.Options;
        /**
         * rotation handle properties (see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#setProperties})
         */
        rotation?: SymbolShape.Options;
    };
    /**
     * handles out properties
     */
    type HandlesOptionsOut = {
        /**
         * bbox resize handles properties (see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#getProperties})
         */
        bbox: SymbolShape.OptionsOut;
        /**
         * rotation handle properties (see {@link @int/geotoolkit/scene/shapes/SymbolShape~SymbolShape#getProperties})
         */
        rotation: SymbolShape.OptionsOut;
    };
    export type EventMap = AbstractTool.EventMap & {
        [EditEvents.Resized]: PaintEventArgs;
        [EditEvents.Translated]: PaintEventArgs;
        [EditEvents.Rotated]: PaintEventArgs;
        [EditEvents.Start]: PaintEventArgs;
        [EditEvents.Continue]: PaintEventArgs;
        [EditEvents.Drag]: PaintEventArgs;
        [EditEvents.Inserted]: PaintEventArgs;
        [EditEvents.Deleted]: PaintEventArgs;
        [EditEvents.NodeInserted]: PaintEventArgs;
        [EditEvents.NodeDeleted]: PaintEventArgs;
        [EditEvents.Flipped]: PaintEventArgs;
        [EditEvents.Grouped]: PaintEventArgs;
        [EditEvents.Ungrouped]: PaintEventArgs;
        [EditEvents.PropertyChanged]: PaintEventArgs;
        [EditEvents.SceneChanged]: PaintEventArgs;
        [EditEvents.NodeReplaced]: PaintEventArgs;
        [EditEvents.EditorChanged]: PaintEventArgs;
        [EditEvents.Undo]: PaintEventArgs;
        [EditEvents.Redo]: PaintEventArgs;
        [EditEvents.BeforeCommandApplied]: PaintEventArgs;
        [EditEvents.CommandApplying]: PaintEventArgs;
        [EditEvents.CommandApplied]: PaintEventArgs;
        [EditEvents.End]: PaintEventArgs;
    };
    export {};
}
