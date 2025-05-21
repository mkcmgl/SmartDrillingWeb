import { Rect } from '@int/geotoolkit/util/Rect';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Group } from '@int/geotoolkit/scene/Group';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Point } from '@int/geotoolkit/util/Point';
import type { Node } from '@int/geotoolkit/scene/Node';
import { DataProvider } from '@int/geotoolkit/controls/shapes/tableview/DataProvider';
import type { DataTableAdapter } from '@int/geotoolkit/widgets/data/DataTableAdapter';
/**
 * TableViews's Events enumerator
 * @readonly
 * @enum
 * @events
 */
export declare enum Events {
    /**
     * Event type fired prior to column width change
     * @event module:geotoolkit/controls/shapes/tableview/TableView~Events~ColumnWidthChanging
     * @param {object} widthChanged
     * @param {number} widthChanged.column index of the column
     * @param {object} widthChanged.width
     * @param {number} widthChanged.width.old old column width
     * @param {number} widthChanged.width.new new column width
     */
    ColumnWidthChanging = "onColumnWidthChanging",
    /**
     * Event type fired after a column width change
     * @event module:geotoolkit/controls/shapes/tableview/TableView~Events~ColumnWidthChanged
     * @param {object} widthChanged
     * @param {number} widthChanged.column index of the column
     * @param {object} widthChanged.width
     * @param {number} widthChanged.width.old old column width
     * @param {number} widthChanged.width.new new column width
     * @param {number} widthChanged.width.current current column width
     */
    ColumnWidthChanged = "onColumnWidthChanged",
    /**
     * Event type fired prior to row height change
     * @event module:geotoolkit/controls/shapes/tableview/TableView~Events~RowHeightChanging
     * @param {object} heightChanged
     * @param {number} heightChanged.row index of the row
     * @param {object} heightChanged.height
     * @param {number} heightChanged.height.old old row height
     * @param {number} heightChanged.height.new new row height
     */
    RowHeightChanging = "onRowHeightChanging",
    /**
     * Event type fired after arow height change
     * @event module:geotoolkit/controls/shapes/tableview/TableView~Events~RowHeightChanged
     * @param {object} heightChanged
     * @param {number} heightChanged.row index of the row
     * @param {object} heightChanged.height
     * @param {number} heightChanged.height.old old row height
     * @param {number} heightChanged.height.new new row height
     * @param {number} heightChanged.height.current current row height
     */
    RowHeightChanged = "onRowHeightChanged"
}
/**
 * Defines a Table View Shape
 */
