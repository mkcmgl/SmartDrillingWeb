/**
 * @module geotoolkit/plot/IToolContainer
 */
import type { ITool } from '@int/geotoolkit/plot/ITool';
/**
 * Define an interface that implement plot tool container
 * @interface
 */
export declare abstract class IToolContainer {
    /**
     * Returns tool by name
     * @param node node to check
     * @returns plot tool
     */
    abstract getToolByName(node: string): ITool | null;
    /**
     * Returns the tool matching the given type. or null if nothing is matching the tool type<br>
     * @param toolType toolType of the tool
     */
    abstract getToolByType(toolType: string): ITool | null;
    /**
     * List all the tools contained in this composite.
     * Prepend their parent tools parent using a '.'.
     */
    abstract listToolsNames(): string[];
    /**
     * Add tool
     * @param tool tool to add
     */
    abstract add(tool: ITool | ITool[]): this;
    /**
     * Remove tool
     * @param tool tool to remove
     */
    abstract remove(tool: ITool): this;
    /**
     * Dispose
     */
    abstract dispose(): void;
}
