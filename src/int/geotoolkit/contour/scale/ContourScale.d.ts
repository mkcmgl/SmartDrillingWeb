import type { Range } from '@int/geotoolkit/util/Range';
/**
 * An abstract base class for the contour scale.
 * The contour scale provides the information about sections of an altitude axis.
 */
export declare abstract class ContourScale {
    /**
     * Gets the total number of intervals within the scale.
     * @returns count The number of the scale intervals
     */
    abstract getCount(): number;
    /**
     * Returns the full range of values in the contour scale if called with no argument or
     * returns the range of values represented by the supplied contour index.
     * @param index Optional Parameter. The contour index for which to find the z-value range.
     * @returns range The full range of this scale.
     */
    abstract getRange(index: number): Range;
    /**
     * Finds the contour index representing the supplied z-value.
     * @param zValue z-value for which contour index has to be found
     * @returns index The contour index to which the z value belongs
     */
    abstract getIndex(zValue: number): number;
    /**
     * Gets the scale properties
     * @returns properties Scale properties
     */
    getProperties(): Record<string, any>;
    /**
     * Sets the scale properties
     * @param properties scale properties
     * @returns this
     */
    setProperties(properties: Record<string, any>): this;
    static getClassName(): string;
    getClassName(): string;
}
