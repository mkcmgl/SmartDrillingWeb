/**
 * Specify RGBA color, which can be defined as s set of the four color
 * components (Red, Green, Blue, Alpha). Each component must be from 0 to 255.
 */
export declare class RgbaColor {
    constructor();
    /**
     * @param color ready-to-use color (string, rgbacolor...)
     */
    constructor(color: string | RgbaColor);
    /**
     * @param red red component from 0 to 255
     * @param green green component from 0 to 255
     * @param blue blue component from 0 to 255
     * @param [alpha] alpha component from 0 to 255
     */
    constructor(red: number, green: number, blue: number, alpha?: number);
    /**
     * Return clone of the color
     * @returns clone
     */
    clone(): RgbaColor;
    /**
     * set color value
     * @param red red component from 0 to 255
     * @param green green component from 0 to 255
     * @param blue blue component from 0 to 255
     * @param [alpha] alpha component from 0 to 255
     */
    setColor(red: number, green: number, blue: number, alpha?: number): this;
    /**
     * set color value
     * @param color red component from 0 to 255 or CSS color as a string
     */
    setColor(color: string | RgbaColor): this;
    /**
     * Sets the red component to the given value.<br>
     * This function expects the red component to be in range[0-255].<br>
     * @param val value of the red component
     * @returns this
     */
    setRed(val: number): this;
    /**
     * Sets the blue component to the given value.<br>
     * This function expects the blue component to be in range[0-255].<br>
     * @param val value of the blue component
     * @returns this
     */
    setBlue(val: number): this;
    /**
     * Sets the green component to the given value.<br>
     * This function expects the green component to be in range[0-255].<br>
     * @param val value of the green component
     * @returns this
     */
    setGreen(val: number): this;
    /**
     * Sets the alpha component to the given value.<br>
     * This function expects the alpha component to be in range[0-1].<br>
     * @param val value of the alpha component
     * @returns this
     */
    setAlpha(val: number): this;
    /**
     * Return the red component value.<br>
     * The value should be in range[0-255]
     */
    getRed(): number;
    /**
     * Return the green component value.<br>
     * The value should be in range[0-255]
     */
    getGreen(): number;
    /**
     * Return the blue component value.<br>
     * The value should be in range[0-255]
     */
    getBlue(): number;
    /**
     * Return the alpha component value.<br>
     * The value should be in range[0-255]
     */
    getAlpha(): number;
    /**
     * Convert color to string
     */
    toRgbaString(): string;
    /**
     * Convert color to string
     */
    toCSS(): string;
    /**
     * Create or get RGBA color from object
     *
     * @param object object can be in format of constructor of RgbaColor
     */
    static fromObject(object: RgbaColor | string): RgbaColor;
    /**
     * Convert RGBA color to RGB
     *
     * @param [background] Conversion will be based on this background color
     * @returns Resulted color in CSS
     */
    toRgb(background?: string | RgbaColor): string;
    /**
     * Convert RGBA color to hexadecimal
     *
     * @param [a] Include alpha channel in hexadecimal
     * @returns Resulted color in hexadecimal
     */
    toHex(a?: boolean): string;
    getClassName(): string;
    static getClassName(): string;
}
