/**
 * @module geotoolkit/widgets/sync/SyncOperation
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { Orientation } from '@int/geotoolkit/util/Orientation';
/**
 * Define base class for all synchronization operations.
 */
export declare class SyncOperation {
    /**
     * @param name name of the operations
     */
    constructor(name: string);
    /**
     * Return a name of operation
     */
    getName(): string;
    /**
     * Connect events to item
     * @param events events to connect
     * @param item item to connect events
     * @param listener listener to be connected
     */
    connect(events: string[], item: EventDispatcher, listener: SyncOperation.Listener): void;
    /**
     * Disconnect events from item
     * @param events events to disconnect
     * @param item item to disconnect events
     * @param listener listener to be disconnected
     */
    disconnect(events: string[], item: EventDispatcher, listener: SyncOperation.Listener): void;
    /**
     * Gets data for the current operation
     * @param item item to get data
     * @param direction direction
     * @param options additional options
     */
    getData(item: EventDispatcher, direction: Orientation, options: Record<string, any>): any | null;
    /**
     * Sets data for the current operation
     * @param item item to set data
     * @param data data to set
     * @param direction direction
     * @param options options
     * @returns optional result
     */
    setData(item: EventDispatcher, data: any, direction: Orientation, options: Record<string, any>): any | null;
}
export declare namespace SyncOperation {
    type Listener = (type: string, src: EventDispatcher) => void;
}
