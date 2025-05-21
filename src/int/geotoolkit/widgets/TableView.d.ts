/**
 * @module geotoolkit/widgets/TableView
 */
import type { Merge } from '@int/geotoolkit/base';
import { Rect } from '@int/geotoolkit/util/Rect';
import { TableView as TableViewShape } from '@int/geotoolkit/controls/shapes/tableview/TableView';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { TableViewEvents } from '@int/geotoolkit/widgets/TableViewEvents';
import { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import { Splitter } from '@int/geotoolkit/controls/tools/tableview/Splitter';
import { ColumnHandler } from '@int/geotoolkit/controls/tools/tableview/ColumnHandler';
import { RowHandler } from '@int/geotoolkit/controls/tools/tableview/RowHandler';
import { HeaderHandler } from '@int/geotoolkit/controls/tools/tableview/HeaderHandler';
import { Selection } from '@int/geotoolkit/controls/tools/Selection';
import { Panning } from '@int/geotoolkit/controls/tools/Panning';
import { Highlight } from '@int/geotoolkit/controls/tools/tableview/Highlight';
import { InPlaceEditor } from '@int/geotoolkit/widgets/tools/InPlaceEditor';
import type { Dimension } from '@int/geotoolkit/util/Dimension';
import type { DataTableAdapter } from '@int/geotoolkit/widgets/data/DataTableAdapter';
/**
 * Header mode, automatic header resize strategies
 * @enum
 * @readonly
 */
export declare enum HeaderMode {
    /**
     * Automatically resize column width to fit header content
     */
    Auto = "auto",
    /**
     * Default, no automatic resize
     */
    Default = "default",
    /**
     * Automatically resize header height, and wrap header content to fit header within header width
     */
    Wrap = "wrap",
    /**
     * Automatically resize header height. Will split words that are larger than width
     */
    WrapSplitWords = "wrapsplitwords"
}
/**
 * A table view displays a list of items in a single column and allows users to scroll through the table. The data is either passed by a data object or a function.
 * The widget can be customized using options() in the constructor.<br>
 * Some of the default tools are available to support:
 * <ul>
 *  <li>Horizontal Scrollbar</li>
 *  <li>Vertical Scrollbar</li>
 *  <li>Panning Listener</li>
 *  <li>Tableview Highlight</li>
 *  <li>Tableview Selection</li>
 * </ul>
 * The widget can be customized using options() in the constructor. <br>
 * @example
 * import {TableView} from '@int/geotoolkit/widgets/TableView';
 * import {Dimension} from '@int/geotoolkit/util/Dimension';
 * // 1). Initialize Widget
 * const tableViewWidget = new TableView({
 *          'horizontalscroll': 'floating',
 *          'verticalscroll': 'floating',
 *          'rows': '4',
 *          'cols': '4'
 *      });
 * const data = new TableViewDataSource(rowCount, colCount);
 * const tableViewWidget = createTableViewWidget(data); // create random data. Data can be provided through either an explicit function or through dataTable
 * tableViewWidget.setData({
 *              'content': {                        // Customize the appearance of the table as needed.
 *                  'textstyle': {
 *                      'color': 'darkblue',
 *                      'alignment': 'center',
 *                      'baseLine': 'middle'
 *                  },
 *                  'evenfillstyle': 'lightblue'
 *              },
 *  });
 *
 * // 2). This example below shows how to create a TableView with only columns and without the first row index column.
 * const tableViewWidget = new TableView({...})// Set data using setData method
 * .setData({
 *   'indextitle': '', //remove title from index column
 * ....
 *   // Set table bounds in columns, rows
 *   'rows': data.getRowsCount(),
 *   'cols': data.getColumnsCount(),
 *
 *   'defaultcellsize': new Dimension(0, 30) //default width is zero
 * });
 * for(let c=0;c<data.getColumnsCount();c++)
 * tableViewWidget.setColumnsSize(c, 100); //manually apply column widths
 * @example
 * import {log} from '@int/geotoolkit/base';
 * import {Events as SelectionEvents} from '@int/geotoolkit/controls/tools/Selection';
 * // 3). This example shows a way to trigger a function when a row is selected:
 * // Setup manipulators - Panning, Highlight, Scrollbars
 * plot.getTool()
 *     .add(tableViewWidget.getTool());
 * //
 * const highlight = tableViewWidget.getToolByName("TableViewSelection");
 * highlight.on(SelectionEvents.onPick, (evt, sender, eventArgs) => {
 *    const manipulators = tableViewWidget.getToolByName("TableViewCompositeTool");
 *    const tableViewShape = tableViewWidget.getTableViewShape();
 *    const point = manipulators.pointToModel(tableViewShape, eventArgs);
 *    const cell = tableViewShape.resolveCellCoordinate(point.getX(), point.getY());
 *   log("Row number : " +cell.getY());
 *  });
 */
export declare class TableView extends AnnotatedWidget {
    getToolByName<T extends keyof TableView.Tools>(toolName: T): TableView.Tools[T];
    constructor(options?: TableView.Options);
    on<E extends keyof TableView.EventMap>(type: E, callback: (eventType: E, sender: this, args: TableView.EventMap[E]) => void): this;
    off<E extends keyof TableView.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: TableView.EventMap[E]) => void): this;
    notify<E extends keyof TableView.EventMap>(type: E, source: TableView, args?: TableView.EventMap[E]): this;
    /**
     * returns a real size of columns
     * @param [column] column index
     */
    getColumnsSize(column?: number): number;
    /**
     * Set column width
     * @param column column to set the size for, -1 for the index column
     * @param width width or size for the column
     * @returns this
     * @example
     * //To dynamically set column widths per column
     * tableViewWidget.setColumnsSize(0, 50)
     */
    setColumnsSize(column: number, width: number): this;
    /**
     * Set header mode
     * @param mode Smart column type
     * @returns this
     */
    setHeaderMode(mode: HeaderMode): this;
    /**
     * Get header mode
     * @returns Smart column type
     */
    getHeaderMode(): HeaderMode;
    /**
     * Resize all column widths to fit to visible table width
     * @param [distributeColumnsEvenly] evenly flag
     * @returns this
     */
    fitToWidth(distributeColumnsEvenly?: boolean): this;
    /**
     * Returns a real size of rows
     */
    getRowsSize(): number;
    /**
     * Returns base shape
     */
    getTableViewShape(): TableViewShape;
    /**
     * Set bounds for table in rows, columns
     *
     * @param rows bounds for table in rows
     * @param columns bounds for table in columns
     */
    setTableBounds(rows?: number, columns?: number): this;
    /**
     * Returns table bounds
     */
    getTableBounds(): Rect;
    /**
     * Returns table size in column, row count
     *
     * @returns : columns, rows
     */
    getTableSize(): Dimension;
    /**
     * Returns table limits in column, row size
     */
    getVisibleTableLimits(): Rect;
    /**
     * Set visible table limits to specific position in column, row
     *
     * @param [row] table limits to specific position in row
     * @param [column] table limits to specific position in column
     */
    setVisibleTableLimits(row?: number, column?: number): this;
    /**
     * set data and properties of the tableview widget.
     * @param data the data object
     */
    setData(data: TableViewShape.Data & {
        headermode?: HeaderMode;
    } | DataTableAdapter): this;
    /**
     * Main method of scrolling the table view
     *
     * @param dx relative change in x coordinate
     * @param dy relative change in y coordinate
     */
    translateTable(dx: number, dy: number): this;
    /**
     * Select row index for highlighting
     *
     * @param row row index for highlighting
     * @param [autoScroll] by default is true
     */
    highlightRow(row: number, autoScroll?: boolean): this;
    /**
     * Return highlighted row index
     */
    getHighlightedRow(): number;
    /**
     * Return highlighted column index
     */
    getHighlightedColumn(): number;
    /**
     * Select column index for highlighting
     *
     * @param column column index for highlighting
     * @param [autoScroll] by default is true
     */
    highlightColumn(column: number, autoScroll?: boolean): this;
    /**
     * Set active row index
     *
     * @param rows active row index
     * @param autoScroll by default is true
     */
    setActiveRow(rows: number[] | number | null, autoScroll?: boolean): this;
    /**
     * Return active rows as array index
     *
     * @returns actives indexes row
     */
    getActiveRows(): number[];
    protected synchronizeViewLimits(enableAnimation?: boolean): this;
    /**
     * Horizontal Scrollbar
     * Vertical Scrollbar
     * Panning Listener
     * Table Row Highlighting
     */
    protected initializeTools(): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): TableView.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: TableView.Options): this;
    /**
     * Generate string from table view, that can be used in other application like Excel, Notepad++ etc.
     * @param column columns to be copied
     * @param row rows to be copied
     * @example
     * // copy cell
     * const result = tableWidget.copy(0, 0);
     * @example
     * // copy row
     * const result = tableWidget.copy(null, 0);
     * @example
     * // copy multiple rows
     * const result = tableWidget.copy(null, [0, 1]);
     * @example
     * // copy multiple rows by range
     * const result = tableWidget.copy(null, [[0, 2], [4, 6]]); // rows 0, 1, 2, 4, 5, 6 will be copied
     * @example
     * // copy entire table
     * const result = tableWidget.copy();
     */
    copyContent(column?: number | Array<number | number[]>, row?: number | Array<number | number[]>): string;
    /**
     * Generate string from table view, that can be used in other application like Excel, Notepad++ etc.
     * It saves only selected cells.
     */
    copySelectedCells(): string;
}
export declare namespace TableView {
    /**
     * the json object
     */
    type Options = AnnotatedWidget.Options & TableViewShape.Options & {
        horizontalscrollable?: boolean | string;
        horizontalscroll?: boolean | string;
        verticalscrollable?: boolean | string;
        verticalscroll?: boolean | string;
        contentmeasure?: TableViewShape.Data['contentmeasure'];
        /**
         * performance hint for table view
         */
        fixedsize?: boolean;
        /**
         * Automatic header resize strategies
         */
        headermode?: HeaderMode;
        /**
         * Defines fit border strategy, in case of true (false by default), border fit table content in case if content smaller than widget bounds.
         */
        fitborder?: boolean;
    };
    /**
     * properties
     */
    type OptionsOut = Merge<AnnotatedWidget.OptionsOut, {
        /**
         * rows
         */
        rows: number;
        /**
         * columns
         */
        cols: number;
        /**
         * performance hint for table view
         */
        fixedsize: boolean;
        /**
         * bounds
         */
        bounds: Rect;
        /**
         * Automatic header resize strategies
         */
        headermode: HeaderMode;
    }>;
    type Tools = {
        'TableViewSplitter': Splitter;
        'TableViewCompositeTool': CompositeTool;
        'TableViewColumnHandler': ColumnHandler;
        'TableViewRowHandler': RowHandler;
        'TableViewHeaderHandler': HeaderHandler;
        'TableViewSelection': Selection;
        'TableViewPanning': Panning;
        'TableViewHighlight': Highlight;
        'TableViewInPlaceEditor': InPlaceEditor;
    } & AnnotatedWidget.Tools;
    type EventMap = AnnotatedWidget.EventMap & {
        [TableViewEvents.TableAdjusted]: void;
        [TableViewEvents.TableSizeChanged]: void;
        [TableViewEvents.RowHeightChanged]: {
            row: number;
            height: {
                old: number;
                new: number;
                current: number;
            };
        };
        [TableViewEvents.ColumnWidthChanged]: {
            column: number;
            width: {
                old: number;
                new: number;
                current: number;
            };
        };
    };
}
