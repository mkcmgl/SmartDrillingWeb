/**
 * @module geotoolkit/gauges/defaults/SegmentedBandCircular
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
import type { Region as _Region } from '@int/geotoolkit/gauges/layout/Region';
/**
 * Implements a circular gauge with one axis where ticks are just hollow spaces which makes the gauge
 * axis look segmented
 * Value is displayed in the center and the shadow acts as visualization.
 */
export declare class SegmentedBandCircular extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): SegmentedBandCircular.Options;
    createGauge(params: Partial<SegmentedBandCircular.Options>): CircularGauge;
}
export declare namespace SegmentedBandCircular {
    /**
     * properties
     */
    type Options = CircularGauge.Options & {
        /**
         * The set of axis to be added
         */
        axis: {
            /**
             * The main axis options
             */
            mainaxis: CircularAxis.Options;
        };
        /**
         * The set of regions to be added
         */
        regions: {
            /**
             * The value region options
             */
            valueregion: _Region.Options;
        };
    };
}
