import { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { Group } from '@int/geotoolkit/scene/Group';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Axis } from '@int/geotoolkit/axis/Axis';
import { Histogram } from '@int/geotoolkit/controls/shapes/Histogram';
import { AdaptiveTickGenerator } from '@int/geotoolkit/axis/AdaptiveTickGenerator';
import { Node } from '@int/geotoolkit/scene/Node';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { Text } from '@int/geotoolkit/scene/shapes/Text';
import type { DataSource } from '@int/geotoolkit/data/DataSource';
import type { DataBinding } from '@int/geotoolkit/data/DataBinding';
import type { AbstractScroll } from '@int/geotoolkit/controls/tools/scroll/AbstractScroll';
/**
 * enum for Events triggered by the Widget.
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * fired when histograms are selected
     */
    HistogramsSelected = "histogramsselected",
    /**
     * fired when bins of highlightable histograms are selected
     */
    BinsSelected = "binsselected",
    /**
     * fired when axis is selected
     */
    AxisSelected = "axisselected",
    /**
     * fired when Data source updated
     */
    DataUpdated = "dataupdated"
}
/**
 * The multihistograms widget is a container to wrap multiple histograms into one widget
 * and mange axes, selection and model limits for different histograms.
 * see more details about initialization of  widget in constructor of
 * geotoolkit.widgets.AnnotatedWidget
 *
 * @example
 * import {MultiHistograms} from '@int/geotoolkit/widgets/MultiHistograms';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * import {KnownColors} from '@int/geotoolkit/util/ColorUtil';
 * import {FrequencyType, HistogramMode} from '@int/geotoolkit/controls/shapes/Histogram';
 * function newHistogramShapeOptions (color, binNumber, name) {
 *     return {
 *         'name': name,
 *         'bins': binNumber,
 *         'frequencytype': FrequencyType.Absolute,
 *         'histogrammode': HistogramMode.Linear,
 *         'fillstyle': color,
 *         'linestyle': KnownColors.Gray,
 *         'binspacing': 100,
 *         'unit': 'ft'
 *     };
 * }
 * const widget = new MultiHistograms({
 *     'bounds': new Rect(0, 0, 800, 400),
 *     'viewcache': true,
 *     'annotationssizes': {
 *         'north': 20
 *     },
 *     'tools': {
 *         'verticalscroll': {
 *             'visible': false
 *         },
 *         'horizontalscroll': {
 *             'visible': false
 *         }
 *     },
 *     'autoannotationsize': true
 * });
 * const hist1Options = newHistogramShapeOptions(KnownColors.Blue, 20, 'series 1');
 * const hist2Options = newHistogramShapeOptions(KnownColors.Green, 25, 'series 2');
 * const hist1 = widget.addHistogram(hist1Options)
 *   .setData(datasource1);
 * const hist2 = widget.addHistogram(hist2Options)
 *   .setData(datasource2);
 */
