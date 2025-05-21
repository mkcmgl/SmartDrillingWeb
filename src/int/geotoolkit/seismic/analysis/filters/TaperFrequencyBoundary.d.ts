/**
 * This class encapsulates the frequencies of the taper for class cgTyperFilter.
 * The frequencies should always satisfy the requirement that f1&lt;f2&lt;f3&lt;f4
 */
export declare class TaperFrequencyBoundary {
    /**
     * @param f1 another TaperFrequencyBoundary
     */
    constructor(f1?: TaperFrequencyBoundary);
    /**
     * @param f1 1st frequency (hrz)
     * @param f2 2nd frequency (hrz)
     * @param f3 3rd frequency (hrz)
     * @param f4 4th frequency (hrz)
     */
    constructor(f1: number, f2: number, f3: number, f4: number);
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
     * Determines whether the boundary frequencies are valid
     * @returns isValid True if frequencies are valid
     */
    isValid(): boolean;
    /**
     * Determines whether this frequency boundary equals another frequency boundary
     * @param frequencyBoundary The frequency boundary
     */
    equals(frequencyBoundary: TaperFrequencyBoundary): boolean;
    /**
     * Gets the 1st frequency (hrz)
     * @returns f1 the 1st frequency (hrz)
     */
    getF1(): number;
    /**
     * Sets the 1st frequency (hrz)
     * @param f1 1st frequency (hrz)
     * @returns this
     */
    setF1(f1: number): this;
    /**
     * Gets the 2nd frequency (hrz)
     * @returns f2 the 2nd frequency (hrz)
     */
    getF2(): number;
    /**
     * Sets the 2nd frequency (hrz)
     * @param f2 2nd frequency (hrz)
     * @returns this
     */
    setF2(f2: number): this;
    /**
     * Gets the 3rd frequency (hrz)
     * @returns f3 the 3rd frequency (hrz)
     */
    getF3(): number;
    /**
     * Sets the 3rd frequency (hrz)
     * @param f3 3rd frequency (hrz)
     * @returns this
     */
    setF3(f3: number): this;
    /**
     * Gets the 4th frequency (hrz)
     * @returns f4 the 4th frequency (hrz)
     */
    getF4(): number;
    /**
     * Sets the 4th frequency (hrz)
     * @param f4 4nd frequency (hrz)
     * @returns this
     */
    setF4(f4: number): this;
    static getClassName(): string;
    getClassName(): string;
}
