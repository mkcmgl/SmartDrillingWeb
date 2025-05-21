import { DataObject } from '@int/geotoolkit/data/DataObject';
import { Events as DataEvents } from '@int/geotoolkit/data/Events';
import { Order } from '@int/geotoolkit/util/Order';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { StateChanges } from '@int/geotoolkit/data/DataSeries';
/**
 * AbstractDataSeries events.
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * ValuesAdding
     */
    ValuesAdding = "ValuesAdding",
    /**
     * ValuesAdded
     */
    ValuesAdded = "ValuesAdded",
    /**
     * ValuesUpdating
     */
    ValuesUpdating = "ValuesUpdating",
    /**
     * ValuesUpdated
     */
    ValuesUpdated = "ValuesUpdated",
    /**
     * ValuesRemoving
     */
    ValuesRemoving = "ValuesRemoving",
    /**
     * ValuesRemoved
     */
    ValuesRemoved = "ValuesRemoved",
    /**
     * ValuesSetting
     */
    ValuesSetting = "ValuesSetting",
    /**
     * ValuesSet
     */
    ValuesSet = "ValuesSet",
    /**
     * UnitChanged
     */
    UnitChanged = "UnitChanged",
    /**
     * Disposing
     */
    Disposing = "Disposing"
}
/**
 * Define an abstract series of data of any type.
 * This is an abstract class and cannot be instantiated.
 */
export declare abstract class AbstractDataSeries<T = any> extends DataObject {
    protected constructor(options?: AbstractDataSeries.Options);
    on<E extends keyof AbstractDataSeries.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractDataSeries.EventMap[E]) => void): this;
    off<E extends keyof AbstractDataSeries.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractDataSeries.EventMap[E]) => void): this;
    notify<E extends keyof AbstractDataSeries.EventMap>(type: E, source: AbstractDataSeries, args?: AbstractDataSeries.EventMap[E]): this;
    /**
     * Returns the identifier of the data series.
     */
    getId(): number | string;
    /**
     * Sets the identifier of the data series.
     * @param id a new identifier
     * @returns this
     */
    setId(id: number | string): this;
    /**
     * Notifies the data series has been updated.
     * The timestamp will be updated and {@link @int/geotoolkit/data/Events~Events.Updated} event will be fired.
     *
     * @fires @int/geotoolkit/data/Events~Events.Updated
     * @param [args] event args
     * @returns this
     */
    update(args?: {
        index: number;
        count: number;
        type: StateChanges;
    }): this;
    setProperties(properties?: AbstractDataSeries.Options): this;
    getProperties(): AbstractDataSeries.OptionsOut;
    /**
     * Notifies the data series has been started updating.
     * The {@link @int/geotoolkit/data/Events~Events.Updating} event will be fired.
     * @fires @int/geotoolkit/data/Events~Events.Updating
     * @param [args] event args
     * @returns this
     */
    updating(args?: {
        index: number;
        count: number;
        type: StateChanges;
    }): this;
    /**
     * Returns the timestamp of the data series.
     */
    protected getTimeStamp(): number;
    /**
     * Updates timestamp of the data series.
     */
    protected updateTimeStamp(): this;
    /**
     * Returns data ordering of the data series.
     */
    getDataOrder(): Order;
    /**
     * Returns whether the data series is immutable and cannot be changed.
     */
    abstract isReadOnly(): boolean;
    /**
     * Returns unit of the data series.
     * @returns unit
     */
    abstract getUnit(): AbstractUnit;
    /**
     * Returns the number of values in the data series.
     */
    abstract getLength(): number;
    /**
     * Returns the value at the given index.
     * The type of the returned value depends on the data series type.
     *
     * @param index
     */
    abstract getValue(index: number): T;
    /**
     * Returns an array of objects in the data series.
     *
     * @param [copy] whether creating a copy of data
     * @param [unit] unit optional output unit to convert the data to. if not specified, data will not be converted
     */
    abstract toArray(copy?: boolean, unit?: string | AbstractUnit): T[];
    /**
     * Converts values from one unit to another specified unit.
     *
     * @param values array of values or a single value
     * @param [fromUnit] the original unit of the value(s)
     * @param [toUnit] the unit to convert the value(s) to
     */
    protected abstract convertValues<U extends T | T[]>(values: U, fromUnit?: string | AbstractUnit, toUnit?: string | AbstractUnit): U;
}
export declare namespace AbstractDataSeries {
    /**
     * options
     */
    type Options = DataObject.Options & {
        /**
         * unique id of the data series
         */
        id?: number | string;
    };
    /**
     * properties
     */
    type OptionsOut = DataObject.OptionsOut & {
        /**
         * unique id of the data series
         */
        id: number | string;
    };
    type EventMap = DataObject.EventMap & {
        [Events.ValuesAdding]: {
            cancelled?: boolean;
        };
        [Events.ValuesAdded]: {
            from: number;
            count: number;
        };
        [Events.ValuesUpdating]: void;
        [Events.ValuesUpdated]: {
            from: number;
            count: number;
        };
        [Events.ValuesRemoving]: {
            cancelled?: boolean;
        };
        [Events.ValuesRemoved]: {
            from: number;
            count: number;
        };
        [Events.ValuesSetting]: void;
        [Events.ValuesSet]: {
            cancelled?: boolean;
        };
        [Events.UnitChanged]: AbstractUnit;
        [Events.Disposing]: void;
        [DataEvents.Updated]: {
            index: number;
            count: number;
            type: StateChanges;
        };
        [DataEvents.Updating]: {
            index: number;
            count: number;
            type: StateChanges;
        };
    };
}
