/**
 * @module geotoolkit/util/ITransformable
 */
import type { Point } from '@int/geotoolkit/util/Point';
import type { Polygon } from '@int/geotoolkit/util/Polygon';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * Define an interface to provide nonaffine transformation from a linear 2D-space.
 * @interface
 */
export declare abstract class ITransformable {
    /**
     * Transforms point from linear to target space
     * @param point point to transform
     * @returns transformed point
     */
    abstract transform(point: Point): Point;
    /**
     * Transforms point from target to linear space
     * @param point point to transform
     * @returns transformed point
     */
    abstract inverseTransform(point: Point): Point;
    /**
     * Gets node outline
     * @param tr transformation which will be applied to outline
     */
    abstract getOutline(tr: Transformation): Polygon;
}
