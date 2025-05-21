/**
 * @module geotoolkit/las/LasDataSection
 */
import { LasSection } from '@int/geotoolkit/las/LasSection';
/**
 * LAS Data Section built from an ASCII or _Data section. Holds arrays of data.
 */
export declare class LasDataSection extends LasSection {
    /**
     * Constructor
     * @param [section] section
     */
    constructor(section?: LasDataSection.Options);
    /**
     * Returns data from the section
     */
    getNumeric(): boolean[];
    getData(): (number | string | number[] | string[])[];
}
export declare namespace LasDataSection {
    /**
     * section
     */
    type Options = {
        /**
         * name
         */
        name?: string;
        /**
         * data
         */
        data?: (number | string | number[] | string[])[];
        /**
         * numeric
         */
        numeric?: boolean[];
    };
}
