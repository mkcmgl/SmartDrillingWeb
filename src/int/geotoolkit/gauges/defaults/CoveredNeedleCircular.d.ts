/**
 * @module geotoolkit/gauges/defaults/CoveredNeedleCircular
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { CircularGauge } from '@int/geotoolkit/gauges/CircularGauge';
import type { CircularAxis } from '@int/geotoolkit/gauges/axis/CircularAxis';
import type { Region } from '@int/geotoolkit/gauges/layout/Region';
/**
 * Implements a circular gauge with a needle most part of which is covered by a big circle which
 * has value displayed on it.
 * axis look segmented
 * Value is displayed in the center and the shadow acts as visualization.
 */
export declare class CoveredNeedleCircular extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): CoveredNeedleCircular.Options;
    createGauge(params: Partial<CoveredNeedleCircular.Options>): CircularGauge;
}
export declare namespace CoveredNeedleCircular {
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
        /**
         * The set of needles to be added
         */
        needles: {
            /**
             * The main axis needle options
             */
            mainaxis: CircularAxis.NeedleOptions;
        };
    };
}
