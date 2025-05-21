import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { AbstractCompositeTool } from '@int/geotoolkit/controls/tools/AbstractCompositeTool';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
/**
 * Composite tool.
 */
export declare class CompositeTool extends AbstractCompositeTool {
    /**
     * @param [node] associated with layer to display temporary shapes or properties object
     * @param [name] name of the tool
     */
    constructor(node?: CompositeTool.Options | CompositeNode, name?: string);
    /**
     * Returns node associated with manipulator.
     */
    getNode(): CompositeNode;
    /**
     * Sets node associated with manipulator
     * @param node node
     * @returns this
     */
    setNode(node: CompositeNode): this;
}
export declare namespace CompositeTool {
    /**
     * associated with layer to display temporary shapes or properties object
     */
    type Options = AbstractTool.Options & {
        /**
         * associated with layer to display temporary shapes
         */
        node?: CompositeNode;
    };
}
