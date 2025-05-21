/**
 * @module geotoolkit/data/DataTableView
 */
import { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import { Events as DataTableEvents } from '@int/geotoolkit/data/DataTable';
import { DataSeriesView } from '@int/geotoolkit/data/DataSeriesView';
import type { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
import { Events as DataEvents } from '@int/geotoolkit/data/Events';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
import type { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
/**
 * DataTableView events.
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * Rebuild
     */
    Rebuild = "Rebuild"
}
/**
 * A read-only view of an underlying DataTable.
 * A DataTableView allows selection of only a subset of the columns.
 * It also allows reordering columns and duplicating columns.<br>
 * A DataTableView is a "view" of a datasource {@link @int/geotoolkit/data/DataTable~DataTable} . To add data, you will have to do so to the original {@link @int/geotoolkit/data/DataTable~DataTable}.<br>
 * Please refer to the example below for a way to create and use DataTableView.
 * @example
 * import {DataTableView} from '@int/geotoolkit/data/DataTableView';
 * import {DataTable} from '@int/geotoolkit/data/DataTable';
 * ...
 * //Create a DataTable
 * const dataTable = new DataTable({ 'cols': [
 *     {'type': 'number', 'data': indicesArray},
 *     {'type': 'number', 'data': valuesArray}
 * ]});
 * dataTable.getColumn(0).setUnit(indexunit);
 * dataTable.getColumn(1).setUnit(valueunit);
 *
 * // Create a DataTableView of the DataTable
 * const dataTableView = new DataTableView(dataTable);
 *
 * // user can modify the data in the original DataTable using the API of the DataTable
 * // addRow, addRows, removeRow, insertRow
 */
export declare class DataTableView extends AbstractDataTable {
    constructor(dataTable: AbstractDataTable);
    on<E extends keyof DataTableView.EventMap>(type: E, callback: (eventType: E, sender: this, args: DataTableView.EventMap[E]) => void): this;
    off<E extends keyof DataTableView.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DataTableView.EventMap[E]) => void): this;
    notify<E extends keyof DataTableView.EventMap>(type: E, source: DataTableView, args?: DataTableView.EventMap[E]): this;
    /**
     * Dispose data table view object.
     */
    dispose(): void;
    /**
     * Returns number of columns in the view
     * @returns number of columns in the view
     */
    getNumberOfColumns(): number;
    /**
     * Return number of rows
     * @returns number of rows
     */
    getNumberOfRows(): number;
    /**
     * Returns the columns in this view. Identical array will be returned after calling setColumns().
     */
    getViewColumns(): number[];
    /**
     * Get parent data table, which is used to create the current view
     * @returns data table
     */
    getDataTable(): AbstractDataTable;
    /**
     * Sets visible columns indexes. Any columns not specified will be hidden.
     * @param columnIndexes array of column indexes
     */
    setColumns(columnIndexes: number[]): this;
    /**
     * Return column by index
     * @param columnIndex index of the column
     * @returns a column
     */
    getColumn(columnIndex: number): DataSeriesView;
    /**
     * Return index of column
     * @param column a column
     * @returns index of th column or -1 if column is not found
     */
    indexOfColumn(column: AbstractDataSeries): number;
    /**
     * Return a cell value
     * @param rowIndex index of the row
     * @param columnIndex index of the column
     * @returns a cell value
     */
    getValue(rowIndex: number, columnIndex: number): any;
    /**
     * Return column by column id
     * @param id column id
     * @returns a column of null if column is not found
     */
    getColumnById(id: number | string): AbstractDataSeries;
    /**
     * Return column by name
     * @param name nam eof the column
     * @returns the first column with specified name or null if column is not found
     */
    getColumnByName(name: string): AbstractDataSeries;
    /**
     * Returns the map of all meta data of the data table.
     * This method returns the reference to the meta data.
     * @returns meta data
     */
    getMetaData(): Record<string, any>;
    /**
     * Query data item and child items by different conditions
     * @returns query object which has methods 'where' to specify conditions, 'select' to run query,
     * 'selectToArray' select results to array
     * Expressions syntax:
     * "item => expression", where expression:
     * - logical and arithmetic operators
     * - embedded functions:
     * name(item) - gets name of the data object
     * url(item) - gets url of the data object
     * type(item) - gets type of the data object
     * @example
     * // Select by function
     * tableView.query()
     *      .where( (item) => return item.getUri() === 'itemuri')
     *      .select((item) => {
     *            founditem = item;
     *       });
     * @example
     * // Select by expression
     * tableView.query()
     *      .where('item => uri(item) == "itemuri"')
     *      .select((item) => {
     *          founditem = item;
     *      });
     */
    query(): QueryBuilder;
}
export declare namespace DataTableView {
    type EventMap = EventDispatcher.EventMap & {
        [Events.Rebuild]: void;
        [DataTableEvents.ColumnsAdding]: void;
        [DataTableEvents.ColumnsRemoving]: {
            from: number;
            count: number;
        };
        [DataTableEvents.ValuesSet]: number[] | void;
        [DataTableEvents.RowsAdding]: void;
        [DataTableEvents.RowsRemoving]: {
            from: number;
            count: number;
        };
        [DataEvents.Updated]: any;
        [DataTableEvents.ColumnsAdded]: {
            from: number;
            count: number;
        };
        [DataTableEvents.ColumnsRemoved]: {
            from: number;
            count: number;
        };
        [DataTableEvents.RowsAdded]: {
            from: number;
            count: number;
        };
        [DataTableEvents.RowsRemoved]: {
            from: number;
            count: number;
        };
        [DataTableEvents.ColumnsSet]: void;
    };
}
