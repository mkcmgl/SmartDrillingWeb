import type { Rect } from '@int/geotoolkit/util/Rect';
import type { ContourAbstractGrid } from '@int/geotoolkit/contour/grid/ContourAbstractGrid';
/**
 * Abstract datasource that supplies data for contour.
 * Data are supplied as a set of grids. Contour building
 * algorithm calls 'Query' method to get the enumerator
 * that enumerates set of grids appropriate for given model
 * rectangle and model-to-device transformation.
 * Contour building algorithm calls 'LoadGrid' on enumerator
 * to load grid into memory and get access to its data.
 */
export declare abstract class AbstractContourDataSource {
    /**
     * Gets the model limits of contour data.
     * @returns modelLimits The rectangle that contains all data grids,
     */
    abstract getModelLimits(): Rect;
    /**
     * Loads grid into memory.
     * @returns grid The loaded grid.
     */
    abstract loadGrid(): ContourAbstractGrid;
    /**
     * Release memory occupied by the grid.
     * @param grid The grid that contains points.
     */
    abstract freeGrid(grid: ContourAbstractGrid): void;
    /**
     * Gets the datasource properties
     * @returns properties datasource properties
     */
    getProperties(): Record<string, any>;
    /**
     * Sets the datasource properties
     * @param properties datasource properties
     * @returns this
     */
    setProperties(properties: Record<string, any>): this;
    static getClassName(): string;
    getClassName(): string;
}
