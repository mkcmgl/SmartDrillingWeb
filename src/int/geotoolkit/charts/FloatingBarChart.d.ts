import { BarChart } from '@int/geotoolkit/charts/BarChart';
/**
 * Chart shape to display data as FloatingBarChart
 */
export declare class FloatingBarChart extends BarChart {
    /**
     * Chart shape to display data as FloatingBarChart
     * @param [options] options
     */
    constructor(options?: FloatingBarChart.Options);
    setProperties(options?: FloatingBarChart.Options): this;
    /**
     * Formats selection info for tooltip purposes, all info is shared between charts
     * @param selection current selection info
     */
    tooltipFormat(selection: Record<string, number[]>): string;
}
export declare namespace FloatingBarChart {
    type Options = Omit<BarChart.Options, 'stacked'>;
}
