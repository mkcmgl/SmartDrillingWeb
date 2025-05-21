import { Rect } from '@int/geotoolkit/util/Rect';
import { Alignment, BoxLayout } from '@int/geotoolkit/layout/BoxLayout';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
/**
 * Enum for Direction of Layout
 * @enum
 * @readonly
 */
export declare enum Direction {
    /**
     * LeftToRight
     */
    LeftToRight = "lefttoright",
    /**
     * RightToLeft
     */
    RightToLeft = "righttoleft"
}
/**
 * The HorizontalBoxLayout class lines up child elements <code>geotoolkit.layout.ILayoutable</code> horizontally.
 * <p>
 * Each child will get at least its desired width and at most its desired height, minimum and maximum height.
 * If height is not specified a child takes a height of layout area. This area can be passed via method <code>setRect</code> or
 * as a parameter of the <code>layout</code>.
 * </p>
 * <p>
 * The desired width can be specified in model parent units or in percentage to width of the a layout area.
 * </p>
 */
export declare class HorizontalBoxLayout extends BoxLayout {
    /**
     * @param [dstRect] optional layout area
     * @param [alignment] vertical alignment
     * @param [direction] optional direction of layout
     */
    constructor(dstRect?: Rect, alignment?: Alignment, direction?: Direction);
    constructor(options?: HorizontalBoxLayout.Options);
    /**
     * Returns vertical alignment
     * @returns alignment vertical alignment
     */
    getAlignment(): Alignment;
    /**
     * Sets vertical alignment
     * @param alignment alignment
     * @returns this
     */
    setAlignment(alignment: Alignment): this;
    /**
     * Set direction
     * @param value direction
     * @returns this
     */
    setDirection(value: Direction): this;
    /**
     * Returns direction of layout
     */
    getDirection(): Direction;
    layout(layoutRect?: Rect, targets?: ILayoutable[] | Iterator<ILayoutable>): this;
    getProperties(): HorizontalBoxLayout.Options;
    setProperties(properties?: HorizontalBoxLayout.Options): this;
}
export declare namespace HorizontalBoxLayout {
    /**
     * optional layout area. if area is not specified then a parameter area of the
     * layout method is used or properties object
     */
    type Options = BoxLayout.Options & {
        /**
         * alignment of the layout
         */
        alignment?: Alignment;
        /**
         * direction of the layout
         */
        direction?: Direction;
    };
}
