/**
 * @module geotoolkit3d/scene/well/schematic/Cone
 */
import { SchematicBase } from '@int/geotoolkit3d/scene/well/schematic/SchematicBase';
import { CylinderGeometry } from 'three';
/**
 * Creates a cone three.js.
 */
export declare class Cone extends SchematicBase {
    constructor(options: Cone.Options);
    getGeometry(): CylinderGeometry;
}
export declare namespace Cone {
    /**
     * The options
     */
    type Options = SchematicBase.OptionsBase & {
        /**
         * 2 points required; the first one is the localisation and the second provide the direction to tend to.
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
         * Radius of the cylinder at the top
         */
        radiustop?: number;
        /**
         * Radius of the cylinder at the bottom
         */
        radiusbottom?: number;
        /**
         * Height of the cylinder
         */
        height?: number;
        /**
         * Number of segmented faces around the circumference of the cylinder
         */
        radiussegments?: number;
        /**
         * Number of rows of faces along the height of the cylinder
         */
        heightsegments?: number;
        /**
         * A Boolean indicating whether the ends of the cylinder are open or capped
         */
        openended?: boolean;
    };
}
