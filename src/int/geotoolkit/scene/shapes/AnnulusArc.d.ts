import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines AnnulusArc node
 */
export declare class AnnulusArc extends ScaledShape {
    /**
     * @param [options] shape options
     */
    constructor(options?: AnnulusArc.Options | LineStyle | LineStyle.Options | string);
    /**
     * @param [x] x coordinate of the center
     * @param [y] y coordinate of the center
     * @param [innerRadius] innerRadius
     * @param [outerRadius] outerRadius
     * @param [startArc] start arc
     * @param [endArc] end arc
     * @param [visible] visibility of node
     * @param [linestyle] style applied on outline
     * @param [fillstyle] style applied on fill
     */
    constructor(x?: number, y?: number, innerRadius?: number, outerRadius?: number, startArc?: number, endArc?: number, visible?: boolean, linestyle?: LineStyle | string | LineStyle.Options, fillstyle?: FillStyle | string | FillStyle.Options);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: AnnulusArc): this;
    /**
     * Creates arc
     * @param [options] arc parameters
     * @returns this
     */
    setAnnulusArc(options?: Omit<AnnulusArc.Options, 'bounds'>): this;
    /**
     * Creates arc
     * @param [x] x coordinate of the center
     * @param [y] y coordinate of the center
     * @param [innerRadius] innerRadius
     * @param [outerRadius] outerRadius
     * @param [startArc] start arc
     * @param [endArc] end arc
     * @returns this
     */
    setAnnulusArc(x?: number, y?: number, innerRadius?: number, outerRadius?: number, startArc?: number, endArc?: number): this;
    /**
     * Return bounds of annulus arc, these bounds will include entire arc.
     */
    getBounds(): Rect;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): AnnulusArc.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties object containing the properties to set
     */
    setProperties(properties?: AnnulusArc.Options): this;
}
export declare namespace AnnulusArc {
    /**
     * x coordinate of the center
     */
    type Options = Shape.Options & {
        /**
         * - x coordinate of the center
         */
        x?: number;
        /**
         * - y coordinate of the center
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
         * sweep angle of the arc
         */
        sweepangle?: number;
        /**
         * shape bounds
         */
        bounds?: Rect;
    };
    /**
     * properties
     */
    type OptionsOut = Shape.OptionsOut & {
        /**
         * x coordinate of the center
         */
        x: number;
        /**
         * y coordinate of the center
         */
        y: number;
        /**
         * size of the inner radius
         */
        innerradius: number;
        /**
         * size of the outer radius
         */
        outerradius: number;
        /**
         * angle where the arc starts
         */
        startarc: number;
        /**
         * angle where the arc ends
         */
        endarc: number;
        /**
         * shape bounds
         */
        bounds: Rect;
        /**
         * sweep angle of the arc
         */
        sweepangle?: number;
    };
}
