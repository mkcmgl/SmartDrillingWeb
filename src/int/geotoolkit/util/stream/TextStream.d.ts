import { IWritable } from '@int/geotoolkit/util/stream/IWritable';
export declare class TextStream implements IWritable {
    constructor(options?: TextStream.Options);
    /**
     * @param data data to be written
     * @returns offset
     */
    out(data: string[] | string): number;
    close(): this;
    /**
     * @param [name] the name of the file to be created
     * @param [save] flag to save the stream directly to file or open dialog
     */
    save(name?: string, save?: boolean): void;
    /**
     * Returns content
     */
    getContent(): string[] | string;
    dispose(): void;
    getClassName(): string;
    static getClassName(): string;
}
export declare namespace TextStream {
    /**
     * options options
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
         * message for pop up in case of block
         */
        popupblockedmessage?: string;
        /**
         * save flag to save the stream directly to file or open dialog
         */
        save?: boolean;
    };
}
