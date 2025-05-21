import { Rect } from '@int/geotoolkit/util/Rect';
import { ScaledShape } from '@int/geotoolkit/scene/shapes/ScaledShape';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
/**
 * The base abstract class for a number of shapes whose geometry
 * is defined by a rectangular frame. This class does not directly
 * specify any specific geometry by itself, but merely provides
 * manipulation methods inherited by a whole category of shapes.
 */
export declare abstract class RectangularShape extends ScaledShape implements ILayoutable {
    /**
     * @param [options] rectangular shape params
     */
    protected constructor(options?: RectangularShape.Options);
    /**
     * @param [rect] rect
     */
    protected constructor(rect?: Rect);
    /**
     * @param [left] x coordinate of the top left corner
     * @param [top] y coordinate of the top left corner
     * @param [right] x coordinate of the bottom right corner (if 'width' not specified)
     * @param [bottom] y coordinate of the bottom right corner (if 'height' not specified)
     * @param [width] width (if 'right' not specified)
     * @param [height] height (if 'bottom' not specified)
     * @param [visible] visibility of node
     * @param [linestyle] style applied on outline
     * @param [fillstyle] style applied on fill
     */
    protected constructor(left?: number, top?: number, right?: number, bottom?: number, width?: number, height?: number, visible?: boolean, linestyle?: LineStyle.Type, fillstyle?: FillStyle.Type);
    protected copyConstructor(src: RectangularShape, deepCopy?: boolean): this;
    /**
     * Returns the X coordinate of the center of the framing
     * rectangle of this rectangular shape.
     */
    getCenterX(): number;
    /**
     * Returns the Y coordinate of the center of the framing
     * rectangle of this rectangular shape.
     */
    getCenterY(): number;
    /**
     * Returns the X coordinate of the left bottom corner of the framing rectangle.
     */
    getX(): number;
    /**
     * Returns the Y coordinate of the left bottom corner of
     * the framing rectangle.
     */
    getY(): number;
    /**
     * Returns the width of the framing rectangle.
     */
    getWidth(): number;
    /**
     * Returns the height of the framing rectangle.
     */
    getHeight(): number;
    /**
     * Return bounds. Will also lock the bounds so they cannot be directly modified.
     * @returns bounds
     */
    getBounds(): Rect;
    /**
     * Sets the location and size of the framing rectangle of this
     * rectangular shape to the specified values. This method is the same as setRect.
     *
     * @param rect bounds rect
     * @returns this
     */
    setBounds(rect: Rect): this;
    /**
     * Sets the location and size of the framing rectangle of this
     * rectangular shape to the specified values. This method is the same as setRect.
     *
     * @param x1 x coordinate of the top left corner
     * @param [y1] y coordinate of the top left corner
     * @param [x2] x coordinate of the bottom right corner
     * @param [y2] y coordinate of the bottom right corner
     * @returns this
     */
    setBounds(x1: number, y1?: number, x2?: number, y2?: number): this;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style or layout style params
     * @param [merge] true if you want to merge layoutStyle with existing attribute, false by default
     */
    setLayoutStyle(layoutStyle: LayoutStyle | LayoutStyle.Options, merge?: boolean): this;
    /**
     * Return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Sets the location and size of the framing rectangle of this
     * rectangular shape to the specified values.
     *
     * @param rect rect
     */
    setRect(rect: Rect): this;
    /**
     * Sets the location and size of the framing rectangle of this
     * rectangular shape to the specified values.
     *
     * @param params rect params
     */
    setRect(params: Rect.Options): this;
    /**
     * Sets the location and size of the framing rectangle of this
     * rectangular shape to the specified values.
     *
     * @param x1 x coordinate of the top left corner
     * @param y1 y coordinate of the top left corner
     * @param x2 x coordinate of the bottom right corner
     * @param y2 y coordinate of the bottom right corner
     */
    setRect(x1: number, y1: number, x2: number, y2: number): this;
    protected onRectChanged(newRect: Rect): this;
    /**
     * Notify that layout is invalidated. Send event {@link import("geotoolkit/layout/Events").Events.LayoutInvalidated}
     * @returns this
     */
    invalidateLayout(): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): RectangularShape.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     */
    setProperties(properties?: RectangularShape.Options): this;
}
export declare namespace RectangularShape {
    /**
     * x coordinate of the top left corner
     */
    type Options = Shape.Options & {
        /**
         * bounds
         */
        bounds?: Rect.Type;
        /**
         * x coordinate of the top left corner
         */
        left?: number;
        /**
         * y coordinate of the top left corner
         */
        top?: number;
        /**
         * x coordinate of the bottom right corner (if 'width' not specified)
         */
        right?: number;
        /**
         * y coordinate of the bottom right corner (if 'height' not specified)
         */
        bottom?: number;
        /**
         * width (if 'right' not specified)
         */
        width?: number;
        /**
         * height (if 'bottom' not specified)
         */
        height?: number;
    };
    /**
     * properties
     */
    type OptionsOut = Shape.OptionsOut & {
        /**
         * shape bounds
         */
        bounds?: Rect;
    };
}
