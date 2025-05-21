import type { TableView } from '@int/geotoolkit/controls/shapes/tableview/TableView';
import type { TableView as TableViewWidget } from '@int/geotoolkit/widgets/TableView';
import type { DataSheet, ValidationPreset } from '@int/geotoolkit/widgets/datasheet/DataSheet';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Cell } from '@int/geotoolkit/widgets/datasheet/Cell';
/**
 * DataSheet row
 * A row in DataSheet table
 * NOTE: row will be created automatically after DataSheet is initialized
 */
export declare class Row {
    /**
     * @param index index
     * @param title title
     * @param tableViewShape tableViewShape
     * @param tableView tableView
     * @param dataSheet dataSheet
     * @param options options
     */
    constructor(index: number, title: string, tableViewShape: TableView, tableView: TableViewWidget, dataSheet: DataSheet, options: DataSheet.Options);
    /**
     * Set row fill style
     * @param fillStyle New row fill style
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle.Type): this;
    /**
     * Get row fill style
     * @returns this
     */
    getFillStyle(): FillStyle;
    /**
     * Set row title
     * @param title Row title
     * @returns this
     */
    setTitle(title: string): this;
    /**
     * Get row title
     * @returns Row title
     */
    getTitle(): string;
    /**
     * Set row height
     * @param height Row height
     * @returns this
     */
    setHeight(height: number): this;
    /**
     * Get row height
     * @returns Row height
     */
    getHeight(): number;
    /**
     * Set row visibility
     * @param [visible] False to hide this row, true otherwise
     * @returns this
     */
    setVisible(visible?: boolean): this;
    /**
     * Get whether row is visible
     * @returns True if row is visible, false otherwise
     */
    getVisible(): boolean;
    /**
     * Highlight row
     * @returns this
     */
    highlight(): this;
    /**
     * Set cell content validator for a row
     * @param validator Validation function to validate cell content, validator must be in the form of function (cellContent) and must return a boolean, return true means cell text content is valid, false otherwise, cellContent parameter is cell content to be validated of type string.
     * @returns this
     */
    setRowValidator(validator: Cell.ValidatorPredicate | ValidationPreset): this;
    /**
     * Get new row height base on text content
     * @returns New calculated row height
     */
    calculateAutoRowHeight(): number;
}