export declare class MultiHistograms extends AnnotatedWidget {
    constructor(options?: MultiHistograms.Options);
    on<E extends keyof MultiHistograms.EventMap>(type: E, callback: (eventType: E, sender: this, args: MultiHistograms.EventMap[E]) => void): this;
    off<E extends keyof MultiHistograms.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: MultiHistograms.EventMap[E]) => void): this;
    notify<E extends keyof MultiHistograms.EventMap>(type: E, source: MultiHistograms, args?: MultiHistograms.EventMap[E]): this;
    /**
     * return underlay layer for add new visual under histograms
     * @returns group instead get a Layer object , widget return Group object for setting model limits with ease.
     */
    getUnderlayLayer(): Group;
    protected initializeTools(): this;
    /**
     * create a new histogram with axes
     * @param options options to set up histogram shape
     * @param [axes] axes options
     * @param [id] id for identifying histogram and axis
     * @returns [histObj.histogram] returned shape
     */
    addHistogram(options: Histogram.Options, axes?: MultiHistograms.AddHistogramAxes, id?: string): Histogram;
    /**
     * remove histograms from widget
     * @param shapes array of histograms
     * @returns this
     */
    removeHistograms(shapes: Histogram[] | string[] | Histogram | string): this;
    /**
     * set if histograms can be highlighted
     * @param shapes array of histograms
     * @param highlightable if histograms are available for selection
     * @returns this
     */
    setHighlightableHistograms(shapes: Histogram[] | string[] | Histogram | string, highlightable: boolean): this;
    /**
     * get highlightable histograms
     * @returns highlightable histograms
     */
    getHighlightableHistograms(): Histogram[];
    /**
     * get selected bins in highlightable histograms
     * @param shapes of histograms id or instance
     * @returns array of bins array
     */
    getHighlightedBins(shapes: Histogram[] | string[] | Histogram | string): number[][];
    /**
     * get all histograms
     * @param returnId instead return histograms instance, return Ids of histograms
     * @returns histograms all histograms in the widget
     */
    getHistograms(returnId?: boolean): Histogram[] | number[];
    /**
     * get all limits groupId
     * @returns groups ids of all groups
     */
    getGroupsId(): number[];
    /**
     * create new axis with options, adding and connect it with object
     * @param location location of annotation for adding new axis
     * @param options options
     * @param [connectedObject] connected object of axis
     */
    addAxisTo(location: AnnotationLocation, options: MultiHistograms.GroupAxisOptions, connectedObject?: Node | Histogram | string): void;
    /**
     * refer to axis based on histogram or group and remove the axis from widget
     * @param ref id or reference to identify histogram or group related to the axis
     * @param location location of axis
     */
    removeAxisFrom(ref: MultiHistograms.Group | string | Histogram, location: AnnotationLocation): MultiHistograms | null;
    /**
     * add histograms to an existing group as new members
     * @param shapes array of histograms or their id
     * @param groupRef id string or object that contain groupid property
     */
    addHistogramsToGroup(shapes: Histogram[] | string[] | Histogram | string, groupRef: MultiHistograms.Group | string): MultiHistograms | null;
    /**
     * remove histograms from all existing limits group
     * @param shapes array of histograms or their id
     * @returns this
     */
    removeHistogramsFromAllGroup(shapes: Histogram[] | string[] | Histogram | string): this;
    /**
     * remove histograms from an existing group
     * @param shapes array of histograms or their id
     * @param groupRef id string or object that contain groupid property
     */
    removeHistogramsFromGroup(shapes: Histogram[] | string[] | Histogram | string, groupRef: MultiHistograms.Group | string): MultiHistograms | null;
    /**
     * create group in certain annotation(along certain axis) based on histograms
     * @param shapes array of histograms
     * @param location location of annotation that containing axis for limits group
     * @param [axisOptions] options to set up new axis. The default value of options would be the options get from the axis of one histogram in the group.
     * For details, see the internalAddAxis method.
     * @param [gid] group id
     * @returns to refer to group and related object
     */
    createGroup(shapes: Histogram[] | string[], location: AnnotationLocation, axisOptions?: MultiHistograms.GroupAxisOptions, gid?: string): MultiHistograms.Group | null;
    /**
     * set properties for widget
     * @param props object properties
     * @returns this
     */
    setProperties(props?: MultiHistograms.Options): this;
    /**
     * set options for widget
     * @param options options
     * @returns this
     */
    setOptions(options: MultiHistograms.OptionsBase): this;
    /**
     * get axis and related group options
     * @param ref shape histogram reference or group reference for identifying the axis
     * @param location location of the axis
     */
    getAxisOptions(ref: MultiHistograms.Group | string | Histogram, location: AnnotationLocation): MultiHistograms.AxisOptionsOut | null;
    /**
     * set options of axis
     * @param ref shape histogram reference or group reference for identifying the axis
     * @param location location of the axis
     * @param options axis options
     */
    setAxisOptions(ref: MultiHistograms.Group | string | Histogram, location: AnnotationLocation, options: MultiHistograms.AxisOptions): this;
    /**
     * get properties of widget
     */
    getProperties(): MultiHistograms.OptionsOut;
    /**
     * set header options for widget
     * @param [options] options
     */
    setHeaderOptions(options?: MultiHistograms.HeaderOptions): this;
    /**
     * get header options
     * @returns header options
     */
    getHeaderOptions(): MultiHistograms.HeaderOptionsOut;
    /**
     * set desired length for the axis
     * @param axisRef id or reference to identify axis
     * @param length desired width or height for the axis
     * @returns this
     */
    setAxisWidthOrHeight(axisRef: Axis | string, length: number): this;
    /**
     * set up tools options
     * @param options options
     * @returns this
     */
    setToolsOptions(options: MultiHistograms.ToolsOptions): this;
    /**
     * get tools options
     * @returns tools options
     */
    getToolsOptions(): MultiHistograms.ToolsOptionsOut;
    /**
     * set up options for axis selection
     * @param options options
     * @returns this
     */
    setAxisSelection(options: MultiHistograms.AxisSelectionOptions): this;
    /**
     * get axis selection options
     */
    getAxisSelectionOptions(): MultiHistograms.AxisSelectionOptionsOut;
    /**
     * set up options for annotation scroll bar
     * @param options options
     * @param location location of annotation that containing axis for the group
     * @returns this
     */
    setAnnotationsScrollBar(options: MultiHistograms.ScrollBarOptions, location: AnnotationLocation): this;
    /**
     * get scroll bar options
     * @returns options south scroll bar options
     */
    getAnnotationScrollBarOptions(): AbstractScroll.OptionsOut;
    /**
     * set up gaps for annotations
     * @param options options
     * @returns this
     */
    setGaps(options: MultiHistograms.GapsOptions): this;
    /**
     * remove group
     * @param groupRef id string or object that contain groupid property
     * @returns this
     */
    removeGroup(groupRef: MultiHistograms.Group | string): this;
    /**
     * set visibility of histograms and related axis
     * @param shapes array of histograms
     * @param visible set the visibility of histogram and related axis
     * @returns this
     */
    setHistogramsVisible(shapes: Histogram[] | string[] | Histogram | string, visible: boolean): this;
    /**
     * unbind all group in certain location or all locations
     * @param location location of annotation that containing axis for limits group
     * @returns this
     */
    removeAllGroup(location: AnnotationLocation): this;
    /**
     * bring the shape in front of all other shapes and activate it
     * @param shape the histogram need to be show on the top
     * @returns this
     */
    setInFrontHistogram(shape: Histogram): this;
    /**
     * bring the group and the top shape in the group in front of all shapes and then activate it
     * @param groupRef id string or object that contain groupid property
     * @returns this
     */
    setInFrontGroup(groupRef: MultiHistograms.Group | string): this;
    /**
     * Sets a new data model
     * @param data data model set
     * @returns this
     */
    setData(data: DataSource): this;
    /**
     * returns data source
     */
    getData(): DataSource;
    /**
     * Sets the data binding
     * @param binding data binding
     * @param [silent] silent mode to forbid
     * @returns this
     */
    setDataBinding(binding: DataBinding, silent?: boolean): this;
    /**
     * Return the data binding
     */
    getDataBinding(): DataBinding;
    /**
     * get histograms from bind group
     * @param groupRef id string or object that contain groupid property
     * @param returnVisibleModel the flag to determine if only return visible models
     * @param returnId set if only return id of histogram instead of histogram instance
     * @returns shapes array of histograms
     */
    getRelatedHistogramsByGroup(groupRef: MultiHistograms.Group | string, returnVisibleModel?: boolean, returnId?: boolean): Histogram[] | null;
    /**
     * get location of limits group
     * @param groupRef id string or object that contain groupid property
     * @returns location of group
     */
    getLocationOfGroup(groupRef: MultiHistograms.Group | string): AnnotationLocation;
    /**
     * get the id of groups which histogram belong to
     * @param shape the histogram in the group
     * @returns group id id of groups contain the histogram
     */
    getGroupIdByHistogram(shape: Histogram): MultiHistograms.GroupId;
    /**
     * return visual(could be not real limit get from shape's getModelLimits method) model limits of histogram in widget
     * @param shape histogram reference
     * @returns limits copy of visual model limits
     */
    getHistogramModelLimits(shape: Histogram | string): Rect | null;
    /**
     * get the shared model limits of limits group
     * @param groupRef id string or object that contain groupid property
     * @returns limits copy of shared model limits
     */
    getGroupModelLimits(groupRef: MultiHistograms.Group | string): Rect | null;
}
export declare namespace MultiHistograms {
    type Options = AnnotatedWidget.Options & {
        /**
         * options for setting header of widget
         */
        header?: HeaderOptions;
        /**
         * default width when adding new vertical axis
         */
        axiswidth?: number;
        /**
         * default height when adding new horizontal axis
         */
        axisheight?: number;
        /**
         * options for setting gaps between annotations and center model
         */
        annotationsgaps?: GapsOptions;
        /**
         * auto modify the size of annotation based on the total size of component in the annotation
         */
        autoannotationsize?: boolean;
        /**
         * options for tools setting, see details in setToolsOptions method
         */
        tools?: ToolsOptions;
        /**
         * if set viewcache for the widget
         */
        viewcache?: boolean;
        /**
         * viewcache size
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
     * axes options
     */
    type AddHistogramAxes = {
        /**
         * x axis for histogram, by default add axis with AdaptivetickGenerator, null means not add x axis
         */
        xaxis?: Axis.Options;
        /**
         * y axis for histogram, by default add axis with HistogramTickGenerator, null means not add y axis
         */
        yaxis?: Axis.Options;
    };
    /**
     * options of axis or axis instance
     */
    type GroupAxisOptions = {
        linestyle?: LineStyle.Type;
        textstyle?: TextStyle.Type;
        baselinestyle?: LineStyle.Type;
        tickgenerator?: any;
        axis?: any;
        /**
         * width or height of axis component
         */
        length?: number;
        /**
         * set if flip the axis
         */
        flip?: boolean;
        /**
         * set if the axis serve for showing accumulative value in histogram accumulative mode
         * See {@link @int/geotoolkit/scene/AnnotatedNode~AnnotatedNode#createAxis} for other properties' definition.
         */
        accumulative?: boolean;
        title?: Text.Options;
    };
    /**
     * to refer to group and related object
     */
    type Group = {
        /**
         * group id
         */
        groupid?: string;
    };
    /**
     * options
     */
    type OptionsBase = {
        /**
         * options for setting header of widget
         */
        header?: HeaderOptions;
        /**
         * default width when adding new vertical axis
         */
        axiswidth?: number;
        /**
         * default height when adding new horizontal axis
         */
        axisheight?: number;
        /**
         * options for setting gaps between annotations and center model, see details in setGaps method
         */
        annotationsgaps?: GapsOptions;
        /**
         * auto modify the size of annotation based on the total size of component in the annotation
         */
        autoannotationsize?: boolean;
        annotationssizes?: AnnotatedWidget.AnnotationSize;
        /**
         * options for tools setting, see details in setToolsOptions method
         */
        tools?: ToolsOptions;
    };
    type AxisOptionsOut = {
        /**
         * width of vertical axis or height of horizontal axis
         */
        length?: number;
        /**
         * get if flip the axis
         */
        flip?: boolean;
        /**
         * get if axis serve accumulative histograms
         * the rest params could be seen from getProperties method of axis object in details
         */
        accumulative?: boolean;
    } & Axis.OptionsOut;
    /**
     * axis options
     */
    type AxisOptions = {
        /**
         * tickgenOptions options to configure tickgenerator of axis, see setProperties method of related tickgenerator for details
         */
        tickgenerator?: TickGenerator | AdaptiveTickGenerator.Options;
        /**
         * width of vertical axis or height of horizontal axis
         */
        length?: number;
        /**
         * check if flip the axis other params could be seen in the definition of axis setOptions methods
         */
        flip?: boolean;
    } | null;
    type OptionsOut = AnnotatedWidget.OptionsOut & {
        /**
         * get header properties, see details in getHeaderOptions method
         */
        header?: HeaderOptionsOut;
        /**
         * default width for vertical axis
         */
        axiswidth?: number;
        /**
         * default height for horizontal axis
         */
        axisheight?: number;
        /**
         * get if auto modify the annotation size based on the total size of component
         */
        autoannotationsize?: boolean;
        /**
         * tools options
         */
        tools?: AnnotatedWidget.ToolsOptionsOut & {
            axisselection?: MultiHistograms.AxisSelectionOptionsOut;
            southscroll?: AbstractScroll.OptionsOut;
        };
    };
    /**
     * options
     */
    type HeaderOptions = {
        /**
         * object to describe the properties for header text.For details, see setProperties method of {@link @int/geotoolkit/scene/shapes/Text~Text} object
         */
        title?: Text.Options;
    };
    /**
     * header options
     */
    type HeaderOptionsOut = {
        /**
         * title options
         */
        title: Text.OptionsOut;
    };
    /**
     * options
     */
    type ToolsOptions = AnnotatedWidget.ToolsOptions & {
        /**
         * options for set up selection on axis, see details in setAxisSelection method
         */
        axisselection?: AxisSelectionOptions;
        /**
         * options for set up vertical scroll bar for south annotation, see details in setAnnotationsScrollBar method
         */
        southscroll?: ScrollBarOptions;
    };
    /**
     * tools options
     */
    type ToolsOptionsOut = AnnotatedWidget.ToolsOptionsOut & {
        /**
         * get axis selection options, see details in the getAxisSelectionOptions method
         */
        axisselection?: AxisSelectionOptionsOut;
        /**
         * get south scroll bar options ,see details in the getAnnotationScrollBarOptions method
         */
        southscroll?: AbstractScroll.OptionsOut;
    };
    /**
     * options
     */
    type AxisSelectionOptions = {
        /**
         * flag to enable axis selection
         */
        enabled?: boolean;
        /**
         * fillstyle for background of axis
         */
        highlightstyle?: FillStyle.Type;
    };
    type AxisSelectionOptionsOut = {
        /**
         * get if enabled axis selection
         */
        enabled?: boolean;
        /**
         * get highlight style options
         */
        highlightstyle?: FillStyle.OptionsOut;
    };
    /**
     * options
     */
    type ScrollBarOptions = {
        /**
         * height for horizontal scroll bar or width for vertical scroll bar
         */
        size?: number;
        /**
         * flag to set visibility of scroll bar
         */
        visible?: boolean;
        /**
         * properties for setting scroll bar
         */
        options?: AbstractScroll.Options;
    };
    /**
     * options
     */
    type GapsOptions = {
        /**
         * desired height for axis in south annotation
         */
        south?: number;
        /**
         * desired width for axis in west annotation
         */
        west?: number;
        /**
         * desired width for axis in east annotation
         */
        east?: number;
    };
    type GroupId = {
        east?: string;
        west?: string;
        south?: string;
    };
    type EventMap = AnnotatedWidget.EventMap & {
        [Events.AxisSelected]: {
            location: AnnotationLocation;
            histogram: any;
            group: any;
        };
        [Events.HistogramsSelected]: string | string[] | Histogram | Histogram[];
        [Events.BinsSelected]: {
            histograms: any;
            bins: any;
        };
        [Events.DataUpdated]: {
            event: string;
            src: any;
        };
    };
}
