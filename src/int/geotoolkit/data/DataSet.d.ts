import { DataSource } from '@int/geotoolkit/data/DataSource';
import { Range } from '@int/geotoolkit/util/Range';
import { Events } from '@int/geotoolkit/data/Events';
import type { DataTable } from '@int/geotoolkit/data/DataTable';
import type { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
/**
 * Define a set of tables to make requests, manage allocated memory,
 * merge received data samples
 * <p>
 * Data source can contain several data tables with different data ranges. Each table has a virtual
 * range, which usually contains a full data range on server. If method fetch is called then data set verifies
 * if data already exists. If data does not exist then it makes request to retrieve a data range. If data set receives
 * a new data it merges existing data table with new data and keeps a valid range. if data is not received then it
 * marks invalid range and it can be updated the next time. In the same time data set tracks allocated memory and deallocate
 * automatically old ranges.
 * </p>
 *
 * @example
 * // How to provide data
 * import {Events} from '@int/geotoolkit/data/Events';
 * import {Range} from '@int/geotoolkit/util/Range';
 * ...
 * dataset.on(Events.DataFetching, (event, sender, args) => {
 *   const data = [[500, 600], [0.5, 0.7], [100, 200]];
 *   args['callback'](null, [data]);
 * });
 * dataset.fetch(new Range(1000, 2000), 5);
 * @example
 * // How to provide data with limits
 * dataset.on(Events.DataFetching, (event, sender, args) => {
 *   const data = [[500, 600], [0.5, 0.7], [100, 200]];
 *   args['callback'](null, { 'limits': new Range(500, 600), 'colsdata': data });
 * });
 * dataset.fetch(new Range(500, 600), 5);
 */
export declare class DataSet extends DataSource {
    constructor(options?: DataSet.Options);
    on<E extends keyof DataSet.EventMap>(type: E, callback: (eventType: E, sender: this, args: DataSet.EventMap[E]) => void): this;
    off<E extends keyof DataSet.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DataSet.EventMap[E]) => void): this;
    notify<E extends keyof DataSet.EventMap>(type: E, source: DataSet, args?: DataSet.EventMap[E]): this;
    /**
     * Add a new data table to data set
     *
     * @param table a table to add
     * @param range a virtual range on the server
     * @param [indexColumnName] name of column used for Index data, index column must be {@link @int/geotoolkit/data/NumericalDataSeries~NumericalDataSeries}
     * @throws {Error} if table is null or range is null or table has less then one column or index column is not {@link @int/geotoolkit/data/NumericalDataSeries~NumericalDataSeries}
     * @returns this
     */
    addTable(table: DataTable, range: Range, indexColumnName?: string): this;
    /**
     * Remove table from data set
     * @param table table to be removed
     * @returns this
     */
    removeTable(table?: DataTable): this;
    /**
     * Remove table from data set by index
     * @param index index of the table to be removed
     * @throws {Error} if index is out of range
     * @returns this
     */
    removeTableAt(index: number): this;
    /**
     * Returns number of tables
     * @returns number of tables
     */
    getNumberOfTables(): number;
    /**
     * Return data table by index
     * @param index index of table
     * @throws {Error} if index is out of range
     * @returns data table
     */
    getTable(index: number): DataTable;
    /**
     * Return data range by index
     * @param index index of table
     * @throws {Error} if index is out of range
     * @returns data table
     */
    getIndexRange(index: number): Range;
    /**
     * Sets data range by index
     * @param index index of table
     * @param range a virtual range on the server
     * @throws {Error} if index is out of range
     * @returns this
     */
    setIndexRange(index: number, range: Range): this;
    /**
     * Invalid a data range of the specified table
     * @param index index of table
     * @param [range] range to invalidate
     * @param [clearData] clear rows of data table
     * @throws {Error} if index is out of range
     * @returns this
     */
    invalidateTableRange(index: number, range?: Range, clearData?: boolean): this;
    /**
     * Invalid a data range of all tables
     * @param [range] range to invalidate
     * @param [clearData] clear rows of data table
     */
    invalidateRange(range?: Range, clearData?: boolean): void;
    /**
     * Gets index column for the specified table
     * @param index index of table
     * @throws {Error} if index is out of range
     */
    getIndexColumn(index: number): AbstractDataSeries;
    /**
     * Return a union data range by all tables
     */
    getFullIndexRange(): Range;
    /**
     * Enable / disable decimation
     * @param enabled enable decimation
     * @returns this
     */
    enableDecimation(enabled: boolean): this;
    /**
     * Returns status if decimation is enabled
     */
    isDecimationEnabled(): boolean;
    /**
     * Fetch data for all tables from the source. This method can modify existing data
     *
     * @param limits data range to fetch
     * @param scale current scale factor
     * @returns this
     */
    fetch(limits: Range, scale: number): this;
    /**
     * Fetch data table from the source. This method can modify existing data
     *
     * @param index index of the table
     * @param limits data range to fetch
     * @param scale current scale factor
     * @throws {Error} if index is out of range
     * @returns this
     */
    fetchTable(index: number, limits: Range, scale: number): this;
    /**
     * Clear the current data
     * @param [limits] limits that has been released
     * @returns this
     */
    clearAllTables(limits?: Range): this;
    /**
     * Fetch data range.
     * @param tables an array of updating tables
     * @param limits limits
     * @param scale scale
     * @param callback callback function to return a result of query
     */
    protected fetchDataRange(tables: DataTable[], limits: Range, scale: number, callback: DataSet.FetchCallback): void;
    /**
     * Dispose.
     */
    dispose(): void;
    needIncludeRequestRimits(): boolean;
}
export declare namespace DataSet {
    /**
     * parameters
     */
    type Options = {
        /**
         * auto update interval in ms
         */
        autoupdateinterval?: number;
        /**
         * number of parallel requests
         */
        numberofparallelrequests?: number;
        /**
         * extend of requested range
         */
        requestwindowmultiplier?: number;
        /**
         * maximum memory for all data table in Mb
         */
        maxmemory?: number;
        /**
         * support decimation with requests
         */
        decimation?: boolean;
        /**
         * clear requested data range in the tables before making fetch and scale is changed. If it is false then
         * range will be clean before making request overwise it is cleaned then new data is arrived. This option works only if decimation is enabled.
         */
        cleartableonscale?: boolean;
        /**
         * include requested limits as a valid instead of
         * returned main index limits if limits is not specified
         */
        includerequestlimits?: boolean;
    };
    /**
     * received data
     */
    type ReceivedData = {
        /**
         * valid limits
         */
        limits?: Range;
        /**
         * columnsArray array of columns
         */
        colsdata?: any;
    };
    /**
     * Data fetch callback
     */
    type FetchCallback = (err: Error, receivedData: any[] | ReceivedData) => void;
    type EventMap = DataSource.EventMap & {
        [Events.DataLoaded]: void;
        [Events.DataFetching]: {
            limits: Range;
            scale: number;
            tables: DataTable[];
            callback: FetchCallback;
        };
    };
}
