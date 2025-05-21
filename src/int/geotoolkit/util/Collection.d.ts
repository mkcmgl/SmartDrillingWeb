/**
 * @module geotoolkit/util/Collection
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * Collection events enumerator
 * @readonly
 * @events
 * @enum
 */
export declare enum Events {
    /**
     * Add
     * @event module:geotoolkit/util/Collection~Events~Add
     */
    Add = "add",
    /**
     * Remove
     * @event module:geotoolkit/util/Collection~Events~Remove
     */
    Remove = "remove",
    /**
     * Change
     * @event module:geotoolkit/util/Collection~Events~Change
     */
    Change = "change",
    /**
     * Clear
     * @event module:geotoolkit/util/Collection~Events~Clear
     */
    Clear = "clear"
}
/**
 * Collection represents a group of objects, known as its elements
 */
export declare class Collection<T extends any = any> extends EventDispatcher {
    constructor();
    on<E extends keyof Collection.EventMap<T>>(type: E, callback: (eventType: E, sender: this, args: Collection.EventMap<T>[E]) => void): this;
    off<E extends keyof Collection.EventMap<T>>(type?: E, callback?: (eventType: E, sender: this, args: Collection.EventMap<T>[E]) => void): this;
    notify<E extends keyof Collection.EventMap<T>>(type: E, source: Collection, args?: Collection.EventMap<T>[E]): this;
    /**
     * Add item(s)
     * @param items item(s) to add
     */
    add(items: T | T[]): void;
    /**
     * insert item at index
     * @param index index
     * @param item item to insert
     */
    insert(index: number, item: T): void;
    /**
     * Remove At index
     * @param index index of item
     */
    removeAtIndex(index: number): void;
    /**
     * Remove
     * @param item item
     */
    remove(item: T): void;
    /**
     * Clear All
     */
    clear(): void;
    /**
     * Return number of items int eh collection
     */
    getCount(): number;
    /**
     * Return item by index
     * @param index index of the item in collection
     */
    get(index: number): T;
    /**
     * Return index of item
     * ( index of the specified child or -1 if node is not found)
     *
     * @param item item to check index
     */
    indexOf(item: T): number;
    /**
     * Get Iterator
     */
    getIterator(): Iterator<T>;
}
export declare namespace Collection {
    type EventMap<T> = EventDispatcher.EventMap & {
        [Events.Add]: T;
        [Events.Remove]: T;
        [Events.Clear]: void;
    };
}
