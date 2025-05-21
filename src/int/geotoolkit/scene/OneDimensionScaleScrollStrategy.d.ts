/**
 * @module geotoolkit/scene/OneDimensionScaleScrollStrategy
 */
import { ScaleScrollStrategy } from '@int/geotoolkit/scene/ScaleScrollStrategy';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Group } from '@int/geotoolkit/scene/Group';
/**
 * OneDimension scaling modes
 * @enum
 * @readonly
 */
export declare enum Mode {
    /**
     * NoHorizontal
     */
    NoHorizontal = "nohorizontal",
    /**
     * NoVertical
     */
    NoVertical = "novertical"
}
/**
 * OneDimensionScaleScrollStrategy input transformation adjustment. horizontal/vertical part of scaling/scrolling is blocked.
 * Default horizontal part of scaling/scrolling is blocked
 */
export declare class OneDimensionScaleScrollStrategy extends ScaleScrollStrategy {
    constructor(options?: {
        mode?: Mode;
    });
    adjustTransformation(model: Group, newTr: Transformation): Transformation;
}
