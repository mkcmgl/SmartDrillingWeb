/**
 * @module geotoolkit/seismic/analysis/maths/ComplexMathUtils
 */
import { ComplexNumber } from '@int/geotoolkit/seismic/analysis/maths/ComplexNumber';
/**
 * Class that has methods useful for operating on complex numbers
 * Ported from the Saddleback Geosolution's Java implementation
 */
export declare class ComplexMathUtils {
    /**
     * Gets the real magnitude of a complex number.
     * @param c The complex number.
     */
    static absCmplx(c: ComplexNumber): number;
    /**
     * Multiplies two complex numbers a and b, returning complex number c.
     * @param a The first complex number.
     * @param b The second complex number.
     */
    static multCmplx(a: ComplexNumber, b: ComplexNumber): ComplexNumber;
    static getClassName(): string;
    getClassName(): string;
}
