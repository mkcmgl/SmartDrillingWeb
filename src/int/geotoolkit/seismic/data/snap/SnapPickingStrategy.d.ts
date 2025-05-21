import type { Trace } from '@int/geotoolkit/seismic/data/Trace';
/**
 * @module geotoolkit/seismic/data/snap/SnapPickingStrategy
 */
/**
 * Defines abstract picking strategy
 */
export declare abstract class SnapPickingStrategy {
    /**
     * Creates snap picking strategy
     * @param name strategy name
     */
    protected constructor(name: string);
    /**
     * Returns name of the strategy
     */
    getName(): string;
    /**
     * Sets strategy name
     *
     * @param name strategy name
     * @returns this
     */
    setName(name: string): this;
    /**
     * Pick a sample in the trace
     * @param trace seismic trace
     * @param index of the sample
     * @returns Number.NaN
     */
    pickSample(trace: Trace, index: number): number;
    getClassName(): string;
    static getClassName(): string;
}
