/**
 * @module geotoolkit/gauges/defaults/ModernCircular
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
import type { Region } from '@int/geotoolkit/gauges/layout/Region';
/**
 * Implements a circular gauge without a needle which displays value by filling the grey circle with
 * light blue value fill which has round line tips. Value is displayed in the center and the shadow acts as visualization.
 */
export declare class ModernCircular extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): ModernCircular.Options;
    createGauge(params: Partial<ModernCircular.Options> & {
        regions?: Record<string, Region.Options>;
    }): CircularGauge;
}
export declare namespace ModernCircular {
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
             * The center region options
             */
            centerregion: Region.Options;
        };
    };
}
