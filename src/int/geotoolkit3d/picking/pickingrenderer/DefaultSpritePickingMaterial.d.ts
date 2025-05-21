/**
 * @module geotoolkit3d/picking/pickingrenderer/DefaultSpritePickingMaterial
 */
import { PickingModes } from '@int/geotoolkit3d/Constants';
import type { Object3D, Vector4 } from 'three';
import { SpriteMaterial } from 'three';
import type { Plot } from '@int/geotoolkit3d/Plot';
/**
 * This class implements the renderer-based-picking behavior for Sprites.<br>
 * As Sprites are renderer through the THREE.SpritePlugin, there is no easy way to override the shader used. (r71)<br>
 * <br>
 * This class emulates some of the behavior that should have been in the shader itself.<br>
 * So that renderer pickin can be done on Sprites.<br>
 * Note that this implementation ignores any transparency in the sprite and does picking on the whole area covered by the sprite.<br>
 * <br>
 * @see {@link @int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial~AbstractShaderPickingMaterial} For details about picking-material.
 * @see {@link @int/geotoolkit3d/picking/RendererPicking~RendererPicking} For details about picking-renderer.
 */
export declare class DefaultSpritePickingMaterial extends SpriteMaterial {
    constructor();
    /**
     * Set picking options, note that this setOptions expects all mandatory parameters to be set
     * @param options The picking options
     * @throws Error if no object has been selected
     * @returns this
     */
    setOptions(options: DefaultSpritePickingMaterial.OptionsBase): this;
}
export declare namespace DefaultSpritePickingMaterial {
    /**
     * The picking options
     */
    type OptionsBase = {
        /**
         * The plot
         */
        plot?: Plot;
        /**
         * The x coordinate in device
         */
        x?: number;
        /**
         * The y coordinate in device
         */
        y?: number;
        /**
         * The picking mode
         */
        pickingmode?: PickingModes | number;
        /**
         * The shape unique identifier as RGBA
         */
        pickingrgba?: Vector4;
        /**
         * The objects being picked (mandatory for XYZ)
         */
        candidates?: Object3D[];
    };
}
