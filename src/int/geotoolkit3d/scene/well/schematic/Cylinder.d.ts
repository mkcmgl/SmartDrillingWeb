/**
 * @module geotoolkit3d/scene/well/schematic/Cylinder
 */
import { SchematicBase } from '@int/geotoolkit3d/scene/well/schematic/SchematicBase';
import { TubeGeometry } from '@int/geotoolkit3d/scene/well/TubeGeometry';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * A 3D cylinder schematic object.
 */
export declare class Cylinder extends SchematicBase {
    constructor(options: Cylinder.Options);
    getGeometry(): TubeGeometry;
}
export declare namespace Cylinder {
    /**
     * The options
     */
    type Options = {
        /**
         * The radius of the cylinder in modelspace
         */
        radius?: number;
        /**
         * The length of the cylinder in modelspace (used if there is only 2 points in the given path)
         */
        depth?: number;
        /**
         * The tube approximation precision
         */
        tubeprecision?: number;
        fillstyle?: FillStyle;
        /**
         * 2 points minimum required; if 2 points are provided the first one is the localisation
         * and the second provide the direction to tend to. If more than 2 points are provided then the points are actual
         * trajectory points around which a tube will be created.
         */
        data: {
            /**
             * The x deviation values
             */
            x: number[];
            /**
             * The y deviation values
             */
            y: number[];
            /**
             * The elevation values
             */
            z: number[];
        };
        width?: number;
    };
}
