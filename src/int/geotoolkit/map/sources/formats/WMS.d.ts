import { AbstractFormat } from '@int/geotoolkit/map/sources/formats/AbstractFormat';
import { HttpRequest } from '@int/geotoolkit/map/sources/connectors/HttpRequest';
import { Events } from '@int/geotoolkit/scene/shapes/Image';
import { Events as SourceEvents } from '@int/geotoolkit/map/sources/Events';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractConnector } from '@int/geotoolkit/map/sources/connectors/AbstractConnector';
/**
 * WMS source format that formats map image queries to the WMS (Web Map Service) server
 */
export declare class WMS extends AbstractFormat {
    /**
     * Creates format
     * @param [options] options
     */
    constructor(options?: WMS.Options);
    on<E extends keyof WMS.EventMap>(type: E, callback: (eventType: E, sender: this, args: WMS.EventMap[E]) => void): this;
    off<E extends keyof WMS.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: WMS.EventMap[E]) => void): this;
    notify<E extends keyof WMS.EventMap>(type: E, source: WMS, args?: WMS.EventMap[E]): this;
    query(query: AbstractFormat.RectQuery): this;
    /**
     * Queries data by the options provided.
     * @param query query options
     * @returns this
     */
    getFeatureInfo(query: WMS.FeatureInfo): this;
    /**
     * Aborts FeatureInfo geometry queries previously sent
     * @param [key] key of the queries to abort (all geometry queries aborted if nothing provided)
     * @returns this
     */
    abortGeometryQueries(key?: string): this;
}
export declare namespace WMS {
    type Options = AbstractFormat.Options & {
        /**
         * connector to use for geometry queries
         */
        geometryconnector?: HttpRequest;
    };
    /**
     * query options
     */
    type FeatureInfo = AbstractConnector.SendOptions & {
        /**
         * x-ordinate of the point requested (in device)
         */
        x: number;
        /**
         * y-ordinate of the point requested (in device)
         */
        y: number;
        /**
         * width of the layer visible area (in device)
         */
        width: number;
        /**
         * height of the layer visible area (in device)
         */
        height: number;
        /**
         * left point of the layer visible area (in model)
         */
        left: number;
        /**
         * right point of the layer visible area (in model)
         */
        right: number;
        /**
         * top point of the layer visible area (in model)
         */
        top: number;
        /**
         * bottom point of the layer visible area (in model)
         */
        bottom: number;
        layers?: string;
    };
    type EventMap = AbstractFormat.EventMap & {
        [Events.ImageLoaded]: string | null;
        [SourceEvents.InfoUpdated]: AbstractFeature[];
    };
    type Image = 'image/png' | 'image/png8' | 'image/jpeg' | 'image/vnd.jpeg-png' | 'image/vnd.jpeg-png8' | 'image/gif' | 'image/svg';
}
