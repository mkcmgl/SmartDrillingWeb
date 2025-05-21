/**
 * @module geotoolkit/contour/grid/GridRange
 */
import { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Stores the x,y grid extents for a contour grid object.
 */
export declare class GridRange {
    /**
     * @param [left] start index for coordinates arrays.
     * @param [bottom] start index for coordinates arrays.
     * @param [right] start index for coordinates arrays.
     * @param [top] start index for coordinates arrays.
     */
    constructor(left: number, bottom: number, right: number, top: number);
    constructor(range: GridRange);
    constructor();
    /**
     * The left extent of this grid range
     * @returns left
     */
    getLeft(): number;
    /**
     * The right extent of this grid range
     * @returns right
     */
    getRight(): number;
    /**
     * The bottom extent of this grid range
     * @returns bottom
     */
    getBottom(): number;
    /**
     * The top extent of this grid range
     * @returns top
     */
    getTop(): number;
    /**
     * The width of this grid range
     * @returns width
     */
    getWidth(): number;
    /**
     * The height of this grid range
     * @returns height
     */
    getHeight(): number;
    /**
     * Sets the range for this grid
     * @param left GridRange
     * @param bottom Bottom range extent
     * @param right Right range extent
     * @param top Top range extent
     * @returns this
     */
    setGridRange(left: number, bottom: number, right: number, top: number): this;
    /**
     * Sets the range for this grid
     * @param range GridRange
     * @returns this
     */
    setGridRange(range: GridRange): this;
    /**
     * Checks if the supplied point or range is contained within this one.
     * @param x X-coordinate
     * @param y Y-coordinate
     */
    contains(x: number, y: number): boolean;
    contains(range: GridRange): boolean;
    /**
     * Determines whether this grid range intersects with the supplied grid range.
     * @param range The grid range to check against
     * @returns intesects True if the two grid ranges intersect
     */
    intersects(range: GridRange): boolean;
    /**
     * Computes the intersection between this grid range and the specified grid range.
     * @param range The grid range
     * @returns intersection The intersected grid range.
     */
    intersection(range: GridRange): GridRange;
    /**
     * Determines if this range is empty
     * @returns empty True if the grid range is empty
     */
    isEmpty(): boolean;
    /**
     * Resets this grid range to be empty: Sets the size to zero, and the position to (0,0)
     */
    reset(): void;
    /**
     * Grid Range as a Rect object
     * @returns rect The range as a Rect.
     */
    getRect(): Rect;
    static getClassName(): string;
    getClassName(): string;
}
