/**
 * @module geotoolkit/charts/BoxPlotChart
 */
import type { Merge } from '@int/geotoolkit/base';
import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import type { BoxPlot } from '@int/geotoolkit/controls/shapes/BoxPlot';
import { BoxPlot as ShapeBoxPlot, DataMode } from '@int/geotoolkit/controls/shapes/BoxPlot';
import { ToggleableSymbolItem } from '@int/geotoolkit/charts/legend/ToggleableSymbolItem';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { DataEvents } from '@int/geotoolkit/charts/DataEvents';
import type { DataSource } from '@int/geotoolkit/charts/DataSource';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
import { AxisDimensionType } from '@int/geotoolkit/charts/AxisDimensionType';
/**
 * Chart shape to display data as BoxPlot
 */
export declare class BoxPlotChart extends AbstractChart {
    /**
     * Chart shape to display data as BubbleChart
     * @param [options] chart options
     */
    constructor(options?: BoxPlotChart.Options);
    protected getSeriesForLegend(): any[];
    protected createLegendItem(series: any, item?: ToggleableSymbolItem): ToggleableSymbolItem;
    /**
     * Sets data mode
     * @param mode bar mode
     * @returns this
     */
    setDataMode(mode: DataMode): this;
    getSeriesInfo(id: AxisDimensionType.Y): AbstractChart.Series[];
    getSeriesInfo(id: string | Exclude<AxisDimensionType, AxisDimensionType.Y>): AbstractChart.Series | null;
    enumerateNodes(callback: (n: Node, target?: QueryBuilder) => void, target?: QueryBuilder): void;
    getSeriesValue(name: string, sample: number): number;
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: string[]): void;
    getProperties(): BoxPlotChart.OptionsOut;
    setProperties(options?: BoxPlotChart.Options): this;
}
export declare namespace BoxPlotChart {
    type ShapePropsNames = 'boxvalues' | 'boxwidth' | 'boxpad' | 'whiskerswidth' | 'boxwidthunit' | 'fixedboxwidth' | 'isoutliersvisible' | 'linestyle' | 'linestyles' | 'fillstyles' | 'connectedlinestyle';
    export type Series = Merge<AbstractChart.Series, {
        /**
         * series fill style
         */
        fillstyle?: FillStyle.Type | BoxPlot.FillStyles;
        /**
         * series line style
         */
        linestyle?: LineStyle.Type;
    }>;
    type SeriesWithData = Merge<Series, {
        /**
         * values array or data series identifier
         */
        data: string | number[];
    }>;
    export type ShapeOptions = Pick<ShapeBoxPlot.Options, ShapePropsNames>;
    /**
     * chart options
     */
    export type Options = AbstractChart.Options & ShapeOptions & {
        /**
         * Data mode for the BoxPlot
         */
        datamode?: DataMode;
        /**
         * chart series info
         */
        series?: {
            /**
             * x-data series identifier
             */
            x?: string | number[] | string[] | AbstractChart.SeriesWithData;
            /**
             * y-data series identifier
             */
            y?: string | SeriesWithData | SeriesWithData[];
            /**
             * group series. When grouping a dataset into one y-series need to enumerate data ids
             */
            group?: string[][];
        };
    };
    export type ShapeOptionsOut = Pick<ShapeBoxPlot.OptionsOut, ShapePropsNames>;
    /**
     * chart options
     */
    export type OptionsOut = AbstractChart.OptionsOut & ShapeOptionsOut & {
        /**
         * Data mode for the BoxPlot
         */
        datamode: DataMode;
        /**
         * chart series info
         */
        series: {
            /**
             * x-data series identifier
             */
            x: AbstractChart.Series;
            /**
             * y-data series identifier
             */
            y: Series[];
            /**
             * group series. When grouping a dataset into one y-series need to enumerate data ids
             */
            group?: string[][];
        };
    };
    export {};
}
