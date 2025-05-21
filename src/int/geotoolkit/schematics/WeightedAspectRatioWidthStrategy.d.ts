/**
 * @module geotoolkit/schematics/WeightedAspectRatioWidthStrategy
 */
import { TrackWidthStrategy } from '@int/geotoolkit/deviation/TrackWidthStrategy';
import type { WellBoreNode } from '@int/geotoolkit/schematics/scene/WellBoreNode';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
/**
 * The strategy sets track width according to the equation:<br>
 * "trackWidth[device] = (trackLength[device] / aspectratio) * (OD[maximum] / OD[medium])"
 */
export declare class WeightedAspectRatioWidthStrategy extends TrackWidthStrategy {
    constructor(options: WeightedAspectRatioWidthStrategy.Options);
    getWidth(tr: Transformation, options: {
        width: number;
        trajectory: Trajectory2d;
    }): number;
}
export declare namespace WeightedAspectRatioWidthStrategy {
    type Options = {
        /**
         * wellbore node
         */
        wellborenode: WellBoreNode;
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
