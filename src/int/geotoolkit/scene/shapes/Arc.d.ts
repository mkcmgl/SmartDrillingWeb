import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { Rect } from '@int/geotoolkit/util/Rect';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * The Arc shape is defined by its center, radius and start/end angles.<br>
 */
export declare class Arc extends ScaledShape {
    /**
     * @param [options] Arc options
     */
    constructor(options?: Arc.Options | LineStyle.Type);
    /**
     * @param [x] x coordinate of the center
     * @param [y] y coordinate of the center
     * @param [radius] The radius of the arc
     * @param [startArc] The start angle for the arc in radians
     * @param [endArc] The end angle for the arc in radians
     * @param [visible] visibility of node
     * @param [linestyle] style applied on outline
     * @param [fillstyle] style applied on fill
     * @param [sweepArc] Defines the sweep of the arc
     * @param [connectToCenter] A flag which specifies if the end points of the arc should be connected to center with lines, like a pie slice
     */
    constructor(x?: number, y?: number, radius?: number, startArc?: number, endArc?: number, visible?: boolean, linestyle?: LineStyle.Type, fillstyle?: FillStyle.Type, sweepArc?: number, connectToCenter?: boolean);
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: Arc): this;
    /**
     * Set arc parameters
     * @param [options] Arc options
     * @returns this
     */
    setArc(options?: Omit<Arc.Options, 'bounds'>): this;
    /**
     * Set arc parameters
     * @param [x] x coordinate of the center
     * @param [y] y coordinate of the center
     * @param [radius] The radius of the arc
     * @param [startArc] The start angle for the arc in radians
     * @param [endArc] The end angle for the arc in radians
     * @param [sweepArc] Defines the sweep of the arc
     * @param [connectToCenter] connect to center
     * @returns this
     */
    setArc(x?: number, y?: number, radius?: number, startArc?: number, endArc?: number, sweepArc?: number, connectToCenter?: boolean): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    render(context: RenderingContext): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Arc.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties object containing the properties to set
     */
    setProperties(properties?: Arc.Options): this;
}
export declare namespace Arc {
    /**
     * x coordinate of the center
     */
    type Options = Shape.Options & {
        /**
         * x coordinate of the center
         */
        x?: number;
        /**
         * y coordinate of the center
         */
        y?: number;
        /**
         * The radius of the arc
         */
        radius?: number;
        /**
         * The start angle for the arc in radians
         */
        startarc?: number;
        /**
         * The end angle for the arc in radians
         */
        endarc?: number;
        /**
         * Defines the sweep of the arc
         */
        sweeparc?: number;
        /**
         * A flag which specifies if the end points of the arc should be connected to center with lines, like a pie slice
         */
        connecttocenter?: boolean;
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
         * size of the radius
         */
        radius: number;
        /**
         * angle where the arc starts
         */
        startarc: number;
        /**
         * angle where the arc ends
         */
        endarc: number;
        /**
         * angle by which the arc sweeps
         */
        sweeparc: number;
        /**
         * A flag which specifies if the end points of the arc should be connected to center with lines, like a pie slice
         */
        connecttocenter: boolean;
        /**
         * shape bounds
         */
        bounds: Rect;
    };
}
