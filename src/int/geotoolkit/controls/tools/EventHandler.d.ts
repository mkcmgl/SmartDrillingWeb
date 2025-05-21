/**
 * @module geotoolkit/controls/tools/EventHandler
 */
import { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { AbstractCompositeTool } from '@int/geotoolkit/controls/tools/AbstractCompositeTool';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
/**
 * EventHandler
 */
export declare class EventHandler {
    /**
     * @param compositeTool abstract composite tool
     * @param eventName event
     * @param tool tool
     * @param obj extra obj
     * @param delegate to execute
     */
    constructor(compositeTool: AbstractCompositeTool, eventName: string, tool: AbstractTool, obj: any, delegate: EventHandler.DelegateFunction);
    /**
     * return tool container
     */
    getCompositeTool(): AbstractCompositeTool;
    /**
     * return event name
     * @returns event name
     */
    getEventName(): string;
    getObject(): any;
    /**
     * return tool
     */
    getTool(): AbstractTool;
    /**
     * return enable state
     */
    isEnabled(): boolean;
    /**
     * set enable state
     * @param enabled flag to set enable state
     */
    setEnabled(enabled: boolean): this;
    /**
     * returns true if event was captured be event handler
     * @param nativeEventArgs event args from DOM events
     */
    execute(nativeEventArgs: Event | EventArgs): EventArgs;
}
export declare namespace EventHandler {
    type DelegateFunction = (eventArgs: EventArgs) => void;
}
