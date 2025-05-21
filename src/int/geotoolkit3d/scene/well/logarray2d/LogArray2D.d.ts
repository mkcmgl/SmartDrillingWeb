import type { MeshColorMapLambertMaterial } from '@int/geotoolkit3d/scene/MeshColorMapLambertMaterial';
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import { Vector3 } from 'three';
/**
 * LogArray2D is an WellLog where the 'Tube' shape can be customized and defined by a user defined 2D shape.<br>
 * The shape of the tube is provided as a closed path of 2D points, the LogArray2D will then extrude this shape along the trajectory in 3D.<br>
 */
export declare class LogArray2D extends Object3D {
    constructor(options: LogArray2D.Options);
    setOptions(options?: Object3D.Options & LogArray2D.MaterialOptions & LogArray2D.GeometrySetOptions): this;
    getOptions(): Required<Object3D.Options> & LogArray2D.MaterialOptionsOut & LogArray2D.GeometryOptionsOut;
}
export declare namespace LogArray2D {
    type Options = GeometryOptions & MaterialOptions;
    type GeometryOptions = {
        /**
         * Trajectory data
         */
        trajectory: {
            /**
             * x trajectory coordinates
             */
            x: number[];
            /**
             * y trajectory coordinates
             */
            y: number[];
            /**
             * z trajectory coordinates
             */
            z: number[];
            /**
             * values, that can be displayed by colorprovider
             */
            values?: number[];
        };
        /**
         * The tube 2D shape x coordinates.
         */
        projectedshapex: number[];
        /**
         * The tube 2D shape y coordinates.
         */
        projectedshapey: number[];
        /**
         * Up vector, it mustn't be collinear to tube direction at any point
         */
        upvector?: Vector3;
        /**
         * If normalized is false, projected shape coordinates will be used as is (radius of LogArray2D can be bigger or smaller, than radius parameter)
         */
        normalized?: boolean;
        /**
         * If closed is true, last projected shape coordinate will be equal first
         */
        closed?: boolean;
    };
    type GeometrySetOptions = Partial<GeometryOptions>;
    type GeometryOptionsOut = Required<GeometryOptions>;
    type MaterialOptions = MeshColorMapLambertMaterial.Options & ShaderOptions;
    type MaterialOptionsOut = MeshColorMapLambertMaterial.OptionsBaseOut & Required<ShaderOptions>;
    type ShaderOptions = {
        /**
         * Radius of tube
         */
        radius?: number;
    };
}
