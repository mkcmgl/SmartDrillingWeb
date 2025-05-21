import type { Range } from '@int/geotoolkit/util/Range';
/**
 * Defines trace mapping.
 */
export declare abstract class TraceMapping {
    /**
     * Return model trace spacing
     * @returns model trace spacing
     */
    getModelTraceSpacing(): number;
    /**
     * Return index of the trace by its location
     *
     * @param location
     */
    abstract getTraceIndex(location: number): number;
    /**
     * Return trace location by its index
     *
     * @param index
     */
    abstract getTraceLocation(index: number): number;
    /**
     * Returns array of traces
     * @param from
     * @param to
     * @returns array of traces
     */
    abstract getTraces(from: number, to: number): number[];
    /**
     * Return trace location range
     */
    abstract getTraceLocationRange(): Range;
    /**
     * Return number of destination traces
     */
    abstract getNumberOfDestinationTraces(): number;
    static getClassName(): string;
    getClassName(): string;
}
