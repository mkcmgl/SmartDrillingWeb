/**
 * @module geotoolkit3d/scene/well/top/Sphere
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Vector3 } from 'three';
import { MeshColorMapLambertMaterial } from '@int/geotoolkit3d/scene/MeshColorMapLambertMaterial';
/**
 * The ball symbol of well top.
 */
export declare class Sphere extends Object3D {
    /**
     * @param options The options
     */
    constructor(options?: Sphere.Options);
    /**
     * Update Location
     * @param position New position
     */
    updateLocation(position: Vector3): void;
    /**
     * Set options
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: Sphere.Options): this;
    /**
     * Get options
     * @returns options
     */
    getOptions(): Sphere.OptionsOut;
}
export declare namespace Sphere {
    /**
     * The options
     */
    type Options = Object3D.Options & MeshColorMapLambertMaterial.OptionsBase & {
        /**
         * The size of symbol
         */
        size?: number;
        /**
         * Number of horizontal segments. Minimum value is 3
         */
        widthsegments?: number;
        /**
         * Number of vertical segments. Minimum value is 2
         */
        heightsegments?: number;
        /**
         * Specify horizontal starting angle
         */
        phistart?: number;
        /**
         * Specify horizontal sweep angle size
         */
        philength?: number;
        /**
         * Specify vertical starting angle
         */
        thetastart?: number;
        /**
         * Specify vertical sweep angle size
         */
        thetalength?: number;
    };
    type OptionsOut = MeshColorMapLambertMaterial.OptionsBaseOut & Required<Object3D.Options> & {
        /**
         * The size of symbol
         */
        size: number;
    };
}
