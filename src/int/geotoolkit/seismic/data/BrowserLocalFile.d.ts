/**
 * Creates wrapper class for a file reader.
 */
export declare class LocalFile {
    /**
     * @param file the local file for e.g SEG-Y file.
     */
    public constructor(file: File | string);
    /**
     * Returns file name
     * @returns file name
     */
    public getFileName(): string;
    /**
     * Return file size
     */
    public getFileSize(): number;
    /**
     * Returns the last modified date of the file as the number of milliseconds
     * since the Unix epoch (January 1, 1970 at midnight). Files without
     * a known last modified date return the current date.
     */
    public getLastModified(): number;
    /**
     * Returns binary raw data
     *
     * @param callback this is the function called when data is ready
     * @param from offset in bytes
     * @param to offset in bytes
     * @param context context
     */
    public readBinarySection(callback: (res: string | ArrayBuffer) => void, from: number, to: number): void;
    /**
     * Return true if local file is supported
     */
    public static isSupported(): boolean;
}
