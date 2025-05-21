import { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import { ColoredStyle } from '@int/geotoolkit/attributes/ColoredStyle';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
import { HsvColor } from '@int/geotoolkit/util/HsvColor';
/**
 * Enum of line style patterns
 * @enum
 * @readonly
 */
export declare class Patterns extends Array<number> {
    /**
     * Solid line
     */
    static readonly Solid: Patterns;
    /**
     * Line with long dashes
     */
    static readonly Dash: Patterns;
    /**
     * Small dots continuously
     */
    static readonly Dot: Patterns;
    /**
     * Dash followed by dot
     */
    static readonly DashDot: Patterns;
    /**
     * Short Dashes
     */
    static readonly ShortDash: Patterns;
    /**
     * Very long dashes
     */
    static readonly LongDash: Patterns;
    /**
     * Dash followed by two dots
     */
    static readonly DashDotDot: Patterns;
    /**
     * Dash followed by long dash
     */
    static readonly DashLongDash: Patterns;
}
/**
 * Enum of line join
 * @enum
 * @readonly
 */
export declare enum JoinStyle {
    /**
     * Angular
     */
    Miter = "miter",
    /**
     * Rounded
     */
    Round = "round",
    /**
     * Bevelled
     */
    Bevel = "bevel"
}
/**
 * Enum of line cap
 * @enum
 * @readonly
 */
export declare enum CapStyle {
    /**
     * Short angular
     */
    Butt = "butt",
    /**
     * Rounded
     */
    Round = "round",
    /**
     * Long angular
     */
    Square = "square"
}
/**
 * Defines properties of outline. It contains line color, line width, and
 * pattern. Patterns can be passed in using LineStyle.Pattern.Dot etc.
 */
export declare class LineStyle extends ColoredStyle {
    /**
     * Create LineStyle
     * @param [color] The line color or a properties
     * @param [width] The line thickness
     * @param [pattern] The line pattern
     */
    constructor(color?: LineStyle.Type, width?: number, pattern?: number[] | Patterns);
    clone(): LineStyle;
    protected copyConstructor(src: LineStyle, deepCopy?: boolean): this;
    /**
     * return Pixel Snap Mode
     */
    getPixelSnapMode(): LineStyle.PixelSnapMode;
    /**
     * Set Pixel Snap Mode
     *
     * @param [pixelSnapMode] Pixel Snap Mode
     * @returns this
     */
    setPixelSnapMode(pixelSnapMode?: LineStyle.PixelSnapMode | boolean): this;
    /**
     * Sets fill style to fill line content. if fill is set line color is ignored
     *
     * @param fill fill style to be used to fill line.
     * @returns this
     */
    setFillStyle(fill: FillStyle.Type): this;
    /**
     * Returns fill style
     * @returns fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Line join style, passes through to the underlying html5 canvas renderer.
     *
     * @param lineJoin style'
     * @returns this
     */
    setJoinStyle(lineJoin: JoinStyle | string): this;
    /**
     * Get current join style
     *
     * @returns join style
     */
    getJoinStyle(): JoinStyle | string;
    /**
     * Line cap style, passes through to canvas directly
     * @param capStyle can be 'butt', 'square', or 'round'
     * @returns this
     */
    setCapStyle(capStyle: CapStyle | string): this;
    /**
     * Get current line cap style
     * @returns capStyle can be 'butt', 'square', or 'round'
     */
    getCapStyle(): CapStyle | string;
    /**
     * Returns unit of the measure for the width
     */
    getUnit(): AbstractUnit;
    /**
     * Sets unit of the measure for the width
     *
     * @param unit a scale unit or string symbol
     * @returns this
     */
    setUnit(unit: AbstractUnit | string): this;
    /**
     * Sets line width
     *
     * @param width line width
     * @returns this
     */
    setWidth(width: number | string): this;
    /**
     * Return line width
     *
     * @returns line width
     */
    getWidth(): number;
    /**
     * Return line pattern
     *
     * @returns pattern
     */
    getPattern(): Patterns | number[];
    /**
     * Sets line pattern
     *
     * @param pattern line pattern
     * @returns this
     */
    setPattern(pattern: Patterns | number[]): this;
    /**
     * Returns true if width depends on transformation
     * @returns true if width depends on transformation
     */
    isScalable(): boolean;
    /**
     * Set true if width should depend on transformation
     * @param scalable true if width should depend on transformation
     * @returns this
     */
    setScalable(scalable: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): LineStyle.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LineStyle.Options): this;
    /**
     * Create or get line style from object
     * @param [object] object can be in format of constructor of {@link @int/geotoolkit/attributes/LineStyle~LineStyle}
     * @returns line style
     */
    static fromObject(object?: LineStyle.Type): LineStyle | null;
    /**
     * Merge css linestyle object with existing instance
     * @param node node
     * @param lineStyle instance of node property
     * @param object contains line style
     * @param [merge] merge flag
     * @param [invalidateMethod] invalidate method
     * @returns lineStyle
     * @example
     * import {Shape} from '@int/geotoolkit/scene/shapes/Shape';
     * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
     *
     * class CustomSymbol extends Shape {
     *   ...
     *    public setLineStyle (lineStyle: LineStyle.Type, merge?: boolean): this {
     *       lineStyle = LineStyle.mergeFromObject(this, this.getLineStyle(), lineStyle, merge);
     *       return super.setLineStyle(lineStyle);
     *    }
     *   ...
     * }
     *
     * const symbol = new CustomSymbol(new Rect(50, 50, 150, 150))
     *   .setLineStyle({
     *        'color': KnownColors.Orange
     *    })
     *   .setLineStyle({
     *        'width': 13
     * }, true);
     */
    static mergeFromObject(node: IStyleListener | null, lineStyle: LineStyle | null, object: LineStyle | LineStyle.OptionsWithPatternsExtended | string | RgbaColor | HsvColor | null, merge?: boolean, invalidateMethod?: IStyleListener.AttributeCallback): LineStyle;
    /**
     * Empty style
     */
    static get Empty(): LineStyle;
}
export declare namespace LineStyle {
    type Type = LineStyle | Options | string | RgbaColor | HsvColor | null;
    type PixelSnapModeCallback = (val: number, snapToPixel: boolean) => number;
    /**
     * Pixel Snap Mode
     */
    type PixelSnapMode = {
        /**
         * snap by x
         */
        x: PixelSnapModeCallback | boolean;
        /**
         * snap by y
         */
        y: PixelSnapModeCallback | boolean;
    };
    type OptionsOut = ColoredStyle.OptionsOut & {
        /**
         * line thickness
         */
        width: number;
        /**
         * line pattern
         */
        pattern: Patterns | number[];
        /**
         * The line join style
         */
        linejoin: JoinStyle | string;
        /**
         * The line cap style
         */
        linecap: CapStyle | string;
        /**
         * optional fill style to be used to fill lines generated with this style.
         */
        fill: FillStyle;
        /**
         * optional unit for the width
         */
        unit: AbstractUnit | string;
        /**
         * pixel SnapMode JSON
         */
        pixelsnapmode: PixelSnapMode;
        /**
         * true if width depends on transformation
         */
        scalable: boolean;
    };
    /**
     * The line color or a properties
     */
    type Options = ColoredStyle.Options & {
        /**
         * The line thickness
         */
        width?: number | string;
        /**
         * The line pattern
         */
        pattern?: Patterns | number[];
        /**
         * The line join style
         */
        linejoin?: JoinStyle | string;
        /**
         * The line cap style
         */
        linecap?: CapStyle | string;
        /**
         * optional fill style to be used to fill lines generated with this style.
         */
        fill?: FillStyle.Type;
        /**
         * optional unit for the width
         */
        unit?: AbstractUnit | string;
        /**
         * Pixel Snap Mode, default(`{'x': false, 'y': false}`)
         */
        pixelsnapmode?: PixelSnapMode | boolean;
        /**
         * true if width should depend on transformation
         */
        scalable?: boolean;
    };
    /**
     * Line style properties, supports pattern as string
     */
    type OptionsWithPatternsExtended = Omit<LineStyle.Options, 'pattern'> & {
        pattern?: string | Patterns | number[];
    };
}
