/**
 * @module geotoolkit/contour/scale/IrregularContourScale
 */
import { ContourScale } from '@int/geotoolkit/contour/scale/ContourScale';
import { Range } from '@int/geotoolkit/util/Range';
/**
 * IrregularContourScale implements the ContourScale interface, and stores scale values at arbitrary levels.
 * Compare this to ContourRegularScale where the scale values are spaced at regular intervals.
 * Creates a customised contour scale, using the supplied values.
 */
export declare class IrregularContourScale extends ContourScale {
    /**
     * @param array Array of contour values. These can be out of order, but will be sorted into order.
     */
    constructor(array: number[] | Float64Array);
    /**
     * Gets the scale array.
     * @returns The scale array
     */
    getArray(): Float64Array;
    /**
     * The number of intervals in this scale
     * (=#values + 1:  intervals to +/- infinity are included
     * @returns size The number of intervals in this scale
     */
    getCount(): number;
    /**
     * Returns the full range of values in the contour scale if called with no argument or
     * returns the range of values represented by the supplied contour index.
     * @param index Optional Parameter. The contour index for which to find the z-value range.
     * @returns range The full range of this scale.
     * @throws {Error} if index argument less than zero or greater than array length
     */
    getRange(index: number): Range;
    /**
     * Finds the contour index representing the supplied z-value.
     * @param zValue z-value for which contour index has to be found
     * @returns index The contour index to which the z value belongs
     */
    getIndex(zValue: number): number;
}
