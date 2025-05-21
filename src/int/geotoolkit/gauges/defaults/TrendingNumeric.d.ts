/**
 * @module geotoolkit/gauges/defaults/TrendingNumeric
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { Group } from '@int/geotoolkit/scene/Group';
import { NumericGauge } from '@int/geotoolkit/gauges/NumericGauge';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Region } from '@int/geotoolkit/gauges/layout/Region';
/**
 * Implements a horizontally-aligned numeric gauge that features an icon for displaying value trends
 */
export declare class TrendingNumeric extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): TrendingNumeric.Options;
    createGauge(params: Partial<TrendingNumeric.Options> & {
        namefill?: FillStyle.Type;
    }): NumericGauge;
}
export declare namespace TrendingNumeric {
    /**
     * properties
     */
    type Options = NumericGauge.Options & {
        /**
         * The set of regions to be added
         */
        regions: {
            /**
             * The value region options
             */
            valuebox: Region.Options;
            /**
             * The name region options
             */
            namebox: Region.Options;
            /**
             * The trend indicator region options
             */
            trendbox: Region.Options;
        };
        /**
         * The fill style for top group
         */
        topfill?: FillStyle.Type;
        /**
         * The fill style for bottom group
         */
        valuefill?: FillStyle.Type;
        /**
         * The trend up group
         */
        trendup: Group;
        /**
         * The trend down group
         */
        trenddown: Group;
    };
}
