import { LabelingStrategyBase } from '@int/geotoolkit/schematics/labeling/LabelingStrategyBase';
import type { ILayout1D } from '@int/geotoolkit/layout/ILayout1D';
/**
 * Versatile labeling strategy implementation.
 */
export declare class VersatileLabelingStrategy extends LabelingStrategyBase {
    constructor(options?: VersatileLabelingStrategy.Options);
    setProperties(properties?: VersatileLabelingStrategy.Options): this;
    getProperties(): VersatileLabelingStrategy.OptionsOut;
    getLayout1D(): ILayout1D;
    setLayout1D(layout1D: ILayout1D): this;
}
export declare namespace VersatileLabelingStrategy {
    /**
     * strategy options
     */
    type Options = LabelingStrategyBase.Options & {
        /**
         * layout to apply to labels
         */
        layout1d?: ILayout1D;
        /**
         * gap between labels and/or connectors along MD-axis
         */
        gap?: number | {
            /**
             * gap between labels
             */
            labels?: number;
            /**
             * gap between connectors
             */
            connectors?: number;
        };
    };
    type OptionsOut = Required<Options>;
}
