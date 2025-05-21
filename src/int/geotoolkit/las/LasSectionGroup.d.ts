/**
 * @module geotoolkit/las/LasSectionGroup
 */
import type { LasParameterSection } from '@int/geotoolkit/las/LasParameterSection';
import type { LasParameter } from '@int/geotoolkit/las/LasParameter';
import type { LasDataSection } from '@int/geotoolkit/las/LasDataSection';
/**
 * A grouping of LAS sections. Used by calling getCurveData with a specific curve mnemonic to get that curve's data
 */
export declare class LasSectionGroup {
    constructor(name: string, parameters: LasParameterSection, curves: LasParameterSection, curveData: LasDataSection);
    /**
     * Gets the name of this group (prefix)
     */
    getName(): string;
    /**
     * Gets an array of the sections within this group
     */
    getSections(): {
        'parameters': LasParameterSection;
        'data': LasDataSection;
        'curves': LasParameterSection;
    };
    /**
     * Returns the parameter section
     */
    getParameters(): LasParameterSection;
    /**
     * Returns the curve parameter
     * @param mnemonic OR index of column for desired data
     */
    getCurveInfo(mnemonic: string | number): LasParameter;
    /**
     * Returns the curve mnemonics section
     *
     * @returns mnemonics
     */
    getCurveMnemonics(): string[];
    /**
     * Return is this data set numeric
     *
     * @param mnemonic OR index of column for desired data
     */
    isCurveNumeric(mnemonic: string | number): boolean;
    /**
     * Returns the curve data section for specific mnemonic (single curve data as an array)
     *
     * @param mnemonic OR index of column for desired data
     */
    getCurveData(mnemonic: string | number): number[] | string[];
}
