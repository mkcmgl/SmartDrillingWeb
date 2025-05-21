/**
 * @module geotoolkit/las/LasSection
 */
import type { LasParameter } from '@int/geotoolkit/las/LasParameter';
import type { LasDataSection } from '@int/geotoolkit/las/LasDataSection';
import type { LasParameterSection } from '@int/geotoolkit/las/LasParameterSection';
/**
 * A section of LAS Data obtained from parser.
 */
export declare class LasSection {
    /**
     * Constructor
     * @param params section info
     */
    constructor(params: LasSection.Options);
    /**
     * Constructor
     * @param [name] section name
     * @param [data] data in current section
     */
    constructor(name?: string, data?: LasSection.Data);
    /**
     * Gets name
     */
    getName(): string;
    /**
     * Set section name
     * @param name section name
     */
    setName(name: string): this;
    /**
     * Gets data
     */
    getData(): LasSection.Data;
    /**
     * Sets data
     *
     * @param data data
     */
    setData(data: LasSection.Data): this;
    /**
     * Gets associations of this section
     */
    getAssociations(): string;
}
export declare namespace LasSection {
    /**
     * section
     */
    type Options = LasParameterSection.Options | LasDataSection.Options;
    type Data = LasParameter[] | (number | string | number[] | string[])[];
}
