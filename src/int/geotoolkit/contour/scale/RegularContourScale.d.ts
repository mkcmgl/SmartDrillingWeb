/**
 * @module geotoolkit/contour/scale/RegularContourScale
 */
import { ContourScale } from '@int/geotoolkit/contour/scale/ContourScale';
import { Range } from '@int/geotoolkit/util/Range';
/**
 * Implements the ContourScale interface for a regular contour scale. I.e. all contour values are evenly spaced.
 * Note: The step and count parameters must be positive or an exception will be thrown.
 */
export declare class RegularContourScale extends ContourScale {
    /**
     * @param zero The first (lowest) contour value
     * @param step The interval between successive contours
     * @param [count] The total number of contour isolines (intervals = count+1)
     */
    constructor(zero: number, step: number, count?: number);
    constructor(range: Range, numberOfLevels: number);
    /**
     * The number of intervals in this scale
     * (=#values + 1:  intervals to +/- infinity are included
     * @returns size The number of intervals in this scale
     */
    getCount(): number;
    /**
     * Returns the full range of values in the contour scale if called with no argument or
     * returns the range of values represented by the supplied contour index.
     * @param [index] The contour index for which to find the z-value range.
     * @returns range The full range of this scale.
     * @throws {Error} if index argument less than zero or greater than array length
     */
    getRange(index?: number): Range;
    /**
     * Finds the contour index representing the supplied z-value.
     * @param zValue z-value for which contour index has to be found
     * @returns index The contour index to which the z value belongs
     */
    getIndex(zValue: number): number;
}
