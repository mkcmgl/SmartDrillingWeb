/**
 * @module geotoolkit/seismic/analysis/transforms/SimpleFFT
 */
import { AbstractFFTSpectra } from '@int/geotoolkit/seismic/analysis/transforms/AbstractFFTSpectra';
/**
 * Defines a class capable of computing the forward and backward Discrete Fourier Transform
 * Ported from the Saddleback Geosolution's Java implementation of the DFT
 * This implementation uses only radix-2 butterflies.
 */
export declare class SimpleFFT extends AbstractFFTSpectra {
}
