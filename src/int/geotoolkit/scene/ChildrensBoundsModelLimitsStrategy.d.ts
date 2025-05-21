/**
 * @module geotoolkit/scene/ChildrensBoundsModelLimitsStrategy
 */
import { ModelLimitsStrategy } from '@int/geotoolkit/scene/ModelLimitsStrategy';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Defines model as union of the model's children's bounds
 */
export declare class ChildrensBoundsModelLimitsStrategy extends ModelLimitsStrategy {
    adjustModelLimits(model: CompositeNode, modelLimits: Rect): Rect;
}
