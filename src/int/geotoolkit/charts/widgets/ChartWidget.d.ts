import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { Rect } from '@int/geotoolkit/util/Rect';
import { DataSource } from '@int/geotoolkit/charts/DataSource';
import { Axis } from '@int/geotoolkit/charts/Axis';
import { AxisType } from '@int/geotoolkit/charts/AxisType';
import { ColorBar } from '@int/geotoolkit/controls/shapes/ColorBar';
import { Group } from '@int/geotoolkit/scene/Group';
import { ToolTipTool } from '@int/geotoolkit/controls/tools/ToolTipTool';
import type { Legend } from '@int/geotoolkit/controls/shapes/Legend';
import { ScrollablePanel } from '@int/geotoolkit/controls/shapes/ScrollablePanel';
import { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import { LegendTool } from '@int/geotoolkit/widgets/tools/LegendTool';
import { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import { Point } from '@int/geotoolkit/util/Point';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { NodeOrder } from '@int/geotoolkit/scene/CompositeNode';
import { AbstractChart } from '@int/geotoolkit/charts/AbstractChart';
import type { AnnotatedNode } from '@int/geotoolkit/scene/AnnotatedNode';
import { ChartRegistry } from '@int/geotoolkit/charts/ChartRegistry';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { JsonSerializer } from '@int/geotoolkit/persistence/JsonSerializer';
import type { Registry } from '@int/geotoolkit/persistence/Registry';
import type { Panning } from '@int/geotoolkit/controls/tools/Panning';
import { LegendItem } from '@int/geotoolkit/controls/shapes/LegendItem';
import { SelectionMode } from '@int/geotoolkit/charts/SelectionMode';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { SelectedItem } from '@int/geotoolkit/selection/SelectedItem';
import type { DefaultColorProvider } from '@int/geotoolkit/util/DefaultColorProvider';
/**
 * Default selection callback to create selection data based on the current event and selected area
 * @param event event name
 * @param eventArgs selection event/area
 */
export declare function defaultSelectionCallback(this: ChartWidget, event: string, eventArgs: EventArgs | Point | Rect): SelectedItem<AbstractChart>[];
/**
 * Default highlight callback to manage highlighting state(s) based on current selection data
 * @param selection current selection data
 * @param event event name
 * @param eventArgs selection event/area
 */
export declare function defaultHighlightCallback(this: ChartWidget, selection: SelectedItem<AbstractChart>[], event: string, eventArgs: EventArgs | Point | Rect): void;
/**
 * Default tooltip callback to form tooltip info based on selected series
 * @param selection current selection data
 * @param event event name
 * @param eventArgs selection event/area
 */
export declare function defaultTooltipCallback(this: ChartWidget, selection: SelectedItem<AbstractChart>[], event: string, eventArgs: EventArgs | Point | Rect): string;
/**
 * ChartWidget extends AnnotatedWidget and provides API for storing, showing and synchronizing different charts.
 * @example
 * import {Data} from '@int/geotoolkit/charts/Data';
 * import {ChartType} from '@int/geotoolkit/charts/ChartType';
 * import {ChartWidget} from '@int/geotoolkit/charts/widgets/ChartWidget';
 * import {AnnotationLocation} from '@int/geotoolkit/layout/AnnotationLocation'
 *
 * const data = new Data({…});
 * const widget = new ChartWidget({
 *     'data': data,
 *     'axes': {
 *         'xAxis-1': { // axis identifier, see geotoolkit/charts/Axis for options
 *             'location': AnnotationLocation.South,
 *             'min': 0,
 *             'grid': {
 *                  'visible': false
 *             }
 *         },
 *         'yAxis-1': {…}
 *     }
 * });
 * // add charts based on the data provided (see :
 * widget.addChart({
 *     'type': ChartType.LineChart,
 *     // data series identifiers
 *     'series': {
 *         'x': 'data-series-1',
 *         'y': 'data-series-2'
 *     },
 *     // connect to the axis:
 *     'axes': {
 *          'x': 'xAxis-1',
 *          'y': 'yAxis-1'
 *     }
 * });
 */
export declare class ChartWidget extends AnnotatedWidget {
    /**
     * ChartWidget extends AnnotatedWidget and provides API for storing, showing and synchronizing different charts
     * @param [options] widget options
     */
    constructor(options?: ChartWidget.Options);
    /**
     * Adds chart to the widget
     * @param options chart options
     * @returns this
     * @example
     * import {ChartType} from '@int/geotoolkit/charts/ChartType';
     *
     * // setup data series:
     * widget.setDataSource([{
     *     'id': 'Manufacturing',
     *     'data': [1, 2, 3, ...]
     * }, {
     *     'id': 'Sales & Distribution',
     *     'data': [10, 20, 30, ...]
     * }]);
     * ...
     * widget.addChart({
     *     'type': ChartType.LineChart,
     *     'series': {
     *         'y': 'Manufactoring'
     *     }
     * });
     */
    addChart(options: ChartRegistry.ChartOptions): this;
    /**
     * Inserts chart at specified index
     * @param index specified index
     * @param options chart options
     * @returns this
     */
    insertChart(index: number, options: ChartRegistry.ChartOptions): this;
    /**
     * Changes order of the charts being rendered.
     * @param chart any chart added to the widget
     * @param order position to be added
     * @param [anchor] anchor chart to specify changeOrder with respect to this chart
     * @returns this
     */
    changeChartOrder(chart: AbstractChart, order: NodeOrder, anchor?: AbstractChart): this;
    /**
     * Removes chart at specified index
     * @param index specified index
     * @returns this
     */
    removeChart(index: number | AbstractChart): this;
    /**
     * Removes all charts
     * @returns this
     */
    clearCharts(): this;
    /**
     * Sets data source used for the chart in the widget
     * @param data data series
     * @returns this
     */
    setDataSource(data: DataSource | DataSource.Options): this;
    clear(): this;
    /**
     * Sets title of the widget
     * @param titleOptions options of the title
     */
    setTitle(titleOptions: ChartWidget.Options['title']): this;
    /**
     * Gets title properties of the widget
     */
    getTitle(): ChartWidget.OptionsOut['title'];
    /**
     * Formats selection info for tooltip purposes, all info is shared between charts
     */
    tooltipTitleFormat(): string | null;
    /**
     * Returns current data source
     */
    getDataSource(): DataSource | null;
    /**
     * Returns total number of charts
     */
    getChartsCount(): number;
    /**
     * Returns chart by index or its name
     * @param id index of the chart (if number) or chart name (if string) or legend item (if LegendItem)
     */
    getChart(id: number | string | LegendItem): AbstractChart | null;
    /**
     * Sets properties
     * @param [options] properties
     * @returns this
     */
    setProperties(options?: ChartWidget.Options): this;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): ChartWidget.OptionsOut;
    getToolByName<T extends keyof ChartWidget.Tools>(toolName: T): ChartWidget.Tools[T];
    /**
     * function call in the constructor to initialize tools in the widget<br>
     * This widget contains by default :<br>
     * - All default tools in AnnotatedWidget
     * - {@link @int/geotoolkit/controls/tools/ToolTipTool~ToolTipTool} <br>
     * - {@link @int/geotoolkit/widgets/tools/LegendTool~LegendTool} <br>
     * - All default tools in {@link @int/geotoolkit/controls/shapes/ScrollablePanel~ScrollablePanel}, namely: <br>
     * -> {@link @int/geotoolkit/controls/tools/Panning~Panning} <br>
     * -> {@link @int/geotoolkit/controls/tools/scroll/HorizontalScroll~HorizontalScroll} <br>
     * -> {@link @int/geotoolkit/controls/tools/scroll/VerticalScroll~VerticalScroll} <br>
     * @param [options] tools options
     * @returns this
     */
    protected initializeTools(options?: ChartWidget.Options): this;
    /**
     * Returns current legend shape
     */
    getLegend(): Legend;
    /**
     * Returns scrollable panel containing current legend shape
     */
    getLegendPanel(): ScrollablePanel;
    getAxis(): Record<string | number, Axis>;
    getAxis(id: string | number): Axis | null;
    /**
     * Returns color bar shape for the colorbar-typed axis, null if axis not found
     * @param id color bar identifier
     */
    getColorBar(id: string | number): ColorBar | null;
    /**
     * Returns array of charts in provided area (in device)
     * @param area area to select
     * @param radius selection radius
     */
    hitTest(area: Point | Rect, radius?: number): AbstractChart[];
    /**
     * Returns selection tool radius
     */
    getSelectionRadius(): number;
    /**
     * Returns selection mode for tooltip, selection and crosshair tools
     */
    getSelectionMode(): SelectionMode | null;
    /**
     * Sets selection mode for tooltip, selection and crosshair tools
     */
    setSelectionMode(mode: SelectionMode): this;
    insertAxis(axisIndex: number, axis: Axis | ChartWidget.AxisOptions, location: AnnotationLocation, connectedObject?: Group): {
        axis: Axis;
        group: Group;
    };
    addAxis(axis: Axis | ChartWidget.AxisOptions, location: AnnotationLocation, connectedObject?: Group): {
        axis: Axis;
        group: Group;
    };
    removeAxis(axis: Axis): void;
    /**
     * Load template
     * @param template template to be applied to the widget
     * @param [registry] registry
     * @returns this
     */
    loadTemplate(template: string, registry?: Registry): this;
    /**
     * Save template
     * @param [registry] registry
     * @param [options] serialization options
     * @returns return template as a string
     */
    saveTemplate(registry?: Registry, options?: JsonSerializer.Options): string;
    getColorbars(): Record<string | number, ColorBar>;
}
export declare namespace ChartWidget {
    /**
     * widget options
     */
    type Options = AnnotatedWidget.Options & {
        /**
         * data series
         */
        data?: DataSource | DataSource.Options;
        /**
         * widget axes options.
         */
        axes?: AxesOptions;
        /**
         * Use getDesiredOffset from AbstractChart to calculate limits
         */
        usedesiredoffset?: boolean;
        /**
         * selection tool options
         */
        selection?: {
            /**
             * selection radius (in device)
             */
            radius?: number;
            /**
             * callback to be called to select data series.
             */
            callback?: SelectionCallback;
        };
        /**
         * highlight states options
         */
        highlight?: {
            /**
             * Callback to manage highlighting state(s) based on current selection data
             */
            callback?: HighlightCallback;
            /**
             * True (by default) to update highlighting state(s) on hover/click/dblclick/leave events. False otherwise
             */
            enabled?: boolean;
        };
        /**
         * tooltip tool options
         */
        tooltip?: Omit<ToolTipTool.Options, 'callback'> & {
            /**
             * callback to form tooltip info based on selected series
             */
            callback?: TooltipCallback;
            /**
             * Title format
             */
            titleformat?: string;
        };
        /**
         * Selection mode for tooltip, selection and crosshair tools. It shows how to highlight charts
         * and display tooltip
         */
        selectionmode?: SelectionMode;
        /**
         * legend options
         */
        legend?: {
            /**
             * default legend alignment (can be moved by user)
             */
            alignment?: AnchorType;
            /**
             * if true then auto size to calculate device size of the legend, or size corresponds to dimension
             */
            size?: boolean | Dimension | Dimension.Options;
            /**
             * legend content orientation
             */
            orientation?: Orientation;
            /**
             * default legend offset (in px) from the chart center limits
             */
            offset?: number | Point;
            /**
             * legend border linestyle
             */
            linestyle?: LineStyle | LineStyle.Options | string;
            /**
             * legend background fillstyle
             */
            fillstyle?: FillStyle | string | FillStyle.Options;
            /**
             * legend visibility flag
             */
            visible?: boolean;
        };
        /**
         * Title options
         */
        title?: {
            /**
             * Text to display
             */
            text?: string;
            /**
             * Text style to apply to title
             */
            textstyle?: TextStyle.Type;
            /**
             * Location of title
             */
            location?: AnnotationLocation;
            /**
             * Padding
             */
            padding?: number;
            /**
             * Visibility of title
             */
            visible?: boolean;
        };
        /**
         * chart or an array of charts
         */
        chart?: ChartRegistry.ChartOptions | ChartRegistry.ChartOptions[];
    };
    /**
     * Options for axes on each side of the widget
     */
    type AxesOptions = Record<string, AxisOptions | Axis>;
    /**
     * properties
     */
    type OptionsOut = AnnotatedWidget.OptionsOut & {
        /**
         * widget axes options.
         */
        axes?: Record<string, Axis>;
        /**
         * Use getDesiredOffset from AbstractChart to calculate limits
         */
        usedesiredoffset: boolean;
        /**
         * selection tool options
         */
        selection?: {
            /**
             * selection radius (in device)
             */
            radius?: number;
            /**
             * callback to be called to select data series
             */
            callback?: SelectionCallback;
        };
        /**
         * tooltip tool options
         */
        tooltip?: {
            /**
             * callback to form tooltip info based on selected series
             */
            callback?: TooltipCallback;
            /**
             * Title format
             */
            titleformat: string;
        };
        /**
         * Selection mode for tooltip, selection and crosshair tools. It shows how to highlight charts
         * and display tooltip
         */
        selectionmode?: SelectionMode;
        /**
         * legend options
         */
        legend?: {
            /**
             * legend alignment
             */
            alignment?: AnchorType;
            /**
             * if true then auto size to calculate device size of the legend, or size corresponds to dimension
             */
            size?: boolean | Dimension;
            /**
             * legend content orientation
             */
            orientation?: Orientation;
            /**
             * default legend offset (in px) from the chart center limits
             */
            offset?: number | Point;
            /**
             * legend border linestyle
             */
            linestyle?: LineStyle;
            /**
             * legend background fillstyle
             */
            fillstyle?: FillStyle;
            /**
             * visibility of legend
             */
            visible: boolean;
        };
        title?: {
            /**
             * Title text
             */
            text?: string;
            /**
             * Text style
             */
            textstyle?: TextStyle;
            /**
             * Location of title
             */
            location?: AnnotationLocation;
            /**
             * Visibility of title
             */
            visible?: boolean;
        };
    };
    type AxisOptions = AnnotatedNode.AxisOptions & Axis.Options & ({
        /**
         * Axis location
         */
        location?: AnnotationLocation.South | AnnotationLocation.East | AnnotationLocation.West | AnnotationLocation.North;
        /**
         * Axis type
         */
        type: AxisType.ColorBar;
        /**
         * Color provider
         */
        colorprovider?: DefaultColorProvider;
        /**
         * Device size for the colorbar axis
         */
        size?: number;
    } | {
        /**
         * Axis type
         */
        type?: Exclude<AxisType, AxisType.ColorBar>;
    });
    /**
     * Callback to create selection data based on the current event and selected area
     */
    type SelectionCallback = (this: ChartWidget, event: string, eventArgs: EventArgs | Point | Rect) => SelectedItem<AbstractChart>[];
    /**
     * Callback to manage highlighting state(s) based on current selection data
     */
    type HighlightCallback = (this: ChartWidget, selection: SelectedItem<AbstractChart>[], event: string, eventArgs: EventArgs | Point | Rect) => void;
    /**
     * Callback to return tooltip info based on the current selection data
     */
    type TooltipCallback = (this: ChartWidget, selection: SelectedItem<AbstractChart>[], event: string, eventArgs: EventArgs | Point | Rect) => string;
    type Tools = {
        'tooltip': ToolTipTool;
        'LegendTool': LegendTool;
        'legend-scrolls': CompositeTool;
        'colorbar-tools': CompositeTool;
        'scrollablepanel-panning': Panning;
        'legend-move': AbstractTool;
        'legend-resize': AbstractTool;
    } & AnnotatedWidget.Tools;
}
