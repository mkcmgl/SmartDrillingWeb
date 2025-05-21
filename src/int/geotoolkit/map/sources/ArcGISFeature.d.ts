import { IdByAttribute } from '@int/geotoolkit/map/features/strategies/IdByAttribute';
import { Vector } from '@int/geotoolkit/map/sources/Vector';
import type { Text } from '@int/geotoolkit/scene/shapes/Text';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { LayerServerData } from '@int/geotoolkit/map/layers/LayerServerData';
import type { ArcGISFeature as ArcGISFeatureLayer } from '@int/geotoolkit/map/layers/ArcGISFeature';
/**
 * Vector source that allows user to get features from ArcGIS FeatureService server.
 * Supports ArcGIS version 10.0 and higher.
 */
export declare class ArcGISFeature extends Vector {
    /**
     * @param [options] options
     */
    constructor(options?: ArcGISFeature.Options);
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
    /**
     * Sets the list of the fields to request from the server (should be set before the server url)
     * @param requestFields an array of fields to request from server
     * @returns this
     */
    setRequestFields(requestFields: string[] | '*'): this;
    /**
     * Returns an array of fields to be requested from server
     */
    getRequestFields(): string[] | '*';
    /**
     * Sets the list of the fields to request from the server (should be set before the server url)
     * @param precision number of decimal places in requested geometry values
     * @returns this
     */
    setGeometryPrecision(precision: number): this;
    /**
     * Returns number of decimal places in requested geometry values
     */
    getGeometryPrecision(): number;
    /**
     * Returns the layers data array (for the multilayer server source)
     * Should be used asynchronically after loadServerData() method is called
     */
    getLayers(): LayerServerData[];
    /**
     * Returns separate feature source for the given layer (for the multilayer server source)
     * Should be used asynchronically after loadServerData() method is called
     * @param id required layer id
     * @returns source feature source for sublayer
     */
    getLayerSource(id: string): ArcGISFeature;
    /**
     * Returns true if feature source's server contains multiple layers
     * Should be used asynchronically after loadServerData() method is called
     */
    isMultilayerSource(): boolean;
    /**
     * Returns the server layer's global alpha (for singlelayer servers basically)
     * Should be used asynchronically after loadServerData() method is called
     */
    getGlobalAlpha(): number;
    /**
     * Returns scale visible range for the server's layer (for singlelayer servers basically)
     * Should be used asynchronically after loadServerData() method is called
     * @returns [minScale, maxScale]
     */
    getScaleRange(): number[];
    /**
     * Returns annotation's text shape parsed from the server (for singlelayer servers basically)
     * Should be used asynchronically after loadServerData() method is called
     */
    getAnnotationShape(): Text;
    /**
     * Adds the passed in ID's to the list of layers to show
     * @param id id(s) for the layer(s) to show
     */
    showLayers(id: null | string | number | (string | number)[]): this;
    /**
     * Returns layer initial extent rectangle
     */
    getInitialModelLimits(): Rect;
    /**
     * Returns the server layer ids that are requested.
     * @returns layers
     */
    getVisibleLayers(): string[];
    /**
     * Disposes this source, once disposed it should not be used anymore.<br>
     */
    dispose(): void;
    /**
     * Creates a server legend from its templates (short info about each layer, such as layer name, type and icon)
     * @param callback the result handler
     */
    queryLegend(callback: (err: Error | null, data?: ArcGISFeatureLayer.Legend | ArcGISFeatureLayer.Legend[]) => void): void;
}
export declare namespace ArcGISFeature {
    /**
     * options
     */
    type Options = Vector.Options & {
        /**
         * an array for requested fields. If null, all the fields are loaded
         */
        requestfields?: string[] | '*';
        /**
         * server layers to request (for multilayer server only)
         */
        layers?: string | string[];
        /**
         * true if offsetSupport server's property should be used (otherwise quadtree
         * division is used). WARNING! Some servers might have wrong offset implementation and partially miss features with or
         * without offset. Make sure your server is working correctly or change 'offsetsupport' property if the server settings
         * cannot be changed.
         */
        offsetsupport?: boolean;
        /**
         * number of decimal places in requested geometry values
         */
        geometryprecision?: number;
        /**
         * authorization token for ArcGIS data servers (if needed)
         */
        token?: string;
        scalerange?: [
            number | null,
            number | null
        ];
        getfeatureid?: IdByAttribute;
    };
}
