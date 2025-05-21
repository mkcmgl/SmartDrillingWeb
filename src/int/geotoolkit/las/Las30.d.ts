/**
 * @module geotoolkit/las/Las30
 */
import { LasParser } from '@int/geotoolkit/las/LasParser';
import { LasParameterSection } from '@int/geotoolkit/las/LasParameterSection';
import { LasSectionGroup } from '@int/geotoolkit/las/LasSectionGroup';
/**
 * LAS 3.0 parser implementation
 */
export declare class Las30 extends LasParser {
    constructor();
    /**
     * Parser done by hand to parse LAS 3.0 files
     *
     * @param str input to parse
     * @returns valid: ran successfully or not
     */
    parse(str: string): boolean;
    /**
     * Builds parsed data into section data structures
     */
    protected buildSections(): (LasParameterSection | LasSectionGroup)[];
}
