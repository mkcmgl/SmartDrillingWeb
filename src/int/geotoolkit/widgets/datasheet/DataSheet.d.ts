/**
 * @module geotoolkit/widgets/datasheet/DataSheet
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import { Rect } from '@int/geotoolkit/util/Rect';
import { DataTable } from '@int/geotoolkit/data/DataTable';
import { Group } from '@int/geotoolkit/scene/Group';
import { WrapMode } from '@int/geotoolkit/widgets/datasheet/WrapMode';
import { DataSheetSelection } from '@int/geotoolkit/widgets/tools/DataSheetSelection';
import { Cell } from '@int/geotoolkit/widgets/datasheet/Cell';
import { MergedCell } from '@int/geotoolkit/widgets/datasheet/MergedCell';
import { Row } from '@int/geotoolkit/widgets/datasheet/Row';
import { Column } from '@int/geotoolkit/widgets/datasheet/Column';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Splitter } from '@int/geotoolkit/controls/tools/tableview/Splitter';
import { Highlight } from '@int/geotoolkit/controls/tools/tableview/Highlight';
import type { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { ColumnHandler } from '@int/geotoolkit/controls/tools/tableview/ColumnHandler';
import type { RowHandler } from '@int/geotoolkit/controls/tools/tableview/RowHandler';
import type { HeaderHandler } from '@int/geotoolkit/controls/tools/tableview/HeaderHandler';
import type { Selection } from '@int/geotoolkit/controls/tools/Selection';
import type { Panning } from '@int/geotoolkit/controls/tools/Panning';
import type { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
/**
 * Validation preset
 * @readonly
 * @enum
 */
export declare enum ValidationPreset {
    /**
     * Default validator name to verify if cell content is a number
     */
    Number = "number",
    /**
     * Default validator name to allow all content type
     */
    All = "all"
}
/**
 * DataSheet
 * DataSheet widget is similar with TableView widget but with features allow user to have more control of cells content and styles
 * User can also edit cell content like Excel sheet
 */
