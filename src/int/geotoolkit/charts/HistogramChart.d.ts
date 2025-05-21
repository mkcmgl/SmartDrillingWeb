import type { Merge } from '@int/geotoolkit/base';
import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import { ToggleableSymbolItem } from '@int/geotoolkit/charts/legend/ToggleableSymbolItem';
import type { DataSource } from '@int/geotoolkit/charts/DataSource';
import { FrequencyType } from '@int/geotoolkit/controls/shapes/Histogram';
import type { Node } from '@int/geotoolkit/scene/Node';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { TooltipSymbolOptions } from '@int/geotoolkit/charts/TooltipSymbolOptions';
import { AxisDimensionType } from '@int/geotoolkit/charts/AxisDimensionType';
import { DataEvents } from '@int/geotoolkit/charts/DataEvents';
/**
 * Chart shape to display data as HistogramChart
 */
export declare class HistogramChart extends AbstractChart implements INodeEnumerable {
    /**
     * Chart shape to display data as HistogramChart
     * @param [options] chart options
     */
    constructor(options?: HistogramChart.Options);
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: string[]): void;
    enumerateNodes(callback: (n: Node, target?: QueryBuilder) => void, target?: QueryBuilder): void;
    getSeriesInfo(id: AxisDimensionType.Y): HistogramChart.Series[];
    getSeriesInfo(id: string | Exclude<AxisDimensionType, AxisDimensionType.Y>): HistogramChart.Series | null;
    protected createTooltipSymbol(series: HistogramChart.Series, index?: number): TooltipSymbolOptions | null;
    setProperties(options?: HistogramChart.Options): this;
    getProperties(): HistogramChart.OptionsOut;
    protected getSeriesForLegend(): HistogramChart.Series[];
    protected createLegendItem(series: HistogramChart.Series, item?: ToggleableSymbolItem): ToggleableSymbolItem;
}
export declare namespace HistogramChart {
    type Series = AbstractChart.Series & {
        visible?: boolean;
        /**
         * fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
        highlightstyle?: FillStyle.Type;
    };
    type SeriesWithData = Merge<Series, {
        data: number[] | string;
    }>;
    /**
     * chart options
     */
    type Options = AbstractChart.Options & {
        /**
         * frequency type
         */
        frequencytype?: FrequencyType;
        /**
         * total bins amount (null for auto mode)
         */
        bins?: number;
        /**
         * true to enable accumulation mode, false otherwise
         */
        accumulation?: boolean;
        /**
         * chart data info
         */
        series?: {
            /**
             * y-data series identifier(s)
             */
            y?: SeriesWithData[];
        };
        /**
         * Enable stack mode for Histogram
         */
        stacked?: boolean;
        binspacing?: number;
    };
    type OptionsOut = AbstractChart.OptionsOut & {
        /**
         * chart data info
         */
        series: {
            /**
             * y-data series identifier(s)
             */
            y: Series[];
        };
        /**
         * frequency type
         */
        frequencytype: FrequencyType;
        /**
         * total bins amount (null for auto mode)
         */
        bins: number;
        /**
         * true to enable accumulation mode, false otherwise
         */
        accumulation: boolean;
        binspacing?: number;
        /**
         * Histogram stack mode
         */
        stacked: boolean;
    };
}
