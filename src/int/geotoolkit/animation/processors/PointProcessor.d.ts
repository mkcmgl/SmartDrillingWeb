import { AbstractProcessor } from '@int/geotoolkit/animation/processors/AbstractProcessor';
import { Point } from '@int/geotoolkit/util/Point';
/**
 * Can process {@link @int/geotoolkit/util/Point~Point} points
 */
export declare class PointProcessor extends AbstractProcessor<Point> {
    process(from: Point, to: Point, out: Point, func: AbstractProcessor.ProcessAnimationCallback): Point;
    distance(v1: Point, v2: Point): number;
    clone(v: Point): Point;
    /**
     * Returns instance of the PointProcessor
     */
    static getInstance(): PointProcessor;
}
