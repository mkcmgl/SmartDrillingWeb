import { LabelingStrategyBase } from '@int/geotoolkit/schematics/labeling/LabelingStrategyBase';
/**
 * Default labeling strategy implementation.
 */
export declare class DefaultLabelingStrategy extends LabelingStrategyBase {
    constructor(options?: DefaultLabelingStrategy.Options);
    /**
     * Sets properties
     * @param [properties] strategy parameters
     * @returns this
     */
    setProperties(properties?: DefaultLabelingStrategy.Options): this;
    /**
     * Returns properties
     * @returns strategy parameters
     */
    getProperties(): DefaultLabelingStrategy.OptionsOut;
    /**
     * Sets strategy options (See base class method API for more options)
     *
     * @param options strategy options
     * @returns this
     */
    setOptions(options: DefaultLabelingStrategy.Options): this;
}
export declare namespace DefaultLabelingStrategy {
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
         * deltaPx
         */
        deltapx?: number;
    };
    /**
     * strategy parameters
     */
    type OptionsOut = Required<Options>;
}
