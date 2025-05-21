import { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Type of state changes
 * @enum
 * @readonly
 */
export declare enum StateChanges {
    /**
     * Added new values
     */
    Added = "added",
    /**
     * Removed values
     */
    Removed = "removed"
}
/**
 * Define a generic series of data to be used for any type.
 */
export declare class DataSeries<T = any> extends AbstractDataSeries<T> {
    constructor(options?: DataSeries.Options<T>);
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     *
     * @param src Source to copy from
     * @param [copyData] copy data
     */
    protected copyConstructor(src: DataSeries<T>, copyData?: boolean): this;
    /**
     * Returns false
     * @returns false
     */
    isReadOnly(): boolean;
    /**
     * Set function which can be used to calculate some value (e.g. sum, avg etc.)
     * @param name name of function or parameters object
     * @param [func] handler, use null to unset
     * @param [desc] description
     * @example
     * DataSeries.setFormula('concat', (series) => {
     *     return series.toArray().join(' ');
     * });
     * const series = new DataSeries({
     *     'type': 'string',
     *     'data': ['just', 'some', 'text']
     * });
     * console.log(series.calculate('concat')); // 'just some text'
     */
    static setFormula(name: DataSeries.FormulaDescription | string, func?: DataSeries.Formula, desc?: string): void;
    /**
     * List formulas
     */
    static getFormulas(): string[];
    /**
     * Get formula's description
     * @param [name] name of function
     */
    static getFormulaDescription(name?: string): string;
    /**
     * Run function. See available formulas list by {@link import("geotoolkit/data/DataSeries").DataSeries.getFormulas}
     * @param name name
     */
    calculate(name: string): any;
    /**
     * Adds a value to the data series.
     * @param value a new value
     * @returns this
     */
    addValue(value: T): this;
    /**
     * Adds an array of values to the data series.
     * @param array an array of values
     * @returns this
     */
    addValues(array: T[]): this;
    /**
     * Inserts a value at the specified index.
     * @param index the index number where to insert the value.
     * @param value the value to insert
     * @returns this
     */
    insertValue(index: number, value: T): this;
    /**
     * Inserts an array of values at the specified index.
     * @param index the index number where to insert the values. Values will be added starting at the index number.
     * @param array the array of values to insert
     * @returns this
     */
    insertValues(index: number, array: T[]): this;
    /**
     * Returns the value at given index.
     * @param index the index should be a number greater than or equal to zero, and less than the number of values as returned by getLength() method.
     */
    getValue(index: number): T;
    /**
     * Sets the value at given index.
     * @param index the index should be a number greater than or equal to zero, and less than the number of values as returned by getLength() method.
     * @param value value to set
     * @returns this
     */
    setValue(index: number, value: T): this;
    /**
     * Sets an array of values to the data series.
     * @param array an array of values to set
     * @param [copy] make a deep copy of the values
     * @returns this
     */
    setValues(array: T[], copy?: boolean): this;
    /**
     * Removes a specified amount of values at the specified index.
     * @param index the index number where to start removing the values
     * @param [count] the amount of values to remove
     * @returns this
     */
    removeValues(index: number, count?: number): this;
    /**
     * Clears all values of the data series.
     * @returns this
     */
    clearValues(): this;
    toArray(copy?: boolean, unit?: string | AbstractUnit): T[];
    protected convertValues<U extends T | T[]>(values: U, fromUnit?: string | AbstractUnit, toUnit?: string | AbstractUnit): U;
    getLength(): number;
    /**
     * Sets unit of the data series.
     * @param [unit] unit to be set
     * @returns this
     */
    setUnit(unit?: string | AbstractUnit): this;
    getUnit(): AbstractUnit;
    setProperties(properties?: DataSeries.Options): this;
    getProperties(): DataSeries.OptionsOut;
}
export declare namespace DataSeries {
    /**
     * JSON options object
     */
    type Options<T = any> = AbstractDataSeries.Options & {
        /**
         * unit of the data series
         */
        unit?: string | AbstractUnit;
        /**
         * an array of data
         */
        data?: T[];
    };
    /**
     * name of function or parameters object
     */
    type FormulaDescription = {
        /**
         * name of function
         */
        name?: string;
        /**
         * handler, use null to unset
         */
        func?: Formula;
        /**
         * description
         */
        desc?: string;
    };
    /**
     * Function to calculate
     */
    type Formula = (dataSeries: DataSeries) => any;
    /**
     * JSON options object
     */
    type OptionsOut = AbstractDataSeries.OptionsOut & {
        /**
         * unit of the data series
         */
        unit?: string | AbstractUnit;
    };
}
