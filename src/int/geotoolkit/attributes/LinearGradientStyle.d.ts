import { Point } from '@int/geotoolkit/util/Point';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { GradientUnits, SpreadMethods } from '@int/geotoolkit/attributes/GradientStyle';
import { GradientStyle } from '@int/geotoolkit/attributes/GradientStyle';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
/**
 * Defines a linear gradient fill style to provide smooth transitions between two or more specified colors.
 */
export declare class LinearGradientStyle extends GradientStyle {
    /**
     * Create LinearGradientStyle
     * @param [startColor] start color in CSS format or JSON with parameters
     * @param [endColor] end color in CSS format
     * @param [startPoint] start point of gradient in relative form, 0-1 or absolute coordinates
     * @param [endPoint] end point of gradient in relative form, 0-1 or absolute coordinates
     * @param [colorProvider] colorProvider
     * @param [spreadMethod] Spread method defines how the gradient fills given area if gradient vector does not cover the whole area
     * @param [unitType] Type of coordinated used to define gradient
     * @param [transformation] Gradient transformation
     */
    constructor(startColor?: LinearGradientStyle.Options | string, endColor?: string, startPoint?: Point | Point.Options, endPoint?: Point | Point.Options, colorProvider?: ColorProvider, spreadMethod?: SpreadMethods | 'pad' | 'reflect' | 'repeat', unitType?: GradientUnits | string, transformation?: Transformation);
    clone(): LinearGradientStyle;
    protected copyConstructor(src: LinearGradientStyle, deepCopy?: boolean): this;
    /**
     * Set start point from 0 to 1
     *
     * @param p start point
     * @returns this
     */
    setStartPoint(p: Point): this;
    /**
     * Return start point from 0 to 1
     *
     * @returns point
     */
    getStartPoint(): Point;
    /**
     * Set end point from 0 to 1
     *
     * @param p end point
     * @returns this
     */
    setEndPoint(p: Point): this;
    /**
     * Return end point from 0 to 1
     *
     * @returns end point
     */
    getEndPoint(): Point;
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
     * @returns STYLE_TYPE_LINEAR_GRADIENT
     */
    getStyleType(): string;
    /**
     * Gets all the properties pertaining to this object
     *
     * @returns An object containing the properties to set
     */
    getProperties(): LinearGradientStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: LinearGradientStyle.Options): this;
}
export declare namespace LinearGradientStyle {
    /**
     * start color in CSS format or JSON with parameters
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
         * start point of gradient in relative form, 0-1 or absolute coordinates
         */
        startpoint?: Point;
        /**
         * end point of gradient in relative form, 0-1 or absolute coordinates
         */
        endpoint?: Point;
        /**
         * colorProvider
         */
        colorprovider?: ColorProvider;
    };
    /**
     * An object containing the properties to set
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
         * start point of gradient in relative form, 0-1 or absolute coordinates
         */
        startpoint: Point;
        /**
         * end point of gradient in relative form, 0-1 or absolute coordinates
         */
        endpoint: Point;
        /**
         * colorProvider
         */
        colorprovider: ColorProvider;
    };
}
