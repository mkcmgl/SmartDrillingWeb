import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import { IExportable } from '@int/geotoolkit/scene/exports/IExportable';
import { Group } from '@int/geotoolkit/scene/Group';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AnnotatedNode } from '@int/geotoolkit/scene/AnnotatedNode';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { CrossHair } from '@int/geotoolkit/controls/tools/CrossHair';
import { Panning } from '@int/geotoolkit/controls/tools/Panning';
import { Zoom } from '@int/geotoolkit/controls/tools/Zoom';
import { Selection } from '@int/geotoolkit/controls/tools/Selection';
import { RubberBand } from '@int/geotoolkit/controls/tools/RubberBand';
import { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import { FloatingColorBarTool } from '@int/geotoolkit/widgets/tools/FloatingColorBarTool';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Axis } from '@int/geotoolkit/axis/Axis';
import { ImageCompression } from '@int/geotoolkit/pdf/ImageCompression';
import { SpeedCompression } from '@int/geotoolkit/pdf/SpeedCompression';
import { PdfExport } from '@int/geotoolkit/pdf/PdfExport';
import { IWritable } from '@int/geotoolkit/util/stream/IWritable';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { CompositeDocumentElement } from '@int/geotoolkit/scene/exports/CompositeDocumentElement';
import type { HeaderComponent } from '@int/geotoolkit/scene/exports/HeaderComponent';
import type { FooterComponent } from '@int/geotoolkit/scene/exports/FooterComponent';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { EmbededFont } from '@int/geotoolkit/pdf/EmbededFont';
import type { Merge } from '@int/geotoolkit/base';
import type { ScaleScrollStrategy } from '@int/geotoolkit/scene/ScaleScrollStrategy';
/**
 * Annotated Widget Events enumerator
 * @events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when the models visible limits could have changed
     * @event module:geotoolkit/widgets/AnnotatedWidget~Events~ModelVisibleLimitsChanged
     */
    ModelVisibleLimitsChanged = "ModelVisibleLimitsChanged"
}
/**
 * The AnnotatedWidget widget extends the BaseWidget using an AnnotatedNode. It has a center model {@link @int/geotoolkit/scene/Group~Group} and a set of eight annotations on each side to display axes, titles, or legends.
 * It has settings to specify sizes of the annotations and create axis. It also provides scrollbars and capabilities to zoom for the center element. <br>
 *
 * A connect function is used to synchronize the object with a model. It propagates limits and scroll position, so while scrolling the connect function synchronizes scale coefficients.
 * <p>
 *
 * The main way to configure and customize the widget is to use the setOptions() function that provides a comprehensible way of changing the default look and feel of the widget.<br>
 * The constructor calls the functions .initializeLayout() and .initializeTools().<br>
 *
 * See {@link @int/geotoolkit/scene/AnnotatedNode~AnnotatedNode} for more details on the annotation layout and features.
 * </p>
 *
 * <p> It also includes some default tools:
 * <ul>
 * <li> cross-hair {@link @int/geotoolkit/controls/tools/CrossHair~CrossHair} </li>
 * <li> panning {@link @int/geotoolkit/controls/tools/Panning~Panning} </li>
 * <li> zoom {@link @int/geotoolkit/controls/tools/Zoom~Zoom} </li>
 * <li> pick {@link @int/geotoolkit/controls/tools/Selection~Selection} </li>
 * <li> rubberband {@link @int/geotoolkit/controls/tools/RubberBand~RubberBand} </li>
 * <li> horizontalscroll {@link @int/geotoolkit/controls/tools/scroll/HorizontalScroll~HorizontalScroll} </li>
 * <li> verticalscroll {@link @int/geotoolkit/controls/tools/scroll/VerticalScroll~VerticalScroll}</li>
 * </ul>
 * The widget also provides built-in export to PDF, please refer to the example below<br>
 * </p>
 *
 * @example
 * import {AnnotatedWidget} from '@int/geotoolkit/widgets/AnnotatedWidget';
 * import {AnnotationLocation} from '@int/geotoolkit/layout/AnnotationLocation';
 * import {Axis} from '@int/geotoolkit/axis/Axis';
 * import {TickPosition, LabelPosition} from '@int/geotoolkit/axis/TickInfo';
 * import {Orientation} from '@int/geotoolkit/util/Orientation';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * import {AdaptiveTickGenerator} from '@int/geotoolkit/axis/AdaptiveTickGenerator';
 *
 * new AnnotatedWidget({
 *     'model': model, // instance of @int/geotoolkit/scene/Group
 *     'annotationssizes': {
 *         'north': 5, 'south': 60, 'east': 12, 'west': 80
 *     },
 *     'north': [],
 *     'south': [new Axis({
 *         'tickposition': TickPosition.Top,
 *         'orientation': Orientation.Horizontal,
 *         'labelposition': LabelPosition.Top,
 *         'title': {
 *             'text': 'Day',
 *             'visible': true,
 *             'textstyle': {
 *                 'color': '#757575'
 *             },
 *             'alignment': AnchorType.Center
 *         },
 *         'tickgenerator': new AdaptiveTickGenerator()
 *     })],
 *     'west': [new Axis({
 *         'tickposition': TickPosition.Right,
 *         'labelposition': LabelPosition.Right,
 *         'orientation': Orientation.Vertical,
 *         'title': {
 *             'text': 'Volume (gal)',
 *             'visible': true,
 *             'textstyle': {
 *                 'color': '#757575'
 *             },
 *             'alignment': AnchorType.Center
 *         },
 *         'tickgenerator': new AdaptiveTickGenerator()
 *     })],
 *     'east': [],
 *     'tools': {
 *         'horizontalscroll': {
 *             'visible': false
 *         },
 *         'verticalscroll': {
 *             'visible': false
 *         }
 *     }
 * });
 * @example
 * // Exporting to a PDF with virtual model limits. This will print the canvas in its entirety,
 * // regardless of the zoom state. Please refer to the Export tutorials for more export options.
 * import {ScalingOptions} from '@int/geotoolkit/scene/exports/ScalingOptions'
 * ...
 * const pdfOptions = {
 *          'printsettings': {'scaling': ScalingOptions.FitWidth},
 *          'modellimits': widget.getModel().getModelLimits()
 * };
 * widget.exportToPdf(pdfOptions);
 * @example
 * // AnnotatedWidget has an optional border and accepts color or line style json
 * import {Group} from '@int/geotoolkit/scene/Group';
 * new AnnotatedWidget({
 *   'model': new Group(),
 *   'border': {
 *      'color': 'red'
 *   }
 * });
 * @example
 * // This example shows how to attach a listener to the axis, and listen to hover events
 * // pertaining to the axis object. This can help if you want to zoom only x-axis or only y-axis
 * import {PointerMode} from '@int/geotoolkit/controls/tools/PointerMode';
 * const widget = new AnnotatedWidget({
 *      ...
 *      'south': [axisSouth],
 *      ...
 * });
 *
 * axisSouth.on(PointerMode.Hover, (type, node, args) => {
 *      // fired when mouse hovers over axisSouth
 * });
 */
