import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { MappedPixel } from '@int/geotoolkit/deviation/MappedPixel';
/**
 * Abstract class to represent nonaffine transformation from a linear 2D-space to a deviated space.
 */
export declare abstract class DeviatedTransformation {
    /**
     * Updates itself
     * @param transformation context transformation
     */
    abstract update(transformation: Transformation): boolean;
    /**
     * Transforms point from linear to deviated space
     * @param point point to transform
     * @param [transformation] affine transformation
     * @returns transformed point
     */
    abstract transform(point: Point, transformation?: Transformation): Point;
    /**
     * Transforms point from deviated to linear space
     * @param point point to transform
     * @returns transformed point
     */
    abstract inverseTransform(point: Point): Point;
    /**
     * Transforms line from linear to deviated space
     * @param start start point
     * @param end end point
     * @param destination destination polyline's array
     * @param [transformation] affine transformation
     */
    abstract transformLine(start: Point, end: Point, destination: Point[], transformation?: Transformation): void;
    /**
     * Transforms polyline (or polygon) from linear to deviated space
     * @param points source polyline's (or polygon's) points
     * @param destination destination polyline's (or polygon's) array
     * @param transformation affine transformation
     * @param [isClosed] isclosed flag
     */
    abstract transformLines(points: Point[], destination: Point[], transformation: Transformation, isClosed?: boolean): void;
    /**
     * Gets bounds in linear space corresponding to deviated rect
     * @param rect rectangular area in deviated space
     * @returns bounds in linear space (if found); empty rectangle otherwise
     */
    abstract findBounds(rect: Rect): Rect;
    /**
     * Returns union of all station's bounds
     */
    abstract getStationsBounds(): Rect;
    /**
     * Returns affine transformation
     */
    abstract getAffineTransformation(): Transformation;
    /**
     * Checks if a canvas point is contained in the deviated area
     * @param point point in canvas
     */
    abstract contains(point: Point): boolean;
    /**
     * Gets x-scale at the point
     * @param point point to transform
     */
    abstract scaleXAt(point: Point): number;
    /**
     * Gets y-scale at the point
     * @param point point to transform
     */
    abstract scaleYAt(point: Point): number;
    /**
     * Gets scale statistics
     */
    getScalesInfo(): DeviatedTransformation.ScaleStatistics;
    /**
     * Gets max x-scale
     */
    protected abstract maxScaleX(): number;
    /**
     * Gets max y-scale
     */
    protected abstract maxScaleY(): number;
    /**
     * Gets min x-scale
     */
    protected abstract minScaleX(): number;
    /**
     * Gets min y-scale
     */
    protected abstract minScaleY(): number;
    /**
     * Gets the list of 1x1 size rectangles in model space, covered by the
     * 1x1 rectangle in device space with specified anchor, along with the relative
     * weights of model space rectangle areas within the device space rectangle area
     * @param pt model point
     * @param [yscale] yscale
     */
    abstract digitize(point: Point, yscale?: number): MappedPixel;
    /**
     * Gets index of segment of deviation for the depth value
     * It is the position of the first occurrence of value.
     * If no such item is found, returns the position to insert at.
     * @param value depth value
     * @returns index
     */
    protected abstract getLowerIndex(value: number): number;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace DeviatedTransformation {
    type ScaleStatistics = {
        /**
         * min x-scale
         */
        xmin: number;
        /**
         * min y-scale
         */
        ymin: number;
        /**
         * mean square x-scale
         */
        xmean: number;
        /**
         * mean square y-scale
         */
        ymean: number;
        /**
         * max x-scale
         */
        xmax: number;
        /**
         * max y-scale
         */
        ymax: number;
    };
}
