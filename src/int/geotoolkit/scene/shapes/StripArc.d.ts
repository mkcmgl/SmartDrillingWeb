import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { Rect } from '@int/geotoolkit/util/Rect';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * Defines the StripArc class, which is a modified AnnulusArc to allow "height" for pseudo-3d pie chart cap drawing
 */
export declare class StripArc extends ScaledShape {
    /**
     * @param [options] options to specify ellipse
     */
    constructor(options?: StripArc.Options);
    /**
     * @param [x] x coordinate of the center
     * @param [y] y coordinate of the center
     * @param [innerRadius] innerRadius
     * @param [outerRadius] outerRadius
     * @param [startArc] start arc
     * @param [endArc] end arc
     * @param [linestyle] the linestyle
     * @param [fillstyle] the fillstyle
     * @param [height] height of the arc when drawn with a "depth"
     */
    constructor(x?: number, y?: number, innerRadius?: number, outerRadius?: number, startArc?: number, endArc?: number, linestyle?: LineStyle | string | LineStyle.Options, fillstyle?: FillStyle | string | FillStyle.Options, height?: number);
    /**
     * copy constructor
     * @param src Source to copy from
     * @returns this
     */
    protected copyConstructor(src: StripArc): this;
    /**
     * Sets data for the arc
     * @param data strip arc data
     * @returns this
     */
    setData(data: StripArc.Data): this;
    /**
     * Sets data for the arc
     * @param x x coordinate of the center
     * @param y y coordinate of the center
     * @param [innerRadius] innerRadius
     * @param [outerRadius] outerRadius
     * @param [startArc] start arc
     * @param [endArc] end arc
     * @param [height] height of the arc when drawn with a "depth"
     * @returns this
     */
    setData(x: number, y: number, innerRadius?: number, outerRadius?: number, startArc?: number, endArc?: number, height?: number): this;
    /**
     * Return bounds of strip arc, these bounds will include entire arc.
     */
    getBounds(): Rect;
    render(context: RenderingContext): void;
    /**
     * Returns properties
     * @returns the properties to set
     */
    getProperties(): StripArc.OptionsOut;
    /**
     * Set properties
     * @param properties the properties to set
     */
    setProperties(properties?: StripArc.Options): this;
}
export declare namespace StripArc {
    /**
     * x coordinate of the center OR options to specify ellipse
     */
    type Options = Shape.Options & Data & {
        /**
         * bounds
         */
        bounds?: Rect;
    };
    type Data = {
        /**
         * x coordinate of the center
         */
        x?: number;
        /**
         * y coordinate of the center
         */
        y?: number;
        /**
         * innerRadius
         */
        innerradius?: number;
        /**
         * outerRadius
         */
        outerradius?: number;
        /**
         * start arc
         */
        startarc?: number;
        /**
         * end arc
         */
        endarc?: number;
        /**
         * height of the arc when drawn with a "depth"
         */
        height?: number;
    };
    /**
     * the properties to set
     */
    type OptionsOut = Shape.OptionsOut & Data & {
        /**
         * bounds
         */
        bounds?: Rect;
    };
}
