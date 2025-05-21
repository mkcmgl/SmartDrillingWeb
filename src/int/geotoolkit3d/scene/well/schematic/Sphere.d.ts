/**
 * @module geotoolkit3d/scene/well/schematic/Sphere
 */
import { SchematicBase } from '@int/geotoolkit3d/scene/well/schematic/SchematicBase';
import { SphereGeometry } from 'three';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Creates a Sphere three.js.
 */
export declare class Sphere extends SchematicBase {
    constructor(options: Sphere.Options);
    getGeometry(): SphereGeometry;
}
export declare namespace Sphere {
    /**
     * The options
     */
    type Options = {
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
        } | {
            /**
             * The x deviation values
             */
            x: number;
            /**
             * The y deviation values
             */
            y: number;
            /**
             * The elevation values
             */
            z: number;
        };
        fillstyle?: FillStyle;
        /**
         * The sphere radius
         */
        radius?: number;
        /**
         * The number of horizontal segments. Minimum value is 3
         */
        widthsegments?: number;
        /**
         * The number of vertical segments. Minimum value is 2
         */
        heightsegments?: number;
        /**
         * The specify horizontal starting angle
         */
        phistart?: number;
        /**
         * The specify horizontal sweep angle size
         */
        philength?: number;
        /**
         * The specify vertical starting angle
         */
        thetastart?: number;
        /**
         * The specify vertical sweep angle size
         */
        thetalength?: number;
    };
}
