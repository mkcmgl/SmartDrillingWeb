/**
 * @module geotoolkit/util/TreeNode
 */
import type { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * TreeNode representation
 */
export declare class TreeNode<T extends any = any> {
    constructor(data: T, parent?: TreeNode<T>);
    /**
     * Gets parent
     */
    getParent(): TreeNode<T> | null;
    /**
     * Removes child if available
     * @param child child
     */
    removeChild(child: TreeNode<T>): this;
    /**
     * Add child
     * @param child child
     */
    addChild(child: TreeNode<T>): this;
    /**
     * Gets iterator over children tree nodes
     */
    getChildren(): Iterator<TreeNode<T>>;
    /**
     * Gets tree node data
     */
    getData(): T;
    static getClassName(): string;
    getClassName(): string;
}
