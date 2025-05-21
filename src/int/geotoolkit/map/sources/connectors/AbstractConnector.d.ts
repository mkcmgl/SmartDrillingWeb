/**
 * Abstract source connector that is able to send url requests and receive data responses
 */
export declare abstract class AbstractConnector<T = any> {
    /**
     * Sends a request using the query provided
     * @param url the url requested
     * @param options extra options for the request (null if no needed)
     * @param callback the result handler that's called when response is received
     */
    abstract send(url: string, options: AbstractConnector.SendOptions | null, callback: (err: Error | null, data?: Record<string, any> | string) => void): void;
    /**
     * Aborts the previous queries sent
     * @param [key] key of the queries to abort (all queries aborted if nothing provided)
     * @returns this
     */
    abort(key?: string): this;
    /**
     * Aborts the connection provided
     * @param connection connection to abort
     * @returns this
     */
    protected abortConnection(connection: T): this;
    /**
     * Adds connection to the list
     * @param key key of the connection (null if no provided)
     * @param connection connection to add to the list
     * @returns this
     */
    protected addConnection(key: string, connection: T): this;
    /**
     * Returns connection by the key
     * @param key key for the connection
     * @returns connection
     */
    protected getConnection(key: string): T | null;
    /**
     * Removes connection from the list
     * @param key key of the connection (null if no provided)
     * @param connection connection to remvoe from the list
     * @returns this
     */
    protected removeConnection(key: string, connection: T): this;
    /**
     * Checks if some connections are still loading
     */
    isLoading(): boolean;
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     * @returns clone
     */
    clone(): AbstractConnector<T>;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractConnector {
    type SendOptions = {
        /**
         * socket request key (can be used to abort it later)
         */
        key?: string;
        [key: string]: any;
    };
}
