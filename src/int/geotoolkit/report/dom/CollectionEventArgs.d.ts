/**
 * @module geotoolkit/report/dom/CollectionEventArgs.ts
 */
import type { Node } from '@int/geotoolkit/report/dom/Node';
import { NodeEventArgs } from '@int/geotoolkit/report/dom/NodeEventArgs';
/**
 * Enum of collection changes event types
 * @enum
 * @readonly
 */
export declare enum CollectionChangesType {
    /**
     * Happens when new element has been added
     */
    Added = "added",
    /**
     * Happens when new element has been inserted before referenced element
     */
    InsertedBefore = "inserted-before",
    /**
     * Happens when new element has been inserted after referenced element
     */
    InsertedAfter = "inserted-after",
    /**
     * Happens when element has been inserted by another
     */
    Replaced = "replaced",
    /**
     * Happens when existing element has been removed
     */
    Removed = "removed",
    /**
     * Happens when collection was cleared
     */
    Clear = "clear"
}
/**
 * DOM Node collection event class.
 */
export declare class CollectionEventArgs extends NodeEventArgs {
    /**
     * @param options node event args options
     */
    constructor(options: CollectionEventArgs.Options);
    /**
     * Changes
     * @name module:geotoolkit/report/dom/NodeEventArgs~CollectionEventArgs#changes
     */
    get changes(): CollectionChangesType;
    /**
     * Return Collection changes type
     *
     * @returns Collection changes type
     */
    getChanges(): CollectionChangesType;
    /**
     * Reference
     * @name module:geotoolkit/report/dom/NodeEventArgs~CollectionEventArgs#reference
     */
    get reference(): Node;
    /**
     * Return Collection changes reference
     *
     * @returns Collection changes reference
     */
    getReference(): Node;
}
export declare namespace CollectionEventArgs {
    type Options = NodeEventArgs.Options & {
        /**
         * collection changes type
         */
        changes: CollectionChangesType;
        /**
         * collection reference item
         */
        reference?: Node;
    };
}
