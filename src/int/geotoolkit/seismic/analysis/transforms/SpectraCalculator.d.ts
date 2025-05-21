/**
 * This class has methods for calculating various frequency properties.
 * Ported from the Saddleback Geosolution's Java implementation
 */
export declare class SpectraCalculator {
    /**
     * Calculates the power components of the complex signal
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param nonzero Length of the signal
     * @param nyquistLen The nyquist length
     * @returns powers The power components of the signal
     */
    static calcPower(xre: Float32Array, xim: Float32Array, nonzero: number, nyquistLen: number): Float32Array;
    /**
     * Calculates the amplitude components of the complex signal
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param nonzero Length of the signal
     * @param nyquistLen The nyquist length
     * @returns amplitudes The amplitude components of the signal
     */
    static calcAmplitude(xre: Float32Array, xim: Float32Array, nonzero: number, nyquistLen?: number): Float32Array;
    /**
     * Calculates the amplitude components of a complex signal and smoothes the result.
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param sampleRate The sample rate
     * @param nonzero Length of the signal
     * @param hzLength The length of each oscillation
     * @returns smoothedAmplitudes The smoothed amplitude components of the signal
     */
    static calcAmplitudeSmoothed(xre: Float32Array, xim: Float32Array, sampleRate: number, nonzero: number, hzLength: number): Float32Array;
    /**
     * Smoothes the spectrum components of the signal
     * @param spectrum The signal
     * @param windowWidth The window width
     * @returns smoothedSpectrum The smoothed spectrum
     */
    static smoothSpectrum(spectrum: Float32Array, windowWidth: number): Float32Array;
    /**
     * Calculates the phase components of a complex signal in radians.
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param [nyquistLen] The nyquist length
     * @returns phases The phase components of the signal
     */
    static calcPhaseInRadians(xre: Float32Array, xim: Float32Array, nyquistLen?: number): Float32Array;
    /**
     * Calculates the phase components of a complex signal in degrees.
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param [nyquistLen] The nyquist length
     * @returns phases The phase components of the signal
     */
    static calcPhaseInDegrees(xre: Float32Array, xim: Float32Array, nyquistLen?: number): Float32Array;
    /**
     * Unwraps the phase components of a complex signal in degrees.
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param [nyquistLen] The nyquist length
     * @returns phases The unwrapped phase components of the signal
     */
    static calcUnWrappedPhaseInDegrees(xre: Float32Array, xim: Float32Array, nyquistLen?: number): Float32Array;
    /**
     * Unwraps the radian phase components of the signal and then converts to degrees
     * @param phaseSpec The phase spectrum
     * @returns unwrapped The unwrapped phase spectrum
     */
    static phaseUnwrapRadToDeg(phaseSpec: Float32Array): Float32Array;
    /**
     * Unwraps the radian phase components of the signal
     * ( Makes phases take values between -PI and +PI )
     * @param phaseSpec The phase spectrum
     * @returns unwrapped The unwrapped phase spectrum
     */
    static phaseUnwrapRadians(phaseSpec: Float32Array): Float32Array;
    /**
     * Unwraps the degree phase components of the signal
     * @param phaseSpec The phase spectrum
     * @returns unwrapped The unwrapped phase spectrum
     */
    static phaseUnwrapDegrees(phaseSpec: Float32Array): Float32Array;
    /**
     * Computes the power of the signal in decibels
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param nonzero Length of the signal
     * @param nyquistlen The nyquist length
     * @returns powersDb The power components of the signal in decibels
     */
    static calcPowerDb(xre: Float32Array, xim: Float32Array, nonzero: number, nyquistlen: number): Float32Array;
    /**
     * Computes the normalized power of the signal in decibels
     * @param xre Real signal
     * @param xim Imaginary signal
     * @param nonzero Length of the signal
     * @param nyquistLen The nyquist length
     * @param nFactor the normalization factor
     * @returns powersDb The power components of the signal in decibels
     */
    static calcPowerDbNormalized(xre: Float32Array, xim: Float32Array, nonzero: number, nyquistLen: number, nFactor: number): Float32Array;
    static getClassName(): string;
    getClassName(): string;
}
