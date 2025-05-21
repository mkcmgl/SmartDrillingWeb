import { ToggleableSymbolItem } from '@int/geotoolkit/charts/legend/ToggleableSymbolItem';
import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { DataSource } from '@int/geotoolkit/charts/DataSource';
import type { TooltipSymbolOptions } from '@int/geotoolkit/charts/TooltipSymbolOptions';
import type { ColoredStyle } from '@int/geotoolkit/attributes/ColoredStyle';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { DataEvents } from '@int/geotoolkit/charts/DataEvents';
import type { Merge } from '@int/geotoolkit/base';
/**
 * Sort Mode
 * @enum
 * @readonly
 */
export declare enum SortMode {
    /**
     * Max to Min
     */
    MaxToMin = "maxtomin",
    /**
     * Min to Max
     */
    MinToMax = "mintomax",
    /**
     * None
     */
    None = "none"
}
/**
 * Text placement
 * @enum
 * @readonly
 */
export declare enum TextPlacement {
    /**
     * Inside
     */
    Inside = "Inside",
    /**
     * Outside
     */
    Outside = "Outside",
    /**
     * Center
     */
    Center = "Center"
}
/**
 * Chart shape to display data as TornadoChart
 */
export declare class TornadoChart extends AbstractChart {
    /**
     * Chart shape to display data as TornadoChart
     * @param [options] chart options
     */
    constructor(options?: TornadoChart.Options);
    protected getSeriesForLegend(): TornadoChart.Series[];
    protected createLegendItem(series: TornadoChart.Series, item?: ToggleableSymbolItem): ToggleableSymbolItem;
    protected createTooltipSymbol(series: TornadoChart.Series, index?: number): TooltipSymbolOptions | null;
    getSeriesInfo(id: string): TornadoChart.Series | null;
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: string[]): void;
    getProperties(): TornadoChart.OptionsOut;
    setProperties(options?: TornadoChart.Options): this;
}
export declare namespace TornadoChart {
    type Series = AbstractChart.Series & {
        visible?: boolean;
        /**
         * value at chart border
         */
        limit?: number;
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
        /**
         * fillstyle
         */
        fillstyle?: FillStyle.Type;
        /**
         * text style
         */
        textstyle?: TextStyle.Type;
    };
    type SeriesWithData = Merge<Series, {
        data: number[] | string;
    }>;
    /**
     * chart options
     */
    type Options = AbstractChart.Options & {
        /**
         * tornado chart series info
         */
        series?: {
            /**
             * left data series identifier
             */
            left?: SeriesWithData;
            /**
             * right data series identifier
             */
            right?: SeriesWithData;
            /**
             * labels
             */
            labels?: string;
        };
        /**
         * center line style
         */
        linestyle?: LineStyle.Type;
        /**
         * label position
         */
        labelposition?: TextPlacement;
        /**
         * spacing
         */
        spacing?: number;
        /**
         * autogradient
         */
        autogradient?: boolean;
        /**
         * draw labels flag
         */
        drawlabels?: boolean;
        /**
         * sort mode
         */
        sort?: SortMode;
        /**
         * creates fillstyle for selection
         * @param style original fillstyle
         * @returns selected fillstyle
         */
        createselectedstyle?: (style: ColoredStyle) => FillStyle;
    };
    type OptionsOut = AbstractChart.OptionsOut & {
        /**
         * chart series info
         */
        series?: {
            /**
             * left data series identifier
             */
            left?: SeriesOut;
            /**
             * right data series identifier
             */
            right?: SeriesOut;
            /**
             * labels
             */
            labels?: string;
        };
        /**
         * center line style
         */
        linestyle: LineStyle;
        /**
         * autogradient flag
         */
        autogradient: boolean;
        /**
         * spacing
         */
        spacing: number;
        /**
         * sort mode
         */
        sort: SortMode;
        /**
         * label position
         */
        labelposition: TextPlacement;
        /**
         * draw labels flag
         */
        drawlabels: boolean;
    };
}
declare type SeriesOut = {
    /**
     * data series identifier
     */
    data?: string;
    /**
     * value at chart border
     */
    limit?: number;
    /**
     * line style
     */
    linestyle?: LineStyle;
    /**
     * fillstyle
     */
    fillstyle?: FillStyle;
    /**
     * text style
     */
    textstyle?: TextStyle;
};
export {};
