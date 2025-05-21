/**
 * @module geotoolkit3d/postprocessing/DepthPeelingPass
 */
import type { Camera, ColorRepresentation, Scene, WebGLRenderer } from 'three';
import { WebGLRenderTarget } from 'three';
import { AbstractPass } from '@int/geotoolkit3d/postprocessing/AbstractPass';
import { AntiAliasing } from '@int/geotoolkit3d/Constants';
/**
 * A render pass class that can be used as the first pass in postprocessing.
 * This class make a render with correct transparency.
 * To be precise, depth peeling offer correct transparency at the fragment level, up to a certain number of consecutive
 * transparency on each fragment. For example, depth peeling with N passes will allow up to N transparent fragment to
 * render and blend properly on the same pixel element.
 *
 * This render pass require WebGL2, a version check is included in the shader code below.
 *
 * @public
 */
export declare class DepthPeelingPass extends AbstractPass {
    constructor(options: DepthPeelingPass.Options);
    /**
     * Set options
     * @param [options] options
     */
    setOptions(options?: DepthPeelingPass.OptionsBase): this;
    /**
     * Get options
     * @see {@link import("geotoolkit3d/postprocessing/DepthPeelingPass").DepthPeelingPass.setOptions}
     * @returns options
     */
    getOptions(): DepthPeelingPass.OptionsBaseOut;
    setSize(width?: number, height?: number): this;
    dispose(): void;
    /**
     * @param renderer the webGL renderer.
     * @param writeBuffer the WebGL render target to write.
     * @param readBuffer the WebGL render target to read.
     */
    render(renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget, readBuffer: WebGLRenderTarget): void;
}
export declare namespace DepthPeelingPass {
    /**
     * the DepthPeelingPass options.
     */
    type Options = OptionsBase & {
        /**
         * scene.
         */
        scene: Scene;
        /**
         * camera.
         */
        camera: Camera;
        /**
         * the antialiasing options.
         */
        antialias?: {
            mode?: AntiAliasing;
        };
    };
    /**
     * options
     */
    type OptionsBase = {
        /**
         * the depth peeling renderer options.
         */
        depthpeeling?: DepthPeelingOptions;
        /**
         * the antialiasing options.
         */
        antialias?: {
            /**
             * enable super resolution anti-aliasing.
             * higher number of passes mean more transparent objects can overlap without artifacts, but also will require more
             * renders thus will perform slower (1 overlap per pixel per pass).
             */
            enabled?: boolean;
            /**
             * antialiasing mode, among FXAA, SSAA, SRAA, or AUTO
             */
            mode?: AntiAliasing;
        };
        /**
         * the color used for the scene background.
         */
        clearcolor?: ColorRepresentation;
        /**
         * the scene background opacity.
         */
        clearcoloralpha?: number;
    };
    type OptionsBaseOut = Required<Options>;
    type DepthPeelingOptions = {
        /**
         * the number of depth peeling pass (min 2), more passes means more transparent objects can overlap with correct transparency.
         */
        peelinglevel?: number;
        /**
         * enable the depth peeling rendering for correct transparency.
         */
        enabled?: boolean;
    };
}
