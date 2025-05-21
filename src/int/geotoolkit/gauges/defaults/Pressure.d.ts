/**
 * @module geotoolkit/gauges/defaults/Pressure
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
/**
 * Implements a circular gauge with 3 axes, 'outeraxis' and 'inneraxis' which render a set of ticks along a range of values.<br>
 * 'middleaxis' renders an inner color fill between 'axisouter' and 'axisinner'. Ranges can be differentiated by specifying unique color fills.
 */
export declare class Pressure extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): Pressure.Options;
    createGauge(params: Partial<Pressure.Options>): CircularGauge;
}
export declare namespace Pressure {
    /**
     * properties
     */
    type Options = CircularGauge.Options & {
        /**
         * The set of axis to be added
         */
        axis: {
            /**
             * The middle axis options
             */
            axismiddle: CircularAxis.Options;
            /**
             * The outer axis options
             */
            axisouter: CircularAxis.Options;
            /**
             * The inner axis options
             */
            axisinner: CircularAxis.Options;
        };
    };
}
