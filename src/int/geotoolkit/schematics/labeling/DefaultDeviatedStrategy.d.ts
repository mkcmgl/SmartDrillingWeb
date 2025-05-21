import { LabelingStrategyBase } from '@int/geotoolkit/schematics/labeling/LabelingStrategyBase';
/**
 * Default labeling strategy implementation.
 * @deprecated since 4.0. Use {@link @int/geotoolkit/schematics/labeling/VersatileLabelingStrategy~VersatileLabelingStrategy} instead.
 */
export declare class DefaultDeviatedStrategy extends LabelingStrategyBase {
    constructor(options?: DefaultDeviatedStrategy.Options);
    /**
     * Sets properties
     * @param [properties] strategy parameters
     * @returns this
     */
    setProperties(properties?: DefaultDeviatedStrategy.Options): this;
    /**
     * Returns properties
     * @returns strategy parameters
     */
    getProperties(): DefaultDeviatedStrategy.OptionsOut;
    /**
     * Sets strategy options (See base class method API for more options)
     *
     * @param options strategy options
     * @returns this
     */
    setOptions(options: DefaultDeviatedStrategy.Options): this;
}
export declare namespace DefaultDeviatedStrategy {
    /**
     * strategy parameters
     */
    type Options = LabelingStrategyBase.Options & {
        /**
         * "equally spaced" flag
         */
        equallyspaced?: boolean;
        /**
         * anchor fixed position flag
         */
        anchorvaluefixed?: boolean;
        /**
         * gap for along trajectory mode
         */
        gap?: number;
        /**
         * deltaPx
         */
        deltapx?: number;
    };
    /**
     * strategy parameters
     */
    type OptionsOut = Required<Options>;
}
