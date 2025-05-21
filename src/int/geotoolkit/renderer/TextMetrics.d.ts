import { Rect } from '@int/geotoolkit/util/Rect';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
/**
 * Enum of text measure strategies
 * @enum
 * @readonly
 */
export declare enum TextMetricsMeasureStrategy {
    /**
     * LimitedCache
     */
    LimitedCache = "LimitedCache",
    /**
     * SymbolCache
     */
    SymbolCache = "SymbolCache",
    /**
     * CanvasAndLimited
     */
    CanvasAndLimited = "CanvasAndLimited",
    /**
     * CanvasMRULimited
     */
    CanvasMRULimited = "CanvasMRULimited",
    /**
     * NodeCanvas
     */
    NodeCanvas = "NodeCanvas",
    /**
     * User defined strategy
     */
    Custom = "Custom"
}
/**
 * Defines text metrics
 */
export declare class TextMetrics {
    /**
     * @param [params] options
     */
    constructor(width?: TextMetrics.Options);
    /**
     * @param width width or properties object
     * @param height height
     * @param [fontMetrics] font metrics
     */
    constructor(width: number, height: number, fontMetrics?: TextMetrics.FontMetrics);
    /**
     * setMetrics
     * @param width width
     * @param height height
     * @param [fontMetrics] font metrics
     * @returns this
     */
    setMetrics(width: number, height: number, fontMetrics?: TextMetrics.FontMetrics): this;
    /**
     * Return font metrics
     * @returns font metrics
     */
    getFontMetrics(): TextMetrics.FontMetrics;
    /**
     * return width
     */
    getWidth(): number;
    /**
     * return height
     */
    getHeight(): number;
    /**
     * Return clone object.
     * @returns clone a copy of this object
     */
    clone(): TextMetrics;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): TextMetrics.Options;
    /**
     * Convert current instance TextMetrics to {@link @int/geotoolkit/util/Rect~Rect}
     */
    toRect(): Rect;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: TextMetrics.Options): this;
    /**
     * Parse font weight, size and family based on font string
     * follow w3 recommendation see {@link http://www.w3.org/TR/css3-fonts/}
     * if the font cannot be parsed it will return default font : 12px arial.
     *
     * @param font current font for the text
     */
    static parseFont(font: string | TextStyle): TextMetrics.Font;
    /**
     * Sets the maximum cache limit
     * @param val number of different font metrics that can be implemented
     */
    static setCacheLimit(val: number): void;
    /**
     * clears the current cache
     */
    static clearCache(): void;
    /**
     * Measure text size in device coordinates
     * @param text current text string
     * @param [textStyle] the text style
     * @param [useFontMetrics] flag to calculate font metrics
     * @returns text metrics
     */
    static measureText(text: string, textStyle?: TextStyle, useFontMetrics?: boolean): TextMetrics;
    /**
     * Sets the strategy to use when measuring text size
     * This function sets the 'MeasureText' function according to the strategy
     * @param val strategy to measure text
     */
    static setMeasureTextStrategy(val: TextMetricsMeasureStrategy | TextMetrics.customMeasureTextStrategy): void;
    /**
     * Returns the current text measure strategy
     */
    static getMeasureTextStrategy(): TextMetricsMeasureStrategy;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace TextMetrics {
    /**
     * width or properties object
     */
    type Options = {
        /**
         * set the width
         */
        width?: number;
        /**
         * set the height
         */
        height?: number;
        /**
         * font metrics
         */
        fontmetrics?: FontMetrics;
    };
    type FontMetrics = {
        ascent: number;
        descent: number;
        height: number;
    };
    type Font = {
        fontweight: string;
        fontsize: string;
        fontfamily: string;
        fontlineheight: string;
        fontstyle: string;
    };
    /**
     * Callback for custom measure text strategy
     */
    type customMeasureTextStrategy = (text: string, textStyle?: TextStyle, useFontMetrics?: boolean) => TextMetrics;
}
