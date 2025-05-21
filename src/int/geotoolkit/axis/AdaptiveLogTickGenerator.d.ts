import { Orientation } from '@int/geotoolkit/util/Orientation';
import { NumericTickGenerator } from '@int/geotoolkit/axis/NumericTickGenerator';
/**
 * Logarithmic tick generator with automatic spacing of ticks and labels.
 */
export declare class AdaptiveLogTickGenerator extends NumericTickGenerator {
    constructor(options?: AdaptiveLogTickGenerator.Options | boolean);
    clone(): AdaptiveLogTickGenerator;
    protected copyConstructor(src: AdaptiveLogTickGenerator, deepCopy?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): AdaptiveLogTickGenerator.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: AdaptiveLogTickGenerator.Options): this;
    /**
     * Sets intermediate ticks
     * @param intermediateTicks intermediate ticks
     * @returns this
     */
    setIntermediateTicks(intermediateTicks: boolean): this;
    /**
     * Gets intermediate ticks
     * @returns intermediate ticks
     */
    getIntermediateTicks(): boolean;
}
export declare namespace AdaptiveLogTickGenerator {
    /**
     * options
     */
    type Options = NumericTickGenerator.Options & {
        /**
         * specify how to use powers of ten
         */
        rounded?: boolean;
        /**
         * orientation
         */
        orientation?: Orientation | string;
        /**
         * true to switch on intermediate ticks, false by default
         */
        intermediateticks?: boolean;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = NumericTickGenerator.OptionsOut & {
        /**
         * orientation
         */
        orientation: Orientation | string;
        /**
         * rounded
         */
        rounded: boolean;
        /**
         * false if intermediate ticks switched off
         */
        intermediateticks: boolean;
    };
}
