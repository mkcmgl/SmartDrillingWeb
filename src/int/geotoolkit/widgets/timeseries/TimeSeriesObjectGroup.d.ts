import { TimeSeriesObjectBase } from '@int/geotoolkit/widgets/timeseries/TimeSeriesObjectBase';
import { TimeSeriesObject } from '@int/geotoolkit/widgets/timeseries/TimeSeriesObject';
/**
 * TimeSeriesObject is a container of visuals used in TimeSeries Widget.
 * It primarily lets you get and set options of the different visuals.
 */
export declare class TimeSeriesObjectGroup extends TimeSeriesObjectBase {
    protected _options: TimeSeriesObjectGroup.Options;
    constructor(options?: TimeSeriesObjectGroup.Options);
    /**
     * Set min
     * @param value min value curve's
     * @returns this
     */
    setMin(value: number): this;
    /**
     * Get min
     */
    getMin(): number;
    /**
     * Set max
     * @param value max value curve's
     * @returns this
     */
    setMax(value: number): this;
    /**
     * Get max
     */
    getMax(): number;
    /**
     * Sets if limits are shared between groups member
     * @param value if limits are shared between groups member
     */
    setShareLimits(value: boolean): this;
    /**
     * Get max
     */
    getShareLimits(): boolean;
    /**
     * Set axis options
     * @param [options] JSON which defines curve axis
     * @returns this
     */
    setAxisOptions(options?: TimeSeriesObjectGroup.AxisOptions): this;
    /**
     * Add time series object to group. If the item (or any item in the array) is a member of another group, none of the items are added
     * @param item item
     * @returns this
     */
    addObject(item: TimeSeriesObject | TimeSeriesObject[]): this;
    /**
     * Remove time series object from group
     * @param item item
     * @returns this
     */
    removeObject(item: TimeSeriesObject | TimeSeriesObject[]): this;
}
export declare namespace TimeSeriesObjectGroup {
    /**
     * object
     */
    type Options = TimeSeriesObjectBase.Options & {
        /**
         * min value curve's
         */
        min?: number;
        /**
         * max value curve's
         */
        max?: number;
        sharelimits?: boolean;
    };
    /**
     * JSON which defines curve axis
     */
    type AxisOptions = TimeSeriesObjectBase.AxisOptions & {
        /**
         * JSON which defines tick generator options
         */
        tickgeneratoroptions?: {
            /**
             * edge
             */
            edge?: {
                /**
                 * edge tick visibility
                 */
                tickvisible?: boolean;
                /**
                 * edge label visibility
                 */
                labelvisible?: boolean;
            };
            /**
             * major
             */
            major?: {
                /**
                 * major tick visibility
                 */
                tickvisible?: boolean;
                /**
                 * major label visibility
                 */
                labelvisible?: boolean;
            };
            /**
             * minor
             */
            minor?: {
                /**
                 * minor tick visibility
                 */
                tickvisible?: boolean;
                /**
                 * minor label visibility
                 */
                labelvisible?: boolean;
            };
        };
    };
}
