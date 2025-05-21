import { SeismicReader } from '@int/geotoolkit/seismic/data/SeismicReader';
import type { IndexType } from '@int/geotoolkit/seismic/data/SeismicMetaData';
import { SeismicMetaData } from '@int/geotoolkit/seismic/data/SeismicMetaData';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { DataHeader } from '@int/geotoolkit/seismic/data/DataHeader';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { FieldDesc } from '@int/geotoolkit/seismic/data/FieldDesc';
import type { SeismicData } from '@int/geotoolkit/seismic/data/SeismicData';
import type { Statistics } from '@int/geotoolkit/seismic/data/Statistics';
import type { TypedArray } from '@int/geotoolkit/util/TypedArray';
/**
 * A seismic reader that keeps all traces in memory.
 * This reader should only be used for small seismic datasets given that
 * all its data is kept in memory.
 * This reader can work in synchronous or asynchronous mode.
 * See the setTraceProcessor method for further details and examples.<br>
 *
 * @example
 * import {MemoryReader} from '@int/geotoolkit/seismic/data/MemoryReader';
 * const reader = new MemoryReader({
 *   'numberOfTraces': 1024,
 *   'numberOfSamples': 100,
 *   'sampleRate': 0.004
 * })
 */
export declare class MemoryReader extends SeismicReader {
    /**
     * Creates memory reader
     * @param options nullValue or options is passed when a value does not exist.
     * There will be a break in the wiggles in that area. Fill will not fill that area.
     * User can set a custom color for NullValue
     */
    constructor(options: MemoryReader.Options | number);
    protected copyConstructor(src: MemoryReader, deepCopy?: boolean): this;
    /**
     * Return clone of the reader
     */
    clone(): MemoryReader;
    /**
     * Return trace header fields
     */
    getTraceHeaderFields(): FieldDesc[];
    /**
     * Sets the 'trace processor' of this memory reader.<br>
     * The trace processor is a delegate object responsible for providing data to the reader.<br>
     * @param traceProcessor object that implements following set of functions which provide trace data and statistics to reader.
     * @returns this
     * @example
     * // Example of asynchronous reader
     * import {MemoryReader} from '@int/geotoolkit/seismic/data/MemoryReader';
     * import {Statistics} from '@int/geotoolkit/seismic/data/Statistics';
     * const reader = new MemoryReader({
     *   'numberOfTraces': 1024,
     *   'numberOfSamples': 100,
     *   'sampleRate': 0.004
     * })
     * .setTraceProcessor({
     *        'getAsyncData': (query, callback) => {
     *            callback({'getTraceData': (reader: MemoryReader, samples: number[], traceId: number) => {
     *                for (let i = 0; i < reader.getNumberOfSamples(); i++) {
     *                    trace[i] = Math.cos(i / 8);
     *                }
     *            }});
     *        },
     *        'getDataStatistics': (): Statistics => ({
     *                'average': 0,
     *                'min': -1,
     *                'max': 1,
     *                'rms': Math.sqrt(2) / 2
     *        })
     *    });
     * @example
     * // Example of synchronous reader
     * ...
     * reader
     *   .setTraceProcessor({
     *           'getTraceData': (reader: MemoryReader, samples: number[], traceId: number) => {
     *               for (let i = 0; i < reader.getNumberOfSamples(); i++) {
     *                  trace[i] = Math.cos(i / 8);
     *               }
     *           },
     *           ...
     *       });
     */
    setTraceProcessor(traceProcessor: MemoryReader.ExtendedTraceProcessor): this;
    /**
     * Returns statistics
     */
    getStatistics(): Statistics;
    /**
     * read Seismic data statistics
     * @param callback method to be called when data is ready
     */
    readDataSetStatistics(callback: (reader: MemoryReader, statistics: Statistics) => void): void;
    /**
     * Returns seismic model limits
     */
    getModelLimits(): Rect;
    /**
     * Set number of traces
     * @param numberOfTraces The number of traces in the memory reader
     * @returns this
     */
    setNumberOfTraces(numberOfTraces: number): this;
    /**
     * Returns number of traces
     */
    getNumberOfTraces(): number;
    /**
     * Returns number of samples
     */
    getNumberOfSamples(): number;
    /**
     * Sets number of samples per trace
     * @param numberOfSamples number of samples per trace
     * @returns this
     */
    setNumberOfSamples(numberOfSamples: number): this;
    /**
     * returns sample rate
     */
    getSampleRate(): number;
    /**
     * returns seismic trace section
     *
     * @param query this specifies the condition of the request
     * @param callback method to be called when data is ready
     */
    select(query: SeismicData.SelectQuery, callback: SeismicData.SelectCallback): void;
    /**
     * load {@link @int/geotoolkit/seismic/data/SeismicMetaData~SeismicMetaData} seismic meta data
     *
     * @param callback method to be called when data is ready
     */
    loadMetaData(callback: (reader: SeismicReader) => void): void;
    /**
     * returns seismic meta data information
     */
    getMetaData(): SeismicMetaData;
}
export declare namespace MemoryReader {
    /**
     * options object
     */
    export type Options = SeismicReader.Options & {
        /**
         * The sample count per trace
         */
        numberofsamples?: number;
        /**
         * The number of traces in the memory reader
         */
        numberoftraces?: number;
        /**
         * The start index value of samples in the memory reader
         */
        startvalue?: number;
        /**
         * The sample rate
         */
        samplerate?: number;
        /**
         * If the reader has sections, the number of traces in each section. See SeismicMedataData.sections for more info.
         */
        sections?: number[];
        /**
         * Unit for the usual time or depth axis in the dataset
         */
        zunit?: AbstractUnit;
        /**
         * See SeismicMetaData VolumeKeyNames for more info.
         */
        volumekeynames?: SeismicMetaData.VolumeKeyNames;
        /**
         * Index type for this memory reader
         */
        indextype?: IndexType;
        /**
         * See SeismicMetaData VolumeDefaultKeyNames for more info.
         */
        volumedefaultkeynames?: SeismicMetaData.VolumeKeyNames;
        /**
         * See SeismicMetaData xyKeyInformation for more info.
         */
        xykeynames?: any;
    };
    /**
     * object that implements following set of functions which provide trace data and statistics to reader.
     */
    export type ExtendedTraceProcessor = TraceProcessor & {
        /**
         * Method that should return seismic data statistics
         */
        getDataStatistics: (reader: MemoryReader) => Statistics;
        /**
         * Returns trace headers description
         */
        getTraceHeaderFields?: (reader: MemoryReader) => FieldDesc[];
        /**
         * Function used in asynchronous mode, it should return an object with a function getTraceData
         */
        getAsyncData?: (query: SeismicData.SelectQuery, callback: TraceProcessorCallback) => any;
    };
    /**
     * an object, which contains functions to get trace samples and headers
     */
    export type TraceProcessor = {
        /**
         * A callback function that fills the given trace with its sample values
         */
        getTraceData?: (reader: MemoryReader, samples: number[] | TypedArray, traceId: number) => any;
        /**
         * a callback function to get trace header data
         */
        getTraceHeader?: (reader: MemoryReader, header: DataHeader, data: number[], traceId: number) => any;
    };
    /**
     * Callback for {@link @int/geotoolkit/seismic/data/MemoryReader~MemoryReader} for asynchronous to return samples and trace header
     */
    type TraceProcessorCallback = (traceProcessor: TraceProcessor) => any;
    export {};
}
