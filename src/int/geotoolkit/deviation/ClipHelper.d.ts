import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Clip helper class
 */
export declare class ClipHelper {
    /**
     * Find a point as intersection of two arrays of points
     * @param pointsPri first array of points
     * @param pointsSec second array of points
     */
    static intersectLines(pointsPri: Point[], pointsSec: Point[]): Point | null;
    static getClassName(): string;
    getClassName(): string;
}
