import { Type } from '@int/geotoolkit3d/Event';
/**
 * This class implements a dispatcher/listeners pattern. <br>
 * It is customized for Reservoir/GigaGrid uses.
 * @see {@link @int/geotoolkit/util/EventDispatcher~EventDispatcher}
 */
export declare class EventDispatcher {
    constructor();
    /**
     * Dispose event listeners
     */
    dispose(): void;
    /**
     * Attach listener on event
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
     */
    on(type: Type, callback: EventDispatcher.ReservoirEventCallback): void;
    /**
     * Check if a list of event listeners for this type contains this listener
     * @param type type of event or property
     * @param callback to be called
     */
    hasEventListener(type: Type, callback: EventDispatcher.ReservoirEventCallback): boolean;
    /**
     * Detach listener on event
     * @param type type of event or property
     * @param callback to be called
     */
    off(type?: Type, callback?: EventDispatcher.ReservoirEventCallback): void;
    /**
     * Notify the task queue when we have new task
     */
    pushTask(): void;
    /**
     * Set silent mode
     *
     * @param bool flag to enable silent mode
     */
    setSilent(bool: boolean): void;
    /**
     * Returns whether this object has been disposed
     */
    isDisposed(): boolean;
    /**
     * Get the current event
     * @returns event
     */
    getCurrentEvent(): Type;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace EventDispatcher {
    /**
     * The callback used in the custom Reservoir event system.
     * @param type The type of event.
     * @param source The source that triggered the event.
     * @param [args] Additional arguments.
     */
    type ReservoirEventCallback = (type: Type, source: any, args?: any) => void;
}
