import { DiscreteGradientColorProvider } from '@int/geotoolkit/util/DiscreteGradientColorProvider';
/**
 * Define a colormap
 */
export declare class ColorMap extends DiscreteGradientColorProvider {
    /**
     * @param [bins] The number of bins or options object
     * @param [name] The scale name.
     * @param [minValue] The min value to use.
     * @param [maxValue] The max value to use.
     */
    constructor(bins?: ColorMap.Options | number[] | number, name?: string, minValue?: number, maxValue?: number);
    /**
     * set Properties of the object
     * @param properties color provider properties
     * @returns this
     */
    setProperties(properties?: ColorMap.Options): this;
    /**
     * get properties of the object
     * @returns color provider properties
     */
    getProperties(): ColorMap.OptionsOut;
}
export declare namespace ColorMap {
    /**
     * The number of bins or options object
     */
    type Options = DiscreteGradientColorProvider.Options & {
        /**
         * The scale name.
         */
        name?: string;
        /**
         * The min value to use.
         */
        minvalue?: number;
        /**
         * The max value to use.
         */
        maxvalue?: number;
    };
    /**
     * color provider properties
     */
    type OptionsOut = DiscreteGradientColorProvider.OptionsOut & {
        /**
         * The scale name.
         */
        name: string;
        /**
         * The min value to use.
         */
        minvalue: number;
        /**
         * The max value to use.
         */
        maxvalue: number;
    };
}
