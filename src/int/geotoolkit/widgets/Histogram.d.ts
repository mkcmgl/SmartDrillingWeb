/**
 * @module geotoolkit/widgets/Histogram
 */
import type { EmptyRecord } from '@int/geotoolkit/base';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { FrequencyType, Histogram as HistogramShape } from '@int/geotoolkit/controls/shapes/Histogram';
import { HistogramTickGenerator } from '@int/geotoolkit/controls/axis/HistogramTickGenerator';
import { AdaptiveTickGenerator } from '@int/geotoolkit/axis/AdaptiveTickGenerator';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import { NumericalDataSeries } from '@int/geotoolkit/data/NumericalDataSeries';
import { NumericalDataSeriesView } from '@int/geotoolkit/data/NumericalDataSeriesView';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Range } from '@int/geotoolkit/util/Range';
import type { Registry } from '@int/geotoolkit/persistence/Registry';
import type { Text } from '@int/geotoolkit/scene/shapes/Text';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
declare type Axes = 'x' | 'y' | 'z';
/**
 * Histogram Widget's Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when this models data has been updated
     */
    DataUpdated = "dataUpdated"
}
/**
 * The Histogram widget  is  an annotated widget that is specialized for histogram representations.It uses {@link @int/geotoolkit/controls/shapes/Histogram~Histogram} internally.
 * <p>
 * A histogram is a graphical display of tabulated frequencies, shown as bars. It shows what proportion of cases fall into each of several categories.
 * The categories are usually specified as non-overlapping intervals of some variable. The categories are adjacent. The intervals (or bands) should ideally be of the same size
 * </p>
 * <p>
 * </p>
 * <p>
 * The main way to configure and customize the widget is to use the different setOptions() function that provides a comprehensible way of changing the default look and feel of the widget.
 * This widget by default, allows horizontally zoom only.
 * </p>
 * <p>
 * It reuses the default tools provided by the AnnotatedWidget and customize them for histogram related operations.
 * <ul>
 * <li> rubberzoom: limits the zoom direction to horizontal only.</li>
 * <li> selection: Selects only histogram shapes but provides selected bin index </li>
 * </ul>
 * It also provides utility functions to highlight bin in a given range (or by index). The histogram widget can display and manage several histograms at once, overlapping them.
 * It also provides an 'accumulative' curve feature and can generate statistics.
 * </p>
 *
 * @example
 * // Create the widget
 * const widget = new Histogram({
 *     'bounds': new Rect(0, 0, 800, 400),
 *     'tools': {
 *         'horizontalscroll': {'visible': false},
 *         'verticalscroll': {'visible': false}
 *     },
 *     'header': {
 *         'title': {'visible': false}
 *     },
 *     'autogradient': false,
 *     'linestyle': {
 *         'color': 'transparent',
 *         'width': 0
 *     }
 * });
 * @example
 *   // Set the data for the widget.
 *   widget.setData({
 *          'data': [1000, 1100, 1800, 2000, 2200, 2300, 2210, 2200, 2400, 2100, 2200, 2000, 3000,
 *              3500, 3100, 3150, 3090, 4100, 4000, 4500, 4125, 4400, 4500, 4600, 4650, 4300, 5000,
 *              5555, 5100, 5125, 5200, 6100, 6000, 6500, 7000, 7400, 7900, 8000, 9000, 9500],
 *          'x': {
 *              'label': {
 *                  'text': 'Depth(ft)'
 *              },
 *              'min': 1000,
 *              'max': 10000,
 *              'neatlimits': false
 *          },
 *          'y': {
 *              'label': {
 *                  'text': 'Number of Wells'
 *              },
 *              'min': 0,
 *              'max': 10,
 *              'neatlimits': false
 *          },
 *          'bins': 10,
 *          'binspacing': 95
 *      });
 * @example
 * // CSS rules can be applied to the Histogram widget in order to customize it.
 * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
 * const css = [
 *          ' .Histogram { ',
 *          ' x-axisticks-major-labelstyle-font: 11px Roboto; ',
 *          ' y-axisticks-major-labelstyle-font: 11px Roboto; ',
 *          ' x-axisticks-major-labelstyle-color: rgba(128,128,128,.7); ',
 *          ' y-axisticks-major-labelstyle-color: rgba(128,128,128,.7); ',
 *          ' fillstyle-color:  #5b9bd5;',
 *          ' header-annotationsize: 0;',
 *          ' backgroundfillstyle-color: #2d353c;',
 *          '}'
 *  ].join('\n');
 * widget.setCss(new CssStyle({'css': css}));
 */
