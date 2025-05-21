import { AbstractHttpService } from '@int/geotoolkit/http/AbstractHttpService';
import type { SeismicMetaData } from '@int/geotoolkit/seismic/data/SeismicMetaData';
import type { ByteOrder } from '@int/geotoolkit/seismic/data/ByteOrder';
import type { RemoteReaderDataProvider } from '@int/geotoolkit/seismic/data/RemoteReaderDataProvider';
import type { Statistics } from '@int/geotoolkit/seismic/data/Statistics';
import type { SeismicReader } from '@int/geotoolkit/seismic/data/SeismicReader';
/**
 * Defines remote seismic data source
 *
 * <p>
 * The data source communicate with server using JSON format via HTTP. It uses the following sequence of calls:
 * </p>
 *  <ul>
 *  <li>get information about data source</li>
 *  <li>make query</li>
 *  <li>read a bunch of traces from creating query.</li>
 * </ul>
 *
 * <p>
 * The supported query:
 * </p>
 * <h3>1. Get meta information about data set:</h3>
 * Input:
 *
 * ```
 * {
 *    "file" : fileName,
 *    "type" : "info"
 * }
 * ```
 *
 * <p/>
 * Output:
 *
 * ```
 * {
 *   "version": number,
 *   "sourceId": number, // Used for optimization
 *   "keys": [ {"key": name, "min":minValue, "max":maxValue, "increment":step } ],
 *   "numberOfSamples": value,
 *   "numberOfTraces": value,
 *   "sampleRate": value,
 *   "startValue": value,
 *   "zUnit": value,
 *   "statistics": { "min":value, "max":value, "average":value, "rms":value },
 *   "units": value, //cgUnits value
 *   "traceHeader": {
 *        "fields": [ { "name":name, "id":number, "type":string, "size":bytes } ],"size":bytes
 *   }
 * },
 * ```
 *
 * Example:
 * <br>
 * http://localhost:8080/seismicreader?json=%7B%22file%22:%22seismicdata/cdp_stack.sgy%22,%22type%22:%22info%22,%22query%22:%7B%7D,%22sourceId%22:-1%7D
 * <p/>
 * Where query string parameters:
 *
 * ```
 * json:{"file":"seismicdata/cdp_stack.sgy","type":"info","query":{},"sourceId":-1}
 * ```
 *
 * <h3>2. Get information about query.</h3>
 *
 * Input:
 *
 * ```
 * {
 *   "file" : fileName,
 *   "type" : "query",
 *   "sourceId": number, // Used for optimization. It is optional
 *   "queryId": number, // Used for optimization. it is optional
 *   "query": {
 *           // See available queries in 3. and 4.
 *    }
 *  }
 *  ```
 *
 * Output:
 *
 * ```
 *  {
 *     "version": number,
 *     "queryId": number, // Used for optimization
 *     "numberOfSamples": value,
 *     "numberOfTraces": value,
 *     "sampleRate": value,
 *     "startValue": value,
 *     "statistics": { "min":value, "max":value, "mean":value, "average":value, "rms":value, "percentiles":[value1, value2, ...] }, //percentiles only if available
 *  }
 * ```
 *
 * Example of query string parameters:
 *
 * ```
 * json:{"file":"seismicdata/cdp_stack.sgy","type":"query","query":{},"sourceId":1169947804}
 * ```
 *
 * <h3>3. Get binary data from the trace range</h3>
 * Input:
 *
 * ```
 *  {
 *     "file" : fileName,
 *     "type" : "traces",
 *     "queryId": number, // Used for optimization. It is optional
 *     "query": {
 *          "keys": [
 *          {
 *              "name" : KeyName,
 *              "min": minValue,
 *              "max": maxValue,
 *              "step": stepValue,
 *              "order": asc or desc
 *           },
 *           // ...
 *          ]
 *     },
 *     "data" : {
 *            "startTrace": startTrace,
 *            "endTrace": endTrace,
 *            "samples": "true", // or "false",
 *            "headers": "true", // or "false"
 *            "byteOrder": "LITTLE_ENDIAN", "BIG_ENDIAN0"
 *    }
 *   }
 *   ```
 *
 *   Output: Binary data. It returns block (endTrace-startTrace+1). Each trace has HEADER and SAMPLES.
 *   The header size equals to information from metadata, Samples size equals (4 * samplesCount)
 *   The full size of the data block is (endTrace - startTrace + 1) * (headerSize + samplesSize)
 *   The samples are returned as float
 *
 *   Example of query string parameters:
 *
 *   ```
 *   json: {
 *      "file":"seismicdata/cdp_stack.sgy",
 *      "type":"traces",
 *      "query":{},
 *      "data": {
 *          "startTrace":0,
 *          "endTrace":255,
 *          "samples":true,
 *          "headers":true,
 *          "byteOrder":"LITTLE_ENDIAN"
 *      },
 *      "sourceId":1169947804,
 *      "queryId":1169945598
 *   }
 *   ```
 *
 * <h3>4. Get binary data for an arbitrary path</h3>
 *
 * Input:
 *
 *  ```
 *  {
 *     "file" : fileName,
 *     "type" : "traces",
 *     "queryId": number, // Used for optimization. It is optional
 *     "query": {
 *           "keys": [
 *              {"name" : KeyName1, "values": [values for key1]},
 *              {"name" : KeyName2, "values": [values for key2]},
 *           ],
 *           "queryType": "seismicPath",
 *           'emptyTraces': true,
 *     },
 *
 *     "data" : {
 *            "startTrace": startTrace,
 *            "endTrace": endTrace,
 *            "samples": "true" or "false",
 *            "headers": "true" or "false"
 *            "byteOrder": "LITTLE_ENDIAN", "BIG_ENDIAN0"
 *    }
 *   }
 *   ```
 *   Output: Binary data. It returns block (endTrace-startTrace+1). Each trace has HEADER and SAMPLES.
 *   The header size equals to information from metadata, Samples size equals (4 * samplesCount)
 *   The full size of the data block is (endTrace - startTrace + 1) * (headerSize + samplesSize)
 *   The samples are returned as float
 *
 *   Example of query string parameters:
 *
 *   ```
 *   json: {
 *      "file":"seismicdata/cdp_stack.sgy",
 *      "type":"traces",
 *      "query":{},
 *      "data": {
 *          "startTrace":0,
 *          "endTrace":255,
 *          "samples":true,
 *          "headers":true,
 *          "byteOrder":"LITTLE_ENDIAN"
 *      },
 *      "sourceId":1169947804,
 *      "queryId":1169945598
 *    }
 *   ```
 *
 *   <h3>5. Release data source and/or query collection</h3>
 *
 *   ```
 *   {
 *     "sourceId": number,
 *     "queryId": number, // optional
 *     "type" : "release"
 *   }
 *   ```
 *
 * @throws {Error} if version of provider is not supported.
 * @example
 * import {RemoteSeismicDataSource} from '@int/geotoolkit/seismic/data/RemoteSeismicDataSource';
 * const data = new RemoteSeismicDataSource({
 *       'host': 'https://demo.int.com/INTGeoServer/json',
 *       'file': 'data/seismic/Gullfaks_Amplitude.xgy',
 *       'version': 2
 *   });
 * // request data source
 * data.open(() => {
 *           // Create query object
 *           data.select(query, (reader) => {
 *               // Create pipeline
 *           });
 *       }, (err) => {
 *           // Error handling
 *       }
 * );
 * @see {@link @int/geotoolkit/seismic/data/RemoteReaderDataProvider~RemoteReaderDataProvider} to have more information about output and input parameters
 */
