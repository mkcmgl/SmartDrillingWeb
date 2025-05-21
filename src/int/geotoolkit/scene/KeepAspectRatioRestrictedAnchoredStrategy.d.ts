import { AnchoredTransformationAdjustmentStrategy } from '@int/geotoolkit/scene/AnchoredTransformationAdjustmentStrategy';
/**
 * KeepAspectRatioRestrictedAnchoredStrategy input transformation adjustment. <br>
 * This keeps aspect ratio based on the options supplied and also aligns the model bounds.
 */
export declare class KeepAspectRatioRestrictedAnchoredStrategy extends AnchoredTransformationAdjustmentStrategy {
    constructor(options?: KeepAspectRatioRestrictedAnchoredStrategy.Options);
}
export declare namespace KeepAspectRatioRestrictedAnchoredStrategy {
    type Options = AnchoredTransformationAdjustmentStrategy.Options & {
        /**
         * minimum visible horizontal part of model [0;1]
         */
        minvisiblehorizontalpart?: number;
        /**
         * minimum visible vertical part of model [0;1]
         */
        minvisibleverticalpart?: number;
        /**
         * true, if need anchor, else false
         */
        needanchor?: boolean;
    };
}
