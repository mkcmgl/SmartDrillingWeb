/**
 * @module geotoolkit/deviation/ProportionalWidthStrategy
 */
import { TrackWidthStrategy } from '@int/geotoolkit/deviation/TrackWidthStrategy';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Trajectory2d } from '@int/geotoolkit/deviation/Trajectory2d';
/**
 * This class defines strategy how to proportionally scale width according to
 * trajectory length scale in the range from min to max
 */
export declare class ProportionalWidthStrategy extends TrackWidthStrategy {
    constructor(options?: ProportionalWidthStrategy.Options);
    getWidth(tr: Transformation, options: {
        width: number;
        trajectory: Trajectory2d;
    }): number;
    /**
     * Gets all the properties pertaining to this object
     * @returns of this object
     */
    getProperties(): Required<ProportionalWidthStrategy.Options>;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: ProportionalWidthStrategy.Options): this;
}
export declare namespace ProportionalWidthStrategy {
    /**
     * options
     */
    type Options = {
        /**
         * minimum width of track for scaling on zoom in pixels
         */
        minwidth?: number;
        /**
         * maximum width of track for scaling on zoom in pixels
         */
        maxwidth?: number;
        /**
         * width scale
         */
        widthscale?: number;
    };
}
