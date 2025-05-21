import { AbstractFFT } from '@int/geotoolkit/seismic/analysis/transforms/AbstractFFT';
/**
 * Defines a class with basic functions to analyze FFT spectra
 */
export declare class AbstractFFTSpectra extends AbstractFFT {
    /**
     * Computes the Amplitude spectrum of the input signal.*
     *
     * @returns amplitudes - array containing the amplitude spectrum
     */
    getFFTAmplitude(): null | Float32Array;
    /**
     * Computes the Amplitude spectrum of the input signal and
     * smoothes the output to hzLength (in frequency).
     *
     * @param hzLength - int operator length in hz/samples
     * @returns amplitudes - array containing the amplitude spectrum
     */
    getFFTAmplitudeSmooth(hzLength: number): null | Float32Array;
    /**
     * Computes the phase spectrum of the input signal in degrees.
     *
     * @returns phases - array containing the phase spectrum of the input signal in degrees.
     */
    getFFTPhaseDegrees(): null | Float32Array;
    /**
     * Computes the phase spectrum in radians of the input signal.<br><br>
     * This is the phase spectrum of the input signal in range of 0 to 2*pi.
     *
     * @returns phases - array containing the phase spectrum in radians
     */
    getFFTPhaseRadians(): null | Float32Array;
    /**
     * Computes the phase spectrum in unwrapped degrees in the range(0-&gt;360).
     *
     * @returns phases - array containing the unwrapped phase spectrum in degrees
     */
    getFFTPhaseInDegreesUnWrapped(): null | Float32Array;
    /**
     * Computes the phase spectrum in unwrapped radians in the range(-pi to +pi).
     *
     * @returns phases - array containing the unwrapped phase spectrum in radians
     */
    getFFTPhaseInRadiansUnWrapped(): null | Float32Array;
    /**
     * Computes the power spectrum (amplitude squared) of the FFT.
     *
     * @returns powers - array containing the power spectrum
     */
    getFFTPower(): null | Float32Array;
    /**
     * Computes the power spectrum (amplitude squared) of the FFT.
     * This is the the power spectrum in dB-down, based on the maximum power
     * value associated with (0(Zero) db down).
     *
     * @returns powersDb - array container the power spectrum in dB
     */
    getFFTPowerInDb(): null | Float32Array;
    /**
     * Computes the normalized power spectrum (amplitude squared) of the FFT.<br><br>
     *
     * This is the the power spectrum in dB-down, based on the reference power
     * value supplied in the parameter nFactor.
     *
     * @param pReference - float reference value
     * @returns powersDbNorm - array containing the power spectrum in dB
     */
    getFFTPowerInDbNormalized(pReference: number): null | Float32Array;
    /**
     * Computes the smoothed &amp; normalized dB power spectrum
     * (amplitude squared) of the FFT.
     * This is the the power spectrum in dB-down, based on the maximum power
     * value associated with (0(Zero) db down).
     *
     * @param hzLength - int operator length in hz/samples
     * @returns powersDbSmoothed - array containing the power specturm in db and smoothed.
     */
    getFFTPowerInDbSmoothed(hzLength: number): null | Float32Array;
    /**
     * Computes the smoothed power spectrum (amplitude squared) of the FFT.
     *
     * @param hzLength - int operator length in hz/samples
     * @returns powerSmoothed - array containing the smoothed power spectrum
     */
    getFFTPowerSmoothed(hzLength: number): null | Float32Array;
}
