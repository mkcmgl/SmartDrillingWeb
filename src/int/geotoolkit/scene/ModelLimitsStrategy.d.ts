import type { Rect } from '@int/geotoolkit/util/Rect';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * Abstraction to calculate auto model limits
 */
export declare abstract class ModelLimitsStrategy {
    /**
     * Adjusts model limits
     * @param model model
     * @param modelLimits model limits
     * @returns adjusted model limits
     */
    abstract adjustModelLimits(model: CompositeNode, modelLimits: Rect): Rect;
    static getClassName(): string;
    getClassName(): string;
}
