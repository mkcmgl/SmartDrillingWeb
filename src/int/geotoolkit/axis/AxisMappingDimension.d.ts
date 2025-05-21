import { AxisDimension } from '@int/geotoolkit/axis/AxisDimension';
import { MathUtil } from '@int/geotoolkit/util/MathUtil';
/**
 * Define axis model dimension.
 */
export declare class AxisMappingDimension extends AxisDimension {
    constructor(options?: AxisMappingDimension.Options);
    /**
     * Return desired model spacing
     */
    getSpacing(): number;
    /**
     * Return mode to support precise limits
     */
    getPreciseLimits(): boolean;
    /**
     * Return origin value
     */
    getOrigin(): number;
    /**
     * Sets mode for precise limits support for neat limits.
     * This mode works only with neat limits mode
     * @param enable enable keeping the precise limits and calculate only step
     * @returns this
     */
    setPreciseLimits(enable: boolean): this;
    /**
     * Gets logarithmic mode
     * @returns true if logarithmic mode enabled
     */
    getLogarithmic(): boolean;
    /**
     * Sets logarithmic mode.
     * @param enable enable logarithmic mode
     * @returns this
     */
    setLogarithmic(enable: boolean): this;
    /**
     * Get nice limits
     * @param min minimum value
     * @param max maximum value
     * @param desiredModelStep desired model space between ticks
     * @returns calculated limits
     */
    getNiceLimits(min: number, max: number, desiredModelStep: number): MathUtil.Limits;
    /**
     * Get nice limits by count
     * @param min minimum value
     * @param max maximum value
     * @param maxNumberOfTicks maximum number of ticks
     * @returns calculated limits
     */
    getNiceLimitsByCount(min: number, max: number, maxNumberOfTicks: number): MathUtil.Limits | null;
    getOptions(): Required<AxisMappingDimension.Options>;
    setOptions(options?: AxisMappingDimension.Options): this;
    getProperties(): Required<AxisMappingDimension.Options>;
    setProperties(options?: AxisMappingDimension.Options): this;
}
export declare namespace AxisMappingDimension {
    /**
     * The options
     */
    type Options = AxisDimension.Options & {
        origin?: number;
        /**
         * desired minimum distance between ticks in pixels
         */
        minspan?: number;
        /**
         * desired model step
         */
        desiredmodelstep?: number;
        /**
         * enable keeping the precise limits and calculate only step
         */
        preciselimits?: boolean;
        /**
         * desired model spacing
         */
        spacing?: number;
        /**
         * true for logarithmic axis
         */
        logarithmic?: boolean;
    };
}
