import { TreeNode } from '@int/geotoolkit/util/TreeNode';
/**
 * Basic tree representation
 */
export declare class Tree<T extends any = any> {
    constructor(root?: TreeNode<T>);
    /**
     * Gets root
     */
    getRoot(): TreeNode<T> | null;
    /**
     * Adds child tree node with "data" to parent's tree node with "toNodeData"
     * @param data data
     * @param [toNodeData] parent's tree node data
     * @param [equal] data comparator
     */
    add(data: T, toNodeData?: T, equal?: (data1: T, data2: T) => boolean): this;
    /**
     * Removes child tree node with "data"
     * @param data data
     */
    remove(data: T): this;
    /**
     * Check if the tree contains data
     * @param data data
     * @param [equal] data comparator
     */
    contains(data: T, equal?: (data1: T, data2: T) => boolean): boolean;
    /**
     * Searches for tree node with "data" (starting with root node)
     * @param data data
     * @param [equal] data comparator
     */
    findBFS(data: T, equal?: (data1: T, data2: T) => boolean): TreeNode<T> | null;
    /**
     * Traverses with Depth First Search
     * @param visitor tree node visitor
     * @param [preOrder] preOrder flag
     * @param [options] options
     */
    traverseDFS(visitor: (node: TreeNode<T>, options: Record<string, any>) => void, preOrder?: boolean, options?: Record<string, any>): this;
    /**
     * Traverses with Breadth First Search
     * @param visitor tree node visitor
     * @param [options] options
     */
    traverseBFS(visitor: (node: TreeNode<T>, options: Record<string, any>) => void, options?: Record<string, any>): this;
    /**
     * Returns a string representation of this object meaning<br>
     * @param [dataToString] data-to-string representation
     * @returns A string representation
     */
    toString(dataToString?: (data: T) => string): string;
    static getClassName(): string;
    getClassName(): string;
}
