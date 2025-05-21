/**
 * @module geotoolkit/map/features/Aggregation
 */
import { Iterator } from '@int/geotoolkit/util/iterator';
import { Point as PointFeature } from '@int/geotoolkit/map/features/Point';
/**
 * Point map feature implementation.
 */
export declare class Aggregation extends PointFeature {
    constructor(options?: Aggregation.Options);
    /**
     * Returns iterator through aggregated features
     */
    getAggregation(): Iterator<PointFeature>;
    /**
     * Sets expanded mode
     * @param expanded true, if expanded, else false
     * @returns this
     */
    setExpanded(expanded: boolean): this;
}
export declare namespace Aggregation {
    /**
     * options
     */
    type Options = PointFeature.Options & {};
}
