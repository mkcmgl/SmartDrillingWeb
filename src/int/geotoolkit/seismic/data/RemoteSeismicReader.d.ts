import { SeismicReader } from '@int/geotoolkit/seismic/data/SeismicReader';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { RemoteSeismicDataSource } from '@int/geotoolkit/seismic/data/RemoteSeismicDataSource';
import type { SeismicMetaData } from '@int/geotoolkit/seismic/data/SeismicMetaData';
import type { RemoteReaderDataProvider, WorkflowType } from '@int/geotoolkit/seismic/data/RemoteReaderDataProvider';
import type { FieldDesc } from '@int/geotoolkit/seismic/data/FieldDesc';
import type { Statistics } from '@int/geotoolkit/seismic/data/Statistics';
import type { SeismicData } from '@int/geotoolkit/seismic/data/SeismicData';
import type { BinaryHeader } from '@int/geotoolkit/seismic/data/BinaryHeader';
/**
 * RemoteSeismicReader is a reader that can access data on a server rather than on a local file.<br>
 * This implementation follows the INTGeoServer(© Interactive Network Technologies, Inc.) API.<br>
 * Meaning that it can be used out of the box to fetch traces from an INTGeoServer(© Interactive Network Technologies, Inc.).<br>
 * <br>
 * This class uses internally xhr and binary transfer to fetch the traces from the server.<br>
 */
export declare class RemoteSeismicReader extends SeismicReader {
    /**
     * Creates reader
     * @param datasource The datasource for this reader
     * @param [options] The options to use
     * @param [nullValue] nullValue is passed when a value does not exist. There will be a break in the wiggles in that area. Fill will not fill that area. User can set a custom color for NullValue
     */
    constructor(datasource: RemoteSeismicDataSource, options?: RemoteSeismicReader.Options | number, nullValue?: number);
    getOptions: () => RemoteSeismicReader.Options;
    /**
     * The default workflow constant. By default no compression will be done.
     * @constant
     * @default
     */
    static get DefaultWorkflow(): string;
    loadMetaData(callback: (reader: SeismicReader) => void): void;
    /**
     * Returns host name
     */
    getHost(): string;
    /**
     * Returns file name
     */
    getSeismicFileName(): string;
    /**
     * Returns statistics
     *
     * @returns data statistics
     */
    getStatistics(): Statistics;
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
     * Returns seismic model limits
     */
    getModelLimits(): Rect;
    /**
     * Returns seismic meta data information
     */
    getMetaData(): SeismicMetaData;
    /**
     * Returns seismic original meta data information before any decimation
     */
    getOriginalMetaData(): SeismicMetaData;
    /**
     * Update reader by making new seismic query
     *
     * @param [query] this specifies the condition of the request
     * @param [callback] method to be called when data is ready
     */
    update(query?: Record<string, any>, callback?: SeismicReader.UpdateCallback): void;
    /**
     * Select seismic trace sections and then call "callback" method. This function executes a 'select' operation using the given query.<br>
     * The query is executed server side (for RemoteSeismicReader) to filter the traces requested by the client side.<br>
     * The servers sends back the data, and when the request is finalized, the given callback function is called with the result.
     *
     * @param query a condition in JSON format
     * @param callback callback to be called when section is loaded
     */
    select(query: RemoteSeismicReader.SelectQuery, callback: SeismicData.SelectCallback): Promise<void>;
    /**
     * Return instance of data provider
     */
    getDataProvider(): RemoteReaderDataProvider;
    /**
     * Notify server that reader resources can be released on server
     */
    release(): void;
    /**
     * Returns an array of field descriptors for the dataset read by this
     * seismic reader.
     *
     * @returns array of header descriptors
     */
    getTraceHeaderFields(): FieldDesc[];
}
export declare namespace RemoteSeismicReader {
    /**
     * The options to use
     */
    type Options = SeismicReader.Options & {
        /**
         * seismic meta data
         */
        metadata?: SeismicMetaData;
        /**
         * original seismic meta data
         */
        originalmetadata?: SeismicMetaData;
        /**
         * data statistics
         */
        statistics?: Statistics;
        /**
         * The trace header
         */
        traceheader?: BinaryHeader;
        /**
         * byte order
         */
        byteorder?: string;
        /**
         * data provider
         */
        provider?: RemoteReaderDataProvider;
        /**
         * source id
         */
        sourceid?: string | number;
        /**
         * query id
         */
        queryid?: string | number;
        /**
         * query properties
         */
        query?: null | RemoteReaderDataProvider.Query;
        /**
         * synchronous request
         */
        synchronous?: boolean;
    };
    /**
     * a condition in JSON format
     */
    type SelectQuery = SeismicData.SelectQuery & {
        /**
         * compression options
         */
        workflow?: WorkflowType | string;
        /**
         * byte order
         */
        byteOrder?: string;
        /**
         * null sample
         */
        nullSample?: number;
        /**
         * query properties
         */
        query?: RemoteReaderDataProvider.Query;
    };
}
