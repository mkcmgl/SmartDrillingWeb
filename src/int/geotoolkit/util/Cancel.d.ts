/**
 * @module geotoolkit/util/Cancel
 */
/**
 * A Cancel is an object that can be used to request cancellation of an operation inside of Promise.
 */
export declare class Cancel {
    constructor();
    /**
     * Cancel promise
     * @param message message
     */
    cancel(message?: string): void;
    /**
     * Sets an error handler
     * @param callback to be called if cancellation happens
     */
    setErrorHandler(callback: (cancel: Cancel) => void): void;
    /**
     * Return message
     */
    getMessage(): string;
    /**
     * Return true if it was canceled
     */
    isCanceled(): boolean;
    /**
     * Returns true if input parameter is cancel
     * @param error error to check if it is cancellation error
     */
    static isCanceled(error: any): boolean;
}
