/**
 * A utility class with useful methods for statistics operations
 * Ported from the Saddleback Geosolution's Java implementation
 */
export declare class DataStatistics {
    /**
     * Find the maximum value of the array
     * @param inputData The input data
     * @param minIndex minimum data index
     * @param maxIndex maximum data index
     * @returns max The maximum value of the array
     */
    static max(inputData: number[], minIndex: number, maxIndex: number): number;
    /**
     * Find the minimum value of the array
     * @param inputData The input data
     * @param minIndex minimum data index
     * @param maxIndex maximum data index
     * @returns min The minimum value of the array
     */
    static min(inputData: number[], minIndex: number, maxIndex: number): number;
    /**
     * Find the sum of all the array values
     * @param inputData The input data
     * @param minIndex minimum data index
     * @param maxIndex maximum data index
     * @returns sum The sum of all the array values
     */
    static sum(inputData: number[], minIndex: number, maxIndex: number): number;
    /**
     * Find the sum of absolute values of all array values
     * @param inputData The input data
     * @param minIndex minimum data index
     * @param maxIndex maximum data index
     * @returns absSum, The sum of absolute values of all array values
     */
    static mean(inputData: Float32Array, minIndex?: number, maxIndex?: number): number;
    /**
     * Find the sum of absolute values of all array values
     * @param inputData The input data
     * @param minIndex minimum data index
     * @param maxIndex maximum data index
     * @returns absSum, The sum of absolute values of all array values
     */
    static sumAbs(inputData: number[], minIndex: number, maxIndex: number): number;
    /**
     * Find the closest whole number (towards zero) to the number specified
     * @param value The value to be fixed
     * @returns fixedValue, The fixed value
     */
    static fix(value: number): number;
    static getClassName(): string;
    getClassName(): string;
}
