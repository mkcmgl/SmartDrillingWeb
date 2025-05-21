import { CalculatedDataSeries } from '@int/geotoolkit/data/CalculatedDataSeries';
import { DataSeries } from '@int/geotoolkit/data/DataSeries';
import { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import { Events as DataEvents } from '@int/geotoolkit/data/Events';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
import type { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
/**
 * DataTable events.
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * ColumnsAdding
     */
    ColumnsAdding = "ColumnsAdding",
    /**
     * ColumnsAdded
     */
    ColumnsAdded = "ColumnsAdded",
    /**
     * ColumnsRemoving
     */
    ColumnsRemoving = "ColumnsRemoving",
    /**
     * ColumnsRemoved
     */
    ColumnsRemoved = "ColumnsRemoved",
    /**
     * ColumnsSet
     */
    ColumnsSet = "ColumnsSet",
    /**
     * RowsAdding
     */
    RowsAdding = "RowsAdding",
    /**
     * RowsAdded
     */
    RowsAdded = "RowsAdded",
    /**
     * RowsRemoving
     */
    RowsRemoving = "RowsRemoving",
    /**
     * RowsRemoved
     */
    RowsRemoved = "RowsRemoved",
    /**
     * ValuesSet
     */
    ValuesSet = "ValuesSet",
    /**
     * Disposing
     */
    Disposing = "Disposing"
}
/**
 * Define a data table as a collection of data series defined as columns in the
 * table. This code is inspired by google table.
 * <p>
 * The data table can be read only, which means that each column is immutable,
 * but it is still possible to add or remove columns.
 * </p>
 *
 * @example
 * const datatable1 = new DataTable({
 *     cols: [
 *         {name: 'col1', type: 'string'},
 *         {name: 'col2', type: 'number'}
 *     ]
 * });
 * const datatable2 = new DataTable<number>({
 *     cols: [
 *         {name: 'col1', type: 'number'},
 *         {name: 'col2', type: 'number'}
 *     ]
 * });
 */
export declare class DataTable extends AbstractDataTable {
    constructor(data?: DataTable.Options);
    on<E extends keyof DataTable.EventMap>(type: E, callback: (eventType: E, sender: this, args: DataTable.EventMap[E]) => void): this;
    off<E extends keyof DataTable.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DataTable.EventMap[E]) => void): this;
    notify<E extends keyof DataTable.EventMap>(type: E, source: DataTable, args?: DataTable.EventMap[E]): this;
    /**
     * Returns a clone of the data table.
     * @param [copyData] copy data
     * @returns clone
     */
    clone(copyData?: boolean): DataTable;
    /**
     * Adds a new column to the data table.
     * @param column a {@link @int/geotoolkit/data/DataSeries~DataSeries} object or a object containing descriptions.
     * @returns this
     * @example
     * // creating common column
     * datatable.addColumn({ 'name': 'col4', 'type': 'number', 'data': [1, 2, 3, 4] });
     * @example
     * // creating calculated column
     * const table = new DataTable<number>({'cols': [
     *      {'name': 'alfa', 'type': 'number', 'data': [1, 4, 6, 7]},
     *      {'name': 'beta', 'type': 'number', 'data': [0, 1, 2, 3]}
     * ]});
     *
     * table.addColumn( {
     *      'name': 'calculated',
     *      'sources': [table.getColumnByName('alfa'), table.getColumnByName('beta')],
     *      'formula': '2 * alfa + beta'
     * });
     */
    addColumn(column: DataTable.Column): this;
    /**
     * Returns column by index
     * @param columnIndex index of column
     * @returns DataSeries
     */
    getColumn(columnIndex: number): DataSeries;
    /**
     * Removes column(s) at the specified index.
     * @param columnIndex column index to remove
     * @param [numberOfColumns] number of columns to remove
     * @returns this
     */
    removeColumns(columnIndex: number, numberOfColumns?: number): this;
    /**
     * Inserts a column at specified index.
     * @param columnIndex column index to insert
     * @param column column
     * @returns this
     */
    insertColumn(columnIndex: number, column: DataTable.Column): this;
    indexOfColumn(column: DataSeries): number;
    /**
     * Fills data table with specified array of column data.
     * @param columnsArray array of values by column
     * @returns this
     * @example
     * // fill table with two columns
     * datatable.fillTable([[10, 20, 30, 50], [30, 40, 30, 50]]);
     */
    fillTable(columnsArray: any[]): this;
    /**
     * Adds a new row to the data table.
     * @param cellArray array of cells
     * @param [ignoreMissingValue] ignore missing value
     * @returns this
     * @example
     * // add a new row to a four-column data table
     * datatable.addRow([10, 20, 30, 50]);
     */
    addRow(cellArray: any[], ignoreMissingValue?: boolean): this;
    /**
     * Adds new rows to the data table. This method can be called to create new empty rows, or with data used to populate the rows
     * @param rowsArray rows data or a number of empty rows to add
     * @param [ignoreMissingValue] ignore missing value
     * @returns this
     * @example
     * // add two rows to a three-column data table
     * datatable.addRows([[10, 20, 30], [50, 70, 100]]);
     */
    addRows(rowsArray: any[] | number, ignoreMissingValue?: boolean): this;
    /**
     * Insert a row at the specified row index
     * @param rowIndex index number where to insert the new row
     * @param cellArray array of cells
     * @returns this
     * @example
     * // insert a row at index 10 to a four-column data table
     * datatable.insertRow(10, [10, 20, 30, 50]);
     */
    insertRow(rowIndex: number, cellArray: any[]): this;
    /**
     * Returns an array of values at specified row index.
     * @param rowIndex index of the row. It should be a number greater than or equal to zero, and less than
     * the number of rows as returned by the getNumberOfRows() method.
     * @param [cells] optional array to fill values
     * @returns array of values
     */
    getRow(rowIndex: number, cells?: any[]): any[];
    getValue(rowIndex: number, columnIndex: number): any;
    /**
     * Sets the value of the cell at given row and column index.
     * @param rowIndex index of the row. It should be a number greater than or equal to zero, and less than
     * the number of rows as returned by the getNumberOfRows() method.
     * @param columnIndex index of the column. should be a number greater than or equal to zero, and less
     * than the number of columns as returned by the getNumberOfColumns() method.
     * @param [value] a value to be set to the cell.
     * @returns this
     */
    setValue(rowIndex: number, columnIndex: number, value?: any): this;
    /**
     * Sets an array of values at specified column index.
     * @param columnIndex index of the column
     * @param cellArray array of values to set
     * @returns this
     */
    setColumnValues(columnIndex: number, cellArray: any[]): this;
    getNumberOfColumns(): number;
    getNumberOfRows(): number;
    /**
     * Removes row(s) from all columns in the data table.
     * @param rowIndex the index number where to start removing the rows
     * @param [numberOfRows] the amount of rows to remove
     * @returns this
     */
    removeRows(rowIndex: number, numberOfRows?: number): this;
    /**
     * Clears all cells of the data table.
     * @returns this
     */
    clear(): this;
    getColumnById(id: number | string): DataSeries;
    getColumnByName(name: string): DataSeries;
    /**
     * Sets properties of specified column.
     * @param columnIndex index of the column
     * @param properties a map of properties for the specified column.
     * All properties will be merged with existing ones.
     * @returns this
     */
    setColumnProperties(columnIndex: number, properties: Record<string, any>): this;
    getMetaData(): Record<string, any>;
    /**
     * Sets the map of all meta data of the data table.
     * @param meta meta data
     * @returns this
     */
    setMetaData(meta: Record<string, any>): this;
    /**
     * Sorting of DataTable
     * @param [column] Identifier of Column
     * @param [comparator] comparator function that return positive, negative and zero based on condition.
     * @returns this
     */
    sort(column?: number, comparator?: DataTable.ComparatorCallback): this;
    /**
     * Query data item and child items by different conditions
     * @returns query object which has methods 'where' tp specify conditions, 'select' to run query,
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
     * table.query()
     *      .where( (item) => return item.getUri() === 'itemuri')
     *      .select(function(item) {
     *            founditem = item;
     *       });
     * @example
     * // Select by expression
     * table.query()
     *      .where('item => uri(item) == "itemuri"')
     *      .select((item) => {
     *          founditem = item;
     *      });
     */
    query(): QueryBuilder;
}
export declare namespace DataTable {
    /**
     * parameters
     */
    type Options = {
        /**
         * a map of meta information properties
         */
        meta?: Record<string, any>;
        /**
         * @deprecated since 4.0. Use 'columnfactory' instead
         * a custom factory to create a new data series from object
         */
        columnFactory?: (x: any) => DataSeries;
        /**
         * a custom factory to create a new data series from object
         */
        columnfactory?: (x: any) => DataSeries;
        /**
         * an array of series to represents columns. All columns must have the same number of rows
         */
        cols?: (DataSeries | DataSeries.Options)[];
        /**
         * an array of rows or a number of empty rows to add
         */
        rowsdata?: any[][] | number;
        /**
         * an array of columns data to add. Will be ignored if rowsdata is not null
         */
        colsdata?: any[][];
        /**
         * data table name
         */
        name?: string;
    };
    /**
     * a {@link @int/geotoolkit/data/DataSeries~DataSeries} object or a object containing descriptions.
     */
    type Column = DataSeries | {
        /**
         * unique id of the data series
         */
        id?: number | string;
        /**
         * name of the data series
         */
        name?: string;
        /**
         * a JavaScript type of the data series
         */
        type?: string;
        /**
         * unit of the data series
         */
        unit?: string | AbstractUnit;
        /**
         * an array of data
         */
        data?: any[];
        /**
         * callback or string to calculate values of the series, used for {@link @int/geotoolkit/data/CalculatedDataSeries~CalculatedDataSeries}
         */
        formula?: CalculatedDataSeries.FormulaCallback | string;
        /**
         * set of sources to be used by function, used for {@link @int/geotoolkit/data/CalculatedDataSeries~CalculatedDataSeries}
         */
        sources?: AbstractDataSeries[];
    };
    /**
     * Defines comparator function that returns positive, negative and zero based on condition
     */
    type ComparatorCallback<T = any> = (a: T, b: T) => number;
    type EventMap = EventDispatcher.EventMap & {
        [Events.ColumnsAdding]: void;
        [Events.ColumnsRemoving]: {
            from: number;
            count: number;
        };
        [Events.ValuesSet]: number[] | void;
        [Events.RowsAdding]: {
            from: number;
            count: number;
        };
        [Events.RowsRemoving]: {
            from: number;
            count: number;
        };
        [DataEvents.Updated]: any;
        [Events.ColumnsAdded]: {
            from: number;
            count: number;
        };
        [Events.ColumnsRemoved]: {
            from: number;
            count: number;
            values: DataSeries[];
        };
        [Events.RowsAdded]: {
            from: number;
            count: number;
        };
        [Events.RowsRemoved]: {
            from: number;
            count: number;
        };
    };
}
