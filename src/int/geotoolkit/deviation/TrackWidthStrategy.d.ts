import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
/**
 * This class defines abstract strategy how to scale track width
 */
export declare abstract class TrackWidthStrategy {
    /**
     * Return track width in pixels
     * @param tr transformation to device
     * @param options options
     */
    abstract getWidth(tr: Transformation, options: {
        width: number;
        trajectory: Trajectory2d;
    }): number;
    /**
     * Calculates trajectory widths (both: model and device)
     * @param trajectory trajectory
     * @param tr transformation to device
     */
    getDeviceLength(trajectory: Trajectory2d, tr: Transformation): {
        devicelength: number;
        length: number;
    };
    static getClassName(): string;
    getClassName(): string;
}
