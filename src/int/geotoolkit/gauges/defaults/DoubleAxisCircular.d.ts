/**
 * @module geotoolkit/gauges/defaults/DoubleAxisCircular
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import type { Region as LayoutRegion } from '@int/geotoolkit/gauges/layout/Region';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
/**
 * Implements a factory which creates a gauge with two axes. One axis is slightly smaller than another
 * and is called 'inneraxis' and the bigger one is called 'outeraxis'. Two marker style needles are
 * also being added here, one pointing at the outside border of the outer axis and the other one points
 * at the inner border of the inner axis. Values are displayed inside the circle.
 */
export declare class DoubleAxisCircular extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): DoubleAxisCircular.Options;
    createGauge(params: Partial<DoubleAxisCircular.Options> & {
        regions?: Record<string, LayoutRegion.Options>;
    }): CircularGauge;
}
export declare namespace DoubleAxisCircular {
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
    };
}
