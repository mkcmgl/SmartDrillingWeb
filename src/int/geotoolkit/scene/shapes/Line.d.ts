import { Point } from '@int/geotoolkit/util/Point';
import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { ILineDecoration } from '@int/geotoolkit/attributes/ILineDecoration';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Define a line shape.
 * <p>
 * Line shapes are the simplest shapes and they provide a foundation for more complex shapes.
 * Width, color, and style is set by assigning attributes to the line shape.<br>
 * Line shape itself defines geometry and assigned attributes provide information about drawing.
 * </p>
 */
export declare class Line extends ScaledShape {
    /**
     * @param [options] LineParamsType
     */
    constructor(options?: Line.Options);
    /**
     * @param [from] line from point
     * @param [to] line end point
     * @param [visible] line visibility
     * @param [linestyle] line style
     */
    constructor(from?: Point, to?: Point, visible?: boolean, linestyle?: LineStyle | string | LineStyle.Options);
    clone(): Line;
    protected copyConstructor(src: Line, deepCopy?: boolean): this;
    /**
     * Return Line Decoration Style
     */
    getLineDecoration(): ILineDecoration;
    /**
     * Specify Line Decoration style
     *
     * @param lineDecoration line decoration style
     * @returns this
     */
    setLineDecoration(lineDecoration: ILineDecoration | string): this;
    /**
     * returns from point
     */
    getFrom(): Point | null;
    /**
     * returns to point
     */
    getTo(): Point | null;
    /**
     * Set line positions
     * @param line set of two points
     * @returns this
     */
    setLine(line: Line.Position): this;
    render(context: RenderingContext): void;
    /**
     * Update bounds
     * @returns this
     */
    updateBounds(): this;
    /**
     * Return bounding box of this line.
     *
     * @returns bounds.
     */
    getBounds(): Rect | null;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Line.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     */
    setProperties(properties?: Line.Options): this;
}
export declare namespace Line {
    /**
     * origin point of line
     */
    type Options = Shape.Options & Position & {
        /**
         * line decoration style
         */
        linedecoration?: ILineDecoration | string;
        /**
         * shape bounds
         */
        bounds?: Rect | Rect.Options;
    };
    /**
     * set of two points
     */
    type Position = {
        /**
         * from position
         */
        from?: Point | Point.Options;
        /**
         * to position
         */
        to?: Point | Point.Options;
    };
    /**
     * properties
     */
    type OptionsOut = Shape.OptionsOut & {
        /**
         * from
         */
        from: Point;
        /**
         * to
         */
        to: Point;
        /**
         * shape bounds
         */
        bounds?: Rect;
        /**
         * line decoration style
         */
        linedecoration?: ILineDecoration;
    };
}
