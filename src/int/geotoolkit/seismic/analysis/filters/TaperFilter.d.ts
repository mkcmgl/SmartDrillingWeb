/**
 * @module geotoolkit/seismic/analysis/filters/TaperFilter
 */
import { TaperFrequencyBoundary } from '@int/geotoolkit/seismic/analysis/filters/TaperFrequencyBoundary';
/**
 * Enum of the Taper Cosine
 * @enum
 * @readonly
 */
export declare enum TaperCosine {
    /**
     * The half taper cosine
     */
    Half = "Half",
    /**
     * The quarter taper cosine
     */
    Quarter = "Quarter"
}
/**
 * The TaperFilter implements both pass band and band reject filtering on the traces. <br>
 * This class uses a taper function and applies filtering in the Fourier domain.<br>
 * The taper function is defined using four frequencies (encapsulated in the class TaperFrequencyBoundary). <br>
 * Because this filter is applied in the Fourier domain, the filter object has to be aware of the <br>
 * sample rate in order to map the frequencies to the data values property.
 */
export declare class TaperFilter {
    /**
     * @param sampleRate The sample rate
     * @param f1 1st frequency (hrz)
     * @param f2 2nd frequency (hrz)
     * @param f3 3rd frequency (hrz)
     * @param f4 4th frequency (hrz)
     * @param passFlag The filtering mode
     */
    constructor(sampleRate: number, f1: number, f2: number, f3: number, f4: number, passFlag: boolean);
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
     * Gets the sample rate
     * @returns sampleRate The sample rate
     */
    getSampleRate(): number;
    /**
     * Sets the sample rate
     * @param sampleRate Sample rate is the number of times an analog signal is measured (sampled) per second.
     * @returns this
     */
    setSampleRate(sampleRate: number): this;
    /**
     * Gets the pass flag
     * @returns passFlag The pass flag
     */
    getPassFlag(): boolean;
    /**
     * This sets the filtering mode. Usually this filter is used as band pass filter,
     * but it can be reverted to band rejection mode by calling this method with flag set to false
     * @param passFlag The pass flag
     * @returns this
     */
    setPassFlag(passFlag: boolean): this;
    /**
     * Applies the filter on an array of data
     * @param input The input array
     * @param length The length of the input array that needs to be filtered.
     * @returns output The processed array
     */
    apply(input: Float32Array, length: number): Float32Array;
    static getClassName(): string;
    getClassName(): string;
}
