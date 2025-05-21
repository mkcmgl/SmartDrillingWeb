import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Gets feature ID based on a feature properties
 * @interface
 */
export declare abstract class IGetId {
    /**
     * Gets feature ID based on a feature properties
     * @param source feature properties
     * @returns feature ID
     */
    abstract getFeatureId(source: AbstractFeature.Attributes): number | string;
}
