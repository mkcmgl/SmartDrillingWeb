import type { LasParser } from '@int/geotoolkit/las/LasParser';
/**
 * class to create instances of LAS parsers
 */
export declare class ParserFactory {
    /**
     * Return parser appropriate parser for LAS content
     * @param data LAS content
     * @param [autoparse] call parse() method
     */
    static getParser(data: string, autoparse?: boolean): LasParser | null;
    /**
     * Detects the type of an LAS file as LAS 2.0 or 3.0 or -1 if neither of two
     *
     * @param data LAS content
     */
    static detectType(data: string): number;
}
