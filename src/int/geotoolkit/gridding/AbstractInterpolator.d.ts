/**
 * Abstract class for gridding interpolators
 */
export declare abstract class AbstractInterpolator {
    protected constructor(options?: AbstractInterpolator.Options);
    /**
     * If this interpolator supports WebAssembly
     */
    protected isWasmSupported(): boolean;
    /**
     * Returns true if browser supports WebAssembly, this interpolator has such realisation and option enabled in this interpolator
     */
    isWasmEnabled(): boolean;
    /**
     * Prepare data and run training
     * @param xSeries x series
     * @param ySeries y series
     * @param zSeries z series
     */
    prepare(xSeries: number[], ySeries: number[], zSeries: number[]): Promise<void>;
    /**
     * Teach algorithm with existing points. Internal use.
     * @param xSeries x series
     * @param ySeries y series
     * @param zSeries z series
     */
    protected abstract train(xSeries: number[], ySeries: number[], zSeries: number[]): Promise<void>;
    /**
     * Get interpolate z series by (x,y) pairs. Returns Promise, which resolves with array of z-series
     * @param xSeries x series
     * @param ySeries y series
     */
    abstract getValues(xSeries: number[], ySeries: number[]): Promise<number[]>;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AbstractInterpolator {
    /**
     * options
     */
    type Options = {
        /**
         * filter duplicates before training - last data is used
         */
        filter?: boolean;
        /**
         * use WebAssembly implementation if possible
         */
        wasm?: boolean;
    };
}
