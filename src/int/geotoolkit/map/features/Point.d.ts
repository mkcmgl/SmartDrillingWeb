import { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
/**
 * Point map feature implementation.
 */
export declare class Point extends AbstractFeature {
    /**
     * @param options options
     */
    constructor(options: Point.Options);
    /**
     * Applies Map coordinate system to itself
     *
     * @param layer map layer to use for coordinate system conversion
     * @returns this
     */
    applyMapCS(layer: AbstractLayer): this;
    getGeometry(isMapCS?: boolean): Point.Geometry;
}
export declare namespace Point {
    /**
     * options
     */
    type Options = AbstractFeature.Options & {
        /**
         * geometry
         */
        geometry: Geometry;
    };
    type Geometry = {
        /**
         * x-ordinate
         */
        x: number;
        /**
         * y-ordinate
         */
        y: number;
    };
}
