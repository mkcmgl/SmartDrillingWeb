/**
 * @module geotoolkit/map/features/strategies/AnnotationById
 */
import { IGetAnnotation } from '@int/geotoolkit/map/features/strategies/IGetAnnotation';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
/**
 * The strategy returns feature ID as annotation
 */
export declare class AnnotationById implements IGetAnnotation {
    /**
     * Gets annotation text for a feature.<br>
     * The implementation returns feature's ID
     *
     * @param feature map feature
     * @param layer feature layer (not used)
     * @returns annotation text
     */
    getAnnotation(feature: AbstractFeature, layer: AbstractFeatureLayer): string;
    static getClassName(): string;
    getClassName(): string;
}
