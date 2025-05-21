/**
 * @module geotoolkit3d/picking/pickingrenderer/DefaultSeismicSlicePickingMaterial
 */
import { BasicPickingMaterial } from '@int/geotoolkit3d/picking/pickingrenderer/BasicPickingMaterial';
import type { Material } from 'three';
/**
 * Material used to do renderer picking on a Seismic slice.<br>
 *
 * @see {@link @int/geotoolkit3d/picking/pickingrenderer/BasicPickingMaterial~BasicPickingMaterial} For details about picking-material.
 * @see {@link @int/geotoolkit3d/picking/RendererPicking~RendererPicking} For details about picking-renderer.
 */
export declare class DefaultSeismicSlicePickingMaterial extends BasicPickingMaterial {
    constructor(options: DefaultSeismicSlicePickingMaterial.Options);
}
export declare namespace DefaultSeismicSlicePickingMaterial {
    type Options = Omit<BasicPickingMaterial.Options, 'material'> & {
        material: Material[];
    };
}
