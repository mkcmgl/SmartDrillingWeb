import { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import type { Polygon } from '@int/geotoolkit/map/features/Polygon';
/**
 * Multi-polygon map feature implementation.
 */
export declare class MultiPolygon extends AbstractFeature {
    /**
     * @param options feature options
     */
    constructor(options: MultiPolygon.Options);
    /**
     * Applies Map coordinate system to itself
     *
     * @param layer map layer to use for coordinate system conversion
     * @returns this
     */
    applyMapCS(layer: AbstractLayer): this;
    getGeometry(isMapCS?: boolean): Polygon.Geometry[];
}
export declare namespace MultiPolygon {
    /**
     * feature options
     */
    type Options = AbstractFeature.Options & {
        /**
         * feature geometry as array of elements where each element is in the format of {@link @int/geotoolkit/map/features/Polygon~Polygon}'s geometry
         */
        geometry: Polygon.Geometry[];
    };
}
