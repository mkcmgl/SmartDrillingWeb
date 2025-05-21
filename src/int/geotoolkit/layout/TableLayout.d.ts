/**
 * @module geotoolkit/layout/TableLayout
 */
import { Layout } from '@int/geotoolkit/layout/Layout';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * Enum of mutual columns and rows positions in layout
 * @enum
 * @readonly
 * @example
 * import {Direction} from '@int/geotoolkit/layout/TableLayout';
 * // Elements in the layout array go column-by-column:
 * const direction1 = Direction.Horizontal;
 *
 * // Elements in the layout array go row-by-row:
 * const direction2 = Direction.Horizontal;
 */
export declare enum Direction {
    /**
     * Elements set in row-by-row manner.
     */
    Horizontal = "horizontal",
    /**
     * Elements set column-by-column manner.
     */
    Vertical = "vertical"
}
export declare class TableLayout extends Layout {
    /**
     * @param [rowCount] A count of rows or propperties object
     * @param [colCount] A count of columns
     */
    constructor(rowCount?: number, colCount?: number);
    constructor(options?: TableLayout.Options);
    /**
     * set direction for Table layout
     * @param value a new direction
     * @returns this
     */
    setDirection(value: Direction): this;
    /**
     * Gets direction of the layout
     */
    getDirection(): Direction;
    /**
     * Sets the number of columns
     * @param colCount the number of columns for the layout
     * @returns this
     */
    setColumnCount(colCount: number): this;
    /**
     * Gets the number of columns
     * @returns columnCount
     */
    getColumnCount(): number;
    /**
     * Sets the number of rows
     * @param rowCount the number of rows for the layout
     * @returns this
     */
    setRowCount(rowCount: number): this;
    /**
     * Gets the number of Rows
     * @returns rowCount
     */
    getRowCount(): number;
    /**
     * Sets Distance between two columns.
     * @param distance a horizontal distance
     */
    setHorizontalDistance(distance: number): this;
    /**
     * Gets the Horizontal Distance between two columns
     */
    getHorizontalDistance(): number;
    /**
     * Sets Distance between two rows.
     * @param distance a vertical distance
     */
    setVerticalDistance(distance: number): this;
    /**
     * Gets the Vertical Distance between two rows
     */
    getVerticalDistance(): number;
    layout(layoutRect?: Rect, targets?: ILayoutable[] | Iterator<ILayoutable>): this;
    getProperties(): TableLayout.Options;
    setProperties(properties?: TableLayout.Options): this;
}
export declare namespace TableLayout {
    /**
     * A count of rows or propperties object
     */
    type Options = {
        /**
         * rowcount rowcount
         */
        rowcount?: number;
        /**
         * columncount columncount
         */
        columncount?: number;
        /**
         * horizontaldistance horizontal distance
         */
        horizontaldistance?: number;
        /**
         * verticaldistance vertical distance
         */
        verticaldistance?: number;
        /**
         * direction of the layout
         */
        direction?: Direction;
    };
}
