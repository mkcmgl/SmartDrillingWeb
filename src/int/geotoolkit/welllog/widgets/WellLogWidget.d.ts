import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { Node } from '@int/geotoolkit/scene/Node';
import type { StateChanges } from '@int/geotoolkit/scene/Node';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { Cache } from '@int/geotoolkit/scene/Cache';
import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import { Range } from '@int/geotoolkit/util/Range';
import { TimeZone } from '@int/geotoolkit/axis/TimeZone';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { TrackRenderDirection } from '@int/geotoolkit/welllog/widgets/TrackRenderDirection';
import { ScrollDirection } from '@int/geotoolkit/welllog/widgets/ScrollDirection';
import type { HeaderContainer } from '@int/geotoolkit/welllog/HeaderContainer';
import { DisplayType } from '@int/geotoolkit/welllog/HeaderContainer';
import { HoldTitle } from '@int/geotoolkit/welllog/header/HoldTitle';
import { BorderStrategy } from '@int/geotoolkit/welllog/BorderStrategy';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import { Layer } from '@int/geotoolkit/scene/Layer';
import { LogTrackContainer } from '@int/geotoolkit/welllog/widgets/visuals/LogTrackContainer';
import { Group } from '@int/geotoolkit/scene/Group';
import { IExportable } from '@int/geotoolkit/scene/exports/IExportable';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Point } from '@int/geotoolkit/util/Point';
import { Events as WellogWidgetsEvents } from '@int/geotoolkit/welllog/widgets/Events';
import { DepthMarkerShape } from '@int/geotoolkit/welllog/widgets/visuals/DepthMarkerShape';
import { DragAndDrop } from '@int/geotoolkit/controls/tools/DragAndDrop';
import { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import { RubberBand } from '@int/geotoolkit/controls/tools/RubberBand';
import { Splitter } from '@int/geotoolkit/controls/tools/splitter/Splitter';
import { Splitter as WellogSplitter } from '@int/geotoolkit/welllog/widgets/tools/Splitter';
import { CrossHair } from '@int/geotoolkit/controls/tools/CrossHair';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { ToolTipTool } from '@int/geotoolkit/controls/tools/ToolTipTool';
import { Panning } from '@int/geotoolkit/controls/tools/Panning';
import { Zoom } from '@int/geotoolkit/controls/tools/Zoom';
import { Events as SelectionEvents, Selection } from '@int/geotoolkit/controls/tools/Selection';
import { LogVisualHeaderProvider } from '@int/geotoolkit/welllog/header/LogVisualHeaderProvider';
import { LogTrackHeader } from '@int/geotoolkit/welllog/header/LogTrackHeader';
import { TrackType } from '@int/geotoolkit/welllog/TrackType';
import { IndexType } from '@int/geotoolkit/welllog/IndexType';
import { ScrollToLocation } from '@int/geotoolkit/welllog/TrackContainer';
import { ImageCompression } from '@int/geotoolkit/pdf/ImageCompression';
import { SpeedCompression } from '@int/geotoolkit/pdf/SpeedCompression';
import { PageElement } from '@int/geotoolkit/scene/exports/PageElement';
import { PdfExport } from '@int/geotoolkit/pdf/PdfExport';
import { IWritable } from '@int/geotoolkit/util/stream/IWritable';
import { JsonSerializer } from '@int/geotoolkit/persistence/JsonSerializer';
import { Axis } from '@int/geotoolkit/axis/Axis';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { LineDecoration } from '@int/geotoolkit/attributes/LineDecoration';
import type { SymbolShape } from '@int/geotoolkit/scene/shapes/SymbolShape';
import type { TrackHighlightStrategy } from '@int/geotoolkit/welllog/TrackHighlightStrategy';
import type { HeaderType } from '@int/geotoolkit/welllog/header/LogAxisVisualHeader';
import type { Position } from '@int/geotoolkit/welllog/LogBlock';
import type { DataSource } from '@int/geotoolkit/data/DataSource';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import type { DataBinding } from '@int/geotoolkit/data/DataBinding';
import type { DataBindingRegistry } from '@int/geotoolkit/data/DataBindingRegistry';
import type { HeaderComponent } from '@int/geotoolkit/scene/exports/HeaderComponent';
import type { FooterComponent } from '@int/geotoolkit/scene/exports/FooterComponent';
import type { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import type { Registry as _Registry } from '@int/geotoolkit/persistence/Registry';
import type { TrackFactory } from '@int/geotoolkit/welllog/TrackFactory';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { Locale } from '@int/geotoolkit/util/Locale';
import type { TickGenerator } from '@int/geotoolkit/axis/TickGenerator';
import type { DateTimeFormat } from '@int/geotoolkit/util/DateTimeFormat';
import type { HVBaseScroll } from '@int/geotoolkit/controls/tools/scroll/HVBaseScroll';
import type { EmbededFont } from '@int/geotoolkit/pdf/EmbededFont';
import { TrackEventArgs } from '@int/geotoolkit/welllog/widgets/TrackEventArgs';
import type { SelectionEventArgs } from '@int/geotoolkit/controls/tools/SelectionEventArgs';
import type { StackedTrack } from '@int/geotoolkit/welllog/StackedTrack';
/**
 * The WellLog widget is a widget that is specialized for well related data. It uses classes from the WellLog toolkit internally.<br>
 * The main way to configure and customize the default look and feel of the widget is by using the different setOptions() function in the constructor.<br>
 * The widget content can be manipulated through add/remove/get-Track() and the Track content can be controlled through track.add/remove/get-Child() as shown in example below.<br>
 * Similarly all supported well data (track, index track, log curves, log fills, log2d, markers etc) can be manipulated.<br>
 * Widget has header, footer containers to display tracks and visuals headers and track container to display tracks.
 * The widget provides built-in support for Time/Depth modes, Resizing headers and footers, Selection and highlighting, Track resizing.
 *
 * The Default tools include:
 * <ul>
 *  <li> Horizontal scrollbar </li>
 *  <li> Vertical scrollbars (header, tracks, footer) </li>
 *  <li> Panning </li>
 *  <li> Zoom </li>
 *  <li> Pinching </li>
 *  <li> Crosshair </li>
 *  <li> Header/Footer splitters (for resizing) </li>
 *  <li> Track splitters (for resizing) </li>
 *  <li> Rubberband (for rubberband Zoom) </li>
 *  <li> Selection </li>
 *  <li> drag-and-drop (for drag'n drop track or curve) </li>
 * </ul>
 * @example
 * // Create the Widget
 * import {WellLogWidget} from '@int/geotoolkit/welllog/widgets/WellLogWidget';
 * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
 * const widget = new WellLogWidget({
 *           'horizontalscrollable': false,
 *           'verticalscrollable': true,
 *           'trackcontainer': {
 *               'border': {'visible': false}
 *           },
 *           'border': {'visible': false}
 *       })
 * widget.addTrack(TrackType.IndexTrack);
 * @example
 * // Adding a curve to the widget.
 * import {LogCurve} from '@int/geotoolkit/welllog/LogCurve';
 * widget.addTrack(TrackType.LinearTrack)
 *          .addChild([
 *               new LogCurve(curveData)
 *                   .setLineStyle('green', 1))
 *           ]);
 * @example
 * import {Events as AbstractScrollEvents} from '@int/geotoolkit/controls/tools/scroll/AbstractScroll';
 * import {Events as PanningEvents} from '@int/geotoolkit/controls/tools/Panning';
 * // Capture a scroll event when the user uses the scroll tab or mouse wheel.
 * widget.getToolByName('TrackPanning')
 *   .on(PanningEvents.onPanning, (evt, sender, eventArgs) => {
 *       ...
 *    });
 * widget.getToolByName('HorizontalPlotScroll')
 *   .on(AbstractScrollEvents.onScroll, (evt, sender, eventArgs) => {
 *       ...
 *    });
 * @example
 * // Resizing WellLogWidget.
 * // It has two parts. The first one is resizing of the plot, which is a container of any widget and shapes and the second step is resizing of widgets inside of container.
 * // To change the size of the widget you need to call 'setBounds' method of the widget. The method of the plot 'setSize' will change a plot size.
 * // It is better to use automatic way to change size of the widget based on plot. The following steps will describe this approach:
 * // step2: When you create a plot you specify canvas and widget like this:
 * import {Plot} from '@int/geotoolkit/plot/Plot';
 * import {Group} from '@int/geotoolkit/scene/Group';
 * import {CssLayout} from '@int/geotoolkit/layout/CssLayout';
 * // step1: After you create a widget you specify location inside the plot using layout style like this:
 * const widget = new WellLogWidget({
 *           'horizontalscrollable': false,
 *           'verticalscrollable': true,
 *           'trackcontainer': {
 *               'border': {'visible': false}
 *           },
 *           'border': {'visible': false}
 *           'track' : {
 *              'header' : {
 *                  'visibletracktitle' : true,
 *                  'titlefirst' : true,
 *                  'firsttolast' : false,
 *                  'toptobottom' : false,
 *                  'holdtitle' : HoldTitle.Top
 *              },
 *              'footer' :  {
 *                  'visibletracktitle' : true,
 *                  'titlefirst' : true,
 *                  'firsttolast' : false,
 *                  'toptobottom' : true,
 *                  'holdtitle' : HoldTitle.None
 *              }
 *          },
 *       })
 * .setLayoutStyle({
 *               'left': 0,
 *               'top': 0,
 *               'right': 0,
 *               'bottom': 0
 *           });
 * // This setLayoutStyle tells that widgets will occupy whole plot area.
 * const widgetPlot = new Plot({
 *           'canvasElement': canvas,
 *           'root': new Group()
 *               .setAutoModelLimitsMode(true)
 *               .setLayout(new CssLayout())   // plot will resize children using CssLayout.
 *               .addChild(widget),
 *           'autoSize': false,
 *           'autoRootBounds': true
 *       });
 * // Now if you change a plot size then the size of widget will be changed automatically, so to resize widget you need just to call:
 * plot.setSize(width, height);
 * @example
 * // To modify the height of headers container simply do the following while initializing the widget.
 * const widget = new WellLogWidget({
 *           'header': {
 *               'height': 200
 *           }
 *       })
 * @example
 * // ..or If you are using CSS then
 * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
 * const css = [
 * '.WellLogWidget {',
 *          '   header-height: 200;',
 *           '}',
 * ].join('\n');
 * widget.setCss(new CssStyle({'css': css}));
 * // CSS styles can be used to change other properties also. Please refer to the CSS properties section to see which properties can be changed.
 * @example
 * // To add widget header:
 * import {Text} from '@int/geotoolkit/scene/shapes/Text';
 * const widget = new WellLogWidget({
 *          'annotations': {
 *              'north': [
 *                  new Text({'text': 'Title'}).setLayoutStyle({ 'height': 20 })
 *              ]
 *          },
 *          'annotationssizes': {
 *              'north': 100
 *          }
 * });
 * @example
 * // To change tracks' size manually use method WellLogWidget.setTrackWidth:
 * wellLogWidget.setTrackWidth(150, track); // 150 is the width, if track is null then width will be applied to all tracks.
 * @example
 * // To set CSS style to hover and highlight
 * // specify cssclass name
 * const widget = new WellLogWidget({
 * 'highlight': {
 *   'cssclass': 'highlight'
 * });
 * // sets CSS properties for highlighting and hover for curve
 * widget.setCss(new CssStyle(
 *   {
 *       'css': [
 *           '.geotoolkit.welllog.LogCurve:hover {',
 *           '   linestyle-width: 3;',
 *           '}',
 *           '.geotoolkit.welllog.LogCurve:highlight {',
 *           '   linestyle-width: 3;',
 *           '}'
 *       ].join('')
 *   }));
 * @example
 * // If you need to change style of visual checks and remove 'hover' and 'highlight' CSS class from it like this:
 * import {PseudoClass} from '@int/geotoolkit/css/CssStyle';
 * ...
 * var hasHover = selectedVisual.hasCssClass(PseudoClass.Hover);
 * var hasHighlight = selectedVisual.hasCssClass(PseudoClass.Highlight);
 * // Remove class to restore original styles
 * if (hasHover || hasHighlight) {
 *   selectedVisual.removeCssClass([PseudoClass.Hover, PseudoClass.Highlight]);
 * }
 * selectedVisual.setLineStyle(newStyle);
 * if (hasHover) {
 *   selectedVisual.addCssClass(PseudoClass.Hover);
 * }
 * if (hasHighlight) {
 *   selectedVisual.addCssClass(PseudoClass.Highlight);
 * }
 */
export declare class WellLogWidget extends BaseWidget implements IExportable {
    constructor(options?: WellLogWidget.Options);
    getToolByName<T extends keyof WellLogWidget.Tools>(toolName: T): WellLogWidget.Tools[T];
    on<E extends keyof WellLogWidget.EventMap>(type: E, callback: (eventType: E, sender: this, args: WellLogWidget.EventMap[E]) => void): this;
    off<E extends keyof WellLogWidget.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: WellLogWidget.EventMap[E]) => void): this;
    /**
     * Gets annotation at specified location
     * @param location Enum of annotation locations used to specify direction to insert
     */
    getAnnotation(location: AnnotationLocation | string): Group | null;
    /**
     * Returns some widget options
     */
    getOptions(): WellLogWidget.OptionsBaseOut;
    /**
     * Returns actual header height or model height whenever 'auto' is specified
     * @param [options] header options
     */
    getHeaderHeight(options?: string): number;
    /**
     * Returns actual footer height or model height whenever 'auto' is specified
     * @param [options] header options,
     */
    getFooterHeight(options?: string): number;
    /**
     * Sets footer height
     * @param height footer height in pixels or 'auto' to fit footer height
     * @returns this
     */
    setFooterHeight(height: number | 'auto'): this;
    /**
     * Sets header height
     * @param height header height in pixels or 'auto' to fit header height
     * @returns this
     */
    setHeaderHeight(height: number | 'auto'): this;
    /**
     * Sets header scrollbar visibility flag
     * @param value visibility option
     * @returns this
     */
    setHeaderScrollVisible(value: boolean): this;
    /**
     * Gets visibility flag for the header scroll bar
     */
    getHeaderScrollVisible(): boolean;
    /**
     * Sets footer scrollbar visibility flag
     * @param value visibility flag
     * @returns this
     */
    setFooterScrollVisible(value: boolean): this;
    /**
     * Gets visibility flag for the footer header scroll bar
     */
    getFooterScrollVisible(): boolean;
    /**
     * Sets some widget options
     * @param [options] addition options
     * @example
     * //call  setOptions on widget after construction and change the default header size(84) as follows.
     * widgets.setOptions({
     *    'header' : {
     *        'height': 184
     *    }
     * });
     */
    setOptions(options?: WellLogWidget.OptionsBase): this;
    /**
     * Attach or detach header and footer
     * @param enable enable or disable attached headers
     * @returns this
     */
    setAttachedHeaders(enable: boolean): this;
    /**
     * Return true if headers and footers are attached to track
     */
    isAttachedHeaders(): boolean;
    /**
     * Return Depth Marker settings
     * @returns depth markers
     */
    getDepthMarkers(): WellLogWidget.DepthMarkersOut;
    /**
     * Set depth markers
     * @param depths depths marker value or options, null to hide all markers
     * @param [lineStyle] line style
     * @param [fillStyle] fill style, applicable only to marker set
     * @returns this
     */
    setDepthMarkers(depths: WellLogWidget.DepthMarkers | number[] | number, lineStyle?: LineStyle.Type, fillStyle?: FillStyle.Type): this;
    /**
     * Returns manipulator overlay to draw temporary shapes on top of the track container
     */
    getTrackManipulatorLayer(): Layer;
    /**
     * Function call in the constructor to initialize tools in the widget
     * @param [options] tools options
     * @returns this
     */
    protected initializeTools(options?: WellLogWidget.Options['tools']): this;
    /**
     * Set annotation sizes
     * @param annotationSizes annotation sizes
     * @returns this
     */
    setAnnotationSize(annotationSizes: WellLogWidget.AnnotationSizes): this;
    /**
     * Sets the axis header type
     * @param headerType The axis header type enum.
     * @param [containers] optional array of header containers. if not specified, the header and footer container is used.
     */
    setAxisHeaderType(headerType: HeaderType, containers?: HeaderContainer[]): this;
    /**
     * Highlights header for the specified visual (if header exists)
     * @param visual a reference visual
     * @param highlight boolean value that indicating whether the header must be highlighted or de-highlighted
     */
    protected highlightVisualHeader(visual: Node, highlight: boolean): void;
    /**
     * Highlights a visual or track. Called whenever a visual is selected to highlight it. <br>
     * If user selects a curve and the track, the curve,track and header are highlighted. Programmatically deselecting a track doesn't automatically deselect curves.<br>
     * Deselect all selected tracks and visuals using the example shown below.
     *
     * @param visual The visual to highlight
     * @param highlight the status of the highlight
     * @example
     * const selector = widget.getToolByName('pick');
     * const currentSelection = selector.getSelection();
     * currentSelection.forEach((visual) => {
     *       widget.highlightVisual(visual, false);
     *   });
     * @returns this
     */
    highlightVisual(visual: Node, highlight: boolean): this;
    /**
     * return selected track collection
     */
    getSelectedTracks(): LogTrack[];
    /**
     * Return an array of the selected visuals for the specified track. if track is not specified
     * then all selected visuals are returned. This method is a helper method and uses selected visuals
     * from 'pick' tool. The code below shows how to get access to all selected tracks and visuals instead
     * @param [track] track to return selected visuals specified by node filter
     */
    getSelectedVisuals(track?: LogTrack): Node[];
    /**
     * Return a depth range, which is visible now
     */
    getVisibleDepthLimits(): Range;
    /**
     * Sets visible depth limits
     * @param fromIndex fromindex limit
     * @param toIndex toindex limit
     */
    setVisibleDepthLimits(fromIndex: number, toIndex: number): this;
    setVisibleDepthLimits(range: Range): this;
    /**
     * Add a track
     * @param track track type
     */
    addTrack(track: TrackType.StackedTrack): StackedTrack;
    /**
     * Add a track
     *
     * @param track track or tracks to insert
     * @returns track to be added. if multiple tracks wree passed to this method, only the fisrt one will be returnes
     * @example
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * widget.addTrack(TrackType.LinearTrack);
     * @example
     * // index tracks has 'INDEX_TRACK' css class defined, so it can be used to modify style with css:
     * widget.getTrackContainer().setCss('*[cssclass="INDEX_TRACK"] { visible: false; }');
     * // or differ it from another tracks:
     * if (track.getCssClass() === 'INDEX_TRACK') {
     *     // do smth
     * }
     */
    addTrack(track: LogTrackContainer.InsertTrack): LogTrack;
    /**
     * Insert track to the container at specified index
     * @param index index of the track
     * @param track track type
     */
    insertTrack(index: number, track: TrackType.StackedTrack): StackedTrack;
    /**
     * Insert track to the container at specified index
     * @param index index of the track
     * @param track track or tracks to be inserted
     */
    insertTrack(index: number, track: LogTrackContainer.InsertTrack): LogTrack;
    /** */
    suspendUpdate(): this;
    /** */
    resumeUpdate(silent?: boolean, changes?: StateChanges): this;
    /**
     * Get track render direction
     */
    getTrackRenderDirection(): TrackRenderDirection;
    /**
     * Set track render direction
     * @param direction set track render direction
     */
    setTrackRenderDirection(direction: TrackRenderDirection): this;
    /**
     * Remove the track with headers and footers
     * @param track track to remove
     * @param [disposeTrack] automatically dispose track. If it is true then method dispose is called for track.
     */
    removeTrack(track: LogTrack, disposeTrack?: boolean): this;
    /**
     * Returns track options
     * @param track track to get options
     * @returns track options
     */
    getTrackOptions(track: LogTrack): WellLogWidget.TrackOptionsOut;
    /**
     * Sets track options
     * @param track log track
     * @param options track options
     * @example
     * //The code to configure the gridlines in a log track, specify logdecades and generate multiple logticks
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * widget.setTrackOptions(track, {
     *       'type:': TrackType.LogTrack,
     *       'value': {
     *           'logstart': 0.2,
     *           'logdecades': 4
     *       }
     *   });
     */
    setTrackOptions(track: LogTrack, options: WellLogWidget.TrackOptions): LogTrack | null;
    /**
     * Updates layout(s)
     * @param [targets] list of nodes to update layout
     * @param [updateScrollBarState] update scroll bar flag
     * @returns this
     */
    updateLayout(targets?: ILayoutable[], updateScrollBarState?: boolean): this;
    /**
     * update Scroll Positions using visible limits and model limits.
     *
     * @param [updateScrollBarState] update Scroll Positions using visible limits and model limits or not
     * @param [enableAnimation] show animation
     */
    updateScrollPositions(updateScrollBarState?: boolean, enableAnimation?: boolean): this;
    /**
     * @param event type of event
     * @param source source who called the event
     * @param args event arguments
     */
    notify<E extends keyof WellLogWidget.EventMap>(event: E, source: Node, args?: WellLogWidget.EventMap[E]): this;
    /**
     * Update header
     */
    updateHeader(): void;
    /**
     * Update footer
     */
    updateFooter(): void;
    /**
     * Returns header container. Note that container's bounds are not necessary match with
     * its visible limits as it can reside in other container. To get/set device header size, use
     * get/set HeaderHeight() method
     */
    getHeaderContainer(): HeaderContainer;
    /**
     * Returns footer container. Note that container's bounds are not necessary match with
     * its visible limits as it can reside in other container. To get/set device footer size, use
     * get/set FooterHeight() method
     */
    getFooterContainer(): HeaderContainer;
    getTrackContainer(): LogTrackContainer;
    /**
     * Returns amount of tracks
     * @returns amount of tracks
     */
    getTracksCount(): number;
    /**
     * Returns {@link @int/geotoolkit/welllog/LogTrack~LogTrack} at specified index
     * @param index index to return track at
     */
    getTrackAt(index: number): LogTrack;
    /**
     * Returns track at specified position in plot coordinate
     * @param x x coordinate position
     * @param y y coordinate position
     */
    getTrackAtPosition(x: number, y: number): LogTrack | null;
    getTrackAtPosition(point: Point): LogTrack | null;
    /**
     * Return index of track
     * @param track to get index
     * @returns index of the track
     */
    getTrackIndex(track: LogTrack): number;
    /**
     * Send event DataUpdating to update data.
     * @deprecated since 4.0
     * @returns this
     */
    updateData(): this;
    /**
     * Enumerate each visual in track container
     * @param callback callback method
     */
    forEachVisual(callback: (item: Node) => void): void;
    /**
     * Sets a new data model
     * @param data logdata
     * @returns this
     */
    setData(data: DataSource | AbstractDataTable): this;
    /**
     * returns data source
     */
    getData(): DataSource | AbstractDataTable;
    /**
     * Return the data binding
     */
    getDataBinding(): DataBinding | DataBindingRegistry;
    /**
     * Sets the data binding
     * @param binding data binding
     * @param [silent] silent mode to forbid
     * @returns this
     */
    setDataBinding(binding: DataBinding | DataBindingRegistry, silent?: boolean): this;
    /**
     * Sets index unit
     * @param unit index unit
     * @returns this
     */
    setIndexUnit(unit: AbstractUnit | string): this;
    /**
     * Gets index unit
     * @returns unit
     */
    getIndexUnit(): AbstractUnit;
    /**
     * Sets device unit
     * @param unit device unit
     * @returns this
     */
    setDeviceUnit(unit: AbstractUnit | string): this;
    /**
     * Gets device unit
     * @returns unit
     */
    getDeviceUnit(): AbstractUnit;
    /**
     * Gets index type
     * @returns type
     */
    getIndexType(): IndexType | 'time' | 'depth';
    /**
     * Sets index type, user can provide index unit, otherwise specify unit with setIndexUnit method
     * @param type index type
     * @param [unit] index unit
     */
    setIndexType(type: IndexType | 'time' | 'depth', unit?: AbstractUnit | string): this;
    /**
     * Sets depth limits for all tracks
     * @param minIndex min index limit
     * @param maxIndex max index limit
     */
    setDepthLimits(minIndex: number, maxIndex: number): this;
    /**
     * Sets depth limits for all tracks
     * @param range depth range
     */
    setDepthLimits(range: Range): this;
    /**
     * Returns depth range.
     * @example
     * // In order to get difference between depths in px, you can get depth scale (or it can be time scale) from widget. Specify your depth unit and device unit 'px'. Then divide
     * // your depth range by scale and you get depth distance in pixels. See the following code:
     * const scale = widget.getDepthScale('m', 'px'); // meter to pixel
     * const size = widget.getDepthLimits().getSize() / scale;
     */
    getDepthLimits(): Range;
    /**
     * Sets a depth scale factor.
     * @throws Will throw an error if the current scale is NaN
     * @param scale A number of depth units in device unit.
     * @param [scaleUnit] scale unit of the display. if it is not specified then it takes from track container
     * @param [deviceUnit] device unit of the display. if it is not specified then it takes from track container
     * @returns this
     * @example
     * //  To set depth scale range as a ratio, you can use units as follows
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * const unitFactory = UnitFactory.getInstance();
     * widget.setDepthScale(30, unitFactory.getUnit('feet'), unitFactory.getUnit('inch')); //1 inch == 30 feet
     */
    setDepthScale(scale: number, scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): this;
    /**
     * Return scale to device. How many scale units in one device unit.
     * @param [scaleUnit] scale unit of the display. if it is not specified then it takes from track container
     * @param [deviceUnit] device unit of the display. if it is not specified then it takes from track container
     * @returns a index scale to device or NaN if scale if not available
     * @example
     * //  to get the current depth scale of welllog widget.
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * const uf = UnitFactory.getInstance();
     * widget.getDepthScale(uf.getUnit('cm'), uf.getUnit('cm'));
     */
    getDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Change scale
     * @param scaleY scaleY
     * @param [scaleX] scaleX
     * @returns this
     */
    scale(scaleY: number, scaleX?: number): this;
    /**
     * Display the whole scene graph. Resets the zoom level/scale to fit the whole tracks height in the visible area
     * @returns this
     */
    fitToHeight(): this;
    /**
     * Resize widget width to fit it in visible area
     * @example
     * widget.addTrack(TrackType.IndexTrack)
     *     // declare width constraints for particular track
     *     .setLayoutStyle({
     *         'minwidth': 50,
     *         'maxwidth': 50
     *     });
     * widget.addTrack(TrackType.LinearTrack);
     * ...
     * widget.fitToWidth();
     */
    fitToWidth(): this;
    /**
     * Scroll to index position
     * @param index index to scroll to
     * @param [position] position to scroll to
     * @param [enableAnimation] show animation or not
     * @returns this
     */
    scrollToIndex(index: number, position?: ScrollToLocation, enableAnimation?: boolean): this;
    /**
     * Pans view to track with specified alignment and option depth. If depth is not specified, the middle of the track is used
     *
     * @param [track] track to scroll
     * @param [index] depth or time of the specified track. if it is null it doesn't move in this direction.
     * @param [alignment] alignment of specified point according to container
     * visible limits.
     */
    panToTrack(track?: LogTrack, index?: number, alignment?: string | AnchorType): this;
    /**
     * Set track width and layout remains track
     * @param width track width
     * @param track track to change track width
     * @returns this
     * @example
     * // To change tracks' size manually use:
     * widgets.setTrackWidth(width, track);
     */
    setTrackWidth(width: number, track: LogTrack | LogTrack[]): this;
    /**
     * Returns the track header if it exists
     * @param track current welllog track
     */
    getTrackHeader(track: LogTrack): LogTrackHeader;
    /**
     * Returns the track footer if it exists
     * @param track current welllog track
     */
    getTrackFooter(track: LogTrack): LogTrackHeader;
    /**
     * change highlight linestyle
     * @param linestyle highlight linestyle
     */
    setHighlightLineStyle(linestyle: LineStyle): this;
    /**
     * get border highlight line style
     * @returns border line style for the track in 'highlighted' mode
     */
    getHighlightLineStyle(): LineStyle;
    /**
     * change highlight fillstyle
     * @param fillstyle highlight fillstyle
     */
    setHighlightFillStyle(fillstyle: FillStyle): this;
    /**
     * get track highlight fillstyle
     * @returns track background highlight fillstyle
     */
    getHighlightFillStyle(): FillStyle | null;
    /**
     * Calculate a real size of tracks
     * @returns total width of the tracks
     */
    getTracksSize(): number;
    /**
     * Sets node filter for selection tool
     * @param nodeFilter filter that allows to filter selected nodes.
     * @returns this
     */
    setNodeFilter(nodeFilter: (item: Node) => boolean): this;
    /**
     * Exports the widget content as a PDF file, user has option to select the scale of track in pdf.
     * @param [options] option to specify paper parameters and header and footer
     * @returns promise with output stream
     */
    exportToPdf(options?: WellLogWidget.ExportToPdfOptions): Promise<IWritable>;
    /**
     * Prepares object before exporting and saving state
     * @returns this
     */
    beginExport(): this;
    /**
     * Used to restore object's state after exporting
     */
    endExport(): void;
    /**
     * Returns exportable element
     * @param [options] export options
     * @returns return exportable element
     */
    getExportElement(options?: WellLogWidget.ExportToPdfOptions): AbstractDocumentElement;
    /**
     * Load template
     * @param template template to be applied to the widget
     * @param [registry] registry
     * @returns this
     */
    loadTemplate(template: string, registry?: _Registry): this;
    /**
     * Save template
     * @param [registry] registry
     * @param [options] serialization options
     * @returns return template as a string
     */
    saveTemplate(registry?: _Registry, options?: JsonSerializer.Options): string;
    /**
     * set widget orientation and apply rotation if needed.
     *
     * @param mode widget orientation mode
     * @returns this
     */
    setOrientation(mode: Orientation): this;
    setBounds(bounds: Rect | Rect.Options): this;
    /**
     * Sets the model limits of the node
     *
     * @param modelLimits The model limits of the node
     * @returns this
     */
    setModelLimits(modelLimits: Rect): this;
    /**
     * Returns widget orientation mode
     * @returns widget orientation mode
     */
    getOrientation(): Orientation;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     */
    setProperties(properties?: WellLogWidget.Options): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     */
    getProperties(): WellLogWidget.OptionsOut;
    /**
     * Synchronizes axis or group with a track container model
     *
     * @param object object to connect to the central component
     * @param [orientation] model orientation
     */
    connect(object: Group | Axis, orientation?: Orientation): this;
    /**
     * Sets track factory
     * @param trackFactory track factory
     * @returns this
     */
    setTrackFactory(trackFactory: TrackFactory): this;
    /**
     * Returns track factory
     * @returns track factory
     */
    getTrackFactory(): TrackFactory;
}
export declare namespace WellLogWidget {
    /**
     * addition options
     */
    type Options = BaseWidget.Options & OptionsBase & {
        /**
         * min and max depth range.
         */
        range?: Range;
        /**
         * defines if plot displays horizontal scrollbars
         */
        horizontalscrollable?: boolean | 'auto' | 'floating';
        /**
         * defines if plot displays vertical scrollbars
         */
        verticalscrollable?: boolean | 'auto' | 'floating' | {
            /**
             * defines if header displays vertical scrollbars
             */
            header?: boolean | 'auto' | 'floating';
            /**
             * defines if plot displays vertical scrollbars
             */
            plot?: boolean | 'auto' | 'floating';
            /**
             * defines if footer displays vertical scrollbars
             */
            footer?: boolean | 'auto' | 'floating';
        };
        /**
         * primary index types
         */
        indextype?: IndexType | 'time' | 'depth';
        /**
         * primary index unit
         */
        indexunit?: AbstractUnit | string;
        /**
         * primary device unit
         */
        deviceunit?: AbstractUnit | string;
        /**
         * time zone for time axis
         */
        timezone?: TimeZone | string;
        /**
         * time zone offset for date time axis
         */
        timezoneoffset?: number;
        /**
         * grid line style
         */
        gridlinestyle?: LineStyle.Type;
        /**
         * Define view cache for tracks
         */
        viewcache?: boolean | Cache;
        /**
         * defines properties for widget outer border
         */
        border?: {
            /**
             * visibility of the border
             */
            visible?: boolean;
            /**
             * color of border
             */
            color?: string;
        };
        /**
         * annotations properties for axes, titles
         */
        annotations?: {
            /**
             * Enable support of annotations
             */
            enable?: boolean;
        } & Partial<Record<Exclude<AnnotationLocation, AnnotationLocation.Center>, Node[]>>;
        /**
         * Properties to hold (width or height) of the annotations
         */
        annotationssizes?: Partial<Record<Exclude<AnnotationLocation, AnnotationLocation.Center>, number>>;
        /**
         * marker options
         */
        marker?: {
            /**
             * date time format in case if track container scale unit belongs to 'time'
             */
            datetimeformat?: DateTimeFormat.Options;
            /**
             * visibility of the marker index value label
             */
            indexvisible?: boolean;
            /**
             * depth index format that accept number
             */
            indexformatter?: DepthMarkerShape.Options['depthformatter'];
            /**
             * visibility of the marker shape label
             */
            labelvisible?: boolean;
            /**
             * value format
             */
            valueformatter?: DepthMarkerShape.Options['valueformatter'];
            /**
             * display symbol for interpolated values
             */
            enabledinterpolatedvalues?: boolean;
            /**
             * marker shape fill style
             */
            fillstyle?: FillStyle.Type;
            /**
             * marker shape line style
             */
            linestyle?: LineStyle.Type;
        };
        /**
         * tools options
         */
        tools?: {
            /**
             * JSON which defines crosshair cursor
             */
            crosshair?: CrossHair.Options | 'none';
            /**
             * cursor tracking options
             */
            cursortracking?: {
                /**
                 * JSON which defines crosshair cursor.
                 */
                crosshair?: CrossHair.Options;
                /**
                 * JSON which defines tooltip tool.
                 */
                tooltip?: ToolTipTool.Options;
            };
            'horizontal-splitter'?: 'none';
            /**
             * tracks splitter options
             */
            tracksplitter?: Splitter.Options;
        };
        /**
         * defines properties for track container
         */
        trackcontainer?: {
            /**
             * defines properties for track container outer border
             */
            border?: {
                /**
                 * visibility of the border
                 */
                visible?: boolean;
                /**
                 * color of border border
                 */
                color?: string;
            };
            /**
             * options of track inside the track container
             */
            track?: {
                /**
                 * apply a border strategy to the LogTrack class
                 */
                borderstrategy?: BorderStrategy;
                /**
                 * apply a highlight strategy to the LogTrack class
                 */
                highlightstrategy?: TrackHighlightStrategy;
            };
            /**
             * specify direction of the vertical axis. By default it goes from top to bottom. if it is true
             * then an axis goes from bottom to top.
             */
            verticalflip?: boolean;
        };
        /**
         * defines properties for index track
         */
        indextrack?: {
            /**
             * index track line styles and text styles
             */
            styles?: {
                label?: {
                    minor?: TextStyle.Type;
                    major?: TextStyle.Type;
                    edge?: TextStyle.Type;
                };
                tick?: {
                    minor?: LineStyle.Type;
                    major?: LineStyle.Type;
                    edge?: LineStyle.Type;
                };
            };
            /**
             * custom label format function
             */
            labelformat?: TickGenerator.LabelFormatHandler;
            /**
             * axis settings
             */
            axis?: {
                /**
                 * name of axis
                 */
                name?: string;
                /**
                 * locale for tickgenerator of axis
                 */
                locale?: string;
            };
        };
        /**
         * define highlight properties
         */
        highlight?: {
            strategy?: TrackHighlightStrategy;
            /**
             * define highlight class name, see cssstyle.html tutorial. If cssclass is specified
             * then line and fill styles are ignored. If it is necessary to change fill style or line for highlighted or selected visual then remove
             * 'hover' and cssclass from visual using removeCssClass and add it after changes. See example below.
             */
            cssclass?: string;
            /**
             * define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
             */
            linestyle?: LineStyle.Type;
            /**
             * define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
             */
            fillstyle?: FillStyle.Type;
            /**
             * define header highlight options to override defaults
             */
            header?: {
                /**
                 * Highlight header
                 */
                highlight?: boolean;
                /**
                 * define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                linestyle?: LineStyle.Type;
                /**
                 * define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                fillstyle?: FillStyle.Type;
            };
            /**
             * define track highlight options to override defaults
             */
            track?: {
                /**
                 * define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                linestyle?: LineStyle.Type;
                /**
                 * define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                fillstyle?: FillStyle.Type;
            };
        };
        /**
         * set orientation of the well log widget
         */
        orientation?: Orientation;
        /**
         * set track render direction
         */
        direction?: TrackRenderDirection;
        /**
         * node filter for visual which can be selected
         */
        nodefilter?: (item: Node) => boolean;
    };
    type OptionsBaseOut = {
        /**
         * primary index types
         */
        indextype: string;
        /**
         * primary index unit
         */
        indexunit: string;
        /**
         * primary device unit
         */
        deviceunit: AbstractUnit;
        /**
         * orientation of the well log widget
         */
        orientation: Orientation;
        /**
         * track render direction
         */
        direction: TrackRenderDirection;
        /**
         * indent between tracks
         */
        indent: number;
        /**
         * header options
         */
        header: {
            /**
             * header visibility
             */
            visible: boolean | 'none';
            /**
             * header height in pixels
             */
            height: number | string;
        };
        /**
         * footer options
         */
        footer: {
            /**
             * footer visibility
             */
            visible: boolean | 'none';
            /**
             * footer height in pixels
             */
            height: number | string;
        };
        /**
         * define highlight properties
         */
        highlight: {
            /**
             * define highlight class name, see cssstyle.html tutorial
             */
            cssclass: string | null;
            /**
             * define line style attribute for visual highlight
             */
            linestyle: LineStyle;
            /**
             * define fill style attribute for visual highlight
             */
            fillstyle: FillStyle;
            /**
             * define header highlight overrides
             */
            header: {
                highlight?: boolean;
                /**
                 * define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                linestyle?: LineStyle.Type;
                /**
                 * define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                fillstyle?: FillStyle.Type;
            };
            /**
             * define track highlight overrides
             */
            track: {
                /**
                 * define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                linestyle?: LineStyle.Type;
                /**
                 * define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                fillstyle?: FillStyle.Type;
            };
        };
        /**
         * scroll option
         */
        scroll: {
            /**
             * scroll direction when using scroll wheel to scroll
             */
            direction: ScrollDirection | string;
        };
    };
    /**
     * addition options
     */
    type OptionsBase = {
        /**
         * indent between tracks
         */
        indent?: number;
        /**
         * collapsed intervals settings
         */
        collapsed?: {
            /**
             * collapsed intervals
             */
            intervals?: LogTrackContainer.CollapsedInterval[];
            /**
             * collapsed marker styles
             */
            marker?: LogTrackContainer.CollapsedIntervalMarker;
        };
        /**
         * header options
         */
        header?: {
            /**
             * visibility of the headers, if it is 'none' then header is not created
             */
            visible?: boolean | 'none';
            /**
             * margin between header components
             */
            margin?: number;
            /**
             * padding inside header components
             */
            padding?: number;
            /**
             * display type
             */
            displaytype?: DisplayType;
            /**
             * header height
             */
            height?: number | 'auto';
            /**
             * radius of the rounded box
             */
            roundedboxradius?: number;
            /**
             * defines properties for header outer border
             */
            border?: {
                /**
                 * visibility of the border
                 */
                visible?: boolean;
                /**
                 * color of border
                 */
                color?: string;
            };
            /**
             * forbid the resizing of header container bigger than accumulated size of the track header.
             */
            restrictmaxheadersize?: boolean;
            /**
             * enable tiled cache. It increases rendering performance for historical data
             */
            viewcache?: boolean | Cache;
            /**
             * Header provider. If a custom header provider is specified, sets setHeaderType to HeaderType.Header
             */
            headerprovider?: LogVisualHeaderProvider;
        };
        /**
         * footer options
         */
        footer?: {
            /**
             * visibility of the footer, if it is 'none' then footer is not created
             */
            visible?: boolean | string;
            /**
             * margin between footer components
             */
            margin?: number;
            /**
             * padding inside footer components
             */
            padding?: number;
            /**
             * display type
             */
            displaytype?: DisplayType;
            /**
             * footer height
             */
            height?: number | 'auto';
            /**
             * radius of the rounded box
             */
            roundedboxradius?: number;
            /**
             * defines properties for footer outer border
             */
            border?: {
                /**
                 * visibility of the border
                 */
                visible?: boolean;
                /**
                 * color of border
                 */
                color?: string;
            };
            /**
             * forbid the resizing of footer container bigger than accumulated size of the track header.
             */
            restrictmaxfootersize?: boolean;
            /**
             * enable tiled cache. It increases rendering performance for historical data
             */
            viewcache?: boolean | Cache;
            /**
             * Header provider. If a custom header provider is specified, sets setHeaderType to HeaderType.Footer
             */
            headerprovider?: LogVisualHeaderProvider;
        };
        /**
         * define highlight properties
         */
        highlight?: {
            /**
             * define highlight strategy
             */
            strategy?: TrackHighlightStrategy;
            /**
             * define highlight class name, see cssstyle.html tutorial
             */
            cssclass?: string;
            /**
             * define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
             */
            linestyle?: LineStyle.Type;
            /**
             * define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
             */
            fillstyle?: FillStyle.Type;
            /**
             * define header highlight options to override defaults
             */
            header?: {
                /**
                 * define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                linestyle?: LineStyle.Type;
                /**
                 * define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                fillstyle?: FillStyle.Type;
            };
            /**
             * define track highlight options to override defaults
             */
            track?: {
                /**
                 * define line style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                linestyle?: LineStyle.Type;
                /**
                 * define fill style attribute for visual highlight, in case if undefined is specified, no highlight will be applied
                 */
                fillstyle?: FillStyle.Type;
            };
        };
        /**
         * scroll option
         */
        scroll?: {
            trackverticalscroll?: {
                /**
                 * scroll bar class type
                 */
                type?: string;
                /**
                 * scroll bar visibility flag
                 */
                visible?: boolean | 'none';
                /**
                 * scroll bar size
                 */
                size?: number;
                /**
                 * scroll bar additional options
                 */
                options?: HVBaseScroll.Options;
            };
            /**
             * track container scroll option
             */
            trackhorizontalscroll?: {
                /**
                 * scroll bar class type
                 */
                type?: string;
                /**
                 * scroll bar visibility flag
                 */
                visible?: boolean | 'none';
                /**
                 * scroll bar size
                 */
                size?: number;
                /**
                 * scroll bar additional options
                 */
                options?: HVBaseScroll.Options;
            };
            /**
             * header container scroll option
             */
            headerverticalscroll?: {
                /**
                 * scroll bar class type
                 */
                type?: string;
                /**
                 * scroll bar visibility flag
                 */
                visible?: boolean | 'none';
                /**
                 * scroll bar size
                 */
                size?: number;
                /**
                 * scroll bar additional options
                 */
                options?: HVBaseScroll.Options;
            };
            /**
             * footer container scroll option
             */
            footerverticalscroll?: {
                /**
                 * scroll bar class type
                 */
                type?: string;
                /**
                 * scroll bar visibility flag
                 */
                visible?: boolean | 'none';
                /**
                 * scroll bar size
                 */
                size?: number;
                /**
                 * scroll bar additional options
                 */
                options?: HVBaseScroll.Options;
            };
            /**
             * scroll direction when using scroll wheel to scroll
             */
            direction?: ScrollDirection | string;
        };
        /**
         * defines properties for track
         */
        track?: {
            /**
             * defines properties for track background
             */
            background?: FillStyle.Type;
            /**
             * defines properties for track border
             */
            border?: {
                /**
                 * visibility of the border
                 */
                visible?: boolean;
                /**
                 * color of border border
                 */
                color?: string;
            };
            /**
             * optional track header properties
             * LogTrackHeaderParamsType
             */
            header?: LogTrackHeader.Options & {
                border?: {
                    visible?: boolean;
                    color?: string;
                    width?: number;
                    background?: FillStyle.Type;
                };
            };
            /**
             * optional track footer properties
             */
            footer?: LogTrackHeader.Options & {
                border?: {
                    visible?: boolean;
                    color?: string;
                    width?: number;
                    background?: FillStyle.Type;
                };
            };
        };
        verticalscrollable?: boolean | 'auto' | 'floating' | {
            /**
             * defines if header displays vertical scrollbars, true | false | "auto" | "floating"
             */
            header?: boolean | 'auto' | 'floating';
            /**
             * defines if plot displays vertical scrollbars, true | false | "auto" | "floating"
             */
            plot?: boolean | 'auto' | 'floating';
            /**
             * defines if footer displays vertical scrollbars, true | false | "auto" | "floating"
             */
            footer?: boolean | 'auto' | 'floating';
        };
    };
    /**
     * depth markers
     */
    type DepthMarkersOut = {
        /**
         * single depth marker
         */
        depth?: null | {
            /**
             * depth marker value
             */
            value?: number;
            /**
             * depth marker line style
             */
            linestyle?: LineStyle;
        };
        /**
         * depth marker set
         */
        depths?: null | {
            /**
             * depth marker set values
             */
            values?: number[];
            /**
             * depth marker set line style
             */
            linestyle?: LineStyle;
            /**
             * depth marker set fill style
             */
            fillstyle?: FillStyle;
        };
    };
    /**
     * depths marker value or options, null to hide all markers
     */
    type DepthMarkers = {
        /**
         * single depth marker options
         */
        depth?: {
            /**
             * single depth marker value
             */
            value?: number;
            /**
             * single depth marker line style
             */
            linestyle?: LineStyle.Type;
            /**
             * single depth marker fill style
             */
            fillstyle?: FillStyle.Type;
        };
        /**
         * depth marker set options
         */
        depths?: {
            /**
             * depth marker set values
             */
            values?: number[];
            /**
             * depth marker set line style
             */
            linestyle?: LineStyle.Type;
            /**
             * depth marker set fill style
             */
            fillstyle?: FillStyle.Type;
        };
    };
    /**
     * annotation sizes
     */
    type AnnotationSizes = {
        /**
         * a size of west annotation
         */
        west?: number;
        /**
         * a size of east annotation
         */
        east?: number;
        /**
         * a size of south annotation (if size is null it will be equal to footer height if it is visible)
         */
        south?: number;
        /**
         * a size of north annotation (if size is null it will be equal to header height if it is visible)
         */
        north?: number;
    };
    /**
     * track options
     */
    type TrackOptionsOut = {
        /**
         * track name
         */
        name?: string;
        /**
         * track type
         */
        type?: TrackType | number;
        /**
         * enable or disable automatic label rotation for index track
         */
        autolabelrotation?: boolean;
        /**
         * track index grid settings, only available when track type is NOT IndexTrack
         */
        index?: {
            /**
             * track index grid major settings
             */
            major?: {
                /**
                 * track index grid major visibility
                 */
                visible?: boolean;
                /**
                 * track index grid major line style.
                 */
                style?: LineStyle.Type;
            };
            /**
             * track index grid minor settings
             */
            minor?: {
                /**
                 * track index grid minor visibility
                 */
                visible?: boolean;
                /**
                 * track index grid minor line style.
                 */
                style?: LineStyle.Type;
            };
        };
        /**
         * track value grid settings, only available when track type is NOT IndexTrack
         */
        value?: {
            /**
             * log start, only available when track type is LogTrack
             */
            logstart?: number;
            /**
             * log stop, only available when track type is LogTrack
             */
            logstop?: number;
            /**
             * log scale, only available when track type is LogTrack
             */
            logscale?: number;
            /**
             * log decades, only available when track type is LogTrack
             */
            logdecades?: number;
            /**
             * track value grid major settings
             */
            major?: {
                /**
                 * major increment, only available when track type is LinearTrack
                 */
                increment?: number;
                /**
                 * track value grid major visibility
                 */
                visible?: boolean;
                /**
                 * track value grid major line style
                 */
                style?: LineStyle.Type;
            };
            /**
             * track value grid minor settings
             */
            minor?: {
                /**
                 * minor increment, only available when track type is LinearTrack
                 */
                increment?: number;
                /**
                 * track value grid minor visibility
                 */
                visible?: boolean;
                /**
                 * track value grid minor line style.
                 */
                style?: LineStyle.Type;
            };
        };
        /**
         * block settings
         */
        block?: {
            /**
             * block visibility
             */
            visible?: boolean;
            /**
             * block position
             */
            position?: Position;
        };
        /**
         * axis settings
         */
        axis?: {
            /**
             * name of axis
             */
            name?: string;
            /**
             * locale for tickgenerator of axis
             */
            locale?: string | Locale;
            /**
             * time zone for time axis
             */
            timezone?: string | TimeZone;
            /**
             * time zone offset for date time axis
             */
            timezoneoffset?: number;
            /**
             * track index axis ticks settings
             */
            ticks?: {
                /**
                 * track index axis edge ticks settings
                 */
                edge?: {
                    /**
                     * track index axis edge ticks visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis edge ticks style.
                     */
                    style?: LineStyle.Type;
                };
                /**
                 * track index axis major ticks settings
                 */
                major?: {
                    /**
                     * track index axis major ticks visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis major ticks style.
                     */
                    style?: LineStyle.Type;
                };
                /**
                 * track index axis minor ticks settings
                 */
                minor?: {
                    /**
                     * track index axis minor ticks visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis minor ticks style.
                     */
                    style?: LineStyle.Type;
                };
            };
            /**
             * track index axis labels settings
             */
            labels?: {
                /**
                 * track index axis edge settings
                 */
                edge?: {
                    /**
                     * track index axis edge labels visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis edge labels style.
                     */
                    style?: TextStyle.Type;
                };
                /**
                 * track index axis major settings
                 */
                major?: {
                    /**
                     * track index axis major labels visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis major labels style.
                     */
                    style?: TextStyle.Type;
                };
                /**
                 * track index axis minor labels settings
                 */
                minor?: {
                    /**
                     * track index axis minor labels visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis minor labels style.
                     */
                    style?: TextStyle.Type;
                };
            };
        };
    };
    /**
     * track options
     */
    type TrackOptions = {
        /**
         * track name
         */
        name?: string;
        /**
         * track type
         */
        type?: TrackType | number;
        /**
         * enable or disable automatic label rotation for index track
         */
        autolabelrotation?: boolean;
        /**
         * track index grid settings, only available when track type is NOT IndexTrack
         */
        index?: {
            /**
             * track index grid major settings
             */
            major?: {
                /**
                 * track index grid major visibility
                 */
                visible?: boolean;
                /**
                 * track index grid major line style
                 */
                style?: LineStyle.Options;
            };
            /**
             * track index grid minor settings
             */
            minor?: {
                /**
                 * track index grid minor visibility
                 */
                visible?: boolean;
                /**
                 * track index grid minor line style
                 */
                style?: LineStyle.Options;
            };
        };
        /**
         * track value grid settings, only available when track type is NOT IndexTrack
         */
        value?: {
            /**
             * log start, only available when track type is LogTrack
             */
            logstart?: number;
            /**
             * log stop, only available when track type is LogTrack
             */
            logstop?: number;
            /**
             * log scale, only available when track type is LogTrack
             */
            logscale?: number;
            /**
             * log decades, only available when track type is LogTrack
             */
            logdecades?: number;
            /**
             * track value grid major settings
             */
            major?: {
                /**
                 * major increment, only available when track type is LinearTrack
                 */
                increment?: number;
                /**
                 * track value grid major visibility
                 */
                visible?: boolean;
                /**
                 * track value grid major line style
                 */
                style?: LineStyle.Options;
            };
            /**
             * track value grid minor settings
             */
            minor?: {
                /**
                 * minor increment, only available when track type is LinearTrack
                 */
                increment?: number;
                /**
                 * track value grid minor visibility
                 */
                visible?: boolean;
                /**
                 * track value grid minor line style
                 */
                style?: LineStyle.Options;
            };
        };
        /**
         * block settings
         */
        block?: {
            /**
             * block visibility
             */
            visible?: boolean;
            /**
             * block position
             */
            position?: Position;
        };
        /**
         * axis settings
         */
        axis?: {
            /**
             * name of axis
             */
            name?: string;
            /**
             * locale for tickgenerator of axis
             */
            locale?: string;
            /**
             * time zone for time axis
             */
            timezone?: TimeZone;
            /**
             * time zone offset for date time axis
             */
            timezoneoffset?: number;
            /**
             * track index axis ticks settings
             */
            ticks?: {
                /**
                 * track index axis edge ticks settings
                 */
                edge?: {
                    /**
                     * track index axis edge ticks visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis edge ticks style.
                     */
                    style?: LineStyle.Options;
                };
                /**
                 * track index axis major ticks settings
                 */
                major?: {
                    /**
                     * track index axis major ticks visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis major ticks style.
                     */
                    style?: LineStyle.Options;
                };
                /**
                 * track index axis minor ticks settings
                 */
                minor?: {
                    /**
                     * track index axis minor ticks visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis minor ticks style.
                     */
                    style?: LineStyle.Options;
                };
            };
            /**
             * track index axis labels settings
             */
            labels?: {
                /**
                 * track index axis edge labels settings
                 */
                edge?: {
                    /**
                     * track index axis edge labels visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis edge labels style.
                     */
                    style?: TextStyle.Options;
                };
                /**
                 * track index axis major labels settings
                 */
                major?: {
                    /**
                     * track index axis major labels visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis major labels style.
                     */
                    style?: TextStyle.Options;
                };
                /**
                 * track index axis minor labels settings
                 */
                minor?: {
                    /**
                     * track index axis minor labels visibility
                     */
                    visible?: boolean;
                    /**
                     * track index axis minor labels style.
                     */
                    style?: TextStyle.Options;
                };
            };
        };
    };
    /**
     * option to specify paper parameters and header and footer
     */
    type ExportToPdfOptions = {
        truescale?: boolean;
        /**
         * an optional PDF header
         */
        header?: HeaderComponent;
        /**
         * an optional PDF footer
         */
        footer?: FooterComponent;
        /**
         * an optional function to return if header should be printed
         */
        isheadervisible?: PageElement.isVisiblePageElementCallback;
        /**
         * an optional function to return if footer should be printed
         */
        isfootervisible?: PageElement.isVisiblePageElementCallback;
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
         * export scale from model index unit to device unit by default as is
         */
        scale?: null | number;
        /**
         * define how many depth units in one device unit.
         */
        deviceunit?: AbstractUnit | string;
        indexunit?: AbstractUnit | string;
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
     * properties object
     */
    type OptionsOut = BaseWidget.OptionsOut & {
        /**
         * min and max depth range.
         */
        range?: Range;
        /**
         * defines if plot displays horizontal scrollbars, true | false | 'auto' | 'floating'
         */
        horizontalscrollable?: boolean | string;
        /**
         * defines if plot displays vertical scrollbars, true | false | 'auto' | 'floating' | object containing specific settings for all three containers
         */
        verticalscrollable?: boolean | string | {
            /**
             * defines if header displays vertical scrollbars, true | false | "auto" | "floating"
             */
            header?: boolean | string;
            /**
             * defines if plot displays vertical scrollbars, true | false | "auto" | "floating"
             */
            plot?: boolean | string;
            /**
             * defines if footer displays vertical scrollbars, true | false | "auto" | "floating"
             */
            footer?: boolean | string;
        };
        /**
         * primary index types
         */
        indextype?: AbstractUnit | string;
        /**
         * primary index unit
         */
        indexunit?: AbstractUnit | string;
        /**
         * primary device unit
         */
        deviceunit?: AbstractUnit | string;
        /**
         * time zone for time axis
         */
        timezone?: TimeZone | string;
        /**
         * time zone offset for date time axis
         */
        timezoneoffset?: number;
        /**
         * indent
         */
        indent?: number;
        /**
         * header options
         */
        header?: {
            /**
             * visibility of the headers, if it is 'none' then header is not created
             */
            visible?: boolean | string;
            /**
             * margin margin between header components
             */
            margin?: number;
            /**
             * padding padding inside header components
             */
            padding?: number;
            /**
             * display type
             */
            displaytype?: DisplayType;
            /**
             * header height
             */
            height?: number;
            /**
             * radius of the rounded box
             */
            roundedboxradius?: number;
            /**
             * defines properties for header outer border
             */
            border?: {
                /**
                 * visibility of the border
                 */
                visible?: boolean;
                /**
                 * color of border border
                 */
                color?: string;
            };
            /**
             * forbid the resizing of header container bigger than accumulutaed size of the track header.
             */
            restrictmaxheadersize?: boolean;
            /**
             * enable tiled cache. It increases rendering performance for historical data
             */
            viewcache?: boolean;
        };
        /**
         * footer options
         */
        footer?: {
            restrictmaxfootersize?: boolean;
            /**
             * visibility of the footer, if it is 'none' then footer is not created
             */
            visible?: boolean | string;
            /**
             * margin margin between footer components
             */
            margin?: number;
            /**
             * padding padding inside footer components
             */
            padding?: number;
            /**
             * display type
             */
            displaytype?: DisplayType;
            /**
             * footer height
             */
            height?: number;
            /**
             * radius of the rounded box
             */
            roundedboxradius?: number;
            /**
             * defines properties for footer outer border
             */
            border?: {
                /**
                 * visibility of the border
                 */
                visible?: boolean;
                /**
                 * color of border border
                 */
                color?: string;
            };
            /**
             * enable tiled cache. It increases rendering performance for historical data
             */
            viewcache?: boolean;
        };
        /**
         * grid line style
         */
        gridlinestyle?: LineStyle.Type;
        /**
         * enable tiled cache. It increases rendering performance for historical data
         */
        viewcache?: boolean;
        /**
         * defines properties for widget outer border
         */
        border?: {
            /**
             * visibility of the border
             */
            visible?: boolean;
            /**
             * color of border border
             */
            color?: string;
        };
        /**
         * collapsed options
         */
        collapsed?: {
            /**
             * collapsed intervals
             */
            intervals?: LogTrackContainer.CollapsedInterval[];
            /**
             * collapsed marker styles
             */
            marker?: {
                /**
                 * marker styles for collapsed mode
                 */
                collapsed?: {
                    /**
                     * marker line style
                     */
                    line?: {
                        /**
                         * marker line color
                         */
                        color?: string;
                        /**
                         * marker line width
                         */
                        width?: number;
                        /**
                         * marker line decoration style
                         */
                        decoration?: LineDecoration;
                    };
                    /**
                     * marker symbol shape
                     */
                    symbol?: SymbolShape.Options | SymbolShape;
                };
                /**
                 * marker styles for uncollapsed mode
                 */
                uncollapsed?: {
                    /**
                     * marker line style
                     */
                    line?: {
                        /**
                         * marker line color
                         */
                        color?: string;
                        /**
                         * marker line width
                         */
                        width?: number;
                        /**
                         * marker line decoration style
                         */
                        decoration?: LineDecoration;
                    };
                    /**
                     * marker symbol shape
                     */
                    symbol?: SymbolShape.Options | SymbolShape;
                };
            };
        };
        /**
         * annotations properties for axes, titles
         */
        annotations?: {
            /**
             * an array of items to be inserted as annotations to west
             */
            west?: Group;
            /**
             * an array of items to be inserted as annotations to east
             */
            east?: Group;
            /**
             * an array of items to be inserted as annotations to south
             */
            south?: Group;
            /**
             * an array of items to be inserted as annotations to north
             */
            north?: Group;
        };
        /**
         * Properties to hold (width or height) of the annotations
         */
        annotationssizes?: {
            /**
             * a size of west annotation
             */
            west?: number;
            /**
             * a size of east annotation
             */
            east?: number;
            /**
             * a size of south annotation
             */
            south?: number;
            /**
             * a size of north annotation
             */
            north?: number;
        };
        /**
         * marker options
         */
        marker?: {
            /**
             * date time format in case if track container scale unit belongs to 'time'
             */
            datetimeformat?: DateTimeFormat.Options;
            /**
             * visibility of the marker index value label
             */
            indexvisible?: boolean;
            /**
             * depth index format that accept number
             */
            indexformatter?: DepthMarkerShape.Options['depthformatter'];
            valueformatter?: DepthMarkerShape.Options['valueformatter'];
            /**
             * label visibility
             */
            labelvisible?: boolean;
            /**
             * display symbol for interpolated values
             */
            enabledinterpolatedvalues?: boolean;
            /**
             * marker shape fill style
             */
            fillstyle?: FillStyle.Type;
            /**
             * marker shape line style
             */
            linestyle?: LineStyle.Type;
        };
        /**
         * tools options
         */
        tools?: {
            /**
             * JSON which defines crosshair cursor.
             */
            crosshair?: CrossHair.OptionsOut;
            /**
             * cursor tracking options
             */
            cursortracking?: {
                /**
                 * JSON which defines crosshair cursor.
                 */
                crosshair?: CrossHair.OptionsOut;
                /**
                 * JSON which defines tooltip tool.
                 */
                tooltip?: ToolTipTool.Options;
            };
            /**
             * splitter options
             */
            tracksplitter?: WellogSplitter.OptionsOut;
        };
        /**
         * defines properties for track container
         */
        trackcontainer?: {
            /**
             * defines properties for track container outer border
             */
            border?: {
                /**
                 * visibility of the border
                 */
                visible?: boolean;
                /**
                 * color of border border
                 */
                color?: string;
            };
            /**
             * options of track inside the track container
             */
            track?: {
                /**
                 * apply a border strategy to the LogTrack class
                 */
                borderstrategy?: BorderStrategy;
                /**
                 * apply a highlight strategy to the LogTrack class
                 */
                highlightstrategy?: TrackHighlightStrategy;
            };
            /**
             * specify direction of the vertical axis. By default it goes from top to bottom. if it is true
             * then an axis goes from bottom to top.
             */
            verticalflip?: boolean;
        };
        /**
         * defines properties for track
         */
        track?: {
            /**
             * defines properties for track background
             */
            background?: FillStyle.Type;
            /**
             * defines properties for track border
             */
            border?: {
                /**
                 * visibility of the border
                 */
                visible?: boolean;
                /**
                 * color of border border
                 */
                color?: string;
            };
            /**
             * optional track header properties
             */
            header?: {
                /**
                 * visibility of track title
                 */
                visibletracktitle?: boolean;
                /**
                 * order of the track title header
                 */
                titlefirst?: boolean;
                /**
                 * order of the track child headers
                 */
                firsttolast?: boolean;
                /**
                 * position of the track child headers
                 */
                toptobottom?: boolean;
                /**
                 * if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
                 */
                holdtitle?: HoldTitle;
                /**
                 * optional track header properties
                 */
                border?: {
                    /**
                     * visibility of the track header border
                     */
                    visible?: boolean;
                    /**
                     * color of track header border
                     */
                    color?: string;
                    /**
                     * line width of track header border
                     */
                    width?: number;
                    /**
                     * color of border background
                     */
                    background?: string;
                };
            };
            /**
             * optional track footer properties
             */
            footer?: {
                /**
                 * visibility of track title
                 */
                visibletracktitle?: boolean;
                /**
                 * order of the track title footer
                 */
                titlefirst?: boolean;
                /**
                 * order of the track child footers
                 */
                firsttolast?: boolean;
                /**
                 * position of the track child footers
                 */
                toptobottom?: boolean;
                /**
                 * if not HoldTitle.None then title always display atop all visuals in header even when panning/scrolling header
                 */
                holdtitle?: HoldTitle;
                /**
                 * optional track footer properties
                 */
                border?: {
                    /**
                     * visibility of the track footer border
                     */
                    visible?: boolean;
                    /**
                     * color of track footer border
                     */
                    color?: string;
                    /**
                     * line width of track footer border
                     */
                    width?: number;
                    /**
                     * color of border background
                     */
                    background?: string;
                };
            };
        };
        /**
         * defines properties for index track
         */
        indextrack?: {
            /**
             * index track line styles and text styles
             */
            styles?: {
                label?: {
                    minor?: TextStyle.Type;
                    major?: TextStyle.Type;
                    edge?: TextStyle.Type;
                };
                tick?: {
                    minor?: LineStyle.Type;
                    major?: LineStyle.Type;
                    edge?: LineStyle.Type;
                };
            };
            /**
             * custom label format function
             */
            labelformat?: TickGenerator.LabelFormatHandler;
            /**
             * axis settings
             */
            axis?: {
                /**
                 * name of axis
                 */
                name?: string;
                /**
                 * locale for tickgenerator of axis
                 */
                locale?: string;
            };
        };
        /**
         * define highlight properties
         */
        highlight?: {
            /**
             * define highlight strategy
             */
            strategy?: TrackHighlightStrategy;
            /**
             * define highlight class name, see cssstyle.html tutorial. If cssclass is specified
             * then line and fill styles are ignored. If it is necessary to change fill style or line for highlighted or selected visual then remove
             * 'hover' and cssclass from visual using removeCssClass and add it after changes. See example below.
             */
            cssclass?: string;
            /**
             * define line style attribute for visual highlight
             */
            linestyle?: LineStyle;
            /**
             * define fill style attribute for visual highlight
             */
            fillstyle?: FillStyle.Type;
            /**
             * define header highlight options
             */
            header?: {
                /**
                 * define line style attribute for header highlight
                 */
                linestyle?: LineStyle.Type;
                /**
                 * define fill style attribute for header highlight
                 */
                fillstyle?: FillStyle.Type;
            };
            /**
             * define track highlight options
             */
            track?: {
                /**
                 * define line style attribute for track highlight
                 */
                linestyle?: LineStyle.Type;
                /**
                 * define fill style attribute for track highlight
                 */
                fillstyle?: FillStyle.Type;
            };
        };
        /**
         * scroll option
         */
        scroll?: {
            /**
             * scroll direction when using scroll wheel to scroll
             */
            direction?: ScrollDirection | string;
        };
        /**
         * set orientation of the well log widget
         */
        orientation?: Orientation;
        /**
         * set track render direction
         */
        direction?: TrackRenderDirection;
        /**
         * node filter for visual which can be selected
         */
        nodefilter?: (item: Node) => boolean;
    };
    type Tools = {
        'cross-hair': CrossHair;
        'index-cross-hair': CrossHair;
        'HeaderPanning': Panning;
        'FooterPanning': Panning;
        'rubberband': RubberBand;
        'pick': Selection;
        'TrackPanning': Panning;
        'TrackZoom': Zoom;
        'horizontal-splitter': Splitter;
        'multi-tooltip': ToolTipTool;
        'splitter': WellogSplitter;
        'drag-and-drop': DragAndDrop;
        'cursor-tracking': CompositeTool;
        'overlay': CompositeTool;
    } & BaseWidget.Tools;
    type EventMap = Group.EventMap & {
        [WellogWidgetsEvents.TracksSizeChanged]: TrackEventArgs;
        [WellogWidgetsEvents.VisibleDepthLimitsChanged]: {
            old: Range;
            new: Range;
        };
        [WellogWidgetsEvents.VisualsSelected]: Node[];
        [WellogWidgetsEvents.DataUpdating]: {
            start: number;
            end: number;
        };
        [WellogWidgetsEvents.DepthRangeChanged]: void;
        [WellogWidgetsEvents.OrientationChanged]: void;
        [SelectionEvents.onDoubleClick]: SelectionEventArgs;
    };
}
