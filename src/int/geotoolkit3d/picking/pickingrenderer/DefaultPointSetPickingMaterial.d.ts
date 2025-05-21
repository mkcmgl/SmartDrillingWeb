import { AbstractShaderPickingMaterial } from '@int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial';
import type { ShaderMaterialParameters } from 'three';
import type { ObjectWithMaterial } from '@int/geotoolkit3d/scene/ObjectWithMaterial';
/**
 * Material used to do renderer picking on an instanced PointSet.<br>
 *
 * @see {@link @int/geotoolkit3d/picking/pickingrenderer/BasicPickingMaterial~BasicPickingMaterial} For details about picking-material.
 * @see {@link @int/geotoolkit3d/picking/RendererPicking~RendererPicking} For details about picking-renderer.
 */
export declare class DefaultPointSetPickingMaterial extends AbstractShaderPickingMaterial {
    constructor(options: DefaultPointSetPickingMaterial.Options);
}
export declare namespace DefaultPointSetPickingMaterial {
    type Options = ShaderMaterialParameters & {
        material: AbstractShaderPickingMaterial.PointMaterial;
        object: ObjectWithMaterial;
    };
}
