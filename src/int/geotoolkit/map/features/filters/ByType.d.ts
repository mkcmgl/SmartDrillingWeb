import { IFilter } from '@int/geotoolkit/map/features/filters/IFilter';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * ByType filters out all features that are not featureType(s) instances.
 */
export declare class ByType implements IFilter {
    /**
     * @param featureType feature type(s) to pass
     */
    constructor(featureType: typeof AbstractFeature | (typeof AbstractFeature)[]);
    /**
     * Gets iterator over filtered features
     *
     * @param iterator input features iterator
     * @param context rendering context
     * @param [layer] feature layer (not used)
     * @returns iterator over features to render
     */
    filterFeatures(iterator: Iterator<AbstractFeature>, context: RenderingContext, layer?: AbstractFeatureLayer): Iterator<AbstractFeature>;
    /**
     * Resets itself (the implementation does nothing)
     */
    reset(): this;
    static getClassName(): string;
    getClassName(): string;
}
