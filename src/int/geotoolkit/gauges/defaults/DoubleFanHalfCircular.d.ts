/**
 * @module geotoolkit/gauges/defaults/DoubleFanHalfCircular
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
import type { Region } from '@int/geotoolkit/gauges/layout/Region';
/**
 * Implements a simple half-circular gauge with no ticks. Axis is transparent,
 * uses a thick value fill instead of a needle.
 */
export declare class DoubleFanHalfCircular extends AbstractFactory {
    constructor();
    /**
     * Return properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): DoubleFanHalfCircular.Options;
    createGauge(params: Partial<DoubleFanHalfCircular.Options>): CircularGauge;
}
export declare namespace DoubleFanHalfCircular {
    /**
     * properties
     */
    type Options = CircularGauge.Options & {
        /**
         * The set of axis to be added
         */
        axis: {
            /**
             * The inner axis options
             */
            inneraxis: CircularAxis.Options;
            /**
             * The outer axis options
             */
            outeraxis: CircularAxis.Options;
        };
        /**
         * The set of regions to be added
         */
        regions: {
            /**
             * The value region options
             */
            valueregion: Region.Options;
        };
    };
}
