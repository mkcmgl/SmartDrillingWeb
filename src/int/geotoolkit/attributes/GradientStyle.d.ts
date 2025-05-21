import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Pattern } from '@int/geotoolkit/attributes/Pattern';
/**
 * Enum for gradient Spread methods
 * @enum
 * @readonly
 */
export declare enum SpreadMethods {
    /**
     * Reflect
     */
    Reflect = "reflect",
    /**
     * Repeat
     */
    Repeat = "repeat",
    /**
     * Pad
     */
    Pad = "pad"
}
/**
 * Enum for gradient units
 * @enum
 * @readonly
 */
export declare enum GradientUnits {
    /**
     * Absolute Coordinates
     */
    AbsoluteCoordinates = "absoluteCoordinates",
    /**
     * Object Bounding Box
     */
    ObjectBoundingBox = "objectBoundingBox",
    /**
     * User Space On Use
     */
    UserSpaceOnUse = "userSpaceOnUse"
}
/**
 * Defines an abstract gradient fill style. It contains information about gradient stops and colors.
 */
export declare class GradientStyle extends FillStyle {
    /**
     * Create GradientStyle
     * @param [color] Color of FillStyle (not used in Gradient) or JSON with parameters
     * @param [pattern] - The background pattern (not used in Gradient)
     * @param [foreground] - The foreground color of the pattern (not used in Gradient)
     * @param [evenoddmode] - The flag indicating whether even-odd fill mode is to be used.
     * @param [spreadMethod] Spread method defines how the gradient fills given area if gradient vector does not cover the whole area
     * @param [unitType] Type of coordinated used to define gradient
     * @param [transformation] Gradient transformation
     */
    constructor(color?: GradientStyle.Options | RgbaColor | string, pattern?: Pattern, foreground?: string | RgbaColor, evenoddmode?: boolean, spreadMethod?: SpreadMethods | string, unitType?: GradientUnits | string, transformation?: Transformation);
    clone(): GradientStyle;
    protected copyConstructor(src: GradientStyle, deepCopy?: boolean): this;
    /**
     * Returns the transformation set on the gradient
     */
    getTransformation(): Transformation;
    /**
     * Sets transformation for the gradient
     * @param transform The new gradient transformation
     */
    setTransformation(transform: Transformation): this;
    getSpreadMethod(): SpreadMethods;
    /**
     * Changes spread method for the gradient
     * @param sMethod Spread method to apply to the gradient
     * @returns this
     */
    setSpreadMethod(sMethod: SpreadMethods | 'pad' | 'reflect' | 'repeat'): this;
    /**
     * Sets unit type for the gradient
     * @param u Unit type
     * @returns this
     */
    setUnits(u: GradientUnits | string): this;
    /**
     * Gets the type of units
     */
    getUnits(): GradientUnits | string;
    /**
     * Return the number of defined gradient stop points
     *
     * @returns stops number of stops
     */
    getStopPointsCount(): number;
    /**
     * Add a new stop point at a given position and color.
     *
     * @param position position of the stop point, if in relative coordinates from 0 to 1
     * @param color color in CSS form for specified stop point
     * @returns this
     */
    addStopPoint(position: number, color: string): this;
    /**
     * Removes stop point at index.
     *
     * @param index index of the stop point
     * @returns this
     */
    removeStopPoint(index: number): this;
    /**
     * Return color at a stop point by index.
     *
     * @param index index of a stop point
     * @returns color in CSS format, or null if index is out of range.
     */
    getStopPointColor(index: number): string | null;
    /**
     * Sets color to a stop point by index.
     *
     * @param index index of a stop point
     * @param color Color to set to the stop point
     */
    setStopPointColor(index: number, color: string): this;
    /**
     * Return stop point position
     *
     * @param index index of stop point
     * @returns position either in relative or absolute terms or null if index is out of range.
     */
    getStopPointPosition(index: number): number | null;
    /**
     * Clear all stop points
     *
     * @returns this
     */
    clearStopPoints(): this;
    /**
     * Returns style type
     *
     * @returns STYLE_TYPE_GRADIENT
     */
    getStyleType(): string;
    /**
     * Gets all the properties pertaining to this object
     *
     * @returns properties
     */
    getProperties(): GradientStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: GradientStyle.Options): this;
    /**
     * Removes points that are identical, leaving only one
     * @returns this
     */
    cleanDuplicatePoints(): this;
}
export declare namespace GradientStyle {
    /**
     * Color of FillStyle (not used in Gradient) or JSON with parameters
     */
    type Options = FillStyle.Options & {
        /**
         * Array with stop points. Each object should contain the position and the color.
         */
        stoppoints?: StopPoint[];
        /**
         * Spread method defines how the gradient fills given area if gradient vector does not cover the whole area
         */
        spreadmethod?: SpreadMethods | 'pad' | 'reflect' | 'repeat';
        /**
         * Type of coordinated used to define gradient
         */
        unittype?: GradientUnits | string;
        /**
         * Gradient transformation
         */
        transformation?: Transformation;
    };
    /**
     * properties
     */
    type OptionsOut = FillStyle.OptionsOut & {
        /**
         * Array with stop points. Each object contains the position and the color.
         */
        stoppoints: StopPoint[];
        /**
         * Spread method defines how the gradient fills given area if gradient vector does not cover the whole area
         */
        spreadmethod: SpreadMethods;
        /**
         * Type of coordinates used to define gradient
         */
        unittype: GradientUnits | string;
        /**
         * Gradient transformation
         */
        transformation: Transformation;
    };
    type StopPoint = {
        /**
         * color in CSS form for specified stop point
         */
        color: string;
        /**
         * position of the stop point, if in relative coordinates from 0 to 1
         */
        position: number;
    };
}
