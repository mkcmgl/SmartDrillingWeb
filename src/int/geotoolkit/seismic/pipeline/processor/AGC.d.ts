import { SeismicTraceProcessor } from '@int/geotoolkit/seismic/pipeline/processor/SeismicTraceProcessor';
/**
 * Enum of AGC units
 * @enum
 * @readonly
 */
export declare enum Units {
    /**
     * units in sample range
     */
    Sample = "Sample",
    /**
     * units in time range
     */
    Time = "Time"
}
/**
 * Enum of AGC Noise Reduction Mode
 * @enum
 * @readonly
 */
export declare enum NoiseReductionMode {
    /**
     * Enable reduction
     */
    Enable = "Enable",
    /**
     * Disable reduction
     */
    Disable = "Disable"
}
/**
 * Defines implementation of the automatic gain control.
 *
 * <p>
 * Automatic gain control (AGC) increases the amplitude of the trace samples, automatically.
 * AGC applies a fixed length window, which slides in the original trace and computes the average amplitude of the window samples.
 * The gain is calculated and used to normalize the sample in the center part of this window to a fixed value, usually 1.0.
 * Basically the sample amplitude is divided by the average value. The window then slides down one sample and the next gain
 * correction is computed. The process continues until the whole trace has been processed.
 * </p>
 * <p>
 * AGC is commonly used to improve visibility of late-arriving events.
 * </p>
 * <p>
 * This version of AGC also includes noise reduction based on RMS values to to zero samples with
 * absolute values less than provided percentage of RMS. It is optional, but it helps to avoid increase noise
 * values
 * </p>
 * @throws {Error} if wasm or js version of the filter is not registered
 */
export declare class AGC extends SeismicTraceProcessor {
    constructor(options?: AGC.Options);
    /**
     * Set desired average
     * @param desiredAverage
     */
    setDesiredAverage(desiredAverage: number): this;
    /**
     * Get desired average
     */
    getDesiredAverage(): number;
    /**
     * Set units
     * @param units
     */
    setUnits(units: Units): this;
    /**
     * Get units
     */
    getUnits(): Units;
    /**
     * Set window length
     * @param windowLength
     */
    setWindowLength(windowLength: number): this;
    /**
     * Get window length
     */
    getWindowLength(): number;
    /**
     * Set AGC length
     * @param agcLength
     */
    setAgcLength(agcLength: number): this;
    /**
     * Get AGC length
     */
    getAgcLength(): number;
    /**
     * Set start sample
     * @param startSample
     */
    setStartSample(startSample: number): this;
    /**
     * Get start sample
     */
    getStartSample(): number;
    /**
     * Set step
     * @param step
     */
    setStep(step: number): this;
    /**
     * Get step
     */
    getStep(): number;
    /**
     * Set noise reduction percentage
     * @param noiseReductionPercentage
     */
    setNoiseReductionPercentage(noiseReductionPercentage: number): this;
    /**
     * Get noise reduction percentage
     */
    getNoiseReductionPercentage(): number;
    /**
     * Set noise reduction
     * @param noiseReduction
     */
    setNoiseReduction(noiseReduction: NoiseReductionMode): this;
    /**
     * Get noise reduction
     */
    getNoiseReduction(): NoiseReductionMode;
    /**
     * Returns state of the AGC data filter
     * @returns state see {@link import("geotoolkit/seismic/pipeline/processor/AGC").AGC.getProperties}
     */
    getState(): AGC.OptionsOut;
    /**
     * Sets state of the AGC filter
     * @throws if state is null
     * @param state state of the data filter see {@link import("geotoolkit/seismic/pipeline/processor/AGC").AGC.setProperties}
     * @returns this
     */
    setState(state: AGC.Options): this;
    /**
     * Returns properties
     * @returns of the data filter
     */
    getProperties(): AGC.OptionsOut;
    /**
     * Sets properties
     * @param [props] of the data filter
     * @returns this
     */
    setProperties(props?: AGC.Options): this;
}
export declare namespace AGC {
    /**
     * of the data filter
     */
    type Options = SeismicTraceProcessor.Options & {
        /**
         * desired average amplitude
         */
        desiredaverage?: number;
        /**
         * enum of AGC units
         */
        units?: Units;
        /**
         * the AGC window size
         */
        windowlength?: number;
        /**
         * AGC length
         */
        agclength?: number;
        /**
         * start sample to start the AGC process
         */
        startsample?: number;
        /**
         * step
         */
        step?: number;
        /**
         * percentage to zero samples with absolute values less than provided percentage of RMS
         */
        noisereductionpercentage?: number;
        /**
         * enable or disable
         * noise reduction.
         */
        noisereduction?: NoiseReductionMode;
    };
    /**
     * of the data filter
     */
    type OptionsOut = SeismicTraceProcessor.OptionsOut & {
        /**
         * desired average amplitude
         */
        desiredaverage: number;
        /**
         * enum of AGC units
         */
        units: Units;
        /**
         * the AGC window size
         */
        windowlength: number;
        /**
         * AGC length
         */
        agclength: number;
        /**
         * start sample to start the AGC process
         */
        startsample: number;
        /**
         * step
         */
        step: number;
        /**
         * percentage to zero samples with absolute values less than provided percentage of RMS
         */
        noisereductionpercentage: number;
        /**
         * enable, disable
         * noise reduction.
         */
        noisereduction: NoiseReductionMode;
    };
}
