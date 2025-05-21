import { Image } from '@int/geotoolkit/map/sources/Image';
import { Range } from '@int/geotoolkit/util/Range';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Polygon } from '@int/geotoolkit/util/Polygon';
import type { ArcGISImage as ArcGISImageLayer } from '@int/geotoolkit/map/layers/ArcGISImage';
import type { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { ArcGISFeature } from '@int/geotoolkit/map/layers/ArcGISFeature';
/**
 * Image source for ArcGIS servers that supports additional features provided by ArcGIS servers (such as getting legend).
 * Supports ArcGIS version 9.3 and higher.
 */
export declare class ArcGISImage extends Image {
    /**
     * @param [options] options
     */
    constructor(options?: ArcGISImage.Options);
    /**
     * Queries server legend (short info about each layer, such as layer name, type and icon).
     * WARNING! Only ArcGIS version 10.0 and higher supports this operation.
     * @param callback the result handler
     */
    queryLegend(callback: (err: Error | null, data?: ArcGISFeature.Legend[]) => void): void;
    /**
     * Queries data by the geometry provided. Is supported in ArcGIS version 9.3 and higher.
     * @param geometry geometry to query
     */
    queryGeometry(geometry: Rect | Point | Polygon): AbstractFeature[];
    /**
     * Aborts all the geometry data queried
     * @returns this
     */
    abortGeometryQueries(): this;
    /**
     * Queries data by the geometry provided. Is supported in ArcGIS version 9.3 and higher.
     * @param geometry area geometry to identify
     * @param layer layer for query
     */
    identify(geometry: Point | Rect | Polygon, layer: ArcGISImageLayer): AbstractFeature[];
    /**
     * Returns layer initial extent rectangle. Is supported in ArcGIS version 9.3 and higher.
     */
    getInitialModelLimits(): Rect;
    /**
     * Sets layers to show as the tooltip info (in .queryGeometry and .identify methods)
     * @param layers layers to show tooltip
     * @returns this
     */
    setTooltipLayers(layers: number | number[]): this;
    /**
     * Sets device resolution of the exported image (dots per inch)
     * @param dpi image resolution (dots per inch)
     * @returns this
     */
    setDPI(dpi: number): this;
    /**
     * Sets time instant or time extent of the exported map image
     * @param time time instant or time extent of the exported map image
     * @returns this
     */
    setTime(time: number | Range): this;
    /**
     * Sets exported image (layer) transparency
     * @param transparent exported image transparency
     * @returns this
     */
    setTransparent(transparent: boolean): this;
    /**
     * Sets parameter to modify the layer drawing order, change layer drawing info, and change layer data source version
     * for this server (if supported). See https://developers.arcgis.com/rest/services-reference/export-map.htm for more info
     * @param layers modified layers' drawing information
     * @returns this
     */
    setDynamicLayers(layers: string | number | (number | string)[]): this;
    /**
     * Sets the authorization token for ArcGIS data server (if needed, null otherwise)
     * @param token the authorization token for ArcGIS server
     * @returns this
     */
    setToken(token: string): this;
    /**
     * Returns the authorization token (if set, null otherwise)
     */
    getToken(): string;
}
export declare namespace ArcGISImage {
    /**
     * options
     */
    type Options = Image.Options & {
        /**
         * authorization token for ArcGIS data servers (if needed)
         */
        token?: string;
        /**
         * device resolution of the exported image (dots per inch)
         */
        dpi?: number;
        /**
         * time instant or time extent of the exported map image
         */
        time?: number | Range;
        /**
         * exported image transparency
         */
        transparent?: boolean;
        /**
         * parameter to modify the layer drawing order, change layer drawing info, and change layer data source version
         * for this server (if supported). See https://developers.arcgis.com/rest/services-reference/export-map.htm for more info
         */
        dynamiclayers?: string | number | (number | string)[];
    };
}
