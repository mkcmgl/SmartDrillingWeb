import { DefaultColorProvider } from '@int/geotoolkit/util/DefaultColorProvider';
import { KnownScales } from '@int/geotoolkit/util/ColorProvider';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
/**
 * Enum of display style
 * @enum
 * @readonly
 */
export declare enum DisplayStyle {
    /**
     * linear
     */
    Linear = "linear",
    /**
     * logarithmic
     */
    Logarithmic = "logarithmic"
}
/**
 * Creates a representation of Log color provider
 *
 * @example
 * //Log Color Provider emulates logarithmic behavior
 * const logCP = new DefaultLogColorProvider({
 *    'values' : [  1  ,    10  ,   100   ,  300 ,    1000  ],
 *    'colors' : ['orange', 'yellow', 'blue', 'green', 'gray']
 * });
 */
export declare class DefaultLogColorProvider extends DefaultColorProvider {
    /**
     * @param [values] list of values
     * @param [colors] list of colors
     */
    constructor(values?: DefaultLogColorProvider.Options | number[], colors?: RgbaColor[]);
    /**
     * Replace all colors in the collection by this set
     *
     * @param values new values
     * @param colors new colors
     * @returns this
     */
    setColors(values: number[], colors: (string | RgbaColor)[]): this;
    /**
     * Method used to set graphical representation of DefaultLogColorProvider in a fillStyle
     * @param style display style
     * @returns this
     */
    setDisplayStyle(style: DisplayStyle): this;
    /**
     * @returns display style.
     */
    getDisplayStyle(): DisplayStyle;
    /**
     * @returns an array of the `{color,values}` couples
     */
    getStopPoints(): {
        color: string;
        value: number;
    }[];
    /**
     * Replace all colors in the collection by this scale
     *
     * @param scale Scale to Use
     * @param min Minimum to Use
     * @param max Maximum to Use
     * @param [logValue] apply scale for logarithm of values
     * @returns this
     */
    setScale(scale: KnownScales, min: number, max: number, logValue?: boolean): this;
    /**
     * set the min/max of the color provider, interpolating all values on the way.
     * @param start Start value to use
     * @param end End value to use
     * @param [logValue] apply scale for logarithm of values
     * @returns this
     */
    scaleTo(start: number, end: number, logValue?: boolean): this;
    /**
     * get Properties
     */
    getProperties(): DefaultLogColorProvider.OptionsOut;
    /**
     * set Properties of the object
     * @param properties Json with properties to set
     * @returns this
     */
    setProperties(properties?: DefaultLogColorProvider.Options): this;
    /**
     * Returns colors and values to be serialized
     * @returns colors and values
     */
    protected getColorsProperties(): DefaultLogColorProvider.ColorsProperties;
    /**
     * Create or get DefaultLogColorProvider from an object
     * @param object to get provider from
     * @returns provider
     */
    static fromObject(object: any): DefaultLogColorProvider;
}
export declare namespace DefaultLogColorProvider {
    /**
     * list of values
     */
    type Options = DefaultColorProvider.Options & {
        /**
         * Enum of display style
         */
        style?: DisplayStyle;
    };
    type OptionsOut = DefaultColorProvider.OptionsOut & {
        /**
         * Enum of display style
         */
        style?: DisplayStyle;
    };
    /**
     * colors and values
     */
    type ColorsProperties = {
        /**
         * colors
         */
        colors: string[];
        /**
         * values
         */
        values: number[];
    };
}
