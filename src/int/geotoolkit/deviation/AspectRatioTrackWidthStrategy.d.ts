/**
 * @module geotoolkit/deviation/AspectRatioTrackWidthStrategy
 */
import { TrackWidthStrategy } from '@int/geotoolkit/deviation/TrackWidthStrategy';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
/**
 * The strategy sets track width according to the equation:<br>
 * "trackWidth[device] = trackLength[device] / aspectratio"
 */
export declare class AspectRatioTrackWidthStrategy extends TrackWidthStrategy {
    constructor(options?: AspectRatioTrackWidthStrategy.Options);
    getWidth(tr: Transformation, options: {
        width: number;
        trajectory: Trajectory2d;
    }): number;
}
export declare namespace AspectRatioTrackWidthStrategy {
    /**
     * options
     */
    type Options = {
        /**
         * minimum device width
         */
        minwidth?: number;
        /**
         * maximum device width
         */
        maxwidth?: number;
        /**
         * y-to-x aspect ratio
         */
        aspectratio?: number;
    };
}
