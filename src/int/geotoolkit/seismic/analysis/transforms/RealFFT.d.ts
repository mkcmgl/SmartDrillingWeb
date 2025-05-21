/**
 * @module geotoolkit/seismic/analysis/transforms/RealFFT
 */
import { FFT } from '@int/geotoolkit/seismic/analysis/transforms/FFT';
/**
 * Defines a class capable of computing the forward and backward Real Fast Fourier Transform
 * This implementation performs a size n real transform using a size n/2 complex transform.
 * For the complex transform the radix 2-4-8 fft algorithm is used.
 * Remarks: In browsers this transform is usually slower than the complex transform.
 */
export declare class RealFFT extends FFT {
    transform(): this;
}
