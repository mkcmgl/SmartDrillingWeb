/**
 * @module geotoolkit/data/DataObject
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
import { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * ChildAdded
     */
    ChildAdded = "ChildAdded",
    /**
     * ChildRemoved
     */
    ChildRemoved = "ChildRemoved",
    /**
     * PropertyChanged
     */
    PropertyChanged = "PropertyChanged"
}
/**
 * Define base data object
 */
export declare class DataObject extends EventDispatcher {
    constructor(options?: DataObject.Options);
    on<E extends keyof DataObject.EventMap>(type: E, callback: (eventType: E, sender: this, args: DataObject.EventMap[E]) => void): this;
    off<E extends keyof DataObject.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DataObject.EventMap[E]) => void): this;
    notify<E extends keyof DataObject.EventMap>(type: E, source: DataObject, args?: DataObject.EventMap[E]): this;
    /**
     * Returns data object name
     */
    getName(): string;
    /**
     * Sets data object name
     * @param name data object name
     * @returns this
     */
    setName(name: string): this;
    /**
     * Returns unique resource identifier
     */
    getUri(): string;
    /**
     * Sets unique resource identifier
     * @param uri unique identifier
     * @returns this
     */
    setUri(uri: string): this;
    /**
     * Returns data type
     */
    getType(): string;
    /**
     * Sets data object type
     * @param type data type
     * @returns this
     */
    setType(type: string): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns JSON options object
     */
    getProperties(): DataObject.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] JSON options object
     * @returns this
     */
    setProperties(properties?: DataObject.Options): this;
    /**
     * Add additional properties
     * @param properties additional properties of the dataobject
     * @returns this
     */
    addProperties(properties: Record<string, any>): this;
    /**
     * Returns whether data object contains specific property
     * @param name property name
     */
    hasProperty(name: string): boolean;
    /**
     * Gets property by name
     * @param name property name
     */
    getProperty(name: string): any;
    /**
     * Sets property by name
     * @param name property name
     * @param value property value
     * @returns this
     */
    setProperty(name: string, value: any): this;
    /**
     * Add a child object
     *
     * @param data the child data to be added
     * @returns this
     */
    addChild(data: DataObject | DataObject[]): this;
    /**
     * Remove child data object
     *
     * @param data data object to be removed
     * @param [silent] will not fire any events if true
     * @returns this
     */
    removeChild(data: DataObject, silent?: boolean): this;
    /**
     * Sets item by index
     *
     * @param index index of the item
     * @param item node
     */
    set(index: number, item: DataObject): DataObject;
    /**
     * Insert item by index
     *
     * @param index specified index
     * @param item node
     * @param [silent] will not fire any events if true
     * @returns this
     */
    insertChild(index: number, item: DataObject, silent?: boolean): this;
    /**
     * Remove all child data
     * @returns this
     */
    clearChildren(): this;
    /**
     * Return data by index
     *
     * @param i index of the data
     * @returns child
     */
    getChild(i: number): DataObject;
    /**
     * Return number of child data
     */
    getChildrenCount(): number;
    /**
     * Return iterator by child data objects
     *
     * @param [filter] a filter function. Returns all child data objects if the value is null.
     */
    getChildren(filter?: (data: DataObject) => boolean): Iterator<DataObject>;
    /**
     * Return index of child data
     * ( index of the specified child or -1 if data is not found)
     *
     * @param data data object to check index
     */
    indexOfChild(data: DataObject): number;
    /**
     * Sets parent data item
     *
     * @param parent parent data item
     * @returns this
     */
    setParent(parent: DataObject): this;
    /**
     * Gets parent data item
     */
    getParent(): DataObject;
    /**
     * This method is called if property bag is changed using setProperty method
     * @param prop property
     * @returns this
     */
    onPropertyChanged(prop: {
        name: string;
        value: any;
    }): this;
    /**
     * Query data item and child items by different conditions
     * @returns query object which has methods 'where' tp specify conditions, 'select' to run query,
     * 'selectToArray' select results to array
     * Expressions syntax:
     * "item => expression", where expression:
     * - logical and arithmetic operators
     * - embedded functions:
     * name(item) - gets name of the data object
     * url(item) - gets url of the data object
     * type(item) - gets type of the data object
     * @example
     * // Select by function
     * import {DataObject} from '@int/geotoolkit/data/DataObject';
     *
     * const dataobject = new DataObject({'name': 'test', 'uri': 'testuri', 'type': 'testtype'});
     * const item1 = new DataObject({'name': 'item1', 'uri': 'item1', 'type': 'test'});
     * const item2 = new DataObject({'name': 'item2', 'uri': 'item2', 'type': 'test'});
     * dataobject.addChild([item1, item2]);
     * const item5 = new DataObject({'name': 'item5', 'uri': 'item5', 'type': 'test'});
     * item2.addChild(item5);
     * let founditem = null;
     * dataobject.query()
     *    .where( (item: DataObject) => item.getParent() === dataobject)
     *    .where( (item: DataObject) => item.getUri() === 'item2')
     *    .select((item: DataObject) => {
     *        founditem = item;
     *    });
     * @example
     * // Select by expression
     * dataobject.query()
     *    .where( 'item => uri(item) == "item5"')
     *    .select((item: DataObject) => {
     *        founditem = item;
     *    });
     */
    query(): QueryBuilder;
    /**
     * Dispose data object and all children. Clear all listeners
     */
    dispose(): void;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     * @returns this
     */
    protected copyConstructor(src: DataObject): this;
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     * @param [copyData] flag to copy data
     * @returns clone
     */
    clone(copyData?: boolean): DataObject;
}
export declare namespace DataObject {
    /**
     * JSON options object
     */
    type Options = {
        /**
         * name
         */
        name?: string;
        /**
         * unique resource identifier
         */
        uri?: string;
        /**
         * type
         */
        type?: string;
    };
    /**
     * properties
     */
    type OptionsOut = {
        /**
         * name
         */
        name: string;
        /**
         * unique resource identifier
         */
        uri: string;
        /**
         * type
         */
        type: string;
        /**
         * any additional property
         */
        [key: string]: any;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.ChildAdded]: DataObject | DataObject[];
        [Events.ChildRemoved]: DataObject;
        [Events.PropertyChanged]: {
            name: string;
            value: any;
        };
    };
}
