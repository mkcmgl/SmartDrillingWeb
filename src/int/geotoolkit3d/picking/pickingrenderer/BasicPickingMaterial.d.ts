import type { Material, ShaderMaterialParameters } from 'three';
import { AbstractShaderPickingMaterial } from '@int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial';
/**
 * Basic implementation of a picking material.<br>
 * This material assumes that the material used for rendering is using the common features of THREEJS (common uniforms).<br>
 * This class combines the features provided by {@link @int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial~AbstractShaderPickingMaterial} to create a working picking material.<br>
 * However, even if this material is fully operational, it's not used directly.<br>
 * It's inherited by default implementations of picking materials which are used in place of this raw/basic class.<br>
 *
 * @see {@link @int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial~AbstractShaderPickingMaterial} For details about picking-material.
 * @see {@link @int/geotoolkit3d/picking/RendererPicking~RendererPicking} For details about picking-renderer.
 */
export declare class BasicPickingMaterial extends AbstractShaderPickingMaterial {
    constructor(options: BasicPickingMaterial.Options);
}
export declare namespace BasicPickingMaterial {
    type Options = ShaderMaterialParameters & {
        material: Material;
    };
}
