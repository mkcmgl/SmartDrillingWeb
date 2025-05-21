/**
 * @module geotoolkit/contour/scale/ContourRangeScale
 */
import { Range } from '@int/geotoolkit/util/Range';
import { RegularContourScale } from '@int/geotoolkit/contour/scale/RegularContourScale';
/**
 * Extends RegularContourScale, adds the ability to show a single additional user specified level
 */
export declare class ContourRangeScale extends RegularContourScale {
    /**
     * @param range The data range or another scale.
     * @param [step] The data range step.
     * @param [showSingleLevel] Whether the single level should be shown.
     * @param [singleLevelValue] The value of the single level.
     */
    constructor(range: Range, step?: number, showSingleLevel?: boolean, singleLevelValue?: number);
    constructor(scale: ContourRangeScale);
    /**
     * Gets the step value.
     * @returns step The step value.
     */
    getStep(): number;
    /**
     * Gets the single level value.
     * @returns singleLevelValue The value of the single index.
     */
    getSingleLevelValue(): number;
    /**
     * Gets the single level index.
     * @returns singleLevelIndex The index position of the single index.
     */
    getSingleLevelIndex(): number;
    /**
     * Gets the flag for the single label visibility
     * @returns showSingleLevel The flag indicating single level visibility.
     */
    getShowSingleLevel(): boolean;
    /**
     * Gets the flag indicating whether to separate the single level.
     * @returns separateSingleLevel The flag indicating single level separation.
     */
    getSeparateSingleLevel(): boolean;
    /**
     * Gets the factor which is used to calculate if single level will be separate
     */
    getSeparateSingleLevelFactor(): number;
    /**
     * Sets the factor which is used to calculate if single level will be separate
     * @param factor factor
     */
    setSeparateSingleLevelFactor(factor: number): this;
    /**
     * Gets the scale array.
     * @returns scaleArray The scale array
     */
    getArray(): number[];
    /**
     * Gets the total number of intervals within the scale.
     * @returns size Size of the scale (#intervals)
     */
    getCount(): number;
    /**
     * Returns the full range of values in the contour scale if called with no argument or
     * returns the range of values represented by the supplied contour index.
     * @param [index] Optional Parameter. The contour index for which to find the z-value range.
     * @returns range The full range of this scale.
     * @throws {Error} if index out of range
     */
    getRange(index?: number): Range;
    /**
     * Finds the contour index representing the supplied z-value.
     * @param zValue z-value for which contour index has to be found
     * @returns index The contour index to which the z value belongs
     */
    getIndex(zValue: number): number;
}
