/**
 * Defines basic data table interface
 * @interface
 */
export declare abstract class IDataTable<T = any> {
    /**
     * Return the value of a cell.
     * @param rowIndex index of the row. It should be a number greater than or equal to zero, and less than
     * the number of rows as returned by the getNumberOfRows() method.
     * @param columnIndex index of the column. should be a number greater than or equal to zero, and less
     * than the number of columns as returned by the getNumberOfColumns() method.
     */
    abstract getValue(row: number, column: number): T;
    /**
     * Returns number of rows.
     */
    abstract getNumberOfRows(): number;
    /**
     * Returns the number of columns.
     */
    abstract getNumberOfColumns(): number;
    static getClassName(): string;
    getClassName(): string;
}
