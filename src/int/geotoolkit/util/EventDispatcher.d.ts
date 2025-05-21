/**
 * EventDispatcher Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * This Event is fired when the property was changed
     */
    PropertyChanged = "PropertyChanged",
    /**
     * Called when the object has been Disposed.
     */
    Disposed = "Disposed"
}
/**
 * Defines sender of the events. This class implements a dispatcher/listeners pattern. It's inherited by many classes of the toolkit that requires to send events.<br>
 * Listeners are callbacks(functions) that can be added and removed at any time. Those will be notified when the corresponding event-type is fired on this object.
 */
export declare class EventDispatcher {
    constructor();
    /**
     * Dispose.
     */
    dispose(): void;
    /**
     * Attach listener on event that will be called whenever the specified event is delivered to the target
     * <p>
     * If the callback function is already in the list of event listeners for this target,
     * the function is not added a second time.
     * </p>
     * <p>
     * If a particular anonymous function is in the list of event listeners registered for a
     * certain target, and then later in the code, an identical anonymous function is given
     * in an "on" call, the second function will also be added to the list of
     * event listeners for that target.
     * </p>
     * @param type type of event or property
     * @param callback to be called
     * @returns this
     */
    on(type: string, callback: EventDispatcher.EventListener): this;
    on<E extends keyof EventDispatcher.EventMap>(type: E, callback: (eventType: E, sender: this, args: EventDispatcher.EventMap[E]) => void): this;
    /**
     * Detach listener on event.
     * Calling .off() with no arguments removes all attached listeners.
     * Calling .off(type) with no callback removes all attached listeners for specific type.
     * @param [type] type of the event
     * @param [callback] function to be called
     * @returns this
     */
    off(type?: string, callback?: EventDispatcher.EventListener): this;
    /**
     * Check if a list of event listeners for this type contains this listener
     * @param type type of event or property
     * @param [callback] to be called, if null, check if any callback is registered
     */
    hasEventListener(type: string, callback?: Function): boolean;
    /**
     * Notify listeners
     * @param type event types
     * @param source of the event
     * @param [args] arguments of the event
     * @returns this
     */
    notify(type: string, source: any, args?: any): this;
    /**
     * Return true if the event dispatcher doesn't notify any events
     */
    isSilent(): boolean;
    /**
     * Set silent mode
     *
     * @param bool flag to enable silent mode
     * @returns this
     */
    setSilent(bool: boolean): this;
    /**
     * Returns whether this object has been disposed
     */
    isDisposed(): boolean;
    getClassName(): string;
    static getClassName(): string;
}
export declare namespace EventDispatcher {
    type EventListener = (type: string, source: any, args?: any) => void;
    type ShortEventListener = (source: any, args?: any) => void;
    type EventMap = {
        [Events.Disposed]: void;
        [Events.PropertyChanged]: string | {
            name: string;
            value: any;
        };
    } & Record<string, any>;
}
