/**
 * @module geotoolkit/util/stream/BrowserFileStream
 */
import { IReadable } from '@int/geotoolkit/util/stream/IReadable';
/**
 * A stream implementation using a browser File object and a browser FileReader.<br>
 * This implementation relies on the {@link https://w3c.github.io/FileAPI/ HTML5 File API}.<br>
 */
export declare class BrowserFileStream implements IReadable {
    constructor(options: BrowserFileStream.Options);
    readChunk(offset: number, length: number, callback: (err: Error, buffer: Int16Array | Int8Array, bytesRead: number) => void): this;
    getSize(): number;
    getStride(): number;
    dispose(): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace BrowserFileStream {
    /**
     * The options
     */
    type Options = {
        /**
         * The file to read from
         */
        file: File;
        /**
         * The stride of this stream
         */
        stride?: number;
    };
}