export declare class AnnotatedWidget extends BaseWidget implements IExportable {
    constructor(options?: AnnotatedWidget.Options);
    on<E extends keyof AnnotatedWidget.EventMap>(type: E, callback: (eventType: E, sender: this, args: AnnotatedWidget.EventMap[E]) => void): this;
    off<E extends keyof AnnotatedWidget.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AnnotatedWidget.EventMap[E]) => void): this;
    notify<E extends keyof AnnotatedWidget.EventMap>(type: E, source: AnnotatedWidget, args?: AnnotatedWidget.EventMap[E]): this;
    initializeLayout(settings: AnnotatedWidget.Options): Group;
    /**
     * Sets visible model limits
     * @param [limits] the visible model limits
     * @fires @int/geotoolkit/widgets/AnnotatedWidget~Events.ModelVisibleLimitsChanged
     */
    zoomToRect(limits?: Rect): void;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect | Rect.Options): this;
    /**
     * Refresh layout of inner components of the widget
     */
    refreshLayout(): this;
    /**
     * Attempts to set local transformation for the model.
     * NOTE: the local transformation set may not be equal
     * to transformation passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @param transformation transformation to set
     */
    setModelTransformation(transformation: Transformation): this;
    getToolByName<T extends keyof AnnotatedWidget.Tools>(toolName: T): AnnotatedWidget.Tools[T] | null;
    /**
     * function call in the constructor to initialize tools in the widget<br>
     * This widget contains by default :<br>
     * - {@link @int/geotoolkit/controls/tools/CrossHair~CrossHair} tool <br>
     * - {@link @int/geotoolkit/controls/tools/RubberBand~RubberBand} tool <br>
     * - {@link @int/geotoolkit/controls/tools/Panning~Panning} tool <br>
     * - {@link @int/geotoolkit/controls/tools/scroll/HorizontalScroll~HorizontalScroll} <br>
     * - {@link @int/geotoolkit/controls/tools/scroll/VerticalScroll~VerticalScroll} <br>
     * @param [options] tools options
     * @returns this
     */
    protected initializeTools(options?: AnnotatedWidget.Options): this;
    /**
     * Attempts to set model's visible limits to specified limits.
     * NOTE: the limits set may not be equal
     * to the limit passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @param newVisibleModelLimits limits to set
     */
    setVisibleModelLimits(newVisibleModelLimits: Rect): this;
    /**
     * Translates widget's contents.
     * @param tx x translation
     * @param ty y translation
     * @fires @int/geotoolkit/widgets/AnnotatedWidget~Events.ModelVisibleLimitsChanged
     */
    translateModel(tx: number, ty: number): this;
    /**
     * Scale node's contents.
     *
     * @param xx x scale factor
     * @param yy y scale factor
     * @param [posX] x position to scale from (in pxl)
     * @param [posY] y position to scale from (in pxl)
     * @fires @int/geotoolkit/widgets/AnnotatedWidget~Events.ModelVisibleLimitsChanged
     */
    scaleModel(xx: number, yy: number, posX?: number, posY?: number): this;
    /**
     * Set the model limits of center model
     * @param modellimits model limits
     * @fires @int/geotoolkit/widgets/AnnotatedWidget~Events.ModelVisibleLimitsChanged
     * @example
     * //artificially expand the widget model limits
     * import {Rect} from '@int/geotoolkit/util/Rect';
     * const newLimits = new Rect(0,0,10,10);
     * widget.setCenterModelLimits(newLimits);
     */
    setCenterModelLimits(modellimits: Rect): this;
    /**
     * Return model limits
     * @returns annotated model limits
     */
    getCenterModelLimits(): Rect | null;
    /**
     * Returns visible model limits of the center model
     * @param [ignoreModelLimits] flag defines whether to ignore model limits or not. By default this option is false and
     * visible limits will be intersected with center model limits
     */
    getVisibleCenterModelLimits(ignoreModelLimits?: boolean): Rect | null;
    /**
     * Attempts to set model's visible limits to specified limits.
     * NOTE: the limits set may not be equal
     * to the limit passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @param newVisibleModelLimits limits to set
     * @fires @int/geotoolkit/widgets/AnnotatedWidget~Events.ModelVisibleLimitsChanged
     */
    setVisibleCenterModelLimits(newVisibleModelLimits: Rect): this;
    protected synchronizeViewLimits(): this;
    /**
     * apply size (width or height) to annotation (convenience method)
     * @example
     * {
     *   west : 50,
     *   east : '10%',
     *   south: 'auto'
     * }
     * @param [annotationSize] JSON to hold (width or height) of the annotation
     * @returns this
     */
    setAnnotationSize(annotationSize?: AnnotatedWidget.AnnotationSize): this;
    /**
     * Return sizes of all annotations or the exact one
     * @param [loc] side of annotation
     * @returns contains size of all annotations
     */
    getAnnotationSize(): Required<AnnotatedWidget.AnnotationSize>;
    getAnnotationSize(loc: AnnotationLocation): number;
    /**
     * Sets annotations' options. currently setAnnotationOptions can only modify existing annotation, while the constructor for the widget can create new ones.
     *
     * @param options JSON to hold annotations' options
     * @returns this
     */
    setAnnotationsOptions(options: AnnotatedNode.AnnotationOptions): this;
    /**
     * Add title to annotation
     * @param location of the title
     * @param options title options
     */
    addTitle(location: AnnotationLocation, options: AnnotatedWidget.TitleOptions): void;
    /**
     * set options for title
     * @param location of the title
     * @param options title options
     */
    setTitleOptions(location: AnnotationLocation, options: Omit<AnnotatedWidget.TitleOptions, 'location'>): this;
    /**
     * remove title in the location
     * @param location of the title
     */
    removeTitle(location: AnnotationLocation): void;
    /**
     * Insert new axis and connect with object
     * @param axisIndex desired axis index
     * @param axis new axis instance or options
     * @param location location of annotation for adding new axis
     * @param [connectedObject] connected object of axis
     */
    insertAxis(axisIndex: number, axis: Axis | AnnotatedNode.AxisOptions, location: AnnotationLocation, connectedObject?: Group): {
        axis: Axis;
        group: Group;
    };
    /**
     * add new axis and connect with object
     * @param axis new axis instance or options
     * @param location location of annotation for adding new axis
     * @param [connectedObject] connected object of axis
     */
    addAxis(axis: Axis | AnnotatedNode.AxisOptions, location: AnnotationLocation, connectedObject?: Group): {
        axis: Axis;
        group: Group;
    };
    /**
     * remove axis
     * @param axis axis to be removed
     */
    removeAxis(axis: Axis): void;
    /**
     * Synchronizes object with a model
     *
     * @param object object to be synchronized
     * @param model source model
     * @param [orientation] horizontal or vertical
     * @param [autoSize] true if object and model share the same device size in the orientation, true by default if not specified
     * @returns this
     */
    connect(object: Group | Axis, model: Group, orientation?: Orientation, autoSize?: boolean): this;
    /**
     * Disconnect an object from its source model
     *
     * @param object object to disconnect
     * @returns this
     */
    disconnect(object: Group | Axis): this;
    /**
     * zoom in, with default factor = 5/4
     * @returns this
     */
    zoomIn(): this;
    /**
     * zoom out, with default factor = 5/4
     * @returns this
     */
    zoomOut(): this;
    /**
     * get model node
     */
    getModel(): Group;
    /**
     * fit bounds to model limits
     * @returns this
     * @fires @int/geotoolkit/widgets/AnnotatedWidget~Events.ModelVisibleLimitsChanged
     */
    fitToBounds(): this;
    /**
     * attempts to translate the model using the specific x, y translation
     * @param dx relative horizontal change
     * @param dy relative vertical change
     * @returns this
     * @fires @int/geotoolkit/widgets/AnnotatedWidget~Events.ModelVisibleLimitsChanged
     */
    pan(dx: number, dy: number): this;
    /**
     * set the scale scroll strategy to apply to the widget
     * @param delegate scaleScrollStrategy to set
     * @returns this
     */
    setScaleScrollStrategy(delegate: ScaleScrollStrategy.Delegate): this;
    /**
     * Gets ScaleScrollStrategy ("undefined" by default)
     * @returns ScaleScrollStrategy
     * (see "setScaleScrollStrategy" description for more info)
     */
    getScaleScrollStrategy(): ScaleScrollStrategy.Delegate | null;
    /**
     * return the node at the specific annotation
     * @param location position to return the node for
     */
    getAnnotation(location: AnnotationLocation): Group;
    /**
     * return manipulator layer
     */
    getManipulatorLayer(): CompositeNode;
    /**
     * Export a part of the container to PDF
     * <p>This method sets automatically export scale and limits based on input parameters and current model scale and limits</p>
     * @param [options] option to specify paper parameters and header and footer
     * @returns promise with output stream
     */
    exportToPdf(options?: AnnotatedWidget.ExportToPdfOptions): Promise<IWritable>;
    /**
     * Return export limits
     */
    getExportLimits(): Rect;
    /**
     * Sets export limits
     * @param limits export limits
     */
    setExportLimits(limits: Rect): this;
    /**
     * Gets export scale. By default scale is not set and equal to screen scale
     * @returns scale
     */
    getExportScale(): AnnotatedWidget.ExportScale;
    /**
     * Sets export scale.
     * @param scale scale
     */
    setExportScale(scale: AnnotatedWidget.ExportScale): this;
    /**
     * Returns export state
     * @returns export state
     */
    protected getExportState(): Record<string, any>;
    /**
     * Prepares object before exporting and saving state
     */
    beginExport(): this;
    /**
     * Restores object's state after exporting
     */
    endExport(): void;
    /**
     * Returns exportable element
     * @param [options] options
     * @returns return exportable element
     */
    getExportElement(options?: AnnotatedWidget.ExportElementOptions): CompositeDocumentElement;
    /**
     * Gets Tools Options
     *
     * @returns JSON which defines tools options
     */
    getToolsOptions(): AnnotatedWidget.ToolsOptionsOut;
    /**
     * Set Tools Options
     *
     * @param [options] JSON which defines tools options
     * @returns this
     * @example
     * //To prevent the selection tool from deselecting the previously selected points, for example  user can do the following:
     * annotatedWidget.setToolsOptions({
     *     'selection': {
     *         'resetselection': false
     *     }
     * });
     */
    setToolsOptions(options?: AnnotatedWidget.ToolsOptions): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): AnnotatedWidget.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] properties
     * @returns this
     */
    setProperties(properties?: Omit<AnnotatedWidget.Options, 'model'>): this;
    /**
     * Saves tools state
     * @returns this
     */
    saveToolsState(): this;
}
export declare namespace AnnotatedWidget {
    /**
     * The widget options see initializeLayout() for details
     */
    export type Options = Merge<AnnotatedNode.AnnotationOptions, BaseWidget.Options & {
        applicationid?: string;
        /**
         * model to represent a center area of the widget
         */
        model?: Group;
        /**
         * true if you want to wrap annotation items in constructor with a new group with zero to one limits
         */
        annotationitemswrap?: boolean;
        /**
         * JSON to hold (width or height) of the annotation {@link import("geotoolkit/widgets/AnnotatedWidget").AnnotatedWidget.setAnnotationSize}
         */
        annotationssizes?: AnnotationSize;
        /**
         * Tools options
         */
        tools?: ToolsOptions;
        /**
         * defines properties for widget model area outer border {@link @int/geotoolkit/attributes/LineStyle~LineStyle}
         */
        border?: LineStyle | LineStyle.Options | string;
    } & AnnotatedNode.Options>;
    /**
     * JSON to hold (width or height) of the annotation
     */
    export type AnnotationSize = {
        /**
         * preferred width of east annotation size
         */
        east?: string | number;
        /**
         * preferred height of south annotation size
         */
        south?: string | number;
        /**
         * preferred width of west annotation size
         */
        west?: string | number;
        /**
         * preferred height of north annotation size
         */
        north?: string | number;
    };
    /**
     * title options
     */
    export type TitleOptions = {
        location?: AnnotationLocation;
        /**
         * text to display in title
         */
        text?: string;
        /**
         * textstyle of title
         */
        textstyle?: TextStyle.Type;
    };
    /**
     * option to specify paper parameters and header and footer
     */
    export type ExportToPdfOptions = ExportElementOptions & {
        /**
         * define optional header
         */
        header?: HeaderComponent;
        /**
         * define optional header
         */
        footer?: FooterComponent;
        /**
         * the name of the file to be created
         */
        output?: string;
        /**
         * define optional paper and export parameters
         */
        printsettings?: PdfExport.DocumentExportSettings;
        /**
         * model limits that should be exported. By default the virtual limits
         */
        modellimits?: Rect;
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
         * flag to save the stream directly to file or open dialog
         */
        save?: boolean;
        /**
         * array of embedded fonts
         */
        embededfonts?: EmbededFont[];
        /**
         * optional user-customized Stream object
         */
        pdfstream?: IWritable;
        /**
         * Callback to show export progress
         */
        progress?: (currentPage: number, totalPages: number) => void;
    };
    /**
     * scale
     */
    export type ExportScale = null | {
        /**
         * scale by x form model to device
         */
        x: number;
        /**
         * scale by y form model to device
         */
        y: number;
    };
    /**
     * options
     */
    export type ExportElementOptions = {
        /**
         * export scale  by default as is
         */
        scale?: ExportScale;
        /**
         * an optional document PDF header
         */
        documentheader?: Group;
        /**
         * an optional document PDF footer
         */
        documentfooter?: Group;
    };
    /**
     * JSON which defines tools options
     */
    export type ToolsOptionsOut = {
        /**
         * vertical scroll bar options
         */
        verticalscroll?: ScrollBarOptionsOut;
        /**
         * horizontal scroll bar options
         */
        horizontalscroll?: ScrollBarOptionsOut;
        /**
         * JSON which defines panning.
         */
        panning?: {
            /**
             * is panning enabled
             */
            enabled: boolean;
        };
        /**
         * JSON which defines zoom
         */
        zoom?: {
            /**
             * is zoom enabled
             */
            enabled: boolean;
        };
    };
    /**
     * JSON which defines tools options
     */
    export type ToolsOptions = {
        /**
         * vertical scroll bar options
         */
        verticalscroll?: ScrollBarOptions;
        /**
         * horizontal scroll bar options
         */
        horizontalscroll?: ScrollBarOptions;
        /**
         * JSON which defines crosshair cursor. See {@link @int/geotoolkit/controls/tools/CrossHair~CrossHair#setProperties} for details
         */
        crosshair?: CrossHair.Options;
        /**
         * JSON which defines panning.
         */
        panning?: {
            /**
             * is panning enabled
             */
            enabled?: boolean;
        };
        /**
         * JSON which defines zoom
         */
        zoom?: Zoom.Options;
        /**
         * JSON which defines rubber band zoom. See {@link @int/geotoolkit/controls/tools/RubberBand~RubberBand#setSettings} for details
         */
        rubberbandzoom?: RubberBand.Options;
        /**
         * JSON which defines selection. See {@link @int/geotoolkit/controls/tools/Selection~Selection#setOptions} for details
         */
        selection?: Selection.Options & {
            /**
             * does the selection resets between two picks
             */
            resetselection?: boolean;
        };
    };
    type ScrollBarOptions = Partial<ScrollBarOptionsOut> & {
        name?: string;
        enabled?: boolean;
    };
    type ScrollBarOptionsOut = {
        /**
         * scroll bar type
         */
        type: string;
        /**
         * scroll bar visibility
         */
        visible: boolean;
        /**
         * scroll bar size
         */
        size: number | string;
        options?: any;
    };
    /**
     * properties
     */
    export type OptionsOut = BaseWidget.OptionsOut & {
        /**
         * true if you want to wrap annotation items in constructor with a new group with zero to one limits
         */
        annotationitemswrap: boolean;
        /**
         * JSON to hold (width or height) of the annotation
         */
        annotationssizes: AnnotationSize;
        /**
         * tools options
         */
        tools: ToolsOptionsOut;
        /**
         * line style for border
         */
        border: LineStyle;
    };
    export type EventMap = Group.EventMap & {
        [Events.ModelVisibleLimitsChanged]: Rect;
    };
    export type Tools = {
        'cross-hair': CrossHair;
        'crosshair': CrossHair;
        'panning': Panning;
        'zoom': Zoom;
        'rubberband': RubberBand;
        'pick': Selection;
        'manipulatorTools': CompositeTool;
        'colorbar': FloatingColorBarTool;
    } & BaseWidget.Tools;
    export {};
}
