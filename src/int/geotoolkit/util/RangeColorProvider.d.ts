import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { Range } from '@int/geotoolkit/util/Range';
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
     * block
     */
    Block = "block"
}
/**
 * Creates a representation of Range color provider
 *
 * @example
 * import {Range} from '@int/geotoolkit/util/Range';
 * import {RangeColorProvider} from '@int/geotoolkit/util/RangeColorProvider';
 * // Discrete Range Color Provider allows for specific bins
 * const rangem2 = new Range(-2,-1.5); // set color orange in the [-2,-1.5] range.
 * ...
 * // Do the same for the [-1.5, 0], [0, 0.5], [0.5,1] and [1,2] ranges
 * const rangeCP = new RangeColorProvider({
 *    'values' : [ rangem2, rangem1, range0, rangep1, rangep2 ],
 *    'colors' : ['orange', 'yellow', 'blue', 'green', 'gray']
 * });
 */
export declare class RangeColorProvider extends ColorProvider {
    /**
     * Creates color provider
     * @param [values] list of ranges or properties object
     * @param [colors] list of colors
     */
    constructor(values?: RangeColorProvider.Options | Range[] | number[], colors?: (string | RgbaColor)[]);
    /**
     * Returns how many colors can be provided
     */
    getColorNumber(): number;
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
    getStopPoints(): {
        color: string;
        value: number;
    }[];
    /**
     * Replace all colors in the collection by this set
     *
     * @param values list of ranges or properties object
     * @param colors list of colors
     * @returns this
     */
    setColors(values: RangeColorProvider.Options, colors?: (RgbaColor | string)[]): this;
    getColor(value: number): RgbaColor | null;
    /**
     * sets the default/out of range color
     *
     * @param color default/out of range color
     */
    setDefaultColor(color: string | RgbaColor): this;
    /**
     * gets the default/out of range color
     */
    getDefaultColor(): RgbaColor;
    /**
     * Returns minimum value set in the collection
     */
    getMinValue(): number;
    /**
     * Returns the maximum value set in this collection
     */
    getMaxValue(): number;
    /**
     * Returns color provider properties
     */
    getProperties(): RangeColorProvider.OptionsOut;
    /**
     * Sets properties
     * @param properties properties
     * @returns this
     */
    setProperties(properties?: RangeColorProvider.Options): this;
    /**
     * Invalidate Default ColorProvider and notify visuals for update
     */
    invalidate(): this;
    /**
     * Return state of notification
     * @returns current notification state
     */
    isNotificationEnabled(): boolean;
    /**
     * Enable / disable notification
     * @param enable enable or disable notifications
     * @param [force] true if parent should be invalidated immediately
     * @returns this
     */
    setNotification(enable: boolean, force?: boolean): this;
    /**
     * Create or get RangeColorProvider from an object
     * @param object color provider
     * @returns provider
     */
    static fromObject(object: RangeColorProvider | RangeColorProvider.Options): RangeColorProvider;
}
export declare namespace RangeColorProvider {
    /**
     * list of ranges or properties object
     */
    type Options = ColorProvider.Options & {
        /**
         * list of ranges
         */
        values?: Range[] | number[];
        /**
         * list of colors
         */
        colors?: (string | RgbaColor)[];
        /**
         * display style
         */
        style?: DisplayStyle;
        /**
         * default color
         */
        default?: RgbaColor | string | null;
    };
    type OptionsOut = ColorProvider.OptionsOut & {
        /**
         * array of ranges
         */
        values?: Range[];
        /**
         * array of colors
         */
        colors?: string[];
        /**
         * default color
         */
        default?: string;
        /**
         * display style
         */
        style?: DisplayStyle;
    };
}
