import type { IReadable } from '@int/geotoolkit/util/stream/IReadable';
/**
 * A wrapper class offering line based reading on top of a regular {@link @int/geotoolkit/util/stream/IReadable~IReadable stream}.<br>
 * This implementation hides the complexity of the underlying stream to offer line based reading instead.<br>
 * To do so, this reader will (lazily) parse the stream to text and search for \n \r chars.<br>
 * Doing so, it will build a line based index to allow faster access to specific lines further on.
 */
export declare class LineReader {
    constructor(options: LineReader.Options);
    /**
     * Reads the lines starting at the given line index up to the given count.
     *
     * @param index Starting line index
     * @param count Amount of lines to read
     * @param callback The function called with the result
     */
    readLines(index: number, count: number, callback: LineReader.readLinesCallback): void;
    /**
     * Search for the given regexp starting at the given line number.<br>
     *
     * @param regex The regular expression to search for (as a string)
     * @param index Starting line index
     * @param callback The function called with the result
     */
    find(regex: string, index: number, callback: LineReader.findCallback): void;
    /**
     * Search for the sequence starting by the given regexp and ending by the other regexp.<br>
     * The search starts at the given line number and ends (at worst) after maxcount lines have been read (if maxcount != -1).<br>
     * <br>
     * Note that reaching END-OF-STREAM without finding the searched regexp will not be considered as an error.<br>
     * @param startRegex The start regular expression to search for (as a string)
     * @param endRegex The end regular expression to search for (as a string)
     * @param index Starting line index
     * @param maxcount Maximum count of line that can be read. If the capture did not finish in that range, an error will be reported. -1 for no limit
     * @param callback The function called with the result
     */
    capture(startRegex: null | string, endRegex: string, index: number, maxcount: number, callback: LineReader.captureCallback): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace LineReader {
    /**
     * The options
     */
    export type Options = {
        /**
         * The amount of bytes to read at once. The default value is 1 megabyte
         */
        chunksize?: number;
        /**
         * The data stream to be wrapped by this reader
         */
        stream: IReadable;
    };
    /**
     * Callback for readLines().
     */
    export type readLinesCallback = (err: Error | string, index: number, result?: string[], eof?: boolean, progress?: number) => void;
    /**
     * Callback for find().
     */
    export type findCallback = (err: Error | string, index?: number) => void;
    /**
     * Callback for capture().
     */
    export type captureCallback = (result: CaptureCallbackResult) => void;
    /**
     * The capture result
     */
    type CaptureCallbackResult = {
        /**
         * The error object if any error occurred, null otherwise
         */
        error?: Error | string;
        /**
         * The start index (matching startRegex) or undefined if not found
         */
        start?: number;
        /**
         * The end index (matching endRegex)or undefined if not found
         */
        end?: number;
        /**
         * The lines in between start and end
         */
        lines?: string[];
    };
    export {};
}
