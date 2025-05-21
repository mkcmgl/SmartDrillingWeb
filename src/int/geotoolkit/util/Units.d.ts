/**
 * This utility class provides functions used to convert units to number
 */
export declare class Units {
    /**
     * Return number from value
     * @param value value as absolute or percentage value from maxValue
     * @param [maxValue] maximum value
     * @param [defaultValue] default value if val is null
     */
    static getNumber(value: string | number, maxValue?: number, defaultValue?: number): null | number;
}
