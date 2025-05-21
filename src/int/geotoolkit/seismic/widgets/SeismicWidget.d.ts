import { Events as CrosshairEvents } from '@int/geotoolkit/controls/tools/CrossHair';
import { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import { SeismicViewWidget } from '@int/geotoolkit/seismic/widgets/SeismicViewWidget';
import { TraceHeaderChartWidget } from '@int/geotoolkit/seismic/widgets/TraceHeaderChartWidget';
import { TraceHeaderViewWidget } from '@int/geotoolkit/seismic/widgets/TraceHeaderViewWidget';
import { NumberFormat } from '@int/geotoolkit/util/NumberFormat';
import { CompositeDocumentElement } from '@int/geotoolkit/scene/exports/CompositeDocumentElement';
import type { FieldDesc } from '@int/geotoolkit/seismic/data/FieldDesc';
import type { IWritable } from '@int/geotoolkit/util/stream/IWritable';
import type { TableView } from '@int/geotoolkit/widgets/TableView';
import type { PickSampleCallbackData } from '@int/geotoolkit/seismic/data/snap/PickSampleCallback';
/**
 * Seismic widget events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when header view visibility changed
     */
    HeaderViewVisibilityChanged = "HeaderViewVisibilityChanged"
}
/**
 * SeismicWidget is essentially a base widget specialized for seismic data display. It provides API to help viewing, interpreting and processing seismic data <br>
 * It has a center part to display seismic data and a set of annotations on each side to display axes, titles, or colorbar.  <br>
 * It supports default tools like cross hair, zooming, panning, cursor tracking, scrolling etc. It also has an option to display trace number headers table.<br>
 * Other options like horizontal and vertical scrollbars can be set here. To modify the styles of the x and y axis can be done using setProperties(). see example in the method.
 * @example
 * // Following code shows how to create a seismic widget using a pipeline. The {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline~SeismicPipeline} is created earlier using a seismic reader.
 * const widget = new SeismicWidget(pipeline)
 *       .setLayoutStyle({left: 0, top: 0, bottom: 0, right: 0});
 * widget.setScaleOptions({
 *       'tracescale': 3,
 *       'samplescale': 30,
 *       'deviceunit': 'in',
 *       'sampleunit': 's'
 *   });
 * @example
 * // Provide own information for statusbar
 * import {AutoNumberFormat} from '@int/geotoolkit/util/AutoNumberFormat';
 * widget.setOptions({
 *       'statusbar': {
 *           'sections': {
 *               'info': (widget, x, y, sample) => {
 *                   const autoFormat = new AutoNumberFormat();
 *                   let depthValue = Math.round(y * 100) / 100.0, sampleValue = '', traceNumber = '';
 *                   if (sample) {
 *                       traceNumber = sample['traceNumber'] + 1;
 *                       sampleValue = Math.round(sample['sampleValue'] * 10000) / 10000;
 *                       depthValue = Math.round(sample['location']['y'] * 100) / 100.0;
 *                   }
 *                   return {
 *                       'samples': ' Depth: ' + autoFormat.format(depthValue),
 *                       'value': ' Values: ' + sampleValue,
 *                       'traces': ' Trace Number: ' + traceNumber
 *                   };
 *               }
 *           }
 *       }
 *   });
 */
