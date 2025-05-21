import type { TableView as TableViewShape } from '@int/geotoolkit/controls/shapes/tableview/TableView';
import type { DataSheet, ValidationPreset } from '@int/geotoolkit/widgets/datasheet/DataSheet';
import type { TableView } from '@int/geotoolkit/widgets/TableView';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Cell } from '@int/geotoolkit/widgets/datasheet/Cell';
/**
 * DataSheet column
 * A column in DataSheet table
 * NOTE: Column will be created automatically after DataSheet is initialized
 */
export declare class Column {
    /**
     * @param index index
     * @param title title
     * @param tableViewShape tableViewShape
     * @param tableView tableView
     * @param dataSheet dataSheet
     * @param options options
     */
    constructor(index: number, title: string, tableViewShape: TableViewShape, tableView: TableView, dataSheet: DataSheet, options: DataSheet.Options);
    /**
     * Set column fill style
     * @param fillStyle New column fill style
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle.Type): this;
    /**
     * Get column fill style
     * @returns this
     */
    getFillStyle(): FillStyle;
    /**
     * Set column title
     * @param title Column title
     * @returns this
     */
    setTitle(title: string): this;
    /**
     * Get column title
     * @returns Column title
     */
    getTitle(): string;
    /**
     * Set column width
     * @param width Column width
     * @returns this
     */
    setWidth(width: number): this;
    /**
     * Get column width
     * @returns Column width
     */
    getWidth(): number;
    /**
     * Set column visibility
     * @param [visible] False to hide this column, true otherwise
     * @returns this
     */
    setVisible(visible?: boolean): this;
    /**
     * Get whether column is visible
     * @returns True if column is visible, false otherwise
     */
    getVisible(): boolean;
    /**
     * Highlight column
     * @returns this
     */
    highlight(): this;
    /**
     * Set cell content validator for a column
     * @param validator Validation function to validate cell content, validator must be in the form of function (cellContent) and must return a boolean, return true means cell text content is valid, false otherwise, cellContent parameter is cell content to be validated of type string.
     * @returns this
     */
    setColumnValidator(validator: Cell.ValidatorPredicate | ValidationPreset): this;
}
