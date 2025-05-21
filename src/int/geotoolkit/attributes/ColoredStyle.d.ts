/**
 * @module geotoolkit/attributes/ColoredStyle
 */
import type { Merge } from '@int/geotoolkit/base';
import { Style } from '@int/geotoolkit/attributes/Style';
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { HsvColor } from '@int/geotoolkit/util/HsvColor';
/**
 * Defines a base class to define a style that has a color attribute.
 */
export declare abstract class ColoredStyle extends Style {
    /**
     * Create ColoredStyle
     * @param [color] color in CSS form or properties object
     * @param [shadow] JSON for displaying shadow
     */
    protected constructor(color?: ColoredStyle.Options | RgbaColor | HsvColor | string, shadow?: ColoredStyle.Shadow);
    protected copyConstructor(src: ColoredStyle, deepCopy?: boolean): this;
    /**
     * Return RGBA color
     * @returns color
     */
    getRgbaColor(): RgbaColor;
    /**
     * Sets color
     *
     * @param color in CSS string form or RgbaColor object
     * @returns this
     */
    setColor(color: string | RgbaColor | HsvColor): this;
    /**
     * Returns color
     *
     * @returns color in CSS form
     */
    getColor(): string;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): ColoredStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: ColoredStyle.Options): this;
    /**
     * Sets all properties pertaining to shadow
     * @param shadow data
     * @returns this
     */
    setShadow(shadow: ColoredStyle.ShadowIn): this;
    /**
     * Gets all properties pertaining to shadow
     * @returns JSON with offsetX, offsetY, color and blur properties
     */
    getShadow(): ColoredStyle.Shadow;
}
export declare namespace ColoredStyle {
    /**
     * color in CSS form or properties object
     */
    type Options = {
        /**
         * color in CSS form
         */
        color?: string | RgbaColor | HsvColor;
        /**
         * mixin color that will be mixed with current color (if exists)
         */
        mixin?: RgbaColor | null;
        /**
         * JSON for displaying shadow
         */
        shadow?: ShadowIn;
    };
    /**
     * properties
     */
    type OptionsOut = {
        /**
         * The attribute color
         */
        color: string | RgbaColor;
        /**
         * mixin color that is mixed with current color (if exists)
         */
        mixin: RgbaColor | null;
        /**
         * Define shadow options
         */
        shadow?: Shadow;
    };
    /**
     * Shadow options
     */
    type Shadow = {
        /**
         * shadow color
         */
        color: string;
        /**
         * shadow blur
         */
        blur: number;
        /**
         * shadow offset in x direction
         */
        offsetx: number;
        /**
         * shadow offset in y direction
         */
        offsety: number;
        /**
         * check if shadow is enable or not
         */
        enable: boolean;
    };
    /**
     * data
     */
    type ShadowIn = Partial<Merge<Shadow, {
        /**
         * color of shadow
         */
        color?: string | RgbaColor;
    }>>;
}