export declare class RemoteSeismicDataSource {
    /**
     * Creates data source
     * @param options The options
     */
    constructor(options: RemoteSeismicDataSource.Options);
    /**
     * Returns the data info
     * @returns options
     */
    getDataInfo(): RemoteReaderDataProvider.Data | RemoteReaderDataProvider.ParsedData;
    /**
     * Returns host name
     */
    getHost(): string;
    /**
     * Returns file name
     */
    getSeismicFileName(): string;
    /**
     * This method open connection and load data source information
     *
     * @param callback is called then file is open
     * @param [error] function with parameter data
     */
    open(callback: RemoteSeismicDataSource.OpenCallback, error?: RemoteSeismicDataSource.ErrorCallback): void;
    /**
     * Returns a reader that provides a subset of this seismic data.<br>
     * See class documentation for available queries.<br>
     * @param query query object
     * @param callback The callback function to be called on success, will be called with the resulting reader as a parameter
     * @param [error] The callback function to be called on error, will be called with the actual error as a parameter
     * @example
     * // A query by INLINE to select all XLINE traces form the range [0,1000] with empty traces
     * datasource.select({'keys': [
     *  {
     *    'name': 'INLINE',
     *    'min': 500,
     *    'max': 500,
     *    'step': 1,
     *    'order': 'asc'
     *  },
     *  {
     *    'name': 'XLINE',
     *    'min': 0,
     *    'max': 1000,
     *    'step': 1,
     *    'order': 'asc'
     *  }
     * ],
     *  'emptyTracesKey' {
     *    'name': 'XLINE',
     *    'min': 0,
     *    'max': 1000
     *  }
     *  }, (reader) => {
     *   ...
     * });
     * @example
     * // Query by path
     * datasource.select({ 'emptyTraces': true,
     *       'queryType': 'seismicPath',
     *       'keys': [{
     *           'name': 'INLINE',
     *           "values": [100, 200, 200]
     *       }, {
     *           'name': 'XLINE',
     *           'values': [200, 400, 500]
     *       }]
     *   }, (reader) => {
     *     ...
     *   });
     */
    select(query: RemoteSeismicDataSource.SelectQuery, callback: RemoteSeismicDataSource.SelectCallback, error?: RemoteSeismicDataSource.ErrorCallback): void;
    /**
     * Returns keys to make query
     */
    getKeys(): RemoteReaderDataProvider.SeismicKey[];
    /**
     * Returns seismic meta data information
     */
    getMetaData(): SeismicMetaData;
    /**
     * Returns statistics
     */
    getStatistics(): Statistics;
    getByteOrder(): ByteOrder;
    /**
     * Notify server that reader resources can be released on server
     */
    release(): void;
}
export declare namespace RemoteSeismicDataSource {
    /**
     * The options
     */
    type Options = {
        /**
         * The service url, see example
         */
        host: string;
        /**
         * The filename or resource id
         */
        file?: string;
        /**
         * default version of communication data provider. Supported: 1 and 2, ivaap or custom version
         */
        version?: string | number;
        /**
         * web service url to provide meta data about an individual seismic dataset
         */
        seismicdata?: string;
        /**
         * web service url to provide meta data about a selection of traces
         */
        seismicquery?: string;
        /**
         * web service url to stream all trace header and sample values for a selection of traces
         */
        seismictraces?: string;
        /**
         * web service url to provides the bytes that form the binary header, if any
         */
        binaryheader?: string;
        /**
         * HTTP request headers as key-value pair. if it is specified then it will be applied
         */
        requestheaders?: Record<string, string>;
        /**
         * a function to return request headers
         */
        getrequestheaders?: () => Record<string, string>;
        /**
         * http service to make any HTTP request
         */
        httpservice?: AbstractHttpService;
        /**
         * a string to represent header descriptor to be sent to data provider if it is supported
         */
        headerdescriptor?: string;
        /**
         * option to be provided to enable null samples processing if data provider is supported.
         */
        enablenullsamples?: boolean;
        /**
         * Additional types
         */
        [key: string]: any;
    };
    /**
     * Callback of the method open
     */
    type OpenCallback = (source: RemoteSeismicDataSource) => void;
    /**
     * Callback if error happens
     */
    type ErrorCallback = (error: Error) => void;
    /**
     * Callback of the method select
     */
    type SelectCallback = (reader: SeismicReader) => void;
    /**
     * query object
     */
    type SelectQuery = null | RemoteReaderDataProvider.Query;
}
