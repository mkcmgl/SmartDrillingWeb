/**
 * @module geotoolkit3d/geodata/Trajectory3d
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Vector3 } from 'three';
import type { TrajectoryValue } from '@int/geotoolkit3d/geodata/TrajectoryValue';
/**
 * Class Trajectory3d is used to define trajectory and it provides coordinates of each point along the planned well path.
 * Trajectory contains MD- (measured depth), X- and Y-coordinates along itself.<br>
 * If measured depth is not provided it is calculated from 0 along the path.
 * Note: this class modifies input data arrays. If these data arrays are used later, they should be copied before passing to constructor.
 */
export declare class Trajectory3d extends EventDispatcher {
    /**
     * Create Trajectory3d
     * @param x x-coordinate of the transformed stations
     * @param y y-coordinate of the transformed stations
     * @param z z-coordinate of the transformed stations
     * @param [origin] if xyz coordinates are in deviation from origin
     * @param [d] d-measured depths array for each station will linear calculate estimated depths if not supplied
     * @param [values] values that are associated with this trajectory
     */
    constructor(x: number[], y: number[], z: number[], origin?: Vector3, d?: number[], values?: TrajectoryValue[]);
    /**
     * Gets x-value at specified position
     * @param index index of the station
     * @returns value if found; "undefined" otherwise
     */
    getX(index: number): number;
    /**
     * Gets y-value at specified position
     * @param index index of the station
     * @returns value if found; "undefined" otherwise
     */
    getY(index: number): number;
    /**
     * Gets z-value at specified position
     * @param index index of the station
     * @returns value if found; "undefined" otherwise
     */
    getZ(index: number): number;
    /**
     * Gets MD-value at specified position
     * @param index index of the station
     * @returns value if found; "undefined" otherwise
     */
    getDepth(index: number): number;
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
     * Gets calculated minimal Z-value (convenience method)
     */
    getMinZ(): number;
    /**
     * Gets calculated maximal Z-value (convenience method)
     */
    getMaxZ(): number;
    /**
     * Gets calculated minimal Depth (convenience method)
     */
    getMinDepth(): number;
    /**
     * Gets calculated maximal Depth (convenience method)
     */
    getMaxDepth(): number;
    /**
     * Gets origin
     * @returns origin
     */
    getOrigin(): Vector3;
    /**
     * Gets the points from start to end depths - will return all depths if no parameters passed
     * @param [start] depth to start if returns everything before end
     * @param [end] depth to end
     * @param [radii] radii for generating on depths (depths from start to end)
     * @throws Error if Depth outside of range
     */
    getCoordinatesForDepths(start?: number, end?: number, radii?: {
        radius: number;
        depth: number;
    }[]): Trajectory3d.CoordinatesForDepths;
    /**
     * gets the direction of the trajectory at the requested depth
     * @param [location] depth to start if returns everything before end
     * @param [preferForward] in the case where a depth is on a real position, prefers the forward direction
     * @throws Error if Depth outside of range
     * @returns pos
     */
    getDirectionAtDepth(location?: number, preferForward?: boolean): Vector3;
    /**
     * Gets the interpolated position at the requested depth
     * @param [location] depth for position
     * @throws Error if Depth outside of range
     * @returns pos
     */
    getCoordinateForDepth(location?: number): Vector3;
    /**
     * Gets the points from start to end depths - will return all depths if no parameters passed
     * @param [valueName] name of the value to get
     * @param [start] depth to start if returns everything before end
     * @param [end] depth to end
     * @param [radii] radii for generating on depths (depths from start to end)
     * @throws Error if Depth outside of range
     * @returns values
     */
    getValuesForDepths(valueName?: string, start?: number, end?: number, radii?: {
        radius: number;
        depth: number;
    }[]): number[];
}
export declare namespace Trajectory3d {
    type CoordinatesForDepths = {
        x: number[];
        y: number[];
        z: number[];
        widths: null | number[];
        heights: null | number[];
        origin: Vector3;
    };
}
