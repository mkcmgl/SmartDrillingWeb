/**
 * @module geotoolkit/layout/VerticalPriorityLayout
 */
import { Layout } from '@int/geotoolkit/layout/Layout';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * Enum for Vertical Priority Layout
 * @enum
 * @readonly
 */
export declare enum Direction {
    /**
     * TopToBottom
     */
    TopToBottom = "toptobottom",
    /**
     * BottomToTop
     */
    BottomToTop = "bottomtotop"
}
export declare class VerticalPriorityLayout extends Layout {
    constructor(options?: VerticalPriorityLayout.Options);
    /**
     * Set direction
     * @param value the new layout direction
     * @returns this
     */
    setDirection(value: Direction): this;
    /**
     * Returns direction
     * @returns direction
     */
    getDirection(): Direction;
    layout(layoutRect?: Rect, targets?: ILayoutable[] | Iterator<ILayoutable>): this;
    getProperties(): VerticalPriorityLayout.Options;
    setProperties(properties?: VerticalPriorityLayout.Options): this;
}
export declare namespace VerticalPriorityLayout {
    /**
     * properties object
     */
    type Options = {
        /**
         * direction of the layout
         */
        direction?: Direction;
    };
}
