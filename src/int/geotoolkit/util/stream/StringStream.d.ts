import { IWritable } from '@int/geotoolkit/util/stream/IWritable';
/**
 * Defines representation memory string stream
 */
export declare class StringStream implements IWritable {
    /**
     * @param [features] optional. A comma-separated list of items, no whitespaces, see https://www.w3schools.com/jsref/met_win_open.asp
     */
    constructor(features?: string);
    /**
     * Returns window features
     */
    getWindowFeatures(): string;
    /**
     * Sets window features
     * @param features a comma-separated list of items, no whitespaces, see https://www.w3schools.com/jsref/met_win_open.asp
     * @returns this
     */
    setWindowFeatures(features: string): this;
    /**
     * write the data into the file
     * @param str string to be saved
     * @returns offset the offset
     */
    out(str: string): number;
    close(): this;
    /**
     * Set saving options
     * @param [options] options
     * @returns this
     */
    setSaveOptions(options?: StringStream.SavingOptions): this;
    /**
     * Save stream
     * @param [name] the name of the file to be created
     * @param [save] flag to save the stream directly to file or open dialog
     */
    save(name?: string, save?: boolean): void;
    getContent(): Uint8Array;
    /**
     * Save content
     * @param options options
     * @param content content
     */
    static save(options: StringStream.SavingOptions, content: string): void;
    dispose(): void;
    getClassName(): string;
    static getClassName(): string;
}
export declare namespace StringStream {
    /**
     * options
     */
    type SavingOptions = {
        /**
         * full filename
         */
        filename?: string;
        /**
         * type
         */
        type?: string;
        /**
         * error callback
         */
        onerror?: (e: Error) => void;
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
