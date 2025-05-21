/**
 * @module geotoolkit3d/postprocessing/HighlightPass
 */
import { AbstractHighlightPass } from '@int/geotoolkit3d/postprocessing/AbstractHighlightPass';
import type { Object3D as ThreeObject3D, WebGLRenderer, WebGLRenderTarget } from 'three';
/**
 * Implementation of highlight meshes with edges
 */
export declare class HighlightPass extends AbstractHighlightPass {
    constructor(options?: HighlightPass.Options);
    /**
     * Set options
     * @param [options] options
     * @returns this
     */
    setOptions(options?: HighlightPass.OptionsBase): this;
    /**
     * Get options
     * @see {@link import("geotoolkit3d/postprocessing/HighlightPass").HighlightPass.setOptions}
     * @returns options
     */
    getOptions(): HighlightPass.OptionsBaseOut;
    /**
     * Clears highlighted objects
     */
    clearSelectedObjects(): void;
    /**
     * Add new object to highlight
     * @param object object to highlight
     */
    addSelectedObjects(object: ThreeObject3D): void;
    render(renderer: WebGLRenderer, writeBuffer?: WebGLRenderTarget, readBuffer?: WebGLRenderTarget, deltaTime?: number, maskActive?: boolean): void;
    setSize(width?: number, height?: number): this;
    dispose(): void;
}
export declare namespace HighlightPass {
    /**
     * options
     */
    type Options = OptionsBase;
    /**
     * options object
     */
    type OptionsBase = {
        /**
         * enabled
         */
        enabled?: boolean;
        highlight?: OptionsBase;
    };
    type OptionsBaseOut = Required<Omit<OptionsBase, 'highlight'>>;
}
