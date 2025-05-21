/**
 * @module geotoolkit/welllog/data/ArrayLogAbstractData
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import { Events } from '@int/geotoolkit/welllog/data/Events';
import type { LogDataEvent } from '@int/geotoolkit/welllog/data/LogDataEvent';
import type { AbstractDataRow } from '@int/geotoolkit/welllog/data/AbstractDataRow';
/**
 * Define abstract data source for array log visuals like Log2DVisual
 */
export declare abstract class ArrayLogAbstractData extends EventDispatcher {
    /**
     * Constructor
     * @param [name] name of data
     */
    protected constructor(name?: string);
    on<E extends keyof ArrayLogAbstractData.EventMap>(type: E, callback: (eventType: E, sender: this, args: ArrayLogAbstractData.EventMap[E]) => void): this;
    off<E extends keyof ArrayLogAbstractData.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ArrayLogAbstractData.EventMap[E]) => void): this;
    notify<E extends keyof ArrayLogAbstractData.EventMap>(type: E, source: ArrayLogAbstractData, args?: ArrayLogAbstractData.EventMap[E]): this;
    /**
     * Return name of the data
     */
    getName(): string;
    /**
     * Set name of the data
     *
     * @param name The data name
     * @returns this
     */
    setName(name: string): this;
    /**
     * Sets index unit
     *
     * @param unit index unit
     * @returns this
     */
    setIndexUnit(unit?: AbstractUnit | string): this;
    /**
     * Returns index unit
     */
    getIndexUnit(): AbstractUnit | null;
    /**
     * Notify if data is changed
     * @param [args] optional parameters
     */
    protected update(args?: LogDataEvent): void;
    /**
     * Return the value to indicate if data source was changed
     */
    getTimeStamp(): number;
    /**
     * Update time stamp
     */
    protected updateTimeStamp(): void;
    /**
     * Return number of rows
     * @returns number of rows
     */
    abstract getNumberOfRows(): number;
    /**
     * Return a row by index
     * @param index index of the row
     * @returns a row
     */
    abstract getRow(index: number): AbstractDataRow | null;
    /**
     * Return minimum value
     */
    abstract getMinValue(): number;
    /**
     * Return maximum value
     */
    abstract getMaxValue(): number;
    /**
     * Return minimum depth
     */
    abstract getMinDepth(): number;
    /**
     * Return maximum depth
     */
    abstract getMaxDepth(): number;
    /**
     * Return minimum angle of columns in radians
     */
    abstract getMinAngle(): number;
    /**
     * Return maximum angle of columns in radians
     */
    abstract getMaxAngle(): number;
}
export declare namespace ArrayLogAbstractData {
    type EventMap = EventDispatcher.EventMap & {
        [Events.Updated]: LogDataEvent;
    };
}
