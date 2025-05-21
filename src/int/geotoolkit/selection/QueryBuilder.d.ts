/**
 * @module geotoolkit/selection/QueryBuilder
 */
import type { ClassType, Constructor } from '@int/geotoolkit/base';
/**
 * Provides search by any item in the hierarchical structure.
 * <T> is base type for root and child elements
 */
export declare class QueryBuilder<T extends any = any> {
    /**
     * @param item item to apply this query
     * @param [options] an additional options
     */
    constructor(item: T, options?: QueryBuilder.Options);
    /**
     * Iterates over the children of the given item.
     * This iterator does not support concurrent modification (the callback provided should not add/remove children)
     * @param item item to apply this query
     * @param callback The callback function
     */
    enumerateNodes(item: T, callback: (node: T, x?: QueryBuilder) => void): void;
    /**
     * Specify filter
     * @param f function or condition to provide filter of items or string to specify query
     */
    where(f: ((item: T) => boolean) | string): this;
    /**
     * Specify instance filter
     * @param cls class type to check with
     */
    instanceOf<U extends T>(cls: ClassType<U> | Constructor<U>): QueryBuilder<U>;
    /**
     * Execute all queries
     * @param callback function called for each item that matches this query condition
     */
    select(callback: (item: T) => void): this;
    /**
     * Register functions
     * @param functions allows to register additional functions
     * @example
     * import {from} from '@int/geotoolkit/selection/from';
     * import {Line} from '@int/geotoolkit/scene/shapes/Line';
     * import {Rectangle} from '@int/geotoolkit/scene/shapes/Rectangle';
     * from(group1)
     *      .functions({'isLine': (node) => node instanceof Line,
     *                  'isRect': (node) => node instanceof Rectangle})
     *      .where( 'node => isLine(node) || node => isRectangle(node)' )
     */
    functions(functions: Record<string, Function>): this;
    /**
     * Execute all queries
     * @param callback function called for each item that matches this query condition
     */
    execute(callback: (item: T) => void): this;
    /**
     * Select all items to array
     * @returns an array of the selected items
     */
    selectToArray(): T[];
    /**
     * Select the first item
     */
    selectFirst(): T | null;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace QueryBuilder {
    /**
     * an additional options
     */
    type Options = {
        /**
         * a map of functions to be used
         */
        map?: Record<string, Function>;
        /**
         * enumerate children items
         */
        enumerateitems?: (x: any, f: (n: any, target?: QueryBuilder) => void, target: QueryBuilder) => void;
        /**
         * function to return a map of values to be used in query like node
         */
        values?: (x: any) => any;
    };
}
