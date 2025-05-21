import { IReadable } from '@int/geotoolkit/util/stream/IReadable';
/**
 * A stream implementation using a browser {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ArrayBuffer} as backing store.<br>
 * (Use BrowserMemoryStream.stringToArrayBuffer to convert a string into an ArrayBuffer).<br>
 * This implementation provides compatibility with stream-based mechanism for dataset that are already in memory.<br>
 * <br>
 * Note that this class relies on the {@link https://w3c.github.io/FileAPI/ HTML5 File API}.
 */
export declare class BrowserMemoryStream implements IReadable {
    constructor(options: BrowserMemoryStream.Options);
    /**
     * Converts a String in an ArrayBuffer using String.charCodeAt (encoding is forced to utf16).
     * @param string The string to convert
     * @returns buffer The resulting ArrayBuffer
     */
    static stringToArrayBuffer(string: string): ArrayBuffer;
    readChunk(offset: number, length: number, callback: (err: any, buffer: Int16Array | Int8Array, bytesRead: number) => void): this;
    getStride(): number;
    getSize(): number;
    dispose(): void;
}
export declare namespace BrowserMemoryStream {
    /**
     * The options
     */
    type Options = {
        /**
         * The buffer
         */
        buffer: ArrayBuffer;
        /**
         * The stride of this stream
         */
        stride?: number;
    };
}
