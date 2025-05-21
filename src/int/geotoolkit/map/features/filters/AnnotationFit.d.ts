import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { IFilter } from '@int/geotoolkit/map/features/filters/IFilter';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * AnnotationFit filters out features who's annotations do not fit in their geometries
 */
export declare class AnnotationFit implements IFilter {
    /**
     * @param [text] JSON-object or text shape instance (see {@link @int/geotoolkit/scene/shapes/Text~Text} constructor JSON-object for details)
     */
    constructor(text?: Text.Options | Text);
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
