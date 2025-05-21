/**
 * This class provides a Timer feature. It uses the browser's native capabilities to implement a Timer mechanism that will notify the given callback at the given rate.
 * Calling code is responsible for stopping the timer to dispose it cleanly.
 */
export declare class Timer {
    /**
     * @param [interval] interval between ticks in ms. Default is 1000 ms.
     * @param [listener] function to be called for each tick
     */
    constructor(interval?: number, listener?: TimerHandler);
    /**
     * Start timer
     * @returns this
     */
    start(): this;
    /**
     * Stop timer
     */
    stop(): void;
    /**
     * Return true if timer is started
     * @returns if timer is started
     */
    isStarted(): boolean;
    /**
     * Sets interval of the timer in ms. The given interval will not be applied if the Timer is already started. One should stop and restart the timer to make this change effective.
     * @param interval interval
     */
    setInterval(interval: number): void;
    /**
     * Return time interval in ms between ticks
     * @returns time interval
     */
    getInterval(): number;
    /**
     * Sets listener
     * @param listener function to be called for each tick
     */
    setListener(listener: TimerHandler): void;
}
