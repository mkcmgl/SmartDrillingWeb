import type { Statistics } from '@int/geotoolkit/seismic/data/Statistics';
/**
 * Trace statuses
 * @readonly
 * @enum
 */
export declare enum Status {
    /**
     * Normal
     */
    Normal = "Normal",
    /**
     * Error
     */
    Error = "Error",
    /**
     * Highlighted
     */
    Highlighted = "Highlighted"
}
/**
 * Abstract seismic trace is a collection of samples.
 * A trace is logically subdivided into zero or more trace headers and zero or more samples.
 * Data is organized as list of traces sorted by headers. The number of samples equals to the number of corresponding headers.
 */
export declare abstract class Trace {
    protected constructor();
    /**
     * Returns an array of the samples
     *
     * @param [buffer] Array of samples to be used as buffer to copy samples
     */
    abstract getSamples(buffer?: number[]): number[];
    /**
     * Returns a count of the samples in the trace
     */
    abstract getNumberOfSamples(): number;
    /**
     * Return trace header value by identifier
     * @param index index of the header
     */
    abstract getHeader(index: number): number;
    /**
     * Returns a header and header data
     */
    abstract getHeader(): Trace.HeaderOut;
    abstract getHeader(index?: number): Trace.HeaderOut | number;
    /**
     * Returns the trace id in the reader
     */
    abstract getTraceId(): number;
    /**
     * Returns clone of the trace
     */
    abstract clone(): Trace;
    /**
     * Returns the trace status
     */
    getTraceStatus(): Status;
    /**
     * Returns trace statistics
     */
    getStatistics(): Statistics;
    /**
     * Reset trace statistics
     */
    resetStatistics(): this;
}
export declare namespace Trace {
    type HeaderOut = null | {
        /**
         * trace header
         */
        header?: any;
        /**
         * trace header data
         */
        data?: any;
    };
}
