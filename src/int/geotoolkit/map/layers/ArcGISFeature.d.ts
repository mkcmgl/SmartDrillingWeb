import { ArcGISFeature as ArcGISFeatureSource } from '@int/geotoolkit/map/sources/ArcGISFeature';
import { Vector } from '@int/geotoolkit/map/layers/Vector';
/**
 * This shape connects to an Esri Feature Server and displays a single layer from that server.
 * Supports ArcGIS version 10.0 and higher.
 */
export declare class ArcGISFeature extends Vector {
    /**
     * @param [options] options
     */
    constructor(options?: ArcGISFeature.Options);
    /**
     * Returns an array of fields to be requested from server
     */
    getRequestFields(): string[] | '*';
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing the properties
     */
    getProperties(): ArcGISFeature.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     * @returns this
     */
    setProperties(properties: ArcGISFeature.Options): this;
    /**
     * Adds the passed in ID's to the list of layers to show
     * @param id id(s) for the layer(s) to show
     */
    showLayers(id: number | string | (string | number)[]): this;
    /**
     * Returns the server layer names that are requested.
     * @returns layers
     */
    getVisibleLayers(): string[];
    /**
     * Queries layer legend data
     * @param [callback] callback to call when the legend data is loaded
     * @returns this
     */
    queryLegend(callback: (err: Error | null, data?: ArcGISFeature.Legend | ArcGISFeature.Legend[]) => void): this;
}
export declare namespace ArcGISFeature {
    type Legend = {
        layerId: string;
        layerName?: string;
        layerType?: string;
        minScale?: number;
        maxScale?: number;
        legend?: LegendItem[];
    };
    type LegendItem = {
        label?: string;
        image?: string;
        width?: number;
        height?: number;
        values?: number[];
    };
    /**
     * options
     */
    type Options = Vector.Options & {
        /**
         * layer id(s) to display (for multilayer servers only)
         */
        layer?: string | number | (string | number)[];
        /**
         * layer will be broken into a grid requestresolution x requestresolution for server requests
         */
        requestresolution?: number;
        /**
         * an array for requested fields. if it is not specified all fields are loaded
         */
        requestfields?: string[];
        /**
         * authorization token for ArcGIS data server (if needed)
         */
        token?: string;
        source?: ArcGISFeatureSource;
    };
    /**
     * object containing the properties
     */
    type OptionsOut = Vector.OptionsOut & {
        /**
         * a grid size for layer partitioning, that is used for server requests
         */
        requestresolution: number;
    };
}
