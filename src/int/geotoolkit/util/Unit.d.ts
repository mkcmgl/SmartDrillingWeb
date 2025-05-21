/**
 * @module geotoolkit/util/Unit
 */
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
/**
 * Defines an interface, which represents an unit of measure,
 * the ratio for new unit is computed with: y=(a+b*x)/(c+d*x)
 */
export declare class Unit extends AbstractUnit {
    constructor(name?: Unit.Options);
    /**
     * @param [name] represent the name of the unit (example : 'pint') or properties object
     * @param [quantityType] represent the quantity type of the unit like length, time, pressure etc. (example: 'volume')
     * @param [symbol] symbol to represent the unit (example: 'pt' to represent pint)
     * @param [baseUnitSymbol] represents the unit symbol of it's base unit (example for volume, 'm3' can be the base unit)
     * @param [a] factor
     * @param [b] factor
     * @param [c] factor
     * @param [d] factor
     * @param [description] It represents the description of unit
     */
    constructor(name?: Unit | string, quantityType?: string[] | string, symbol?: string, baseUnitSymbol?: string, a?: number, b?: number, c?: number, d?: number, description?: string);
    /**
     * Converts value from base unit and gives value in current unit
     * @param value value to be converted
     */
    fromBaseUnit(value: number): number;
    /**
     * Converts value from current unit to base unit
     * @param value value to be converted
     */
    toBaseUnit(value: number): number;
    /**
     * Returns the quantityTypes of this unit
     */
    getQuantityType(): string[];
    /**
     * Returns the symbol of this unit
     */
    getSymbol(): string;
    /**
     * Returns baseUnitSymbol of this unit
     */
    getBaseUnitSymbol(): string;
    /**
     * Returns the name of the unit
     */
    getName(): string;
    /**
     * Returns the description of the unit
     * @returns unit name
     */
    getDescription(): string;
    /**
     * Convert value to other unit if conversation is possible and giver converted value(s) in other unit
     * @param value specific value(s) to be converted to other unit
     * @param other represents the other unit to which the values will be converted
     */
    convert(value: number, other: AbstractUnit | string): number;
    convert(value: number[], other: AbstractUnit | string): number[];
    /**
     * Returns whether the unit conversation is possible from this unit to other unit
     * @param other unit to be converted
     */
    canConvertTo(other: AbstractUnit | string): boolean;
    /**
     * Returns whether current unit belongs to the specified type(s)
     * @param type quantityType(s) to be tested
     */
    belongsTo(type: string | string[]): boolean;
    /**
     * Returns whether this unit is similar to other unit
     * @param other other
     */
    sameAs(other: AbstractUnit | string): boolean;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): Unit.Options;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Unit.Options): this;
    /**
     * Returns a clone of the unit.
     * @returns clone
     */
    clone(): Unit;
}
export declare namespace Unit {
    /**
     * represent the name of the unit (example : 'pint') or properties object
     */
    type Options = {
        /**
         * represent the name of the unit (example : 'pint')
         */
        name?: string;
        /**
         * represent the quantity type of the unit like length, time, pressure etc. (example: 'volume')
         */
        quantitytype?: string[];
        /**
         * symbol to represent the unit (example: 'pt' to represent pint)
         */
        symbol?: string;
        /**
         * represents the unit symbol of it's base unit (example for volume, 'm3' can be the base unit)
         */
        baseunitsymbol?: string;
        /**
         * factor
         */
        a?: number;
        /**
         * factor
         */
        b?: number;
        /**
         * factor
         */
        c?: number;
        /**
         * factor
         */
        d?: number;
        /**
         * It represents the description of unit
         */
        description?: string;
    };
}
