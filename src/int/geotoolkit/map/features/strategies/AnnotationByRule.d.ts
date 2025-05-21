import { IGetAnnotation } from '@int/geotoolkit/map/features/strategies/IGetAnnotation';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
/**
 * The strategy creates annotation according to the rules below.
 * @example
 * import {AnnotationByRule} from '@int/geotoolkit/map/features/strategies/AnnotationByRule';
 * const strategy = new AnnotationByRule({
 *      'expression': (feature) => {
 *          const attr = feature.getAttributes(); // get data attributes
 *          const rate = attr['pop2012'] / attr['pop1985']; // calculate population growth rate
 *          return attr['country_name'] + '(' + rate.toFixed(1) + ')'; // generate annotation label
 *      },
 *      'maxScale': 10000, // show annotation on scale < 10000
 * });
 * @example
 * const strategy = new AnnotationByRule({
 *      'expression': '{city_name} city', // use braces for attribute values
 *      'where': (feature) => { // features that match the clause will be annotated
 *          const attr = feature.getAttributes();
 *          return attr['pop2012'] > 2000;
 *      }
 * });
 */
export declare class AnnotationByRule implements IGetAnnotation {
    /**
     * @param options rules options
     */
    constructor(options: AnnotationByRule.Options);
    /**
     * Gets annotation text for a feature
     * @param feature map feature
     * @param layer feature layer
     * @returns annotation text
     */
    getAnnotation(feature: AbstractFeature, layer: AbstractFeatureLayer): string;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace AnnotationByRule {
    /**
     * rules options
     */
    type Options = {
        /**
         * string expression to annotate the feature (attribute values may be referenced using braces,
         * for example "\{country_name\} area: \{country_area\}") or expression callback to generate annotation labels dynamically. Uses feature id as an
         * annotation by default.
         */
        expression?: string | ExpressionCallback;
        /**
         * minimum scale to show annotation
         */
        minscale?: number;
        /**
         * maximum scale to show annotation
         */
        maxscale?: number;
        /**
         * where condition callback to determine which features are annotated
         */
        where?: WhereCallback;
    };
    /**
     * Expression callback is used to generate feature annotation.
     */
    type ExpressionCallback = (feature: AbstractFeature) => string;
    /**
     * Where condition callback determines which features are annotated.
     */
    type WhereCallback = (feature: AbstractFeature) => boolean;
}
