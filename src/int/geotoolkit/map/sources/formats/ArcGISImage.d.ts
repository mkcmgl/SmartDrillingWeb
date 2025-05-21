import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
import { Events } from '@int/geotoolkit/scene/shapes/Image';
import { Point } from '@int/geotoolkit/util/Point';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Polygon } from '@int/geotoolkit/util/Polygon';
import { Events as SourceEvents } from '@int/geotoolkit/map/sources/Events';
import type { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
/**
 * ArcGIS source format that formats map image queries to the MapService or ImageService server.
 * Supports ArcGIS version 9.3 and higher.
 */
export declare class ArcGISImage extends AbstractFormat {
    /**
     * Creates format
     * @param [options] options
     */
    constructor(options?: ArcGISImage.Options);
    on<E extends keyof ArcGISImage.EventMap>(type: E, callback: (eventType: E, sender: this, args: ArcGISImage.EventMap[E]) => void): this;
    off<E extends keyof ArcGISImage.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ArcGISImage.EventMap[E]) => void): this;
    notify<E extends keyof ArcGISImage.EventMap>(type: E, source: ArcGISImage, args?: ArcGISImage.EventMap[E]): this;
    query(query: AbstractFormat.RectQuery): this;
    /**
     * Sends a data information request based on a geometry provided. Is supported in ArcGIS version 9.3 and higher.
     * @param query query params
     * @returns this
     */
    queryGeometry(query: ArcGISImage.QueryGeometry): this;
    /**
     * Aborts geometry queries previously sent
     * @param [key] key of the queries to abort (all geometry queries aborted if nothing provided)
     * @returns this
     */
    abortGeometryQueries(key?: string): this;
    /**
     * Identifies the information in the area provided. Is supported in ArcGIS version 9.3 and higher
     * @param query query params
     * @returns this
     */
    identify(query: ArcGISImage.IdentifyQuery): this;
}
export declare namespace ArcGISImage {
    /**
     * options
     */
    type Options = AbstractFormat.Options & {
        /**
         * connector to use for geometry queries
         */
        geometryconnector?: AbstractConnector;
    };
    /**
     * query params
     */
    type QueryGeometry = AbstractConnector.SendOptions & {
        /**
         * geometry to query
         */
        geometry: Rect | Point | Polygon;
        /**
         * quering layer id
         */
        layer?: string | number;
    };
    /**
     * query params
     */
    type IdentifyQuery = AbstractFormat.RectQuery & {
        /**
         * area geometry to identify
         */
        geometry: Point | Rect | Polygon;
        /**
         * layers to identify in ArcGIS format (e.g. 'visible:1,2,5')
         */
        layers?: string;
    };
    type EventMap = AbstractFormat.EventMap & {
        [Events.ImageLoaded]: string | null;
        [SourceEvents.InfoUpdated]: {
            layer: string | number;
            data: any;
        };
    };
}
