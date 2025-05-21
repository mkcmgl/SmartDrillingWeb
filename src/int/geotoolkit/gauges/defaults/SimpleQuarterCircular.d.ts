/**
 * @module geotoolkit/gauges/defaults/SimpleQuarterCircular
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
/**
 * Implements a minimal quarter circular gauge with a needle
 */
export declare class SimpleQuarterCircular extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): SimpleQuarterCircular.Options;
    createGauge(params: Partial<SimpleQuarterCircular.Options>): CircularGauge;
}
export declare namespace SimpleQuarterCircular {
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
         * The set of region sizes to be set
         */
        regionsizes: Record<string, string | number>;
    };
}
