/**
 * @module geotoolkit/flowcharts/utils/LiteEvent
 */
/**
 * A simple and lite event emitter that represents a collection of functions
 * that will be invoked upon trigger() call
 */
export declare class LiteEvent {
    constructor();
    /**
     * Subscribes a handler to the event
     * @param handler function handler
     */
    on(handler: LiteEvent.Handler): void;
    /**
     * Unsubscribes a handler from the event
     * @param handler function handler
     */
    off(handler: LiteEvent.Handler): void;
    /**
     * Emits an event with the specified data
     * @param data event data that will be passed to all subscribed event handlers
     */
    trigger(data: any): void;
}
export declare namespace LiteEvent {
    /**
     * Defines event handler
     */
    type Handler = (data: any) => void;
}
