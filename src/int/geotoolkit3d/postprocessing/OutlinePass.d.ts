/**
 * @module geotoolkit3d/postprocessing/OutlinePass
 */
import type { OrthographicCamera, PerspectiveCamera, Scene, Texture, WebGLRenderer } from 'three';
import { Color, Vector2, WebGLRenderTarget } from 'three';
import { AbstractHighlightPass } from '@int/geotoolkit3d/postprocessing/AbstractHighlightPass';
/**
 * A outline pass that can be used in postprocessing.
 * This pass implements outline effect.
 */
export declare class OutlinePass extends AbstractHighlightPass {
    constructor(options: OutlinePass.Options);
    setOptions(options: OutlinePass.OptionsBase): this;
    dispose(): void;
    setSize(width?: number, height?: number): this;
    render(renderer: WebGLRenderer, writeBuffer?: WebGLRenderTarget, readBuffer?: WebGLRenderTarget, deltaTime?: number, maskActive?: boolean): void;
}
export declare namespace OutlinePass {
    /**
     * the OutlinePass options
     */
    type Options = OptionsBase & {
        scene: Scene;
        camera: PerspectiveCamera | OrthographicCamera;
    };
    type OptionsBase = {
        /**
         * flag to enable highlight
         */
        enabled?: boolean;
        highlight?: OptionsBase;
        resolution?: Vector2;
        /**
         * The color for visible edge
         */
        visiblecolor?: Color;
        /**
         * The color for hidden edge
         */
        hiddencolor?: Color;
        /**
         * The time interval of a pulse effect
         */
        pulseperiod?: number;
        /**
         * If true, show hidden outline in area that other objects clipped the selected object
         */
        hiddenline?: boolean;
        /**
         * The edge thickness
         */
        edgethickness?: number;
        /**
         * Factor for edge strength
         */
        edgestrength?: number;
        /**
         * Factor for glow effect
         */
        edgeglow?: number;
        clearcolor?: Color;
        patterntexture?: Texture;
    };
}
