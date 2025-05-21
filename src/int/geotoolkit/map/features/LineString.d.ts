import { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
/**
 * Line string (or "polyline") map feature implementation.
 */
export declare class LineString extends AbstractFeature {
    /**
     * @param options line and map feature options
     */
    constructor(options: LineString.Options);
    /**
     * Applies Map coordinate system to itself
     *
     * @param layer map layer to use for coordinate system conversion
     * @returns this
     */
    applyMapCS(layer: AbstractLayer): this;
    getGeometry(isMapCS?: boolean): LineString.Geometry;
}
export declare namespace LineString {
    /**
     * line and map feature options
     */
    type Options = AbstractFeature.Options & {
        /**
         * feature geometry
         */
        geometry: Geometry;
    };
    type Geometry = {
        /**
         * array of x-coordinates
         */
        x: number[];
        /**
         * array of y-coordinates
         */
        y: number[];
    };
}
