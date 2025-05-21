/**
 * @module geotoolkit3d/postprocessing/ShaderPass
 */
import { AbstractPass } from '@int/geotoolkit3d/postprocessing/AbstractPass';
import type { IUniform, WebGLRenderer, WebGLRenderTarget } from 'three';
import { ShaderMaterial } from 'three';
import type { FXAARenderPass } from './FXAARenderPass';
/**
 * This class uses shader program as a renderpass.<br>
 */
export declare class ShaderPass extends AbstractPass {
    constructor(options: ShaderPass.Options);
    setOptions(options: FXAARenderPass.Options): this;
    setSize(width?: number, height?: number): this;
    dispose(): void;
    render(renderer: WebGLRenderer, writeBuffer?: WebGLRenderTarget, readBuffer?: WebGLRenderTarget, deltaTime?: number, maskActive?: boolean): void;
}
export declare namespace ShaderPass {
    /**
     * the ShaderPass options
     */
    export type Options = {
        textureid?: string;
        shader: ShaderMaterial | Shader;
    };
    type Shader = {
        uniforms?: Record<string, IUniform>;
        defines?: Record<string, any>;
        vertexShader: string;
        fragmentShader: string;
    };
    export {};
}
