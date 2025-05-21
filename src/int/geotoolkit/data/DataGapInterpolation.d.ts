/**
 * @module geotoolkit/data/DataGapInterpolation
 */
import { DataInterpolation } from '@int/geotoolkit/data/DataInterpolation';
import type { DataValueArray } from '@int/geotoolkit/data/DataValueArray';
/**
 * The DataGapInterpolation interface adds NaN values for a depth in the data greater than to a specified gap size.
 */
export declare class DataGapInterpolation extends DataInterpolation {
    constructor(gap: number);
    interpolate(start: number, count: number, input: DataValueArray, output: DataValueArray): boolean;
    /**
     * Sets the gap value to show discontinuity of the difference between sample is greater than specified value
     * @param gap gap
     * @returns this
     */
    setGapValue(gap: number): this;
    /**
     * Returns the value of gap
     * @returns The gap value
     */
    getGapValue(): number;
}
