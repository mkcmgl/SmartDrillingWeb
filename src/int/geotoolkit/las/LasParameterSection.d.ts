/**
 * @module geotoolkit/las/LasParameterSection
 */
import { LasSection } from '@int/geotoolkit/las/LasSection';
import { LasParameter } from '@int/geotoolkit/las/LasParameter';
/**
 * A section of LAS Data obtained from parser.
 */
export declare class LasParameterSection extends LasSection {
    constructor(section?: LasParameterSection.Options);
    /**
     * Added Comment
     * @param position displacement relative to header
     * @param comment comment
     */
    addComment(position: number, comment: string): this;
    /**
     * Set param
     * @throws Error if mnemonic is null
     * @param mnemonic mnemonic
     * @param unit unit
     * @param value value
     * @param description description
     */
    setParameter(mnemonic: string, unit: string, value: string | number, description?: string): this;
    /**
     * Gets value associated with mnemonic in parameter line
     * The value is parsed as string. It Will be either number or text.
     *
     * @param mnemonic parameter mnemonic
     */
    getParameterValue(mnemonic: string): number | string;
    /**
     * Gets parameter object associated with mnemonic in parameter line
     *
     * @param mnemonic parameter mnemonic
     */
    getParameter(mnemonic: string): LasParameter | null;
    getData(): LasParameter[];
}
export declare namespace LasParameterSection {
    /**
     * section
     */
    type Options = {
        /**
         * name
         */
        name?: string;
        /**
         * ndata
         */
        data?: LasParameter[] | string[];
    };
}
