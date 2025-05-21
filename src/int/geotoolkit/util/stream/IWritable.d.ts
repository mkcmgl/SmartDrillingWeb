/**
 * Defines interface of stream to write
 * @interface
 */
export declare abstract class IWritable {
    /**
     * Put value to stream
     *
     * @param data a data to save
     * @returns offset
     */
    abstract out(data: any): number;
    /**
     * Close stream
     */
    abstract close(): this;
    /**
     * Save stream
     * @param [name] file name/ string name
     * @param [save] flag to save the stream directly to file or open dialog
     */
    abstract save(name?: string, save?: boolean): void;
    /**
     * Gets stream content
     */
    abstract getContent(): any;
    /**
     * Disposes this stream, releasing all the resources used.
     */
    abstract dispose(): void;
}
