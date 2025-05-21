import { AreaChart } from '@int/geotoolkit/charts/AreaChart';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
/**
 * Chart shape to display AreaRangeChart (filled area between two series)
 */
export declare class AreaRangeChart extends AreaChart {
    /**
     * Chart shape to display AreaRangeChart (filled area between two series)
     * @param [options] chart options
     */
    constructor(options?: AreaRangeChart.Options);
    /**
     * Sets area fill style
     * @param [fillstyle] area fillstyle
     * @returns this
     */
    setFillStyle(fillstyle?: FillStyle.Type): this;
}
export declare namespace AreaRangeChart {
    /**
     * chart options
     */
    type Options = AreaChart.Options & {
        /**
         * Fill style
         */
        fillstyle?: FillStyle.Type | null;
    };
}
