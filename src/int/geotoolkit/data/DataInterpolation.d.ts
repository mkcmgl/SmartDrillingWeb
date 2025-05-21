import type { DataValueArray } from '@int/geotoolkit/data/DataValueArray';
/**
 * The DataInterpolation interface defines a set of methods that allow you to synthetically generate points<br>
 * between two depth values that define how the curve for the data will be drawn.<br>
 * Interpolation objects are used to modify the default linear interpolation between two depth values defined in a <br>
 * particular well log data source (LogData) before being sent to the rendering system.<br>
 * Interpolation objects modify the flow of data values by adding generated points in between two depth values that are drawn.<br>
 * Interpolation objects do not modify the source data. They only generate new values between two existing depth values. <br>
 * Interpolation objects were designed to be extensible to meet the requirements of well log visualization.
 */
export declare abstract class DataInterpolation {
    /**
     * Interpolate array of samples
     * @param start The start index
     * @param count The count of samples to interpolate
     * @param input The input data
     * @param output The output data
     * @returns true if interpolation is successful
     * @throws {Error} when invoked to indicate the method should be overridden.
     */
    abstract interpolate(start: number, count: number, input: DataValueArray, output: DataValueArray): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing properties
     */
    getProperties(): Record<string, any>;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties: Record<string, any>): this;
    static getClassName(): string;
    getClassName(): string;
}
