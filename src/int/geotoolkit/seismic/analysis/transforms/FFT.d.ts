/**
 * @module geotoolkit/seismic/analysis/transforms/FFT
 */
import { AbstractFFTSpectra } from '@int/geotoolkit/seismic/analysis/transforms/AbstractFFTSpectra';
/**
 * Defines a class capable of computing the forward and backward Fast Fourier Transform
 * Ported from the Saddleback Geosolution's Java implementation of the FFT.
 * This implementation uses radix 2, 4 and 8 butterflies.
 */
export declare class FFT extends AbstractFFTSpectra {
}
