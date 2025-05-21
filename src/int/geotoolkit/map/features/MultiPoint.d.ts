import { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import type { Point as _Point } from '@int/geotoolkit/map/features/Point';
/**
 * Multi-point map feature implementation.
 */
export declare class MultiPoint extends AbstractFeature {
    /**
     * @param options options
     */
    constructor(options: MultiPoint.Options);
    /**
     * Applies Map coordinate system to itself
     *
     * @param layer map layer to use for coordinate system conversion
     * @returns this
     */
    applyMapCS(layer: AbstractLayer): this;
    getGeometry(isMapCS?: boolean): _Point.Geometry[];
}
export declare namespace MultiPoint {
    /**
     * options
     */
    type Options = AbstractFeature.Options & {
        /**
         * feature geometry as array of elements where each element is in the format of {@link @int/geotoolkit/map/features/Point~Point}'s geometry
         */
        geometry: _Point.Geometry[];
    };
}
