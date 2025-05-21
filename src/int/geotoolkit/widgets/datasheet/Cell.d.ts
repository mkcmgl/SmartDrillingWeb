/**
 * @module geotoolkit/widgets/datasheet/Cell
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { AlignmentStyle, BaseLineStyle, TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { WrapMode } from '@int/geotoolkit/widgets/datasheet/WrapMode';
import type { DataSheet, ValidationPreset } from '@int/geotoolkit/widgets/datasheet/DataSheet';
import type { MergedCell } from '@int/geotoolkit/widgets/datasheet/MergedCell';
import type { TableView } from '@int/geotoolkit/controls/shapes/tableview/TableView';
/**
 * DataSheet cell
 * A cell in DataSheet table
 * NOTE: Cell will be created automatically after DataSheet is initialized
 */
export declare class Cell {
    /**
     * @param row row index
     * @param column column index
     * @param cellStyle cellstyle
     * @param dataSheet dataSheet
     * @param options options
     */
    constructor(row: number, column: number, cellStyle: Cell.Style, dataSheet: DataSheet, options: DataSheet.Options);
    /**
     * Get row location of a cell
     * @returns Row index
     */
    getRow(): number;
    /**
     * Get column location of a cell
     * @returns Column index
     */
    getColumn(): number;
    /**
     * Check if cell is active
     * @returns True if cell is active, false otherwise
     */
    isActive(): boolean;
    /**
     * Get cell properties
     * @returns Cell style
     */
    getProperties(): Cell.Style;
    /**
     * Set cell fill style
     * @param fillStyle New cell fill style
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle.Type): this;
    /**
     * Get cell fill style
     * @returns Current cell fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Set cell text style
     * @param textStyle New cell text style
     * @param [merge] True if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Type, merge?: boolean): this;
    /**
     * Get cell text style
     * @returns Current cell text style
     */
    getTextStyle(): TextStyle;
    /**
     * Set cell border
     * @param borderType New cell border
     * @returns this
     */
    setBorder(borderType: Cell.BorderStyles): this;
    /**
     * Get cell border
     * @returns Cell border
     */
    getBorder(): Cell.BorderStylesOut;
    /**
     * Set cell text alignment
     * @param [alignment] New cell text alignment
     * @param [baseline] New cell text baseline
     * @returns this
     */
    setTextAlignment(alignment?: AlignmentStyle, baseline?: BaseLineStyle): this;
    /**
     * Set text content for a cell
     * @param newData New cell content
     * @param [autoHeight] True to automatically set row height base on content data, false otherwise
     * @returns this
     */
    setContentData(newData: string | number, autoHeight?: boolean): this;
    /**
     * Set wrap mode for cell text content
     * @param wrapMode New cell content wrap mode
     * @returns this
     */
    setWrapMode(wrapMode: WrapMode): this;
    /**
     * Get wrap mode for cell text content
     * @returns Wrap mode
     */
    getWrapMode(): WrapMode;
    /**
     * Set cell content validator
     * @param validator Validation function to validate cell content, validator must be in the form of function (cellContent) and must return a boolean, return true means cell text content is valid, false otherwise, cellContent parameter is cell content to be validated of type string.
     * @returns this
     */
    setValidator(validator: Cell.ValidatorPredicate | ValidationPreset): this;
    /**
     * Get cell content validator
     * @returns this
     */
    getValidator(): Cell.ValidatorPredicate;
    /**
     * Get text content of a cell
     * @returns Content of cell
     */
    getContentData(): string;
    /**
     * Get merged cell which this cell is within
     * @returns Merged cell
     */
    getMergedCell(): MergedCell;
}
export declare namespace Cell {
    type Style = TableView.CellStyle & {
        border?: BorderStylesOut;
        validator?: ValidatorPredicate;
    };
    /**
     * New cell border style
     */
    type BorderStyles = {
        /**
         * Top border line style
         */
        top: LineStyle.Type;
        /**
         * Left border line style
         */
        left: LineStyle.Type;
        /**
         * Right border line style
         */
        right: LineStyle.Type;
        /**
         * Bottom border line style
         */
        bottom: LineStyle.Type;
    };
    /**
     * Cell border style
     */
    type BorderStylesOut = {
        /**
         * Top border line style
         */
        top: LineStyle;
        /**
         * Left border line style
         */
        left: LineStyle;
        /**
         * Right border line style
         */
        right: LineStyle;
        /**
         * Bottom border line style
         */
        bottom: LineStyle;
    };
    type ValidatorPredicate = (value?: number | string) => boolean;
}
