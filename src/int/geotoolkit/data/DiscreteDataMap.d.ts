/**
 * @module geotoolkit/data/DiscreteDataMap
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
/**
 * Disrete map type
 * if the type is "Continuous", then the "ranges" parameter is used, which determines the inclusion in the range.
 * If the type is "Discrete", then the "codes" parameter is used to determine if the parameter falls within the set of specified values.
 * @enum
 * @readonly
 */
export declare enum MapType {
    /**
     * discrete
     */
    Discrete = "Discrete",
    /**
     * continuous
     */
    Continuous = "Continuous"
}
/**
 * Defines log discrete value map. It maps value ranges or value codes to corresponding values based on continues or discrete type of the map.
 */
export declare class DiscreteDataMap<T = any> extends EventDispatcher {
    constructor(options?: DiscreteDataMap.Options<T>);
    /**
     * Return mapped object for specified value
     * @param value value index
     * @returns corresponding value
     */
    getValueAt(value: number): T;
    /**
     * Returns array of ranges
     * @returns ranges array of ranges
     */
    getRanges(): number[][];
    /**
     * Sets array of ranges
     * @param ranges array of ranges
     * @returns this
     */
    setRanges(ranges: number[][]): this;
    /**
     * Returns array of ranges
     * @returns codes array of codes
     */
    getCodes(): number[];
    /**
     * Sets array of codes
     * @param codes array of codes
     * @returns this
     */
    setCodes(codes: number[]): this;
    /**
     * Returns data map type
     * @returns map type
     */
    getMapType(): MapType;
    /**
     * Sets data map type
     * @param mapType map type
     * @returns this
     */
    setMapType(mapType: MapType): this;
    /**
     * Returns array of values
     * @returns values list of values
     */
    getValues(): T[];
    /**
     * Sets array of values
     * @param values list of values
     * @returns this
     */
    setValues(values: T[]): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): DiscreteDataMap.OptionsOut<T>;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: DiscreteDataMap.Options<T>): this;
}
export declare namespace DiscreteDataMap {
    /**
     * properties object
     */
    type Options<T = any> = {
        /**
         * list of values
         */
        values?: T[];
        /**
         * data type to specify usage codes or ranges
         */
        type?: MapType;
        /**
         * array of ranges
         */
        ranges?: number[][];
        /**
         * code value for each section
         */
        codes?: number[];
    };
    type OptionsOut<T = any> = {
        /**
         * data map type
         */
        type: MapType;
        /**
         * list of values
         */
        values: T[];
        /**
         * array of ranges
         */
        ranges: number[][];
        /**
         * array of codes
         */
        codes: number[];
    };
}
