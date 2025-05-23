/**
 * @module geotoolkit/las/LasParser
 */
import { LasParameterSection } from '@int/geotoolkit/las/LasParameterSection';
import { LasSectionGroup } from '@int/geotoolkit/las/LasSectionGroup';
/**
 * LAS Parser
 */
export declare abstract class LasParser {
    /**
     * This parser will be generated by JSON using parser grammar
     *
     * @param str input to parse
     * @throws {Error} when invoked to indicate the method should be overridden.
     */
    abstract parse(str: string): void;
    /**
     * Private method to build parsed data into section data structures
     */
    protected abstract buildSections(): (LasParameterSection | LasSectionGroup)[];
    /**
     * Returns all sections not part of a group
     *
     * @throws {Error} when invoked to indicate the method should be overridden.
     * @returns array of LasSection
     */
    getSections(): LasParameterSection[];
    /**
     * Gets all the section groups. Doesn't include sections not in groups.
     *
     * @returns array of LasSectionGroup
     */
    getSectionGroups(): LasSectionGroup[];
    /**
     * Detects the type of an LAS file wrap or not. Works for all LAS
     *
     * @returns wrap
     * @param str the LAS file to be searched
     */
    detectWrap(str: string): boolean;
    /**
     * Searches through whole LAS file to determine index unit
     *
     * @param str detectIndexUnit
     */
    detectIndexUnit(str: string): string;
}
