/**
 * @module geotoolkit/report/dom/NodeList
 */
/**
 * The NodeList interface represents an iterable collection of {@link @int/geotoolkit/report/dom/Node~Node} objects.<br>
 */
export declare class NodeList<T> {
    /**
     * @param [nodeList] list of nodes
     */
    constructor(nodeList?: T[]);
    [Symbol.iterator](): {
        next: () => {
            value: T;
            done: boolean;
        };
    };
    /**
     * Returns the {@link @int/geotoolkit/report/dom/Node~Node} at the given index, or null if the index is higher or equal to the number of nodes.
     * @param index of named item
     */
    item(index: number): T;
    /**
     * Returns index of node.
     * @param node item to get index of
     */
    indexOf(node: T): number;
    /**
     * Returns the amount of objects in the map.
     * @name module:geotoolkit/report/dom/NodeList~NodeList#length
     */
    get length(): number;
    /**
     * Remove child node from container
     * @param child child to remove
     * @returns this
     */
    removeChild(child: T): this;
}
