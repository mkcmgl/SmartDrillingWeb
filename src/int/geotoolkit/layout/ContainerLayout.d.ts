import { Layout } from '@int/geotoolkit/layout/Layout';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * @module geotoolkit/layout/ContainerLayout
 */
/**
 * Define an abstract class to operate with <code>ILayoutable</code> children
 *
 * Children can be added using methods: <code>add</code> or <code>insert</code> or can be passed as parameter in method <code>layout</code>
 * If layout has any item added directly it ignores items passed to <code>layout</code> as parameter
 */
export declare abstract class ContainerLayout extends Layout {
    /**
     * Adds layoutable element
     *
     * @param node layoutable element(s)
     */
    abstract add(node: ILayoutable | ILayoutable[] | Iterator<ILayoutable>): this;
    /**
     * Inserts layoutable element
     * @param index index where element will be inserted
     * @param node layoutable element(s)
     */
    abstract insert(index: number, node: ILayoutable | ILayoutable[] | Iterator<ILayoutable>): this;
    /**
     * Removes a layoutable node if found
     *
     * @param node layoutable element
     */
    abstract remove(node: ILayoutable): this;
    /**
     * Remove all children items from layout
     */
    abstract clear(): this;
    /**
     * @param [targets] optional, items for iterator
     */
    abstract getIterator(targets?: ILayoutable[] | Iterator<ILayoutable>): Iterator<ILayoutable>;
}
