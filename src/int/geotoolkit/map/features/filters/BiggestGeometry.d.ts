/**
 * @module geotoolkit/map/features/filters/BiggestGeometry
 */
import { IFilter } from '@int/geotoolkit/map/features/filters/IFilter';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * BiggestGeometry filters out feature parts with the biggest geometry (for Multi-features only).
 */
export declare class BiggestGeometry implements IFilter {
    /**
     * Gets iterator over filtered features
     *
     * @param iterator input features iterator
     * @param context rendering context
     * @param layer feature layer
     * @returns iterator over features to render
     */
    filterFeatures(iterator: Iterator<AbstractFeature>, context: RenderingContext, layer: AbstractFeatureLayer): Iterator<AbstractFeature>;
    /**
     * Resets itself
     */
    reset(): this;
    static getClassName(): string;
    getClassName(): string;
}
