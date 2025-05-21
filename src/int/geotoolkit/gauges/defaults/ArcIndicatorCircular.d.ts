/**
 * @module geotoolkit/gauges/defaults/ArcIndicatorCircular
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
/**
 * Implements a circular gauge with one axis and a shadow moving on the outer side of that axis.
 * Value is displayed in the center and the shadow acts as visualization.
 */
export declare class ArcIndicatorCircular extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): ArcIndicatorCircular.Options;
    createGauge(params: Partial<ArcIndicatorCircular.Options>): CircularGauge;
}
export declare namespace ArcIndicatorCircular {
    /**
     * properties
     */
    type Options = CircularGauge.Options & {
        /**
         * The set of axis to be added
         */
        axis: {
            /**
             * The tick axis options
             */
            tickaxis: CircularAxis.Options;
            /**
             * The arc axis options
             */
            arcaxis: CircularAxis.Options;
        };
    };
}
