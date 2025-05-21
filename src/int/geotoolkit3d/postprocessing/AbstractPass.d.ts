/**
 * @module geotoolkit3d/postprocessing/AbstractPass
 */
import type { AnyRecord } from '@int/geotoolkit/base';
import type { WebGLRenderer, WebGLRenderTarget } from 'three';
/**
 * An abstract class for ShaderPass, OutlinePass, and more.<br>
 * The pass that adds to Plot must inherit from this class.<br>
 * Check out three.js examples for more information.
 */
export declare abstract class AbstractPass {
    protected constructor();
    /**
     * Set size for render target
     * @param [width] the width of render target
     * @param [height] the height of render target
     */
    abstract setSize(width?: number, height?: number): this;
    /**
     * Dispose resources in this pass
     */
    abstract dispose(): void;
    /**
     * This render function will be called every time in animation loop
     * @param renderer the webGLrender
     * @param [writeBuffer] the WebGL render target to write
     * @param [readBuffer] the WebGL render target to read
     * @param [deltaTime] delta time
     * @param [maskActive] the flag for stencil buffer in renderer
     */
    abstract render(renderer: WebGLRenderer, writeBuffer?: WebGLRenderTarget, readBuffer?: WebGLRenderTarget, deltaTime?: number, maskActive?: boolean): void;
    setOptions(options?: AnyRecord): this;
    getType(): string;
    isEnabled(): boolean;
    static getClassName(): string;
    getClassName(): string;
}
