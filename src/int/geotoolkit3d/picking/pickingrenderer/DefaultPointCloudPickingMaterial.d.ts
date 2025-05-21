import { AbstractShaderPickingMaterial } from '@int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial';
import type { Points } from 'three';
/**
 * Material used to do renderer picking on a PointCloud.<br>
 *
 * @see {@link @int/geotoolkit3d/picking/pickingrenderer/BasicPickingMaterial~BasicPickingMaterial} For details about picking-material.
 * @see {@link @int/geotoolkit3d/picking/RendererPicking~RendererPicking} For details about picking-renderer.
 */
export declare class DefaultPointCloudPickingMaterial extends AbstractShaderPickingMaterial {
    constructor(options: DefaultPointCloudPickingMaterial.Options);
}
export declare namespace DefaultPointCloudPickingMaterial {
    type Options = AbstractShaderPickingMaterial & {
        material: AbstractShaderPickingMaterial.PointMaterial;
        object: Points;
    };
}
