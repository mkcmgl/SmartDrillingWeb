import { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import type { Merge } from '@int/geotoolkit/base';
import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import { TableView } from '@int/geotoolkit/widgets/TableView';
import type { FieldDesc } from '@int/geotoolkit/seismic/data/FieldDesc';
/**
 * TraceHeaderViewWidget is essentially a base widget specialized for seismic headers data display.
 * @example
 * // following code shows how to create a seismic headers view widget using a pipeline. The {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline~SeismicPipeline} is created earlier using a seismic reader.
 * import {TraceHeaderViewWidget} from '@int/geotoolkit/seismic/widgets/TraceHeaderViewWidget';
 * const widget = new TraceHeaderViewWidget({
 *      'pipeline':pipeline,
 *      'headers': [
 *          'INLINE',
 *          {
 *              'name': 'XLINE',
 *              'title': 'XLINE'// or change title of the particular header
 *          }]
 *  });
 */
export declare class TraceHeaderViewWidget extends BaseWidget {
    /**
     * Create widget
     * @param [options] additional options or pipeline
     */
    constructor(options?: TraceHeaderViewWidget.Options | SeismicPipeline);
    protected initializeTools(): this;
    /**
     * Returns pipeline
     * @returns pipeline
     */
    getPipeline(): SeismicPipeline;
    /**
     * Set pipeline
     * @param pipeline Seismic Pipeline
     * @returns this
     */
    setPipeline(pipeline: SeismicPipeline): this;
    /**
     * Returns preferred headers array(or string) that are displaying in table widget
     *
     * @returns can be '*' or array of objects with 'identifier', 'name' and 'title' property
     */
    getTableHeaders(): TraceHeaderViewWidget.Header[] | '*';
    /**
     * Set subset of header fields to be displayed in table widget
     *
     * @param headers array of header names, string contains header names divided by '|', or '*'
     */
    setTableHeaders(headers: TraceHeaderViewWidget.HeadersOptions): this;
    /**
     * Returns current widget options
     */
    getOptions(): TraceHeaderViewWidget.OptionsBaseOut;
    /**
     * Set widget options
     * @param options headers view options
     * @returns this
     */
    setOptions(options: TraceHeaderViewWidget.OptionsBase): this;
    /**
     * Sets properties
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: TraceHeaderViewWidget.Options): this;
    /**
     * Returns properties
     * @returns properties
     */
    getProperties(): TraceHeaderViewWidget.OptionsOut;
    /**
     * Select trace index for highlighting
     *
     * @param traceIndex trace index for highlighting
     * @returns this
     */
    highlightTraceIndex(traceIndex: number): this;
    /**
     * Sets trace filter
     * @param filter filter
     * @returns this
     */
    setTraceFilter(filter: TraceHeaderViewWidget.FilterCallback | null): this;
    /**
     * Gets trace filter
     * @returns filter
     */
    getTraceFilter(): TraceHeaderViewWidget.FilterCallback | null;
}
export declare namespace TraceHeaderViewWidget {
    /**
     * options
     */
    type Options = Merge<BaseWidget.Options, OptionsBase & {
        /**
         * seismic pipeline
         */
        pipeline?: SeismicPipeline;
        /**
         * table options
         */
        options?: TableView.Options;
    }>;
    type Header = {
        identifier?: string | number;
        name?: string;
        title: string;
    };
    type HeadersOptions = (FieldDesc | string | {
        title: string;
    })[] | '*';
    /**
     * headers view options
     */
    type OptionsBase = {
        /**
         * defines cssclass of headers table
         */
        cssclass?: string;
        /**
         * defines index column options
         */
        index?: {
            /**
             * defines index column size in pixels, also accepts 'auto' that means that size depends on max header title size
             */
            size?: number | 'auto';
        };
        /**
         * headers, array of header names, string contains header names divided by '|', or '*'
         */
        headers?: (FieldDesc | string | Header)[] | '*';
        /**
         * filter
         */
        filter?: FilterCallback | null;
    };
    type OptionsBaseOut = OptionsBase & {
        name: string;
    };
    /**
     * properties
     */
    type OptionsOut = Merge<BaseWidget.OptionsOut, OptionsBase & {
        /**
         * seismic pipeline
         */
        pipeline?: SeismicPipeline;
    }>;
    /**
     * Filter for TraceHeaderViewWidget.
     */
    type FilterCallback = (headerName: string, traceNumber: number, value: number) => boolean;
}
