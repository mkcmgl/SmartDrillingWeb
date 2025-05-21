import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { ToggleableSymbolItem } from '@int/geotoolkit/charts/legend/ToggleableSymbolItem';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { DataSource } from '@int/geotoolkit/charts/DataSource';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
import type { TooltipSymbolOptions } from '@int/geotoolkit/charts/TooltipSymbolOptions';
import type { Merge } from '@int/geotoolkit/base';
import { AxisDimensionType } from '@int/geotoolkit/charts/AxisDimensionType';
import { DataEvents } from '@int/geotoolkit/charts/DataEvents';
/**
 * Chart shape to display data as LineChart
 */
export declare class LineChart extends AbstractChart implements INodeEnumerable {
    /**
     * Chart shape to display data as LineChart
     * @param [options] chart options
     */
    constructor(options?: LineChart.Options);
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: string[]): void;
    protected createTooltipSymbol(series: LineChart.Series, index?: number): TooltipSymbolOptions | null;
    /**
     * Returns real model value for specific series and sample
     * @param name series name
     * @param sample sample to return
     */
    protected getSeriesModelValue(name: string, sample: number): number;
    getSeriesValue(name: string, sample: number): number;
    /**
     * Sets chart properties
     * @param [options] chart options
     * @returns this
     */
    setProperties(options?: LineChart.Options): this;
    enumerateNodes(callback: (n: Node, target?: QueryBuilder) => void, target?: QueryBuilder): void;
    /**
     * Returns chart properties
     */
    getProperties(): LineChart.OptionsOut;
    protected createLegendItem(series: LineChart.Series, item?: ToggleableSymbolItem): ToggleableSymbolItem;
    protected getSeriesForLegend(): LineChart.Series[];
    getSeriesInfo(id: AxisDimensionType.Y): AbstractChart.Series[];
    getSeriesInfo(id: string | Exclude<AxisDimensionType, AxisDimensionType.Y>): AbstractChart.Series | null;
}
export declare namespace LineChart {
    /**
     * chart options
     */
    type Options = AbstractChart.Options & {
        /**
         * chart data info
         */
        series?: {
            /**
             * x-data series identifier or raw data
             */
            x?: string | number[] | AbstractChart.SeriesWithData;
            /**
             * y-data series identifier(s) or raw data
             */
            y?: string | number[] | SeriesWithData | SeriesWithData[];
        };
        /**
         * symbol options for all series
         */
        symbol?: SymbolOptions;
        /**
         * default selection symbol options for all series
         */
        selectionsymbol?: SymbolOptions;
        /**
         * Show interpolated value between two samples
         */
        showinterpolatedvalue?: boolean;
        /**
         * true to display spline chart instead of polyline
         */
        spline?: boolean;
        /**
         * Maximum value will be used to disconnect the sample if the distance between two samples in x axis is more than specified value
         */
        gapvalue?: number;
        /**
         * value of the cutoff used for removing NaN valued samples. Gaps will only be 'filled' when the cutoff value is non zero.
         */
        gapfillcutoffvalue?: number;
        /**
         * chart baseline
         */
        baseline?: number;
    };
    type OptionsOut = AbstractChart.OptionsOut & {
        /**
         * chart data info
         */
        series: {
            /**
             * x-values or x-data series identifier
             */
            x: AbstractChart.Series;
            /**
             * y-data series settings
             */
            y: SeriesWithData[];
        };
        /**
         * symbols options
         */
        symbol: {
            /**
             * Symbols width, for all series
             */
            width?: number;
            /**
             * Symbols height, for all series
             */
            height?: number;
        };
        /**
         * selection symbols options (see SymbolShape for more info)
         */
        selectionsymbol: {
            /**
             * Symbols width, for all series
             */
            width?: number;
            /**
             * Symbols height, for all series
             */
            height?: number;
        };
        /**
         * true to display spline chart instead of polyline
         */
        spline?: boolean;
        /**
         * chart baseline to use for the line chart
         */
        baseline?: number;
        /**
         * Show interpolated value between two samples
         */
        showinterpolatedvalue?: boolean;
    };
    type SeriesWithData = Merge<Series, {
        data: number[] | string[] | string;
    }>;
    /**
     * Define series properties
     */
    type Series = AbstractChart.Series & {
        symbol?: SeriesSymbolOptions;
        selectionsymbol?: SeriesSymbolOptions;
        linestyle?: LineStyle.Type;
        fillstyle?: FillStyle.Type;
        visible?: boolean;
    };
}
declare type SeriesSymbolOptions = {
    visible?: boolean;
    painter?: SymbolShape.Painter;
    linestyle?: LineStyle.Type;
    fillstyle?: FillStyle.Type;
};
/**
 * Define symbol options
 */
declare type SymbolOptions = {
    /**
     * Width of the symbol
     */
    width?: number;
    /**
     * Height of the symbol
     */
    height?: number;
    /**
     * Keeps size of the symbol fixed in device space and
     * width and height are in device
     */
    sizeisindevicespace?: boolean;
    /**
     * Step to filter symbols
     */
    step?: number;
};
export {};
