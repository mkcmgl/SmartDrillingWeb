/**
 * @module geotoolkit3d/scene/well/Vector
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Color, Vector3 } from 'three';
import { TubeGeometry } from '@int/geotoolkit3d/scene/well/TubeGeometry';
/**
 * A well log as a cylinder like 3D shape.<br>
 * <br>
 * This shapes renders a welllog curve as a cylinder with a varying size and color.<br>
 * The diameter and color of the tube will vary for each log curve sample.<br>
 * <br>
 * Note that this object assumes that the given path and curve values have the same sampling.<br>
 */
export declare class Vector extends Object3D {
    constructor(options: Vector.Options);
    setOptions(options?: Vector.OptionsBase): this;
    getOptions(): Vector.OptionsBaseOut;
}
export declare namespace Vector {
    type Options = TubeGeometry.Options & OptionsBase & {
        /**
         * The data options
         */
        data: {
            /**
             * start point
             */
            start: Vector3;
            /**
             * end point
             */
            end: Vector3;
        };
        /**
         * the radius of the vector
         */
        radius?: number;
    };
    type OptionsBase = Object3D.Options & {
        /**
         * A color or a single color in css format
         */
        color?: string | Color;
        /**
         * color for the vector
         * @deprecated since 4.0, please use options.color instead.
         */
        colorprovider?: string | Color;
    };
    type OptionsBaseOut = Required<Object3D.Options> & {
        /**
         * The Color for the Vector.
         */
        color: Color;
    };
}
