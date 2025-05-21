import { AnchoredTransformationAdjustmentStrategy } from '@int/geotoolkit/scene/AnchoredTransformationAdjustmentStrategy';
/**
 * KeepAspectFitBothDimensionsStrategy input transformation adjustment. <br>
 * This keeps aspect ratio based on the options supplied, anchors to given coordinates and transforms visible model limits fit both dimensions. <br>
 * By default, anchors to the center horizontally and vertically.
 */
export declare class KeepAspectFitBothDimensionsStrategy extends AnchoredTransformationAdjustmentStrategy {
    constructor(options?: KeepAspectFitBothDimensionsStrategy.Options);
}
export declare namespace KeepAspectFitBothDimensionsStrategy {
    type Options = AnchoredTransformationAdjustmentStrategy.Options & {
        /**
         * alignment
         */
        alignment?: string;
        /**
         * true, if need anchor, else false
         */
        needanchor?: boolean;
    };
}
