import { Group } from '@int/geotoolkit/scene/Group';
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
/**
 * LegendItem Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * Change
     */
    Change = "change",
    /**
     * State Changed
     */
    StateChanged = "StateChanged"
}
/**
 * Item legend state
 * @enum
 * @readonly
 */
export declare enum State {
    /**
     * Default item state
     */
    Default = 0,
    /**
     * Hovered item
     */
    Hovered = 1,
    /**
     * Selected item
     */
    Selected = 2,
    /**
     * Disabled item content
     */
    Disabled = 4
}
/**
 * This is a parent class for legend items, which contains information to display.<br>
 * Legend items are shapes used to add information on a chart like donutchart, timeseries, etc.
 */
export declare class LegendItem extends Group {
    constructor(options?: LegendItem.Options | EventDispatcher | null);
    on<E extends keyof LegendItem.EventMap>(type: E, callback: (eventType: E, sender: this, args: LegendItem.EventMap[E]) => void): this;
    off<E extends keyof LegendItem.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: LegendItem.EventMap[E]) => void): this;
    notify<E extends keyof LegendItem.EventMap>(type: E, source: LegendItem, args?: LegendItem.EventMap[E]): this;
    /**
     * Gets object
     * @returns object
     */
    getObject(): EventDispatcher | null;
    /**
     * Sets object
     * @param object object
     * @returns this
     */
    setObject(object: EventDispatcher): this;
    /**
     * Sets options.
     * The implementation does nothing
     * @param options options
     * @returns this
     */
    setOptions(options: any): this;
    /**
     * Updates Geometry.
     * The implementation does nothing
     */
    updateGeometry(): void;
    /**
     * Disposes the object.
     */
    dispose(): void;
    /**
     * Toggle item state
     * @param state item state
     * @returns this
     */
    toggleState(state: State): this;
    /**
     * Sets item state
     * @param state item state
     * @returns this
     */
    setState(state: State): this;
    /**
     * Returns item state
     */
    getState(): number;
    /**
     * Updates item content state
     * @param state item state
     */
    protected updateItemState(state: State): void;
}
export declare namespace LegendItem {
    type Options = Group.Options & {
        object?: EventDispatcher;
    };
    type EventMap = Group.EventMap & {
        [Events.StateChanged]: State;
        [Events.Change]: void;
    };
}
