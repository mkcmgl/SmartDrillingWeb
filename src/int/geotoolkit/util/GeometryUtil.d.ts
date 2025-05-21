/**
 * @module geotoolkit/util/GeometryUtil
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { GraphicsPath } from '@int/geotoolkit/renderer/GraphicsPath';
import { Point } from '@int/geotoolkit/util/Point';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * Defines helper methods to work with geometries
 */
export declare class GeometryUtil {
    /**
     * Gets bounding box for a geometry defined by arrays of x-ordinates and y-ordinates.
     *
     * @param xx array of numbers (x-values)
     * @param yy array of numbers (y-values)
     */
    static getBoundingBox(xx: number[], yy: number[]): Rect;
    /**
     * Gets bounding box for a geometry defined by array of points
     *
     * @param points array of points
     */
    static getBoundingBox(points: Point[]): Rect;
    /**
     * Gets device size of vector specified in model coordinates
     * @param x x position of vector in model coordinates
     * @param y y position of vector in model coordinates
     * @param [transformation] context transformation
     */
    static getVectorLength(x: number, y: number, transformation?: Transformation): number;
    /**
     * Gets model size of vector specified in device coordinates
     * @param x x position of vector in device coordinates
     * @param y y position of vector in device coordinates
     * @param [transformation] context transformation
     */
    static getVectorLengthInModel(x: number, y: number, transformation?: Transformation): number;
    /**
     * Return rounded border path
     * @param bounds path bounds
     * @param radius corner radius in device model space
     * @param [transformation] device transformation
     * @param [path] graphics path to reuse
     * @param [join] join path
     * @returns graphics path
     */
    static getRoundRect(bounds: Rect, radius: number | GeometryUtil.RoundRectRadius, transformation?: Transformation, path?: GraphicsPath, join?: boolean): GraphicsPath;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace GeometryUtil {
    /**
     * corner radius in device model space
     */
    type RoundRectRadius = {
        /**
         * topleft corner radius in device model space
         */
        topleft?: number | {
            /**
             * topleft corner radius x in device model space
             */
            x?: number;
            /**
             * topleft corner radius y in device model space
             */
            y?: number;
        };
        /**
         * bottomright corner radius in device model space
         */
        bottomright?: number | {
            /**
             * bottomright corner radius x in device model space
             */
            x?: number;
            /**
             * bottomright corner radius y in device model space
             */
            y?: number;
        };
        /**
         * topright corner radius in device model space
         */
        topright?: number | {
            /**
             * topright corner radius x in device model space
             */
            x?: number;
            /**
             * topright corner radius y in device model space
             */
            y?: number;
        };
        /**
         * bottomleft corner radius in device model space
         */
        bottomleft?: number | {
            /**
             * bottomleft corner radius x in device model space
             */
            x?: number;
            /**
             * bottomleft corner radius y in device model space
             */
            y?: number;
        };
    };
}
