/**
 * The DataConversion interface class defines the base conversion operations
 * that must be implemented by all conversion objects. Conversion
 * objects are used to modify the values before being sent to the rendering system.
 * Conversion objects simply modify
 * the flow of data values from their current coordinate system to a new
 * coordinate system. This destination coordinate system may be another linear
 * coordinate system or a non-linear mapping like logarithmic. Conversion
 * objects are only associated with the value component of data
 * source. The position component of data source is never modified.
 */
export declare abstract class DataConversion {
    /**
     * Direct convert
     * @param v value to convert
     * @throws {Error} when invoked to indicate the method should be overridden.
     */
    abstract direct(v: number): number;
    /**
     * Reverse convert
     * @param v value to convert
     * @throws {Error} when invoked to indicate the method should be overridden.
     */
    abstract reverse(v: number): number;
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
