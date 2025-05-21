import { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { LayerServerData } from '@int/geotoolkit/map/layers/LayerServerData';
/**
 * The Image layer is an image received from a server and drawn on the canvas. Varieties (inheritors) of this case are WMS and ArcGISImage layers.
 * This layer connects to the server and displays a single image layer from that server.
 */
export declare class Image extends AbstractLayer {
    constructor(options?: Image.Options);
    /**
     * Renders layer content
     * @param context rendering context
     */
    renderContent(context: RenderingContext): void;
    /**
     * Gets the JSON data of the available layers for the server
     */
    getLayers(): LayerServerData[];
    /**
     * Returns the server layer names that are requested.
     * @returns layers
     */
    getVisibleLayers(): (number | string)[];
    /**
     * Adds the passed in ID's to the list of layers to show
     * @param id id(s) for the layer(s) to show
     */
    showLayers(id: number | string | (number | string)[]): this;
    /**
     * Adds the passed in ID's to the list of layers to hide
     * @param [id] ID(s) for the layers to show
     */
    hideLayers(id?: number | number[]): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns object containing the properties
     */
    getProperties(): Image.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] object containing the properties to set
     * @returns this
     */
    setProperties(properties: Image.Options): this;
}
export declare namespace Image {
    /**
     * options
     */
    type Options = AbstractLayer.Options & {
        /**
         * the server layer names that are requested
         */
        showlayers?: (number | string)[];
    };
    /**
     * object containing the properties
     */
    type OptionsOut = AbstractLayer.OptionsOut & {
        /**
         * the server layer names that are requested
         */
        showlayers: (number | string)[];
    };
}
