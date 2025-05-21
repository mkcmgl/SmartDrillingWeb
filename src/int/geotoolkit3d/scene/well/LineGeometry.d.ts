/**
 * @module geotoolkit3d/scene/well/LineGeometry
 */
import { BufferGeometry, Color } from 'three';
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
/**
 * A line geometry intended to be use for well trajectory representation.<br>
 * <br>
 * This geometry class builds a line's geometry using given xyz values.<br>
 * Each vertex can be colored using the values parameter and a colorprovider.<br>
 */
export declare class LineGeometry extends BufferGeometry {
    /**
     * @deprecated since 4.0, use geotoolkit3d.scene.LineSegments instead
     * @param options The options
     */
    constructor(options: LineGeometry.Options);
    /**
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: LineGeometry.OptionsBase): this;
}
export declare namespace LineGeometry {
    /**
     * The options
     */
    type Options = {
        /**
         * The data options
         */
        data: {
            nullvalue?: number;
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
             * A value attribute used for coloring the trajectory (see options.colorprovider for colormapping)
             */
            values?: number[] | number;
        };
        /**
         * A color provider or a single color in css format
         */
        colorprovider?: ColorProvider | string;
    };
    /**
     * The options
     */
    type OptionsBase = {
        /**
         * A color provider or a single color in css format
         */
        colorprovider?: ColorProvider | string | Color;
    };
}
