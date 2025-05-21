/**
 * @module geotoolkit/scene/AnchoredTransformationAdjustmentStrategy
 */
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { ScaleScrollStrategy } from '@int/geotoolkit/scene/ScaleScrollStrategy';
import { ScalingMode } from '@int/geotoolkit/scene/ScalingMode';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Group } from '@int/geotoolkit/scene/Group';
/**
 * AnchoredTransformationAdjustmentStrategy input transformation adjustment <br>
 * Anchors to given coordinates and keeps aspect ratio at scaling if set appropriate option
 *
 * AnchoredTransformationAdjustmentStrategy with its default option `{ keepaspectratio: false }` if data model's visible
 * model limits go beyond entire model limits, output transformation's "translate" components get adjusted to align
 * the model's position according to 'alignment' value. Setting <code>keepAspectRatio</code> on the strategy tells it
 * to keep the same ratio of the adjusted transformation's "scaleY/scaleX".
 */
export declare class AnchoredTransformationAdjustmentStrategy extends ScaleScrollStrategy {
    constructor(options?: AnchoredTransformationAdjustmentStrategy.Options);
    adjustTransformation(model: Group, newLocalTr: Transformation): Transformation;
}
export declare namespace AnchoredTransformationAdjustmentStrategy {
    type Options = {
        /**
         * alignment
         */
        alignment?: AnchorType;
        /**
         * y-scale to x-scale ratio
         */
        aspectratio?: number;
        /**
         * scaling mode
         */
        mode?: ScalingMode;
        /**
         * keep aspect ratio flag
         */
        keepaspectratio?: boolean;
    };
}
