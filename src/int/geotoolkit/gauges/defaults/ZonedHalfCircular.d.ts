/**
 * @module geotoolkit/gauges/defaults/ZonedHalfCircular
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
import type { Region as _Region } from '@int/geotoolkit/gauges/layout/Region';
/**
 * Implements a simple half-circular gauge with no ticks. Axis is a thick filled bar with
 * colored regions. Also contains a simple needle
 */
export declare class ZonedHalfCircular extends AbstractFactory {
    constructor();
    /**
     * Return properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): ZonedHalfCircular.Options;
    createGauge(params: Partial<ZonedHalfCircular.Options>): CircularGauge;
}
export declare namespace ZonedHalfCircular {
    /**
     * properties
     */
    type Options = CircularGauge.Options & {
        /**
         * The set of axis to be added
         */
        axis: CircularAxis.Options;
        /**
         * The set of regions to be added
         */
        regions: {
            /**
             * The value region options
             */
            valueregion: _Region.Options;
            /**
             * The left edge region options
             */
            leftedge: _Region.Options;
            /**
             * The right edge region options
             */
            rightedge: _Region.Options;
        };
    };
}
