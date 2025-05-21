/**
 * @module geotoolkit3d/scene/well/LogFill2D
 */
import { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { Merge } from '@int/geotoolkit/base';
import { OffsetMode } from '@int/geotoolkit3d/util/well/Well';
import type { Color } from 'three';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
/**
 * A log fill displayed as a 2D shape along a wellpath.<br>
 * <br>
 * This class will create the required geometry and material to represent a fill going from the given curve to the other curve.<br>
 * Like a regular LogFill, this also supports reference values instead of curves.<br>
 * Note that the resulting geometry may contains extra vertex to deal with curves intersection.<br>
 *
 * This class renders a LogCurve along a trajectory in a similar way of what the WellLogJS toolkit does.<br>
 * In order for the user to see the 2D curve it's always projected toward the camera.<br>
 * Which means that when the user moves the camera the log will try to adapt its representation to be as much visible as possible.<br>
 * However that also means that some camera angles will not be ideal to look at the log.<br>
 * Typically when the camera and the trajectory path are aligned.<br>
 * This algorithm is implemented at the shader level to ensure best performances.<br>
 * <br>
 * Note that curvemin&curvemax options are not supported for dual curve fill (if both values1 and values2 are curves).
 */
export declare class LogFill2D extends Object3D {
    constructor(options: LogFill2D.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param [options] The options
     * @returns this
     */
    setOptions(options?: LogFill2D.Options): this;
    /**
     * Get options
     * (see {@link import("geotoolkit3d/scene/well/LogFill2D").LogFill2D.setOptions} for more info)
     * @returns options
     */
    getOptions(): LogFill2D.OptionsOut;
}
export declare namespace LogFill2D {
    /**
     * The options
     */
    export type Options = Object3D.Options & {
        /**
         * The trajectory data
         */
        data?: Data;
        /**
         * The lower normalisation limit, any value lesser than this will be clamped
         */
        curvemin?: number;
        /**
         * The upper normalisation limit, any value greater than this will be clamped
         */
        curvemax?: number;
        /**
         * The radius factor to apply, this will increase the fill amplitude on screen.
         */
        radius?: number;
        /**
         * An offset value to shift the fill location by 'n' times the radius. Use negative value to display the fill on the left of the path
         */
        offset?: number;
        /**
         * Defines the curve behavior when offset is negative. See {@link @int/geotoolkit3d/util/well/Well~OffsetMode}
         */
        offsetmode?: OffsetMode;
        /**
         * A single color in css format (Used if no positive/negative color is set)
         */
        colorprovider?: ColorProvider | Color | string;
        /**
         * The color for positive log curve, if provided
         */
        positivecolor?: Color | string;
        /**
         * The color for negative log curve, if provided
         */
        negativecolor?: Color | string;
    };
    export type OptionsOut = Merge<Required<Options>, {
        data: Required<Data>;
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
         * The log curve1 values or a reference value in range [0,1]
         */
        curvevalues1?: number[] | number;
        /**
         * The curvevalues1's nullvalue
         */
        nullvalue1?: number;
        /**
         * The log curve2 values or a reference value in range [0,1]
         */
        curvevalues2?: number[] | number;
        /**
         * The curvevalues2's nullvalue
         */
        nullvalue2?: number;
        /**
         * Optional attribute used for coloring the trajectory per vertex
         */
        colorvalues?: number[] | number;
        /**
         * The values's nullvalue
         */
        nullvalue?: number;
    };
    export {};
}
