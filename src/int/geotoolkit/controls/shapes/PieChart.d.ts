import { DonutChart } from '@int/geotoolkit/controls/shapes/DonutChart';
/**
 * This class defines the PieChart object. Pie Chart is the kind of diagram that displays data as a “pie”. Every data item in data source represents a “piece of pie” - slice.<br>
 * The doughnut and pie charts are generally equal but  pie chart does not have a hole in the center so extra parameter - inner radius is always equal to '0'.
 */
export declare class PieChart extends DonutChart {
    constructor(options?: DonutChart.Options, data?: DonutChart.Data);
    /**
     * Sets display options.
     * The implementation keeps 'innerradius' equal to '0' always.
     * @param options options object (see {@link import("geotoolkit/controls/shapes/DonutChart").DonutChart.setOptions} for more info)
     * @returns this
     */
    setOptions(options: DonutChart.Options): this;
}
