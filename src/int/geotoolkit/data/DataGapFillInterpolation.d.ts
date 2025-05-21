/**
 * @module geotoolkit/data/DataGapFillInterpolation
 */
import { DataInterpolation } from '@int/geotoolkit/data/DataInterpolation';
import type { DataValueArray } from '@int/geotoolkit/data/DataValueArray';
/**
 * Enum of Cutoff mode
 * @readonly
 * @enum
 */
export declare enum CutoffMode {
    /**
     * Default Cutoff mode, remove NaN samples
     */
    RemoveSample = "RemoveSample",
    /**
     * Keep samples and interpolate values
     */
    KeepSample = "KeepSample"
}
/**
 * The DataGapFillInterpolation interface removes NaN values that form a gap in the data less than or equal to a specified size.
 */
export declare class DataGapFillInterpolation extends DataInterpolation {
    constructor(cutoff: number);
    interpolate(start: number, count: number, input: DataValueArray, output: DataValueArray): boolean;
    /**
     * Sets the cutoff used for removing NaN valued samples.
     * @param cutoff gap fill cutoff
     * @returns this
     */
    setGapFillCutoff(cutoff: number): this;
    /**
     * Returns the value of the cutoff used for removing NaN valued samples
     * @returns The cutoff value
     */
    getGapFillCutoff(): number;
    /**
     * Set keep NaN samples flag
     * @param cutoffMode cutooff mode
     */
    setGapFillCutoffMode(cutoffMode: CutoffMode): this;
    /**
     * Return keep samples flag
     */
    getGapFillCutoffMode(): CutoffMode;
}
