import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import { RegressionLine as RegressionLineShape } from '@int/geotoolkit/controls/shapes/RegressionLine';
import type { DataSource } from '@int/geotoolkit/charts/DataSource';
import type { RegressionBase } from '@int/geotoolkit/controls/util/regression/RegressionBase';
import { AxisDimensionType } from '@int/geotoolkit/charts/AxisDimensionType';
import type { DataEvents } from '@int/geotoolkit/charts/DataEvents';
/**
 * Chart shape to display data as RegressionLine
 */
export declare class RegressionLine extends AbstractChart {
    /**
     * Chart shape to display data as RegressionLine
     * @param [options] chart options
     */
    constructor(options?: RegressionLine.Options);
    getSeriesInfo(id: string | AxisDimensionType): AbstractChart.Series | null;
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: string[]): void;
    getProperties(): RegressionLine.OptionsOut;
    setProperties(options?: RegressionLine.Options): this;
}
export declare namespace RegressionLine {
    /**
     * chart options
     */
    type Options = AbstractChart.Options & RegressionLineShape.OptionsBase & {
        /**
         * regression line series info
         */
        series?: {
            /**
             * x-values array or x-data series identifier
             */
            x?: string | number[] | AbstractChart.SeriesWithData;
            /**
             * y-values array or y-data series identifier
             */
            y?: string | number[] | AbstractChart.SeriesWithData;
            /**
             * weight-values array or weight data series identifier
             */
            weight?: string | number[];
        };
    };
    type OptionsOut = AbstractChart.OptionsOut & RegressionLineShape.OptionsBase & {
        /**
         * chart series info
         */
        series?: {
            /**
             * x-data series identifier
             */
            x?: AbstractChart.Series;
            /**
             * y-data series identifier
             */
            y?: AbstractChart.Series;
            /**
             * weight data series identifier
             */
            weight?: string;
        };
        /**
         * statistics of regression model
         */
        statistics: RegressionBase.Statistics;
    };
}
