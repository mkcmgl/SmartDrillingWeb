/**
 * @module geotoolkit/map/sources/loaders/GeoTile
 */
import { AbstractLoader } from '@int/geotoolkit/map/sources/loaders/AbstractLoader';
import type { AbstractSystem } from '@int/geotoolkit/map/coordinatesystems/AbstractSystem';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * GeoTile loader
 */
export declare abstract class GeoTile extends AbstractLoader {
    parse(data: Record<string, any> | string, onload: (loader: AbstractLoader) => void): void;
    /**
     * Loads data that needed for GeoTile
     * @param data data loaded from server
     * @param callback settings callback
     */
    abstract getSettingsData(data: Record<string, any> | string, callback: GeoTile.SettingsDataCallback): void;
}
export declare namespace GeoTile {
    /**
     * Callback for GeoTile.getSettingsData
     */
    type SettingsDataCallback = (settings: SettingsData) => void;
    /**
     * data setting object
     */
    type SettingsData = {
        /**
         * epsg ID or coordinate system
         */
        epsg: number | string | AbstractSystem;
        /**
         * image device limits
         */
        imagedevicelimits: Rect;
        /**
         * projected GeoTile model points in current coordinate system:
         * [leftTop, leftBottom, rightTop]
         */
        imagemodelpoints: [
            Point,
            Point,
            Point
        ];
        /**
         * tiled shape additional options
         */
        tiledshapeoptions?: {
            /**
             * minimum load layer to use OSM
             */
            minlod?: number;
            /**
             * maximum load layer to use OSM
             */
            maxlod?: number;
            /**
             * images sources to use simple image
             */
            images?: {
                id: string;
                width: number;
                height: number;
            }[];
        };
    };
}
