import type { Merge } from '@int/geotoolkit/base';
import type { BarChart as BarChartShape } from '@int/geotoolkit/controls/shapes/BarChart';
import { DataMode } from '@int/geotoolkit/controls/shapes/BarChart';
import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import { Line } from '@int/geotoolkit/scene/shapes/Line';
import { ToggleableSymbolItem } from '@int/geotoolkit/charts/legend/ToggleableSymbolItem';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { DataSource } from '@int/geotoolkit/charts/DataSource';
import type { Node } from '@int/geotoolkit/scene/Node';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import type { QueryBuilder } from '@int/geotoolkit/selection/QueryBuilder';
import type { TooltipSymbolOptions } from '@int/geotoolkit/charts/TooltipSymbolOptions';
import { AxisDimensionType } from '@int/geotoolkit/charts/AxisDimensionType';
import { DataEvents } from '@int/geotoolkit/charts/DataEvents';
/**
 * Chart shape to display data as BarChart
 * @example
 * import {ChartType} from '@int/geotoolkit/charts/ChartType';
 *
 * widget.setDataSource({
 *     'name': 'Cities',
 *     'data': ['New York', 'Tokyo', 'Beijing']
 * }, {
 *     'name': 'Population2000',
 *     'data': [8008278, 8134688, 13569194]
 * }, ...);
 * widget.addChart({
 *     'type': ChartType.BarChart,
 *     'series': {
 *         'x': 'Cities', // data series id with each bar titles
 *         'y': ['Population2000', 'Population2010', 'Population2020'] // array of series for bar values
 *     }
 * });
 */
export declare class BarChart extends AbstractChart implements INodeEnumerable {
    /**
     * Chart shape to display data as BarChart
     * @param [options] chart options
     */
    constructor(options?: BarChart.Options);
    protected createLegendItem(series: BarChart.Series, item?: ToggleableSymbolItem): ToggleableSymbolItem;
    protected createTooltipSymbol(series: BarChart.Series, index?: number): TooltipSymbolOptions | null;
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: string[]): void;
    setProperties(options?: BarChart.Options): this;
    enumerateNodes(callback: (n: Node, target?: QueryBuilder) => void, target?: QueryBuilder): void;
    getProperties(): BarChart.OptionsOut;
    /**
     * Sets stacked chart mode enabled
     * @param enabled enabled
     * @returns this
     */
    setStackedModeEnabled(enabled: boolean): this;
    /**
     * Sets data mode
     * @param mode bar mode
     * @returns this
     */
    setDataMode(mode: DataMode): this;
    getSeriesInfo(id: AxisDimensionType.Y): BarChart.Series[];
    getSeriesInfo(id: string | Exclude<AxisDimensionType, AxisDimensionType.Y>): BarChart.Series | null;
    protected getSeriesForLegend(): BarChart.Series[];
}
export declare namespace BarChart {
    type BarValues = {
        /**
         * alignment
         */
        alignment?: AnchorType;
        /**
         * anchor position
         */
        position?: AnchorType;
        /**
         * addition offset
         */
        offset?: {
            /**
             * x value
             */
            x?: number;
            /**
             * y value
             */
            y?: number;
        };
    };
    export type ShapeOptions = Omit<BarChartShape.Options, 'series'> & {
        /**
         * Options for var values
         */
        barvalues?: BarValues;
    };
    /**
     * Bar chart options
     */
    export type Options = AbstractChart.Options & Omit<ShapeOptions, 'barmode'> & {
        /**
         * Reference to data series
         */
        series?: {
            /**
             * x-data series identifier
             */
            x?: string | number[] | string[] | AbstractChart.SeriesWithData;
            /**
             * y-data series identifier(s)
             */
            y?: string | number[] | SeriesWithData | SeriesWithData[];
        };
        /**
         * chart data mode
         */
        datamode?: DataMode;
        /**
         * staked mode flag
         */
        stacked?: boolean;
        /**
         * Reference line options
         */
        referenceline?: ReferenceLineOptions;
    };
    export type ReferenceLineOptions = Line.Options & {
        value?: number;
    };
    export type ShapeOptionsOut = Pick<BarChartShape.OptionsOut, 'barpad' | 'barmode' | 'barvalues' | 'barmaxwidth' | 'barstyles' | 'valuelimits'> & {
        barvalues: BarValues;
    };
    export type OptionsOut = AbstractChart.OptionsOut & ShapeOptionsOut & {
        /**
         * chart data info
         */
        series: {
            /**
             * x-data series identifier(s)
             */
            x: BarChart.Series;
            /**
             * y-data series identifier(s)
             */
            y: BarChart.Series[];
        };
        /**
         * Stacked mode
         */
        stacked: boolean;
        /**
         * Reference line options
         */
        referenceline?: Line.OptionsOut & {
            /**
             * value of reference value
             */
            value?: number;
        };
        /**
         * data mode
         */
        datamode: DataMode;
    };
    /**
     * Define series properties
     */
    export type Series = AbstractChart.Series & {
        visible?: boolean;
        linestyle?: LineStyle.Type | LineStyle.Type[];
        fillstyle?: FillStyle.Type | FillStyle.Type[];
    };
    type SeriesWithData = Merge<BarChart.Series, {
        /**
         * series data as array of values or data source reference name
         */
        data: number[] | string;
    }>;
    export {};
}
