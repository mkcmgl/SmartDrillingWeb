/**
 * Creates wrapper class for a file reader.
 */
export declare class LocalFile {
    /**
     * Creates wrapper class for a file reader.
     * @param fileName file names
     */
    public constructor(fileName: string | File);
    /**
     * Returns file name
     */
    public getFileName(): string;
    /**
     * Returns binary raw data
     * @param callback this is the function called when data is ready
     * @param from offset in bytes
     * @param to offset in bytes
     */
    public readBinarySection(callback: (data: Uint8Array) => void, from: number, to: number): void;
    /**
     * Return file size
     */
    public getFileSize(): number;
    /**
     * Return true if local file is supported
     */
    public static isSupported(): boolean;
}
