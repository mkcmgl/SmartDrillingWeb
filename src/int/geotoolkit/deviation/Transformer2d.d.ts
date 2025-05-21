import type { DeviatedTransformation } from '@int/geotoolkit/deviation/DeviatedTransformation';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * 2D-transformer abstraction
 */
export declare abstract class Transformer2d {
    /**
     * Creates DeviatedTransformation
     * @param deviationContext deviation context
     * @param transformation affine transformation applied
     */
    abstract create(deviationContext: Transformer2d.DeviationContext, transformation: Transformation): DeviatedTransformation;
    abstract setOptions(options?: any): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Transformer2d {
    /**
     * deviation context
     */
    type DeviationContext = {
        /**
         * trajectory along the path
         */
        trajectory: Trajectory2d;
        /**
         * width of the track in pixels
         */
        trackwidth: number;
        /**
         * offset to the trajectory segment in pixels
         */
        offset: number;
    };
}
