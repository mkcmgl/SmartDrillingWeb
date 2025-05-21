/**
 * @module geotoolkit3d/scene/well/schematic/Cube
 */
import { SchematicBase } from '@int/geotoolkit3d/scene/well/schematic/SchematicBase';
import { BoxGeometry } from 'three';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Creates a cube three.js.
 */
export declare class Cube extends SchematicBase {
    constructor(options: Cube.Options);
    getGeometry(): BoxGeometry;
}
export declare namespace Cube {
    /**
     * The options
     */
    type Options = {
        /**
         * 2 points required, the first one is the localisation and the second provide the direction to tend to.
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
        /**
         * Fillstyle used to create the cube's material
         */
        fillstyle?: FillStyle;
        /**
         * Size of the cube in model space
         */
        width?: number;
        /**
         * Number of segmented faces along the width of the sides
         */
        widthsegments?: number;
    };
}
