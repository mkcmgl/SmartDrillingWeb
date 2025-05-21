import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { ClassType } from '@int/geotoolkit/base';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
/**
 * Abstract composite tool.
 */
export declare class AbstractCompositeTool extends AbstractTool {
    /**
     * @param [name] name of the tool or its options
     */
    constructor(name?: AbstractTool.Options | string);
    /**
     * Returns the tool matching the given name.
     * This function also accepts tool 'path' instead of absolute name.
     * For example:
     * getToolByName("compositeTool.panningTools.trackPanning.TrackPanning")
     * Would return the same tool as
     * getToolByName("TrackPanning")
     * As long as there is only one tool named "TrackPanning" in this composite
     *
     * See listToolsNames()
     * @param name tool name or path
     */
    getToolByName(name: string): AbstractTool;
    /**
     * Returns the tool matching the given type.
     * @param type type
     */
    getToolByType(type: ClassType): AbstractTool;
    /**
     * List all the tools contained in this composite.
     * Prepend their compositetool parent using a '.'
     */
    listToolsNames(): string[];
    /**
     * Return index of specified tool.
     * @param tool abstract tool
     * @returns index of tool
     */
    getToolIndex(tool: AbstractTool): number;
    /**
     * Insert tool at specified index.
     * @param index index to insert the tool
     * @param tool abstract tool
     */
    insert(index: number, tool: AbstractTool | AbstractTool[]): this;
    /**
     * Add tool to the container.
     * @param tool abstract tool to be added
     */
    add(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Remove tool from container.
     * @param tool to remove
     */
    remove(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Dispatch event through the handlers.
     * @param eventName contains the name of the event to dispatch.
     * @param eventArgs contains info of the event.
     */
    dispatchEvent(eventName: string, eventArgs: EventArgs): boolean;
}
