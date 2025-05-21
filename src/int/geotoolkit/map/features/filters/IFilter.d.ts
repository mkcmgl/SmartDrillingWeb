/**
 * @module geotoolkit/map/features/filters/IFilter
 */
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Features rendering filter interface
 * @interface
 */
export declare abstract class IFilter {
    /**
     * Gets iterator over filtered features
     * @param iterator input features iterator
     * @param context rendering context
     * @param layer feature layer
     * @returns iterator iterator over features to render
     */
    abstract filterFeatures(iterator: Iterator<AbstractFeature>, context: RenderingContext, layer: AbstractFeatureLayer): Iterator<AbstractFeature>;
    /**
     * Resets itself
     * @returns this
     */
    abstract reset(): this;
    getClassName(): string;
    static getClassName(): string;
}
