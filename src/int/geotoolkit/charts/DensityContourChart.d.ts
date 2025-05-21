import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import type { GeometryMode } from '@int/geotoolkit/controls/shapes/density/DensityContourShape';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Dimension } from '@int/geotoolkit/util/Dimension';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { DataSource } from '@int/geotoolkit/charts/DataSource';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { AxisDimensionType } from '@int/geotoolkit/charts/AxisDimensionType';
import type { DataEvents } from '@int/geotoolkit/charts/DataEvents';
/**
 * Chart shape to display data as DensityContourChart
 */
export declare class DensityContourChart extends AbstractChart {
    /**
     * Chart shape to display data as DensityContourChart
     * @param [options] chart options
     */
    constructor(options?: DensityContourChart.Options);
    getSeriesInfo(id: string | AxisDimensionType): AbstractChart.Series | null;
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: string[]): void;
    getProperties(): DensityContourChart.OptionsOut;
    setProperties(options?: DensityContourChart.Options): this;
}
export declare namespace DensityContourChart {
    /**
     * density grid
     */
    type DensityGrid = {
        /**
         * virtual grid dimension
         */
        dimension?: Dimension;
        /**
         * cell size
         */
        cellsize?: number;
        /**
         * band width
         */
        bandwidth?: number;
        /**
         * thresholds
         */
        thresholds?: number | number[] | ((value: Float32Array) => number);
        /**
         * real model limits of X and Y values, by default it is calculated with using min and max values for specified data
         */
        modellimits?: Rect;
    };
    /**
     * chart options
     */
    type Options = AbstractChart.Options & {
        /**
         * chart series info
         */
        series?: {
            /**
             * x-values or x-data series identifier
             */
            x?: string | number[] | AbstractChart.SeriesWithData;
            /**
             * y-values or y-data series identifier
             */
            y?: string | number[] | AbstractChart.SeriesWithData;
        };
        /**
         * density grid or properties
         */
        grid?: DensityGrid;
        /**
         * band spacing, 0 means that there is no band spacing applied to contours
         */
        bandspacing?: number;
        /**
         * band opacity
         */
        bandopacity?: number;
        /**
         * color provider
         */
        colorprovider?: ColorProvider | null;
        /**
         * geometry mode
         */
        geometry?: GeometryMode;
        /**
         * style applied on outline
         */
        linestyle?: LineStyle.Type;
        /**
         * style applied on fill
         */
        fillstyle?: FillStyle.Type;
    };
    type OptionsOut = AbstractChart.OptionsOut & {
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
        };
        /**
         * density grid or properties
         */
        grid: DensityGrid;
        /**
         * band spacing, 0 means that there is no band spacing applied to contours
         */
        bandspacing?: number;
        /**
         * band opacity
         */
        bandopacity?: number;
        /**
         * color provider
         */
        colorprovider?: ColorProvider | null;
        /**
         * geometry mode
         */
        geometry?: GeometryMode;
        /**
         * line style
         */
        linestyle?: LineStyle;
        /**
         * fill style
         */
        fillstyle?: FillStyle;
    };
}
