/**
 * @module geotoolkit3d/scene/well/TubeGeometry
 */
import { BufferGeometry } from 'three';
import type { Merge } from '@int/geotoolkit/base';
/**
 * A Tube-like geometry.<br>
 * <br>
 * This geometry generates the vertices required to render an elliptic tube.<br>
 * Width and height of the ellipses may vary as well as its rotation around its normal.<br>
 * <br>
 * This is intended to be used for advanced/complex scenarios that require those capabilities.
 */
export declare class TubeGeometry extends BufferGeometry {
    /**
     * @param options The options
     */
    constructor(options: TubeGeometry.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param options The options
     * @returns this
     */
    setOptions(options: TubeGeometry.OptionsBase): this;
    /**
     * Get options
     * @returns options
     */
    getOptions(): TubeGeometry.OptionsBaseOut;
    /**
     * Function to compute the bounding box
     */
    computeBoundingBox(): void;
}
export declare namespace TubeGeometry {
    /**
     * The options
     */
    export type Options = {
        /**
         * The data options
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
            /**
             * Radiuses of the ellipsis for the East-West axis (For first ellipsis)
             */
            widths?: number[] | number;
            /**
             * Radiuses of the ellipsis North-South axis (For first ellipsis)
             */
            heights?: number[] | number;
            /**
             * Rolling angles in radians
             */
            rolls?: number[] | number;
            /**
             * A value attribute used for coloring the trajectory (see options.colorprovider)
             */
            values?: number[];
        };
        /**
         * tube size factor
         */
        size?: number;
        /**
         * The minimum radius, this is used as a size factor applied to the ellipses
         */
        radiusmin?: number;
        /**
         * The maximum radius, this is used as a size factor applied to the ellipses
         */
        radiusmax?: number;
        /**
         * The ellipsis shape is approximated using triangles. This factor is used to define how many triangles will be used for the approximation.
         */
        tubeprecision?: number;
        /**
         * False if the tube should have a cap at both ends
         */
        openended?: boolean;
        /**
         * calculate tube using Frenet Frames
         */
        usefrenet?: boolean;
    };
    /**
     * The options
     */
    export type OptionsBase = {
        /**
         * The data options
         */
        data?: Partial<Data>;
        /**
         * tube size factor
         */
        size?: number;
        /**
         * The minimum radius, this is used as a size factor applied to the ellipses
         */
        radiusmin?: number;
        /**
         * The maximum radius, this is used as a size factor applied to the ellipses
         */
        radiusmax?: number;
        /**
         * The ellipsis shape is approximated using triangles. This defines how many segments will be used for the approximation.
         */
        tubeprecision?: number;
        /**
         * False if the tube should have a cap at both ends
         */
        openended?: boolean;
        /**
         * calculate tube using Frenet Frames
         */
        usefrenet?: boolean;
    };
    export type OptionsBaseOut = Merge<Required<OptionsBase>, {
        data: Data;
    }>;
    type Data = {
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
        /**
         * Radiuses of the ellipsis for the East-West axis (For first ellipsis)
         */
        widths: number[] | number;
        /**
         * Radiuses of the ellipsis North-South axis (For first ellipsis)
         */
        heights: number[] | number;
        /**
         * Rolling angles in radians
         */
        rolls: number[] | number;
        /**
         * A value attribute used for coloring the trajectory (see options.colorprovider)
         */
        values: number[];
    };
    export {};
}
