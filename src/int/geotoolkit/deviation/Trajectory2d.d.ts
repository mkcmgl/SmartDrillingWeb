import { Point } from '@int/geotoolkit/util/Point';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
/**
 * Trajectory2D Events
 * @readonly
 * @enum
 * @events
 */
export declare enum Events {
    /**
     * Raised when the trajectory data has been changed (appended or cleared)
     * @event module:geotoolkit/deviation/Trajectory2d~Events~DataChanged
     */
    DataChanged = "DataChanged"
}
/**
 * Class Trajectory2d is used to define trajectory and it provides coordinates of each point along the planned well path.
 * Trajectory contains MD- (measured depth), X- and Y-coordinates along itself.<br>
 * If measured depth is not provided it is calculated from 0 along the path.
 */
export declare class Trajectory2d extends EventDispatcher {
    /**
     * Creates a new instance of {@link @int/geotoolkit/deviation/Trajectory2d~Trajectory2d} class
     * @param [options] object containing data and options
     */
    constructor(options?: Trajectory2d.Options);
    /**
     * Creates a new instance of {@link @int/geotoolkit/deviation/Trajectory2d~Trajectory2d} class
     * @param [x] x-coordinate of the transformed stations
     * @param [y] y-coordinate of the transformed stations
     * @param [d] d-measured depths array for each station
     */
    constructor(x: number[], y: number[], d: number[]);
    on<E extends keyof Trajectory2d.EventMap>(type: E, callback: (eventType: E, sender: this, args: Trajectory2d.EventMap[E]) => void): this;
    off<E extends keyof Trajectory2d.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Trajectory2d.EventMap[E]) => void): this;
    notify<E extends keyof Trajectory2d.EventMap>(type: E, source: Trajectory2d, args?: Trajectory2d.EventMap[E]): this;
    /**
     * Creates or gets {@link @int/geotoolkit/deviation/Trajectory2d~Trajectory2d} instance from object
     *
     * @param [object] object can be in format of constructor
     */
    static fromObject(object: {
        x: number[];
        y: number[];
        md: number[];
        id?: string;
    } | null | Trajectory2d): Trajectory2d | null;
    /**
     * Interpolates (x;y)-point at MD-value
     * @param md MD-value
     * @param [pt] point to put (x;y) in
     * @returns interpolated point; or null if trajectory too short
     */
    interpolateXY(md: number, pt?: Point): Point | null;
    /**
     * Gets x-value at specified position
     * @param index index of the station
     * @returns value if found; "undefined" otherwise
     */
    getX(index: number): number;
    /**
     * Gets x-values array
     */
    getArrayX(): number[];
    /**
     * Gets y-value at specified position
     * @param index index of the station
     * @returns value if found; "undefined" otherwise
     */
    getY(index: number): number;
    /**
     * Gets y-values array
     */
    getArrayY(): number[];
    /**
     * Gets MD-value at specified position
     * @param index index of the station
     * @returns value if found; "undefined" otherwise
     */
    getDepth(index: number): number;
    /**
     * Gets MD-values array
     */
    getDepths(): number[];
    /**
     * Gets number of stations in the trajectory
     * @returns number of stations
     */
    count(): number;
    /**
     * Gets calculated minimal MD
     * @returns minimal MD
     */
    minDepth(): number;
    /**
     * Gets calculated maximal MD
     * @returns maximal MD
     */
    maxDepth(): number;
    /**
     * Creates trajectory from arrays of measured depths,inclinations and azimuths.
     *
     * @param arg an array of the measured depth or object containing data and options
     * @param [inclination] an array of the inclinations
     * @param [azimuth] an array of azimuths. (not used now)
     * @param [rightDeviation] rightDeviation means trjajectory goes from north-west to south-east with
     * positive inclination angle
     * @param [start] start index
     * @param [filter] if true, perform filtering of redundant points.
     * Removes any points, which could be removed safely, keeping the trajectory geometry and measured depth binding:<br>
     * 1. If two points have the same coordinates, it keeps the second point only <br>
     * 2. If two points have the same MD value, it keeps the second point only <br>
     * 3. If three points belong to a same line in a natural order (i.e. second point positioned between 1st and 3rd),<br>
     * and MD value of middle point corresponds to the point position, it removes the middle point<br>
     * NOTE: The rules are applied recursively
     * @param [approximate] flag set to enable approximation of the trajectory along the path
     * @returns trajectory
     */
    static createTrajectory(arg: Trajectory2d.CreateTrajectoryArg | number[], inclination?: number[], azimuth?: number[], rightDeviation?: boolean, // eslint-disable-line max-params
    start?: number, filter?: boolean, approximate?: boolean): Trajectory2d;
    /**
     * Gets calculated minimal x-value (convenience method)
     */
    getMinX(): number;
    /**
     * Gets calculated minimal y-value (convenience method)
     */
    getMinY(): number;
    /**
     * Gets calculated maximal x-value (convenience method)
     */
    getMaxX(): number;
    /**
     * Gets calculated maximal y-value (convenience method)
     */
    getMaxY(): number;
    /**
     * Checks for trajectories equality
     * @param trajectory other trajectory
     */
    equals(trajectory: Trajectory2d): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Trajectory2d.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param props properties
     * @returns this
     */
    setProperties(props?: Trajectory2d.Options): this;
    /**
     * Adds new trajectory station to the end of trajectory
     * @param x the transformed station x-coordinate
     * @param y the transformed station y-coordinate
     * @param md the transformed station measured depth
     */
    add(x: number, y: number, md?: number): this;
    /**
     * Adds a trajectory stations array to the end of trajectory
     * @param x the transformed station x-coordinate array
     * @param y the transformed station y-coordinate array
     * @param md the transformed station measured depth array
     */
    add(x: number[], y: number[], md?: number[]): this;
    /**
     * Removes first `count` stations from a trajectory
     * @param count an integer indicating the number of stations to remove.
     * If `count` is greater than or equal to the number of stations,
     * then all the stations will be deleted. If `count` is 0 or negative, no stations are removed.
     */
    shift(count: number): this;
    /**
     * Removes all the trajectory stations
     */
    clear(): this;
    /**
     * Fires the {@link @int/geotoolkit/deviation/Trajectory2d~Events~DataChanged} event
     */
    protected onDataChanged(): void;
}
export declare namespace Trajectory2d {
    /**
     * object containing data and options
     */
    type Options = {
        /**
         * data section
         */
        data?: {
            /**
             * x-coordinate of the transformed stations
             */
            x?: number[];
            /**
             * y-coordinate of the transformed stations
             */
            y?: number[];
            /**
             * d-measured depths array for each station
             */
            d?: number[];
        };
        /**
         * options section
         */
        options?: {
            /**
             * flag set to enable approximation of the trajectory along the path
             */
            approximate?: boolean;
            /**
             * threshold depth interval
             */
            depthinterval?: number;
            /**
             * units options section
             */
            units?: {
                /**
                 * distance (vertical and horizontal) unit
                 */
                distance?: string | AbstractUnit;
                /**
                 * horizontal unit
                 * (use if units for "x" and "y" are different)
                 */
                x?: string | AbstractUnit;
                /**
                 * vertical unit
                 * (use if units for "x" and "y" are different)
                 */
                y?: string | AbstractUnit;
            };
        };
    };
    /**
     * An object containing the properties to set
     */
    type UnitsOptions = {
        /**
         * distance ("x" and "y") units
         */
        distance?: string | AbstractUnit;
        /**
         * horizontal unit
         * (use if units for "x" and "y" are different)
         */
        x?: string | AbstractUnit;
        /**
         * vertical unit
         * (use if units for "x" and "y" are different)
         */
        y?: string | AbstractUnit;
    };
    /**
     * an array of the measured depth or object containing data and options
     */
    type CreateTrajectoryArg = {
        /**
         * data section
         */
        data: {
            /**
             * md-values array
             */
            md: number[];
            /**
             * inclination-values array
             */
            inclination: number[];
        };
        /**
         * options section
         */
        options?: {
            /**
             * rightDeviation means trajectory goes from north-west to south-east with
             * positive inclination angle
             */
            rightdeviation?: boolean;
            /**
             * start index
             */
            start?: number;
            /**
             * if true, perform filtering of redundant points.
             */
            filter?: boolean;
            /**
             * flag set to enable approximation of the trajectory along the path
             */
            approximate?: boolean;
            /**
             * threshold depth interval
             */
            depthinterval?: number;
            /**
             * units options section
             */
            units?: {
                /**
                 * distance (TVD and horizontal) unit
                 */
                distance?: string | AbstractUnit;
                /**
                 * angle unit
                 */
                angle?: string | AbstractUnit;
            };
            /**
             * cut-off MD-range
             */
            md?: {
                /**
                 * cut-off min MD-value
                 */
                min?: number;
                /**
                 * cut-off max MD-value
                 */
                max?: number;
            };
        };
    };
    /**
     * object containing data and options
     */
    type OptionsOut = {
        /**
         * data section
         */
        data: {
            /**
             * x-coordinate of the transformed stations
             */
            x: number[];
            /**
             * y-coordinate of the transformed stations
             */
            y: number[];
            /**
             * d-measured depths array for each station
             */
            d: number[];
        };
        /**
         * options
         */
        options?: {
            /**
             * flag set to enable approximation of the trajectory along the path
             */
            approximate?: boolean;
            /**
             * threshold depth interval
             */
            depthinterval?: number;
            /**
             * units options section
             */
            units?: {
                /**
                 * distance (vertical and horizontal) unit
                 */
                distance?: string | AbstractUnit;
                /**
                 * horizontal unit
                 */
                x?: string | AbstractUnit;
                /**
                 * vertical unit
                 */
                y?: string | AbstractUnit;
            };
        };
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.DataChanged]: null;
    };
}
