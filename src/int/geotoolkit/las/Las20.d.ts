/**
 * @module geotoolkit/las/Las20
 */
import { LasParser } from '@int/geotoolkit/las/LasParser';
import { LasSectionGroup } from '@int/geotoolkit/las/LasSectionGroup';
import { LasParameterSection } from '@int/geotoolkit/las/LasParameterSection';
import type { LasSection } from '@int/geotoolkit/las/LasSection';
/**
 * LAS Parser for LAS version 2.0.
 */
export declare class Las20 extends LasParser {
    constructor();
    /**
     * Builds string input into our data structures.
     *
     * @param str input to parse
     * @returns with parsed contents
     * @throws {Error} when invoked to indicate the method should be overridden.
     */
    parse(str: string): LasSection.Options[];
    /**
     * Builds sections to be read
     */
    buildSections(): (LasParameterSection | LasSectionGroup)[];
}
