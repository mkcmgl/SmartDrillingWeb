/**
 * @module geotoolkit/controls/tools/BaseEventArgs
 */
/**
 * Base class for event wrappers used by tools and widgets.
 */
export declare class BaseEventArgs {
    /**
     * @param eventName name of the event
     */
    constructor(eventName: string);
    /**
     * Returns event name
     */
    getEventName(): string;
    /**
     * Stops propagation
     * @returns this
     */
    stopPropagation(): this;
    /**
     * Prevents default
     * @returns this
     */
    preventDefault(): this;
    /**
     * Returns whether event has been cancelled
     */
    isCanceled(): boolean;
    /**
     * Returns whether event has been prevented default
     */
    isPreventDefault(): boolean;
}
