import { PointType } from '@int/geotoolkit/renderer/GraphicsPath';
/**
 * Class to store Bezier segment
 */
export declare class BezierSegment {
    /**
     * @param x1 x1
     * @param y1 y1
     * @param x2 x2
     * @param y2 y2
     * @param x3 x3
     * @param y3 y3
     * @param x4 x4
     * @param y4 y4
     */
    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number);
    getX1(): number;
    getY1(): number;
    getX2(): number;
    getY2(): number;
    getX3(): number;
    getY3(): number;
    getX4(): number;
    getY4(): number;
    getType(): PointType;
    setX1(val: number): void;
    setY1(val: number): void;
    setX2(val: number): void;
    setY2(val: number): void;
    setX3(val: number): void;
    setY3(val: number): void;
    setX4(val: number): void;
    setY4(val: number): void;
}
/**
 * Helper class
 */
export declare class Util {
    /**
     * Helper method to get ellipse Bezier reference points
     * @param x center x coordinate
     * @param y center y coordinate
     * @param width width of ellipse
     * @param height height of ellipse
     * @param [counterclockwise] counterclockwise
     * @returns segments segments array
     */
    static getEllipseBezierReferencePoints(x: number, y: number, width: number, height: number, counterclockwise?: boolean): BezierSegment[];
}
