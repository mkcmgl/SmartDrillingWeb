import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * Enum of Polygon data types
 * @deprecated since 4.0
 * @enum
 * @readonly
 */
export declare enum ResultType {
    /**
     * The resulting tolerances (squared)
     */
    Tolerances = 0,
    /**
     * The resulting x-coordinates.
     */
    XCoordinates = 1,
    /**
     * The resulting y-coordinates
     */
    YCoordinates = 2,
    /**
     * The number of points in the result set
     */
    Cardinality = 3,
    /**
     * Association of input and output indices
     */
    IndexAssociations = 4
}
/**
 * Enum of clipping sides
 * @deprecated since 4.0
 * @enum
 * @readonly
 */
export declare enum ClippingSide {
    /**
     * The top side
     */
    Top = 0,
    /**
     * The right side
     */
    Right = 1,
    /**
     * The bottom side
     */
    Bottom = 2,
    /**
     * The left side
     */
    Left = 3
}
/**
 * This utility class performs a various line simplification algorithms
 * @deprecated since 4.0
 */
export declare class PolylineOptimizer {
    /**
     * Determines what points can be removed without compromising the polyline structure. (Douglas-Peucker algorithm)
     * @deprecated since 4.0
     * @param x The x-coordinates of the points
     * @param y The y-coordinates of the points
     * @param size The size of the coordinate arrays to use
     * @param tolerancesArray The tolerance limit
     */
    static reducePoints(x: Float64Array | number[], y: Float64Array | number[], size: number, tolerancesArray: Float64Array | number[]): void;
    /**
     * Filters the unnecessary points using precision data from pre-computed Douglas-Peucker simplification values.
     * @deprecated since 4.0
     * @param x The x-coordinates
     * @param y The y-coordinates
     * @param tolerances The tolerances array.
     * @param size The number of points.
     * @param modelToDevice The model to device transform.
     * @returns filteredResult The resulting filtered coordinates and size.
     */
    static filterByPrecision(x: Float64Array | number[], y: Float64Array | number[], tolerances: Float64Array, size: number, modelToDevice: Transformation): [
        Float64Array,
        Float64Array,
        Float64Array,
        number,
        number[]
    ];
    static getClassName(): string;
    getClassName(): string;
}