export declare class SeismicWidget extends SeismicViewWidget {
    protected _options: SeismicWidget.OptionsBase;
    /**
     * Create seismic widget
     * @param [options] options or seismic pipeline
     */
    constructor(options?: SeismicWidget.Options | SeismicPipeline);
    on<E extends keyof SeismicWidget.EventMap>(type: E, callback: (eventType: E, sender: this, args: SeismicWidget.EventMap[E]) => void): this;
    off<E extends keyof SeismicWidget.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: SeismicWidget.EventMap[E]) => void): this;
    notify<E extends keyof SeismicWidget.EventMap>(type: E, source: SeismicWidget, args?: SeismicWidget.EventMap[E]): this;
    /**
     * Set widget options
     * @param options options see {@link import("geotoolkit/seismic/widgets/SeismicWidget").SeismicWidget.setProperties}
     * @returns this
     */
    setOptions(options: SeismicWidget.OptionsBase): this;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] seismic view options
     * @returns this
     * @example
     * // To modify the y axis properties.
     * widget.setProperties({
     *       'axes': {
     *           'samples': {
     *               'ticks': {
     *                   'labelstyles': {
     *                       'major': {
     *                           'color': 'blue'
     *                       }
     *                   }
     *               }
     *           }
     *       }
     *   }
     * // To modify the x axis (trace axis):
     * var axis = seismicwidget.getTraceHeaderAxis('TraceNumber')['axis'];
     * // setting label color
     * axis.getTickGenerator().getLabelStyle(grade).setColor(color);
     * // setting font
     * axis.getTickGenerator().getLabelStyle(grade).setFont(font)
     */
    setProperties(properties?: SeismicWidget.Options): this;
    /**
     * Set subset of header fields to be displayed in table widget
     *
     * @param headers array of header names, string contains header names divided by '|', or '*'
     */
    setTableHeaders(headers: FieldDesc[] | string[] | '*' | {
        title: string;
    }[]): this;
    /**
     * Returns preferred headers array(or string) that are displaying in table widget
     *
     * @returns can be '*' or array of objects with 'identifier', 'name' and 'title' property
     */
    getTableHeaders(): '*' | TraceHeaderViewWidget.Header[];
    /**
     * Add header chart
     * @param headerName trace header name
     * @param [options] chart options
     * @returns this
     */
    addHeaderChart(headerName: string, options?: TraceHeaderChartWidget.HeaderOptions): this;
    /**
     * Remove header
     * @param headerName trace header name
     * @returns this
     */
    removeHeaderChart(headerName: string): this;
    /**
     * Returns current widget options
     * @returns options see {@link import("geotoolkit/seismic/widgets/SeismicWidget").SeismicWidget.getProperties}
     */
    getOptions(): SeismicWidget.OptionsBaseOut;
    /**
     * Returns properties
     * @returns seismic view options
     */
    getProperties(): SeismicWidget.OptionsOut;
    /**
     *  This method updates the layout of the seismic widget and all its child components with new/modified settings.
     * @returns this
     */
    updateLayout(): this;
    /**
     * Exports the widget content as a PDF file, user has option to select the scale of track in pdf.
     * @param [options] option to specify paper parameters and header and footer
     * @returns promise with output stream
     */
    exportToPdf(options?: SeismicWidget.ExportToPdfOptions): Promise<IWritable>;
    beginExport(options?: SeismicWidget.ExportToPdfOptions): this;
    endExport(options?: SeismicWidget.ExportToPdfOptions): this;
    getExportElement(options?: SeismicWidget.ExportToPdfOptions): CompositeDocumentElement;
    /**
     * Set table trace filter
     * @param filter filter
     * @returns this
     */
    setTableTraceFilter(filter: TraceHeaderViewWidget.FilterCallback | null): this;
    /**
     * Get table trace filter
     * @returns filter
     */
    getTableTraceFilter(): TraceHeaderViewWidget.FilterCallback | null;
}
export declare namespace SeismicWidget {
    /**
     * options or seismic pipeline
     */
    type Options = SeismicViewWidget.Options & OptionsBase;
    type OptionsBase = SeismicViewWidget.OptionsBase & {
        /**
         * auxiliarychart options
         */
        auxiliarychart?: TraceHeaderChartWidget.Options & {
            /**
             * defines size of the auxiliarychart
             */
            size?: number;
        };
        /**
         * headers table
         */
        table?: HeadersViewOptions;
        /**
         * defines status bar settings
         */
        statusbar?: StatusBar;
        /**
         * event for picking
         */
        pickingevent?: CrosshairEvents;
    };
    type OptionsBaseOut = SeismicViewWidget.OptionsBaseOut & {
        /**
         * auxiliarychart options
         */
        auxiliarychart?: TraceHeaderChartWidget.OptionsOut & {
            /**
             * defines size of the auxiliarychart
             */
            size?: number;
        };
        /**
         * defines table properties
         */
        table?: TraceHeaderViewWidget.OptionsBase & {
            /**
             * defines if plot displays headers table, true | false | 'none' | 'visible' | 'hidden'
             */
            visible: boolean | 'none' | 'visible' | 'hidden';
            name: string;
            /**
             * defines if header view default behaviour is enabled or not
             */
            enabled?: boolean;
            /**
             * defines size of headers table
             */
            size?: number;
        };
        /**
         * specify status bar properties
         */
        statusbar?: StatusBar;
        /**
         * event for picking
         */
        pickingevent?: CrosshairEvents;
    };
    /**
     * seismic view options
     */
    type OptionsOut = SeismicViewWidget.OptionsOut & OptionsBaseOut;
    type HeadersViewOptions = TraceHeaderViewWidget.OptionsBase & {
        /**
         * defines if plot displays headers table, true | false | 'none' | 'visible' | 'hidden'
         */
        visible?: boolean | 'none' | 'hidden' | 'visible';
        /**
         * defines if header view default behaviour is enabled or not
         */
        enabled?: boolean;
        /**
         * defines size of headers table
         */
        size?: number;
        options?: TableView.Options;
    };
    type StatusBarInfo = {
        /**
         * text to display in samples section
         */
        samples: string;
        /**
         * text io display in traces section
         */
        traces?: string;
        /**
         * text to display in value section
         */
        value: string;
    };
    /**
     * option to specify paper parameters and header and footer
     */
    type ExportToPdfOptions = SeismicViewWidget.ExportToPdfOptions & {
        /**
         * hide auxiliary chart if chart is visible
         */
        hideauxiliarychart?: boolean;
    };
    type StatusBar = {
        /**
         * specify status bar visibility
         */
        visible?: boolean;
        /**
         * defines status auto size mode
         */
        autosize?: boolean;
        /**
         * specify status bar cssclass name
         */
        cssclass?: string;
        /**
         * defines status auto size settings
         */
        sizes?: {
            /**
             * defines medium size
             */
            medium?: number;
            /**
             * defines small size
             */
            small?: number;
        };
        /**
         * defines section setting
         */
        sections?: {
            /**
             * defines custom section formatter
             */
            info?: InfoCallback;
            /**
             * defines first section
             */
            samples?: {
                /**
                 * defines title of the section
                 */
                label?: string;
                /**
                 * defines format of the section
                 */
                format?: string | NumberFormat;
            };
            /**
             * defines second section
             */
            traces?: {
                /**
                 * defines title of the section
                 */
                label?: string;
            };
            /**
             * defines third section
             */
            samplevalue?: {
                /**
                 * defines title of the section
                 */
                label?: string;
                /**
                 * defines format of the section
                 */
                format?: string | NumberFormat;
            };
        };
    };
    type InfoCallback = (x: SeismicWidget, n: number, m: number, y: PickSampleCallbackData) => StatusBarInfo;
    type EventMap = SeismicViewWidget.EventMap & {
        [Events.HeaderViewVisibilityChanged]: void | boolean;
    };
}
