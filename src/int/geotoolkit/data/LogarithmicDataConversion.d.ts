/**
 * @module geotoolkit/data/LogarithmicDataConversion
 */
import { DataConversion } from '@int/geotoolkit/data/DataConversion';
import type { NormalizeDataConversion } from '@int/geotoolkit/data/NormalizeDataConversion';
/**
 * Convert logarithmic value to linear and back
 */
export declare class LogarithmicDataConversion extends DataConversion {
    constructor(options?: LogarithmicDataConversion.Options);
    constructor(coeff?: number, base?: number, logLow?: number, logHigh?: number, trackLow?: number, trackHigh?: number, logMin?: number, normalizeConversion?: NormalizeDataConversion);
    /**
     * Direct convert
     *
     * @param v the number to be converted
     */
    direct(v: number): number;
    /**
     * Reverse convert
     *
     * @param v the number to reverse convert
     */
    reverse(v: number): number;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): LogarithmicDataConversion.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: LogarithmicDataConversion.Options): this;
}
export declare namespace LogarithmicDataConversion {
    /**
     * JSON properties object
     */
    type Options = {
        /**
         * coefficient
         */
        coeff?: number;
        /**
         * logarithmic base
         */
        base?: number;
        /**
         * logmin
         */
        logmin?: number;
        /**
         * low value
         */
        loglow?: number;
        /**
         * high value
         */
        loghigh?: number;
        /**
         * track lower value
         */
        tracklow?: number;
        /**
         * track high value
         */
        trackhigh?: number;
        /**
         * normalizeConversion
         */
        normalizeconversion?: NormalizeDataConversion;
    };
    /**
     * JSON properties object
     */
    type OptionsOut = {
        /**
         * coefficient
         */
        coeff: number;
        /**
         * logarithmic base
         */
        base: number;
        /**
         * logmin
         */
        logmin: number;
        /**
         * normalizeConversion
         */
        normalizeconversion: DataConversion;
    };
}
