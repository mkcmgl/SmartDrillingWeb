/**
 * @module geotoolkit/seismic/widgets/SeismicViewWidget
 */
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import { Rect } from '@int/geotoolkit/util/Rect';
import { SeismicPipeline } from '@int/geotoolkit/seismic/pipeline/SeismicPipeline';
import { Layer } from '@int/geotoolkit/scene/Layer';
import { Group } from '@int/geotoolkit/scene/Group';
import { SeismicImage } from '@int/geotoolkit/seismic/image/SeismicImage';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { Axis } from '@int/geotoolkit/axis/Axis';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import { ColorBar } from '@int/geotoolkit/controls/shapes/ColorBar';
import { Direction as VerticalBoxLayoutDirection } from '@int/geotoolkit/layout/VerticalBoxLayout';
import { Alignment } from '@int/geotoolkit/layout/BoxLayout';
import { HorizontalScroll } from '@int/geotoolkit/controls/tools/scroll/HorizontalScroll';
import { VerticalScroll } from '@int/geotoolkit/controls/tools/scroll/VerticalScroll';
import { Events as SceneEvents } from '@int/geotoolkit/scene/Node';
import { IExportable } from '@int/geotoolkit/scene/exports/IExportable';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import { FloatingColorBarTool } from '@int/geotoolkit/widgets/tools/FloatingColorBarTool';
import { CrossHair } from '@int/geotoolkit/controls/tools/CrossHair';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Comparator } from '@int/geotoolkit/seismic/widgets/tools/Comparator';
import { Selection } from '@int/geotoolkit/controls/tools/Selection';
import { Panning } from '@int/geotoolkit/controls/tools/Panning';
import { RubberBand } from '@int/geotoolkit/controls/tools/RubberBand';
import { HorizonPicker } from '@int/geotoolkit/seismic/widgets/tools/HorizonPicker';
import { FieldDesc } from '@int/geotoolkit/seismic/data/FieldDesc';
import { CompositeDocumentElement } from '@int/geotoolkit/scene/exports/CompositeDocumentElement';
import { ImageCompression } from '@int/geotoolkit/pdf/ImageCompression';
import { SpeedCompression } from '@int/geotoolkit/pdf/SpeedCompression';
import { PdfExport } from '@int/geotoolkit/pdf/PdfExport';
import { IWritable } from '@int/geotoolkit/util/stream/IWritable';
import { Zoom } from '@int/geotoolkit/controls/tools/Zoom';
import type { AbstractCompositeTool } from '@int/geotoolkit/controls/tools/AbstractCompositeTool';
import type { HeaderComponent } from '@int/geotoolkit/scene/exports/HeaderComponent';
import type { FooterComponent } from '@int/geotoolkit/scene/exports/FooterComponent';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { Registry as DefaultRegistry } from '@int/geotoolkit/persistence/Registry';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { AdaptiveTickGenerator } from '@int/geotoolkit/axis/AdaptiveTickGenerator';
import type { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import type { HVBaseScroll } from '@int/geotoolkit/controls/tools/scroll/HVBaseScroll';
import type { EmbededFont } from '@int/geotoolkit/pdf/EmbededFont';
import type { TiledShape } from '@int/geotoolkit/scene/shapes/tiledshape/TiledShape';
/**
 * Enum of seismic widget manipulator types
 * @enum
 * @readonly
 */
export declare enum ManipulatorType {
    /**
     * Panning tool
     */
    Panning = "Panning",
    /**
     * RubberBand tool
     */
    RubberBand = "RubberBand",
    /**
     * Magnifier tool
     */
    Magnifier = "Magnifier",
    /**
     * Picking tool
     */
    Pick = "Pick"
}
/**
 * Events triggered by the SeismicViewWidget.
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * This event occurs when the a new pipeline is set.
     */
    PipelineSet = "PipelineSet"
}
/**
 * SeismicViewWidget is essentially a base widget specialized for seismic data display. Internally it uses classes like {@link @int/geotoolkit/seismic/image/SeismicImage~SeismicImage} and {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline~SeismicPipeline} from Seismic toolkit.<br>
 * The SeismicViewWidget handles the synchronization of the model limits and display units while zooming and scrolling. The horizontal and vertical scroll bars will be displayed by default and its properties can be easily modified. <br>
 * The scaling functionality from seismic image is utilized by calling get/setScaleOptions().<br>
 * The widget utilizes the {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline~SeismicPipeline} to manipulate the properties like Interpolation, Normalization etc.<br>
 * It can display a colorbar and also change its location as needed. The widget has default tools like Crosshair but it also supports tools like: <br>
 * <ul>
 * <li> panning </li>
 * <li> selection </li>
 * <li> rubberzoom </li>
 * <li> pinchzoom </li>
 * </ul>
 * @example
 * // following code shows how to create a seismic view widget using a pipeline. The {@link @int/geotoolkit/seismic/pipeline/SeismicPipeline~SeismicPipeline} is created earlier using a seismic reader.
 * import {SeismicViewWidget} from '@int/geotoolkit/seismic/widgets/SeismicViewWidget';
 * const widget = new SeismicViewWidget(
 *  {
 *           'pipeline': pipeline,
 *           'layouttype': 'inside'
 *  })
 *  .setScaleOptions({
 *           'tracescale': 10,
 *           'samplescale': 50,
 *           'deviceunit': 'in',
 *           'sampleunit': 'ms'
 *       });
 * @example
 * // change default scrollbars
 * const widget = new SeismicViewWidget({
 *   'pipeline': pipeline,
 *   'scroll': {
 *       'horizontal': {
 *           'visible': true,
 *           'cssclass': 'horizontal-scroll',
 *           'type': 'geotoolkit.controls.tools.scroll.HorizontalScroll'
 *       },
 *       'vertical': {
 *           'visible': true,
 *           'cssclass': 'vertical-scroll',
 *           'type': 'geotoolkit.controls.tools.scroll.VerticalScroll'
 *       }
 *   }});
 * @example
 * //hide default axis ( headers)
 * widget.setTraceHeaderVisible('TraceNumber', false);
 *
 * // or
 * widget.setOptions({
 *   'axes': {
 *      'headers': {
 *           'fields': [
 *               {
 *                   'name': 'TraceNumber',
 *                   'title': 'Trace Number',
 *                   'visible': false
 *               }]
 *       }
 *   }
 * });
 * @example
 * // How to capture visible limits changed if user scrolls or scale content
 * import {Events as NodeEvents} from '@int/geotoolkit/scene/Node';
 * seismicWidget.on(NodeEvents.VisibleLimitsChanged, (event, sender, args) => {
 *  // args[‘visibleModelLimits’]
 *  // args[‘visibleDeviceLimits’]
 *  });
 */
