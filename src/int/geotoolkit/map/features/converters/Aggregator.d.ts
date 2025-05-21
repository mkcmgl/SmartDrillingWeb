import { BaseConverter } from '@int/geotoolkit/map/features/converters/BaseConverter';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { Template } from '@int/geotoolkit/map/layers/Template';
/**
 * Converts features into a binary tree for the purpose of aggregation nearby points.
 * Only point-like features are supported.
 */
export declare class Aggregator extends BaseConverter {
    constructor(options: Aggregator.Options);
    getFeatures(options: Aggregator.FeaturesOptions): AbstractFeature[];
    /**
     * Gets current conversion options.
     * @returns convert options
     */
    getOptions(): Aggregator.OptionsOut;
    /**
     * Sets new conversion options.
     * @param options convert options
     * @returns this
     */
    setOptions(options: Aggregator.Options): this;
}
export declare namespace Aggregator {
    /**
     * convert options
     */
    type Options = {
        /**
         * minimum distance between aggregations (in pixel)
         */
        mindistance?: number;
        /**
         * minimum number of points to start aggregation
         */
        min?: number;
        /**
         * true if aggregation is enabled
         */
        enabled?: boolean;
        /**
         * timeout between features cached request and the actual data query (in ms)
         */
        timeout?: number;
        /**
         * number(s) of children in aggregation tree for extension
         */
        amountaggregations?: number | number[];
        /**
         * distance(s) between layers for extension
         */
        radius?: number | number[];
    };
    type FeaturesOptions = BaseConverter.FeaturesOptions & {
        layer?: Template;
    };
    /**
     * convert options
     */
    type OptionsOut = Required<Options>;
}
