import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { EditEvents } from '@int/geotoolkit/controls/tools/EditEvents';
import { Registry } from '@int/geotoolkit/controls/tools/editors/Registry';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
import type { AbstractCommand } from '@int/geotoolkit/controls/tools/editors/commands/AbstractCommand';
/**
 * Editors history that stores editing commands and is able to undo/redo it
 */
export declare class History extends EventDispatcher {
    constructor(layer: CompositeNode);
    on<E extends keyof History.EventMap>(type: E, callback: (eventType: E, sender: this, args: History.EventMap[E]) => void): this;
    off<E extends keyof History.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: History.EventMap[E]) => void): this;
    notify<E extends keyof History.EventMap>(type: E, source: History, args?: History.EventMap[E]): this;
    setRegistry(registry: Registry): this;
    /**
     * Checks if there is command in history to undo
     */
    canUndo(): boolean;
    /**
     * Checks if there is command in history to redo
     */
    canRedo(): boolean;
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
     * Pushes editor's command to the history
     * @param command command to push
     * @param [editor] editor generated command
     * @returns this
     */
    push(command: AbstractCommand, editor?: AbstractEditorBase): this;
    /**
     * Returns current position in history (number of commands recorded from initial to the current state)
     */
    getCurrentPosition(): number;
    /**
     * Removes all records from the history
     * @returns this
     */
    clear(): this;
}
export declare namespace History {
    type EventMap = EventDispatcher.EventMap & {
        [EditEvents.BeforeCommandApplied]: AbstractCommand;
        [EditEvents.CommandApplied]: AbstractCommand;
        [EditEvents.CommandApplying]: AbstractCommand;
        [EditEvents.Undo]: AbstractCommand;
        [EditEvents.Redo]: AbstractCommand;
        [EditEvents.EditorChanged]: AbstractEditorBase;
    };
}
