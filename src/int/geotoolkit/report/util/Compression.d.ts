/**
 * The class Compression contains methods for performing basic compression operations and basic compression.
 */
export declare class Compression {
    /**
     * Compress string
     * @param input input string
     */
    static compressToBase64(input: string): string;
    /**
     * Decompress string
     * @param input input string
     */
    static decompressFromBase64(input: string): string;
}
