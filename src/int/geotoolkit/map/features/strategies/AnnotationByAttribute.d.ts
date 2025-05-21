/**
 * @module geotoolkit/map/features/strategies/AnnotationByAttribute
 */
import { IGetAnnotation } from '@int/geotoolkit/map/features/strategies/IGetAnnotation';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
/**
 * The strategy returns feature's attribute 'attributename' as annotation
 */
export declare class AnnotationByAttribute implements IGetAnnotation {
    /**
     * @param attributeName define attribute name to get from feature for visualization
     */
    constructor(attributeName: string);
    /**
     * Gets annotation text for a feature.<br>
     * The implementation returns feature.getAttributes()[propertyName].
     *
     * @param feature map feature
     * @param layer feature layer (not used)
     * @returns annotation text
     */
    getAnnotation(feature: AbstractFeature, layer: AbstractFeatureLayer): string;
    static getClassName(): string;
    getClassName(): string;
}
