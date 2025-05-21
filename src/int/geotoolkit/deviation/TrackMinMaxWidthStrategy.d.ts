/**
 * @module geotoolkit/deviation/TrackMinMaxWidthStrategy
 */
import { TrackWidthStrategy } from '@int/geotoolkit/deviation/TrackWidthStrategy';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * This class defines strategy how to scale track width in the range from min to max
 */
export declare class TrackMinMaxWidthStrategy extends TrackWidthStrategy {
    constructor(options: TrackMinMaxWidthStrategy.Options);
    getWidth(tr: Transformation, options: {
        width: number;
        trajectory: Trajectory2d;
    }): number;
}
export declare namespace TrackMinMaxWidthStrategy {
    /**
     * options
     */
    type Options = {
        /**
         * Defines if transformer can scale track's width on zooming, by default(=False) the transformer keeps the scale width same on zoom.
         */
        scalewidth?: boolean;
        /**
         * minimum width of track for scaling on zoom in pixels
         */
        minwidth?: number;
        /**
         * maximum width of track for scaling on zoom in pixels
         */
        maxwidth?: number;
        /**
         * default scale by x position
         */
        widthscalex?: number;
        /**
         * default scale by y position
         */
        widthscaley?: number;
    };
}
