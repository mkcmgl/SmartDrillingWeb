import { QueryMode } from '@int/geotoolkit/map/features/QueryMode';
import { AbstractSource } from '@int/geotoolkit/map/sources/AbstractSource';
import { Events } from '@int/geotoolkit/map/sources/Events';
import type { Iterator } from '@int/geotoolkit/util/iterator';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
/**
 * Vector source that allows user to get features from remote resource
 */
export declare class Vector extends AbstractSource {
    /**
     * Creates vector source
     * @param [options] options
     */
    constructor(options?: Vector.Options);
    on<E extends keyof Vector.EventMap>(type: E, callback: (eventType: E, sender: this, args: Vector.EventMap[E]) => void): this;
    off<E extends keyof Vector.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Vector.EventMap[E]) => void): this;
    notify<E extends keyof Vector.EventMap>(type: E, source: Vector, args?: Vector.EventMap[E]): this;
    /**
     * Sends a request for features in given bounding box.
     * @param bbox bounding box for features
     * @param layer layer requesting
     * @returns this
     */
    queryFeatures(bbox: Rect, layer: AbstractFeatureLayer): this;
    /**
     * Notifies source to add features.
     * @param features features to add
     * @param [needTransform] true if features should be transformed to the map coordinates
     * @returns this
     */
    addFeatures(features: AbstractFeature[], needTransform?: boolean): this;
    /**
     * Notifies source to remove feature.
     * @param feature feature to remove
     * @returns this
     */
    removeFeature(feature: AbstractFeature): this;
    /**
     * Notifies source to remove all features added.
     * @returns this
     */
    clearFeatures(): this;
    /**
     * Requests data from the resource and parses the response
     * @param resource resource url for request
     */
    requestData(resource: string): void;
    /**
     * Sets the unique identifier for the features
     * @param field unique identifier
     * @returns this
     */
    setUniqueField(field: string): this;
    /**
     * Gets the unique identifier for the dataset
     * @returns field
     */
    getUniqueField(): string;
    /**
     * Sets the grid size for layer partitioning that is used for server requests
     * @param resolution grid size
     * @returns this
     */
    setRequestResolution(resolution: number): this;
    /**
     * Gets the grid size for layer partitioning that is used for server requests
     */
    getRequestResolution(): number;
}
export declare namespace Vector {
    /**
     * options
     */
    type Options = AbstractSource.Options & {
        /**
         * field that contains the id for the features
         */
        idfield?: string;
        /**
         * the features requesting mode
         */
        mode?: QueryMode;
        /**
         * a grid size for layer partitioning, that is used for server requests in 'Grid' mode
         */
        requestresolution?: number;
        /**
         * the timeout (in ms) between viewport changed and new features requested (if request is needed)
         */
        timeout?: number;
    };
    type EventMap = AbstractSource.EventMap & {
        [Events.FeatureAdded]: AbstractFeature[];
        [Events.FeatureRemoved]: AbstractFeature;
        [Events.FeaturesCleared]: Iterator<AbstractFeature>;
    };
}
