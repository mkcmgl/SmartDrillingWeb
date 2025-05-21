/**
 * @module geotoolkit/gauges/defaults/SimpleNumeric
 */
import { AbstractFactory } from '@int/geotoolkit/gauges/AbstractFactory';
import { NumericGauge } from '@int/geotoolkit/gauges/NumericGauge';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Implements a simple numeric gauge. Contains two regions with a descriptor in the north
 * position and a value in the south position. The north region has a blue fill background,
 * the south region has a white fill background
 */
export declare class SimpleNumeric extends AbstractFactory {
    constructor();
    /**
     * Returns properties pertaining to the gauge implemented by this factory. This function is called by CreateGauge() method in this class and is mainly for internal use.
     */
    getGaugeProperties(): SimpleNumeric.Options;
    createGauge(params: Partial<SimpleNumeric.Options> & {
        bottomfill?: FillStyle.Type;
    }): NumericGauge;
}
export declare namespace SimpleNumeric {
    /**
     * properties
     */
    type Options = NumericGauge.Options & {
        /**
         * The fill style for top group
         */
        topfill?: FillStyle.Type;
        /**
         * The fill style for bottom group
         */
        valuefill?: FillStyle.Type;
    };
}
