/**
 * @module geotoolkit/seismic/data/SeismicReader
 */
import { SeismicData } from '@int/geotoolkit/seismic/data/SeismicData';
import type { SeismicMetaData } from '@int/geotoolkit/seismic/data/SeismicMetaData';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { FieldDesc } from '@int/geotoolkit/seismic/data/FieldDesc';
import type { Statistics } from '@int/geotoolkit/seismic/data/Statistics';
import type { ClassType } from '@int/geotoolkit/base';
/**
 * SeismicReader Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event fired when a data received from the source
     */
    DataReceived = "DataReceived",
    /**
     * Event fired when failed to get data from the source
     */
    DataFailed = "DataFailed",
    /**
     * Event fired when trace header fields are changed from the source
     */
    TraceHeaderFieldsChanged = "TraceHeaderFieldsChanged",
    /**
     * Event fired when reader is updated during method update
     */
    Updated = "Updated"
}
/**
 * Seismic reader reads seismic data from the different sources and provides it to trace processor in uniform representation as a collection of traces,<br>
 * where a trace is a collection of samples. A trace is logically subdivided into zero or more trace headers and zero or more samples.<br>
 * Seismic Reader also returns information about seismic data, like number of many traces it has, number of samples per trace, <br>
 * unit of samples, sample rate and also provides trace headers information.
 */
export declare abstract class SeismicReader extends SeismicData {
    /**
     * Creates reader
     * @param [options] nullValue or options is passed when a value does not exist.
     * There will be a break in the wiggles in that area. Fill will not fill that area.
     * User can set a custom color for NullValue
     */
    protected constructor(options?: SeismicReader.Options | number);
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     * @param [deepCopy] deep copy
     * @returns this
     */
    protected copyConstructor(src: SeismicReader, deepCopy?: boolean): this;
    on<E extends keyof SeismicReader.EventMap>(type: E, callback: (eventType: E, sender: this, args: SeismicReader.EventMap[E]) => void): this;
    off<E extends keyof SeismicReader.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: SeismicReader.EventMap[E]) => void): this;
    notify<E extends keyof SeismicReader.EventMap>(type: E, source: SeismicReader, args?: SeismicReader.EventMap[E]): this;
    /**
     * Returns supported extra options
     * @returns options options
     */
    getOptions(): any;
    /**
     * Returns null value
     * @returns null value
     */
    getNullValue(): number;
    /**
     * Returns seismic original meta data information before any decimation
     */
    getOriginalMetaData(): SeismicMetaData;
    /**
     * Returns seismic model limits
     */
    abstract getModelLimits(): Rect;
    /**
     * Load {@link @int/geotoolkit/seismic/data/SeismicMetaData~SeismicMetaData} seismic metadata.
     * Seismic metadata is a map of general properties of the seismic data source like: number of traces, sample rate.
     *
     * @param callback method to be called when data is ready
     */
    abstract loadMetaData(callback: (reader: SeismicReader) => void): void;
    /**
     * Returns number of traces
     */
    abstract getNumberOfTraces(): number;
    /**
     * Returns number of samples
     */
    abstract getNumberOfSamples(): number;
    /**
     * Returns sample rate . Sample rate is the number of times an analog signal is measured (sampled) per second.<br>
     * Basically it is a difference between nearest sample values. This term comes from digital signal processing and defines how <br>
     * continuous signal is sampled.   For example: 0.004/ second
     */
    abstract getSampleRate(): number;
    /**
     * Gets statistics such as min, max, average, rms
     */
    abstract getStatistics(): Statistics;
    /**
     * Returns an array of field descriptors for the dataset read by this
     * seismic reader.
     */
    abstract getTraceHeaderFields(): FieldDesc[];
    /**
     * returns seismic trace section
     *
     * @param query this specifies the condition of the request
     * @param callback method to be called when data is ready
     * @example
     * // to read a specific range of traces
     * reader.select({
     *  'from': 10,
     *  'to': 20
     * }, (fetchResult) => {
     *      // fetchResult is instance of @int/geotoolkit/seismic/data/QueryResult
     *      fetchResult.foreach((index, section) => {
     *        for (let i = 10; i <= 20; i++) {
     *            console.log(section.getTrace(i));
     *        }
     *    });
     * });
     * @example
     * //  selection by trace indices
     * reader.select({
     *   'traceIndexes': [15, 20]
     *  }, (fetchResult) => { ... });
     */
    abstract select(query: SeismicData.SelectQuery, callback: SeismicData.SelectCallback): void;
    /**
     * Update seismic query and returns meta information
     *
     * @param [options] this specifies the condition of the request
     * @param [callback] method to be called when data is ready
     */
    update(options?: Record<string, any>, callback?: SeismicReader.UpdateCallback): void;
    /**
     * Returns interface, if reader can provide it
     * @param someInterface interface
     * @returns internal instance of this interface
     */
    queryInterface(someInterface: ClassType): null | object;
}
export declare namespace SeismicReader {
    /**
     * nullValue or options is passed when a value does not exist. There will be a break in the wiggles in that area. Fill will not fill that area. User can set a custom color for NullValue
     */
    type Options = {
        /**
         * null value
         */
        nullvalue?: number;
        /**
         * maximum number of the traces per requests
         */
        fetchsize?: number;
    };
    /**
     * Callback of the method update
     */
    type UpdateCallback = (reader: SeismicReader | Error, metaData: SeismicMetaData) => void;
    type EventMap = SeismicData.EventMap & {
        [Events.DataReceived]: void;
        [Events.DataFailed]: void;
        [Events.TraceHeaderFieldsChanged]: void;
        [Events.Updated]: void;
    };
}
