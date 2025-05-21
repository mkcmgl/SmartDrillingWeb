/**
 * @module geotoolkit/controls/shapes/IChartDataVisual
 */
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Define an interface for data chart visuals
 * @interface
 */
export declare abstract class IChartDataVisual {
    /**
     * Returns flag to indicate automatic calculation of data limits
     */
    abstract getAutoDataLimits(): boolean;
    /**
     * Sets a flag to indicate automatic calculation of data limits
     * @param enable enable or disable calculation of the data limits
     * @returns this
     */
    abstract setAutoDataLimits(enable: boolean): this;
    /**
     * Return original data limits
     */
    abstract getDataLimits(): Rect;
}
