/**
 * @module geotoolkit3d/scene/well/top/Ellipse
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Vector3 } from 'three';
import { MeshColorMapBasicMaterial } from '@int/geotoolkit3d/scene/MeshColorMapBasicMaterial';
/**
 * The ball symbol of well top.
 */
export declare class Ellipse extends Object3D {
    /**
     * @param options The options
     */
    constructor(options?: Ellipse.Options);
    /**
     * Update Location
     * @param position New position
     * @param lookat New lookat
     */
    updateLocation(position: Vector3, lookat: Vector3): void;
    /**
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: Ellipse.Options): this;
}
export declare namespace Ellipse {
    /**
     * The options
     */
    type Options = Object3D.Options & MeshColorMapBasicMaterial.OptionsBase & {
        /**
         * The size of symbol
         */
        size?: number;
    };
}
