/**
 * @module geotoolkit/layout/HorizontalPriorityLayout
 */
import { Layout } from '@int/geotoolkit/layout/Layout';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * Enum for Horizontal Priority Layout
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
export declare class HorizontalPriorityLayout extends Layout {
    constructor(options?: HorizontalPriorityLayout.Options);
    /**
     * Set direction
     * @param value direction of layout
     * @returns this
     */
    setDirection(value: Direction): this;
    /**
     * Returns direction
     * @returns direction of layout
     */
    getDirection(): Direction;
    layout(layoutRect?: Rect, targets?: ILayoutable[] | Iterator<ILayoutable>): this;
    getProperties(): HorizontalPriorityLayout.Options;
    setProperties(properties?: HorizontalPriorityLayout.Options): this;
}
export declare namespace HorizontalPriorityLayout {
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
