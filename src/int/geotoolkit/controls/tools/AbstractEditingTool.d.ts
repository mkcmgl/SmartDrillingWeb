import { EditMode } from '@int/geotoolkit/controls/tools/EditMode';
import { History } from '@int/geotoolkit/controls/tools/editors/History';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { Registry } from '@int/geotoolkit/controls/tools/editors/Registry';
import { EditEvents } from '@int/geotoolkit/controls/tools/EditEvents';
import { PaintEventArgs } from '@int/geotoolkit/controls/tools/PaintEventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
import type { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
/**
 * The base abstract class for tools that are used to create/modify nodes, using {@link @int/geotoolkit/controls/tools/editors/AbstractEditorBase~AbstractEditorBase}
 * @fires @int/geotoolkit/controls/tools/EditEvents~EditEvents.BeforeCommandApplied
 * @fires @int/geotoolkit/controls/tools/EditEvents~EditEvents.CommandApplying
 * @fires @int/geotoolkit/controls/tools/EditEvents~EditEvents.CommandApplied
 */
export declare abstract class AbstractEditingTool extends AbstractTool {
    protected constructor(options?: AbstractEditingTool.Options);
    on<E extends keyof AbstractEditorBase.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractEditorBase.EventMap[E]) => void): this;
    off<E extends keyof AbstractEditorBase.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractEditorBase.EventMap[E]) => void): this;
    notify<E extends keyof AbstractEditorBase.EventMap>(type: E, source: AbstractEditingTool, args?: AbstractEditorBase.EventMap[E]): this;
    protected getRegistry(): Registry;
    /**
     * Returns editor to edit node with provided options
     * @param options editor options
     * @throws {Error} if supported editor was not found and default editor was not set
     */
    protected createEditor(options: Record<string, any>): AbstractEditorBase;
    /**
     * Starts editing the node provided
     * @param node node to edit
     * @returns this
     */
    editNode(node: Node | Node[] | null): this;
    /**
     * @param eventArgs event args
     */
    protected onMouseDown(eventArgs: EventArgs): void;
    /**
     * @param eventArgs event args
     */
    protected onMouseMove(eventArgs: EventArgs): void;
    /**
     * @param eventArgs event args
     */
    protected onMouseUp(eventArgs: EventArgs): void;
    /**
     * Forces editing shapes and handles to be updated
     * @returns this
     */
    update(): this;
    /**
     * Forces editing handles to be synchronized with shape
     * @returns this
     */
    updateHandles(): this;
    /**
     * Sets paint tool properties (mode, styles, etc.)
     * @param [props] tool props
     * @returns this
     */
    setProperties(props?: AbstractEditingTool.Options): this;
    /**
     * Returns all properties
     * @returns tool options
     */
    getProperties(): AbstractEditingTool.OptionsOut;
    /**
     * @returns this
     */
    undo(): this;
    canUndo(): boolean;
    canRedo(): boolean;
    /**
     * @returns this
     */
    redo(): this;
    /**
     * Sets tool edit mode (for nodes with node manipulators)
     * @param mode edit mode
     * @returns this
     */
    setEditMode(mode: EditMode): this;
    /**
     * Returns tool current edit mode
     */
    getEditMode(): EditMode;
    /**
     * Returns the origin of currently edited shape (if exists, null otherwise).
     */
    getShape(): null | Node;
    /**
     * Returns currently edited shape. Relevant for {@link import("geotoolkit/controls/tools/EditMode").EditMode.Ghost} mode.
     */
    getActiveShape(): null | Node;
    /**
     * For internal use
     * @param editor editor to use
     * @returns this
     */
    protected setEditor(editor: AbstractEditorBase | null): this;
    /**
     * Returns current editor tool (if exists)
     */
    getEditor(): AbstractEditorBase | null;
    /**
     * Node created handler
     * @param editor editor that created node
     * @param eventArgs event args
     */
    protected onNodeCreated(editor: AbstractEditorBase, eventArgs: PaintEventArgs): void;
    /**
     * Fires the {@link import("geotoolkit/controls/tools/EditEvents").EditEvents.BeforeCommandApplied} event
     * @param eventName the event name
     * @param history the source history
     * @param command the command applied
     */
    protected onBeforeCommandApplying(eventName: EditEvents, history: History, command: AbstractCommand): void;
    /**
     * Fires the {@link import("geotoolkit/controls/tools/EditEvents").EditEvents.CommandApplying} event
     * @param eventName the event name
     * @param history the source history
     * @param command the command applied
     */
    protected onCommandApplying(eventName: EditEvents, history: History, command: AbstractCommand): void;
    /**
     * Fires the {@link import("geotoolkit/controls/tools/EditEvents").EditEvents.CommandApplied} event and the event according to the command event name
     * @param eventName the event name
     * @param history the source history
     * @param command the command applied
     */
    protected onCommandApplied(eventName: EditEvents, history: History, command: AbstractCommand): void;
    /**
     * Fires the {@link import("geotoolkit/controls/tools/EditEvents").EditEvents.Undo} event
     * @param eventName the event name
     * @param history the source history
     * @param command the command
     */
    protected onCommandUndo(eventName: EditEvents, history: History, command: AbstractCommand): void;
    /**
     * Fires the {@link import("geotoolkit/controls/tools/EditEvents").EditEvents.Redo} event
     * @param eventName the event name
     * @param history the source history
     * @param command the command
     */
    protected onCommandRedo(eventName: EditEvents, history: History, command: AbstractCommand): void;
    /**
     * Returns current history
     */
    getHistory(): History;
}
export declare namespace AbstractEditingTool {
    /**
     * tool options
     */
    type Options = AbstractTool.Options & {
        /**
         * paint editor editing mode to determine which elements/features are allowed
         */
        editmode?: EditMode;
        /**
         * history to store commands (use for shared history)
         */
        history?: History;
        /**
         * the extra editor properties to be provided for every new editor (see {@link @int/geotoolkit/controls/tools/editors/AbstractEditorBase~AbstractEditorBase#setProperties})
         */
        editor?: AbstractEditorBase.Options;
        /**
         * editors registry, by default is null
         */
        registry?: Registry;
    };
    /**
     * tool options
     */
    type OptionsOut = AbstractTool.OptionsOut & {
        /**
         * paint editor editing mode to determine which elements/features are allowed
         */
        editmode: EditMode;
        /**
         * history to store commands (use for shared history)
         */
        history: History;
        /**
         * the extra editor properties (see {@link @int/geotoolkit/controls/tools/editors/AbstractEditorBase~AbstractEditorBase#getProperties})
         */
        editor: AbstractEditorBase.OptionsOut;
    };
}
