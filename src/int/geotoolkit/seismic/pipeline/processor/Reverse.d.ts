/**
 * @module geotoolkit/seismic/pipeline/processor/Reverse
 */
import { SeismicTraceProcessor } from '@int/geotoolkit/seismic/pipeline/processor/SeismicTraceProcessor';
/**
 * Defines a processor to reverse trace values
 */
export declare class Reverse extends SeismicTraceProcessor {
    /**
     * @param [options]
     */
    constructor(options?: Reverse.Options);
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: Reverse.Options): this;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): Reverse.OptionsOut;
    /**
     * Sets base line reversed to value
     *
     * @param reverse specifies if the baseline of the trace is reversed or not
     */
    reverseBaseLine(reverse: boolean): this;
    /**
     * Sets polarity inverted to value
     *
     * @param inverse specifies if the polarity is +ve or -ve
     */
    inversePolarity(inverse: boolean): this;
    /**
     * Sets state
     *
     * @param state sets the state
     * @returns this
     */
    setState(state: Reverse.Options): this;
    /**
     * return state of the processor
     */
    getState(): Reverse.OptionsOut;
}
export declare namespace Reverse {
    type Options = SeismicTraceProcessor.Options & {
        /**
         * reversed trace values or not
         */
        reversed?: boolean;
        /**
         * invert polarity or not. Specifies if the polarity is +ve or -ve
         */
        inverted?: boolean;
    };
    /**
     * properties
     */
    type OptionsOut = SeismicTraceProcessor.OptionsOut & {
        /**
         * reversed trace values or not
         */
        reversed?: boolean;
        /**
         * invert polarity or not. Specifies if the polarity is +ve or -ve
         */
        inverted?: boolean;
    };
}
