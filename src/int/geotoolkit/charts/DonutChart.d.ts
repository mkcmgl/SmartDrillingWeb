import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import { ToggleableSymbolItem } from '@int/geotoolkit/charts/legend/ToggleableSymbolItem';
import { DataEvents } from '@int/geotoolkit/charts/DataEvents';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { DataSource } from '@int/geotoolkit/charts/DataSource';
import { DataOrder, DonutChart as DonutChartShape, PieMode } from '@int/geotoolkit/controls/shapes/DonutChart';
import { AxisDimensionType } from '@int/geotoolkit/charts/AxisDimensionType';
/**
 * Chart shape to display data as DonutChart
 */
export declare class DonutChart extends AbstractChart {
    /**
     * Chart shape to display data as DonutChart
     * @param [options] chart options
     */
    constructor(options?: DonutChart.Options);
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: string[]): void;
    protected getSeriesForLegend(): DonutChart.Series[];
    protected createLegendItem(series: DonutChart.Series, item?: ToggleableSymbolItem): ToggleableSymbolItem;
    setProperties(options?: DonutChart.Options): this;
    getProperties(): DonutChart.OptionsOut;
    protected initialize(options: DonutChart.Options): this;
    getSeriesInfo(id: string | AxisDimensionType): DonutChart.Series | null;
}
export declare namespace DonutChart {
    /**
     * Chart options
     */
    type Options = AbstractChart.Options & Pick<DonutChartShape.Options, 'label' | 'outsideline' | 'direction' | 'depth3d' | 'piemode' | 'inclination3d' | 'sliceshift' | 'startangle' | 'createselectedstyle'> & {
        /**
         * Reference to data series
         */
        series?: {
            /**
             * x-data series identifier
             */
            x?: string | number[] | string[] | AbstractChart.SeriesWithData;
        };
        /**
         * Center x-value in px or model space
         */
        x?: string | number;
        /**
         * Center y-value in px or model space
         */
        y?: string | number;
        /**
         * Inner radius value in px or model space
         */
        innerradius?: string | number;
        /**
         * Outer radius value in px or model space
         */
        outerradius?: string | number;
        /**
         * Label text formatter
         */
        labels?: (annotation: number, value?: DonutChartShape.SliceInfo) => string;
        /**
         * Slices color formatter
         */
        colors?: (index: number) => FillStyle.Type;
        /**
         * Data order
         */
        order?: DataOrder;
        /**
         * Chart visual mode
         */
        mode?: PieMode;
        /**
         * Total angle of all slices, in degrees
         */
        totalangle?: number;
        fillstyles?: FillStyle[];
        ['selected-fillstyles']?: FillStyle.Type[];
    };
    type OptionsOut = AbstractChart.OptionsOut & Pick<DonutChartShape.OptionsBaseOut, 'outsideline' | 'totalangle' | 'label' | 'sliceshift'> & {
        /**
         * Center x-value in px or model space
         */
        x: string | number;
        /**
         * Center y-value in px or model space
         */
        y: string | number;
        /**
         * Inner radius value in px or model space
         */
        innerradius: string | number;
        /**
         * Outer radius value in px or model space
         */
        outerradius: string | number;
    };
    type Series = AbstractChart.Series & {
        label?: string;
        value?: string;
        fillstyle?: FillStyle.Type | null;
    };
}
