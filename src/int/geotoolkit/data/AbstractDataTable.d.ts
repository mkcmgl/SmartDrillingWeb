/**
 * @module geotoolkit/data/AbstractDataTable
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
import { IDataTable } from '@int/geotoolkit/data/IDataTable';
/**
 * Define an abstract class for data table representation
 */
export declare abstract class AbstractDataTable extends EventDispatcher implements IDataTable {
    /**
     * Returns the number of columns in the data table.
     * @returns number of columns
     */
    abstract getNumberOfColumns(): number;
    /**
     * Returns number of rows.
     */
    abstract getNumberOfRows(): number;
    /**
     * Returns the column at the specified index.
     * @param columnIndex column index
     */
    abstract getColumn(columnIndex: number): AbstractDataSeries;
    /**
     * Returns the index of specified column.
     * @param column column
     * @returns index
     */
    abstract indexOfColumn(column: AbstractDataSeries): number;
    /**
     * Returns column by specified identifier. If multiple columns have the same identifier, the first one will be returned.
     * @param id identifier of the column
     * @returns a column
     */
    abstract getColumnById(id: number | string): AbstractDataSeries;
    /**
     * Returns column by specified name. If multiple columns have the same name, the first one will be returned.
     * @param name name of the column
     * @returns a column
     */
    abstract getColumnByName(name: string): AbstractDataSeries;
    /**
     * Return the value of a cell.
     * @param rowIndex index of the row. It should be a number greater than or equal to zero, and less than
     * the number of rows as returned by the getNumberOfRows() method.
     * @param columnIndex index of the column. should be a number greater than or equal to zero, and less
     * than the number of columns as returned by the getNumberOfColumns() method.
     */
    abstract getValue(rowIndex: number, columnIndex: number): any;
    /**
     * Returns the map of all meta data of the data table. This method returns the reference to the meta data.
     */
    abstract getMetaData(): Record<string, any>;
    /**
     * Returns the map of all properties of specified column.
     * @param columnIndex index of the column
     */
    getColumnProperties(columnIndex: number): Record<string, any>;
    /**
     * Returns table name
     */
    getName(): string;
    /**
     * Sets name of the table
     * @param name new table name
     */
    setName(name: string): this;
}