export declare class DataSheet extends BaseWidget {
    getToolByName<T extends keyof DataSheet.Tools>(toolName: T): DataSheet.Tools[T];
    /**
     * Create data sheet
     * @param [options] Options for datasheet
     */
    constructor(options?: DataSheet.Options);
    on<E extends keyof DataSheet.EventMap>(type: E, callback: (eventType: E, sender: this, args: DataSheet.EventMap[E]) => void): this;
    off<E extends keyof DataSheet.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: DataSheet.EventMap[E]) => void): this;
    notify<E extends keyof DataSheet.EventMap>(type: E, source: DataSheet, args?: DataSheet.EventMap[E]): this;
    /**
     * Get current content data of the table
     * @returns data
     */
    getDataSet(): string[][] | number[][];
    /**
     * Set number of rows
     * @param rows The number of rows
     * @returns this
     */
    setNumberOfRows(rows: number): this;
    /**
     * Set number of columns
     * @param columns The number of columns
     * @returns this
     */
    setNumberOfColumns(columns: number): this;
    /**
     * Get number of rows
     * @returns Number of rows
     */
    getNumberOfRows(): number;
    /**
     * Get number of columns
     * @returns Number of columns
     */
    getNumberOfColumns(): number;
    /**
     * Set active cell
     * @param row Row index
     * @param column Column index
     * @param editCell True to also set cell to edit mode, false otherwise
     * @returns this
     */
    setActiveCell(row: number | null, column?: number, editCell?: boolean): this;
    /**
     * Get active cell
     * @returns Active cell
     */
    getActiveCell(): Cell;
    /**
     * Get cell
     * @param row Row index
     * @param column Column index
     * @returns Cell
     */
    getCell(row: number, column: number): Cell | null;
    /**
     * Get DataSheet visible model limits
     * @returns DataSheet visible model limits
     */
    getDataSheetVisibleModelLimits(): Rect;
    /**
     * Get DataSheet limits
     * @returns DataSheet model limits
     */
    getDataSheetLimits(): Rect;
    /**
     * Set columns width
     * @param columnWidth Array of column width
     * @returns this
     */
    setColumnsWidth(columnWidth: number[]): this;
    /**
     * Set rows height
     * @param rowHeight Array of row height
     * @returns this
     */
    setRowsHeight(rowHeight: number[]): this;
    /**
     * Get data of a specific column
     * @param column Column index of table
     * @returns Data of column
     */
    getColumnData(column: number): (string | number)[];
    /**
     * Get data of a specific row
     * @param row row index of table
     * @returns Data of row
     */
    getRowData(row: number): string[] | number[];
    /**
     * Get a specific column
     * @param column Column index of table
     * @returns Column
     */
    getColumn(column: number): Column;
    /**
     * Get a specific row
     * @param row row index of table
     * @returns Row
     */
    getRow(row: number): Row;
    /**
     * Hide columns
     * @param columns Array of column indices to hide
     * @returns this
     */
    hideColumns(columns: number[]): this;
    /**
     * Hide rows
     * @param rows Array of row indices to hide
     * @returns this
     */
    hideRows(rows: number[]): this;
    /**
     * Unhide all rows
     * @returns this
     */
    unhideAllRows(): this;
    /**
     * Unhide all columns
     * @returns this
     */
    unhideAllColumns(): this;
    /**
     * Unhide rows
     * @param rows Array of row indices
     * @returns this
     */
    unhideRows(rows: number[]): this;
    /**
     * Unhide columns
     * @param columns Array of column indices
     * @returns this
     */
    unhideColumns(columns: number[]): this;
    /**
     * Get highlighted column
     * @returns Column index
     */
    getHighlightedColumn(): number;
    /**
     * Get highlighted row
     * @returns Row index
     */
    getHighlightedRow(): number;
    /**
     * Set table background
     * @param fillStyle New table fill style
     * @returns this
     */
    setTableBackground(fillStyle: FillStyle | string): this;
    /**
     * Set content to be editable
     * @param editable True to set table content to be editable, false otherwise
     * @returns this
     */
    setContentEditable(editable: boolean): this;
    /**
     * Merge cells
     * @param firstCell First cell of merged rectangle
     * @param lastCell Last cell of merged rectangle
     * @returns Merged cell
     */
    mergeCells(firstCell: Cell, lastCell: Cell): MergedCell | null;
    /**
     * Unmerge cells
     * @param cell Any cell of merged rectangle
     * @returns this
     */
    unmergeCells(cell: Cell): this;
    /**
     * Add a new row at the end of DataSheet
     * @param rowData List of data for each cell of the new row, any missing cell data will be set to empty string by default
     * @returns this
     */
    addRow(rowData: string[]): this;
    /**
     * Remove a row
     * @param index Row index to remove
     * @returns this
     */
    removeRow(index: number): this;
    /**
     * Remove a column
     * @param index Column index to remove
     * @returns this
     */
    removeColumn(index: number): this;
    /**
     * Insert a new row at a specified index in DataSheet
     * @param index Row index
     * @param rowData List of data for each cell of the new row, any missing cell data will be set to empty string by default
     * @param [rowTitle] Title of new row
     * @returns this
     */
    insertRow(index: number, rowData: string[], rowTitle?: string): this;
    /**
     * Add a new column at the end of DataSheet
     * @param columnData List of data for each cell of the new column, any missing cell data will be set to empty string by default
     * @returns this
     */
    addColumn(columnData: string[]): this;
    /**
     * Insert a new column at a specified index in DataSheet
     * @param index Column index
     * @param columnData List of data for each cell of the new column, any missing cell data will be set to empty string by default
     * @param [columnTitle] Title of new column
     * @returns this
     */
    insertColumn(index: number, columnData: string[], columnTitle?: string): this;
}
export declare namespace DataSheet {
    /**
     * Options for datasheet
     */
    type Options = BaseWidget.Options & WidgetOptions & {
        data?: string[][] | number[][] | DataTable;
    };
    type WidgetOptions = {
        /**
         * Model limits for DataSheet
         */
        model?: Group;
        /**
         * True to let DataSheet decides table size if the actual size is smaller than the spcified size, the size will be decided base on supplied data (if defined) or number of rows and columns (if data is not supplied)
         */
        autotablesize?: boolean;
        /**
         * Title of index column or row titles column
         */
        indextitle?: string;
        /**
         * Minimum row height
         */
        minrowheight?: number;
        /**
         * Minimum column width
         */
        mincolumnwidth?: number;
        /**
         * Header or column titles height
         */
        headerheight?: number;
        /**
         * Index or row titles column
         */
        indexwidth?: number;
        /**
         * value to set index column visibility
         */
        indexvisible?: boolean;
        /**
         * value to set header row visibility
         */
        headervisible?: boolean;
        indextitlefillstyle?: FillStyle.Type;
        /**
         * True to highlight row when hover, false otherwise
         */
        highlightrowonhover?: boolean;
        /**
         * horizontal scroll bar visible or scrollbar floating mode
         */
        horizontalscroll?: boolean | 'floating';
        /**
         * vertical scroll bar visible or scrollbar floating mode
         */
        verticalscroll?: boolean | 'floating';
        /**
         * Number of rows, will be ignored if autotablesize is True
         */
        rows?: number;
        /**
         * Number of columns, will be ignored if autotablesize is True
         */
        cols?: number;
        /**
         * Settings for index or row titles column
         */
        index?: {
            /**
             * Text style for index column
             */
            textstyle?: TextStyle.Options | TextStyle;
            gridstyle?: LineStyle.Type;
            /**
             * Fill style of a row in index column when it is set to active
             */
            activerowfillstyle?: FillStyle.Type;
            /**
             * Array of row titles
             */
            indexdata?: string[];
            /**
             * Fill style of even row in index column
             */
            evenfillstyle?: FillStyle.Type;
            /**
             * Fill style of odd row in index column
             */
            oddfillstyle?: FillStyle.Type;
        };
        /**
         * Settings for header or column titles row
         */
        header?: {
            /**
             * Text style for header row
             */
            textstyle?: TextStyle.Options | TextStyle;
            gridstyle?: LineStyle.Type;
            /**
             * Fill style of a column in header row when it is set to active
             */
            highlightcolumnfillstyle?: FillStyle.Type;
            /**
             * Array of column titles
             */
            headerdata?: string[];
            /**
             * Fill style of even column in header row
             */
            evenfillstyle?: FillStyle.Type;
            /**
             * Fill style of odd column in header row
             */
            oddfillstyle?: FillStyle.Type;
        };
        /**
         * Settings for content of DataSheet
         */
        content?: {
            /**
             * True to set cell content to be editable, false otherwise
             */
            editable?: boolean;
            /**
             * Validation function to validate cell content, validator must be in the form of function (cellContent) and must return a boolean, return true means cell text content is valid, false otherwise, cellContent parameter is cell content to be validated of type string
             */
            validator?: Cell.ValidatorPredicate | ValidationPreset;
            /**
             * Grid line style of table content
             */
            gridstyle?: LineStyle.Type;
            /**
             * Text style for cell text
             */
            textstyle?: TextStyle.Options | TextStyle;
            /**
             * Wrap mode for DataSheet cell
             */
            textsizemode?: string | WrapMode;
            /**
             * Fill style for even column in DataSheet content
             */
            evenfillstylecolumn?: FillStyle.Type;
            /**
             * Fill style for odd column in DataSheet content
             */
            oddfillstylecolumn?: FillStyle.Type;
            /**
             * Fill style of a column in DataSheet content when it is set to active
             */
            highlightcolumnfillstyle?: FillStyle.Type;
            /**
             * Fill style of even row in DataSheet content
             */
            evenfillstyle?: FillStyle.Type;
            /**
             * Fill style of odd row in DataSheet content
             */
            oddfillstyle?: FillStyle.Type;
            /**
             * Fill style of a row in DataSheet content when it is set to active
             */
            activerowfillstyle?: FillStyle.Type;
            /**
             * Line style of cell when it is set to active
             */
            activecelllinestyle?: LineStyle.Type;
        };
    };
    type Tools = {
        'TableViewSplitter': Splitter;
        'TableViewCompositeTool': CompositeTool;
        'TableViewColumnHandler': ColumnHandler;
        'TableViewRowHandler': RowHandler;
        'TableViewHeaderHandler': HeaderHandler;
        'TableViewSelection': Selection;
        'TableViewPanning': Panning;
        'TableViewHighlight': Highlight;
        'DataSheetSelection': DataSheetSelection;
        'Highlight': Highlight;
    } & AnnotatedWidget.Tools;
    type EventMap = Group.EventMap & DataSheetSelection.EventMap;
}
