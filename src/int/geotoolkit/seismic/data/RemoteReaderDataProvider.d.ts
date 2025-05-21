import { ByteOrder } from '@int/geotoolkit/seismic/data/ByteOrder';
import type { Statistics } from '@int/geotoolkit/seismic/data/Statistics';
import type { BinaryHeader } from '@int/geotoolkit/seismic/data/BinaryHeader';
import type { SeismicMetaData } from './SeismicMetaData';
/**
 * Define abstract data provider for communication between  remote reader and server
 */
export declare abstract class RemoteReaderDataProvider {
    /**
     * Create an instance
     * @param options
     * @returns provider
     */
    abstract createInstance(options: Record<string, any>): RemoteReaderDataProvider;
    /**
     * Notify server that reader resources can be released on server
     * @param [sourceId] optional parameter id of the data source
     */
    close(sourceId?: string): void;
    /**
     * This method open connection and load data source information.
     * @param fileName file name
     */
    open(fileName: string): Promise<RemoteReaderDataProvider.Data | RemoteReaderDataProvider.ParsedData>;
    /**
     * This method query traces and returns information about traces
     * @param fileName file name
     * @param [query] a query to return amount of traces and samples
     */
    abstract queryTraces(fileName: string, query?: RemoteReaderDataProvider.Query): Promise<RemoteReaderDataProvider.QueryData>;
    /**
     * This method reads traces
     * @param fileName
     * @param [options]
     */
    abstract readTraces(fileName: string, options?: RemoteReaderDataProvider.TracesOptions): Promise<ArrayBuffer>;
    /**
     * Notify server that reader resources can be released on server
     * @param [sourceId] source id
     * @param [queryId] query id
     */
    releaseQuery(sourceId?: string | number, queryId?: string | number): void;
    /**
     * Return byt order
     * @returns byte order
     */
    getByteOrder(): ByteOrder;
}
export declare namespace RemoteReaderDataProvider {
    /**
     * a query in JSON format
     */
    export type Query = {
        /**
         * optional array of keys to make a query
         */
        keys?: QueryKey[] | QueryPathKey[];
        /**
         * optional empty trace key
         */
        emptyTracesKey?: {
            /**
             * Key name
             */
            name: string;
            /**
             * Minimum value
             */
            min: number;
            /**
             * Maximum value
             */
            max: number;
        };
        /**
         * generated empty traces on server
         */
        emptyTraces?: boolean;
        /**
         * query type. It can be 'seismicPath' or null. if it is null then query is done by keys overwise by path.
         */
        queryType?: string;
        /**
         * additional options to send to server
         */
        options?: Record<string, any>;
        /**
         * define type of the query. A traceOrder of 1 indicates a XSection query. The Time key is
         * ignored for XSection queries. A trace order of 2 indicates a Map query. The Time key is required for Map queries, with identical min and max values (a time slice).
         */
        traceOrder?: number;
        /**
         * decimation
         */
        decimation?: boolean;
        /**
         * compression properties
         */
        workflow?: WorkflowType | string;
        /**
         * Error of compression
         * ZFP workflow if it is supported
         */
        error?: number;
        /**
         * Chunk size of compression in samples
         * ZFP and LosslessZFP workflow
         */
        chunkSize?: number;
        /**
         * Enable null value support if is supported
         */
        enableNullSamples?: boolean;
        /**
         * Null value sample
         */
        nullSample?: number;
        /**
         * AGC is enabled
         */
        agc?: boolean;
    };
    /**
     * read traces properties
     */
    export type TracesOptions = {
        /**
         * start trace number
         */
        from?: number;
        /**
         * end trace number
         */
        to?: number;
        /**
         * optional array of traces indices
         */
        traceIndexes?: number[];
        /**
         * request samples
         */
        samples?: boolean;
        /**
         * request samples
         */
        headers?: boolean;
        /**
         * query
         */
        query?: Query;
        /**
         * optional id of the source
         */
        sourceId?: string;
        /**
         * optional id of the query
         */
        queryId?: string;
        /**
         * byte order
         */
        byteOrder?: string;
    };
    /**
     * Seismic query key to make a query
     */
    type QueryKey = {
        /**
         * name of the key
         */
        name: string;
        /**
         * minimum value
         */
        min?: number;
        /**
         * maximum value
         */
        max?: number;
        /**
         * increment
         */
        step?: number;
        /**
         * order
         */
        order?: QueryKeyOrderType | string;
    };
    /**
     * Seismic query key to make query by path
     */
    type QueryPathKey = {
        /**
         * name of the key
         */
        name: string;
        /**
         * an array of values instead of min, max, step
         */
        values?: number[];
    };
    /**
     * Information about data source from server of version
     */
    export type Data = {
        /**
         * version number
         */
        version?: string | number;
        /**
         * statistics
         */
        statistics: Statistics;
        /**
         * number of traces in data source
         */
        numberOfTraces: number;
        /**
         * number of samples in the trace
         */
        numberOfSamples: number;
        /**
         * start value
         */
        startValue?: number;
        /**
         * sample rate
         */
        sampleRate: number;
        /**
         * supported compression algorithms if it exists
         */
        compression?: {
            /**
             * algorithms of compression
             */
            types?: string[];
            /**
             * if map compression is supported
             */
            map?: boolean;
        };
        /**
         * ebcidic header if exists
         */
        ebcdic?: string[];
        /**
         * binary header if exists
         */
        binary?: string[];
        /**
         * grid coordinates of corners
         */
        gridCoordinates?: GridCoordinates[];
        /**
         * index type from: 2DLINE, VOLUME, GATHER, NONINDEXED
         */
        indexType?: string;
        /**
         * an array of keys to make query, where key has options key, max, min, sampleKey
         */
        keys?: SeismicKey[];
        /**
         * information about using trace headers
         */
        traceHeader?: TraceHeader;
        /**
         * an array of trace order
         */
        traceOrders?: number[];
        /**
         * default keys to be used for volume i and j
         */
        volumeDefaultKeyNames?: {
            /**
             * key name for i. Like "INLINE"
             */
            i?: string;
            /**
             * key name for j like "XLINE"
             */
            j?: string;
        };
        /**
         * keys to be used for volume i and j
         */
        volumeKeyNames?: {
            /**
             * key name for i. Like "INLINE"
             */
            i?: string;
            /**
             * key name for j like "XLINE"
             */
            j?: string;
        };
        /**
         * unit of measure used for Z axis
         */
        zUnit?: string;
        /**
         * optional key names to be used to specify X and Y values
         */
        xyKeyNames?: {
            /**
             * optional x key name
             */
            xKeyName?: string;
            /**
             * optional y key name
             */
            yKeyName?: string;
        };
        [key: string]: any;
    };
    /**
     * Parsed information about data source from server version
     */
    export type ParsedData = {
        /**
         * version number
         */
        version?: string | number;
        /**
         * Statistics
         */
        statistics: Statistics;
        /**
         * Meta data
         */
        metadata: SeismicMetaData;
        /**
         * Seismic keys
         */
        keys?: SeismicKey[];
        /**
         * Number of samples
         */
        numberOfSamples?: number;
        /**
         * Number of traces
         */
        numberOfTraces?: number;
        /**
         * Sample rate
         */
        sampleRate?: number;
        /**
         * Trace header
         */
        traceHeader?: BinaryHeader;
        /**
         * Map trace header
         */
        mapTraceHeader?: BinaryHeader;
        /**
         * Source id
         */
        sourceId?: string | number;
        /**
         * ebcidic header if exists
         */
        ebcdic?: string[];
        /**
         * supported compression algorithms if it exists
         */
        compression?: {
            /**
             * algorithms of compression
             */
            types?: string[];
            /**
             * if map compression is supported
             */
            map?: boolean;
        };
        [key: string]: any;
    };
    /**
     * information about data source from server
     */
    export type QueryData = {
        /**
         * version number
         */
        version?: string | number;
        /**
         * statistics
         */
        statistics: Statistics;
        /**
         * number of traces in data source
         */
        numberOfTraces: number;
        /**
         * number of samples in the trace
         */
        numberOfSamples: number;
        /**
         * start value
         */
        startValue?: number;
        /**
         * sample rate
         */
        sampleRate: number;
        /**
         * Trace header
         */
        traceHeader?: BinaryHeader;
        /**
         * If the reader has sections, the number of traces in each section.
         */
        sections?: number[];
        /**
         * optional id of the query
         */
        queryId?: string;
    };
    /**
     * Define grid coordinates type
     */
    export type GridCoordinates = {
        /**
         * Contains 4 numbers i and je keys and x and y
         * [i, j, x, y]
         */
        values: number[];
    };
    /**
     * Seismic keys to make query
     */
    export type SeismicKey = {
        /**
         * name of the key
         */
        key: string;
        /**
         * minimum value
         */
        min: number;
        /**
         * maximum value
         */
        max: number;
        /**
         * increment
         */
        increment?: number;
        /**
         * order
         */
        order?: string;
        /**
         * sample key
         */
        sampleKey?: boolean;
    };
    /**
     * Represent trace header
     */
    type TraceHeader = {
        /**
         * Size of the header in bytes
         */
        size?: number;
        /**
         * an array of trace header field,
         * which contains: name: string,
         * id: number, type: string, size: number
         */
        fields?: TraceHeaderField[];
    };
    /**
     * TraceHeaderType
     */
    type TraceHeaderField = {
        /**
         * identifier (type)
         */
        id: string | number;
        /**
         * name of the field
         */
        name: string;
        /**
         * size of the header in bytes
         */
        size: number;
        /**
         * Field type
         */
        type: string | FieldType;
    };
    export {};
}
/**
 * Define field type
 * for TraceHeaderFieldType
 * @readonly
 * @enum
 */
