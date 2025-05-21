/**
 * An interface that represents an unit
 */
export declare abstract class AbstractUnit {
    /**
     * Convert unit value from base unit
     * @param value value to be converted
     * @returns converted
     */
    abstract fromBaseUnit(value: number): number;
    /**
     * Convert unit value to base unit
     * @param value value to be converted
     * @returns converted
     */
    abstract toBaseUnit(value: number): number;
    /**
     * Unit symbol
     * @returns unit symbol
     */
    abstract getSymbol(): string;
    /**
     * get the Quantity types of the unit
     * @returns quantity types
     */
    abstract getQuantityType(): string[];
    /**
     * Returns unit name
     * @returns unit name
     */
    abstract getName(): string;
    /**
     * Returns unit description
     * @returns unit name
     */
    abstract getDescription(): string;
    /**
     * Convert the value to a specific unit if <code>canConvertTo</code>
     * @param value value to be converted
     * @param other other unit to be converted
     * @returns converted
     */
    abstract convert(value: number, other: AbstractUnit | string): number;
    abstract convert(value: number[], other: AbstractUnit | string): number[];
    abstract convert(value: number | number[], other: AbstractUnit | string): number | number[];
    /**
     * Check if a unit can be converted from the current unit
     * @param other unit to be converted
     * @returns true if a unit can be converted from the specific unit
     */
    abstract canConvertTo(other: AbstractUnit | string): boolean;
    /**
     * Check if the unit belongs to the type
     * @param type quantity type to be tested
     * @returns result
     */
    abstract belongsTo(type: string): boolean;
    /**
     * Compares this unit with another unit
     * @param other
     */
    abstract sameAs(other: AbstractUnit | string): boolean;
    /**
     * Returns base unit symbol
     * @returns base unit symbol
     */
    abstract getBaseUnitSymbol(): string;
    /**
     * Gets the properties
     * @returns props properties
     */
    getProperties(): Record<string, any>;
    /**
     * Sets the properties
     * @param [props] properties
     * @returns this
     */
    setProperties(props?: Record<string, any>): this;
    getClassName(): string;
    static getClassName(): string;
}
