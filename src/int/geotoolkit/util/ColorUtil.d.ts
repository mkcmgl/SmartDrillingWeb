/**
 * @module geotoolkit/util/ColorUtil
 */
import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { HsvColor } from '@int/geotoolkit/util/HsvColor';
/**
 * Enum of Known Colors
 * @enum
 * @readonly
 */
export declare enum KnownColors {
    /**
     * Black
     */
    Black = "#212121",
    /**
     * Gray
     */
    Gray = "#bdbdbd",
    /**
     * Grey
     */
    Grey = "#bdbdbd",
    /**
     * Light gray
     */
    LightGray = "#eeeeee",
    /**
     * Light grey
     */
    LightGrey = "#eeeeee",
    /**
     * Dark gray
     */
    DarkGray = "#757575",
    /**
     * Dark grey
     */
    DarkGrey = "#757575",
    /**
     * Orange
     */
    Orange = "#ef6c00",
    /**
     * Light orange
     */
    LightOrange = "#ffe0b2",
    /**
     * Dark orange
     */
    DarkOrange = "#e65100",
    /**
     * Green
     */
    Green = "#7cb342",
    /**
     * Light green
     */
    LightGreen = "#dcedc8",
    /**
     * Dark green
     */
    DarkGreen = "#33691e",
    /**
     * Blue
     */
    Blue = "#2196f3",
    /**
     * Light blue
     */
    LightBlue = "#bbdefb",
    /**
     * Dark blue
     */
    DarkBlue = "#1565c0",
    /**
     * Yellow
     */
    Yellow = "#fdd835",
    /**
     * Light yellow
     */
    LightYellow = "#fff9c4",
    /**
     * Dark yellow
     */
    DarkYellow = "#fbc02d",
    /**
     * Red
     */
    Red = "#e64a19",
    /**
     * Light red
     */
    LightRed = "#ff7043",
    /**
     * Dark red
     */
    DarkRed = "#bf360c",
    /**
     * Indigo
     */
    Indigo = "#4b0082",
    /**
     * Violet
     */
    Violet = "#ee82ee"
}
/**
 * An utility class that provides helpful functions to manipulate colors. This class provides functions to parse, edit and convert colors from rgba to hsb.
 * It's especially useful to convert colors in css format to toolkit {@link @int/geotoolkit/util/RgbaColor~RgbaColor}.
 */
export declare class ColorUtil {
    /**
     * Returns random RGBA color
     * @param [alpha] transparency chanel from 0 to 1
     * @param [pseudo] pseudo random
     * @returns random color
     */
    static getRandomColorRgba(alpha?: number, pseudo?: boolean | number): string;
    /**
     * return random RGB color
     * @param [pseudo] pseudo random
     * @returns random color
     */
    static getRandomColorRgb(pseudo?: boolean | number): string;
    /**
     * convert css color `{string}` to {@link @int/geotoolkit/util/RgbaColor~RgbaColor}
     * @param color color to parse
     * @returns color
     */
    static parseColor(color: string | RgbaColor): RgbaColor;
    /**
     * set value for the alpha chanel
     * @param color CSS color
     * @param a alpha component 0 - 255
     */
    static setAlpha(color: string, a: number): string;
    /**
     * Converts legacy MS Access Code to a RGBA color
     * @see {@link http://cloford.com/resources/colours/500col.htm}
     * @param accessCode The MS access code to convert to a color
     * @returns The converted color or null
     */
    static parseMSColor(accessCode: number): RgbaColor | null;
    /**
     * converts color to string
     * @param color color to convert
     */
    static colorToString(color: string | RgbaColor | HsvColor | null | undefined): string | null | undefined;
    /**
     * invert color
     * @param color color to parse
     * @returns inverted color
     */
    static invertColor(color: string | RgbaColor): string;
    static getClassName(): string;
    getClassName(): string;
}
