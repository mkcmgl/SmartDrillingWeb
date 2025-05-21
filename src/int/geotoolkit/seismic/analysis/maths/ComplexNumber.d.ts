/**
 * A complex number, C, has the form C = A + B*j, where A and B are both real.
 * We refer to A as the 'real part' of C, and B as the 'imaginary part' of C
 * where both A and B can be represented by double precision values.
 * Ported from the Saddleback Geosolution's Java implementation
 */
export declare class ComplexNumber {
    /**
     * @param real ComplexNumber
     */
    constructor(num: ComplexNumber);
    /**
     * @param real Real part of the complex value denoted by A in the expression C = A + B*j
     * @param imag The imaginary component Imaginary part of the complex value denoted by B in the expression C = A + B*j
     */
    constructor(real: number, imag: number);
    /**
     * Gets the real value of the complex number.
     * @returns real The real component.
     */
    getReal(): number;
    /**
     * Sets the real value of the complex number.
     * @param real The real component
     * @returns this
     */
    setReal(real: number): this;
    /**
     * Gets the imaginary value of the complex number.
     * @returns imag The imaginary component.
     */
    getImag(): number;
    /**
     * Sets the imaginary value of the complex number.
     * @param imag The imaginary component.
     * @returns this
     */
    setImag(imag: number): this;
    /**
     * Gets the string representation of this complex number.
     * @returns stringValue The string value of the complex number.
     */
    toString(): string;
    static getClassName(): string;
    getClassName(): string;
}
