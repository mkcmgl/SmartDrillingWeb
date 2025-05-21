/**
 * @module geotoolkit3d/scene/pointset/PointsetMaterial
 */
import { MeshLambertMaterial, Vector3 } from 'three';
/**
 * Instanced Pointset material
 */
export declare class PointsetMaterial extends MeshLambertMaterial {
    constructor(options?: PointsetMaterial.Options);
    setOptions(options: PointsetMaterial.OptionsBase): void;
    /**
     * @param scale the inverse of the plot scale. If user chose not to use inversePlotScale, its value will be (1, 1, 1).
     */
    setInversePlotScale(scale: Vector3): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace PointsetMaterial {
    /**
     * The material options
     */
    type Options = {
        /**
         * if render using transparency blending or not. (transparency can have a considerable performance cost because of depth-peeling)
         */
        transparent?: boolean;
        /**
         * if this material should render using transparency blending or not.
         */
        sizeindevice?: boolean;
    };
    /**
     * The material options
     */
    type OptionsBase = {
        /**
         * if render using transparency blending or not. (transparency can have a considerable performance cost because of depth-peeling)
         */
        transparent?: boolean;
        /**
         * if this material should render using transparency blending or not.
         */
        sizeindevice?: boolean;
    };
}
