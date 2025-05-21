import { Rect } from '@int/geotoolkit/util/Rect';
import { BoxLayout } from '@int/geotoolkit/layout/BoxLayout';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * Enum of mutual columns and rows positions in the layout
 * @enum
 * @readonly
 * @example
 * import {ContainerDirection} from '@int/geotoolkit/layout/RegularGridLayout';
 * // Elements in the layout array go column-by-column:
 * const direction1 = ContainerDirection.Vertical;
 *
 * // Elements in the layout array go row-by-row:
 * const direction2 = ContainerDirection.Vertical;
 */
export declare enum ContainerDirection {
    /**
     * Elements in the layout array go column-by-column.
     */
    Vertical = "vertical",
    /**
     * Elements in the layout array go row-by-row.
     */
    Horizontal = "horizontal"
}
/**
 * Children are arranged in a grid based on
 * number of Rows and Columns in the grid.
 */
export declare class RegularGridLayout extends BoxLayout {
    /**
     * @param [rowCount] number of columns for layout
     * @param [colCount] number of rows for layout
     * @param [containerDirection] direction for container's layout
     * @param [dstRect] rectangular layout area
     */
    constructor(rowCount: number, colCount: number, containerDirection?: ContainerDirection, dstRect?: Rect);
    /**
     * @param [properties] properties objecta
     */
    constructor(properties?: RegularGridLayout.Options);
    layout(layoutRect?: Rect, targets?: ILayoutable[] | Iterator<ILayoutable>): this;
    /**
     * Sets direction for container's layout
     * @param direction direction for container's layout
     * @returns this
     */
    setDirection(direction: ContainerDirection): this;
    /**
     * Gets direction of the container that this layout for
     */
    getDirection(): ContainerDirection;
    /**
     * Sets number of columns for layout
     * @param colCount number of columns for layout
     * @returns this
     */
    setColumnCount(colCount: number): this;
    /**
     * Gets number of columns for layout
     */
    getColumnCount(): number;
    /**
     * Sets number of rows for layout
     * @param rowCount number of rows for layout
     * @returns this
     */
    setRowCount(rowCount: number): this;
    /**
     * Gets number of rows for layout
     */
    getRowCount(): number;
    getProperties(): RegularGridLayout.Options;
    setProperties(properties?: RegularGridLayout.Options): this;
}
export declare namespace RegularGridLayout {
    /**
     * number of columns for layout or properties object
     */
    type Options = BoxLayout.Options & {
        /**
         * rowcount rowcount
         */
        rowcount?: number;
        /**
         * columncount columncount
         */
        columncount?: number;
        /**
         * direction of the layout
         */
        direction?: ContainerDirection;
    };
}
