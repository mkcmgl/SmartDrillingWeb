/**
 * @module geotoolkit/contour/datasource/OneGridDataSource
 */
import { AbstractContourDataSource } from '@int/geotoolkit/contour/datasource/AbstractContourDataSource';
import type { ContourAbstractGrid } from '@int/geotoolkit/contour/grid/ContourAbstractGrid';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * The data source implementation for a single grid
 */
export declare class OneGridDataSource extends AbstractContourDataSource {
    /**
     * @param [grid] The grid associated with this data.
     */
    constructor(grid?: ContourAbstractGrid);
    getModelLimits(): Rect;
    loadGrid(): ContourAbstractGrid;
    /**
     * Sets grid.
     * @param grid The grid associated with this data.
     */
    setGrid(grid: ContourAbstractGrid): this;
    freeGrid(grid: ContourAbstractGrid): void;
}
