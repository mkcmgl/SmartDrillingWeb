import type { Side, Texture } from 'three';
import { ShaderMaterial } from 'three';
/**
 * Label's Material
 */
export declare class LabelMaterial extends ShaderMaterial {
    constructor(options: LabelMaterial.Options);
}
export declare namespace LabelMaterial {
    /**
     * The options
     */
    type Options = {
        /**
         * the texture
         */
        map: Texture;
        /**
         * the label side visibility, can be DoubleSide, FrontSide, BackSide.
         */
        renderside?: Side;
        /**
         * the label opacity from 0 to 1.
         */
        opacity?: number;
    };
}
