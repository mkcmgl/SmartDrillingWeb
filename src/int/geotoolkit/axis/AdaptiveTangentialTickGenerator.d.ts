import { NumericTickGenerator } from '@int/geotoolkit/axis/NumericTickGenerator';
/**
 * Tangential tick generator with automatic spacing of ticks and labels.
 */
export declare class AdaptiveTangentialTickGenerator extends NumericTickGenerator {
    constructor(options?: AdaptiveTangentialTickGenerator.Options);
    clone(): AdaptiveTangentialTickGenerator;
    protected copyConstructor(src: AdaptiveTangentialTickGenerator, deepCopy?: boolean): this;
    /**
     * Returns minor ticks amount
     * @returns minor ticks amount
     */
    getMinorTicksAmount(): number;
    /**
     * Set amount of minor ticks
     * @param minorTicksAmount minor ticks amount
     */
    setMinorTicksAmount(minorTicksAmount: number): this;
    /**
     * Returns major ticks amount
     * @returns major ticks amount
     */
    getMajorTicksAmount(): number;
    /**
     * Set amount of major ticks
     * @param majorTicksAmount major ticks amount
     */
    setMajorTicksAmount(majorTicksAmount: number): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): AdaptiveTangentialTickGenerator.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: AdaptiveTangentialTickGenerator.Options): this;
}
export declare namespace AdaptiveTangentialTickGenerator {
    /**
     * options
     */
    type Options = NumericTickGenerator.Options & {
        /**
         * specify if start/end tick values should be rounded
         */
        rounded?: boolean;
        /**
         * count of minor ticks
         */
        minorticksamount?: number;
        /**
         * count of major ticks
         */
        majorticksamount?: number;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = NumericTickGenerator.OptionsOut & {
        /**
         * rounded
         */
        rounded: boolean;
        /**
         * count of minor ticks
         */
        minorticksamount: number;
        /**
         * count of major ticks
         */
        majorticksamount: number;
    };
}
