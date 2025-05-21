/**
 * @module geotoolkit/seismic/pipeline/NormalizationType
 */
/**
 * Enum of normalization types used when rendering normalization.
 * @enum
 * @readonly
 */
export declare enum NormalizationType {
    /**
     * Default behavior. No normalization is applied.
     */
    None = "None",
    /**
     * Uses the maximum amplitude of all samples in the all traces.
     */
    Maximum = "Maximum",
    /**
     * Uses all traces average absolute value as a normalization amplitude.
     */
    Average = "Average",
    /**
     * Uses the mean square of all samples in the all traces.
     */
    RMS = "RMS",
    /**
     * Uses custom normalization limits.
     * It requires to specify precisely min and max values for normalization.
     */
    Limits = "Limits",
    /**
     * Uses the maximum amplitude of all samples in the trace.
     */
    TraceMaximum = "TraceMaximum",
    /**
     * Uses trace average absolute value as a normalization amplitude.
     */
    TraceAverage = "TraceAverage",
    /**
     * Uses the mean square of all samples in the trace.
     */
    TraceRMS = "TraceRMS"
}
