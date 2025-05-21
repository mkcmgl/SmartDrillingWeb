/**
 * @module geotoolkit/scene/INodeEnumerable
 */
import type { Node } from '@int/geotoolkit/scene/Node';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
/**
 * Define an interface to support a simple iteration over a nodes
 * @interface
 */
export declare abstract class INodeEnumerable<T = Node> {
    /**
     * Enumerate children nodes
     * @param callback callback
     * @param target target
     */
    abstract enumerateNodes(callback: INodeEnumerable.Callback<T>, target?: QueryBuilder): void;
}
export declare namespace INodeEnumerable {
    type Callback<T = Node> = (n: T, target?: QueryBuilder) => void;
}
