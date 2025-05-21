/**
 * @module geotoolkit/gauges/defaults/BandCircular
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
/**
 * Implements a simple circular gauge with adaptive ticks located inside. Axis is a thick line
 * with major, edge, and minor ticks. A classic needle is added to the gauge as well.
 */
export declare class BandCircular extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): BandCircular.Options;
    createGauge(params: Partial<BandCircular.Options>): CircularGauge;
}
export declare namespace BandCircular {
    /**
     * properties
     */
    type Options = CircularGauge.Options & {
        /**
         * The circular axis properties
         */
        axis: CircularAxis.Options;
    };
}
