/**
 * @module geotoolkit/deviation/PiecewiseTransformer
 */
import { Transformer2d } from '@int/geotoolkit/deviation/Transformer2d';
import type { TrackWidthStrategy } from '@int/geotoolkit/deviation/TrackWidthStrategy';
import type { DeviatedTransformation } from '@int/geotoolkit/deviation/DeviatedTransformation';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * The class PiecewiseTransformer is an implementation of Transformer2D. It transforms
 * the actual geometry by applying the deviation.
 * Trajectory's measured depth values are equal to the original 2D-spaces's Y-values.
 */
export declare class PiecewiseTransformer extends Transformer2d {
    constructor(options?: PiecewiseTransformer.Options);
    /**
     * Gets options
     * NOTE: copy of options is created and returned.
     * @returns options
     */
    getOptions(): Required<PiecewiseTransformer.Options>;
    /**
     * Sets options. The default is the current state of the object.
     * @param [options] options
     * @returns this
     */
    setOptions(options?: PiecewiseTransformer.Options): this;
    /**
     * Gets properties
     *
     * @returns options
     */
    getProperties(): Required<PiecewiseTransformer.Options>;
    /**
     * Sets properties. The default is the current state of the object.
     * @param [options] options
     * @returns this
     */
    setProperties(options?: PiecewiseTransformer.Options): this;
    /**
     * Creates a deviated transformation
     * @param transformerContext transformer context
     * @param [transformation] affine transformation applied
     * @returns transformation created
     */
    create(transformerContext: PiecewiseTransformer.Context, transformation?: Transformation): DeviatedTransformation;
}
export declare namespace PiecewiseTransformer {
    /**
     * options
     */
    type Options = {
        /**
         * If this is true then approximation is applied to the segment and a smooth transformation is created between two linear segments.
         */
        joinsegments?: boolean;
        /**
         * a strategy to scale track with
         */
        trackwidthstrategy?: TrackWidthStrategy;
        /**
         * approximation threshold for trajectory points in pixels. It is the maximum distance of the original stations from the approximated path.
         */
        approxthreshold?: number;
        /**
         * approximation trajectory for measured depths in measured depth units. if it is not specified
         * then equals to options.approxThreshold
         */
        approxthresholdmd?: number;
        /**
         * if this is true then outline stations is used
         */
        outlinesegments?: boolean;
        /**
         * if this is true then uniform data distribution is applied along the track, including the intersection and rupture of line stations
         */
        outlinemodelbboxadjust?: boolean;
    };
    /**
     * transformer context
     */
    type Context = {
        /**
         * trajectory along the path
         */
        trajectory: Trajectory2d;
        /**
         * width of the track. if trackWidthStrategy
         * is specified then it calculates width in pixels using provided strategy
         */
        trackwidth?: number;
        /**
         * offset in the same unit as traceWidth to the trajectory segment
         */
        offset?: number;
    };
}
