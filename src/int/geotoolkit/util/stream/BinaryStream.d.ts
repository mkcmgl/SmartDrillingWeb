import { IWritable } from '@int/geotoolkit/util/stream/IWritable';
/**
 * Defines representation of memory binary stream
 */
export declare class BinaryStream implements IWritable {
    constructor(options?: BinaryStream.Options);
    /**
     * Put value to stream
     * @param byte to be saved
     * @param [offset] offset
     * @param [length] length
     */
    out(byte: number | number[] | Uint8Array, offset?: number, length?: number): number;
    /**
     * Close stream
     * @throws {Error} if size of stream is too big
     * @returns this
     */
    close(): this;
    /**
     * Gets current position
     * @returns position
     */
    getPosition(): number;
    /**
     * Set saving options
     * @param [options] options
     * @returns this
     */
    setSaveOptions(options?: BinaryStream.Options): this;
    /**
     * Save stream
     * @param [name] the name of the file to be created
     * @param [save] flag to save the stream directly to file or open dialog
     * @returns this
     */
    save(name?: string, save?: boolean): this;
    /**
     * Returns content
     */
    getContent(): Uint8Array;
    dispose(): void;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace BinaryStream {
    /**
     * options
     */
    type Options = {
        /**
         * full filename
         */
        filename?: string;
        /**
         * type
         */
        type?: string;
        /**
         * message to alert if popup-blocker blocked opening file
         */
        popupblockedmessage?: string;
        /**
         * flag to save data directly to file or open dialog
         */
        save?: boolean;
    };
}
