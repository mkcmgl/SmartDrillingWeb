import { RegularComponentNode } from '@int/geotoolkit/schematics/scene/RegularComponentNode';
/**
 * Abstract base class for a component node implementation with "flow" support.
 */
export declare abstract class FlowComponentNode extends RegularComponentNode {
    protected constructor(options?: RegularComponentNode.Options);
    /**
     * Show flow
     */
    abstract showFlow(): void;
    /**
     * Delete all flow children
     */
    hideFlow(): void;
}
