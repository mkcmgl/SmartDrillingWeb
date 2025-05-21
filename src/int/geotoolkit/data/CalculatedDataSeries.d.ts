import { DataSeries } from '@int/geotoolkit/data/DataSeries';
import type { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Read-only data series view which calculates values, depending on other series
 * @example
 * // using callback
 * const ds1 = new NumericalDataSeries({'data': [1, 4, 6, 7]}).setName('alfa');
 * const ds2 = new NumericalDataSeries({'data': [1, 4, 6, 7]}).setName('beta');
 *
 * const calcds = new CalculatedDataSeries({
 *     'name': 'calculated',
 *     'sources': [ds1, ds2],
 *     'formula': (val) => val('alfa') + val('beta')
 * });
 * @example
 * // using string
 * const ds1 = new NumericalDataSeries({'data': [1, 4, 6, 7]}).setName('alfa');
 * const ds2 = new NumericalDataSeries({'data': [1, 4, 6, 7]}).setName('beta');
 *
 * const calcds = new CalculatedDataSeries({
 *     'name': 'calculated',
 *     'sources': [ds1, ds2],
 *     'formula': '2 * alfa + beta'
 * });
 */
export declare class CalculatedDataSeries<T = any> extends DataSeries<T> {
    constructor(options?: CalculatedDataSeries.Options<T>);
    protected copyConstructor(src: CalculatedDataSeries<T>, copyData?: boolean): this;
    /**
     * Set formula. String version supports Math functions such as cos, sin, sqrt etc.
     * @param [formula] callback or string to calculate values of the series
     * @example
     * const ds1 = new NumericalDataSeries({'data': [1.1, 1.4, 1.6, 1.7]}).setName('alfa');
     *
     * const calcds = new CalculatedDataSeries({
     *       'name': 'calculated',
     *       'sources': [ds1]
     * });
     * calcds.setFormula('round(alfa)');
     */
    setFormula(formula?: CalculatedDataSeries.FormulaCallback<T> | string): this;
    /**
     * Does nothing
     * @param value a new value
     * @returns this
     */
    addValue(value: T): this;
    /**
     * Does nothing
     * @param array an array of values
     * @returns this
     */
    addValues(array: T[]): this;
    /**
     * Does nothing
     * @param index the index number where to insert the value.
     * @param value the value to insert
     * @returns this
     */
    insertValue(index: number, value: T): this;
    /**
     * Does nothing
     * @param index the index number where to insert the values. Values will be added starting at the index number.
     * @param array the array of values to insert
     * @returns this
     */
    insertValues(index: number, array: T[]): this;
    /**
     * Does nothing
     * @param index the index should be a number greater than or equal to zero, and less than the number of values as returned by getLength() method.
     * @param value value to set
     * @returns this
     */
    setValue(index: number, value: T): this;
    /**
     * Does nothing
     * @param array an array of values to set
     * @param [copy] make a deep copy of the values
     * @returns this
     */
    setValues(array: T[], copy?: boolean): this;
    /**
     * Does nothing
     * @param index the index number where to start removing the values
     * @param [count] the amount of values to remove
     * @returns this
     */
    removeValues(index: number, count?: number): this;
    /**
     * Does nothing
     * @returns this
     */
    clearValues(): this;
    /**
     * Returns an array of objects in the data series.
     *
     * @param [copy] whether creating a copy of data
     * @param [unit] unit optional output unit to convert the data to. if not specified, data will not be converted
     */
    toArray(copy?: boolean, unit?: string | AbstractUnit): T[];
    /**
     * Returns true
     * @returns true
     */
    isReadOnly(): boolean;
    /**
     * Set sources
     * @param [sources] set of sources to be used by function
     * @returns this
     */
    setSources(sources?: AbstractDataSeries<T>[]): this;
}
export declare namespace CalculatedDataSeries {
    /**
     * options
     */
    type Options<T = any> = DataSeries.Options & {
        /**
         * callback or string to calculate values of the series
         */
        formula?: FormulaCallback<T> | string;
        /**
         * set of sources to be used by function
         */
        sources?: AbstractDataSeries<T>[];
        /**
         * inherited parameter will be ignored
         */
        data?: any[];
    };
    /**
     * Defines function for formula
     */
    type FormulaCallback<T = any> = (val: (name: string) => T) => T;
}
