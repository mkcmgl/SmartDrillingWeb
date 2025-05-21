import { AbstractFeature } from '@int/geotoolkit/map/features/AbstractFeature';
import type { AbstractLayer } from '@int/geotoolkit/map/layers/AbstractLayer';
import type { LineString } from '@int/geotoolkit/map/features/LineString';
/**
 * Multi line string map feature implementation.
 */
export declare class MultiLineString extends AbstractFeature {
    /**
     * @param options feature options
     */
    constructor(options: MultiLineString.Options);
    /**
     * Applies Map coordinate system to itself
     *
     * @param layer map layer to use for coordinate system conversion
     * @returns this
     */
    applyMapCS(layer: AbstractLayer): this;
    getGeometry(isMapCS?: boolean): LineString.Geometry[];
}
export declare namespace MultiLineString {
    /**
     * feature options
     */
    type Options = AbstractFeature.Options & {
        /**
         * feature geometry as array of elements where each element is in the format of {@link @int/geotoolkit/map/features/LineString~LineString}'s geometry
         */
        geometry: LineString.Geometry[];
    };
}
