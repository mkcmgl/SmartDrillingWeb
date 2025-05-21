/**
 * Enum of Decompression strategies for inverse AGC transform.
 * @enum
 * @readonly
 */
export declare enum DecompressionStrategy {
    /**
     * No decompression, No quantization, use multiplier.
     */
    WithoutDecompressionAndQuantization = "WithoutDecompressionAndQuantization",
    /**
     * No decompression, Has quantization, use multiplier.
     */
    WithoutDecompressionButWithQuantization = "WithoutDecompressionButWithQuantization",
    /**
     * Has decompression, Has quantization. use compressedMultiplier
     */
    WithDecompressionAndQuantization = "WithDecompressionAndQuantization"
}
