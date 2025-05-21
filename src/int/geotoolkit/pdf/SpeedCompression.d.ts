/**
 * @module geotoolkit/pdf/SpeedCompression
 */
/**
 * SpeedCompression (used for PNG compression only)
 * @readonly
 * @enum
 */
export declare enum SpeedCompression {
    /**
     * MEDIUM (reference)
     */
    MEDIUM = "medium",
    /**
     * FAST (avg. 0.13x faster than medium)
     */
    FAST = "fast",
    /**
     * SLOW (avg. 2.80x slower than medium)
     */
    SLOW = "slow"
}
