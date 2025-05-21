/**
 * @module geotoolkit/widgets/CrossPlot
 */
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import type { Merge } from '@int/geotoolkit/base';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { CrossPlot as CrossPlotShape } from '@int/geotoolkit/controls/shapes/CrossPlot';
import { DataSource } from '@int/geotoolkit/data/DataSource';
import { DataTable } from '@int/geotoolkit/data/DataTable';
import { DataTableView } from '@int/geotoolkit/data/DataTableView';
import { Rect } from '@int/geotoolkit/util/Rect';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import { NumericalDataSeriesView } from '@int/geotoolkit/data/NumericalDataSeriesView';
import { ColorProvider } from '@int/geotoolkit/util/ColorProvider';
import { SymbolAlignment } from '@int/geotoolkit/controls/tools/ColorBarCursorTool';
import { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Text } from '@int/geotoolkit/scene/shapes/Text';
declare type Axes = 'x' | 'y' | 'z';
/**
 * The crossplot widget is an annotated widget that is specialized for cross plot representations.
 * <p>
 * Cross plot is a two dimensional chart, that uses horizontal and vertical axes to plot the data points. <br/>
 * Cross plot shows how much one variable is affected by another. The relationship between two variables is called their correlation. </br>
 * Cross plots usually consist of a large body of data. <br>
 * </p>
 * <p>
 * It uses {@link @int/geotoolkit/controls/shapes/CrossPlot~CrossPlot} internally.
 * setOptions() API can be used to configure and customize the widget. It provides a comprehensible way of changing the default look and feel of the widget.
 * </p>
 * <p>
 * It reuses the default <b>tools</b> provided by the {@link @int/geotoolkit/widgets/AnnotatedWidget~AnnotatedWidget} and customizes them for crossplot related operations.
 * It also provides utility functions to highlight points in a given area (or by index)<br>
 * Selection function not only selects crossplot shapes but also provides selected point index.
 * </p>
 * <p>
 * The crossplot can represent 3 dimesions: X, Y, and color of datasets.
 * By default, crossplot can contain only a single dataset.
 * Another dataset could also be added on top of it as long as its modellimits and bounds are also managed independently.
 * The color of each point can be defined using a {@link @int/geotoolkit/util/ColorProvider~ColorProvider} (refer to the example in setData() method)
 * and the corresponding {@link @int/geotoolkit/controls/shapes/ColorBar~ColorBar} can be displayed.
 * </p>
 *
 * @example
 * import {CirclePainter} from '@int/geotoolkit/scene/shapes/painters/CirclePainter';
 * import {DiscreteGradientColorProvider} from '@int/geotoolkit/util/DiscreteGradientColorProvider';
 * import {CrossPlot} from '@int/geotoolkit/widgets/CrossPlot';
 * import {KnownScales} from '@int/geotoolkit/util/ColorProvider';
 *
 * const widget = new CrossPlot({
 *     'name': 'Crossplot',
 *     'tools': {
 *         'horizontalscroll': {
 *             'visible': false
 *         },
 *         'verticalscroll': {
 *             'visible': false
 *         }
 *     },
 *     'x': {
 *         'label': {
 *             'text': 'x axis'
 *         },
 *         'annotationsize': 40
 *     },
 *     'y': {
 *         'label': {
 *             'text': 'y axis'
 *         },
 *         'annotationsize': 50
 *     },
 *     'z': {
 *         'annotationsize': 20
 *     }
 * });
 * widget.setData({
 *     'header': {
 *         'title': {
 *             'visible': false
 *         },
 *         'annotationsize': 20
 *     },
 *     'x': {
 *         'data': [1.8, 3, 4.4, 5, 6.8, 5.5, 6.7, 6, 3.8, 4, 2.8, 6.5, 6, 7.5, 8, 8.5, 8, 6.2, 9, 2, 6.5, 6.9, 6.2,
 *             6, 4.7, 4, 5.3, 5.4, 5, 4.4, 5, 4.2, 7.6, 8, 9, 3, 2, 3.6, 7, 8, 9.5, 9.2, 9],
 *         'unit': 'ft',
 *         'label': {
 *             'text': 'X axis'
 *         },
 *         'neatlimits': true
 *     },
 *     'y': {
 *         'data': [3, 5, 7, 6.8, 6.4, 7.6, 7, 5, 4, 8, 8.7, 7.4, 5.5, 5, 6, 7, 3, 1.6, 3, 6.5, 4, 5, 6, 8,
 *             7, 6.7, 5, 6.5, 3, 4.5, 7.9, 7, 2, 3, 6.8, 8, 5, 8.4, 4, 6, 2, 4, 8],
 *         'unit': 'ft',
 *         'label': {
 *             'text': 'Y axis'
 *         },
 *         'neatlimits': true
 *     },
 *     'z': {
 *         'data': [1, 3, 1, 2, 6, 4.5, 5, 2, 4, 7, 3, 6, 1, 2, 4, 2, 6, 2, 4, 5, 3, 9, 8, 7, 2, 3,
 *             4, 2, 6, 3, 2, 3, 6, 7, 9, 3, 5, 5, 1, 2, 1, 1, 3, 6, 10],
 *         'unit': 'ft',
 *         'min': 0,
 *         'max': 10,
 *         'label': {
 *             'text': 'Z color'
 *         },
 *         'legendvisible': true,
 *         'annotationsize': 85
 *     },
 *     'colorprovider': new DiscreteGradientColorProvider({'bins': 255}).setScale(KnownScales.Orange, 1, 10),
 *     'marker': {
 *         'size': 8,
 *         'painter': CirclePainter
 *     }
 * });
 */
