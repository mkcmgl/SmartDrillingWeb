/**
 * This abstract class defines the interface of a readonly Iterator. Subclasses are responsible for implementing the actual iteration mechanism.
 */
export declare abstract class Iterator<T extends any = any> {
    /**
     * Returns the next element in the iteration.
     */
    abstract next(): T;
    /**
     * Returns true if the iteration has more elements.
     */
    abstract hasNext(): boolean;
    /**
     * Applies filter to every element according to the function passed via the only parameter
     * @param func function to apply to each element
     */
    abstract filter(func: (item: T) => boolean): T[];
    /**
     * Executes a method for each item in iterator and return new iterator.
     * @param func function to apply to each element
     */
    abstract forEach(func: (item: T) => void): this;
    /**
     * Resets iterator to its initial state.
     */
    abstract reset(): this;
    /**
     * Creates array based on iterator items
     * @param [maxElements] array size upper limit
     */
    toArray(maxElements?: number): T[];
    /**
     * Returns iterator by array elements
     * @param array of any object
     * @param [func] to filter elements
     */
    static getArrayIterator<T>(array: T[], func?: (item: T) => boolean): Iterator<T>;
    /**
     * Returns iterator by the data
     * @param parameter data to iterate
     */
    static getIterator<T>(parameter: Iterator<T> | T[] | T): Iterator<T>;
    /**
     * Runs asynchronous function for each element and wait execution
     * @param array array of any object or iterator
     * @param func function to apply to each element
     * @param [callback] function to be called at the end of execution
     */
    static awaitForEach<T>(array: T[] | Iterator<T>, func: (x: T, next: () => void) => void, callback?: () => void): void;
    /**
     * Creates array based on elements to iterate
     * @param iterator iterator
     * @param [maxElements] array size upper limit
     */
    static toArray<T>(iterator: Iterator<T>, maxElements?: number): T[];
    getClassName(): string;
    static getClassName(): string;
}
export declare class TwoWayArrayIterator<T extends any = any> extends Iterator<T> {
    constructor(a: T[]);
    next(): T;
    hasNext(): boolean;
    prev(): T;
    hasPrev(): boolean;
    current(): T;
    filter(f: (item: T) => boolean): T[];
    forEach(f: (item: T) => void): this;
    /**
     * Resets iterator to its initial state or to the specified element
     * @param [element] element
     * @returns this
     * @throws {Error} if element was not found
     */
    reset(element?: T): this;
}
