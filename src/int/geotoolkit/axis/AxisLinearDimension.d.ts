import { AxisMappingDimension } from '@int/geotoolkit/axis/AxisMappingDimension';
/**
 * Define axis model dimension. This is experimental api
 * @deprecated since 3.4, use {@link @int/geotoolkit/axis/AxisMappingDimension~AxisMappingDimension} instead
 */
export declare class AxisLinearDimension extends AxisMappingDimension {
    /**
     * @param [options] The options
     */
    constructor(options?: AxisLinearDimension.Options);
}
export declare namespace AxisLinearDimension {
    /**
     * The options
     */
    type Options = AxisMappingDimension.Options & {
        /**
         * enable keeping the precise limits and calculate only step
         */
        preciselimits?: boolean;
    };
}
