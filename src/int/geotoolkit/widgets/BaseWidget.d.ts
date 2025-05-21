/**
 * @module geotoolkit/widgets/BaseWidget
 */
import type { AnyRecord, ClassType } from '@int/geotoolkit/base';
import { Group } from '@int/geotoolkit/scene/Group';
import { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import { Layer } from '@int/geotoolkit/scene/Layer';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { Registry as PersistenceRegistry } from '@int/geotoolkit/persistence/Registry';
/**
 * The BaseWidget is the parent class of all widgets. <br>
 * It combines the concepts of Tool- {@link import("geotoolkit/controls/tools/AbstractTool").AbstractTool } and Group- {@link import("geotoolkit/scene/Group").Group }
 * to provide a simple way of creating a specific component like concept.<br>
 * Inheriting classes extend this concept by adding specific tools and shapes to provide a domain oriented component that can be reused easily.
 */
export declare class BaseWidget extends Group {
    /**
     * Create a bse widget
     * @param [options] options
     */
    constructor(options?: BaseWidget.Options);
    /**
     * Returns manipulator overlay to draw shapes that should move with the model
     */
    getOverlayLayer(): Layer;
    /**
     * function call in the constructor to initialize tools in the widget
     * @param options tools options
     * @returns this
     */
    protected initializeTools(options?: AnyRecord): this;
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
     * @param tool tool to be set
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
    getToolByName<K extends keyof BaseWidget.Tools>(toolName: K): BaseWidget.Tools[K] | null;
    /**
     * Returns the tool matching the given type. or null if nothing is matching the tool type<br>
     * For example:<br>
     * getToolByType(geotoolkit.controls.tools.Selection)<br>
     * Would return the same tool as<br>
     * getToolByName("pick")<br>
     *
     * @param toolType toolType of the tool
     */
    getToolByType(toolType: ClassType): AbstractTool | null;
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
     * Load template loads the saved visual properties of the current template. It is only a visual representation of the current widget. It does not contain any data
     * @param template template to be applied to current widget
     * @param [registry] registry
     */
    loadTemplate(template: string, registry?: PersistenceRegistry): void;
    /**
     * Save template saves visual properties of the current template. It is only a visual representation of the current widget. It does not contain any data
     * @param [registry] registry
     */
    saveTemplate(registry?: PersistenceRegistry): string;
    /**
     * get options
     * @param data how to extract data, null by default
     */
    getData(data?: unknown): object | null;
    /**
     * Gets all the properties pertaining to this object
     * See {@link import("geotoolkit/scene/Group").Group.getProperties} for details
     * Keep in mind that widgets does not return scene-graph information
     * @returns properties
     */
    getProperties(): BaseWidget.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * Keep in mind that widgets does not accept scene-graph information
     * NOTE properties.children property will be ignored
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: BaseWidget.Options): this;
}
export declare namespace BaseWidget {
    /**
     * properties
     */
    type OptionsOut = Omit<Group.OptionsOut, 'children'>;
    type Options = Omit<Group.Options, 'children' | 'viewcache'>;
    /**
     * Supported tools
     */
    type Tools = Record<string, AbstractTool>;
}
