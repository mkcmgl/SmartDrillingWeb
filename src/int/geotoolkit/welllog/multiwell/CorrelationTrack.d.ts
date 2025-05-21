/**
 * @module geotoolkit/welllog/multiwell/CorrelationTrack
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { ITrack } from '@int/geotoolkit/welllog/ITrack';
import { Group } from '@int/geotoolkit/scene/Group';
import { Node } from '@int/geotoolkit/scene/Node';
import { Events as WellogWidgetsEvents } from '@int/geotoolkit/welllog/widgets/Events';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import { Range } from '@int/geotoolkit/util/Range';
/**
 * Define track to display correlation between wells
 */
export declare class CorrelationTrack extends Group implements ITrack {
    /**
     * Creates correlation track
     * @param [options] left track or properties object
     * @param [rightWell] right track
     */
    constructor(options?: CorrelationTrack.Options | ITrack, rightWell?: ITrack);
    on<E extends keyof CorrelationTrack.EventMap>(type: E, callback: (eventType: E, sender: this, args: CorrelationTrack.EventMap[E]) => void): this;
    off<E extends keyof CorrelationTrack.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: CorrelationTrack.EventMap[E]) => void): this;
    notify<E extends keyof CorrelationTrack.EventMap>(type: E, source: CorrelationTrack, args?: CorrelationTrack.EventMap[E]): this;
    /**
     * Return unlimited depth range
     */
    getDepthLimits(): Range;
    /**
     * Return a depth range, which is visible now
     */
    getVisibleDepthLimits(): Range;
    /**
     * Return self reference
     */
    asNode(): Node;
    /**
     * This method is called it child or children are added
     * @param child added child
     */
    protected onChildAdded(child: Node | Iterator<Node>): void;
    /**
     * Specify left and right well
     * @param leftWell left well
     * @param rightWell right well
     * @returns this
     */
    setWells(leftWell: ITrack, rightWell: ITrack): this;
    /**
     * Return left well
     */
    getLeftWell(): ITrack;
    /**
     * Return right well
     */
    getRightWell(): ITrack;
    /**
     * function call in the constructor to initialize tools in the widget
     */
    protected initializeTools(): this;
    /**
     * Connect a new tool with a toolname to the widget
     * @param tool tool associated with the widget
     * @returns this
     */
    connectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Disconnect the tool from the widget
     * @param tool tool to disconnect
     * @returns this
     */
    disconnectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Returns root tool associated to this widget
     */
    getTool(): CompositeTool;
    /**
     * Set root tool associated to this widget
     * @param tool tool to set
     */
    protected setTool(tool: CompositeTool): this;
    /**
     * Returns the tool matching the given name.<br>
     * This function also accepts tool 'path' instead of absolute name.<br>
     * For example:<br>
     * getToolByName("compositeTool.panningTools.trackPanning.TrackPanning")<br>
     * Would return the same tool as <br>
     * getToolByName("TrackPanning")<br>
     * As long as there is only one tool named "TrackPanning" in this composite<br>
     * See listToolsNames()<br>
     * @param toolName The tool name or path
     */
    getToolByName(toolName: string): AbstractTool | null;
    /**
     * Returns the tool matching the given type. or null if nothing is matching the tool type<br>
     * For example:<br>
     * getToolByType(geotoolkit.controls.tools.Selection)<br>
     * Would return the same tool as<br>
     * getToolByName("pick")<br>
     *
     * @param toolType toolType of the tool
     */
    getToolByType(toolType: typeof AbstractTool): AbstractTool | null;
    /**
     * List all the tools contained in this composite.
     * Prepend their parent tools parent using a '.'.
     */
    listToolsNames(): string[];
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory
     * leaks
     */
    dispose(): void;
    /**
     * Get the bounds in the parents model space. If bounds are not set,
     * then parent model limits are used.
     *
     * @returns current bounds
     */
    getBounds(): Rect;
}
export declare namespace CorrelationTrack {
    /**
     * left track or properties object
     */
    type Options = Group.Options & {
        /**
         * position in container
         */
        range?: Range;
        /**
         * well width
         */
        width?: number;
        /**
         * left track
         */
        leftwell?: ITrack;
        /**
         * right track
         */
        rightwell?: ITrack;
    };
    type EventMap = Group.EventMap & {
        [WellogWidgetsEvents.VisualsSelected]: Node[];
    };
}
