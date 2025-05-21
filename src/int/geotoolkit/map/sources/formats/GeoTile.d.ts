/**
 * @module geotoolkit/map/sources/formats/GeoTile
 */
import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Cancel } from '@int/geotoolkit/util/Cancel';
import type { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
import type { HttpRequest } from '@int/geotoolkit/map/sources/connectors/HttpRequest';
/**
 * GeoTile format
 */
export declare abstract class GeoTile extends AbstractFormat {
    query(query: GeoTile.Query): this;
    /**
     * Gets URL from query data
     * @param query query data
     * @returns request URL
     */
    abstract getURLFromQuery(query: GeoTile.Query): string;
    /**
     * Gets request options from query data
     * @param query query data
     * @returns request options
     */
    getOptionsFromQuery(query: GeoTile.Query): HttpRequest.SendOptions;
    /**
     * Gets data from response
     * @param data response data
     * @returns base64 image string
     */
    abstract getDataFromResponse(data: ArrayBuffer): string;
}
export declare namespace GeoTile {
    /**
     * query data
     */
    type Query = AbstractConnector.SendOptions & {
        /**
         * image model area
         */
        tilerect?: Rect;
        /**
         * image device area
         */
        transformedmodelrect?: Rect;
        /**
         * tile device area
         */
        devicetilerect?: Rect;
        /**
         * cancel token
         */
        cancel?: Cancel;
        /**
         * tiled shape callback
         */
        callback?: (error: Error, data?: string) => void;
        /**
         * image id
         */
        id?: number;
        /**
         * horizontal tile position
         */
        i?: number;
        /**
         * vertical tile position
         */
        j?: number;
        /**
         * tile depth layer
         */
        z?: number;
    };
}
