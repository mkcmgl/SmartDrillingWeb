import { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Range } from '@int/geotoolkit/util/Range';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
/**
 * TraceHeaderChartWidget is essentially a base widget specialized for seismic headers data display.
 */
export declare class TraceHeaderChartWidget extends AnnotatedWidget {
    constructor(options?: TraceHeaderChartWidget.Options | SeismicPipeline);
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory leaks
     */
    dispose(): void;
    /**
     * Returns pipeline
     */
    getPipeline(): SeismicPipeline;
    /**
     * set pipeline
     * @param pipeline Seismic Pipeline
     * @returns this
     */
    setPipeline(pipeline: SeismicPipeline | null): this;
    /**
     * Sets existing chart options
     * @param headerName header name
     * @param options chart options
     * @returns options
     */
    setChartOptions(headerName: string, options: TraceHeaderChartWidget.HeaderOptions): TraceHeaderChartWidget.HeaderOptions;
    /**
     * Returns widget or specific chart options
     */
    getOptions(headerName?: string | number): TraceHeaderChartWidget.HeaderOptions | {
        title: TraceHeaderChartWidget.TitleOptions;
        annotationssizes: Required<AnnotatedWidget.AnnotationSize>;
        charts: TraceHeaderChartWidget.ChartOptions[];
    };
    /**
     * Add header chart
     * @param headerName trace header name
     * @param [options] chart options
     * @returns this
     */
    addHeader(headerName: string, options?: TraceHeaderChartWidget.HeaderOptions): this;
    /**
     * Remove header
     * @param headerName trace header name
     * @returns this
     */
    removeHeader(headerName: string): this;
    /**
     * Set chart title options
     * @param title chart title or title options
     * @returns this
     * @example
     * chart.setTitleOptions('Auxiliary Chart')
     * @example
     * chart.setTitleOptions({'size': 20, 'textstyle': 'red'});
     * @example
     * chart.setTitleOptions({
     *      'textstyle': {
     *          'font': '16px Roboto',
     *          'color': 'gray'
     *      },
     *      'text': 'Auxiliary Chart'
     * });
     */
    setTitleOptions(title: TraceHeaderChartWidget.TitleOptions | string): this;
    /**
     * Returns chart title options
     * @returns title options
     */
    getTitleOptions(): TraceHeaderChartWidget.TitleOptions;
    /**
     * Returns the traceheader properties
     * @returns props
     */
    getProperties(): TraceHeaderChartWidget.OptionsOut;
    /**
     * Sets the trackheader properties
     * @param [props] props
     * @returns this
     * @example
     * chart.setProperties({
     *      'title': {
     *          'text': 'Auxiliary Chart',
     *          'textstyle': {
     *              'font': '16px Roboto',
     *              'color': 'gray'
     *          },
     *          'size': 20
     *      }
     * });
     * @example
     * chart.setProperties({'title': 'Auxiliary Chart', 'charts': ['CDPY', 'CDPX']});
     * @example
     * // following call will synchronize charts with array, means that all other charts will be deleted
     * chart.setProperties({
     *      'charts': [{
     *          'name': 'CDPY',
     *          'linestyle': 'blue'
     *      },{
     *          'name': 'CDPX',
     *          'linestyle': 'red'
     *      }]
     * });
     */
    setProperties(props?: TraceHeaderChartWidget.Options): this;
}
export declare namespace TraceHeaderChartWidget {
    /**
     * options
     */
    type Options = AnnotatedWidget.Options & {
        /**
         * seismic pipeline
         */
        pipeline?: SeismicPipeline;
        /**
         * array of char options
         */
        charts?: (ChartOptions | string)[];
        /**
         * chart title or title options
         */
        title?: string | TitleOptions;
    };
    /**
     * Chart options
     */
    type ChartOptions = HeaderOptions & {
        name?: string;
    };
    /**
     * chart options
     */
    type HeaderOptions = {
        /**
         * Visible header
         */
        visible?: boolean;
        /**
         * automatic limits calculation
         */
        autolimits?: boolean;
        /**
         * neat limits
         */
        neatlimits?: boolean;
        /**
         * header data range
         */
        range?: Range;
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
        /**
         * chart options
         */
        chart?: {
            /**
             * chart line style
             */
            linestyle?: LineStyle.Type;
        };
        /**
         * axis options
         */
        axis?: {
            /**
             * axis line style
             */
            linestyle?: LineStyle.Type;
            /**
             * axis title
             */
            title?: string | {
                /**
                 * axis title
                 */
                text?: string;
                /**
                 * axis title visibility
                 */
                visible?: boolean;
            };
        };
    };
    /**
     * chart title or title options
     */
    type TitleOptions = {
        /**
         * title text
         */
        text?: string;
        /**
         * title text style
         */
        textstyle?: TextStyle.Type;
        /**
         * title size
         */
        size?: number | string;
    };
    /**
     * props
     */
    type OptionsOut = AnnotatedWidget.OptionsOut & {
        /**
         * array of char options
         */
        charts?: ChartOptions[];
        /**
         * chart title or title options
         */
        title?: TitleOptions;
    };
}
