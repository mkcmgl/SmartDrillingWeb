import type { Cell } from '@int/geotoolkit/widgets/datasheet/Cell';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { DataSheet } from '@int/geotoolkit/widgets/datasheet/DataSheet';
/**
 * DataSheet merged cell
 * A merged cell in DataSheet table
 */
export declare class MergedCell {
    /**
     * @param firstCell First cell
     * @param lastCell Last cell
     * @param mergedCellLayer merged cell layer
     * @param mergedCells merged cells
     * @param dataSheet dataSheet
     */
    constructor(firstCell: Cell, lastCell: Cell, mergedCellLayer: CompositeNode, mergedCells: MergedCell[], dataSheet: DataSheet);
    /**
     * Get first cell (most top left cell) in to be merged rectangle.
     * All merged cell info will always be base on first cell of merged rectangle
     * @returns First cell
     */
    getFirstCell(): Cell;
    /**
     * Get last cell (most bottom right cell) in to be merged rectangle.
     * All merged cell info will always be base on first cell of merged rectangle
     * @returns Last cell
     */
    getLastCell(): Cell;
    /**
     * Get number of row in merged cell
     * @returns Number of row in merged cell
     */
    getNumberOfRows(): number;
    /**
     * Get number of column in merged cell
     * @returns Number of column in merged cell
     */
    getNumberOfColumns(): number;
    /**
     * Check if merged cell contains a specific cell position
     * @param row Row index
     * @param column Column index
     * @returns True if merged cell contains the cell, false otherwise
     */
    containsCell(row: number, column: number): boolean;
    /**
     * Dispose merged cell container
     * @returns this
     */
    dispose(): this;
}
