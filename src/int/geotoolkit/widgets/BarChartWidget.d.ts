import { BarChart } from '@int/geotoolkit/controls/shapes/BarChart';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { Point } from '@int/geotoolkit/util/Point';
import { AnnotatedNode } from '@int/geotoolkit/scene/AnnotatedNode';
import { Layer } from '@int/geotoolkit/scene/Layer';
import { Rect } from '@int/geotoolkit/util/Rect';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import { NumericTickGenerator } from '@int/geotoolkit/axis/NumericTickGenerator';
import type { SeriesElementInfo } from '@int/geotoolkit/controls/data/SeriesElementInfo';
import type { AdaptiveTickGenerator } from '@int/geotoolkit/axis/AdaptiveTickGenerator';
/**
 * The barchart widget is an annotated widget that is specialized for bar charts representation
 * <p>
 * A bar chart is a chart that uses either horizontal or vertical bars to show comparisons among categories.
 * One axis of the chart shows the specific categories being compared, and the other axis represents a discrete value.
 * It uses {@link @int/geotoolkit/controls/shapes/BarChart~BarChart} internally
 * </p>
 * <p>
 * Barchart widget inherits from AnnotatedWidget, so it takes most of its functionality including all its tools.
 * The main way to configure and customize the widget is to use the different setData() and setOptions() functions
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link @int/geotoolkit/controls/shapes/BarChart~BarChart}'s "setData" for the internal shape.</li>
 * <li> setOptions() will pass 'shape' on to {@link @int/geotoolkit/controls/shapes/BarChart~BarChart}'s "setOptions" for the internal shape options. Here we can set the two grid tickgenerators, reference line and take the AnnotatedWidgets values for annotations.
 * From the Shape, the Widget adds ReferenceLine, Axes, and Grids to the Barchart shape. </li>
 * </ul>
 * </p>
 *
 * @example
 * // set the BarChart shape options
 * // Refer to {@link @int/geotoolkit/controls/shapes/BarChart~BarChart}'s setProperties for all the properties that can be set.
 * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
 * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
 * import {DataMode, BarMode} from '@int/geotoolkit/controls/shapes/BarChart';
 * import {BarChartWidget} from '@int/geotoolkit/widgets/BarChartWidget';
 * const options = {
 *   'shape': {
 *      //Setting line style and fill style for each bar item, keep in same order to data set
 *       'barstyles': [
 *          {
 *              'linestyles': new LineStyle('green')),
 *              'fillstyles': new FillStyle('green'))
 *          },
 *          {
 *              'linestyles': new LineStyle('gray')),
 *              'fillstyles': new FillStyle('gray'))
 *          }
 *       ],
 *       //Choosing bar mode
 *       'barmode': BarMode.Default,
 *     }
 * };
 *
 * // Create the data
 * const data = {
 *   'mode': DataMode.Associative,
 *   'datasets': [
 *      { 'values': [15, 30, 6, 54] },
 *      { 'values': [8, 17, 10, 35] }
 *    ],
 *   'labels': ['Wylie', 'Potosi', 'Buffalo Gap', 'Clyde']
 * };
 *
 * // Finally, create the BarChart widget using the options and data.
 * const widget = new BarChartWidget(options, data);
 */
