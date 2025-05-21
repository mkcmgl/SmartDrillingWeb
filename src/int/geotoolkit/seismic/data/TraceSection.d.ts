/**
 * @module geotoolkit/seismic/data/TraceSection
 */
import type { Trace } from '@int/geotoolkit/seismic/data/Trace';
import type { Range } from '@int/geotoolkit/util/Range';
/**
 * TraceSection is an 'interface' class for seismic traces collection.
 * A trace section provides access to its traces individually whatever the internal format is (for example a bulk array of binary values).
 * Inheriting classes are responsible for providing the actual implementation.
 */
export declare abstract class TraceSection {
    /**
     * Return trace by number from 0 to reader.getTraceNumber()-1
     *
     * @param traceid unique trace id
     */
    abstract getTrace(traceid: number): Trace;
    /**
     * Creates a clone of the trace section
     *
     * @returns this
     */
    abstract clone(): TraceSection;
    /**
     * Returns start and end trace indices
     */
    abstract getTraceRange(): Range;
    /**
     * Returns number of traces in the section
     */
    abstract getNumberOfTraces(): number;
    /**
     * Returns trace by index in the section
     *
     * @param index trace index in the section starting from 0 to  getNumberOfTraces()-1
     */
    abstract getTraceByIndex(index: number): Trace | null;
    /**
     * Returns true, if header data is empty
     */
    isHeaderEmpty(): boolean;
    /**
     * Returns true, if samples are empty
     */
    areSamplesEmpty(): boolean;
}
