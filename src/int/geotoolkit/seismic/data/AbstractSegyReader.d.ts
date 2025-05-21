import { SeismicReader } from '@int/geotoolkit/seismic/data/SeismicReader';
import { TaskScheduler } from '@int/geotoolkit/util/taskscheduler';
import { Rect } from '@int/geotoolkit/util/Rect';
import { SeismicMetaData } from '@int/geotoolkit/seismic/data/SeismicMetaData';
import type { SeismicFormat } from '@int/geotoolkit/seismic/data/SeismicFormat';
import type { FieldDesc } from '@int/geotoolkit/seismic/data/FieldDesc';
import type { Statistics } from '@int/geotoolkit/seismic/data/Statistics';
import type { SeismicData } from '@int/geotoolkit/seismic/data/SeismicData';
/**
 * Defines an abstract SEG-Y reader
 */
export declare abstract class AbstractSegyReader extends SeismicReader {
    /**
     * Creates reader
     * @param [options] options or instance of format to specify the  trace
     * data format and location of headers
     */
    protected constructor(options?: AbstractSegyReader.Options);
    protected copyConstructor(src: AbstractSegyReader, deepCopy?: boolean): this;
    /**
     * Returns seismic model limits
     */
    getModelLimits(): Rect;
    /**
     * Load {@link @int/geotoolkit/seismic/data/SeismicMetaData~SeismicMetaData} seismic meta data
     *
     * @param callback method to be called when data is ready
     */
    loadMetaData(callback: (reader: SeismicReader) => void): void;
    /**
     * Returns seismic meta data information
     */
    getMetaData(): SeismicMetaData;
    /**
     * Return the currently computed seismic statistics. <br>
     * <b>Important Note:</b> SEGY Statistics are computed lazily, and first require a call to async method readDataSetStatistics(callback).
     * If statistics are not updated, defaults values will be returned instead and will <b>not</b> reflect the actual stats.
     * @returns min, max, average, rms
     */
    getStatistics(): Statistics;
    /**
     * Sets statistics
     * @param statistics min, max, average, rms
     */
    setStatistics(statistics: Statistics): void;
    /**
     * Asynchronously read SEG-Y statistics. This method reads maximum calcTraces from data and calculate statistics based on it. <br>
     * This method must be called to initialize statistics, in order for getStatistics() to return the right values.
     * @param callback method to be called when statistics will be calculated.
     * @param [calcTraces] number of traces to calculate statistics
     */
    readDataSetStatistics(callback: (reader: AbstractSegyReader, statistics: Statistics) => void, calcTraces?: number): void;
    /**
     * Returns number of traces
     */
    getNumberOfTraces(): number;
    /**
     * Returns number of samples
     */
    getNumberOfSamples(): number;
    /**
     * Returns sample rate
     */
    getSampleRate(): number;
    /**
     * Return SEG-Y data format
     * @returns seismic data format
     */
    getDataFormat(): SeismicFormat;
    /**
     * Returns seismic trace section
     *
     * @param query a query in JSON format. Should contain parameters relevant to the trace, such as "from", "to", "headers", and "samples"
     * @param callback callback to be called then section is loaded. This method has {@link @int/geotoolkit/seismic/data/QueryResult~QueryResult}
     */
    select(query: SeismicData.SelectQuery, callback: SeismicData.SelectCallback): void;
    /**
     * Returns an array of field descriptors for the dataset read by this
     * seismic reader.
     *
     * @returns array of header descriptors
     */
    getTraceHeaderFields(): FieldDesc[];
    /**
     * Return file size in bytes
     */
    abstract getFileSize(): number;
    /**
     * Read a binary section
     * @param callback callback function to return binary data
     * @param start start position in bytes
     * @param end end position in bytes
     */
    abstract readBinarySection(callback: AbstractSegyReader.ReadBinarySectionCallback, start: number, end: number): void;
    /**
     * This methods is called if it is necessary to read a individual traces.
     * The default implementation calls readBinarySection for each trace in a parallel. The solve of
     * promise can return a array of binary data for each trace or one buffers with data for all requested traces
     * @param traceIndices array on trace indices to be loaded
     */
    protected readTraceIndices(traceIndices: number[]): Promise<Uint8Array[] | ArrayBuffer[] | null>;
    /**
     * This methods is called if it is necessary to read a trace range.
     * @param traceFrom from trace
     * @param traceTo from trace
     */
    protected readTraceRange(traceFrom: number, traceTo: number): Promise<Uint8Array | ArrayBuffer>;
    /**
     * Returns task scheduler
     * @returns the task scheduler
     */
    protected getTaskScheduler(): TaskScheduler;
    /**
     * Return offset in the SEG-Y file
     * @param traceId trace id
     * @returns position in the file in bytes
     */
    protected getTraceOffset(traceId: number): number;
}
export declare namespace AbstractSegyReader {
    /**
     * options or instance of format to specify the  trace
     * data format and location of headers
     */
    type Options = SeismicReader.Options & {
        /**
         * SEG-Y format
         */
        segyformat?: SeismicFormat;
        /**
         * sample power
         */
        samplepower?: number;
        /**
         * number of parallel requests
         */
        numberofparalleltasks?: number;
        /**
         * synchronous requests
         */
        synchronous?: boolean;
    };
    /**
     * Callback of the method readBinarySection
     */
    type ReadBinarySectionCallback = (error: Error | null, buffer?: Uint8Array | ArrayBuffer) => void;
}
