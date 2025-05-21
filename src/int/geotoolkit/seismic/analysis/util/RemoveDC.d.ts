/**
 * A utility class with methods useful for removing the DC Component
 * of a signal by subtracting the mean value.
 * Ported from the Saddleback Geosolution's Java implementation
 */
export declare class RemoveDC {
    /**
     * De-trends a signal stored in a float array, and sets the DC component
     * @param trace The seismic trace
     * @param normLevel The new DC component of the trace. Default value is zero.
     * @returns The trace that has been de-trended
     */
    static deTrend(trace: Float32Array, normLevel: number): Float32Array;
    static getClassName(): string;
    getClassName(): string;
}
