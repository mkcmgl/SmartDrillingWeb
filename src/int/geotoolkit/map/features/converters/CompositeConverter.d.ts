/**
 * @module geotoolkit/map/features/converters/CompositeConverter
 */
import { BaseConverter } from '@int/geotoolkit/map/features/converters/BaseConverter';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Provides feature converters store for centralized control and processing
 */
export declare class CompositeConverter extends BaseConverter {
    /**
     * @param converters converter(s) for storing
     */
    constructor(converters?: BaseConverter | BaseConverter[]);
    /**
     * Adds converter to the end of the list for storing features
     * @param converter converter to add
     * @returns this
     */
    addFeatureConverter(converter: BaseConverter): this;
    /**
     * Removes converter from the converters list
     * @param converter converter to remove
     * @returns this
     */
    removeFeatureConverter(converter: BaseConverter): this;
    getFeatures(options: BaseConverter.FeaturesOptions): Iterator<AbstractFeature>;
}
