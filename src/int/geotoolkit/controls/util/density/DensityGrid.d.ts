/**
 * @module geotoolkit/controls/util/density/DensityGrid
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Transformation } from '@int/geotoolkit/util/Transformation';
/**
 * Computes contour polygons by applying marching squares to a rectangular array of numeric values.
 * Each node contains a density value.
 *
 * The grid coordinate system is orthogonal. The node indices may be only non-negative
 * (starting from 0). You may think about grid data as of two-dimensional array.
 */
export declare class DensityGrid extends EventDispatcher {
    constructor(options?: DensityGrid.Options);
    /**
     * Return X values
     * @returns x values
     */
    getX(): number[];
    /**
     * Set X values
     * @param x x values
     * @returns this
     */
    setX(x: number[]): this;
    /**
     * Return center of x values
     * @returns center x
     */
    getCenterX(): number;
    /**
     * Return Y values
     * @returns y values
     */
    getY(): number[];
    /**
     * Set Y values
     * @param y y values
     * @returns this
     */
    setY(y: number[]): this;
    /**
     * Return center of y values
     * @returns center y
     */
    getCenterY(): number;
    /**
     * Return average distance from center
     * @returns average distance
     */
    getAverageDistance(): number;
    /**
     * Set X Y values
     * @param x X values
     * @param y Y values
     * @returns this
     */
    setValues(x: number[], y: number[]): this;
    /**
     * Return model limits
     * @returns values model limits
     */
    getModelLimits(): Rect;
    /**
     * Set model limits
     * @param modelLimits values model limits
     * @returns this
     */
    setModelLimits(modelLimits: Rect | null): this;
    /**
     * Return grid dimension
     * @returns grid dimension
     */
    getGridDimension(): Dimension;
    /**
     * Set grid dimension
     * @param dimension grid dimension
     * @throws Error if passed parameter is null
     * @returns this
     */
    setGridDimension(dimension: Dimension): this;
    /**
     * Return grid size
     * @returns grid size
     */
    getGridSize(): Dimension;
    /**
     * Return cell size
     * @returns cell size
     */
    getCellSize(): number;
    /**
     * Set cell size
     * @param cellSize cell size
     * @returns this
     */
    setCellSize(cellSize: number): this;
    /**
     * Return thresholds
     * @returns thresholds
     */
    getThresholds(): number | number[] | ((value: Float32Array) => number);
    /**
     * Set thresholds
     * @param thresholds thresholds
     * @returns this
     */
    setThresholds(thresholds: number | number[] | ((value: Float32Array) => number)): this;
    /**
     * Return band width
     * @returns band width
     */
    getBandwidth(): number;
    /**
     * Set  band width
     * @param bandwidth band width
     * @throws Error if bandwidth < 0
     * @returns this
     */
    setBandwidth(bandwidth: number): this;
    /**
     * Return grid to model transformation
     * @returns grid to model transformation
     */
    getGridToModelTransformation(): Transformation;
    /**
     * Return density values
     * @returns packed density values
     */
    getDensityValues(): Float32Array;
    /**
     * Return density grid value at specified n m grid indices
     * @param n n index, horizontal
     * @param m m index, vertical
     * @returns density value
     */
    getDensityValueAt(n: number, m: number): number;
    /**
     * Return density contours coordinates
     * @returns density contours objects
     */
    getContours(): {
        value: number;
        coordinates: number[][][][];
    }[];
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): DensityGrid.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: DensityGrid.Options): this;
}
export declare namespace DensityGrid {
    /**
     * data
     */
    type Options = {
        /**
         * virtual grid dimension
         */
        dimension?: Dimension;
        /**
         * cell size
         */
        cellsize?: number;
        /**
         * band width
         */
        bandwidth?: number;
        /**
         * thresholds
         */
        thresholds?: number | number[] | ((value: Float32Array) => number);
        /**
         * raw X values
         */
        x?: number[];
        /**
         * raw Y values
         */
        y?: number[];
        /**
         * real model limits of X and Y values, by default it is calculated with using min and max values for specified data
         */
        modellimits?: Rect;
    };
    /**
     * properties
     */
    type OptionsOut = {
        /**
         * grid dimension
         */
        dimension?: Dimension;
        /**
         * cell size
         */
        cellsize?: number;
        /**
         * band width
         */
        bandwidth?: number;
        /**
         * thresholds
         */
        thresholds?: number | number[] | ((value: Float32Array) => number);
        /**
         * x values
         */
        x?: null | number[];
        /**
         * y values
         */
        y?: null | number[];
        /**
         * values modellimits
         */
        modellimits?: Rect | null;
    };
}
