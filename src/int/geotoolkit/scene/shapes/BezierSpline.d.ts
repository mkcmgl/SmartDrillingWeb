/**
 * @module geotoolkit/scene/shapes/BezierSpline
 */
export declare class BezierControlPoints {
    constructor(firstControlPointsX: number[], firstControlPointsY: number[], secondControlPointsX: number[], secondControlPointsY: number[]);
    getPoints(): BezierControlPoints.Type;
}
export declare namespace BezierControlPoints {
    type Type = {
        firstcontrolpointsx: number[];
        firstcontrolpointsy: number[];
        secondcontrolpointsx: number[];
        secondcontrolpointsy: number[];
    };
}
