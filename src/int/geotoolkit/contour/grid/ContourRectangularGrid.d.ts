import { ContourAbstractGrid } from '@int/geotoolkit/contour/grid/ContourAbstractGrid';
import { GridRange } from '@int/geotoolkit/contour/grid/GridRange';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Point } from '@int/geotoolkit/util/Point';
import { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * A contour grid is rectangular grid of nodes.
 * Each node contains an altitude value. The dimensional characteristics of contour grid
 * are described with the help of {@link @int/geotoolkit/contour/grid/GridRange~GridRange} class.
 *
 * The grid coordinate system is orthogonal. The node indices may be only non-negative
 * (starting from 0). You may think about grid data as of two-dimensional array.
 */
export declare class ContourRectangularGrid extends ContourAbstractGrid {
    constructor(gridRange?: GridRange, data?: Float64Array);
    /**
     * Gets the model limits of the data
     * @returns model limits
     */
    getModelLimits(): Rect;
    /**
     * Sets the data using algorithms that depend on the number of parameters
     * @throws Error invalid number of arguments
     * @param x x-index, data array, or grid range
     * @param y y-index, or data array
     * @param value The value
     * @returns this
     */
    setData(x: number | Float64Array | GridRange, y: number | Float64Array, value: number): this;
    /**
     * Returns grid data
     * @returns data
     */
    getData(): Float64Array[];
    /**
     * Sets the grid data using specified data array. It is assumed that
     * the size of data array matches to dimensions of the current grid range.
     * @param data The data array
     * @returns this
     */
    setDataWithArray(data: Float64Array): this;
    /**
     * Sets the grid range and grid data using specified parameters.
     * It is assumed that the dimensions of new grid range match to
     * the size of data array.
     * @throws Error if data is null
     * @param range The new grid range
     * @param data The data array
     * @returns this
     */
    setDataWithRangeAndArray(range: GridRange, data: Float64Array): this;
    /**
     * Returns the grid data value by its coordinates in grid coordinate system.
     * @throws Error x or y is outside range
     * @param x The x-coordinate
     * @param y The x-coordinate
     */
    getValue(x: number, y: number): number;
    /**
     * Sets the grid data value by its coordinates in grid coordinate system.
     * @param x The x-coordinate
     * @param y The y-coordinate
     * @param value The new value
     * @returns this
     */
    setValue(x: number, y: number, value: number): this;
    /**
     * Determines whether the grid node with specified coordinates
     * doesn't have an altitude value (is a hole)
     * @throws Error x or y is outside range
     * @param x The x-coordinate
     * @param y The y-coordinate
     * @returns isHole True if the grid node with specified coordinates is a hole
     */
    isHole(x: number, y: number): boolean;
    /**
     * Tests if argument is hole value
     * @param value The value to be tested
     * @returns isHole True if the value is a hole.
     */
    isHoleValue(value: number): boolean;
    /**
     * Adds a value that will serve as an indicator for a hole in data grid.
     * It is assumed that grid data may have more than one hole value.
     * @param holeValue The hole value
     */
    addHoleValue(holeValue: number): void;
    /**
     * Empties the Grid
     */
    clearGrid(): void;
    /**
     * Gets the altitude at the give model point location.
     * @param modelPoint The model point
     * @returns value The model point's value
     */
    getValueAtModelPoint(modelPoint: Point): number;
    /**
     * Gets the maximum value in the contour grid.
     * If the max value has not been set this method
     * will scan whole grid to find maximum altitude
     * value (but only once, then it will remember it).
     * @returns max The maximum value
     */
    getMaxValue(): number;
    /**
     * Sets the maximum value in the contour grid
     * @param value The new maximum value
     * @returns this
     */
    setMaxValue(value: number): this;
    /**
     * Gets the minimum value in the contour grid.
     * If the min value has not been set this method
     * will scan whole grid to find minimal altitude
     * value (but only once, then it will remember it).
     * @returns min The minimum value
     */
    getMinValue(): number;
    /**
     * Sets the minimum value in the contour grid
     * @param value The new minimum value
     * @returns this
     */
    setMinValue(value: number): this;
    /**
     * Gets the border bits
     * @returns The border bits
     */
    getBorders(): number;
    /**
     * Sets the border bits
     * @param value The border bits
     * @returns this
     */
    setBorders(value: number): this;
    /**
     * Gets the Grid Range for contour grid.
     * @returns gridRange
     */
    getRange(): GridRange | null;
    /**
     * Sets the Grid Range for contour grid.
     * @param gridRange The grid z-value range.
     */
    setRange(gridRange: GridRange): void;
    /**
     * Returns grid rebuild state.
     * @returns needRebuild True if grid is to be rebuilt (data changed)
     */
    needRebuild(): boolean;
    /**
     * Gets the build range
     * @param netRange The range for the net
     * @param realRange The range for the data
     */
    getBuildRange(netRange: GridRange, realRange: GridRange): void;
    /**
     * Converts the model point to grid coordinates
     * @param modelPoint The model point
     * @returns gridPoint The grid point
     */
    getGridPointFromModelPoint(modelPoint: Point): Point;
    /**
     * Gets the grid-to-model transformation
     * @returns transformation Grid-To-Model transformation
     */
    getGridToModel(): Transformation;
    /**
     * Sets the grid-to-model transformation
     * @param transformation Grid-To-Model transformation
     */
    setGridToModel(transformation: Transformation): void;
    /**
     * Updates the data array with new data
     * @param data The new data
     */
    updateDataArray(data: Float64Array): void;
}
