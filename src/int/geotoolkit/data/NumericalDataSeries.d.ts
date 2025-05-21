import { DataSeries } from '@int/geotoolkit/data/DataSeries';
import { INumericalDataSeries } from '@int/geotoolkit/data/INumericalDataSeries';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Define a numerical series of data
 * It has predefined 'sum' and 'avg' formulas to use with {@link import("geotoolkit/data/NumericalDataSeries").NumericalDataSeries.calculate}
 */
export declare class NumericalDataSeries extends DataSeries<number> implements INumericalDataSeries {
    constructor(options?: NumericalDataSeries.Options);
    clone: (copyData?: boolean) => NumericalDataSeries;
    /**
     * Adds a value to the data series.
     * @param value a new value
     * @returns this
     */
    addValue(value: number): this;
    /**
     * Adds an array of values to the data series.
     * @param array an array of values
     * @returns this
     */
    addValues(array: number[]): this;
    /**
     * Inserts a value at the specified index.
     * @param index the index number where to insert the value.
     * @param value the value to insert
     * @returns this
     */
    insertValue(index: number, value: number): this;
    /**
     * Inserts an array of values at the specified index.
     * @param index the index number where to insert the values. Values will be added starting at the index number.
     * @param array the array of values to insert
     * @returns this
     */
    insertValues(index: number, array: number[]): this;
    /**
     * Sets the value at given index.
     * @param index the index should be a number greater than or equal to zero, and less than the number of values as returned by getLength() method.
     * @param value value to set
     * @returns this
     */
    setValue(index: number, value: number): this;
    /**
     * Sets an array of values to the data series.
     * @param array an array of values to set
     * @param [copy] make a deep copy of the values
     * @returns this
     */
    setValues(array: number[], copy?: boolean): this;
    /**
     * Returns min value
     * @param [unit] unit optional output unit to convert the data to (if none specified, data is not converted)
     * @returns min
     */
    getMin(unit?: string | AbstractUnit): number;
    /**
     * Returns max value
     * @param [unit] unit optional output unit to convert the data to (if none specified, data is not converted)
     * @returns max
     */
    getMax(unit?: string | AbstractUnit): number;
    protected convertValues<U extends number | number[]>(values: U, fromUnit?: string | AbstractUnit, toUnit?: string | AbstractUnit): U;
}
export declare namespace NumericalDataSeries {
    /**
     * JSON options object
     */
    type Options = DataSeries.Options<number>;
}
