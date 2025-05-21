/**
 * @module geotoolkit/map/features/converters/BaseConverter
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Iterator } from '@int/geotoolkit/util/iterator';
import type { Events } from '@int/geotoolkit/map/layers/Events';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { AbstractFeatureLayer } from '@int/geotoolkit/map/layers/AbstractFeatureLayer';
/**
 * Converts features in a form convenient for storage and processing. Returns saved features on request.
 */
export declare class BaseConverter extends EventDispatcher {
    on<E extends keyof BaseConverter.EventMap>(type: E, callback: (eventType: E, sender: this, args: BaseConverter.EventMap[E]) => void): this;
    off<E extends keyof BaseConverter.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: BaseConverter.EventMap[E]) => void): this;
    notify<E extends keyof BaseConverter.EventMap>(type: E, source: BaseConverter, args?: BaseConverter.EventMap[E]): this;
    /**
     * Converts and saves new features in array. All features are supported.
     * @param features new features to add
     * @returns features that were not processed
     */
    saveConvertedFeatures(features: AbstractFeature[]): AbstractFeature[] | null;
    /**
     * Returns saved features corresponded to the options
     * @param options request options
     * @returns features stored
     */
    getFeatures(options: BaseConverter.FeaturesOptions): AbstractFeature[] | Iterator<AbstractFeature>;
    /**
     * Removes feature(s) from the store
     * @param features feature(s) to remove
     * @returns this
     */
    removeFeatures(features: Iterator<AbstractFeature> | AbstractFeature): this;
    /**
     * Clears all the features from the store
     * @returns this
     */
    clear(): this;
}
export declare namespace BaseConverter {
    /**
     * request options
     */
    type FeaturesOptions = {
        /**
         * bounding box for requested features
         */
        bbox?: Rect;
        /**
         * additional filter by features
         */
        filter?: ((feature: AbstractFeature) => boolean) | null;
        /**
         * map scale to calculate minimum distance between features for aggregation
         */
        scale?: number;
        layer?: AbstractFeatureLayer;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.FeaturesUpdated]: boolean;
    };
}
