import type { DataTable } from '@int/geotoolkit/data/DataTable';
import type { TableView } from '@int/geotoolkit/controls/shapes/tableview/TableView';
import { DataProvider } from '@int/geotoolkit/controls/shapes/tableview/DataProvider';
/**
 * <p>
 *     DataTableAdapter allows use of DataTables with the tableView Widget.
 * </p>
 */
export declare class DataTableAdapter extends DataProvider {
    /**
     * @param options DataTableAdapter Options
     */
    constructor(options: DataTableAdapter.Options);
    getData(): TableView.Data;
    /**
     * Gets a data table associated with this adapter
     */
    getDataTable(): DataTable | null;
    /**
     * Gets sorted column number.
     */
    getSortedByColumn(): {
        column: number;
        reverse: boolean;
    };
    /**
     * Gives number of rows
     * @returns Number of Rows
     */
    getRowsCount(): number;
    /**
     * Gives number of columns
     * @returns number of column
     */
    getColumnsCount(): number;
    /**
     * Setting Content prepare
     * @param fromRow Row-number
     * @param toRow Row-number
     */
    prepareContent(fromRow: number, toRow: number): void;
    /**
     * Returns the cell values of Table View Widget
     * @param column column-number
     * @param row row-number
     * @returns cell-value
     */
    getContentData(column: number, row: number): any;
    /**
     * Prepare Index Run before rendering table
     * @param fromRow fromrow
     * @param toRow toRow
     */
    prepareIndex(fromRow: number, toRow: number): void;
    /**
     * Returns header data of Table View Widget
     * @param column column-number
     * @returns column header
     */
    getHeaderData(column: number): string;
    /**
     * Returns Header style
     * @param column column number
     * @param headerStyle headerstyle
     * @returns Header style
     */
    getHeaderFormat(column: number, headerStyle: TableView.CellStyle): TableView.CellStyle;
    /**
     * Sorting by column in TableViewWidget using specified comparator function.
     * @param column column number
     * @param comparator comparator function
     */
    sortByColumn(column: number, comparator: DataTable.ComparatorCallback): void;
    /**
     * Filtering in TableViewWidget by value specified by filter. By default, this method will return all column - cellvalues containing value to filter.
     * External function for filtering can also be provided.
     * @param column column-number to filter column-specific data
     * @param filterValue filtering term
     *
     * @example
     * // Filtering term can be string or function.
     * // For using function, which filters value containing 'a'.
     * const filteringFunction = function (index , value){
     *    return value.toString().indexOf('a') !== -1;
     * }
     * @returns this
     */
    filter(column: number, filterValue: string | Function): this;
}
export declare namespace DataTableAdapter {
    /**
     * DataTableAdapter Options
     */
    type Options = {
        /**
         * dataTable
         */
        datatable: DataTable;
        /**
         * Color of arrow if Sorting tool is attached.
         */
        sortingarrowoptions?: string | {
            /**
             * fillColor of up-arrow.
             */
            uparrowfillcolor?: string;
            /**
             * fillColor of down-arrow.
             */
            downarrowfillcolor?: string;
            /**
             * lineColor of up-arrow.
             */
            uparrowlinecolor?: string;
            /**
             * lineColor of down-arrow.
             */
            downarrowlinecolor?: string;
        };
    };
}
