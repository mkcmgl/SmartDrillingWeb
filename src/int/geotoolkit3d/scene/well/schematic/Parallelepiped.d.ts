/**
 * @module geotoolkit3d/scene/well/schematic/Parallelepiped
 */
import { SchematicBase } from '@int/geotoolkit3d/scene/well/schematic/SchematicBase';
import { BoxGeometry } from 'three';
import { TubeGeometry } from '@int/geotoolkit3d/scene/well/TubeGeometry';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * A 3D parallelepiped schematic object.
 */
export declare class Parallelepiped extends SchematicBase {
    constructor(options: Parallelepiped.Options);
    getGeometry(): TubeGeometry | BoxGeometry;
}
export declare namespace Parallelepiped {
    /**
     * The options
     */
    type Options = {
        /**
         * 2 points minimum required; if 2 points are provided the first one is the localisation
         * and the second provide the direction to tend to. If more than 2 points are provided then the points are actual
         * trajectory points around which a 4 side tube will be created.
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
        fillstyle: FillStyle;
        /**
         * The width of the parallelepiped in modelspace (x axis)
         */
        width?: number;
        /**
         * The height of the parallelepiped in modelspace (y axis)
         */
        height?: number;
        /**
         * The length of the parallelepiped in modelspace (used if there is only 2 points in the given path) (z axis)
         */
        depth?: number;
        /**
         * Number of segmented faces along the width of the sides
         */
        widthsegments?: number;
        /**
         * Number of segmented faces along the height of the sides
         */
        heightsegments?: number;
        /**
         * Number of segmented faces along the depth of the sides
         */
        depthsegments?: number;
    };
}
