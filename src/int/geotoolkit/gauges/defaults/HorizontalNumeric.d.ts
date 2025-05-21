/**
 * @module geotoolkit/gauges/defaults/HorizontalNumeric
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { NumericGauge } from '@int/geotoolkit/gauges/NumericGauge';
import type { Region } from '@int/geotoolkit/gauges/layout/Region';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Implements a horizontally-aligned numeric gauge.
 */
export declare class HorizontalNumeric extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): HorizontalNumeric.Options;
    createGauge(params: Partial<HorizontalNumeric.Options> & {
        regions?: Record<string, Region.Options>;
    }): NumericGauge;
}
export declare namespace HorizontalNumeric {
    /**
     * properties
     */
    type Options = NumericGauge.Options & {
        /**
         * The set of regions to be added
         */
        regions: {
            /**
             * The name region option
             */
            namebox: Region.Options;
            /**
             * The value region options
             */
            valuebox: Region.Options;
        };
        /**
         * The fill style for name box
         */
        namefill?: FillStyle.Type;
        /**
         * The fill style for value box
         */
        valuefill?: FillStyle.Type;
    };
}
