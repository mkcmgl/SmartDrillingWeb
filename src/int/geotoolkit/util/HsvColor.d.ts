import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
/**
 * Specify HSV color, which can be defined as s set of the three color
 * components (Hue, Saturation, Value).
 */
export declare class HsvColor {
    constructor();
    /**
     * @param hue hue from 0 to 360
     * @param sat sat from 0 to 1
     * @param val val from 0 to 1
     */
    constructor(hue: number, sat: number, val: number);
    constructor(rgba: RgbaColor);
    /**
     * return new color
     */
    static getNewColor(): string;
    /**
     * Sets brightness
     * @param color color
     * @param correctionFactor correction Factor
     * @returns result
     */
    static setBrightness(color: RgbaColor, correctionFactor: number): RgbaColor;
    /**
     * Return clone of the color
     * @returns clone
     */
    clone(): HsvColor;
    /**
     * Return hue
     */
    getHue(): number;
    /**
     * Return saturation
     */
    getSaturation(): number;
    /**
     * Return value
     */
    getValue(): number;
    /**
     * Add delta to saturation.
     * Saturation is between 0 and 1
     * @param delta delta value to be added
     * @returns this
     */
    adjustSaturation(delta: number): this;
    /**
     * Add delta to value.
     * Value is between 0 and 1
     * @param delta delta value to be added
     * @returns this
     */
    adjustValue(delta: number): this;
    /**
     * Multiply saturation factor.
     * Saturation is between 0 and 1
     * @param factor saturation factor (between 0 - 1)
     * @returns this
     */
    adjustSaturationByFactor(factor: number): this;
    /**
     * Multiply value by factor.
     * Value is between 0 and 1
     * @param factor factor to multiply this color by
     * @returns this
     */
    adjustValueByFactor(factor: number): this;
    /**
     * Convert current value and saturation to RGBA
     */
    toRgbaColor(): RgbaColor;
    /**
     * Convert color to string
     */
    toRgbaString(): string;
    getClassName(): string;
    static getClassName(): string;
}
