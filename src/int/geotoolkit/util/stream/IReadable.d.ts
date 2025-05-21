/**
 * A data stream, typical implementation include FileStream or MemoryStream.<br>
 * This interface for class offers 'random' access to the underlying data without requiring to load the whole data in memory.
 * @interface
 */
export declare abstract class IReadable {
    /**
     * Read a chunk of data and calls the callback when it's done.
     * @param offset The position to start reading from
     * @param length The amount of bytes to read
     * @param callback The callback that will be called with the result
     * @returns this
     */
    abstract readChunk(offset: number, length: number, callback: (err: Error, buffer: Int16Array | Int8Array, bytesRead: number) => void): this;
    /**
     * Returns the size of the underlying data
     * @returns size The size
     */
    abstract getSize(): number;
    /**
     * Returns the stride of this stream
     * @returns stride The stride
     */
    abstract getStride(): number;
    /**
     * Disposes this stream, releasing all the resources used.
     * @returns this
     */
    abstract dispose(): void;
}
