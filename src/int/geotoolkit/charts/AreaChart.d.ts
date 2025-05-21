import { LineChart } from '@int/geotoolkit/charts/LineChart';
/**
 * Chart shape to display AreaChart (LineChart with fill styles)
 */
export declare class AreaChart extends LineChart {
    /**
     * Chart shape to display AreaChart (LineChart with fill styles)
     * @param [options] chart options
     */
    constructor(options?: AreaChart.Options);
    /**
     * Sets properties
     * @param options object properties
     */
    setProperties(options?: AreaChart.Options): this;
    /**
     * Returns properties
     * @returns object properties
     */
    getProperties(): AreaChart.OptionsOut;
}
export declare namespace AreaChart {
    /**
     * chart options
     */
    type Options = LineChart.Options & {
        /**
         * stacked mode flag
         */
        stacked?: boolean;
        /**
         * percent area mode flag
         */
        percentarea?: boolean;
    };
    type OptionsOut = LineChart.OptionsOut & {
        /**
         * stacked mode flag
         */
        stacked: boolean;
        /**
         * percent area mode flag
         */
        percentarea: boolean;
    };
}
