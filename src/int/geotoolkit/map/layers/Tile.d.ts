import { Tile as TileFormat } from '@int/geotoolkit/map/sources/formats/Tile';
import { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Tile as TileSource } from '@int/geotoolkit/map/sources/Tile';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Tile layer connects to the server and displays a layer created from the server tiles.
 * It consists of a several images (tiles) painted next to each other and thus forming a complete picture. The example of this approach is the Bing layer.
 * @example
 *  // To create a map based on Esri ArcGIS Tile Map.
 * import {Map} from '@int/geotoolkit/map/Map';
 * import {Tile} from '@int/geotoolkit/map/layers/Tile';
 * const curMap = new Map();
 * const curLayer = new Tile({
 *     'url': 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/',
 *     'minlod': 0,
 *     'maxlod': 24,
 *     'formatterfunction': (z, y, x) => z + '/' + y + '/' + x + '.png'
 * });
 * curMap.addLayer(curLayer);
 */
export declare class Tile extends AbstractLayer {
    /**
     * @param [options] options
     */
    constructor(options?: Tile.Options);
    /**
     * Renders layer content
     * @param context rendering context
     */
    renderContent(context: RenderingContext): void;
    /**
     * Gets the minimum Lod for the server
     */
    getMinLod(): number;
    /**
     * Gets the maximum Lod for the server
     */
    getMaxLod(): number;
    /**
     * Returns current tile resolution (in px)
     */
    getTileResolution(): Dimension;
    /**
     * Sets image format for the server
     * This converts the z, x, y image indexes into a path that is added to the server param to locate
     * the requested tile.
     *
     * @param formatter image formatter
     * @returns this
     */
    setImageFormatter(formatter: TileFormat.FormatterCallback): this;
    /**
     * Gets the current formatter function if the function format is used
     */
    getImageFormatter(): TileFormat.FormatterCallback;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): Tile.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] options
     * @returns this
     */
    setProperties(properties: Tile.Options): this;
    /**
     * Sets the min/max numbers of details for the server
     * @param min minimum Lod
     * @param max maximum Lod
     * @returns this
     */
    setLods(min: number, max: number): this;
    /**
     * Gets map zoom level
     */
    getZoomLevel(): number;
    /**
     * Sets the resolution of the tiles from the server
     * @param width tile width (in px)
     * @param height tile height (in px)
     * @returns this
     */
    setTileResolution(width: number, height: number): this;
}
export declare namespace Tile {
    /**
     * options
     */
    type Options = AbstractLayer.Options & TileSource.Options & {
        /**
         * tile source
         */
        source?: TileSource;
    };
    /**
     * properties
     */
    type OptionsOut = AbstractLayer.OptionsOut & {
        /**
         * width for the tiles to use (in px)
         */
        tilewidth: number;
        /**
         * height for the tiles to use (in px)
         */
        tileheight: number;
        /**
         * the amount of cache for the tile images
         */
        imagepool: number;
        /**
         * the minimum level of details for the tiles
         */
        minlod: number;
        /**
         * the maximum level of details for the tiles
         */
        maxlod: number;
        /**
         * the function that takes z, y, x and turns that into tile location
         */
        formatterfunction: TileFormat.FormatterCallback;
    };
}
