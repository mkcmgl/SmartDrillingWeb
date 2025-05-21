import { DefaultColorProvider } from '@int/geotoolkit/util/DefaultColorProvider';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { KnownScales } from '@int/geotoolkit/util/ColorProvider';
/**
 * This class implements a colorprovider that use discretization to emulate a gradient.<br>
 * It's main purpose is to simplify a gradient by reducing the amount of possible colors (mostly for performance reasons).<br>
 * <br>
 * The discretization process can be controlled through the given 'bins' parameter that defines how many discrete colors will be used.<br>
 *
 * @example
 * // Discrete Gradient Color Provider allows for limited number of bins
 * const discreteCP = new DiscreteGradientColorProvider({
 *    'values' : [  -2  ,   -1  ,     0   ,   1  ,     2    ],
 *    'colors' : ['orange', 'yellow', 'blue', 'green', 'gray']
 *    'bins': 16
 * });
 */
export declare class DiscreteGradientColorProvider extends DefaultColorProvider {
    /**
     * Creates color provider
     * @param [values] list of values
     * @param [colors] list of colors
     * @param [bins] number of bins
     */
    constructor(values?: DiscreteGradientColorProvider.Options | number[], colors?: (string | RgbaColor)[], bins?: number);
    /**
     * Sets how many colors can be provided
     *
     * @param colorNumber number of colors that can be provided
     * @returns this
     */
    setColorNumber(colorNumber: number): this;
    /**
     * Returns how many colors can be provided
     */
    getColorNumber(): number;
    /**
     * @param values new values
     * @param colors new colors
     * @returns this
     */
    setColors(values: DefaultColorProvider.Colors, colors?: (string | RgbaColor)[]): this;
    /**
     * Replace all colors in the collection by this scale
     *
     * @param scale Scale to use
     * @param min Minimum to use
     * @param max Maximum to use
     * @returns this
     */
    setScale(scale: KnownScales, min?: number, max?: number): this;
    /**
     * reverse the axis
     */
    reverse(): this;
    /**
     * get Properties
     */
    getProperties(): DiscreteGradientColorProvider.OptionsOut;
    /**
     * set Properties of the object
     * @param properties color provider properties
     * @returns this
     */
    setProperties(properties?: DiscreteGradientColorProvider.Options): this;
    /**
     * Create or get DiscreteGradientColorProvider from an object
     * @param object gradient provider properties or instance
     * @returns provider
     */
    static fromObject(object: DiscreteGradientColorProvider | DiscreteGradientColorProvider.Options): DiscreteGradientColorProvider;
}
export declare namespace DiscreteGradientColorProvider {
    /**
     * list of values
     */
    type Options = DefaultColorProvider.Options & {
        /**
         * number of bins
         */
        bins?: number;
    };
    type OptionsOut = DefaultColorProvider.OptionsOut & {
        /**
         * number of bins
         */
        bins?: number;
    };
}
