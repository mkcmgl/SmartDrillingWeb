import type { EmptyRecord, Merge } from '@int/geotoolkit/base';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { BubbleChart as ShapeBubbleChart } from '@int/geotoolkit/controls/shapes/BubbleChart';
import { Selection } from '@int/geotoolkit/controls/tools/Selection';
import { RegressionLine } from '@int/geotoolkit/controls/shapes/RegressionLine';
import { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import { NumericalDataSeriesView } from '@int/geotoolkit/data/NumericalDataSeriesView';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { Text } from '@int/geotoolkit/scene/shapes/Text';
import type { BubbleRect } from '@int/geotoolkit/controls/shapes/BubbleChart';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { RegressionBase } from '@int/geotoolkit/controls/util/regression/RegressionBase';
declare type Axes = 'x' | 'y' | 'z' | 's';
/**
 * The bubblechart widget is an annotated widget that is specialized for bubble chart representations.
 * It uses {@link @int/geotoolkit/controls/shapes/BubbleChart~BubbleChart} internally.<br>
 *  <p>
 * The main way to configure and customize the widget is to use the different setData() function that provides a comprehensible way of changing the default look and feel of the widget.
 * </p>
 * <p>
 * It reuses the default tools provided by the AnnotatedWidget and customizes them for bubblechart related operations.
 * It also provides utility functions to highlight points  by index <br>
 * </p>
 * <p>
 * The Bubblechart can represent 4D datasets (X,Y ,color and size) and by default contains only a single dataset.
 * The color of each point can be defined using a colorprovider and the corresponding colorbar can be displayed.
 * </p>
 *
 * @example
 * import {BubbleChart} from '@int/geotoolkit/widgets/BubbleChart';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * const bubblechart = new BubbleChart({
 *     'bounds': new Rect(0, 0, 800, 400),
 *     'tools': {
 *         'horizontalscroll': {'visible': false},
 *         'verticalscroll': {'visible': false}
 *     },
 *     'x': {
 *         'data': [2, 4, 6, 8, 10, 12],
 *         'name': 'Age',
 *         'unit': 'yrs',
 *         'label': {
 *             'text': 'Age of Investments in yrs'
 *         }
 *     },
 *     'y': {
 *         'data': [10, 15, 20, 25, 30, 40],
 *         'name': 'Returns',
 *         'unit': '%',
 *         'label': {
 *             'text': 'Return of investments in %'
 *         }
 *     },
 *     's': {
 *         'data': [7, 13, 21, 25, 29, 32],
 *         'name': 'Size of Investment',
 *         'unit': '$'
 *     }
 * });
 * @example
 * // To enable other options like Tooltip use the following code.
 * widget.setToolsOptions({
 *      'tooltip': {'enabled': true}
 * });
 */
export declare class BubbleChart extends AnnotatedWidget {
    constructor(options?: BubbleChart.Options);
    /**
     * create grid and axes
     */
    getToolByName<T extends keyof BubbleChart.Tools>(toolName: T): BubbleChart.Tools[T];
    /**
     * function call in the constructor to initialize tools in the widget <br>
     * This widget adds a selection filter. This filter is used to send a object that contains the bubblechart shape reference and
     * an array of indices that represents selected shapes. Also, this widget adds a hover selection filter for showing tooltip when hovering on the bubble.
     */
    protected initializeTools(): this;
    /**
     * Sets options and/or data
     * @param data options
     * @returns this
     */
    setData(data: BubbleChart.DataOptions): this;
    /**
     * get data and options
     * @param ignoreDataOptions when true get all thins excluding data array
     */
    getData(ignoreDataOptions?: boolean): BubbleChart.DataOptionsOut;
    /**
     * Sets visual options
     * @param options bubble chart options see {@link import("geotoolkit/widgets/BubbleChart").BubbleChart.setProperties}
     * @returns this
     */
    setOptions(options: BubbleChart.DataOptions): this;
    /**
     * gets visual options
     * @returns options
     */
    getOptions(): BubbleChart.DataOptionsOut;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): BubbleChart.OptionsOut;
    /**
     * Sets bubble chart properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: BubbleChart.Options): this;
    /**
     * return results of analysis
     */
    getRegressionAnalysis(): RegressionBase.Statistics;
    /**
     * draw regression line on the chart
     * @param [options] JSON which defines trend line options, see {@link @int/geotoolkit/controls/shapes/RegressionLine~RegressionLine} for details
     * @returns this
     */
    updateRegressionLine(options?: BubbleChart.RegressionLineOptions): this;
    /**
     * get options of trend line
     */
    getTrendlineOptions(): BubbleChart.TrendlineOptions;
    /**
     * Get converted label text
     * @param axis axis to apply
     */
    getLabelTextConverter(axis: Axes): (x: number) => string;
    /**
     * Set Parameters for axis
     * @param axis axis to apply ('x', 'y' , 'z' or 's' )
     * @param [data] JSON which defines data.
     * @param [chartData] JSON which defines bubblechart shape data and options
     * @returns this
     */
    setAxisData(axis: Axes, data?: BubbleChart.AxisDataOptions, chartData?: ShapeBubbleChart.Options): this;
    /**
     * @param axis axis
     * @param ignoreDataOptions when true get all thins excluding data array
     */
    getAxisData(axis: Axes, ignoreDataOptions: boolean): Required<BubbleChart.AxisDataOptions> | EmptyRecord;
    /**
     * Highlights the selected symbols
     * @param items object which contain the symbols to be highlighted
     * @param reset un-highlights previously selected symbols
     */
    highlightIndices(items: {
        default: {
            indices: BubbleRect[];
        };
    }, reset: boolean): void;
    /**
     * Get the R-squared value for measuring the performance the regression line
     * @deprecated since 2022 (v3.4)
     */
    getRsquared(): number;
    /**
     * Gets Highlighted Indices
     * @returns array of indices
     */
    getHighlightIndices(): number[];
    /**
     * Set Options for Header
     * @param [data] JSON which defines header area
     * @returns this
     */
    setHeaderOptions(data?: BubbleChart.HeaderOptions): this;
    /**
     * get header options
     */
    getHeaderOptions(): Required<BubbleChart.HeaderOptions>;
    /**
     * set labels for bubbles
     * @param [data] JSON which define properties of labels
     * @param [chartData] JSON which defines bubblechart shape data and options
     * @returns this
     */
    setLabels(data?: BubbleChart.LabelsOptions, chartData?: ShapeBubbleChart.Options): this;
    /**
     * get properties of labels
     */
    getLabels(): BubbleChart.LabelsOptionsOut;
    /**
     * Set painter Options
     *
     * @param [data] JSON which defines painter options
     * @param [chartData] JSON which defines bubblechart shape data and options
     * @returns this
     */
    setPainter(data?: BubbleChart.PainterOptions, chartData?: ShapeBubbleChart.Options): this;
    /**
     * get painter's properties
     */
    getPainter(): BubbleChart.PainterOptionsOut;
    /**
     * Sets color provider
     * @param [cp] color provider
     * @param [chartData] JSON which defines bubblechart shape data and options
     * @returns this
     */
    setColorProvider(cp?: ColorProvider, chartData?: ShapeBubbleChart.Options): this;
    /**
     * get color provider
     */
    getColorProvider(): ColorProvider;
    /**
     * set symbol cache size
     * @param options symbol options
     * @param [chartData] JSON which defines bubble chart shape data and options
     */
    setSymbolCache(options: BubbleChart.SymbolCacheOptions, chartData?: ShapeBubbleChart.Options): this;
    /**
     * Set Tools Options
     * @param [options] which define the tools options
     * @returns this
     */
    setToolsOptions(options?: BubbleChart.ToolsOptions): this;
    getToolsOptions(): BubbleChart.ToolsOptionsOut;
    /** */
    dispose(): void;
}
export declare namespace BubbleChart {
    export type Options = Merge<AnnotatedWidget.Options & OptionsBase, DataOptions>;
    /**
     * options
     */
    export type DataOptions = {
        /**
         * bounds. See {@link @int/geotoolkit/util/Rect~Rect.setProperties} for details.
         */
        bounds?: Rect.Options | Rect;
        /**
         * JSON which defines header area
         */
        header?: HeaderOptions;
        /**
         * JSON which defines painter options
         */
        painter?: PainterOptions;
        /**
         * color provider
         */
        colorprovider?: ColorProvider;
        symbolcache?: SymbolCacheOptions;
        labels?: LabelsOptions;
        /**
         * JSON which define the properties of axis X , See {@link @int/geotoolkit/widgets/BubbleChart~BubbleChart#setAxisData} for details.
         */
        x?: AxisDataOptions;
        /**
         * JSON which define the properties of axis Y , See {@link @int/geotoolkit/widgets/BubbleChart~BubbleChart#setAxisData} for details.
         */
        y?: AxisDataOptions;
        /**
         * JSON which define the properties of axis z , See {@link @int/geotoolkit/widgets/BubbleChart~BubbleChart#setAxisData} for details.
         */
        z?: AxisDataOptions;
        /**
         * JSON which define the size of bubble and related properties S , See {@link @int/geotoolkit/widgets/BubbleChart~BubbleChart#setAxisData} for details.
         */
        s?: AxisDataOptions;
        /**
         * JSON which define the tools used in this widgets, See {@link @int/geotoolkit/widgets/BubbleChart~BubbleChart#setToolsOptions} for details.
         */
        tools?: ToolsOptions;
        /**
         * JSON which defines trend line options
         */
        trendline?: RegressionLineOptions;
    };
    export type DataOptionsOut = {
        /**
         * bounds
         */
        bounds?: Rect.Options;
        /**
         * JSON which defines header area
         */
        header: Required<HeaderOptions>;
        /**
         * JSON which defines painter options
         */
        painter: PainterOptionsOut;
        /**
         * color provider
         */
        colorprovider?: ColorProvider;
        labels: LabelsOptionsOut;
        /**
         * JSON which define the properties of axis X , See {@link @int/geotoolkit/widgets/BubbleChart~BubbleChart#setAxisData} for details.
         */
        x: Required<AxisDataOptions> | EmptyRecord;
        /**
         * JSON which define the properties of axis Y , See {@link @int/geotoolkit/widgets/BubbleChart~BubbleChart#setAxisData} for details.
         */
        y: Required<AxisDataOptions> | EmptyRecord;
        /**
         * JSON which define the properties of axis z , See {@link @int/geotoolkit/widgets/BubbleChart~BubbleChart#setAxisData} for details.
         */
        z?: Required<AxisDataOptions> | EmptyRecord;
        /**
         * JSON which define the size of bubble and related properties S , See {@link @int/geotoolkit/widgets/BubbleChart~BubbleChart#setAxisData} for details.
         */
        s: Required<AxisDataOptions> | EmptyRecord;
        /**
         * JSON which define the tools used in this widgets.
         */
        tools: ToolsOptionsOut;
        /**
         * JSON which defines trend line options
         */
        trendline: RegressionLine.OptionsBaseOut & {
            enable: boolean;
        };
    };
    export type OptionsOut = AnnotatedWidget.OptionsOut & OptionsBase;
    /**
     * JSON which defines data.
     */
    export type AxisDataOptions = {
        name?: string;
        axis?: {
            title?: string;
        };
        autolabelrotation?: boolean;
        /**
         * Array of data
         */
        data?: number[];
        /**
         * DataSource of data
         */
        datasource?: NumericalDataSeries | NumericalDataSeriesView;
        /**
         * display unit
         */
        unit?: AbstractUnit | string;
        /**
         * are min/max fixed (false) or automatically calculated
         */
        autominmax?: boolean;
        /**
         * enable to calculate neat limits based on existing limits
         */
        neatlimit?: boolean;
        /**
         * enable to calculate precise limits based on existing limits
         */
        preciselimit?: boolean;
        /**
         * JSON which defines label
         */
        label?: Text.Options;
        /**
         * width or height of annotation
         */
        annotationsize?: number | string;
        /**
         * set the minimum limit to display data.
         */
        min?: number;
        /**
         * set the maximum limit to display data.
         */
        max?: number;
        /**
         * Is the Axis reversed.
         */
        reversed?: boolean;
        /**
         * Is the Axis logarithmic.
         */
        logarithmic?: boolean;
        /**
         * a custom tickgenerator for this axis
         */
        tickgenerator?: TickGenerator;
        /**
         * JSON which defines ticks options of the axis. See {@link @int/geotoolkit/axis/TickGenerator~TickGenerator#setProperties} for details
         */
        axisticks?: TickGenerator.Options;
        /**
         * JSON which defines horizontal ticks options of the grid (X or Y axis only). See {@link @int/geotoolkit/axis/TickGenerator~TickGenerator#setProperties} for details
         */
        gridticks?: TickGenerator.Options;
        /**
         * set legend (colorbar) visibility (Z only)
         */
        legendvisible?: boolean;
    };
    /**
     * JSON which defines header area
     */
    export type HeaderOptions = {
        /**
         * JSON which defines main title.
         */
        title?: Text.Options;
        /**
         * height of header
         */
        annotationsize?: number | string;
    };
    /**
     * JSON which define properties of labels
     */
    export type LabelsOptions = {
        /**
         * Data series of labels
         */
        data?: string[] | number[];
        datasource?: NumericalDataSeries | NumericalDataSeriesView;
        /**
         * The relative location of label to bubble
         */
        location?: string;
        /**
         * The relative location of label to bubble when first location is unable to show the label completely
         */
        secondarylocation?: string;
        /**
         * the text style of labels
         */
        textstyle?: TextStyle.Type;
        /**
         * the padding between labels and bubble or view boundary
         */
        padding?: number;
        /**
         * flag determine the visibility of labels
         */
        visible?: boolean;
    };
    export type LabelsOptionsOut = {
        /**
         * The relative location of label to bubble
         */
        location?: string;
        /**
         * The relative location of label to bubble when first location is unable to show the label completely
         */
        secondarylocation: string;
        /**
         * the text style of labels
         */
        textstyle: TextStyle;
        /**
         * the padding between labels and bubble or view boundary
         */
        padding: number;
        /**
         * flag determine the visibility of labels
         */
        visible: boolean;
    };
    /**
     * JSON which defines painter options
     */
    export type PainterOptions = {
        /**
         * symbol painter style
         */
        symbol?: SymbolShape.PainterFunction;
        /**
         * minimum size (side length of square) of symbol
         */
        minsize?: number;
        /**
         * maximum size (side length of square) of symbol
         */
        maxsize?: number;
        /**
         * default fillstyle for symbol
         */
        defaultfillstyle?: FillStyle.Type;
        /**
         * default linestyle for symbol
         */
        defaultlinestyle?: LineStyle.Type;
        /**
         * highlight color for symbol
         */
        highlightcolor?: string;
    };
    export type PainterOptionsOut = {
        /**
         * symbol painter style
         */
        symbol: SymbolShape.PainterFunction;
        /**
         * default fillstyle for symbol
         */
        defaultfillstyle: FillStyle;
        /**
         * default linestyle for symbol
         */
        defaultlinestyle: LineStyle;
        minsize: number;
        maxsize: number;
        sizebin: number;
    };
    /**
     * symbol options
     */
    export type SymbolCacheOptions = {
        /**
         * the width of symbol cache
         */
        width?: number;
        /**
         * the height of symbol cache
         */
        height?: number;
    };
    export type TrendlineOptions = RegressionLine.OptionsBaseOut & {
        enable: boolean;
    };
    export type RegressionLineOptions = RegressionLine.Options & {
        enable?: boolean;
    };
    /**
     * which define the tools options
     */
    export type ToolsOptions = AnnotatedWidget.ToolsOptions & {
        /**
         * which define the tooltip options
         */
        tooltip?: {
            /**
             * flag to enable tooltip
             */
            enabled?: boolean;
            /**
             * list define which axis value could be displayed when hovering on the bubble
             */
            displayprops?: Axes[];
            /**
             * fillstyle for tooltip
             */
            fillstyle?: FillStyle;
            /**
             * linestyle for tooltip bounds
             */
            linestyle?: LineStyle;
            /**
             * textstyle for tooltip item
             */
            textstyle?: TextStyle;
        };
    };
    export type ToolsOptionsOut = AnnotatedWidget.ToolsOptionsOut & {
        selection: {
            enable: boolean;
            resetselection: boolean;
        };
        /**
         * which define the tooltip options
         */
        tooltip: {
            /**
             * flag to enable tooltip
             */
            enable: boolean;
            /**
             * list define which axis value could be displayed when hovering on the bubble
             */
            displayprops: Axes[];
            /**
             * fillstyle for tooltip
             */
            fillstyle: FillStyle;
            /**
             * linestyle for tooltip bounds
             */
            linestyle: LineStyle;
            /**
             * textstyle for tooltip item
             */
            textstyle: TextStyle;
        };
    };
    type OptionsBase = {
        viewcache?: boolean;
        viewcachesize?: {
            /**
             * set tiled cache size.
             */
            width?: number;
            /**
             * set tiled cache size.
             */
            height?: number;
        };
        /**
         * JSON which defines header area
         */
        header?: HeaderOptions;
        /**
         * JSON which defines painter options
         */
        painter?: PainterOptions;
        /**
         * color provider
         */
        colorprovider?: ColorProvider;
        /**
         * JSON which defines trend line options
         */
        trendline?: RegressionLine.Options;
    };
    export type Tools = {
        'selection': Selection;
        'bubbleHover': Selection;
    } & AnnotatedWidget.Tools;
    export {};
}
export {};
