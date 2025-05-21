import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Vector3 } from 'three';
import type { FenceMaterial } from '@int/geotoolkit3d/scene/seismic/FenceMaterial';
import type { IndexCoordinates } from '@int/geotoolkit3d/transformation/IndexCoordinates';
import { ITiledSurface } from '@int/geotoolkit3d/scene/seismic/ITiledSurface';
import type { SliceMaterial } from '@int/geotoolkit3d/scene/seismic/SliceMaterial';
/**
 * A seismic fence object.<br>
 * <br>
 * A seismic fence is the cross-section along a given 2D arbitrary path.<br>
 * It's composed of contiguous seismic panels that form a fence.<br>
 */
export declare class FencePanel extends Object3D implements ITiledSurface {
    constructor(options: FencePanel.Options);
    /**
     * Set this FencePanel options
     */
    setOptions(options?: FencePanel.OptionsBase): this;
    /**
     * Get this FencePanel options
     */
    getOptions(): FencePanel.OptionsBaseOut;
    /**
     * Get the Fences's material
     * @returns This slice's material
     */
    getFenceMaterial(): FenceMaterial;
    /**
     * Return the world position of a specific corner of this panel quad.
     * The indices represent the 4 corners of the quad like so:
     * 0---1
     * |   |
     * 2---3
     * If this panel (or a parent object) has been moved/rotated since the last render,
     * please call Fence.updateWorldMatrix(true, true), or FencePanel.updateWorldMatrix(true, true) first for correct results.
     * (Updating the Fence will update all its children FencePanel at once.)
     * @param index Index of the panel quad, from 0 to 3.
     * @param target Optional point Vector3, will be updated and returned if provided.
     */
    getCorner(index: number, target?: Vector3): Vector3;
    /**
     * Return the local position of a specific corner of this panel quad.
     * The indices represent the 4 corners of the quad like so:
     * 0---1
     * |   |
     * 2---3
     * If the fence is made of several subquads (using tiles) the corners will still represent the global panel, not just a subquad.
     * @param index Index of the panel quad, from 0 to 3.
     * @param target Optional point Vector3, will be updated and returned if provided.
     */
    getLocalCorner(index: number, target?: Vector3): Vector3;
    /**
     * Dispose method for FencePanel
     */
    dispose(): void;
    resetTiles(): void;
}
export declare namespace FencePanel {
    type Options = OptionsBase & {
        /**
         * The slice's material containing the seismic textures
         */
        material: FenceMaterial;
        /**
         * data
         */
        data: {
            /**
             * index coordinates
             */
            index: IndexCoordinates;
            /**
             * The fence coordinates
             */
            path: {
                /**
                 * The inline indices of the fence
                 */
                i?: number[];
                /**
                 * The xline indices of the fence
                 */
                j?: number[];
            };
        };
    };
    type OptionsBase = Object3D.Options & SliceMaterial.OptionsBase;
    type OptionsBaseOut = Required<Object3D.Options> & SliceMaterial.OptionsBaseOut;
}