export declare enum FieldType {
    /**
     * Unsigned integer 32 bit
     */
    UInt = "UInt",
    /**
     * Unsigned integer 32 bit
     */
    UInt32 = "UInt32",
    /**
     * Unsigned integer 64 bit
     */
    UInt64 = "UInt64",
    /**
     * Short
     */
    Short = "Short",
    /**
     * Signed integer 32 bit
     */
    Int = "Int",
    /**
     * Signed integer 32 bit
     */
    Int32 = "Int32",
    /**
     * Signed integer 32 bit
     */
    Int64 = "Int64",
    /**
     * Unsigned short
     */
    UShort = "UShort",
    /**
     * Float
     */
    Float = "Float",
    /**
     * Double
     */
    Double = "Double",
    /**
     * Unsigned byte
     */
    UByte = "UByte",
    /**
     * Byte
     */
    Byte = "Byte"
}
/**
 * Define order type of the key result
 * @readonly
 * @enum
 */
export declare enum QueryKeyOrderType {
    /**
     * Sorting by ascending
     */
    Asc = "asc",
    /**
     * Sorting by descending
     */
    Dsc = "dsc"
}
/**
 * Define existing compression workflows
 * @readonly
 * @enum
 */
export declare enum WorkflowType {
    /**
     * No compression
     */
    NoCompress = "NoCompress",
    /**
     * Haar wavelets
     */
    HaarWaveletsU = "HaarWavelets U",
    /**
     * ZFP
     */
    ZFP = "ZFP",
    /**
     * Lossless ZFP
     */
    LosslessZFP = "Lossless ZFP"
}