export declare class TableView extends Group {
    constructor(options?: TableView.Options);
    on<E extends keyof TableView.EventMap>(type: E, callback: (eventType: E, sender: this, args: TableView.EventMap[E]) => void): this;
    off<E extends keyof TableView.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: TableView.EventMap[E]) => void): this;
    notify<E extends keyof TableView.EventMap>(type: E, source: TableView, args?: TableView.EventMap[E]): this;
    /**
     * Set bounds for table in rows, columns
     * @param rows rows in the table
     * @param columns columns in the table
     * @param rebuild rebuild or not
     * @returns this
     */
    setTableBounds(rows?: number, columns?: number, rebuild?: boolean): this;
    /**
     * Get row height
     * @param row index of the row, -1 for the header row
     * @returns height
     */
    getRowHeight(row: number): number;
    /**
     * Set row height
     * @param row index of the row, -1 for the header row
     * @param height row height
     * @throws {Error} if row index is out of range
     * @fires @int/geotoolkit/controls/shapes/tableview/TableView~Events.ColumnWidthChanging
     * @fires @int/geotoolkit/controls/shapes/tableview/TableView~Events.ColumnWidthChanged
     */
    setRowHeight(row: number, height: number): this;
    /**
     * Returns a real size of rows
     */
    getRowsSize(): number;
    /**
     * returns a real size of columns
     * @param [column] column index
     */
    getColumnsSize(column?: number): number;
    /**
     * Get column width
     * @param column index of the column, -1 for the index column
     * @returns width
     */
    getColumnWidth(column: number): number;
    /**
     * Set column width
     * @param column index of the column, -1 for the index column
     * @param width column width
     * @throws {Error} if column index is out of range
     * @fires @int/geotoolkit/controls/shapes/tableview/TableView~Events.ColumnWidthChanging
     * @fires @int/geotoolkit/controls/shapes/tableview/TableView~Events.ColumnWidthChanged
     */
    setColumnWidth(column: number, width: number): this;
    /**
     * Set the width of index column
     * @param width width
     */
    setIndexColumnWidth(width: number): this;
    /**
     * Get the width of index column
     * @returns width
     */
    getIndexColumnWidth(): number;
    /**
     * Set the height of header row
     * @param height height
     */
    setHeaderRowHeight(height: number): this;
    /**
     * Get the height of header row
     * @returns height
     */
    getHeaderRowHeight(): number;
    /**
     * Get the default height of header, width of index column, and cell size
     * @returns default size
     */
    getDefaultTableElementSize(): TableView.TableElementSize;
    /**
     * Resize all column widths to fit to visible table width
     * @param [distributeColumnsEvenly] distribute columns evenly
     * @returns this
     */
    fitToWidth(distributeColumnsEvenly?: boolean): this;
    /**
     * Set bounds in model space
     * @param bounds bounds in model space
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Get visible model bounds in pixel space
     * @returns Visible bounds
     */
    getVisibleTableModelLimits(): Rect;
    /**
     * Get whole table content model bounds in pixel space
     * @returns Table content bounds
     */
    getContentTableBounds(): Rect;
    /**
     * Get header model bounds in pixel space
     * @returns Header bounds
     */
    getHeaderBounds(): Rect;
    /**
     * Get fixed columns model bounds in pixel space
     * @returns Fixed column bounds
     */
    getFixedTableBounds(): Rect;
    /**
     * Get table size in column, row count
     * @returns Columns, rows
     */
    getTableSize(): Dimension;
    /**
     * Gets performance hint for table view
     * @returns fixed size
     */
    getFixedSize(): boolean;
    /**
     * Get table visible limits in column, row
     */
    getVisibleTableLimits(): Rect;
    /**
     * Set visible table limits to specific column and row index
     * @param [row] index at the row
     * @param [column] index at the column
     * @returns this
     */
    setVisibleTableLimits(row?: number, column?: number): this;
    /**
     * Scroll to a specified cell location
     * @param [row] Row index, null to scroll only to column
     * @param [column] Column index, null to scroll only to row
     * @returns this
     */
    scroll(row?: number, column?: number): this;
    /**
     * Get bounds of the whole table in terms of number of columns and rows
     */
    getTableBounds(): Rect;
    /**
     * Main method of scrolling the table view
     * @param dx number of model units to shift along x axis
     * @param dy number of model units to shift along y axis
     * @returns this
     */
    translateTable(dx: number, dy: number): this;
    /**
     * Relayout table
     * @returns this
     */
    adjustTable(): this;
    /**
     * Convenience method to set groups of visual properties
     * @param opts object
     * @returns this
     */
    setData(opts: TableView.Data | DataTableAdapter): this;
    /**
     * Set index title (top left corner cell of index column)
     * @param indexTitle Index title
     * @returns this
     */
    setIndexTitle(indexTitle: string): this;
    /**
     * Get index title (top left corner cell of index column)
     * @returns Index title
     */
    getIndexTitle(): string;
    /**
     * Set optional cell measurement device, typical use would be to determine min table cell widths by contents.
     * @param contentMeasure function to determine min table cell widths by contents
     * @returns this
     */
    setContentMeasure(contentMeasure: TableView.ColumnSizeMeasure | TableView.ContentSizeMeasure): this;
    /**
     * Set optional formatter of content values, use to prepare content value provider output.
     * contentPrepare parameter format: (startRow, endRow)
     * function will run with TableView set as this object will run normally
     * @param contentPrepare optional formatter of content values
     * @returns this
     */
    setContentPrepare(contentPrepare: TableView.ContentPrepare): this;
    /**
     * Set header value provider, returns column header name.
     * headerProvider parameter format: (column)
     * function will run with TableView set as this object will run normally
     * @param headerProvider header value provider, returns column header name
     * @returns this
     */
    setHeaderProvider(headerProvider: TableView.HeaderProvider): this;
    /**
     * Set header format provider, returns optionally text style at column.
     * headerFormatProvider parameter format: (column)
     * function will run with TableView set as this object will run normally
     * @param headerFormatProvider header format provider, returns optionally text style at column
     * @returns this
     */
    setHeaderFormatProvider(headerFormatProvider: TableView.HeaderFormatProvider): this;
    /**
     * Set content value provider, returns optionally formatted content value at col, row.
     * contentProvider parameter format: (column, row)
     * function will run with TableView set as this object will run normally
     * @param contentProvider content value provider
     * @returns this
     */
    setContentProvider(contentProvider: TableView.ContentProvider): this;
    /**
     * Set content format provider, returns optional text style at row.
     * contentFormatProvider parameter format: (row)
     * function will run with TableView set as this object will run normally
     * @param contentFormatProvider content format provider
     * @returns this
     */
    setContentFormatProvider(contentFormatProvider: TableView.ContentFormatProvider): this;
    /**
     * Set optional formatter of index values, use to prepare index value provider output.
     * indexPrepare parameter format: (startRow, endRow)
     * function will run with TableView set as this object will run normally
     * @param indexPrepare optional formatter of index values, use to prepare index value provider output
     * @returns this
     */
    setIndexPrepare(indexPrepare: TableView.IndexPrepare): this;
    /**
     * Set index value provider, returns optionally formatted index value at row.
     * indexProvider parameter format: (row)
     * function will run with TableView set as this object will run normally
     * @param indexProvider index value provider, returns optionally formatted index value at row
     * @returns this
     */
    setIndexProvider(indexProvider: TableView.IndexProvider): this;
    /**
     * Run once before rendering index data. This should be used to prepare index data output formatting
     * @param fromRow fromRow used to prepare index data output formatting
     * @param toRow toRow used to prepare index data output formatting
     * @returns formatted index value
     */
    prepareIndex(fromRow: number, toRow: number): string | null | void;
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
     * Select row indexes for active rows
     * @param rows index value at row
     * @returns this
     */
    setActiveRows(rows: number[] | number): this;
    /**
     * Return active rows as array index
     * @returns actives indexes row
     */
    getActiveRows(): number[];
    /**
     * Select row index for highlighting
     * @param row index value at row
     * @returns this
     */
    highlightRow(row: number): this;
    /**
     * Return highlighted row index
     * @returns row
     */
    getHighlightedRow(): number;
    /**
     * Select column index for highlighting
     * @param column column index for highlighting
     * @returns this
     */
    highlightColumn(column: number): this;
    /**
     * Returns highlighted column index
     * @returns column
     */
    getHighlightedColumn(): number;
    /**
     * Get column index
     * @param x Position in x axis
     * @param [exactValue] True to get exact value, ignore flooring of return value, false otherwise
     * @returns Column position of a cell
     */
    getColumn(x: number, exactValue?: boolean): number;
    /**
     * Get row index
     * @param y Position in y axis
     * @param [exactValue] True to get exact value, ignore flooring of return value, false otherwise
     * @returns Row position of a cell
     */
    getRow(y: number, exactValue?: boolean): number;
    /**
     * Select row on header row
     * @param x Mouse position in x axis
     * @param y Mouse position in y axis
     * @returns Cell location in header row
     */
    pickHeader(x: number, y: number): Point;
    /**
     * Select row on header row
     * @param p Mouse position
     * @returns Cell location in header row
     */
    pickHeader(p: Point): Point;
    /**
     * Select row on index column
     * @param x Mouse position in x axis
     * @param y Mouse position in y axis
     * @returns Cell location in index column
     */
    pickFixedRow(x: number, y: number): Point;
    pickFixedRow(x: number, y: number): Point;
    /**
     * Returns cell row by x y position (in table view model coordinates)
     * @param x x coordinate
     * @param [y] y coordinate
     * @param [exactValue] exact value
     * @returns , X = Column, Y = Row
     */
    resolveCellCoordinate(x: number | Point, y?: number, exactValue?: boolean): Point;
    /**
     * Returns cell bounds
     * @param row index at row
     * @param column index at column
     */
    getCellBounds(row: number, column: number): Rect | null;
    /**
     * Run once before rendering content data. This should be used to prepare content data output formatting.
     * @param fromRow fromRow used to prepare content data output formatting
     * @param toRow toRow used to prepare content data output formatting
     * @param fromColumn fromColumn used to prepare content data output formatting
     * @param toColumn toColumn used to prepare content data output formatting
     */
    prepareContent(fromRow: number, toRow: number, fromColumn: number, toColumn: number): null | string | void;
    /**
     * Return optionally formatted content text field at col, row
     * @param column index at the column
     * @param row index at the column
     * @returns formatted content value
     */
    getContentData(column: number, row: number): string;
    /**
     * Set index format provider, returns optionally text style at row.
     * indexFormatProvider parameter format: (row)
     * function will run with TableView set as this object will run normally
     * @param indexFormatProvider index format provider, returns text style at row
     * @returns this
     */
    setIndexFormatProvider(indexFormatProvider: TableView.IndexFormatProvider): this;
    /**
     * Set marker provider, returns boolean value to show/hide marker.
     * markerProvider parameter format: (row)
     * function will run with TableView set as this object will run normally
     * @param markerProvider marker provider, returns boolean value to show/hide marker
     * @returns this
     */
    setMarkerProvider(markerProvider: TableView.MarkerProvider): this;
    /**
     * Return header text at column
     * @param column index where the header text will be returned
     * @returns header name
     */
    getHeaderData(column: number): string;
    /**
     * Returns data provider
     */
    getDataProvider(): DataProvider;
    /**
     * Sets data provider
     */
    setDataProvider(provider: DataProvider): this;
}
export declare namespace TableView {
    /**
     * object
     */
    type Options = Group.Options & Data & {
        /**
         * performance hint for table view
         */
        fixedsize?: boolean;
        /**
         * index column width
         */
        indexwidth?: number;
        /**
         * header height
         */
        headerheight?: number;
        /**
         * cell size
         */
        cellsize?: Dimension;
        /**
         * bounds
         */
        bounds?: Rect;
    };
    /**
     * default size
     */
    type TableElementSize = {
        /**
         * default header row height
         */
        headerheight?: number;
        /**
         * default index column width
         */
        indexwidth?: number;
        /**
         * default cell size
         */
        cellsize?: Dimension;
    };
    type TableContent = {
        /**
         * Active row fill style
         */
        activerowfillstyle?: FillStyle.Type;
        /**
         * Highlighted row fill style
         */
        highlightrowfillstyle?: FillStyle.Type;
        /**
         * Highlighted column fill style
         */
        highlightcolumnfillstyle?: FillStyle.Type;
        /**
         * Active cell line style
         */
        activecelllinestyle?: LineStyle.Type;
        /**
         * Active cell fill style
         */
        activecellfillstyle?: FillStyle.Type;
        /**
         * Default cell dimension
         */
        defaultcellsize?: Dimension;
        /**
         * Content properties
         */
        content?: {
            /**
             * Padding for cell content
             */
            padding?: number;
            /**
             * Grid line style of table content
             */
            gridstyle?: LineStyle.Type | {
                /**
                 * Horizontal grid line style of index
                 */
                horizontal?: LineStyle.Type;
                /**
                 * Vertical grid line style of index
                 */
                vertical?: LineStyle.Type;
            };
            /**
             * Table content text style
             */
            textstyle?: TextStyle.Type;
            /**
             * Odd row fill style
             */
            oddfillstyle?: FillStyle.Type;
            /**
             * Even row fill style
             */
            evenfillstyle?: FillStyle.Type;
            /**
             * Odd column fill style
             */
            oddfillstylecolumn?: FillStyle.Type;
            /**
             * Even column fill style
             */
            evenfillstylecolumn?: FillStyle.Type;
        };
    };
    type HeaderContent = {
        /**
         * Default header dimension
         */
        defaultheadersize?: Dimension;
        /**
         * Default header dimension
         */
        defaultcellsize?: Dimension;
        /**
         * Header highlight fill style
         */
        highlightcolumnfillstyle?: FillStyle.Type;
        /**
         * Header active fill style
         */
        activecolumnfillstyle?: FillStyle.Type;
        /**
         * Header properties
         */
        header?: {
            /**
             * Header highlight fill style
             */
            highlightcolumnfillstyle?: FillStyle.Type;
            /**
             * Header active fill style
             */
            activecolumnfillstyle?: FillStyle.Type;
            /**
             * Padding for header content
             */
            padding?: number;
            /**
             * Grid line style of header
             */
            gridstyle?: LineStyle.Type | {
                /**
                 * Horizontal grid line style of index
                 */
                horizontal?: LineStyle.Type;
                /**
                 * Vertical grid line style of index
                 */
                vertical?: LineStyle.Type;
            };
            /**
             * Header content text style
             */
            textstyle?: TextStyle.Type;
            /**
             * Header fill style
             */
            headerfillstyle?: FillStyle.Type;
            /**
             * Odd column fill style, drawn on top of headerfillstyle
             */
            oddfillstyle?: FillStyle.Type;
            /**
             * Even column fill style, drawn on top of headerfillstyle
             */
            evenfillstyle?: FillStyle.Type;
        };
    };
    type IndexContent = {
        /**
         * Default index dimension
         */
        defaultcellsize?: Dimension;
        /**
         * Index highlight fill style
         */
        highlightrowfillstyle?: FillStyle.Type;
        /**
         * Index active fill style
         */
        activerowfillstyle?: FillStyle.Type;
        /**
         * Index properties
         */
        index?: {
            /**
             * Index highlight fill style
             */
            highlightrowfillstyle?: FillStyle.Type;
            /**
             * Index active fill style
             */
            activerowfillstyle?: FillStyle.Type;
            /**
             * Grid line style of index
             */
            gridstyle?: LineStyle.Type | {
                /**
                 * Horizontal grid line style of index
                 */
                horizontal?: LineStyle.Type;
                /**
                 * Vertical grid line style of index
                 */
                vertical?: LineStyle.Type;
            };
            /**
             * Index content text style
             */
            textstyle?: TextStyle.Type;
            /**
             * Odd row fill style
             */
            oddfillstyle?: FillStyle.Type;
            /**
             * Even row fill style
             */
            evenfillstyle?: FillStyle.Type;
            /**
             * Marker fill style
             */
            markerfillstyle?: FillStyle.Type;
            /**
             * Marker line style
             */
            markerlinestyle?: LineStyle.Type;
        };
    };
    /**
     * object
     */
    type Data = {
        /**
         * @deprecated since 4.0. Use "dataprovider" instead
         */
        indexformatprovider?: IndexFormatProvider;
        /**
         * @deprecated since 4.0. Use "dataprovider" instead
         */
        contentformatprovider?: ContentFormatProvider;
        /**
         * @deprecated since 4.0. Use "dataprovider" instead
         */
        headerformatprovider?: TableView.HeaderFormatProvider;
        /**
         * table data and formats provider
         */
        dataprovider?: DataProvider;
        /**
         * Fit to width
         */
        fittowidth?: boolean;
        /**
         * JSON to set index title - see {@link @int/geotoolkit/controls/shapes/tableview/TableView~TableView.setIndexTitle}
         */
        indextitle?: string;
        /**
         * value to set index column visibility
         */
        indexvisible?: boolean;
        /**
         * value to set header row visibility
         */
        headervisible?: boolean;
        /**
         * performance hint for table view
         */
        fixedsize?: boolean;
        /**
         * JSON setting table view content measurer - see {@link @int/geotoolkit/controls/shapes/tableview/TableView~TableView.setContentMeasure}
         */
        contentmeasure?: ColumnSizeMeasure | ContentSizeMeasure;
        /**
         * @deprecated since 4.0. Use "dataprovider" instead
         */
        contentprepare?: ContentPrepare;
        /**
         * @deprecated since 4.0. Use "dataprovider" instead
         */
        contentprovider?: ContentProvider;
        /**
         * @deprecated since 4.0. Use "dataprovider" instead
         */
        headerprovider?: HeaderProvider;
        /**
         * @deprecated since 4.0. Use "dataprovider" instead
         */
        indexprepare?: IndexPrepare;
        /**
         * @deprecated since 4.0. Use "dataprovider" instead
         */
        indexprovider?: IndexProvider;
        /**
         * @deprecated since 4.0. Use "dataprovider" instead
         */
        markerprovider?: MarkerProvider;
        /**
         * header options
         */
        header?: TableView.HeaderContent & {
            /**
             * Visibility
             */
            visible?: boolean;
            /**
             * Grid style
             */
            gridstyle?: LineStyle.Type | {
                /**
                 * Grid style
                 */
                vertical?: LineStyle.Type;
                /**
                 * Grid style
                 */
                horizontal?: LineStyle.Type;
            };
            /**
             * Text style
             */
            textstyle?: TextStyle.Type;
            /**
             * Header fill style
             */
            headerfillstyle?: FillStyle.Type;
        };
        /**
         * content options
         */
        content?: TableView.TableContent | TableView.TableContent['content'];
        /**
         * index options
         */
        index?: (TableView.IndexContent | TableView.IndexContent['index']) & {
            /**
             * Visibility
             */
            visible?: boolean;
            /**
             * Title
             */
            title?: string;
        };
        /**
         * Highlight row style
         */
        highlightrowfillstyle?: FillStyle.Type;
        /**
         * Highlight column style
         */
        highlightcolumnfillstyle?: FillStyle.Type;
        /**
         * Bounds
         */
        bounds?: Rect;
        /**
         * Table view row count
         */
        rows?: number;
        /**
         * Table view column count
         */
        cols?: number;
        /**
         * Default cell dimensions
         */
        defaultcellsize?: Dimension;
        /**
         * Default header dimensions
         */
        defaultheadersize?: Dimension;
    };
    type RowSizeMeasure = (idx: number, headerStyle: TextStyle, contentStyle: TextStyle, size: RowSize) => RowSize;
    type ColumnSizeMeasure = (idx: number, headerStyle: TextStyle, contentStyle: TextStyle, size: ColumnSize) => ColumnSize;
    type ContentSizeMeasure = {
        /**
         * @deprecated since 4.0. Use "measurecolumn" instead.
         * Callback to measure column
         */
        measureColumn?: ColumnSizeMeasure;
        /**
         * @deprecated since 4.0. Use "measurecolumn" instead.
         * Callback to measure column
         */
        measureContent?: ColumnSizeMeasure;
        /**
         * @deprecated since 4.0. Use "measurerow" instead.
         * Callback to measure row
         */
        measureRow?: RowSizeMeasure;
        /**
         * Callback to measure column
         */
        measurecolumn?: ColumnSizeMeasure;
        /**
         * Callback to measure column
         */
        measurerow?: RowSizeMeasure;
    };
    /**
     * @deprecated since 4.0. Use "setDataProvider" instead
     */
    type ContentPrepare = ((fromRow: number, toRow: number, fromColumn: number, toColumn: number) => string | void) | {
        prepareContent?: (fromRow: number, toRow: number, fromColumn: number, toColumn: number) => string | void;
    };
    /**
     * @deprecated since 4.0. Use "setDataProvider" instead
     */
    type HeaderProvider = ((column: number) => string) | {
        getHeaderData?: (column: number) => string;
    };
    /**
     * @deprecated since 4.0. Use "setDataProvider" instead
     */
    type HeaderFormatProvider = ((a: number, style: CellStyle) => CellStyle) | {
        getHeaderFormat?: (a: number, style: CellStyle) => CellStyle;
    };
    /**
     * @deprecated since 4.0. Use "setDataProvider" instead
     */
    type ContentProvider = ((column: number, row: number) => string) | {
        getContentData?: (column: number, row: number) => string;
    };
    /**
     * @deprecated since 4.0. Use "setDataProvider" instead
     */
    type ContentFormatProvider = ((column: number, row: number, style: CellStyle) => CellStyle) | {
        getContentFormat?: (column: number, row: number, style: CellStyle) => CellStyle;
    };
    /**
     * @deprecated since 4.0. Use "setDataProvider" instead
     */
    type IndexPrepare = ((fromRow: number, toRow: number) => string | void) | {
        prepareIndex?: (fromRow: number, toRow: number) => string | void;
    };
    /**
     * @deprecated since 4.0. Use "setDataProvider" instead
     */
    type IndexProvider = ((column: number) => string) | {
        getIndexData?: (column: number) => string;
    };
    /**
     * @deprecated since 4.0. Use "setDataProvider" instead
     */
    type IndexFormatProvider = ((a: number, style: CellStyle) => CellStyle) | {
        getIndexFormat?: (a: number, style: CellStyle) => CellStyle;
    };
    /**
     * @deprecated since 4.0. Use "setDataProvider" instead
     */
    type MarkerProvider = ((row: number) => boolean) | {
        getMarkerData?: (row: number) => boolean;
    };
    /**
     * columnSize
     */
    type ColumnSize = {
        /**
         * Column width
         */
        width: number;
    };
    /**
     * rowSize
     */
    type RowSize = {
        /**
         * Row height
         */
        height: number;
    };
    type CellStyle = {
        selection?: {
            row?: number;
            column?: number;
        };
        background?: {
            fillstyle?: FillStyle.Type;
            linestyle?: LineStyle;
            bounds?: Rect;
        };
        text?: {
            textstyle: TextStyle;
            fillstyle: FillStyle.Type;
            linestyle: LineStyle.Type;
            shape?: Text;
            value?: string;
            bounds: Rect;
        };
        icon?: {
            fillstyle: FillStyle;
            linestyle: LineStyle;
            value: Node;
            bounds: Rect;
        };
        border?: {
            top?: LineStyle.Type;
            bottom?: LineStyle.Type;
            left?: LineStyle.Type;
            right?: LineStyle.Type;
        };
        ispicking?: boolean;
    };
    type EventMap = Group.EventMap & {
        [Events.RowHeightChanging]: {
            row: number;
            height: {
                old: number;
                new: number;
                current: number;
            };
        };
        [Events.RowHeightChanged]: {
            row: number;
            height: {
                old: number;
                new: number;
                current: number;
            };
        };
        [Events.ColumnWidthChanging]: {
            column: number;
            width: {
                old: number;
                new: number;
                current: number;
            };
        };
        [Events.ColumnWidthChanged]: {
            column: number;
            width: {
                old: number;
                new: number;
                current: number;
            };
        };
    };
}
