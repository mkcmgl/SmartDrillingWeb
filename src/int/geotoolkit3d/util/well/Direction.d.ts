/**
 * Built-in algorithms to compute direction values from cartesian coordinates.<br>
 * These methods compute the inclination-azimuth-md values from the north, east and tvd values.<br>
 * Based on the inverse transformation of the corresponding DeviationUtil.Method algorithm.
 */
export declare const Method: {
    /**
     * Minimum curvature method computes the path between input points using the DogLeg Severity to calculate displacements.
     */
    MinimumCurvature: (input: Direction.InputValues, output: Direction.ComputedResult) => void;
    /**
     * Radius of curvature method generates a circular arc to connect input points.
     */
    CurvatureRadius: (input: Direction.InputValues, output: Direction.ComputedResult, tolerance: number) => void;
    /**
     * Average Angle is a simple approach that uses basic trigonometric function to compute the well path
     */
    AverageAngle: (input: Direction.InputValues, output: Direction.ComputedResult) => void;
    /**
     * Balanced tangential is an improved version of the Tangential method.
     */
    BalancedTangential: (input: Direction.InputValues, output: Direction.ComputedResult) => void;
};
/**
 * This utility class contains functions to compute survey stations angles (Inclination, Azimuth, MD) from North, East and TVD values.<br>
 * @see {@link @int/geotoolkit3d/util/well/Deviation~Deviation}
 */
export declare class Direction {
    /**
     * Computes the direction values using specified method.<br>
     * <br>
     * This function can use one of the built-in algorithms to compute inclination (degrees), azimuth (degrees), md values from x, y and tvd.<br>
     * The returned object contains the trajectory's directions.<br>
     * 'x' stands for East, 'y' for North and 'tvd' the depth.<br>
     *
     * @param options The method options used for computing the deviation
     * @param input The input values
     * @param [start] Initial direction point, will not be used as an input for the method but as the reference direction.
     * @returns The direction values
     */
    static computeDirection(options: Direction.ComputeOptions, input: Direction.InputValues, start?: Direction.InitialPoint): Direction.ComputedResult;
}
export declare namespace Direction {
    /**
     * The method options used for computing the deviation
     */
    export type ComputeOptions = {
        /**
         * The method to use to compute the direction values
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
         * The true vertical depth values
         */
        tvd: number[];
        /**
         * The x values
         */
        x?: number[];
        /**
         * The y values
         */
        y?: number[];
    };
    /**
     * Initial direction point, will not be used as an input for the method but as the reference direction.
     */
    export type InitialPoint = {
        /**
         * Initial inclination in radians
         */
        inclination?: number;
        /**
         * Initial azimuth in radians
         */
        azimuth?: number;
        /**
         * Initial measured depth value
         */
        md?: number;
    };
    export type ComputedResult = {
        inclination?: number[];
        azimuth?: number[];
        md?: number[];
    };
    type ComputeCallback = (input: InputValues, output: ComputedResult, tolerance?: number) => void;
    export {};
}