export declare class SeismicViewWidget extends BaseWidget implements IExportable {
    /**
     * Creates widget
     * @param [options] options or seismic pipeline
     */
    constructor(options?: SeismicViewWidget.Options | SeismicPipeline);
    getToolByName<T extends keyof SeismicViewWidget.Tools>(toolName: T): SeismicViewWidget.Tools[T];
    on<E extends keyof SeismicViewWidget.EventMap>(type: E, callback: (eventType: E, sender: this, args: SeismicViewWidget.EventMap[E]) => void): this;
    off<E extends keyof SeismicViewWidget.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: SeismicViewWidget.EventMap[E]) => void): this;
    notify<E extends keyof SeismicViewWidget.EventMap>(type: E, source: SeismicViewWidget, args?: SeismicViewWidget.EventMap[E]): this;
    /**
     * Returns seismic trace orientation
     * @returns seismic trace orientation
     */
    getOrientation(): Orientation;
    /**
     * Set seismic trace orientation
     * @param orientation seismic orientation
     * @param [keepVisibleModelLimits] keep visible model limits
     * @returns this
     */
    setOrientation(orientation: Orientation, keepVisibleModelLimits?: boolean): this;
    protected onOrientationChanged(): this;
    getOptions(): SeismicViewWidget.OptionsBaseOut;
    /**
     * Set widget options
     * @param [options] options
     * @returns this
     */
    setOptions(options?: SeismicViewWidget.OptionsBase): this;
    /**
     * Set widget title
     * @param title title
     */
    setTitle(title: SeismicViewWidget.Title): this;
    /**
     * Gets widget title
     * @returns title
     */
    getTitle(): SeismicViewWidget.Title;
    /**
     * Set samples title
     * @param title title
     */
    setSamplesTitle(title: Axis.Title | string): this;
    /**
     * Set tools options
     * @param options tools options
     * @returns this
     */
    setToolsOptions(options: SeismicViewWidget.ToolsOptions): this;
    protected onColorBarLocationChanged(): void;
    /**
     * function call in the constructor to initialize tools in the widget
     * @param [options] tools options
     * @returns this
     */
    protected initializeTools(options?: SeismicViewWidget.ToolsOptions): this;
    /**
     * Returns scale options.
     *
     * @returns object
     */
    getScaleOptions(): SeismicImage.ScaleOptionsOut;
    /**
     * Sets scale options. If setScaleOption() is not set, the SeismicImage assumes a default .
     *
     * @param scaleOptions scale options
     * @param [saveViewPoint] if true, scale relative to the center visible limits
     * @returns this
     */
    setScaleOptions(scaleOptions: SeismicImage.ScaleOptions, saveViewPoint?: boolean): this;
    /**
     * Returns the array of available headers
     * @returns array of available headers
     */
    getTraceHeaders(): string[];
    /**
     * Returns header description, if header exists
     * @param headerName header name
     * @returns header description
     */
    getTraceHeader(headerName: string): FieldDesc | null;
    /**
     * Returns information about shapes like axis and labels associated with the header
     * @param headerField header field description, accept only 'TraceNumber' as a string
     * @returns helper, information about shapes associated with header
     */
    getTraceHeaderAxis(headerField: FieldDesc | 'TraceNumber'): SeismicViewWidget.TraceHeaderAxis | null;
    /**
     * Check if the trace header is visible
     * @param headerField field to check visibility, accept only 'TraceNumber' as a string
     */
    getTraceHeaderVisible(headerField: FieldDesc | 'TraceNumber'): boolean;
    /**
     * This method shows or hides the header
     * @param headerField field, accept only 'TraceNumber' as a string
     * @param visible header visibility
     * @returns helper, information about shapes associated with header
     */
    setTraceHeaderVisible(headerField: FieldDesc | 'TraceNumber', visible: boolean): SeismicViewWidget.TraceHeaderAxis;
    /**
     * This method updates the layout of the seismic widget and all its child components with new/modified settings.
     * @returns this
     */
    updateLayout(): this;
    /**
     * Returns the seismic model node
     */
    getModel(): Group;
    /**
     * Returns the group, which contains seismic images
     */
    getSeismicModel(): Group;
    /**
     * return seismic model limits
     */
    getSeismicModelLimits(): Rect;
    /**
     * Sets seismic model limits if auto seismic model limits is off
     * @param limits model limits
     */
    setSeismicModelLimits(limits: Rect): this;
    /**
     * return seismic model limits
     */
    getVisibleSeismicDeviceLimits(): Rect;
    /**
     * Returns seismic visible model limits
     * @param [ignoreModelLimits] flag defines whether to ignore model limits or not. By default this option is false and
     * visible limits will be intersected with model limits of the seismic
     */
    getVisibleSeismicModelLimits(ignoreModelLimits?: boolean): Rect;
    /**
     * Returns active manipulator type
     */
    getManipulatorType(): ManipulatorType;
    /**
     * Set active manipulator type
     * @param manipulatorType enum of  of Manipulator type. Panning tool, RubberBand tool, magnifier tool and picking tool.
     * @param [active] state
     * @returns this
     */
    setManipulatorType(manipulatorType: ManipulatorType, active?: boolean): this;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect | Rect.Options): this;
    /**
     * Fit content to bounds
     * @param [silent] optional parameter to synchronize limits
     * @returns this
     */
    fitToBounds(silent?: boolean): this;
    /**
     * translate seismic model
     * @param dX offset x
     * @param dY offset y
     * @param [silent] update view
     * @returns this
     */
    translate(dX: number, dY: number, silent?: boolean): this;
    /**
     * scale seismic model
     * @param scaleX scale factor by horizontal axis
     * @param scaleY scale factor by vertical axis
     * @param [silent] update view
     * @returns this
     */
    scale(scaleX: number, scaleY: number, silent?: boolean): this;
    /**
     * Zoom in
     * @returns this
     */
    zoomIn(): this;
    /**
     * Zoom out
     * @returns this
     */
    zoomOut(): this;
    /**
     * Reset zoom
     * @returns this
     */
    resetZoom(): this;
    /**
     * set visible model limits
     * @param visibleModelLimits visible model limits
     * @param [silent] notification to listener on or not
     * @returns this
     */
    setVisibleSeismicModelLimits(visibleModelLimits: Rect, silent?: boolean): this;
    /**
     * Attempts to set local transformation for the seismic model.
     * @param transformation transformation to set
     * @returns this
     */
    setSeismicModelTransformation(transformation: Transformation): this;
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     * returns active pipeline
     * @returns pipeline
     */
    getPipeline(): SeismicPipeline | null;
    /**
     * Set pipeline for image, colorbar and other components
     * @param pipeline Seismic Pipeline
     * @param [resetTransformation] reset transformation
     * @returns this
     */
    setPipeline(pipeline: SeismicPipeline | null, resetTransformation?: boolean): this;
    /**
     * return active seismic image
     */
    getSeismicImage(): SeismicImage;
    /**
     * Set pipeline to set colorbar parameters. if it is null then getPipeline is used
     * @param pipeline Seismic Pipeline
     * @returns this
     * @example
     * // How to set up a new pipeline for colorbar different from main pipeline
     * widget.setColorBarPipeline(secondPipeline);
     */
    setColorBarPipeline(pipeline: SeismicPipeline | null): this;
    /**
     * Return pipeline to be used for colorbar
     * @returns Seismic Pipeline
     */
    getColorBarPipeline(): SeismicPipeline | null;
    /**
     * Invalidate node
     * @deprecated 4.0. Not use this method.
     */
    notifyStateChanged(): void;
    /**
     * Return manipulator layer
     */
    getManipulatorLayer(): Layer;
    /**
     * Return widgets tool
     */
    getWidgetTools(): AbstractCompositeTool;
    /**
     * Remove invalidate handler
     * @deprecated 4.0. Not use this method.
     * @param handler handler to be notified about invalidation
     */
    removeStateChangedHandler(handler: Function): void;
    /** */
    loadTemplate(template: string, registry: DefaultRegistry): void;
    /**
     * Get widget options
     * @param [getDataOptions] optional parameter to specify additional request to get colormap
     * @returns options
     */
    getData(getDataOptions?: {
        'no-data'?: boolean;
    }): SeismicViewWidget.DataOptionsOut;
    /**
     * Sets options and/or data
     * @param options options
     */
    setData(options: SeismicViewWidget.DataOptions): this;
    /**
     * Return the node at the specific annotation
     * @param location position to return the node for
     */
    getAnnotation(location: AnnotationLocation): Group;
    /**
     * apply size (width or height) to annotation (convenience method)
     * @example
     * widget.setAnnotationSize(
     * {
     *   'west' : 50,
     *   'east' : '10%'
     * });
     * @param [annotationSize] JSON to hold (width or height) of the annotation
     * @returns this
     */
    setAnnotationSize(annotationSize?: AnnotatedWidget.AnnotationSize): this;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] options
     * @example
     * // change size of axes and colorbar
     * import {ColorBarLocation} from '@int/geotoolkit/controls/shapes/ColorBarLocation';
     * import {Direction} from '@int/geotoolkit/layout/VerticalBoxLayout';
     * widget.setOptions({
     *       'colorbar': {
     *           'location': ColorBarLocation.West,
     *           'axis': {
     *               'size': 50
     *           },
     *           'title': {
     *               'size': 50
     *           },
     *           'colorbox': {
     *               'size': 20
     *           }
     *       },
     *       'axes': {
     *          'headers': {
     *              'location': ColorBarLocation.North,
     *              'direction': Direction.TopToBottom,
     *              'size': 30,
     *          },
     *          'samples': {
     *              'size': 50
     *           }
     *       }
     *   });
     * @returns this
     */
    setProperties(properties?: SeismicViewWidget.Options): this;
    /**
     * Returns all the properties pertaining to this object
     * @returns options or seismic pipeline
     */
    getProperties(): SeismicViewWidget.OptionsOut;
    /**
     * Returns exportable element
     * @param [options] export options
     * @returns return exportable element
     */
    getExportElement(options?: SeismicViewWidget.ExportToPdfOptions): CompositeDocumentElement;
    /**
     * Used to prepare object before exporting
     * @param [options] export options
     * @returns this
     */
    beginExport(options?: SeismicViewWidget.ExportToPdfOptions): this;
    /**
     * Used to restore object's state after exporting
     * @param [options] export options
     * @returns this
     */
    endExport(options?: SeismicViewWidget.ExportToPdfOptions): this;
    /**
     * Exports the widget content as a PDF file, user has option to select the scale of track in pdf.
     * @param [options] option to specify paper parameters and header and footer
     * @returns promise with output stream
     */
    exportToPdf(options?: SeismicViewWidget.ExportToPdfOptions): Promise<IWritable>;
    /**
     * Sets function
     * @param strategy function should returns {@link @int/geotoolkit/scene/shapes/Shape~Shape} in this.getModel().getModelLimits() bounds
     * @returns this
     */
    setNoDataStrategy(strategy: () => Shape): this;
    /**
     * Sets collect performance information mode enabled
     * @param collectPerformanceInfoEnabled true for collection performance information mode enabled
     * @returns this
     */
    setCollectPerformanceInformation(collectPerformanceInfoEnabled: boolean): this;
    /**
     * Gets collect performance information mode enabled
     * @returns true if collection performance information mode enabled
     */
    getCollectPerformanceInformation(): boolean;
}
export declare namespace SeismicViewWidget {
    /**
     * options or seismic pipeline
     */
    type Options = BaseWidget.Options & OptionsBase;
    type OptionsBaseOut = {
        /**
         * type of layout 'default' or 'inside'
         */
        layouttype?: string;
        /**
         * defines title options of widget
         */
        title?: Title;
        /**
         * json defining color bar
         */
        colorbar: ColorBarOptionsOut;
        /**
         * specify set of axes
         */
        axes?: AxesOptions;
        /**
         * specify scroll bar properties
         */
        scroll?: ScrollOptions;
        /**
         * JSON to hold (width or height) of the annotation
         */
        annotationssizes?: AnnotatedWidget.AnnotationSize;
        /**
         * sets model limits of the center group based on the pipeline limits. If limits sets to false
         */
        autoseismiclimits?: boolean;
        /**
         * tools options
         */
        tools?: ToolsOptions;
        /**
         * scale options
         */
        scale: SeismicImage.ScaleOptionsOut;
        /**
         * freeze updating widget until new seismic data is loaded and rendered for visible area
         */
        freezeupdate?: boolean;
        /**
         * seismic trace orientation
         */
        orientation: Orientation;
        /**
         * seismic pipeline
         */
        pipeline: SeismicPipeline;
    };
    type OptionsBase = {
        /**
         * type of layout 'default' or 'inside'
         */
        layouttype?: string;
        /**
         * defines title options of widget
         */
        title?: Title;
        /**
         * json defining color bar
         */
        colorbar?: ColorBarOptions & ColorBar.Options;
        /**
         * specify set of axes
         */
        axes?: AxesOptions;
        /**
         * specify scroll bar properties
         */
        scroll?: ScrollOptions;
        /**
         * JSON to hold (width or height) of the annotation
         */
        annotationssizes?: AnnotatedWidget.AnnotationSize;
        /**
         * sets model limits of the center group based on the pipeline limits. If limits sets to false
         */
        autoseismiclimits?: boolean;
        /**
         * tools options.
         */
        tools?: ToolsOptions;
        /**
         * scale options
         */
        scale?: SeismicImage.ScaleOptions;
        /**
         * freeze updating widget until new seismic data is loaded and rendered for visible area
         */
        freezeupdate?: boolean;
        /**
         * seismic trace orientation
         */
        orientation?: Orientation;
        /**
         * seismic pipeline
         */
        pipeline?: SeismicPipeline;
    };
    /**
     * title
     */
    type Title = {
        /**
         * title text
         */
        text?: string;
        /**
         * visibility
         */
        visible?: boolean;
        /**
         * text style
         */
        textstyle?: TextStyle.Type;
        /**
         * size of the title in pixels
         */
        size?: number;
        /**
         * alignment
         */
        alignment?: AnchorType;
        /**
         * defines location
         */
        location?: AnnotationLocation;
        /**
         * CSS style of the title
         */
        cssclass?: string;
    };
    type HVOptions = {
        /**
         * specify scroll bar visibility
         */
        visible?: boolean;
        /**
         * specify scroll bar cssclass name
         */
        cssclass?: string;
        /**
         * class name of scroll bar
         */
        type?: string;
        options?: HVBaseScroll.Options;
    };
    type ScrollOptions = {
        /**
         * specify horizontal scroll bar properties
         */
        horizontal?: HVOptions;
        /**
         * specify vertical scroll bar properties
         */
        vertical?: HVOptions;
    };
    /**
     * tools options
     */
    type ToolsOptions = {
        /**
         * tools options. See {@link import("geotoolkit/widgets/tools/FloatingColorBarTool").FloatingColorBarTool.setOptions} for details
         */
        colorbar?: FloatingColorBarTool.OptionsBase;
    };
    /**
     * helper, information about shapes associated with header
     */
    type TraceHeaderAxis = {
        /**
         * header visibility
         */
        visible: boolean;
        /**
         * header annotations
         */
        axis: Axis | null;
        /**
         * header labels
         */
        label: Text | null;
    };
    /**
     * options
     */
    type DataOptionsOut = {
        /**
         * pipeline options
         */
        pipeline: SeismicPipeline.Options;
        /**
         * scale options
         */
        scale: SeismicImage.ScaleOptionsOut;
    };
    /**
     * options
     */
    type DataOptions = {
        /**
         * pipeline options
         */
        pipeline?: SeismicPipeline.Options;
        /**
         * scale options
         */
        scale?: SeismicImage.ScaleOptions;
    };
    /**
     * options or seismic pipeline
     */
    type OptionsOut = BaseWidget.OptionsOut & OptionsBaseOut;
    /**
     * options of colorbar
     */
    type ColorBarOptions = {
        /**
         * defines colorbar margin
         */
        margin?: LayoutStyle.Options | string;
        /**
         * colorbar width
         */
        width?: number;
        /**
         * maximum height
         */
        maxheight?: number | string;
        /**
         * alignment
         */
        alignment?: Alignment;
        /**
         * seismic pipeline to properties for colorbar if it is null then default pipeline is used
         */
        pipeline?: SeismicPipeline;
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
    };
    type ColorBarOptionsOut = {
        /**
         * css class
         */
        cssclass: string;
        /**
         * defines visibility of colorbar
         */
        visible: boolean;
        /**
         * alignment
         */
        alignment: Alignment;
        /**
         * seismic pipeline to properties for colorbar if it is null then default pipeline is used
         */
        pipeline: SeismicPipeline;
    };
    type AxesOptions = {
        /**
         * specify properties of vertical axis
         */
        samples?: AxesSamplesOptions;
        /**
         * seismic headers axes options
         */
        headers?: AxesHeadersOptions;
    };
    type AxesHeadersOptions = {
        /**
         * array of trace headers axes, should contains object with 'name', 'visible', 'title' and 'minimumSpan' properties
         */
        fields?: HeaderField[];
        size?: number;
        direction?: VerticalBoxLayoutDirection;
        location?: AnnotationLocation;
        /**
         * default options for all axes
         */
        options?: {
            /**
             * minimum span for header tick generator
             */
            minimumspan?: number;
            /**
             * default axes location, can be 'north' or 'south'
             */
            location?: AnnotationLocation;
            /**
             * default axes direction, can be 'toptobottom' or 'bottomtotop'
             */
            direction?: VerticalBoxLayoutDirection;
            /**
             * default axis size
             */
            size?: number;
            color?: string | RgbaColor;
            cssclass?: string;
            formatter?: TickGenerator.LabelFormatHandler;
        };
    };
    type AxesSamplesOptions = {
        /**
         * defines visibility of sample axis
         */
        visible?: boolean;
        /**
         * defines cssclass of samples axis
         */
        cssclass?: string;
        /**
         * defines location of sample axis
         */
        location?: AnnotationLocation;
        /**
         * defines instance of sample axis
         */
        instance?: Axis;
        /**
         * defines size in pixels of samples axis
         */
        size?: number;
        /**
         * defines title options of sample axis
         */
        title?: Axis.Title;
        /**
         * objects which defines ticks options of the axis. See {@link import("geotoolkit/axis/TickGenerator").TickGenerator.setOptions} for details
         */
        ticks?: AdaptiveTickGenerator.Options;
    };
    /**
     * option to specify paper parameters and header and footer
     */
    type ExportToPdfOptions = {
        /**
         * an optional PDF header
         */
        header?: HeaderComponent;
        /**
         * an optional PDF footer
         */
        footer?: FooterComponent;
        /**
         * an optional document PDF header
         */
        documentheader?: HeaderComponent;
        /**
         * an optional document PDF footer
         */
        documentfooter?: FooterComponent;
        /**
         * define optional output filename
         */
        output?: string;
        /**
         * flag to save the pdf directly to file or open dialog
         */
        save?: boolean;
        /**
         * define optional paper and export parameters
         */
        printsettings?: PdfExport.DocumentExportSettings;
        /**
         * export depth or time limits
         */
        limits?: Rect;
        /**
         * export scale from model index unit to pixels by default as is
         */
        scale?: number;
        /**
         * enable true scale
         */
        truescale?: boolean;
        /**
         * define how many depth units in one device unit.
         */
        deviceunit?: string;
        /**
         * options to specify the image scale factor, right now 8 is maximum, Math.floor(600 / 72)
         */
        imagescalefactor?: number;
        /**
         * options to specify the image compression
         */
        imagecompression?: {
            /**
             * image compression method used to exporting pdf.
             */
            mode?: ImageCompression;
            /**
             * quality range from 0 to 1 that will express the jpeg image compression quality, available for jpeg mode only.
             */
            quality?: number;
            /**
             * speed referring to the png compression speed, available  for png mode only.
             */
            speed?: SpeedCompression;
        };
        /**
         * enable or disable pdf output compression
         */
        streamcompression?: boolean;
        /**
         * optional user-customized Stream object
         */
        pdfstream?: IWritable;
        /**
         * array of embedded fonts
         */
        embededfonts?: EmbededFont[];
        /**
         * true if horizon picker need to be exported to pdf
         */
        horizonpickervisible?: boolean;
        /**
         * Callback to show export progress
         */
        progress?: (currentPage: number, totalPages: number) => void;
    };
    type HeaderField = {
        name?: string;
        title?: string;
        visible?: boolean;
        cssclass?: string;
        minimumspan?: number;
        color?: string;
        formatter?: TickGenerator.LabelFormatHandler;
    };
    type Tools = BaseWidget.Tools & {
        'cross-hair': CrossHair;
        'panning': Panning;
        'zoom': Zoom;
        'rubberband': RubberBand;
        'pick': Selection;
        'centerCompositeTool': CompositeTool;
        'colorbar': FloatingColorBarTool;
        'VerticalScroll': VerticalScroll;
        'HorizontalScroll': HorizontalScroll;
        'comparator': Comparator;
        'horizon-picker': HorizonPicker;
    };
    type EventMap = Group.EventMap & TiledShape.EventMap & {
        [Events.PipelineSet]: {
            old: SeismicPipeline;
            new: SeismicPipeline;
        };
        [SceneEvents.VisibleLimitsChanged]: {
            visibleModelLimits: Rect;
            modelLimits: Rect;
            deviceLimits: Rect;
        };
    };
}
