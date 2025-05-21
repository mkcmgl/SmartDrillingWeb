import { Histogram } from '@int/geotoolkit/controls/shapes/Histogram';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import type { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { DataSource } from '@int/geotoolkit/charts/DataSource';
import type { Node } from '@int/geotoolkit/scene/Node';
import { DataEvents } from '@int/geotoolkit/charts/DataEvents';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
import { AxisDimensionType } from '@int/geotoolkit/charts/AxisDimensionType';
/**
 * Chart shape to display data as CrossPlotChart
 */
export declare class CrossPlotChart extends AbstractChart implements INodeEnumerable {
    /**
     * Chart shape to display data as CrossPlotChart
     * @param [options] chart options
     */
    constructor(options?: CrossPlotChart.Options);
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: string[]): void;
    setHistogramOptions(options: HistogramsOptions): this;
    getHistogramOptions(): HistogramsOptionsOut;
    setProperties(options?: CrossPlotChart.Options): this;
    enumerateNodes(callback: (n: Node, target?: QueryBuilder) => void, target?: QueryBuilder): void;
    getProperties(): CrossPlotChart.OptionsOut;
    getSeriesInfo(id: string | AxisDimensionType): AbstractChart.Series | null;
}
export declare namespace CrossPlotChart {
    /**
     * Series type
     */
    type Series = {
        /**
         * x-values array or x-data series identifier
         */
        x?: string | number[] | AbstractChart.SeriesWithData;
        /**
         * y-values array or y-data series identifier
         */
        y?: string | number[] | AbstractChart.SeriesWithData;
        /**
         * z-values array or z-data (color) series identifier
         */
        z?: string | number[] | AbstractChart.SeriesWithData;
        /**
         * size-values array or size-data series identifier for symbol sizes
         */
        size?: string | number[] | AbstractChart.SeriesWithData;
        /**
         * symbol-values array or symbol-data series identifier for symbol painters
         */
        symbol?: string | number[] | AbstractChart.SeriesWithData;
    };
    /**
     * chart options
     */
    type Options = AbstractChart.Options & {
        /**
         * chart series info
         */
        series?: Series;
        /**
         * The dynamic size object containing info for symbols size dimension
         */
        size?: {
            /**
             * The minimum size value to use, can be used to clip the data
             */
            min?: number;
            /**
             * The maximum size value to use, can be used to clip the data
             */
            max?: number;
            /**
             * The symbol size for minimum value (in device)
             */
            minsymbolsize: number;
            /**
             * The symbol size for maximum value (in device)
             */
            maxsymbolsize: number;
        };
        /**
         * The symbol settings containing info for crossplot symbol styles and dynamic painters dimension
         */
        symbol?: {
            /**
             * The style of line to be used in symbol
             */
            linestyle?: LineStyle.Type;
            /**
             * The fillstyle to be used in symbol if colorprovider isn't provided
             */
            fillstyle?: FillStyle.Type;
            /**
             * The painter to draw symbols
             */
            painter?: SymbolShape.Painter;
            /**
             * painter size
             */
            size?: number;
            /**
             * The painters list to use for dynamic painters dimension
             */
            painters?: SymbolShape.Painter[];
            /**
             * The dynamic ranges (either [from, to] segments or constant values) for each painter to use
             */
            ranges?: (number | [
                number,
                number
            ])[];
        };
        /**
         * The colorProvider used to color points based on their Z value
         */
        colorprovider?: ColorProvider;
        /**
         * histograms properties
         */
        histogram?: HistogramsOptions;
        /**
         * The symbol size in pixel
         */
        symbolsize?: number;
    };
    type OptionsOut = AbstractChart.OptionsOut & {
        /**
         * chart series info
         */
        series: {
            /**
             * x-data series options
             */
            x: AbstractChart.Series;
            /**
             * y-data series options
             */
            y: AbstractChart.Series;
            /**
             * z-data (color) series options
             */
            z: AbstractChart.Series;
            /**
             * size series options
             */
            size: AbstractChart.Series;
            /**
             * symbol series options
             */
            symbol: AbstractChart.Series;
        };
        /**
         * symbol options
         */
        symbol: {
            /**
             * symbol linestyle
             */
            linestyle: LineStyle;
            /**
             * symbol fillstyle
             */
            fillstyle: FillStyle;
        };
        /**
         * histograms properties
         */
        histogram: HistogramsOptionsOut;
        /**
         * Symbol size
         */
        symbolsize: number;
        /**
         * The colorProvider used to color points based on their Z value
         */
        colorprovider: ColorProvider;
    };
}
declare type HistogramsOptions = {
    /**
     * vertical flip of the histograms overlay
     */
    verticalflip?: boolean;
    /**
     * horizontal flip of the histograms overlay
     */
    horizontalflip?: boolean;
    /**
     * histogram id
     */
    id?: string | number;
    /**
     * x-axis histogram options
     */
    x?: Histogram.Options;
    /**
     * y-axis histogram options
     */
    y?: Histogram.Options;
    /**
     * z-axis histogram options
     */
    z?: Histogram.Options;
};
declare type HistogramsOptionsOut = {
    /**
     * vertical flip of the histograms overlay
     */
    verticalflip: boolean;
    /**
     * horizontal flip of the histograms overlay
     */
    horizontalflip: boolean;
    /**
     * histogram id
     */
    id: string | number;
    /**
     * x-axis histogram options
     */
    x?: Histogram.OptionsOut;
    /**
     * y-axis histogram options
     */
    y?: Histogram.OptionsOut;
    /**
     * z-axis histogram options
     */
    z?: Histogram.OptionsOut;
};
export {};
