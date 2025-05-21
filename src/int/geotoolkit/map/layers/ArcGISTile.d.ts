import { Tile as TileLayer } from '@int/geotoolkit/map/layers/Tile';
/**
 * This shape connects to an Esri Map Server and displays a single layer using its built-in tiled API.
 * Server must support raster tiles. Supports ArcGIS version 9.3 and higher.
 */
export declare class ArcGISTile extends TileLayer {
    /**
     * @param [options] layer options
     */
    constructor(options?: TileLayer.Options);
}
