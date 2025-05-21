/**
 * @module geotoolkit/welllog/data/Log2DDataRow
 */
import { AbstractDataRow } from '@int/geotoolkit/welllog/data/AbstractDataRow';
/**
 * One line of 2D Data to be passed into Log2DVisualData. After being built can be added to a Log2DVisualData
 * by pushing it to getRows().
 */
export declare class Log2DDataRow extends AbstractDataRow {
    /**
     * Constructor
     * @param [options] options object
     */
    constructor(options?: Log2DDataRow.Options);
    /**
     * Constructor
     * @param [depth] depth
     * @param [values] array of values
     * @param [angles] array of angles in radians
     */
    constructor(depth?: number, values?: number[], angles?: number[]);
    /**
     * Sets data
     *
     * @param values values
     * @param angles angles in radians
     */
    setData(values: number[], angles: number[]): this;
    /**
     * Add single data
     *
     * @param value value
     * @param angle angle in radians
     */
    addData(value: number, angle: number): this;
    /**
     * Return a count of the samples in the row
     */
    getSize(): number;
    /**
     * Return the depth
     */
    getDepth(): number;
    /**
     * Return the values
     * @param [values] optional buffer to fill values
     */
    getValues(values?: number[]): number[];
    /**
     * Return the angles
     */
    getAngles(): number[];
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): Log2DDataRow.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: Log2DDataRow.Options): this;
}
export declare namespace Log2DDataRow {
    /**
     * depth or properties object
     */
    type Options = {
        /**
         * depth
         */
        depth?: number;
        /**
         * values
         */
        values?: number[];
        /**
         * angles
         */
        angles?: number[];
    };
    /**
     * properties object
     */
    type OptionsOut = {
        /**
         * depth
         */
        depth: number;
        /**
         * values
         */
        values: number[];
        /**
         * angles
         */
        angles: number[];
    };
}