export declare class Histogram extends AnnotatedWidget {
    constructor(options?: Histogram.Options);
    on<E extends keyof Histogram.EventMap>(type: E, callback: (eventType: E, sender: this, args: Histogram.EventMap[E]) => void): this;
    off<E extends keyof Histogram.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Histogram.EventMap[E]) => void): this;
    notify<E extends keyof Histogram.EventMap>(type: E, source: Histogram, args?: Histogram.EventMap[E]): this;
    /**
     * Add a new histogram
     * @returns histogram
     */
    protected addHistogram(): HistogramShape;
    /**
     * @param [index] index of the histogram or active index.
     * @returns the current active histogram
     */
    getHistogram(index?: number): HistogramShape;
    protected initializeTools(): this;
    /**
     * Returns the bins values of the current histogram
     */
    getBins(): HistogramShape.Bin[];
    /**
     * get orientation
     */
    getOrientation(): Orientation;
    /**
     * set orientation
     * @param orientation orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Sets options and/or data
     * @param [data] data
     * @returns this
     */
    setData(data?: Histogram.DataOptions): this;
    /**
     * get options
     * @param getDataOptions how to extract data, null by default
     */
    getData(getDataOptions: {
        'no-data'?: boolean;
    }): Histogram.DataOptionsOut;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): Histogram.OptionsOut;
    /**
     * Set Options for Header
     * @param [data] JSON which defines header area
     * @returns this
     */
    setHeaderOptions(data?: Histogram.HeaderOptions): this;
    /**
     * Returns calculated statistics of values
     * - Data samples count
     * - min sample value
     * - max sample value
     * - average value
     * - variance value
     * - average deviation value
     * - standard deviation value
     * - skewness value
     * - standard kurtosis value
     * - Theoretical P10 value (centile)
     * - Theoretical P50 value (centile)
     * - Theoretical P90 value (centile)
     * @returns statistics
     */
    getStatistics(): number[];
    /**
     * Maximum frequency
     */
    getMaxFrequency(): number;
    /**
     * Get lowest value
     *
     * @returns minValue
     */
    getMinValue(): number;
    /**
     * Get highest data value
     *
     * @returns max value
     */
    getMaxValue(): number;
    /**
     * Get Options for Header
     * @returns JSON which defines header area
     */
    getHeaderOptions(): Histogram.HeaderOptionsOut;
    /**
     * Set Parameters for axis
     * @param axis axis to apply ('x' or 'y')
     * @param [data] JSON which defines data.
     * @returns this
     */
    setAxisDataOptions(axis: string, data?: Histogram.AxisDataOptions): this;
    /**
     * get axis options
     * @param axis The name of the axis
     * @param getDataOptions how to extract data, null by default
     */
    getAxisDataOptions(axis: Axes, getDataOptions: {
        'no-data'?: boolean;
    }): Histogram.AxisDataOptionsOut;
    /**
     * Gets Highlighted Bins
     */
    getHighlightedBins(): number[];
    /**
     * Highlights the selected area
     * @param rect area
     * @param reset un-highlights previously selected indices
     */
    highlightRange(rect: Point | Range, reset: boolean): void;
    /**
     * Highlights the selected indices
     * @param indices to be highlighted
     * @param reset un-highlights previously selected indices
     * @returns this
     */
    highlightBins(indices: number[], reset: boolean): this;
    /**
     * Set Tools Options
     * @param [options] options
     * @returns this
     */
    setToolsOptions(options?: AnnotatedWidget.ToolsOptions): this;
    /**
     * Load template
     * @param template template to be applied to the widget
     * @param [registry] registry
     */
    loadTemplate(template: string, registry?: Registry): void;
    /**
     * Save template
     * @param [registry] registry
     */
    saveTemplate(registry?: Registry): string;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] properties
     */
    setProperties(properties?: Histogram.Options): this;
}
export declare namespace Histogram {
    type Options = AnnotatedWidget.Options & DataOptions;
    /**
     * data
     */
    type DataOptions = {
        unit?: string | AbstractUnit;
        bounds?: Rect | Rect.Options;
        /**
         * JSON which defines header area
         */
        header?: HeaderOptions;
        /**
         * DataSource
         */
        datasource?: NumericalDataSeries | NumericalDataSeriesView;
        /**
         * are X min/max fixed (false) or given by datasource (true). DataSource has to exist
         */
        autominmax?: boolean;
        /**
         * Array of data
         */
        data?: number[];
        /**
         * Number of bins
         */
        bins?: number;
        /**
         * bin spacing in percentage
         */
        binspacing?: number;
        /**
         * Bins FillStyle.
         */
        fillstyle?: FillStyle.Type;
        /**
         * FillStyle autogradient
         */
        autogradient?: boolean;
        /**
         * Bins LineStyle.
         */
        linestyle?: LineStyle.Type;
        /**
         * Frequency Type
         */
        frequencytype?: FrequencyType | string;
        /**
         * Color used to highlight bins
         */
        highlightcolor?: string;
        /**
         * JSON for accumulation curve.
         */
        accumulation?: {
            /**
             * Visibility of accumulation curve.
             */
            visible?: boolean;
            /**
             * JSON for accumulation curve.
             */
            linestyle?: LineStyle.Type;
        };
        /**
         * JSON which defines X-data.
         */
        x?: AxisDataOptions;
        /**
         * JSON which defines Y-data.
         */
        y?: AxisDataOptions;
        /**
         * JSON which defines tools data.
         */
        tools?: AnnotatedWidget.ToolsOptions;
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
         * DataSource
         */
        datasource?: NumericalDataSeries | NumericalDataSeriesView;
        data?: number[];
        /**
         * are X min/max fixed (false) or given by datasource (true). DataSource has to exist
         */
        autominmax?: boolean;
        /**
         * Number of bins
         */
        bins: number;
        /**
         * bin spacing in percentage
         */
        binspacing: number;
        /**
         * Bins FillStyle.
         */
        fillstyle: FillStyle.OptionsOut;
        /**
         * FillStyle autogradient
         */
        autogradient: boolean;
        /**
         * Bins LineStyle.
         */
        linestyle: LineStyle;
        /**
         * Frequency Type
         */
        frequencytype: FrequencyType;
        /**
         * Color used to highlight bins
         */
        highlightcolor: string;
        /**
         * JSON for accumulation curve.
         */
        accumulation: {
            /**
             * Visibility of accumulation curve.
             */
            visible: boolean;
            /**
             * JSON for accumulation curve.
             */
            linestyle: LineStyle.OptionsOut;
        };
        /**
         * JSON which defines X-data.
         */
        x: AxisDataOptionsOut;
        /**
         * JSON which defines Y-data.
         */
        y: AxisDataOptionsOut;
        tools: AnnotatedWidget.ToolsOptionsOut;
    };
    /**
     * properties
     */
    type OptionsOut = Omit<AnnotatedWidget.OptionsOut, 'linestyle'> & DataOptionsOut;
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
    /**
     * JSON which defines header area
     */
    type HeaderOptionsOut = {
        /**
         * JSON which defines main title.
         */
        title?: Text.OptionsOut;
        /**
         * height of header
         */
        annotationsize?: number | string;
    };
    /**
     * JSON which defines data.
     */
    type AxisDataOptions = {
        /**
         * JSON which defines label.
         */
        label?: Text.Options;
        /**
         * width or height of annotation
         */
        annotationsize?: number | string;
        /**
         * specifies which side should have axes. By default 'both' means from left and right
         */
        annotationside?: string;
        /**
         * Minimum Value to display data. If never set, will be min of [options.data]
         */
        min?: number;
        /**
         * Maximum Value to display data. If never set, will be max of [options.data]
         */
        max?: number;
        /**
         * are X min/max fixed (false) or given by datasource (true). DataSource has to exist
         */
        autominmax?: boolean;
        /**
         * Calculate smart limits
         */
        neatlimits?: boolean;
        /**
         * Center the smart limits on zero
         */
        neatlimitscenteredonzero?: boolean;
        /**
         * Is the Axis reversed.
         */
        reversed?: boolean;
        /**
         * JSON which defines ticks options of the axis.
         */
        axisticks?: HistogramTickGenerator.Options;
        /**
         * JSON which defines horizontal ticks options of the grid.
         */
        gridticks?: HistogramTickGenerator.Options;
        /**
         * a custom axis tick generator
         */
        axistickgenerator?: TickGenerator;
        /**
         * a custom grid tick generator
         */
        gridtickgenerator?: TickGenerator;
        /**
         * precise limits
         */
        preciselimits?: boolean;
    };
    /**
     * how to extract data, null by default
     */
    type AxisDataOptionsOut = EmptyRecord | {
        /**
         * JSON which defines label.
         */
        label: Text.OptionsOut;
        /**
         * width or height of annotation
         */
        annotationsize: number | string;
        /**
         * Minimum Value to display data. If never set, will be min of [options.data]
         */
        min: number;
        /**
         * Maximum Value to display data. If never set, will be max of [options.data]
         */
        max: number;
        /**
         * are X min/max fixed (false) or given by datasource (true). DataSource has to exist
         */
        autominmax?: boolean;
        /**
         * Calculate smart limits
         */
        neatlimits?: boolean;
        /**
         * Is the Axis reversed.
         */
        reversed: boolean;
        /**
         * JSON which defines ticks options of the axis.
         */
        axisticks: HistogramTickGenerator.OptionsOut | AdaptiveTickGenerator.OptionsOut;
        /**
         * JSON which defines horizontal ticks options of the grid.
         */
        gridticks: HistogramTickGenerator.OptionsOut | AdaptiveTickGenerator.OptionsOut;
        /**
         * precise limits
         */
        preciselimits: boolean;
    };
    type EventMap = AnnotatedWidget.EventMap & {
        [Events.DataUpdated]: {
            minValue: number;
            maxValue: number;
            count: number;
            binCount: number;
        };
    };
}
export {};
