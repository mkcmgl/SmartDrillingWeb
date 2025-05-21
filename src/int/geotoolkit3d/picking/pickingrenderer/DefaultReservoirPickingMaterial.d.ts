import { AbstractShaderPickingMaterial } from '@int/geotoolkit3d/picking/pickingrenderer/AbstractShaderPickingMaterial';
import type { InstancedBufferGeometry, Mesh, ShaderMaterialParameters } from 'three';
import type { MeshColorMapBasicMaterial } from '@int/geotoolkit3d/scene/MeshColorMapBasicMaterial';
/**
 * Material used to do renderer picking on a Reservoir mesh.<br>
 *
 * @see {@link @int/geotoolkit3d/picking/pickingrenderer/BasicPickingMaterial~BasicPickingMaterial} For details about picking-material.
 * @see {@link @int/geotoolkit3d/picking/RendererPicking~RendererPicking} For details about picking-renderer.
 */
export declare class DefaultReservoirPickingMaterial extends AbstractShaderPickingMaterial {
    constructor(options: DefaultReservoirPickingMaterial.Options);
}
export declare namespace DefaultReservoirPickingMaterial {
    type Options = ShaderMaterialParameters & {
        /**
         * The material used for picking
         */
        material: MeshColorMapBasicMaterial;
        /**
         * The picked object
         */
        object: Mesh & {
            geometry: AbstractReservoirGeometry;
        };
    };
    /**
     * Because the ReservoirGeometry and GigagridGeometry modules are not accessible, we define their common methods here.
     */
    type AbstractReservoirGeometry = InstancedBufferGeometry & {
        getDataByCell: (cellIndex: number) => PickingCellData;
        type: string;
    };
    type PickingCellData = {
        /**
         * The cell index in the picked reservoir
         */
        index: number;
        /**
         * The cell 8 corners coordinates
         */
        positions: {
            x?: number[];
            y?: number[];
            z?: number[];
        };
        /**
         * The cell value, if applicable
         */
        value?: number;
        /**
         * The cell ijk index position, if picking succeed
         */
        ijk?: IJK;
    };
    /**
     * A IJK structure which represent a value for each I,J, K axes
     */
    type IJK = {
        i: number;
        j: number;
        k: number;
    };
}
