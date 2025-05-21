import { AbstractShaderPickingMaterial } from '@int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial';
import type { ShaderMaterial, ShaderMaterialParameters } from 'three';
/**
 * Material used to do renderer picking on a shader based Mesh.<br>
 * Unlike picking materials based on {@link @int/geotoolkit3d/picking/pickingrenderer/BasicPickingMaterial~BasicPickingMaterial}, this materials does not assumes any uniform exists on the replaced material.<br>
 *
 * @see {@link @int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial~AbstractShaderPickingMaterial} For details about picking-material.
 * @see {@link @int/geotoolkit3d/picking/RendererPicking~RendererPicking} For details about picking-renderer.
 */
export declare class DefaultShaderPickingMaterial extends AbstractShaderPickingMaterial {
    constructor(options: DefaultShaderPickingMaterial.Options);
}
export declare namespace DefaultShaderPickingMaterial {
    type Options = ShaderMaterialParameters & {
        material: ShaderMaterial;
    };
}
