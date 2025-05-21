/**
 * A single parameter line of LAS data
 */
export declare class LasParameter {
    /**
     * Constructor
     * @param options curve properties object
     */
    constructor(options: LasParameter.Options);
    /**
     * Constructor
     * @param [mnemonic] curve mnemonic
     * @param [unit] data unit
     * @param [value] value of parameter
     * @param [description] description field
     */
    constructor(mnemonic?: string, unit?: string, value?: string, description?: string);
    /**
     * Parameter name
     */
    getName(): string;
    /**
     * Mnemonic field
     */
    getMnemonic(): string;
    /**
     * Return unit
     */
    getUnit(): string;
    /**
     * Sets unit
     * @param value value
     */
    setUnit(value: string): this;
    /**
     * Returns value of parameter
     */
    getValue(): string;
    /**
     * Sets value
     * @param value value
     */
    setValue(value: string): this;
    /**
     * Return description field
     */
    getDescription(): string;
    /**
     * Sets description
     * @param value value
     */
    setDescription(value: string): this;
    /**
     * Return object properties
     */
    getProperties(): LasParameter.Options;
    /**
     * Return object properties
     * @param properties properties object
     */
    setProperties(properties?: LasParameter.Options): this;
}
export declare namespace LasParameter {
    /**
     * curve mnemonic or properties object
     */
    type Options = {
        /**
         * mnemonic
         */
        mnemonic?: string;
        /**
         * value
         */
        value?: string;
        /**
         * unit
         */
        unit?: string;
        /**
         * description
         */
        description?: string;
    };
}
