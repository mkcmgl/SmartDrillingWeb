/**
 * @module geotoolkit/welllog/data/Log2DVisualData
 */
import { ArrayLogAbstractData } from '@int/geotoolkit/welllog/data/ArrayLogAbstractData';
import { Log2DDataRow } from '@int/geotoolkit/welllog/data/Log2DDataRow';
import { Order } from '@int/geotoolkit/util/Order';
/**
 * Log2DVisualData holds Log2DDataRow objects and is passed into a Log2DVisual.
 */
export declare class Log2DVisualData extends ArrayLogAbstractData {
    /**
     * Constructor
     * @param [props] object with properties
     */
    constructor(props?: Log2DVisualData.Options);
    /**
     * Constructor
     * @param [depths] array of depths
     * @param [values] array of values
     * @param [name] name of dataset
     */
    constructor(depths?: number[], values?: number[][], name?: string);
    /**
     * A array of the rows. if the data in changed then it is necessary to call
     * updateLimits to recalculate the data limits
     */
    getRows(): Log2DDataRow[];
    /**
     * Return number of rows
     * @returns number of rows
     */
    getNumberOfRows(): number;
    /**
     * Return a row by index
     * @param index index of the row
     * @returns a row
     */
    getRow(index: number): Log2DDataRow | null;
    /**
     * Return values
     */
    getValues(): number[][];
    /**
     * Return an array of depths
     */
    getDepths(): number[];
    /**
     * Set NDV.
     * All NDV values in the data will be deleted at the first rasterize
     * If you wish to change NDV after rasterize, please reload data
     *
     * @param ndv value used as NDV
     * @returns this
     */
    setNDVValue(ndv: number): this;
    /**
     * Get NDV
     *
     * @returns value used as NDV
     */
    getNDVValue(): number;
    /**
     * Get order of depths
     * @returns enum describing order of data
     */
    getDataOrder(): Order;
    /**
     * Recalculate depth limits and optional value limits
     *
     * @param calculateValues Recalculate depth limits and optional value limits or not
     * @returns this
     */
    calculateLimits(calculateValues: boolean): this;
    /**
     * Set the extreme values. If unknown or unspecified, please use calculateLimits
     * @param minDepth min depth limit
     * @param maxDepth max depth limit
     * @param minValue min value for all rows
     * @param maxValue max value for all rows
     * @returns this
     */
    setExtremumValues(minDepth: number, maxDepth: number, minValue: number, maxValue: number): this;
    /**
     * Recalculate depth and value limits
     * @returns this
     */
    updateLimits(): this;
    /**
     * Return minimum value
     */
    getMinValue(): number;
    /**
     * Return maximum value
     */
    getMaxValue(): number;
    /**
     * Return minimum depth
     */
    getMinDepth(): number;
    /**
     * Return maximum depth
     */
    getMaxDepth(): number;
    /**
     * Return minimum angle of columns in radians
     */
    getMinAngle(): number;
    /**
     * Return maximum angle of columns in radians
     */
    getMaxAngle(): number;
    /**
     * Add row
     *
     * @param row rows of values and angles at current depths
     */
    addRow(row: Log2DDataRow): void;
    /**
     * Notifies this shape that the data was changed outside of its knowledge
     */
    dataChanged(): void;
    /**
     * Add values
     *
     * @param depths array of depths
     * @param values sample values array
     */
    addValues(depths: number[], values: number[][]): void;
    /**
     * Sets passed values
     *
     * @param depths array of depths
     * @param values array of array values of current depths
     * @param angles array of angles
     */
    setValues(depths?: number[], values?: number[][], angles?: number[][]): this;
    /**
     * Cleans all data
     */
    clear(): this;
    /**
     * Inserts/Replace the given values at the correct place in the log.
     * This function works ONLY if the existing data is ordered.
     *
     * @example
     * // Depth Value
     * // 50     [0, 1]
     * // 100    [1, 2]
     * // 200    [2, 3]
     * // 300    [3, 4]
     *
     * mergeValue([0,100,150,500], [[-1,1],[-100,-200],[-150, -123],[-500, -200]])
     *
     * //   ----     Depth       Value
     * //   ===>       0           [-1,1]
     * //   ----      50            [0, 1]
     * //   ===>      100         [-100,-200]
     * //   ===>      150         [-150, -123]
     * //   ----      200           [2, 3]
     * //   ----      300           [3, 4]
     * //   ===>      500         [-500, -200]
     * @param depths array of depths
     * @param values array of array values of current depths
     * @param [angles] array angle values
     * @param [offsets] array of offsets
     * @param [existingOffsets] array of the current offsets. New offset will be merged to current offsets
     */
    mergeValues(depths: number[], values: number[][], angles?: number[][], offsets?: number[], existingOffsets?: number[]): void;
}
export declare namespace Log2DVisualData {
    /**
     * array of depths or object with properties
     */
    type Options = {
        /**
         * array of depths
         */
        depths?: number[];
        /**
         * array of values
         */
        values?: number[][];
        /**
         * name of dataset
         */
        name?: string;
    };
}
