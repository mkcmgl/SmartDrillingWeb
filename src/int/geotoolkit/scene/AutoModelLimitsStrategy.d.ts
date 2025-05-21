/**
 * @module geotoolkit/scene/AutoModelLimitsStrategy
 */
import { ModelLimitsStrategy } from '@int/geotoolkit/scene/ModelLimitsStrategy';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Synchronize model limits with bounds in horizontal or/and vertical direction
 */
export declare class AutoModelLimitsStrategy extends ModelLimitsStrategy {
    /**
     * Creates auto model limits strategy
     * @param [horizontalDirection] flag to set synchronization with bounds in horizontal direction
     * @param [verticalDirection] flag to set synchronization with bounds in vertical direction
     */
    constructor(horizontalDirection?: boolean, verticalDirection?: boolean);
    adjustModelLimits(model: CompositeNode, modelLimits: Rect): Rect;
}
