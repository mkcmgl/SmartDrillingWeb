import type { Merge } from '@int/geotoolkit/base';
import { DataTableView } from '@int/geotoolkit/data/DataTableView';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Direction } from '@int/geotoolkit/layout/HorizontalPriorityLayout';
import { LegendPosition } from '@int/geotoolkit/widgets/timeseries/LegendPosition';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { ScrollBarType } from '@int/geotoolkit/widgets/timeseries/ScrollBarType';
import { TimeZone } from '@int/geotoolkit/axis/TimeZone';
import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import { Locale } from '@int/geotoolkit/util/Locale';
import { Events } from '@int/geotoolkit/widgets/timeseries/Events';
import { FillDirection } from '@int/geotoolkit/widgets/timeseries/FillDirection';
import { FillType } from '@int/geotoolkit/widgets/timeseries/FillType';
import { ButtonWidget } from '@int/geotoolkit/widgets/buttonwidget';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Group } from '@int/geotoolkit/scene/Group';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { Zoom } from '@int/geotoolkit/controls/tools/Zoom';
import { Range } from '@int/geotoolkit/util/Range';
import { VisibleRangeChangeEventArgs } from '@int/geotoolkit/widgets/VisibleRangeChangeEventArgs';
import { CrossHair } from '@int/geotoolkit/controls/tools/CrossHair';
import { RubberBand } from '@int/geotoolkit/controls/tools/RubberBand';
import { Selection } from '@int/geotoolkit/controls/tools/Selection';
import { TimeSeriesLine } from '@int/geotoolkit/widgets/timeseries/TimeSeriesLine';
import { Panning } from '@int/geotoolkit/controls/tools/Panning';
import { Point } from '@int/geotoolkit/util/Point';
import { SelectionChangeEventArgs } from '@int/geotoolkit/widgets/SelectionChangeEventArgs';
import { TimeSeriesObject } from '@int/geotoolkit/widgets/timeseries/TimeSeriesObject';
import { TimeSeriesObjectGroup } from '@int/geotoolkit/widgets/timeseries/TimeSeriesObjectGroup';
import { PdfExport } from '@int/geotoolkit/pdf/PdfExport';
import { SpeedCompression } from '@int/geotoolkit/pdf/SpeedCompression';
import { IWritable } from '@int/geotoolkit/util/stream/IWritable';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { Format } from '@int/geotoolkit/util/Format';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import type { HeaderComponent } from '@int/geotoolkit/scene/exports/HeaderComponent';
import type { FooterComponent } from '@int/geotoolkit/scene/exports/FooterComponent';
import type { NodeOrder } from '@int/geotoolkit/scene/CompositeNode';
import type { ImageCompression } from '@int/geotoolkit/pdf/ImageCompression';
import type { TimeSeriesObjectBase } from '@int/geotoolkit/widgets/timeseries/TimeSeriesObjectBase';
import type { EmbededFont } from '@int/geotoolkit/pdf/EmbededFont';
import type { Shape } from '@int/geotoolkit/scene/shapes/Shape';
import type { HVBaseScroll } from '@int/geotoolkit/controls/tools/scroll/HVBaseScroll';
/**
 * The time series widget plots data points horizontally along a time axis. It inherits from BaseWidget.
 * Curves are added to the widget by calling the addCurve() function:
 * <ul>
 * <li> name -- curve name </li>
 * <li> uri -- unique dataset id </li>
 * <li> data -- {@link @int/geotoolkit/data/DataTableView~DataTableView} </li>
 * <li> properties //visual properties </li>
 * </ul>
 * insertCurve() function is used to insert a curve at a particular position or order.<br>
 * setVisibleRange() can be used to set the visiblemodellimits programmatically <br>
 * In addition to plotting the data, the widget also supports fills via the addFill() function and annotations via addAnnotation() and addAnnotationLine() functions.
 * <br>
 * Configuring the various options of the widget can be achieved by calling setOptions().<br>
 * Selection is handled in the application by using the onSelectionChanged event.
 *
 * Some of the default tools are available to support:
 * <ul>
 *  <li>Zoom</li>
 *  <li>Crosshair</li>
 *  <li>Rubberband</li>
 *  <li>Selection</li>
 *  <li>Panning</li>
 * </ul>
 * @example
 * import {Group} from '@int/geotoolkit/scene/Group';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * import {TimeSeriesWidget} from '@int/geotoolkit/widgets/TimeSeriesWidget';
 * // Initialize widget
 * const options = {
 *     'title': {
 *         'visible': false
 *     },
 *     'model': new Group()
 *         .setModelLimits(new Rect(startDate, 0, endDate, 1)),
 *     'curveaxis': {
 *         'visible': true,
 *         'autocoloraxis': true,
 *         'autocolorlabel': true,
 *         'titlevisible': true,
 *         'axiswidth': 30,
 *         'compact': true
 *     },
 *     'curvelimits': {
 *         'visible': false
 *     }
 * };
 * const widget = new TimeSeriesWidget(options);
 * // Add Data/Curve to the widget
 * widget.addCurve({
 *      'name': 'CALI',
 *      'uri': '//test//cali',
 *      'data': dataTableView,          // @int/geotoolkit/data/DataTableView
 *      'properties': {
 *          'autoscale': true,
 *          'axisautolabelrotation': true,   // curve properties can be modified here as well.
 *          'neatlimits': true,
 *          'unit': 'INS',
 *          'linestyle': {
 *              'color': 'blue',
 *              'width': 2
 *          }
 *      }
 *  });
 */
