/**
 * @module geotoolkit/data/DataSource
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { DataObject } from '@int/geotoolkit/data/DataObject';
import { Events as DataEvents } from '@int/geotoolkit/data/Events';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
/**
 * DataSource's Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired on a State Change
     */
    StateChanged = "StateChanged"
}
interface IChildEvent {
    event: string;
    child?: DataObject;
    root?: DataObject;
    data: any;
}
/**
 * Define Abstract Data Model
 */
export declare class DataSource extends EventDispatcher {
    constructor();
    on<E extends keyof DataSource.EventMap>(type: E, callback: (eventType: E, sender: this, args: DataSource.EventMap[E]) => void): this;
    off<E extends keyof DataSource.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DataSource.EventMap[E]) => void): this;
    notify<E extends keyof DataSource.EventMap>(type: E, source: DataSource, args?: DataSource.EventMap[E]): this;
    /**
     * begin transaction
     * @returns this
     */
    beginUpdate(): this;
    /**
     * end transaction
     */
    endUpdate(): this;
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
     * @param data data to be removed
     * @returns this
     */
    removeChild(data: DataObject): this;
    /**
     * Remove all child data
     * @returns this
     */
    clearChildren(): this;
    /**
     * Return data by index
     *
     * @param i index of the data
     */
    getChild(i: number): DataObject;
    /**
     * Return number of child data
     */
    getChildrenCount(): number;
    /**
     * Query data object items
     */
    query(): QueryBuilder;
    /**
     * Load a part of the data
     * @returns this
     */
    update(): this;
}
export declare namespace DataSource {
    type EventMap = EventDispatcher.EventMap & {
        [Events.StateChanged]: {
            event?: string;
            root?: DataObject;
            child?: DataObject;
            data?: any;
            mapdata?: Map<DataObject, IChildEvent[]>;
        };
        [DataEvents.Updated]: void;
    };
}
export {};
