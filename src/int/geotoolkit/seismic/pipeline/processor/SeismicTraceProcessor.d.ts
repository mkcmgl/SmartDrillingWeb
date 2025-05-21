import type { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import type { SeismicMetaData } from '@int/geotoolkit/seismic/data/SeismicMetaData';
/**
 * A Seismic Trace Processor is the implementation of a trace processing algorithm for seismic data. It is an extension point that allows the addition of custom trace processors.<br>
 * A trace process usually represents an operation that can be performed on trace data (samples). It processes data trace by trace.
 */
export declare class SeismicTraceProcessor {
    /**
     * Create trace processor
     * @param [options] the default properties
     */
    constructor(options?: SeismicTraceProcessor.Options);
    /**
     * Clones processor
     * @returns this
     */
    clone(): SeismicTraceProcessor;
    /**
     * Copy constructor
     * @param src Source to copy from
     */
    protected copyConstructor(src: SeismicTraceProcessor): void;
    /**
     * Returns stateValue if true or false, value instead
     *
     * @param value value
     * @param defaultValue default value
     */
    verifyBoolean(value: boolean, defaultValue: boolean): boolean;
    /**
     * Returns stateValue if string, value instead
     *
     * @param value value
     * @param defaultValue default value
     */
    verifyString(value: string, defaultValue: string): string;
    /**
     * Returns stateValue not null, value instead
     *
     * @param stateValue value
     * @param value default value
     */
    verify(stateValue: any, value: any): any;
    /**
     * Sets state 'name' and 'apply' values to respectively name and false.
     * Returns state object
     *
     * @param state the default properties
     * @param name name of the processor
     */
    static verifyState(state: SeismicTraceProcessor.Options, name: string): SeismicTraceProcessor.Options;
    /**
     * Sets apply
     *
     * @param apply whether the processor is active or not
     */
    apply(apply: boolean): this;
    /**
     * Returns name of the processor
     */
    getName(): string;
    /**
     * Set name of the processor
     * @param name processor name
     */
    setName(name: string): this;
    /**
     * Set apply and name values
     *
     * @param state the default properties
     * @returns this
     */
    setState(state: SeismicTraceProcessor.Options): this;
    /**
     * Returns apply and name values
     *
     * @returns the state properties
     */
    getState(): SeismicTraceProcessor.OptionsOut;
    /**
     * Return true if processors are identical
     * @param other seismic processor
     */
    protected equalsProcessor(other: SeismicTraceProcessor): boolean;
    /**
     * Returns true if processor is active
     */
    isApplicable(): boolean;
    /**
     * The function returns 'True' if the process was applied to the traces or 'False' if it was not applied.
     *
     * @param pipeline the seismic pipeline name
     * @param metadata seismic metadata
     * @param dataIn The input data array on which the process should be applied
     * @param dataOut The output/processed data array
     * @returns returns whether the processing was successful
     */
    process(pipeline: SeismicPipeline, metadata: SeismicMetaData, dataIn: Float32Array, dataOut: Float32Array): boolean;
    /**
     * Invalidate owner
     */
    invalidate(): this;
    /**
     * Dispose
     */
    dispose(): void;
    /**
     * Gets the properties
     * @returns the state properties
     */
    getProperties(): SeismicTraceProcessor.OptionsOut;
    /**
     * Sets the properties
     * @param [props] the default properties
     * @returns this
     */
    setProperties(props?: SeismicTraceProcessor.Options): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace SeismicTraceProcessor {
    /**
     * the default properties
     */
    type Options = {
        /**
         * name of the processor
         */
        name?: string;
        /**
         * whether the processor is active or not.
         */
        apply?: boolean;
    };
    /**
     * the state properties
     */
    type OptionsOut = {
        /**
         * name of the processor
         */
        name: string;
        /**
         * whether the processor is active or not
         */
        apply: boolean;
    };
}
