import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
/**
 * Annotation strategy interface
 * @interface
 */
export declare abstract class IGetAnnotation {
    /**
     * Gets annotation text for a feature
     * @param feature map feature
     * @param layer feature layer
     * @returns annotation text
     */
    abstract getAnnotation(feature: AbstractFeature, layer: AbstractFeatureLayer): string;
    getClassName(): string;
    static getClassName(): string;
}
