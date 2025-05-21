import { ShaderPass } from '@int/geotoolkit3d/postprocessing/ShaderPass';
/**
 * This class implements fast approximate anti-aliasing.<br>
 */
export declare class FXAARenderPass extends ShaderPass {
    constructor(options?: FXAARenderPass.Options);
    /**
     * Set options
     * @param options the options
     * @returns this
     */
    setOptions(options: FXAARenderPass.OptionsBase): this;
}
export declare namespace FXAARenderPass {
    /**
     * the FXAARenderPass options
     */
    type Options = ShaderPass.Options & OptionsBase;
    /**
     * the options
     */
    type OptionsBase = {
        /**
         * enabled
         */
        enabled?: boolean;
    };
}
