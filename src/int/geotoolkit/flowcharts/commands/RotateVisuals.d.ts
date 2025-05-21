import { TransformVisuals } from '@int/geotoolkit/flowcharts/commands/TransformVisuals';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
/**
 * Rotates the visual based on the provided rotation anchor type.
 */
export declare class RotateVisuals extends TransformVisuals {
    /**
     * @param options command options
     */
    constructor(options: RotateVisuals.Options);
}
export declare namespace RotateVisuals {
    /**
     * command options
     */
    type Options = TransformVisuals.Options & {
        /**
         * rotation angle
         */
        angle?: number;
        /**
         * rotation anchor
         * @deprecated since 4.0. Use anchortype instead
         */
        anchor?: AnchorType;
        /**
         * rotation anchor
         */
        anchortype?: AnchorType;
    };
}
