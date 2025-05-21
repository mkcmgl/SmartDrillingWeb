import { SeismicTraceProcessor } from '@int/geotoolkit/seismic/pipeline/processor/SeismicTraceProcessor';
import { TaperFrequencyBoundary } from '@int/geotoolkit/seismic/analysis/filters/TaperFrequencyBoundary';
/**
 * The TaperFilterProcess applies both pass band and band reject filtering on the traces <br>
 * <br>
 * This class uses a taper function and applies filtering in the Fourier domain.<br>
 * The taper function is defined using four frequencies (encapsulated in the class {@link @int/geotoolkit/seismic/analysis/filters/TaperFrequencyBoundary~TaperFrequencyBoundary}).<br>
 * Because this filter is applied in the Fourier domain, the filter object has to be aware of the sample rate in order to map the frequencies to the data values property.
 */
export declare class TaperFilterProcess extends SeismicTraceProcessor {
    constructor(state?: TaperFilterProcess.Options);
    /**
     * Gets the frequency boundary
     * @returns frequencyBoundary The frequency boundary
     */
    getFrequencyBoundary(): TaperFrequencyBoundary;
    /**
     * Sets frequency boundary
     * @param f1 another TaperFrequencyBoundary
     * @returns this
     */
    setFrequencyBoundary(f1: TaperFrequencyBoundary): this;
    /**
     * Sets frequency boundary
     * @param f1 1st frequency (hrz)
     * @param f2 2-nd frequency (hrz)
     * @param f3 3-rd frequency (hrz)
     * @param f4 4-th frequency (hrz)
     * @returns this
     */
    setFrequencyBoundary(f1: number, f2: number, f3: number, f4: number): this;
    /**
     * Sets the sample rate
     * @param sampleRate Sample rate is the number of times an analog signal is measured (sampled) per second.
     * @returns this
     */
    setSampleRate(sampleRate: number): this;
    /**
     * Gets the sample rate
     * @returns sampleRate The sample rate
     */
    getSampleRate(): number;
    /**
     * Sets the pass flag
     * @param passFlag The pass flag
     * @returns this
     */
    setPassFlag(passFlag: boolean): this;
    /**
     * Gets the pass flag
     * @returns passFlag The pass flag
     */
    getPassFlag(): boolean;
    /**
     * returns state of the taper filter
     *
     * @returns The state of the taper filter
     */
    getState(): TaperFilterProcess.OptionsOut;
    /**
     * Sets state of the taper filter
     * @throws Error if state is null
     * @param state The state of the taper filter
     * @returns this
     */
    setState(state: TaperFilterProcess.Options): this;
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: TaperFilterProcess.Options): this;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): TaperFilterProcess.OptionsOut;
}
export declare namespace TaperFilterProcess {
    type Options = SeismicTraceProcessor.Options & {
        /**
         * The sample rate
         */
        samplerate?: number;
        /**
         * filtering mode
         */
        passflag?: boolean;
        /**
         * 1st frequency
         */
        f1?: number;
        /**
         * 2nd frequency
         */
        f2?: number;
        /**
         * 3rd frequency
         */
        f3?: number;
        /**
         * 4th frequency
         */
        f4?: number;
    };
    /**
     * properties
     */
    type OptionsOut = SeismicTraceProcessor.OptionsOut & {
        /**
         * The sample rate
         */
        samplerate?: number;
        /**
         * filtering mode
         */
        passflag?: boolean;
        /**
         * 1st frequency
         */
        f1?: number;
        /**
         * 2nd frequency
         */
        f2?: number;
        /**
         * 3rd frequency
         */
        f3?: number;
        /**
         * 4th frequency
         */
        f4?: number;
    };
}
