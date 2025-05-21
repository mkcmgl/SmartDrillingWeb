import { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
/**
 * Polygon map feature implementation.
 */
export declare class Polygon extends AbstractFeature {
    /**
     * @param options options
     */
    constructor(options: Polygon.Options);
    /**
     * Applies Map coordinate system to itself
     *
     * @param layer map layer to use for coordinate system conversion
     * @returns this
     */
    applyMapCS(layer: AbstractLayer): this;
    getGeometry(isMapCS?: boolean): Polygon.Geometry;
}
export declare namespace Polygon {
    /**
     * options
     */
    export type Options = AbstractFeature.Options & {
        /**
         * feature geometry
         */
        geometry: Geometry;
    };
    export type Geometry = GeometryBase & {};
    type GeometryBase = {
        /**
         * x-coordinates
         */
        x: number[];
        /**
         * y-coordinates
         */
        y: number[];
    };
    export {};
}
