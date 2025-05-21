import { DiscreteGradientColorProvider } from '@int/geotoolkit/util/DiscreteGradientColorProvider';
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
 * // Log Color Provider emulates logarithmic behavior
 * const logCP = new LogColorProvider({
 *    'values' : [  1  ,    10  ,   100   ,  300 ,    1000  ],
 *    'colors' : ['orange', 'yellow', 'blue', 'green', 'gray'],
 *    'bins': 16
 * });
 */
export declare class LogColorProvider extends DiscreteGradientColorProvider {
    /**
     * Creates color provider
     * @param [values] list of values
     * @param [colors] list of colors
     * @param [bins] number of bins
     */
    constructor(values?: LogColorProvider.Options | number[], colors?: (string | RgbaColor)[], bins?: number);
    /**
     * Replace all colors in the collection by this set
     *
     * @param values new values
     * @param colors new colors
     * @returns this
     */
    setColors(values: number[], colors: (string | RgbaColor)[]): this;
    /**
     * Method used to set graphical representation of LogColorProvider in a fillStyle
     * @param style display style
     * @returns this
     */
    setDisplayStyle(style: DisplayStyle): this;
    /**
     * @returns display style.
     */
    getDisplayStyle(): DisplayStyle;
    /**
     * Replace all colors in the collection by this scale
     *
     * @param scale Scale to Use
     * @param min Minimum to Use
     * @param max Maximum to Use
     * @param [logValue] apply scale for logarithm of values
     * @returns this
     */
    setScale(scale: KnownScales | {
        min: number;
        max: number;
        logValue?: boolean;
        values: number[];
    }, min: number, max: number, logValue?: boolean): this;
    /**
     * set the min/max of the color provider, interpolating all values on the way.
     * @param start Start value to use
     * @param end End value to use
     * @param [logValue] apply scale for logarithm of values
     * @returns this
     */
    scaleTo(start: number, end: number, logValue?: boolean): this;
    /**
     * convert value v to logarithmic t
     * @param v value
     */
    valToLog(v: number): number;
    /**
     * convert logarithmic t to value v
     * @param t logarithmic value
     */
    logToVal(t: number): number;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): LogColorProvider.OptionsOut;
    /**
     * set Properties of the object
     * @param properties properties
     * @returns this
     */
    setProperties(properties?: LogColorProvider.Options): this;
    /**
     * Returns colors and values to be serialized
     * @returns colors and values
     */
    protected getColorsProperties(): LogColorProvider.ColorsOptions | null;
    /**
     * Create or get LogColorProvider from an object
     * @param object object to create from
     * @returns provider
     */
    static fromObject(object: any): LogColorProvider;
}
export declare namespace LogColorProvider {
    /**
     * list of values
     */
    type Options = DiscreteGradientColorProvider.Options & {
        /**
         * list of colors
         */
        colors?: (string | RgbaColor)[];
        /**
         * display style
         */
        style?: DisplayStyle;
    };
    type OptionsOut = DiscreteGradientColorProvider.OptionsOut & {
        /**
         * Enum of display style
         */
        style?: DisplayStyle;
    };
    /**
     * colors and values
     */
    type ColorsOptions = {
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
