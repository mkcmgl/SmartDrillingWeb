/**
 * Defines abstract class for formatting numbers, dates and time
 */
export declare abstract class Format {
    /**
     * Formats object to string
     * @param num number
     */
    abstract format(num: number | object): string;
    /**
     * All inheritors should implement copy constructor or provide custom implementation for this method
     * @returns clone
     */
    clone(): Format;
    protected copyConstructor(src: Format): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): Record<string, any>;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Record<string, any>): this;
    static getClassName(): string;
    getClassName(): string;
}
