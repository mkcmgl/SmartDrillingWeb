import { ColorProvider, Events, KnownScales } from '@int/geotoolkit/util/ColorProvider';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
export { Events };
/**
 * This class is the default implementation of a colorprovider.<br>
 * <br>
 * It uses a map of sorted values and colors.<br>
 * When retrieving the Color for a specified value, if the value is not found in the collection it gets the minimum and maximum value relative to the specified value.<br>
 * Then it gets the colors corresponding to these values, interpolates the colors and returns the color according to the relative position of the value between the minimum and maximum values.<br>
 *
 * @example
 * // 1). Default Color Provider allows for linear gradient with stops
 * const colorprovider = new DefaultColorProvider({
 *    'values' : [  -2  ,   -1  ,     0   ,   1  ,     2    ],
 *    'colors' : ['orange', 'yellow', 'blue', 'green', 'gray']
 * });
 * // 2). To use 'JET' colormap like in MATLAB you can use the following code to create color provider for specified min and max values.
 * const min = -100, max = 100;
 * const colors: string[] = ['#00007F','#0000FF','#007FFF','#00FFFF','#7FFF7F','#FFFF00','#FF7F00','#FF0000','#7F0000'];
 * const values: number[] = [];
 * const delta = (max-min) / (colors.length-1);
 * for (let i = 0; i < colors.length; ++i) {
 *      values.push(min + i * delta);
 *  }
 * const colorprovider = new DefaultColorProvider({
 *      'values': values,
 *      'colors': colors
 *  });
 */
export declare class DefaultColorProvider extends ColorProvider {
    /**
     * Create color provider
     * @param [values] The values or a json
     * @param [colors] The colors
     */
    constructor(values?: DefaultColorProvider.Options | number[], colors?: (string | RgbaColor)[]);
    /**
     * Add color to the collection
     * Compatibility: old JSON format `{'value': 0, 'red': 255, 'green': 255, 'blue': 255, 'alpha': 1}` is supported,
     * but new parameter list is recommended
     *
     * @param value index of this color on the colorbar
     * @param color CSS color string or RgbaColor object
     * @returns this
     */
    addColor(value: number, color: string | RgbaColor): this;
    /** @deprecated */
    addColor(json: {
        value: number;
        color: string | RgbaColor;
        red?: number;
        green?: number;
        blue?: number;
        alpha?: number;
    }): this;
    /**
     * Replace all colors in the collection by this set
     *
     * @param values new values or properties object
     * @param [colors] new colors
     * @returns this
     */
    setColors(values: DefaultColorProvider.Colors, colors?: (string | RgbaColor)[]): this;
    /**
     * Replace all colors in the collection by this scale
     *
     * @param scale Scale to use
     * @param [start] Start value to use
     * @param [end] End value to use
     * @returns this
     */
    setScale(scale: KnownScales, start?: number, end?: number): this;
    /**
     * @returns scale scale being used
     */
    getScale(): KnownScales;
    /**
     * Remove color from the collection
     *
     * @param value value to remove color
     * @returns this
     */
    removeColor(value: number): this;
    /**
     * Returns minimum value set in the collection
     */
    getMinValue(): number;
    /**
     * Returns the maximum value set in this collection
     */
    getMaxValue(): number;
    /**
     * Always return a reference to sorted array of values.
     * Don't change this array.
     * @returns an array of the values
     */
    getValues(): number[];
    /**
     * @returns an array of the colors
     */
    getColors(): RgbaColor[];
    /**
     * reverse the axis
     */
    reverse(): this;
    /**
     * return true if the min / max is reversed
     */
    isReversed(): boolean;
    /**
     * set the min/max of the color provider, interpolating all values on the way.
     * @param start Start value to use
     * @param end End value to use
     * @returns this
     * @throws {Error} if start or end is NaN
     */
    scaleTo(start: number, end: number): this;
    /**
     * @returns an array of the `{color,values}` couples
     */
    getStopPoints(): {
        color: string;
        value: number;
    }[];
    getColor(value: number): RgbaColor | null;
    /**
     * get Properties
     */
    getProperties(): DefaultColorProvider.OptionsOut;
    /**
     * set Properties
     * @param properties Json object with properties
     * @returns this
     */
    setProperties(properties?: DefaultColorProvider.Options): this;
    /**
     * Invalidate Default ColorProvider and notify visuals for update
     */
    invalidate(): this;
    /**
     * Enable / disable notification
     * @param enable enable or disable notifications
     * @param [force] true if parent should be invalidated immediately
     * @returns this
     */
    setNotification(enable: boolean, force?: boolean): this;
    /**
     * Return state of notification
     * @returns current notification state
     */
    isNotificationEnabled(): boolean;
    /**
     * Returns the minimum data value set in this collection
     */
    protected getDataMinValue(): number;
    /**
     * Returns the maximum data value set in this collection
     */
    protected getDataMaxValue(): number;
    /**
     * Returns colors and values to be serialized
     * @returns colors and values
     */
    protected getColorsProperties(): DefaultColorProvider.ColorsOptions | null;
    /**
     * Create or get DefaultColorProvider from an object
     * @param object to get provider from
     * @returns provider
     */
    static fromObject(object: DefaultColorProvider.Options): DefaultColorProvider;
}
export declare namespace DefaultColorProvider {
    /**
     * The values or a json
     */
    type Options = ColorProvider.Options & {
        /**
         * The values
         */
        values?: number[];
        /**
         * The colors
         */
        colors?: (string | RgbaColor)[];
        /**
         * boolean to define the sorting direction
         */
        reversed?: boolean;
        /**
         * A predefined set of colors
         */
        scale?: KnownScales;
        /**
         * Start value for the scale
         */
        min?: number;
        /**
         * End value for the scale
         */
        max?: number;
    };
    /**
     * new values or properties object
     */
    type Colors = number[] | {
        /**
         * new values
         */
        values?: number[];
        /**
         * new colors
         */
        colors?: (string | RgbaColor)[];
    };
    type OptionsOut = ColorProvider.OptionsOut & {
        /**
         * new values
         */
        values?: number[];
        /**
         * new colors
         */
        colors?: string[];
        /**
         * color scale for provider to use
         */
        scale?: KnownScales;
        /**
         * min value to use
         */
        min?: number;
        /**
         * max value to use
         */
        max?: number;
        /**
         * reversed flag
         */
        reversed?: boolean;
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
