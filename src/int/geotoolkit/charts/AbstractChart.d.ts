/**
 * @module geotoolkit/charts/AbstractChart
 */
import type { Merge } from '@int/geotoolkit/base';
import { DataEvents } from '@int/geotoolkit/charts/DataEvents';
import { Events as CollectionEvents } from '@int/geotoolkit/util/Collection';
import type { Events as DomEvents } from '@int/geotoolkit/dom';
import { Effects } from '@int/geotoolkit/charts/animation/Effects';
import { AnimationStyle } from '@int/geotoolkit/attributes/AnimationStyle';
import type { ToggleableSymbolItem } from '@int/geotoolkit/charts/legend/ToggleableSymbolItem';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Format } from '@int/geotoolkit/util/Format';
import type { Node } from '@int/geotoolkit/scene/Node';
import { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { ChartOrientation } from '@int/geotoolkit/charts/ChartOrientation';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import type { AbstractEffect } from '@int/geotoolkit/animation/effects/AbstractEffect';
import type { AnimatedNode } from '@int/geotoolkit/scene/AnimatedNode';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import { DataSource, DataType } from '@int/geotoolkit/charts/DataSource';
import { INumericalDataSeries } from '@int/geotoolkit/data/INumericalDataSeries';
import type { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import { AxisDimensionType } from '@int/geotoolkit/charts/AxisDimensionType';
import type { TooltipSymbolOptions } from '@int/geotoolkit/charts/TooltipSymbolOptions';
import type { AbstractDataSeries } from '@int/geotoolkit/data/AbstractDataSeries';
import type { SelectionSeries } from '@int/geotoolkit/charts/SelectionSeries';
import { Events as SelectionSeriesEvents } from '@int/geotoolkit/charts/SelectionSeries';
import type { DOMEventArgs } from '@int/geotoolkit/controls/tools/DOMEventArgs';
import type { Events as ChartEvents } from '@int/geotoolkit/charts/ChartEvents';
import { Range } from '@int/geotoolkit/util/Range';
/**
 * Defines abstract chart to be used as a base class for all charts
 * in geotoolkit/widgets/ChartWidget
 */
export declare abstract class AbstractChart extends AbstractNode {
    /**
     * Abstract chart shape used as a base for predefined geotoolkit/charts/widgets/ChartWidget charts.
     * @param [options] chart options
     */
    protected constructor(options?: AbstractChart.Options);
    on<E extends keyof AbstractChart.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractChart.EventMap[E]) => void): this;
    off<E extends keyof AbstractChart.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractChart.EventMap[E]) => void): this;
    notify<E extends keyof AbstractChart.EventMap>(type: E, source: AbstractChart, args?: AbstractChart.EventMap[E]): this;
    render(context: RenderingContext): void;
    /**
     * Sets inner model limits
     * @param limits inner limits
     */
    setModelLimits(limits: Rect): this;
    /**
     * Returns model limits, the limits of this chart inside space
     */
    getModelLimits(): Rect | null;
    /**
     * Set vertical flip of the representation
     * @param flip flag to set the vertical flip of the representation
     */
    setVerticalFlip(flip: boolean): this;
    /**
     * Return true if the representation is flipped vertically
     */
    isVerticalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     * @param enable enable flip
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Returns overlay node to be layered over the chart
     */
    getOverlay(): CompositeNode;
    /**
     * Sets chart data source
     * @param data data source
     * @returns this
     */
    setDataSource(data: DataSource): this;
    /**
     * Listener for the new data series added/removed
     * @param event event name
     * @param src data source
     * @param series series identifiers
     */
    onDataSeriesChanged(event: DataEvents.SeriesAdded | DataEvents.SeriesRemoved, src: DataSource, series: (string | number)[]): void;
    /**
     * Listener for the new data values added/removed or before adding/removing
     * @param event event name
     * @param src data source
     * @param args values interval added/removed
     */
    onDataValuesChanged(event: DataEvents.ValuesAdding | DataEvents.ValuesAdded | DataEvents.ValuesRemoving | DataEvents.ValuesRemoved, src: DataSource, args: {
        from: number;
        count: number;
    }): void;
    /**
     * Listener for the data source updated event. Could be called independently.
     */
    onDataUpdated(): void;
    getSeriesInfo(id: AxisDimensionType.Y): AbstractChart.Series[] | AbstractChart.Series | null;
    getSeriesInfo(id: string | Exclude<AxisDimensionType, AxisDimensionType.Y>): AbstractChart.Series | null;
    /**
     * Returns chart data source
     */
    protected getDataSource(): DataSource;
    /**
     * Returns array of chart legend items to be added to the chart legend
     */
    getLegendItems(): ToggleableSymbolItem[];
    /**
     * Returns desired (default) model range for the chart along provided dimension
     * @param dimension dimension to check
     */
    getDesiredModelRange(dimension: AxisDimensionType): Range;
    /**
     * Returns device space to be added to chart model limits. Might be used to layout device-spaced shapes.
     */
    getDesiredOffset(): number | SpaceStyle;
    /**
     * Returns device space to be added to annotations surrounding chart. Might be used for axes-overlapping visuals.
     */
    getAnnotationOffset(): number | SpaceStyle;
    /**
     * Returns selection info with selected samples and series identifier. If chart is not selected, returns provided merge
     * object or null if nothing provided
     * @param area area to select
     * @param [radius] selection radius
     */
    hitTest(area: Point | Rect, radius?: number): AbstractChart.Hits | null;
    /**
     * Returns value for specific series and sample
     * @param name series name
     * @param sample sample to return
     */
    getSeriesValue(name: string, sample: number): number | string | number[];
    /**
     * Sets chart rotated due to x- and y- axes exchange (x-axis is vertical and y-axis is horizontal).
     * Method is called by geotoolkit/charts/widgets/ChartWidget automatically when it handles axis orientation.
     * @returns this
     */
    setOrientation(orientation: ChartOrientation): this;
    /**
     * Returns chart orientation
     */
    getOrientation(): ChartOrientation;
    /**
     * Returns axis identifier for provided dimension if exists, null otherwise
     * @param dimension requested axis dimension
     */
    getAxis(dimension: AxisDimensionType): string | null;
    /**
     * Sets chart axis data type for one of the dimensions
     * @param dimension dimension to change
     * @param type new data type
     */
    setAxisDataType(dimension: AxisDimensionType, type: DataType): this;
    /**
     * Returns axis data type for the provided dimension
     * @param dimension dimension to check
     */
    getAxisDataType(dimension: AxisDimensionType): DataType;
    /**
     * Returns data series from data source after all the checks and manipulations
     * @param name series name identifier
     */
    getDataSeries(name: string): INumericalDataSeries & AbstractDataSeries;
    /**
     * Returns data series from data source after all the checks and manipulations
     * @param name series name identifier
     * @param dimension data dimension or type needed
     */
    getDataSeries(name: string, dimension: AxisDimensionType | DataType): NumericalDataSeries;
    /**
     * Sets new table identifier from source data tables
     * @param id new table identifier
     */
    setTableId(id: string): this;
    /**
     * Returns table identifier for series
     */
    getTableId(): string;
    /**
     * Sets new selection series identifier for shared states
     * @param id selection series identifier
     */
    setSelectionId(id: string): this;
    /**
     * Returns identifier for shared selection series
     */
    getSelectionId(): string;
    /**
     * Returns desired for current chart tick generator
     * @param dimension dimension type
     * @returns instance of tick generator
     */
    getDesiredTickGenerator(dimension: AxisDimensionType): TickGenerator;
    /**
     * Initializes listeners and styles after creating
     * @param options initialization options
     * @returns this
     */
    protected initialize(options: AbstractChart.Options): this;
    /**
     * Creates legend item based on series or updating options based on item passed
     * @param series series object
     * @param item legend item
     */
    protected createLegendItem(series: AbstractChart.Series, item?: ToggleableSymbolItem): ToggleableSymbolItem;
    /**
     * Returns series for generate legend items
     */
    protected getSeriesForLegend(): AbstractChart.Series[];
    /**
     * Returns formatted legend title
     * @param props format properties object
     */
    protected getLegendTitle(props: Record<string, string>): string;
    unregisterAnimationStyle(root: AnimatedNode): void;
    /**
     * Returns css series to handle the chart
     */
    protected getCssSeries(): Node[];
    onSelectionStateChanged(event: SelectionSeriesEvents.StateAdded | SelectionSeriesEvents.StateRemoved, src: SelectionSeries, args: SelectionSeries.EventMap[SelectionSeriesEvents.StateAdded] | SelectionSeries.EventMap[SelectionSeriesEvents.StateRemoved]): void;
    /**
     * Returns tooltip format callback if exists
     */
    protected getTooltipFormat(): AbstractChart.TooltipFormat | null;
    /**
     * Format tooltip item
     * @param item item
     * @param tooltip tooltip options
     * @returns tooltip content for specified tooltip item
     */
    formatTooltipItem(item: AbstractChart.TooltipItem, tooltip?: AbstractChart.SeriesTooltip): string;
    /**
     * Enumerate tooltip items to be used if custom tooltip formatter is not specified
     * @param selection selection current selection
     */
    getTooltipItems(selection: Record<string, number[]>): AbstractChart.TooltipItem[];
    /**
     * Formats selection info for tooltip purposes, all info is shared between charts
     * @param selection current selection info
     */
    tooltipFormat(selection: Record<string, number[]>): string;
    /**
     * Gets tooltip series symbol
     * @param series series information
     * @param index symbol index (if there's more than one)
     * @returns html to represent tooltip symbol
     */
    protected createTooltipSymbol(series: AbstractChart.Series, index?: number): TooltipSymbolOptions | null;
    /**
     * Returns symbol shape for current sample to be shared via crosshair tool
     * @param sample sample index value
     */
    getSymbolShape(sample: number): SymbolShape;
    /**
     * Returns color value for provided sample to be shared via color axis
     * @param seriesId series name identifier
     * @param sample sample index value
     */
    getColorValue(seriesId: string, sample: number): number;
    setProperties(options?: AbstractChart.Options): this;
    getProperties(): AbstractChart.OptionsOut;
}
export declare namespace AbstractChart {
    /**
     * chart options
     */
    type Options = AbstractNode.Options & {
        /**
         * axes identifiers to connect with chart
         */
        axes?: Partial<Record<AxisDimensionType, string>>;
        /**
         * chart animation parameter (boolean to enable/disable default animation, enum for pre-installed variant, use object for
         * custom style)
         */
        animation?: boolean | Effects | AnimationStyle | AbstractEffect.Options | AbstractEffect.Options[] | null;
        /**
         * Define tooltip format
         * @param selection selection
         * @param chart current chart
         * @returns string for current selection
         */
        tooltipformat?: (selection: Record<string, number[]>, chart: AbstractChart) => string;
        /**
         * Define default series tooltip
         */
        tooltip?: SeriesTooltip;
        /**
         * Define default series legend
         */
        legend?: {
            /**
             * format template for chart legend items
             * x-series - x-series identifier
             * y-series - y-series identifier
             * series.unit - series unit
             * value - series value
             * @example
             * '${y-series}: ${value} m'
             */
            format?: string;
            /**
             * Value format
             */
            valueformat?: Format;
        };
        /**
         * chart series
         */
        series?: {
            /**
             * data table identifier
             */
            table?: string;
            /**
             * selection series identifier for sharing selection
             */
            selection?: string;
        };
    };
    /**
     * chart options
     */
    type OptionsOut = Merge<AbstractNode.OptionsOut, {
        /**
         * axes identifiers to connect with chart
         */
        axes: Partial<Record<AxisDimensionType, string>>;
        /**
         * Define tooltip format
         * @param selection selection
         * @param chart current chart
         * @returns string for current selection
         */
        tooltipformat: TooltipFormat | null;
        /**
         * Define default series tooltip
         */
        tooltip: {
            /**
             * Format of series tooltip
             * series.symbol - series symbol
             * series.name - series name
             * series.id - series id
             * series.unit - series unit
             * value - series value
             * @example
             * '${series.symbol} The ${series.name} is {value} m'
             */
            format: string;
            /**
             * Value format
             */
            valueformat: Format | null;
        };
        /**
         * Define default series legend
         */
        legend: {
            /**
             * format template for chart legend items
             * x-series - x-series identifier
             * y-series - y-series identifier
             * series.unit - series unit
             * value - series value
             * @example
             * '${y-series}: ${value} m'
             */
            format: string;
            /**
             * Value format
             */
            valueformat: Format | null;
        };
        /**
         * chart series
         */
        series: {
            /**
             * data table identifier
             */
            table?: string;
        };
    }>;
    type TooltipFormat = (selection: Record<string, number[]>, chart: AbstractChart) => string;
    /**
     * Define Series tooltip
     */
    type SeriesTooltip = {
        /**
         * Format of series tooltip
         * series.symbol - series symbol
         * series.name - series name
         * series.id - series id
         * series.unit - series unit
         * value - series value
         * @example
         * '${series.symbol} The ${series.name} is {value} m'
         */
        format?: string;
        /**
         * Value format
         */
        valueformat?: Format;
    };
    /**
     * Base series properties
     */
    type Series = {
        /**
         * data series identifier
         */
        data: string;
        /**
         * series name to use in tooltip and legend
         */
        name?: string;
        /**
         * Tooltip settings
         */
        tooltip?: SeriesTooltip;
    };
    type SeriesWithData = Merge<Series, {
        data: number[] | string[] | string | Date[];
    }>;
    type EventArgs = {
        seriesname: string;
        eventargs: DOMEventArgs;
        sample?: number | string;
    };
    /**
     * Tooltip item
     */
    type TooltipItem = {
        /**
         * Series info
         */
        series: {
            /**
             * Series's name
             */
            name?: string;
            /**
             * Series's id
             */
            id?: string;
            /**
             * Series's symbol
             */
            symbol?: TooltipSymbolOptions;
            /**
             * Unit of series if it exists
             */
            unit?: AbstractUnit;
        };
        /**
         * Selected series value
         */
        value?: number | string | number[];
        /**
         * Index of the sample
         */
        index?: number;
        /**
         * Chart
         */
        chart?: AbstractChart;
    };
    type Hits = Record<string, number[]>;
    type EventMap = Merge<AbstractNode.EventMap, {
        [CollectionEvents.Add]: ToggleableSymbolItem;
        [CollectionEvents.Remove]: ToggleableSymbolItem;
        [DataEvents.Updated]: void;
        [DomEvents.Hover]: EventArgs;
        [DomEvents.Click]: EventArgs;
        [DomEvents.DoubleClick]: EventArgs;
        [ChartEvents.DesiredModelLimitsChanged]: void;
    }>;
}
