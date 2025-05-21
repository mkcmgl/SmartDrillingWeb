import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
/**
 * Events fired by charts SelectionSeries
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * State added
     */
    StateAdded = "StateAdded",
    /**
     * State removed
     */
    StateRemoved = "StateRemoved"
}
declare type SelectionSeriesArgs = {
    selection: string;
    series: string;
    index: number[];
    state: string;
};
/**
 * Selection data storage, contains selected states for series and indices (samples)
 */
export declare class SelectionSeries extends EventDispatcher {
    constructor(options: SelectionSeries.Options);
    /**
     * Sets selection storage name
     * @param name name to use
     */
    setName(name: string): this;
    /**
     * Returns selection storage name
     */
    getName(): string;
    select(index: AbstractChart.Hits, state?: string): this;
    select(index: number | number[], seriesId: string, state?: string): this;
    setSelection(data: AbstractChart.Hits, state?: string): this;
    setSelection(index: number | number[] | null, seriesId: string, state?: string): this;
    toggle(data: AbstractChart.Hits, state?: string): this;
    toggle(index: number | number[], seriesId: string, state?: string): this;
    deselect(data: AbstractChart.Hits, state?: string): this;
    deselect(index: number | number[], seriesId: string, state?: string): this;
    /**
     * Clears all indices for the provided series and/or selection state
     * @param seriesId series identifier that should be cleared (null to clear all series)
     * @param state selection state to be removed
     */
    clear(seriesId?: string | null, state?: string): this;
    /**
     * Returns key => value record where key is series identifiers, and values are arrays of selected indices
     * @param state selection state to be returned
     */
    getSelection(state?: string): Record<string, number[]>;
    /**
     * Returns selected indices for the provided series
     * @param seriesId identifier for the series to check
     * @param state selection state to use
     */
    getIndices(seriesId: string, state?: string): number[];
    isSelected(data: AbstractChart.Hits, state?: string): boolean;
    isSelected(index: number | number[], seriesId: string, state?: string): boolean;
    /**
     * Returns array of states which this series holds
     */
    getStates(): string[];
}
export declare namespace SelectionSeries {
    type Options = {
        name?: string;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.StateAdded]: SelectionSeriesArgs;
        [Events.StateRemoved]: SelectionSeriesArgs;
    };
}
export {};
