/**
 * @module geotoolkit/map/sources/loaders/Stream
 */
import { ArcGISFeature } from '@int/geotoolkit/map/sources/loaders/ArcGISFeature';
import type { AbstractLoader } from '@int/geotoolkit/map/sources/loaders/AbstractLoader';
/**
 * Stream source loader that loads settings from ArcGIS Stream server
 */
export declare class Stream extends ArcGISFeature {
    /**
     * Parses server data response
     * @param data data received from the server
     * @param onload function to be called when data is loaded
     * @throws {Error} if ArcGIS Stream server returned error
     */
    parse(data: string | Record<string, any>, onload: (loader: AbstractLoader) => void): void;
}
