/**
 * @module geotoolkit/seismic/data/BinaryTraceIndicesSection
 */
import { TraceSection } from '@int/geotoolkit/seismic/data/TraceSection';
import { Range } from '@int/geotoolkit/util/Range';
import type { BinaryHeader } from '@int/geotoolkit/seismic/data/BinaryHeader';
import type { Trace } from '@int/geotoolkit/seismic/data/Trace';
import type { Statistics } from '@int/geotoolkit/seismic/data/Statistics';
/**
 * Create section, which keeps individual traces
 */
export declare class BinaryTraceIndicesSection extends TraceSection {
    /**
     * Creates trace section
     * @param traceIndices array of indices
     * @param headerSize header size in bytes
     * @param sampleSize sample size in bytes
     * @param samplesPerTrace samples per trace
     * @param traceHeader trace header
     */
    constructor(traceIndices: number[], headerSize: number, sampleSize: number, samplesPerTrace: number, traceHeader: BinaryHeader);
    clone(): BinaryTraceIndicesSection;
    /**
     * Sets statistics
     * @param [statistics] statistics  min, max, average, rms
     * @returns this
     */
    setStatistics(statistics?: Statistics): this;
    /**
     * Returns number of traces in the section
     */
    getNumberOfTraces(): number;
    /**
     * Returns trace by index in the section
     *
     * @param index trace index in the section starting from 0 to  getNumberOfTraces()-1
     */
    getTraceByIndex(index: number): Trace | null;
    /**
     * Return statistics
     *
     * @returns
     */
    getStatistics(): Statistics;
    /**
     * Sets unique sectionID
     *
     * @param sectionId index of the chunk of the trace data
     * @returns this
     */
    setSectionID(sectionId: number): this;
    /**
     * Gets section id
     */
    getSectionID(): number;
    /**
     * Gets trace header data
     *
     * @param traceId unique trace number
     */
    getHeaderData(traceId: number): Uint8Array | null;
    /**
     * Gets trace
     *
     * @param traceId unique trace number
     */
    getTrace(traceId: number): Trace;
    /**
     * Returns trace range
     */
    getTraceRange(): Range;
    /**
     * Returns size in bytes
     */
    getSectionSize(): number;
    /**
     * Returns trace header size in bytes
     */
    getTraceHeaderSize(): number;
    /**
     * Returns trace size in bytes
     */
    getTraceSize(): number;
}
