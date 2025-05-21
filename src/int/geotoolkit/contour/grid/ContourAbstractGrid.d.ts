/**
 * @module geotoolkit/contour/grid/ContourAbstractGrid
 */
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { GridRange } from '@int/geotoolkit/contour/grid/GridRange';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Base class for a contour grid that has hole values and a grid-to-model transformation.
 * There are only two implementations for now: ContourRectangularGrid and ContourTriangularGrid.
 */
export declare abstract class ContourAbstractGrid {
    protected constructor();
    /**
     * The space reserve ratio
     */
    static get SpaceReserveRatio(): number;
    /**
     * Gets the Grid Range
     * @returns gridRange
     */
    abstract getRange(): GridRange | null;
    /**
     * Sets the Grid Range
     * @param gridRange The grid z-value range.
     */
    abstract setRange(gridRange: GridRange): void;
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
     * Gets the model limits of the data
     * @returns modelLimits
     */
    abstract getModelLimits(): Rect;
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
     * Returns grid rebuild state.
     * @returns needRebuild True if grid is to be rebuilt (data changed)
     */
    needRebuild(): boolean;
    /**
     * Gets the build range
     * @param netRange The range for the net
     * @param realRange The range for the data
     */
    abstract getBuildRange(netRange: GridRange, realRange: GridRange): void;
    /**
     * Converts the value that is not altered when setting to a Float64Array value.
     * @param value The value that will be converted to a safe double.
     * @returns safeValue The converted value.
     */
    convertToSafeFloat64(value: number): number;
    getClassName(): string;
    static getClassName(): string;
}
