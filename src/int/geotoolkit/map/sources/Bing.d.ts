import { BingImagerySet } from '@int/geotoolkit/map/BingImagerySet';
import { Tile as TileSource } from '@int/geotoolkit/map/sources/Tile';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Tile source that allows user to get tiles from the Bing Maps server
 */
export declare class Bing extends TileSource {
    /**
     * @param [options] options
     */
    constructor(options?: Bing.Options);
    /**
     * Sets Bing imagery set
     * @param imagerySet bing imagery set
     * @returns this
     */
    setImagerySet(imagerySet: BingImagerySet): this;
    /**
     * Returns Bing imagery set
     */
    getImagerySet(): BingImagerySet;
    /**
     * Sets Bing Maps API key
     * @param key bing maps key
     * @returns this
     */
    setKey(key: string): this;
    /**
     * Returns Bing Maps API key
     */
    getKey(): string;
    /**
     * Sets Bing Maps culture code
     * @param culture bing maps culture code
     * @returns this
     */
    setCulture(culture: string): this;
    /**
     * Returns Bing Maps culture code
     */
    getCulture(): string;
    /**
     * Sets Bing Maps servers uri scheme to use
     * @param uriScheme bing maps servers uri scheme
     * @returns this
     */
    setUriScheme(uriScheme: string): this;
    /**
     * Returns Bing Maps servers uri scheme
     */
    getUriScheme(): string;
    /**
     * Sets Bing Maps center point
     * @param point bing maps culture code
     * @returns this
     */
    setCenterPoint(point: Point): this;
    /**
     * Returns Bing Maps center point
     */
    getCenterPoint(): null | Point;
}
export declare namespace Bing {
    /**
     * options
     */
    type Options = TileSource.Options & {
        /**
         * Bing Maps API key. Get yours at http://www.bingmapsportal.com/
         */
        key?: string;
        /**
         * the culture code to use for the request
         */
        culture?: string;
        /**
         * server uri scheme to use
         */
        urischeme?: string;
        /**
         * the type of imagery for request. See
         * geotoolkit.map.BingImagerySet enum for all imagery supported
         */
        imageryset?: BingImagerySet | string;
        /**
         * the center point to use for the imagery
         * WARNING! center point is required for the Birdseye imagery and its varieties
         */
        centerpoint?: Point;
    };
}
