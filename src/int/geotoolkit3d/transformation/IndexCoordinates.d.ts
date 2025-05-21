/**
 * @module geotoolkit3d/transformation/IndexCoordinates
 */
import { XYCoordinates } from '@int/geotoolkit3d/transformation/XYCoordinates';
/**
 * IndexCoordinates coordinates object.<br>
 * <br>
 * This object holds the information about the index coordinates of a seismic volume.<br>
 * It is used to compute the Index-to-XY transformation and provides some utility function to retrieve the index coordinates.<br>
 */
export declare class IndexCoordinates extends XYCoordinates {
    constructor();
    /**
     * Gets the sample rate
     * @returns The sample rate
     */
    getSampleRate(): number;
    /**
     * Gets the I step
     * @returns The sample rate
     */
    getIStep(): number;
    /**
     * Gets the J step
     * @returns The sample rate
     */
    getJStep(): number;
    /**
     * Initialize index using given json.<br>
     * <br>
     * The third dimension (z) can be specified either using z0&z1&samplerate or z0&samplecount&samplerate<br>
     * @param index The json
     * @returns this
     */
    fromJSONIndex(index: IndexCoordinates.FromJSONIndex): this;
}
export declare namespace IndexCoordinates {
    /**
     * The json
     */
    type FromJSONIndex = {
        /**
         * The starting 'i' index value
         */
        i0?: number;
        /**
         * The 'i' index count
         */
        icount?: number;
        /**
         * The 'i' index step
         */
        istep?: number;
        /**
         * The starting 'j' index value
         */
        j0?: number;
        /**
         * The 'j' index count
         */
        jcount?: number;
        /**
         * The 'j' index step
         */
        jstep?: number;
        /**
         * The starting 'z' index value
         */
        z0?: number;
        /**
         * The last 'z' index value
         */
        z1?: number;
        /**
         * The 'z' index step
         */
        samplerate?: number;
        /**
         * The 'z' index count
         */
        samplecount?: number;
    };
}