export declare class CrossPlot extends AnnotatedWidget {
    /**
     * @param [options] options to initialize crossplot
     */
    constructor(options?: CrossPlot.Options);
    /**
     * Refresh layout of inner components of the widget
     */
    refreshLayout(): this;
    protected initializeTools(): this;
    /**
     * Sets data options (for non-data parameters use CrossPlot.prototype.setOptions)
     * @param [data] options and data
     * @returns this
     * @example
     * // To add colors according to the scale, specify necessary ranges and then provide an instance of the color provider like shown below.
     * import {RangeColorProvider} from '@int/geotoolkit/util/RangeColorProvider';
     * import {Range} from '@int/geotoolkit/util/Range';
     * const colorProvider = new RangeColorProvider({
     *      'values': [
     *          new Range(0, 50),
     *          new Range(50, 100),
     *          new Range(100, 150)
     *       ],
     *      'colors': ['blue', 'red', 'green']
     * });
     * widget.setData({
     *     ...
     *     'colorprovider': colorProvider
     * });
     */
    setData(data?: CrossPlot.DataOptions): this;
    /**
     * get options
     * @param getDataOptions how to extract data, null by default
     */
    getData(getDataOptions?: {
        'no-data'?: boolean;
    }): CrossPlot.DataOptionsOut;
    /**
     * Sets specific non-data properties for the visuals like header, marker color etc.
     * @returns properties to apply
     */
    getProperties(): CrossPlot.OptionsOut;
    /**
     * Sets specific non-data properties for the visuals like header, marker color etc.
     * @param [properties] properties to apply
     * @returns this
     */
    setProperties(properties?: CrossPlot.Options): this;
    /**
     * Sets specific non-data options for the visuals like header, marker color etc.
     * @param [data] options to apply see {@link import("geotoolkit/widgets/CrossPlot").CrossPlot.setProperties}
     * @returns this
     * @example
     * import {DiscreteGradientColorProvider} from '@int/geotoolkit/util/DiscreteGradientColorProvider';
     * import {KnownScales} from '@int/geotoolkit/util/ColorProvider';
     * crossplotwidget.setOptions({
     *    'colorprovider': new DiscreteGradientColorProvider({'bins': 255}).setScale(KnownScales.Winter, 1, 7)
     * });
     */
    setOptions(data?: CrossPlot.OptionsBase): this;
    /**
     * Gets visual options
     */
    getOptions(): CrossPlot.OptionsBaseOut;
    /**
     * Set marker Options
     *
     * @param [data] JSON which defines marker options
     * @returns this
     */
    setMarkerOptions(data?: CrossPlot.MarkerOptions): this;
    /**
     * Get marker Options
     */
    getMarkerOptions(): CrossPlot.MarkerOptionsOut;
    /**
     * Set Options for Header
     * @param [options] JSON which defines header area
     * @returns this
     */
    setHeaderOptions(options?: CrossPlot.HeaderOptions): this;
    /**
     * Get Options for Header
     */
    getHeaderOptions(): CrossPlot.HeaderOptionsOut;
    /**
     * Set Parameters for axis
     * @param axis axis to apply ('x', 'y' or 'z')
     * @param [data] JSON which defines data.
     * @param [xplotData] optional data
     */
    setAxisDataOptions(axis: Axes, data?: CrossPlot.AxisDataOptions, xplotData?: CrossPlotShape.Options): CrossPlotShape.Options;
    /**
     * Get axis options
     * @param axis axis to get options
     * @param getDataOptions how to extract data, null by default
     * @returns JSON which defines data.
     */
    getAxisDataOptions(axis: string, getDataOptions: {
        'no-data'?: boolean;
    }): CrossPlot.AxisDataOptionsOut;
    /**
     * Sets color provider
     * @param [cp] color provider
     */
    setColorProvider(cp?: ColorProvider | ColorProvider.Options & {
        type?: string;
    }): this;
    /**
     * Returns color provider
     * @returns color provider
     */
    getColorProvider(): ColorProvider | null;
    /**
     * Gets Highlighted Indices
     * @param [name] name of the selection
     * @returns array of indices
     */
    getHighlightedIndices(name?: string): number[];
    /**
     * Return names of highlighted selections
     * @returns names
     */
    getHighlightSelectionNames(): string[];
    /**
     * Return highlight options
     * @param name highlight selection name
     * @returns indices options
     */
    getHighlightedOptions(name: null | string): CrossPlot.HighlightOptions;
    /**
     * Highlights the selected area
     * @param rect search area
     * @param reset un-highlights previously selected indices
     */
    highlightArea(rect: Point | Rect, reset: boolean): void;
    /**
     * Highlights the selected indices
     * @param indices to be highlighted
     * @param reset un-highlights previously selected indices
     * @returns this
     */
    highlightIndices(indices: CrossPlot.HighlightIndices | number[], reset?: boolean): this;
    /**
     * Return indices in search area
     * @param rect search area
     * @returns array of indices
     */
    getIndicesAt(rect: Rect): number[];
    setToolsOptions(options: AnnotatedWidget.ToolsOptions): this;
    /**
     * Switch on {@link @int/geotoolkit/controls/tools/ColorBarCursorTool~ColorBarCursorTool} ColorBarCursorTool
     * @param [symbolAlignment] direction of symbol
     * @param [offset] offset
     * @param [symbol] symbol for colorbar cursor
     * @returns this
     */
    switchOnCursorTool(symbolAlignment?: SymbolAlignment, offset?: number, symbol?: SymbolShape): this;
    /**
     * Switch off {@link @int/geotoolkit/controls/tools/ColorBarCursorTool~ColorBarCursorTool} ColorBarCursorTool
     * @returns this
     */
    switchOffCursorTool(): this;
    /**
     * Return inner crossplot shape
     */
    getCrossPlotShape(): CrossPlotShape;
    /**
     * apply size (width or height) to annotation (convenience method)
     * @param [annotationSize] JSON to hold (width or height) of the annotation
     * @param [silent] true for not updating crossplot information about sizes
     * @returns this
     */
    setAnnotationSize(annotationSize?: AnnotatedWidget.AnnotationSize, silent?: boolean): this;
}
export declare namespace CrossPlot {
    /**
     * options to initialize crossplot
     */
    type Options = AnnotatedWidget.Options & DataOptions & {
        /**
         * Enable view cache on model
         */
        viewcache?: boolean;
        /**
         * viewcachesize
         */
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
    };
    /**
     * options and data
     */
    type DataOptions = {
        /**
         * bounds.
         */
        bounds?: Rect.Options | Rect;
        /**
         * JSON which defines header area
         */
        header?: HeaderOptions;
        /**
         * ColorProvider used to color the data
         */
        colorprovider?: ColorProvider;
        /**
         * JSON which defines X-data.
         */
        x?: AxisDataOptions;
        /**
         * JSON which defines Y-data.
         */
        y?: AxisDataOptions;
        /**
         * JSON which defines Z-data.
         */
        z?: AxisDataOptions;
        /**
         * JSON which defines marker options
         */
        marker?: MarkerOptions;
        /**
         * JSON which defines tools options.
         */
        tools?: AnnotatedWidget.ToolsOptions;
        /**
         * Data source
         */
        datasource?: DataSource | DataTable | DataTableView;
    };
    /**
     * how to extract data, null by default
     */
    type DataOptionsOut = {
        bounds?: Rect.Options;
        /**
         * JSON which defines header area
         */
        header: HeaderOptionsOut;
        /**
         * ColorProvider used to color the data
         */
        colorprovider?: ColorProvider.Options;
        /**
         * JSON which defines X-data.
         */
        x: AxisDataOptionsOut;
        /**
         * JSON which defines Y-data.
         */
        y: AxisDataOptionsOut;
        /**
         * JSON which defines Z-data.
         */
        z: AxisDataOptionsOut;
        /**
         * JSON which defines marker options
         */
        marker: MarkerOptionsOut;
        /**
         * JSON which defines tools options.
         */
        tools: AnnotatedWidget.ToolsOptionsOut;
    };
    /**
     * properties to apply
     */
    type OptionsOut = AnnotatedWidget.OptionsOut & DataOptionsOut;
    type OptionsBase = Options;
    type OptionsBaseOut = Merge<DataOptionsOut, {
        /**
         * color provider used for widget
         */
        colorprovider?: ColorProvider;
    }>;
    /**
     * JSON which defines marker options
     */
    type MarkerOptions = {
        /**
         * painter style
         */
        painter?: SymbolShape.Painter;
        highlightpainter?: SymbolShape.Painter;
        /**
         * marker size
         */
        size?: number;
        /**
         * default color
         */
        defaultcolor?: string;
        /**
         * default line color
         */
        defaultlinecolor?: string;
        /**
         * highlight color
         */
        highlightcolor?: string;
        /**
         * highlight symbol size. it equals to symbols size by default
         */
        highlightsize?: number;
    };
    type MarkerOptionsOut = {
        /**
         * painter style
         */
        painter: SymbolShape.Painter;
        /**
         * marker size
         */
        size: number;
        /**
         * default color of marker
         */
        defaultcolor: string;
        /**
         * default line color or marker
         */
        defaultlinecolor: string;
        /**
         * highlight symbol size, by default it is equal to the symbol size
         */
        highlightsize: number;
        highlightcolor?: string;
    };
    /**
     * JSON which defines header area
     */
    type HeaderOptions = {
        /**
         * JSON which defines main title.
         */
        title?: Text.Options;
        /**
         * height of header
         */
        annotationsize?: number | string;
    };
    type HeaderOptionsOut = {
        /**
         * JSON which defines main title.
         */
        title: Text.OptionsOut;
        /**
         * height of header
         */
        annotationsize: number | string;
    };
    /**
     * JSON which defines data.
     */
    type AxisDataOptions = {
        /**
         * Axis properties
         */
        axis?: {
            /**
             * Axis title text
             */
            title?: string;
            /**
             * Auto rotation
             */
            autolabelrotation?: boolean;
            autolabelrotationangle?: number;
            baseline?: LineStyle;
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
         * are min/max fixed (false) or given by datasource (true). DataSource has to exist
         */
        autominmax?: boolean;
        /**
         * location of
         */
        location?: AnnotationLocation;
        /**
         * JSON which defines label.
         */
        label?: {
            /**
             * Text
             */
            text?: string;
            /**
             * Text style
             */
            textstyle?: TextStyle.Type;
        };
        /**
         * width or height of annotation
         */
        annotationsize?: number | string;
        /**
         * Minimum Value to display data. If never set, will be min of [options.data]
         */
        min?: number;
        /**
         * Maximum Value to display data. If never set, will be max of [options.data]
         */
        max?: number;
        /**
         * Calculate smart limits for linear mode. For logarithmic mode it is disabled
         */
        neatlimits?: boolean;
        /**
         * option for neat limits calculates only step and hide edge ticks. It is neabled only if neatlimits is set
         */
        preciselimits?: boolean;
        /**
         * axis min span for smart limits. It works if neatlimits is true
         */
        minspan?: number;
        /**
         * Is the Axis reversed.
         */
        reversed?: boolean;
        /**
         * Is the Axis logarithmic. default is false
         */
        logarithmic?: boolean;
        /**
         * a custom tickgenerator for this axis
         */
        tickgenerator?: TickGenerator;
        /**
         * Grid lines tick generator
         */
        gridtickgenerator?: TickGenerator;
        /**
         * JSON which defines ticks options of the axis.
         */
        axisticks?: TickGenerator.Options;
        /**
         * JSON which defines horizontal ticks options of the grid (X or Y axis only).
         */
        gridticks?: TickGenerator.Options;
        /**
         * legend visibility (Z only)
         */
        legendvisible?: boolean;
        /**
         * JSON which defines histogram properties
         */
        histogram?: {
            linecolor?: LineStyle.Type;
            /**
             * Is the histogram visible (default is false)
             */
            visible?: boolean;
            /**
             * fillstyle to be used
             */
            fillstyle?: FillStyle.Type;
            /**
             * linestyle to be used
             */
            linestyle?: LineStyle.Type;
            /**
             * number of bins to be used (default is 25)
             */
            bins?: number;
        };
    };
    /**
     * JSON which defines data.
     */
    type AxisDataOptionsOut = {
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
         * are min/max fixed (false) or given by datasource (true). DataSource has to exist
         */
        autominmax?: boolean;
        /**
         * location of
         */
        location?: AnnotationLocation;
        /**
         * JSON which defines label
         */
        label?: {
            /**
             * Label
             */
            text?: string;
            /**
             * Text style
             */
            textstyle?: TextStyle.Type;
        };
        /**
         * width or height of annotation
         */
        annotationsize?: number | string;
        /**
         * Minimum Value to display data. If never set, will be min of [options.data]
         */
        min?: number;
        /**
         * Maximum Value to display data. If never set, will be max of [options.data]
         */
        max?: number;
        /**
         * Is the Axis logarithmic. default is false
         */
        logarithmic?: boolean;
        /**
         * Calculate smart limits for linear mode. For logarithmic mode it is disabled
         */
        neatlimits?: boolean;
        /**
         * option for neat limits calculates only step and hide edge ticks. It is neabled only if neatlimits is set
         */
        preciselimits?: boolean;
        /**
         * axis min span for smart limits. It works if neatlimits is true
         */
        minspan?: number;
        /**
         * Is the Axis reversed.
         */
        reversed?: boolean;
        /**
         * JSON which defines histogram properties
         */
        histogram?: {
            /**
             * Is the histogram visible
             */
            visible?: boolean;
            /**
             * number of bins to be used
             */
            bins?: number;
        };
        /**
         * JSON which defines ticks options of the axis.
         */
        axisticks?: TickGenerator.OptionsOut;
        /**
         * JSON which defines horizontal ticks options of the grid (X or Y axis only).
         */
        gridticks?: TickGenerator.OptionsOut;
    };
    /**
     * indices options
     */
    type HighlightOptions = {
        /**
         * default color
         */
        defaultcolor?: string;
        /**
         * highlight color
         */
        highlightcolor?: string;
    };
    /**
     * to be highlighted
     */
    type HighlightIndices = Record<string, {
        /**
         * indices to be highlighted
         */
        indices: number[];
        /**
         * highlight options
         */
        options?: CrossPlotShape.Options;
    }>;
}
export {};
