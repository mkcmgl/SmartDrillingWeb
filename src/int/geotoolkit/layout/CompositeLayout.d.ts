/**
 * @module geotoolkit/layout/CompositeLayout
 */
import { Layout } from '@int/geotoolkit/layout/Layout';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
/**
 * Defines a container of layouts
 */
export declare class CompositeLayout extends Layout {
    constructor();
    /**
     * copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: CompositeLayout): void;
    layout(layoutRect?: Rect, targets?: ILayoutable[] | Iterator): this;
    /**
     * Return the preferable size of children. It returns an union of all children
     * @param rect desired rect to layout
     * @param [targets] array of nodes supposed to layout
     */
    getPreferredSize(rect: Rect, targets?: ILayoutable[] | Iterator): Rect;
    /**
     * Return index of child
     * ( index of the specified child or -1 if layout is not found)
     *
     * @param layout layout to check index
     */
    indexOfChild(layout: Layout): number;
    /**
     * Insert child layout at specified index
     *
     * @param index specified index
     * @param layout a child layout to add
     */
    insertChild(index: number, layout: Layout): this;
    /**
     * Add a child layout(s)
     *
     * @param layout the child layout to be added
     */
    add(layout: Layout | Layout[]): this;
    /**
     * Return iterator by child layouts
     *
     * @param [filter] a filter function. Returns all layouts if null
     */
    getChildren(filter?: (item: Layout) => boolean): Iterator<Layout>;
    /**
     * Remove child layout
     *
     * @param layout layout to be removed
     */
    removeChild(layout: Layout): this;
    /**
     * Remove all child layouts from this composite layout
     */
    clearChildren(): void;
    /**
     * Return layout by index
     *
     * @param i index of the layout
     */
    getChild(i: number): Layout;
    /**
     * Return number of child layouts
     */
    getChildrenCount(): number;
}