export declare class BarChartWidget extends AnnotatedWidget {
    /**
     * @param [options] widget options set
     * @param [data] data data (see "setData" API for detailed description)
     */
    constructor(options?: BarChartWidget.Options, data?: BarChartWidget.Data);
    /**
     * Gets data layer
     */
    getDataLayer(): Layer;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect | Rect.Options): this;
    /**
     * set format handler for labels <p>
     * acceptable parameters for handler function:<br>
     * text `{string}`: current text that already fixed by value precision<br>
     * groupId `{number}`: the index of current data series<br>
     * itemId `{number}`: the index of the data in the current data series<br>
     * value `{number}`: raw value in data series
     * @param handler format handler
     * @example
     * // The example simply show how to control the text content by value
     * // For data series [[1,2,3][2,3,4]], the following example return '3+' when value is more than 2
     * widget.setFormatLabelHandler(
     *      (text, groupId, itemId, value) => {
     *          if(value > 2)
     *              return '3+';
     *          else return value;
     *      });
     * @returns this
     */
    setFormatLabelHandler(handler: BarChart.FormatLabelHandler): this;
    /**
     * Sets bar chart's data
     * @param [data] data object
     * @returns this
     */
    setData(data?: BarChartWidget.Data): this;
    /**
     * @returns data
     */
    getData(): any;
    /**
     * Gets value of sample
     * @param series series id
     * @param sample sample id
     * @returns a value of sample for the specified series
     */
    getValueAt(series: number, sample: number): number | number[];
    /**
     * Updates the widget's configuration with the passed in configuration
     *
     * @param [options] widget options set
     */
    setOptions(options?: BarChartWidget.Options): this;
    /**
     * Highlight specified bars
     *
     * @param bars array of {@link @int/geotoolkit/controls/data/SeriesElementInfo~SeriesElementInfo} bars to highlight
     * @param [append] append/replace flag
     * @returns this
     */
    highlightBars(bars: SeriesElementInfo[], append?: boolean): this;
    /**
     * Select elements at specified canvas coordinates
     *
     * @param x x-coordinate OR `{x,y}`-coordinates
     * @param [y] y-coordinate
     * @param [highlight] highlight selected elements
     * @returns array of {@link @int/geotoolkit/controls/data/SeriesElementInfo~SeriesElementInfo} selected bars
     */
    selectBarsAt(x: number | Point, y?: number, highlight?: boolean): SeriesElementInfo[];
    /**
     * Set data series visibility
     * @param series Visibility of series
     * @returns this
     */
    setDataSeriesVisible(series: {
        visible?: boolean;
    }[]): this;
    /**
     * Get data series visibility
     * @returns series Visibility of series
     */
    getDataSeriesVisible(): {
        visible: boolean;
    }[];
    /**
     * Gets all the properties pertaining to this object
     * @returns widget properties set
     */
    getProperties(): BarChartWidget.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] widget properties set
     * @returns this
     */
    setProperties(properties?: BarChartWidget.Options): this;
}
export declare namespace BarChartWidget {
    /**
     * widget options set
     */
    export type Options = AnnotatedWidget.Options & {
        axistitles?: {
            north?: string;
            west?: string;
            south?: string;
            east?: string;
        };
        annotations?: AnnotatedNode.AnnotationOptions;
        /**
         * BarChart shape properties see {@link import("geotoolkit/controls/shapes/BarChart").BarChart.setProperties}
         */
        shape?: BarChart.Options;
        /**
         * reference line options set
         */
        referenceline?: ReferenceLine;
        /**
         * enables bar chart mirroring
         */
        mirror?: boolean;
        /**
         * grid options set
         */
        grid?: {
            /**
             * JSON with tick options for the gridvalue tick generator. See {@link import("geotoolkit/axis/TickGenerator").TickGenerator.setOptions}
             */
            values?: NumericTickGenerator | AdaptiveTickGenerator.Options;
            /**
             * JSON with tick options for the gridgroup tick generator. See {@link import("geotoolkit/axis/TickGenerator").TickGenerator.setOptions}
             */
            groups?: TickGenerator | AdaptiveTickGenerator.Options;
        };
        /**
         * enable automatic calculation of limits for value axis and gridlines
         */
        neatlimits?: boolean;
        /**
         * option for neat limits calculates only step and hide edge ticks. It is applied only if neatlimits is set
         */
        preciselimits?: boolean;
        /**
         * minimum span for neat limits in pixel between ticks
         */
        minspan?: number;
    };
    /**
     * data object
     */
    export type Data = BarChart.Data & {
        /**
         * array of group labels
         */
        labels?: string[];
    };
    export type ReferenceLine = {
        /**
         * visibility flag
         */
        visible?: boolean;
        /**
         * value to display reference line at
         */
        value?: number;
        /**
         * reference line style
         */
        linestyle?: LineStyle;
    };
    /**
     * widget properties set
     */
    export type OptionsOut = AnnotatedWidget.OptionsOut & {
        /**
         * BarChart shape properties see {@link import("geotoolkit/controls/shapes/BarChart").BarChart.setProperties}
         */
        shape?: BarChart.OptionsOut;
        /**
         * reference line properties set
         */
        referenceline?: ReferenceLine;
        /**
         * enables bar chart mirroring
         */
        mirror?: boolean;
        /**
         * grid properties set
         */
        grid?: GridOptions;
        /**
         * enable automatic calculation of limits for value axis and gridlines
         */
        neatlimits?: boolean;
        /**
         * option for neat limits calculates only step and hide edge ticks. It is applied only if neatlimits is set
         */
        preciselimits?: boolean;
        /**
         * minimum span for neat limits in pixel between ticks
         */
        minspan?: number;
    };
    type GridOptions = {
        /**
         * JSON with tick options for the gridvalue tick generator. See {@link import("geotoolkit/axis/TickGenerator").TickGenerator.setOptions}
         */
        values?: NumericTickGenerator | AdaptiveTickGenerator.Options;
        /**
         * JSON with tick options for the gridgroup tick generator. See {@link import("geotoolkit/axis/TickGenerator").TickGenerator.setOptions}
         */
        groups?: TickGenerator | AdaptiveTickGenerator.Options;
    };
    export {};
}
