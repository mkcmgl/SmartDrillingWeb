/**
 * Built-in algorithms to compute cartesian coordinates from direction values.<br>
 * These methods compute north, east and tvd values using the inclination-azimuth-md values.<br>
 * The methods implemented use different approach to create a trajectory using the given parameters.
 */
export declare const Method: {
    /**
     * Minimum curvature method computes the path between input points using the DogLeg Severity to calculate displacements.
     */
    MinimumCurvature: (input: Deviation.InputValues, output: Deviation.ComputedResult, tolerance: number) => void;
    /**
     * Radius of curvature method generates a circular arc to connect input points.
     */
    CurvatureRadius: (input: Deviation.InputValues, output: Deviation.ComputedResult, tolerance: number) => void;
    /**
     * Average Angle is a simple approach that uses basic trigonometric function to compute the well path
     */
    AverageAngle: (input: Deviation.InputValues, output: Deviation.ComputedResult) => void;
    /**
     * Balanced tangential is an improved version of the Tangential method.
     */
    BalancedTangential: (input: Deviation.InputValues, output: Deviation.ComputedResult) => void;
};
/**
 * This utility class contains functions to compute survey stations positions (North, East and TVD) from Inclination, Azimuth, MD.<br>
 * @see {@link @int/geotoolkit3d/util/well/Direction~Direction}
 */
export declare class Deviation {
    /**
     * Computes trajectory deviation using specified method.<br>
     * <br>
     * This function can use one of the built-in algorithms to compute x, y, tvd values from inclination, azimuth and measure depth.<br>
     * The returned object contains the trajectory's deviation.<br>
     * 'x' stands for East, 'y' for North and 'tvd' the depth.<br>
     *
     * @param options The method options used for computing the deviation
     * @param input The input values
     * @param [start] Initial deviation point, will not be used as an input for the method but as the starting point.
     * @returns The deviation values
     */
    static computeDeviation(options: Deviation.ComputeOptions, input: Deviation.InputValues, start?: Deviation.InitialPoint): Deviation.ComputedResult;
}
export declare namespace Deviation {
    /**
     * The method options used for computing the deviation
     */
    export type ComputeOptions = {
        /**
         * The method to use to compute the deviation values
         */
        mode?: ComputeCallback;
        /**
         * Epsilon used to determine if a segment is a straight line
         */
        tolerance?: number;
    };
    /**
     * The input values
     */
    export type InputValues = {
        /**
         * The measured depth values
         */
        md: number[];
        /**
         * The inclination values in degrees
         */
        inclination: number[];
        /**
         * The azimuth values in degrees
         */
        azimuth: number[];
    };
    /**
     * Initial deviation point, will not be used as an input for the method but as the starting point.
     */
    export type InitialPoint = {
        /**
         * Initial deviation x value
         */
        x?: number;
        /**
         * Initial deviation y value
         */
        y?: number;
        /**
         * Initial deviation tvd value
         */
        tvd?: number;
    };
    export type ComputedResult = {
        x: number[];
        y: number[];
        tvd: number[];
    };
    type ComputeCallback = (input: InputValues, output: ComputedResult, tolerance?: number) => void;
    export {};
}
