/**
 * @module geotoolkit3d/postprocessing/FullScreenQuad
 */
import type { Material, WebGLRenderer } from 'three';
/**
 * This utility class implement a full screen mesh, used to render a texture or material in "fullscreen", covering the full area of the render target.
 * Typical uses includes:
 * -copying a texture for duplication,
 * -applying a texture layer onto another (with transparency) such as in {@link @int/geotoolkit3d/postprocessing/DepthPeelingPass~DepthPeelingPass}
 * -applying special effects such as in {@link @int/geotoolkit3d/postprocessing/OutlinePass~OutlinePass}
 */
export declare class FullScreenQuad {
    constructor(material?: Material);
    dispose(): void;
    render(renderer: WebGLRenderer): void;
}
