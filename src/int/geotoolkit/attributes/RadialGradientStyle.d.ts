import { Point } from '@int/geotoolkit/util/Point';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { GradientUnits } from '@int/geotoolkit/attributes/GradientStyle';
import { GradientStyle } from '@int/geotoolkit/attributes/GradientStyle';
/**
 * Defines a radial gradient fill style, which represents a gradient of colors along of cone between two circles.<br>
 * Radial gradients are defined with relative numbers from 0-1 describing the inner and outer circles. radius values are percentages of the shape's radius
 */
export declare class RadialGradientStyle extends GradientStyle {
    /**
     * Create RadialGradientStyle
     * @param [startColor] start color in CSS format or a properties
     * @param [endColor] end color in CSS format
     * @param [innerCenter] centerpoint of inner circle of gradient in relative form, 0-1 or absolute coordinates
     * @param [innerRadius] radius of inner circle in relative form, 0-1 or absolute coordinates
     * @param [outerCenter] centerpoint of outer circle of gradient in relative form, 0-1 or absolute coordinates
     * @param [outerRadius] radius of outer circle of gradient from 0-1 or absolute coordinates
     * @param [transformation] Gradient transformation
     * @param [unitType] Type of coordinated used to define gradient
     */
    constructor(startColor?: RadialGradientStyle.Options | string, endColor?: string, innerCenter?: Point, innerRadius?: number, outerCenter?: Point, outerRadius?: number, transformation?: Transformation, unitType?: GradientUnits | string);
    clone(): RadialGradientStyle;
    protected copyConstructor(src: RadialGradientStyle, deepCopy?: boolean): this;
    /**
     * Set inner center point in relative terms
     * @param p point defining center of inner circle
     * @returns this
     */
    setInnerCenter(p: Point): this;
    /**
     * Get the center of the inner circle
     */
    getInnerCenter(): Point;
    /**
     * Set end point from 0 to 1
     *
     * @param p end point
     * @returns this
     */
    setOuterCenter(p: Point): this;
    /**
     * Return start center in relative coordinates from 0 to 1
     *
     * @returns point
     */
    getOuterCenter(): Point;
    /**
     * Set end point from 0 to 1
     *
     * @param r radius of outer circle of gradient from 0-1
     * @returns this
     */
    setOuterRadius(r: number): this;
    /**
     * Return start point from 0 to 1
     *
     * @returns radius of outer circle of gradient from 0-1
     */
    getOuterRadius(): number;
    /**
     * Sets inner radius
     * @param r Radius of inner circle
     * @returns this
     */
    setInnerRadius(r: number): this;
    /**
     * Gets inner radius
     * @returns radius of the inner circle
     */
    getInnerRadius(): number;
    /**
     * Sets start color
     *
     * @param color color to set
     * @returns this
     */
    setStartColor(color: string): this;
    /**
     * Returns start color
     *
     * @returns color in CSS format
     */
    getStartColor(): string;
    /**
     * Sets end color
     *
     * @param color color to set in CSS format
     * @returns this
     */
    setEndColor(color: string): this;
    /**
     * Returns end color
     *
     * @returns color color in CSS format
     */
    getEndColor(): string;
    /**
     * Return type of the style.
     *
     * @returns STYLE_TYPE_RADIAL_GRADIENT
     */
    getStyleType(): string;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties
     */
    getProperties(): RadialGradientStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: RadialGradientStyle.Options): this;
}
export declare namespace RadialGradientStyle {
    /**
     * start color in CSS format or a properties
     */
    type Options = GradientStyle.Options & {
        /**
         * start color in CSS format
         */
        startcolor?: string;
        /**
         * end color in CSS format
         */
        endcolor?: string;
        /**
         * centerpoint of inner circle of gradient in relative form, 0-1 or absolute coordinates
         */
        innercenter?: Point;
        /**
         * centerpoint of outer circle of gradient in relative form, 0-1 or absolute coordinates
         */
        outercenter?: Point;
        /**
         * radius of inner circle in relative form, 0-1 or absolute coordinates
         */
        innerradius?: number;
        /**
         * radius of outer circle of gradient from 0-1 or absolute coordinates
         */
        outerradius?: number;
    };
    /**
     * An object containing the properties
     */
    type OptionsOut = GradientStyle.OptionsOut & {
        /**
         * start color in CSS format
         */
        startcolor: string;
        /**
         * end color in CSS format
         */
        endcolor: string;
        /**
         * centerpoint of inner circle of gradient in relative form, 0-1 or absolute coordinates
         */
        innercenter: Point;
        /**
         * centerpoint of outer circle of gradient in relative form, 0-1 or absolute coordinates
         */
        outercenter: Point;
        /**
         * radius of inner circle in relative form, 0-1 or absolute coordinates
         */
        innerradius: number;
        /**
         * radius of outer circle of gradient from 0-1 or absolute coordinates
         */
        outerradius: number;
    };
}
