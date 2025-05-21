/**
 * Define an abstract implementation of a row of Array Log Data set
 */
export declare abstract class AbstractDataRow {
    protected constructor();
    /**
     * Return a count of the samples in the row
     */
    abstract getSize(): number;
    /**
     * Return the depth
     */
    abstract getDepth(): number;
    /**
     * Return the values
     * @param [values] optional buffer to fill values
     */
    abstract getValues(values?: number[]): number[];
    /**
     * Return the angles
     */
    abstract getAngles(): number[];
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): Record<string, any>;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties: Record<string, any>): this;
    static getClassName(): string;
    getClassName(): string;
}
