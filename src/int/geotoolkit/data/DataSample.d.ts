/**
 * Represent a processed data sample
 */
export declare class DataSample {
    constructor(options?: DataSample.Options);
    constructor(position?: number, value?: number, level?: number, valid?: boolean, srcIndex?: number);
    /**
     * Check if sample is null
     */
    isNull(): boolean;
    /**
     * Sets position
     * @param position position
     * @returns this
     */
    setPosition(position: number): this;
    /**
     * Return position
     */
    getPosition(): number;
    /**
     * Returns original value of the sample
     */
    getOriginalValue(): number;
    /**
     * Sets value of the sample
     * @param value value
     * @returns this
     */
    setValue(value: number): this;
    /**
     * Returns value of the sample
     */
    getValue(): number;
    /**
     * Sets wrap level
     * @param level level
     * @returns this
     */
    setLevel(level: number): this;
    /**
     * Return level of the wrap
     */
    getLevel(): number;
    /**
     * Sets status of the sample
     * @param valid valid
     * @returns this
     */
    setValid(valid: boolean): this;
    /**
     * Return sample status
     */
    getValid(): boolean;
    /**
     * Sets original index
     * @param srcIndex src index
     * @returns this
     */
    setOriginalIndex(srcIndex: number): this;
    /**
     * Get original index in the data set
     */
    getOriginalIndex(): number;
    /**
     * Create clone
     * @returns clone
     */
    clone(): DataSample;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): DataSample.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties?: DataSample.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace DataSample {
    /**
     * JSON properties object
     */
    type Options = {
        /**
         * position
         */
        position?: number;
        /**
         * value
         */
        value?: number;
        /**
         * level
         */
        level?: number;
        /**
         * valid or not
         */
        valid?: boolean;
        /**
         * source index
         */
        index?: number;
    };
    /**
     * JSON properties object
     */
    type OptionsOut = Required<Options>;
}
