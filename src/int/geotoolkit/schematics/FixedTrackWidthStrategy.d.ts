/**
 * @module geotoolkit/schematics/FixedTrackWidthStrategy
 */
import { TrackWidthStrategy } from '@int/geotoolkit/deviation/TrackWidthStrategy';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
/**
 * The strategy sets track width equal to the passed value
 */
export declare class FixedTrackWidthStrategy extends TrackWidthStrategy {
    constructor(width?: number);
    getWidth(tr: Transformation, options: {
        width: number;
        trajectory: Trajectory2d;
    }): number;
}
