/**
 * @module geotoolkit/map/features/strategies/IdByAttribute
 */
import { IGetId } from '@int/geotoolkit/map/features/strategies/IGetId';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Gets feature ID based on a feature attributes.
 * The implementation returns attributes[attributeName] to use as a feature ID.
 */
export declare class IdByAttribute implements IGetId {
    /**
     * @param attributeName attribute name to use as a feature ID
     */
    constructor(attributeName: string);
    /**
     * Gets feature ID based on a feature attributes.
     * The implementation returns attributes[attributeName].
     *
     * @param attributes feature attributes
     * @returns feature ID
     */
    getFeatureId(attributes: AbstractFeature.Attributes): number | string;
    /**
     * Gets the attribute name that is used to identify feature
     */
    getAttributeName(): string;
    static getClassName(): string;
    getClassName(): string;
}
