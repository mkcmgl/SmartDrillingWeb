import { Transformation } from '@int/geotoolkit/util/Transformation';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { ScaleScrollStrategy } from '@int/geotoolkit/scene/ScaleScrollStrategy';
import type { Group } from '@int/geotoolkit/scene/Group';
/**
 * KeepScaleAspectRatioStrategy input transformation adjustment. Keeps transformation scale when parent bounds were changed,
 * if not possible scales with keeping aspect ratio
 */
export declare class KeepScaleAspectRatioStrategy extends ScaleScrollStrategy {
    constructor(options?: KeepScaleAspectRatioStrategy.Options);
    adjustTransformation(model: Group, newTr: Transformation): Transformation;
    /**
     * Sets scale scroll options
     * @param [options] object
     * @returns this
     */
    setOptions(options?: KeepScaleAspectRatioStrategy.Options): this;
}
export declare namespace KeepScaleAspectRatioStrategy {
    /**
     * object
     */
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
         * true if model limits should be wrapped
         */
        wrapped?: boolean;
    };
}