export declare class TimeSeriesWidget extends BaseWidget {
    getToolByName<T extends keyof TimeSeriesWidget.Tools>(toolName: T): TimeSeriesWidget.Tools[T];
    constructor(options?: TimeSeriesWidget.Options);
    on<E extends keyof TimeSeriesWidget.EventMap>(type: E, callback: (eventType: E, sender: this, args: TimeSeriesWidget.EventMap[E]) => void): this;
    off<E extends keyof TimeSeriesWidget.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: TimeSeriesWidget.EventMap[E]) => void): this;
    notify<E extends keyof TimeSeriesWidget.EventMap>(type: E, source: TimeSeriesWidget, args?: TimeSeriesWidget.EventMap[E]): this;
    /**
     * Sets locale
     * @param locale locale
     */
    setLocale(locale: Locale): this;
    /**
     * Returns Current Locale
     */
    getLocale(): Locale;
    /**
     * Initializes layout of this widget
     */
    initializeLayout(): Group;
    /**
     * Initializes default tools used by this widget
     */
    protected initializeTools(): this;
    /**
     * Select Curve By ID. The widget will trigger the event TimeSeriesWidget.Events.onSelectionChanged, if the selection has changed.
     * @param id (null to deselect)
     */
    selectCurveById(id: string): void;
    /**
     * Gets properties from this widget (same as getOptions)
     *
     * @returns properties options
     */
    getProperties(): TimeSeriesWidget.OptionsOut;
    /**
     * Gets options from this widget
     *
     * @returns options
     */
    getOptions(): TimeSeriesWidget.OptionsBase;
    /**
     * Sets Properties
     * @param properties object containing widget options
     * @returns this
     */
    setProperties(properties?: TimeSeriesWidget.Options): this;
    /**
     * Sets options
     * @param [options] object containing widget options
     * @returns this
     * @example
     * // To configure margins/white space in the canvas
     * widget.setOptions({
     *   // [top, right, bottom, left]
     *   'margin': [0, 0, 0, 0]
     * });
     * @example
     * widget.setOptions({'selectionstrategy': (widget, newSelection, oldSelection) => { ... }});
     * @example
     * // To format tooltip data
     * widget.setOptions({
     *       'tooltips': {
     *           'tooltipoptions': {
     *               'formatdatahandler': (data) => (
     *                   {
     *                       'name': data['name'],
     *                       'symbol': data['symbol'],
     *                       'valuetext': data['valuetext'],
     *                       'unittext':  data['id'] === 'Delta' ? ' ft' + ' degF' : data['unittext']
     *                   }}
     *               }
     *           }
     *       }
     *   });
     */
    setOptions(options?: TimeSeriesWidget.Options): this;
    /**
     * Set time series stack area mode
     * @param [stack] Stack TimesSeriesWidget settings
     * @returns this
     */
    setStackMode(stack?: TimeSeriesWidget.StackMode): this;
    /**
     * Get stack mode settings
     * @returns Stack TimesSeriesWidget settings
     */
    getStackMode(): TimeSeriesWidget.StackModeOut;
    /**
     * Set time series percent mode
     * @param [percent] Percent TimesSeriesWidget settings
     * @returns this
     */
    setPercentMode(percent?: TimeSeriesWidget.PercentMode): this;
    /**
     * Get percent mode settings
     * @returns Percent TimesSeriesWidget settings
     */
    getPercentMode(): TimeSeriesWidget.PercentModeOut;
    /**
     * Set bar mode
     * @param [barMode] Options for bar mode
     * @returns this
     */
    setBarMode(barMode?: TimeSeriesWidget.BarMode): this;
    /**
     * Get bar mode
     * @returns Options for bar mode
     */
    getBarMode(): TimeSeriesWidget.BarModeOut;
    /**
     * Highlight bars
     * @param highlightBars Array of bars to highlight
     * @returns this
     * @example
     * const highlightBars = [{
     *      // highlight bar at index 2 of series 0
     *      'datapointindex': 2,
     *      'lineindex': 0
     * }, {
     *      // highlight bar at index 4 of series 0
     *      'datapointindex': 4,
     *      'lineindex': 0
     * }, {
     *      // highlight bar at index 3 of series 1
     *      'datapointindex': 3,
     *      'lineindex': 1
     * }];
     * this.highlightBars(highlightBars);
     */
    highlightBars(highlightBars: TimeSeriesWidget.BarHighlighting[]): this;
    /**
     * Gets all curves id
     */
    getCurves(): string[];
    /**
     * Get TimeSeriesObject by id
     * @param id timeseries object id
     * @example
     * widget.getTimeSeriesObjectById(id).setAxisOptions({'visible': false});
     */
    getTimeSeriesObjectById(id: string | number): TimeSeriesObject | null;
    /**
     * retrieve data element with specified id
     *
     * @param id specified id of data element
     */
    getDataById(id: string): AbstractDataTable | null;
    /**
     * Adds a curve to the widget
     * @param name curve name or object containing all parameters
     * @param [uri] curve uri
     * @param [data] DataTableView object for this curve
     * @param [properties] object
     * @param [id] unique id for added curve
     * @returns id unique id for the curve added
     */
    addCurve(name: string | TimeSeriesWidget.CurveOptions, uri?: string, data?: DataTableView, properties?: TimeSeriesWidget.CurveProperties, id?: string): string;
    /**
     * Inserts a curve to the widget at a desired position.
     * @param name curve name or object containing all parameters
     * @param [uri] dataset uri
     * @param [data] DataTableView object for this curve
     * @param [properties] object
     * @param [position] desired position of curve in TimeSeriesWidget.getCurves()
     * @param [id] desired id of curve, defaults to uri if unspecified
     * @returns id unique id for the curve added
     */
    insertCurve(name: string | TimeSeriesWidget.CurveOptions, uri?: string, data?: DataTableView, properties?: TimeSeriesWidget.CurveProperties, position?: number, id?: string): string;
    /**
     * Adds an array of curves
     * @param curves Array of objects containing curve definitions
     * @returns Array of curve ids added or -1 if no curves added
     */
    addCurves(curves: TimeSeriesWidget.CurveOptions[]): string[] | number;
    /**
     * Inserts an array of curves
     * @param curves Array of objects containing curve definitions
     * @returns array of curve ids added or -1 if no curves added
     */
    insertCurves(curves: TimeSeriesWidget.CurveOptions[]): string[] | number;
    /**
     * Internal method of creating TS object
     * @param curveData object containing curve definitions
     * @param silent flag for adding curves silently
     * @param [axisOnly] if only axis need to create
     * @returns timeseriesobject created
     */
    protected createTimeSeriesObject(curveData: TimeSeriesWidget.CurveOptions, silent: boolean, axisOnly?: boolean): TimeSeriesObject;
    /**
     * Associates the horizontal grid with a curve.
     * If null is passed in or curve is not found, it defaults to the first curve
     * @param curveId unique curve id
     * @returns this
     */
    setHorizontalGridCurveReference(curveId: string): this;
    /**
     * Add a fill to a curve(id1)
     * @param id1 (From curve)
     * @param id2 (To curve/referenceline/null)
     * @param fillStyle the fill style
     * @param fillType fill type
     * @param fillDirection Direction of the fill
     * @param [targetCurveId] target curve id to associate fill with
     */
    addFill(id1: string, id2: string | number | null, fillStyle: FillStyle | string | FillStyle.Options, fillType: FillType, fillDirection: FillDirection, targetCurveId?: string): void;
    /**
     * Removes a fillstyle associated with a curve in a specific direction
     * @param curveId curve id for which fillstyle is to be removed
     * @param filldirection direction of the fill
     */
    removeCurveFill(curveId: string, filldirection: FillDirection): void;
    /**
     * Gets both top and bottom fillstyles associated with curve
     * @param curveId unique curve id
     * @returns object containing top and bottom fillstyles of curve
     */
    getCurveFills(curveId: string): Partial<Record<FillDirection, TimeSeriesObject.FillData>> | null;
    /**
     * Get the fill style associated with a curve in a specific direction
     * @param curveId unique curve id
     * @param filldirection direction on the fill
     * @returns fillstyle
     */
    getCurveFillStyle(curveId: string, filldirection: FillDirection): null | FillStyle;
    /**
     * Removes a curve
     * @param id array of curve ids
     * @returns this
     */
    removeCurve(id: string | string[]): this;
    /**
     * Gets properties of a curve
     * @param id id of the curve to get properties
     * @returns properties object contains properties of the curve having that id
     */
    getCurveProperties(id: string): TimeSeriesObject.CurveOptionsOut | null;
    /**
     * Sets model padding style
     * @param modelOffsets model offsets
     * @returns this
     */
    setModelOffsets(modelOffsets: TimeSeriesWidget.ModelOffsets | string | number | null): this;
    /**
     * Return model offsets
     * @returns model offsets
     */
    getModelOffsets(): TimeSeriesWidget.ModelOffsets | null;
    /**
     * Rebuilds all layers
     * @returns this
     */
    rebuildLayers(): this;
    /**
     * Gets the model range
     */
    getRange(): Range;
    /**
     * Sets the model range
     *
     * @param range the model range
     * @returns this
     */
    setRange(range: Range): this;
    /**
     * Gets the visible model range
     *
     * @returns range
     */
    getVisibleRange(): Range;
    /**
     * Sets the visible model range
     * If the range is less than 1ms the range will be expanded and applied within the model's range
     * If the model's limits are less than the minimum range, the range will be set to the model's limits
     * @param range visible model range
     * @returns this
     */
    setVisibleRange(range: Range): this;
    /**
     * Translates widget's contents
     *
     * @param dx - x translate
     * @returns this
     */
    translateModel(dx: number): this;
    /**
     * Scale widget's contents
     *
     * @param scaleX x scale factor
     * @returns this
     */
    scaleModel(scaleX: number): this;
    /**
     * Zoom in with default factor
     * @see {@link import("geotoolkit/widgets/TimeSeriesWidget").TimeSeriesWidget.scaleModel} to set desired factor
     * @returns this
     */
    zoomIn(): this;
    /**
     * Zoom out with default factor
     * @see {@link import("geotoolkit/widgets/TimeSeriesWidget").TimeSeriesWidget.scaleModel} to set desired factor
     * @returns this
     */
    zoomOut(): this;
    /**
     * Fits bounds to model limits
     *
     * @returns this
     */
    fitToBounds(): this;
    /**
     * Add Annotation Line
     * @param options JSON for annotation properties
     * @returns id
     */
    addAnnotationLine(options: TimeSeriesWidget.AnnotationLineOptions): string;
    /**
     * Add Annotation Line Group.
     * @param optionsArray array of options of JSON for annotation properties
     * @see {@link import("geotoolkit/widgets/TimeSeriesWidget").TimeSeriesWidget.addAnnotationLine} for options description
     * @returns the group id (or null if an array was not passed in)
     */
    addAnnotationLineCollection(optionsArray: TimeSeriesWidget.AnnotationLineOptions[]): string | null;
    /**
     * Remove annotation line
     * @param id annotation id
     * @returns this
     */
    removeAnnotationLine(id: string): this;
    /**
     * Remove annotation line collection by ID.
     * @param id annotation line collection id
     * @returns this
     */
    removeAnnotationLineCollection(id: string): this;
    /**
     * Edit annotation line
     * @param id annotation id
     * @param options JSON for annotation options
     * @returns id
     */
    editAnnotationLine(id: string, options: Pick<TimeSeriesWidget.EditAnnotation, keyof TimeSeriesWidget.AnnotationLineOptions>): string;
    /**
     * add an Annotation object at the specific point : [curveid, time]
     * note: it will try to find the nearest point at the specific time.
     *
     * @param options json object that represents the annotation options
     * @returns id of the created Annotation object or null if it cannot be inserted at the following time
     */
    addAnnotation(options: TimeSeriesWidget.AddAnnotationOptions): string | null;
    /**
     * @param id annotation id
     * @param options annotation options
     */
    editAnnotation(id: string, options: TimeSeriesWidget.EditAnnotation): string;
    /**
     * remove annotation with the specified id.
     *
     * @param id of the annotation to remove
     * @returns this
     */
    removeAnnotation(id: string): this;
    /**
     * Gets properties of the annotation line
     * @param id id of annotation line to get properties
     * @returns JSON that contains all properties of the annotation line
     */
    getAnnotationLineProperties(id: string): TimeSeriesWidget.AnnotationLineOptionsOut;
    /**
     * Gets properties of the annotation
     * @param id id of annotation line to get properties
     * @returns JSON that contains all properties of the annotation line
     */
    getAnnotationProperties(id: string): TimeSeriesWidget.AnnotationOptionsOut | TimeSeriesWidget.AnnotationLineOptionsOut;
    /**
     * @param curve id of curve to re-ordered
     * @param order type of node re-ordering
     * @param [anchor] id of anchor for re-ordering
     * @returns this
     */
    changeVisualOrder(curve: string, order: NodeOrder, anchor?: string): this;
    /**
     * Add a time series group, which shares axis and limits only
     * @param id group id
     * @param [curveIDs] curve ids
     * @param [min] min
     * @param [max] max
     * @param [options] See TimeSeriesObject axis options
     * @returns id
     */
    createGroup(id: TimeSeriesWidget.GroupOptions | string, curveIDs?: string[], min?: number, max?: number, options?: TimeSeriesObjectBase.AxisOptions): null | string;
    /**
     * Remove a timeseries group
     * @param groupid group id
     * @returns this
     */
    removeGroup(groupid: string): this;
    /**
     * Get TimeSeriesObjectGroup by ID
     * @param groupid group id
     */
    getGroupById(groupid: string): TimeSeriesObjectGroup | null;
    /**
     * Returns visual layer
     */
    getVisualFrontLayer(): Group;
    /**
     * Returns visual layer
     */
    getVisualBackLayer(): Group;
    /**
     * Exports the widget content as a PDF file
     * @param [options] PDF options
     * @returns promise with output stream
     */
    exportToPDF(options?: TimeSeriesWidget.ExportToPDFOptions): Promise<IWritable>;
    /**
     * Perform hit test on Time Series curve and get curve data
     * @param devicePoint Mouse coordinate in deivce space
     * @returns Array of curveData Curve data
     */
    hitTest(devicePoint: Point): TimeSeriesWidget.CurveData[];
    /**
     * Returns Button widget contains 'Now' button
     */
    getNowButtonWidget(): ButtonWidget;
    /**
     * Returns Button widget contains 'Scales' buttons
     */
    getScalesButtonWidget(): ButtonWidget;
}
export declare namespace TimeSeriesWidget {
    export type Options = BaseWidget.Options & OptionsBase;
    /**
     * selection event arguments
     */
    export type NotifySelection = {
        /**
         * selection id
         */
        id: string;
        /**
         * selection type
         */
        type?: string;
    };
    export type OptionsOut = BaseWidget.OptionsOut & Required<OptionsBase>;
    /**
     * object containing widget options
     */
    export type OptionsBase = {
        viewcache?: boolean;
        /**
         * Timeseries' center model limits can be specified using this option
         */
        model?: Group;
        /**
         * automodellimits mode
         */
        automodellimitsmode?: boolean;
        /**
         * align axis
         */
        alignaxis?: boolean;
        /**
         * array of margins of this widget [top, right, bottom, left]
         */
        margin?: number[];
        /**
         * JSON which defines title area
         */
        title?: {
            /**
             * visibility of title text
             */
            visible?: boolean;
            /**
             * height of title
             */
            height?: number;
            /**
             * title text
             */
            text?: string;
            /**
             * title text font
             */
            font?: string;
            /**
             * title text color
             */
            color?: string;
            /**
             * centers title text
             */
            centered?: boolean;
            /**
             * array of padding for title text
             */
            padding?: number[];
        };
        /**
         * JSON which defines legends area
         */
        legends?: {
            /**
             * direction of legends (left-to-right, right-to-left)
             */
            direction?: Direction;
            /**
             * visibility of legends area
             */
            visible?: boolean;
            /**
             * Outside/Inside model
             */
            position?: LegendPosition;
            /**
             * aligns the legendcontainer with the centermodel when positioned outside
             */
            alignwithcentermodel?: boolean;
            /**
             * legends area height
             */
            height?: number;
            /**
             * if positioned inside, container width
             */
            width?: number;
            /**
             * legend text margin left and right
             */
            margintext?: number;
            linestyle?: LineStyle.Type;
            fillstyle?: FillStyle.Type;
            /**
             * legends area bottom margin (outside only)
             */
            marginbottom?: number;
            /**
             * legend's text label color
             */
            autocolorlabel?: boolean;
            /**
             * JSON which defines legend options
             */
            legendoptions?: TimeSeriesObject.LegendOptions;
        };
        /**
         * JSON which defines last update date area
         */
        lastupdatedate?: {
            /**
             * visibility of the last update date area
             */
            visible?: boolean;
            /**
             * false means the last data time will be displayed and true means the cursor position data time will be displayed
             */
            followcursor?: boolean;
            /**
             * last update date text font
             */
            font?: string;
            /**
             * last update date text color
             */
            color?: string;
            /**
             * visible range text formatter
             */
            formatter?: string | FormatHandler;
        };
        curve?: TimeSeriesObject.CurveOptions;
        /**
         * JSON which defines curve limits area
         */
        curvelimits?: TimeSeriesObject.CurveLimitsOptions;
        /**
         * JSON which defines curve axis
         */
        curveaxis?: TimeSeriesObjectBase.AxisOptions;
        /**
         * JSON which defines curve highlighting symbol
         */
        curvesymbol?: TimeSeriesObject.SymbolOptions;
        /**
         * JSON which contains 'horizontaltickgenerator' and 'verticaltickgenerator'
         */
        modelgrid?: {
            /**
             * Horizontal tickgenerator for the model grid. (Horizontal reference curve takes precedence over this option). Default is an instance of {@link @int/geotoolkit/axis/AdaptiveTickGenerator~AdaptiveTickGenerator}
             */
            horizontaltickgenerator?: TickGenerator;
            /**
             * Vertical tickgenerator for the model grid (default visibility of ticks is false). Default is an instance of {@link @int/geotoolkit/axis/AdaptiveDateTimeTickGenerator~AdaptiveDateTimeTickGenerator}
             */
            verticaltickgenerator?: TickGenerator;
            /**
             * JSON defining horizontal gridline visibility
             */
            horizontalvisibility?: {
                major?: boolean;
                minor?: boolean;
                edge?: boolean;
            };
            /**
             * JSON defining vertical gridline visibility
             */
            verticalvisibility?: {
                major?: boolean;
                minor?: boolean;
                edge?: boolean;
            };
        };
        /**
         * JSON which defines axis inside model
         */
        modelaxis?: {
            /**
             * visiblility of the axis inside model
             */
            visible?: boolean;
            /**
             * tick generator for the axis inside model
             */
            tickgenerator?: TickGenerator;
            /**
             * base linestyle for the model axis
             */
            baselinestyle?: LineStyle;
        };
        /**
         * JSON which defines south axis
         */
        southaxis?: {
            /**
             * visibility of south axis
             */
            visible?: boolean;
            /**
             * south axis height
             */
            height?: number;
            /**
             * south axis label font
             */
            font?: string;
            /**
             * south axis label color
             */
            color?: string;
            /**
             * tick generator for south axis. Default is an instance of {@link @int/geotoolkit/axis/AdaptiveDateTimeTickGenerator~AdaptiveDateTimeTickGenerator}
             */
            tickgenerator?: TickGenerator;
        };
        /**
         * JSON which defines visible range area
         */
        visiblerange?: {
            /**
             * visibility of visible range area
             */
            visible?: boolean | {
                /**
                 * visibility of min range area
                 */
                min?: boolean;
                /**
                 * visibility of max range area
                 */
                max?: boolean;
            };
            /**
             * visible range area height
             */
            height?: number;
            /**
             * visible range text font
             */
            font?: string;
            /**
             * visible range text color
             */
            color?: string;
            /**
             * visible range text formatter
             */
            formatter?: string | FormatHandler;
        };
        /**
         * JSON which defines the interval buttons
         */
        intervalbuttons?: {
            /**
             * visibility of the interval buttons
             */
            visible?: boolean;
            /**
             * JSON which defines the text and scale value of each interval button
             */
            intervals?: Record<string, number>;
        };
        /**
         * JSON which defines the now button
         */
        scrolltonowbutton?: {
            /**
             * visibility of the now button
             */
            visible?: boolean;
        };
        /**
         * cursor tool options
         */
        cursor?: {
            /**
             * defines linestyle for timeseries cursor tool
             */
            linestyle?: LineStyle.Type;
        };
        /**
         * JSON which defines scroll bar area
         */
        scrollbar?: {
            /**
             * visibility of scroll bar area
             */
            visible?: boolean;
            /**
             * scroll type or className. for className use {@link @int/geotoolkit/controls/tools/scroll/ScrollFactory~ScrollFactory#registerScrollbar} first
             */
            type?: ScrollBarType | string;
            /**
             * scroll bar area height
             */
            height?: number;
            tickgenerator?: TickGenerator;
            /**
             * Additional options to use for scrollbar (this depends on the options the specific scrollbar accepts)
             */
            options?: HVBaseScroll.Options & {
                /**
                 * scroll bar text font
                 */
                font?: string;
                /**
                 * scroll bar text color
                 */
                color?: string;
                /**
                 * scroll bar text formatter
                 */
                formatter?: string;
            };
        };
        /**
         * json defining tooltips
         */
        tooltips?: {
            /**
             * tooltip visibility
             */
            visible?: boolean;
            /**
             * linestyle of tooltip box
             */
            linestyle?: LineStyle;
            /**
             * fillstyle of tooltip box
             */
            fillstyle?: FillStyle.Type;
            /**
             * border linestyle of tooltip symbol
             */
            symbollinestyle?: LineStyle;
            /**
             * radius of tooltip selection visibility
             */
            selectionradius?: number;
            /**
             * JSON which defines tooltip options
             */
            tooltipoptions?: TimeSeriesObject.TooltipItemOptions & {
                index?: {
                    /**
                     * visibility of the index tooltip
                     */
                    visible?: boolean;
                    /**
                     * text color
                     */
                    textcolor?: string;
                    /**
                     * symbol shape
                     */
                    symbol?: SymbolShape;
                    /**
                     * name of the index
                     */
                    name?: string;
                    /**
                     * index text
                     */
                    indextext?: string;
                    /**
                     * index unit
                     */
                    unittext?: string;
                    /**
                     * formatter
                     */
                    formatter?: Format;
                };
            };
        };
        /**
         * Threshold distance indevice space, from vertical cursor line to show symbol, update legend and show tooltip
         */
        cursorselectionlimit?: number;
        /**
         * UTC or local time
         */
        timezone?: TimeZone;
        /**
         * selection strategy to set
         */
        selectionstrategy?: SelectionStrategyCallback;
        /**
         * Stack TimesSeriesWidget settings
         */
        stack?: StackMode;
        /**
         * Percent TimesSeriesWidget settings
         */
        percent?: PercentMode;
        /**
         * Options for bar mode
         */
        barmode?: BarMode;
        /**
         * Options for model padding offsets
         */
        modeloffsets?: ModelOffsets;
    };
    export type CurveProperties = Omit<TimeSeriesObject.CurveOptions, 'title' | 'microposition'> & TimeSeriesObjectBase.AxisOptions & {
        id?: string;
    };
    /**
     * Stack TimesSeriesWidget settings
     */
    export type StackMode = {
        /**
         * True to enable time series stack area mode, false otherwise
         */
        enabled?: boolean;
        /**
         * Stack time series fill styles, key of each fill style is curve id
         */
        fillstyles?: {
            [key: string]: RgbaColor;
        };
    };
    /**
     * Stack TimesSeriesWidget settings
     */
    export type StackModeOut = Required<StackMode>;
    /**
     * Percent TimesSeriesWidget settings
     */
    export type PercentMode = {
        /**
         * True to enable time series percent mode, false otherwise
         */
        enabled?: boolean;
        /**
         * Percent mode time series fill styles, key of each fill style is curve id
         */
        fillstyles?: {
            [key: string]: RgbaColor;
        };
        /**
         * Tooltip option for percentage mode
         */
        tooltip?: {
            /**
             * True to show original value along side with percentage
             */
            showoriginalvalue?: boolean;
        };
    };
    /**
     * Percent TimesSeriesWidget settings
     */
    export type PercentModeOut = Required<PercentMode>;
    /**
     * Callback for renderingOrder
     */
    export type BarRenderingOrderCallback = (valueOrderPairs: BarValueOrderPair[]) => BarValueOrderPair[];
    /**
     * Callback for highlighting method
     */
    export type BarHighlightingCallback = (highlightBar: BarHighlighting, linestyle: LineStyle, fillstyle: FillStyle) => BarHighlightingStyle;
    /**
     * Defines value order pair
     */
    export type BarValueOrderPair = {
        /**
         * The original rendering order of the series
         */
        order: number;
        /**
         * Value of bar
         */
        value: number;
        /**
         * Height of bar in model space
         */
        height: number;
    };
    /**
     * Bar to highlight
     */
    export type BarHighlighting = {
        /**
         * Index of data in x coordinate
         */
        datapointindex: number;
        /**
         * Index of curve
         */
        lineindex: number;
    };
    /**
     * Defines bar highlighting style
     */
    type BarHighlightingStyle = {
        /**
         * Line style of series for highlighted bar
         */
        linestyle: LineStyle;
        /**
         * Fill style of series for highlighted bar
         */
        fillstyle: FillStyle;
    };
    /**
     * Options for bar mode
     */
    export type BarMode = {
        /**
         * Determine rendering order of
         * each bar. By default, bars will be rendered in the order of bar series when it was added
         */
        renderingorder?: TimeSeriesWidget.BarRenderingOrderCallback;
        /**
         * Bar highlighting method
         */
        highlightingmethod?: TimeSeriesWidget.BarHighlightingCallback;
        /**
         * Bar values visible distance in device space of TimeSeriesBar
         */
        barvaluevisibility?: boolean | number;
    };
    /**
     * Options for bar mode
     */
    export type BarModeOut = Required<BarMode>;
    export type CurveOptions = {
        curvesymbol?: TimeSeriesObject.SymbolOptions;
        name: string;
        id?: string;
        uri: string;
        data: DataTableView;
        properties: CurveProperties;
        position?: number;
    };
    /**
     * model offsets
     */
    export type ModelOffsets = {
        /**
         * model left offset
         */
        left?: string | number;
        /**
         * model right offset
         */
        right?: string | number;
    };
    export type AnnotationOptionsOut = Merge<Shape.OptionsOut, {
        /**
         * coordinate of the annotation
         */
        point: Point;
        /**
         * annotation label
         */
        label: string;
        /**
         * text style of the annotation
         */
        textstyle: TextStyle.Type;
        /**
         * background of the annotation label
         */
        textbackground: FillStyle.Type;
        /**
         * annotation symbol type
         */
        symbol: string;
        /**
         * symbol line style
         */
        linestyle: LineStyle;
        /**
         * symbol fill style
         */
        fillstyle: FillStyle;
        /**
         * symbol size width and height
         */
        symbolsize: number;
        /**
         * timeseries object
         */
        timeseriesobject: TimeSeriesObject;
    }>;
    export type AnnotationOptions = Shape.Options & {
        /**
         * coordinate of the annotation
         */
        point?: Point;
        /**
         * annotation label
         */
        label?: string;
        /**
         * text style of the annotation
         */
        textstyle?: TextStyle | string | TextStyle.Options;
        /**
         * background of the annotation label
         */
        textbackground?: FillStyle | string | FillStyle.Options;
        /**
         * annotation symbol type
         */
        symbol?: string | SymbolShape.PainterFunction;
        /**
         * symbol line style
         */
        linestyle?: LineStyle;
        /**
         * symbol fill style
         */
        fillstyle?: FillStyle;
        /**
         * symbol size width and height
         */
        symbolsize?: number;
        /**
         * timeseriesobject associated with annotation
         */
        timeseriesobject?: TimeSeriesObject;
    };
    /**
     * json object that represents the annotation options
     */
    export type AddAnnotationOptions = AnnotationOptions & {
        /**
         * curve id to match the poi
         */
        curveid?: string;
        /**
         * time index in model space
         */
        time?: number;
        /**
         * annotation symbol type
         */
        symbol?: string;
    };
    export type AnnotationLineOptions = Shape.Options & {
        /**
         * point
         */
        point?: Point;
        /**
         * text
         */
        text?: string;
        /**
         * text visibility
         */
        textvisible?: boolean;
        /**
         * line visibility
         */
        linevisible?: boolean;
        /**
         * line style
         */
        linestyle?: LineStyle;
        /**
         * fill style
         */
        fillstyle?: FillStyle;
        /**
         * text style
         */
        textstyle?: TextStyle;
        /**
         * alignment
         */
        alignment?: AnchorType;
        /**
         * angle
         */
        angle?: number;
    };
    export type AnnotationLineOptionsOut = Shape.OptionsOut & {
        /**
         * point
         */
        point: Point;
        /**
         * annotation label
         */
        label: string;
        /**
         * text
         */
        text: string;
        /**
         * text visibility
         */
        textvisible: boolean;
        /**
         * line visibility
         */
        linevisible: boolean;
        /**
         * text style
         */
        textstyle: TextStyle;
        /**
         * alignment
         */
        alignment: AnchorType;
        /**
         * angle
         */
        angle: number;
    };
    export type EditAnnotation = Merge<AnnotationOptions, AnnotationLineOptions>;
    /**
     * group id
     */
    export type GroupOptions = TimeSeriesObjectGroup.Options & {
        /**
         * curve ids
         */
        curveids?: string[] | number[];
        /**
         * See TimeSeriesObject axis options
         */
        options?: TimeSeriesObjectBase.AxisOptions;
    };
    /**
     * PDF options
     */
    export type ExportToPDFOptions = {
        /**
         * an optional PDF header
         */
        header?: HeaderComponent;
        /**
         * an optional PDF footer
         */
        footer?: FooterComponent;
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
        limits?: {
            /**
             * start limit by default visible limits
             */
            start?: number;
            /**
             * end limit by default visible limits
             */
            end?: number;
        };
        /**
         * export scale from model index unit to pixels by default as is
         */
        scale?: number;
        /**
         * compression options
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
         * array of embedded fonts
         */
        embededfonts?: EmbededFont[];
        /**
         * optional user-customized Stream object
         */
        pdfstream?: IWritable;
    };
    /**
     * Defines curve data
     */
    export type CurveData = {
        /**
         * Curve id
         */
        id: string;
        /**
         * Curve object
         */
        curve: TimeSeriesLine;
        /**
         * Curve color in css
         */
        color: string;
        /**
         * Curve symbol
         */
        symbol: SymbolShape;
        /**
         * Curve name
         */
        name: string;
        /**
         * Index of x coordinate
         */
        index: number;
        /**
         * Curve x coordinate in model space
         */
        position: number;
        /**
         * Curve y coordinate in model space
         */
        value: number;
        /**
         * Curve value
         */
        originalvalue: number;
        /**
         * Curve value unit
         */
        unit: string;
    };
    type FormatHandler = (value: number) => string;
    export type SelectionStrategyCallback = (widget: TimeSeriesWidget, selection: NotifySelection, oldSelection: NotifySelection) => void;
    export type Tools = {
        'cursor': CrossHair;
        'rubberband': RubberBand;
        'panning': Panning;
        'zoom': Zoom;
        'picking': Selection;
    } & BaseWidget.Tools;
    export type EventMap = Group.EventMap & {
        [Events.onCursorChanged]: Point;
        [Events.onAnnotationClick]: string;
        [Events.onAnnotationLineClick]: string;
        [Events.beforeSelectionChange]: SelectionChangeEventArgs;
        [Events.onSelectionChanged]: SelectionChangeEventArgs;
        [Events.onVisibleRangeChanged]: VisibleRangeChangeEventArgs;
    };
    export {};
}
