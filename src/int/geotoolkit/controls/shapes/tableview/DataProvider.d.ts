import type { TableView } from '@int/geotoolkit/controls/shapes/tableview/TableView';
/**
 * Base class for TableView data provider. Override its methods in specific purposes.
 */
export declare class DataProvider {
    constructor();
    /**
     * Run once before rendering index data. This should be used to prepare index data output formatting
     * @param fromRow fromRow used to prepare index data output formatting
     * @param toRow toRow used to prepare index data output formatting
     * @returns formatted index value
     */
    prepareIndex(fromRow: number, toRow: number): string | void;
    /**
     * Return optionally formatted index value at row
     * @param row index value at row
     * @returns formatted index value
     */
    getIndexData(row: number): string;
    /**
     * Show marker at row
     * @param row index value at row
     * @returns true to show marker, false otherwise
     */
    getMarkerData(row: number): boolean;
    /**
     * Run once before rendering content data. This should be used to prepare content data output formatting.
     * @param fromRow fromRow used to prepare content data output formatting
     * @param toRow toRow used to prepare content data output formatting
     * @param fromColumn fromColumn used to prepare content data output formatting
     * @param toColumn toColumn used to prepare content data output formatting
     */
    prepareContent(fromRow: number, toRow: number, fromColumn: number, toColumn: number): string | null | void;
    /**
     * Return optionally formatted content text field at col, row
     * @param column index at the column
     * @param row index at the column
     * @returns formatted content value
     */
    getContentData(column: number, row: number): string;
    /**
     * Return header text at column
     * @param column index where the header text will be returned
     * @returns header name
     */
    getHeaderData(column: number): string;
    /**
     * Return custom cell style for table content
     * @param column Column index
     * @param row Row index
     * @param cellStyle Current cell style
     * @returns Cell style
     */
    getContentFormat(column: number, row: number, cellStyle: TableView.CellStyle): TableView.CellStyle;
    /**
     * Return custom header style for header row
     * @param column Column index
     * @param headerStyle Current header style
     * @returns Header style
     */
    getHeaderFormat(column: number, headerStyle: TableView.CellStyle): TableView.CellStyle;
    /**
     * Return custom cell style for index column
     * @param row Row index
     * @param cellStyle Current cell style
     * @returns Cell style
     */
    getIndexFormat(row: number, cellStyle: TableView.CellStyle): TableView.CellStyle;
}
