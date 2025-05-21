import { ColoredStyle } from '@int/geotoolkit/attributes/ColoredStyle';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { IRasterable } from '@int/geotoolkit/attributes/IRasterable';
import type { Pattern } from '@int/geotoolkit/attributes/Pattern';
import { HsvColor } from '@int/geotoolkit/util/HsvColor';
import type { Raster } from '@int/geotoolkit/attributes/Raster';
import type { IPatternContext } from '@int/geotoolkit/platforms/IPatternContext';
import type { Style } from '@int/geotoolkit/attributes/Style';
/**
 * Defines fill style. This fill style can have a color and a pattern
 */
export declare class FillStyle extends ColoredStyle implements IRasterable {
    constructor();
    /**
     * Creates fill style
     * @param [fillstyle] FillStyle instance to copy
     */
    constructor(fillstyle: FillStyle);
    /**
     * Create fill style
     * @param [properties] object to copy
     */
    constructor(properties: FillStyle.Options);
    /**
     * Create FillStyle
     * @param [color] Color of FillStyle (not used in Gradient) or JSON with parameters
     * @param [pattern] - The background pattern (not used in Gradient)
     * @param [foreground] - The foreground color of the pattern (not used in Gradient)
     * @param [evenoddmode] - The flag indicating whether even-odd fill mode is to be used.
     * @param [shadow] - JSON for displaying shadow
     */
    constructor(color?: RgbaColor | string, pattern?: Pattern, foreground?: RgbaColor | string, evenoddmode?: boolean, shadow?: ColoredStyle.Shadow);
    constructor(color?: FillStyle.Type);
    clone(): FillStyle;
    protected copyConstructor(src: FillStyle, deepCopy?: boolean): this;
    off<E extends keyof Style.EventMap>(type: E, callback?: (eventType: E, sender: this, args: Style.EventMap[E]) => void): this;
    /**
     * Return fill pattern. Can pass in rendering context to get HTML DOM
     * pattern, or no arguments to get fillPattern object.
     *
     * @param [context] native rendering context
     * @returns image pattern
     */
    getPattern(context?: IPatternContext): Pattern | any;
    /**
     * Sets fill pattern.
     *
     * @param [pattern] fill pattern
     * @returns this
     */
    setPattern(pattern: Pattern | null): this;
    /**
     * Gets type of style this is, STYLE_TYPE_COLOR or STYLE_TYPE_PATTERN
     *
     * @returns styleType
     */
    getStyleType(): string;
    /**
     * Sets foreground color
     *
     * @param color RgbaColor for foreground
     * @returns this
     */
    setForegroundColor(color: string | RgbaColor): this;
    /**
     * Gets foreground color
     *
     * @returns color in CSS form
     */
    getForegroundColor(): string;
    /**
     * Gets the even odd fill mode
     *
     * @returns evenOddMode The even odd fill mode flag.
     */
    getEvenOddMode(): boolean;
    /**
     * Sets the even odd fill mode
     *
     * @param evenOddMode The even odd fill mode flag.
     * @returns this
     */
    setEvenOddMode(evenOddMode: boolean): this;
    /**
     * Returns true if fills are identical
     *
     * @param other FillStyle to compare against
     */
    equalsTo(other: FillStyle): boolean;
    /**
     * Gets all the properties pertaining to this object
     *
     * @returns The object configuration
     */
    getProperties(): FillStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: FillStyle.Options): this;
    getRaster(xMin?: number, yMin?: number, xMax?: number, yMax?: number): Raster;
    /**
     * Empty style
     */
    static get Empty(): FillStyle;
    /**
     * Pick style
     */
    static get Pick(): FillStyle;
}
export declare namespace FillStyle {
    type Type = FillStyle | Options | string | RgbaColor | HsvColor | null;
    /**
     * The object configuration
     */
    type OptionsOut = ColoredStyle.OptionsOut & {
        /**
         * The pattern object
         */
        pattern: Pattern;
        /**
         * The foreground color
         */
        foreground?: string;
        /**
         * The flag indicating whether even-odd fill mode is to be used
         */
        evenoddmode: boolean;
    };
    /**
     * source object
     */
    type Options = ColoredStyle.Options & {
        /**
         * pattern
         */
        pattern?: Pattern;
        /**
         * foreground color
         */
        foreground?: string | RgbaColor;
        /**
         * even-odd fill mode
         */
        evenoddmode?: boolean;
    };
}
