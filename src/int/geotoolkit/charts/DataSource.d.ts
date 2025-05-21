import type { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { DataSeries } from '@int/geotoolkit/data/DataSeries';
import { DataEvents as ChartsDataEvents } from '@int/geotoolkit/charts/DataEvents';
import { INumericalDataSeries } from '@int/geotoolkit/data/INumericalDataSeries';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import { SelectionSeries } from '@int/geotoolkit/charts/SelectionSeries';
/**
 * DataSeries type to be returned
 * @enum
 * @readonly
 */
export declare enum DataType {
    /**
     * NumericalDataSeries with default values
     */
    Numerical = "numerical",
    /**
     * NumericalDataSeries with log values
     */
    Logarithmic = "logarithmic"
}
/**
 * Define a generic chart data to be used for any chart type.
 * @example
 * import {DataTable} from '@int/geotoolkit/data/DataTable';
 * import {DataSource} from '@int/geotoolkit/charts/DataSource';
 *
 * const table1 = new DataTable({
 *     'name': 'table-1', // unique name
 *     'cols': […] // table data series
 * });
 * const data = new DataSource();
 * // add new tables:
 * data.add(table1);
 * data.add(table2);
 */
export declare class DataSource extends EventDispatcher {
    /**
     * Creates data source
     * @param [data] options
     */
    constructor(data?: DataSource.Options);
    on<E extends keyof DataSource.EventMap>(type: E, callback: (eventType: E, sender: this, args: DataSource.EventMap[E]) => void): this;
    off<E extends keyof DataSource.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DataSource.EventMap[E]) => void): this;
    notify<E extends keyof DataSource.EventMap>(type: E, source: DataSource, args?: DataSource.EventMap[E]): this;
    /**
     * Adds new selection series to the table
     * @param selection series to be added
     * @param name identifier for the added series
     * @param tableId table identifier to store added selection series
     * @throws Error if series already exists
     */
    addSelection(selection: SelectionSeries, name?: string, tableId?: string): this;
    /**
     * Adds new selection series to the table
     * @param selection series to be added
     * @param name identifier for the added series
     * @param tableId table identifier to store added selection series
     */
    setSelection(selection: SelectionSeries, name?: string, tableId?: string): this;
    /**
     * Removes selection series
     * @param name identifier for the series
     * @param tableId table identifier
     */
    removeSelection(name?: string, tableId?: string): this;
    /**
     * Returns selection series for shared selection state(s)
     * @param name selection series identifier
     * @param tableId selection series table
     */
    getSelection(name?: string, tableId?: string): SelectionSeries;
    /**
     * Adds data table to data source using its name as identifier
     * @param data data table to add
     * @throws Error if table with this identifier already exists
     */
    add(data: AbstractDataTable): this;
    /**
     * Removes data table from the source
     * @param data data table or table id to remove
     */
    remove(data: AbstractDataTable | string): this;
    /**
     * Adds data array to the source, automatically generating identifier for it to be used
     * @param data data array to save
     * @param tableId table identifier for the data table (if needed)
     */
    addArray(data: string[] | number[] | Date[], tableId?: string): string;
    /**
     * Returns true if provided series name was generated automatically by data source, false otherwise
     * @param name series name
     * @param tableId table identifier (if exists)
     */
    isGeneratedName(name: string, tableId?: string): boolean;
    /**
     * Returns data series by series identifier
     * @param id series identifier (use ':' separator to add table identifier)
     * @param [returnType] data type for the returning series
     */
    getDataSeries(id: string | string[] | number[], returnType: DataType.Numerical | DataType.Logarithmic | string): INumericalDataSeries & AbstractDataSeries;
    /**
     * Returns data series by series identifier
     * @param id series identifier (use ':' separator to add table identifier)
     */
    getDataSeries(id: string | string[] | number[]): DataSeries;
    /**
     * Returns data table by identifier
     * @param tableId table identifier
     */
    getDataTable(tableId?: string): AbstractDataTable;
    /**
     * Removes data table(s) from the storage
     */
    clear(tableId?: string): this;
    /**
     * Returns array of data series identifiers stored in the table.
     */
    getDataSeriesIds(tableId?: string): string[];
}
declare type TableSeriesMap = {
    tableid: string;
    series: (string | number)[];
};
declare type IndexRangeType = {
    from: number;
    count: number;
};
export declare namespace DataSource {
    type Options = AbstractDataTable;
    type TableSeriesIndexRange = TableSeriesMap & IndexRangeType;
    type EventMap = EventDispatcher.EventMap & {
        [ChartsDataEvents.SeriesAdded]: TableSeriesMap;
        [ChartsDataEvents.SeriesRemoved]: TableSeriesMap;
        [ChartsDataEvents.ValuesAdding]: TableSeriesIndexRange;
        [ChartsDataEvents.ValuesAdded]: TableSeriesIndexRange;
        [ChartsDataEvents.ValuesRemoving]: TableSeriesIndexRange;
        [ChartsDataEvents.ValuesRemoved]: TableSeriesIndexRange;
        [ChartsDataEvents.Updated]: void;
    };
}
export {};
