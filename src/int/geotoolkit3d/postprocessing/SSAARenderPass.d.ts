/**
 * @module geotoolkit3d/postprocessing/SSAARenderPass
 */
import type { ColorRepresentation, OrthographicCamera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { WebGLRenderTarget } from 'three';
import { AbstractPass } from '@int/geotoolkit3d/postprocessing/AbstractPass';
/**
 * A render pass class that can be used as the first pass in postprocessing.
 * This class implements super-sampling anti-aliasing.
 */
export declare class SSAARenderPass extends AbstractPass {
    constructor(options: SSAARenderPass.Options);
    setOptions(options: SSAARenderPass.OptionsBase): this;
    setSize(width?: number, height?: number): this;
    dispose(): void;
    render(renderer: WebGLRenderer, writeBuffer?: WebGLRenderTarget, readBuffer?: WebGLRenderTarget, deltaTime?: number, maskActive?: boolean): void;
}
export declare namespace SSAARenderPass {
    /**
     * the SSAARenderPass options
     */
    type Options = OptionsBase & {
        scene: Scene;
        camera: PerspectiveCamera | OrthographicCamera;
    };
    type OptionsBase = {
        antialias?: OptionsBase;
        enabled?: boolean;
        clearcolor?: ColorRepresentation;
        clearcoloralpha?: number;
        unbiased?: boolean;
        samplelevel?: number;
    };
}
