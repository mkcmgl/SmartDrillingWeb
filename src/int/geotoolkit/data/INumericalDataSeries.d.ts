/**
 * Define a numerical data interface
 * @interface
 */
export declare abstract class INumericalDataSeries {
    /**
     * Returns min value
     * @param [unit] unit optional output unit to convert the data to (if none specified, data is not converted)
     * @returns min
     */
    abstract getMin(unit?: string): number;
    /**
     * Returns max value
     * @param [unit] unit optional output unit to convert the data to (if none specified, data is not converted)
     * @returns max
     */
    abstract getMax(unit?: string): number;
    getClassName(): string;
    static getClassName(): string;
}
