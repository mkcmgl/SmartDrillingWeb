import { IFilter } from '@int/geotoolkit/map/features/filters/IFilter';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { Template as TemplateLayer } from '@int/geotoolkit/map/layers/Template';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * NoAnnotationOverlap filters out geometries with overlapped annotations.<br>
 * If two or more annotations overlap each other, then only one with the biggest geometry is shown
 *
 * @example
 * import {NoAnnotationOverlap} from '@int/geotoolkit/map/features/filters/NoAnnotationOverlap';
 * const filter = new NoAnnotationOverlap({
 *      // set the priority for features by population, if it's equal show older city label
 *      'weight': 'pop2012, settled_year ASC'
 * });
 */
export declare class NoAnnotationOverlap implements IFilter {
    /**
     * @param [options] filter options
     * @param [ignoreTypes] feature types that should be passed without filtering
     */
    constructor(options?: NoAnnotationOverlap.Options, ignoreTypes?: (typeof AbstractFeature)[]);
    /**
     * Gets iterator over filtered features
     *
     * @param iterator input features iterator
     * @param context rendering context
     * @param layer feature layer
     * @returns iterator over features to render
     */
    filterFeatures(iterator: Iterator<AbstractFeature>, context: RenderingContext, layer: TemplateLayer): Iterator<AbstractFeature>;
    /**
     * Resets itself
     */
    reset(): this;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace NoAnnotationOverlap {
    /**
     * filter options
     */
    type Options = {
        /**
         * feature types that should be passed without filtering
         */
        ignoretypes?: (typeof AbstractFeature)[];
        /**
         * features weight to specify which annotations to show/hide.
         * Annotation weight can be based on a custom weight function (features with more weight are annotated) or attribute name(s).
         * In case you want to use multiple names, use a comma (,) to separate it and ASC/DESC keywords for ascending and descending order
         * (DESC by default). If null, features are filtered in adding order. See example for more info.
         * By default uses feature's bounding box area as an annotation priority (larger area features have higher priority).
         */
        weight?: ((feature: AbstractFeature) => number) | string | null;
    };
}
