import { TransformVisuals } from '@int/geotoolkit/flowcharts/commands/TransformVisuals';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
/**
 * Extends Transform visuals and performs scaling
 */
export declare class ScaleVisuals extends TransformVisuals {
    /**
     * @param options command options
     */
    constructor(options: ScaleVisuals.Options);
}
export declare namespace ScaleVisuals {
    /**
     * command options
     */
    type Options = TransformVisuals.Options & {
        /**
         * the y-axis scale factor
         */
        scalex?: number;
        /**
         * the x-axis scale factor
         */
        scaley?: number;
        /**
         * rotation anchor
         * @deprecated since 4.0. Use anchortype instead
         */
        anchor?: AnchorType;
        /**
         * the anchor type
         */
        anchortype?: AnchorType;
    };
}
