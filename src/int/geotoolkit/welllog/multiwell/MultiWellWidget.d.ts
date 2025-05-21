import { Point } from '@int/geotoolkit/util/Point';
import { Node, StateChanges } from '@int/geotoolkit/scene/Node';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import { CorrelationTrack } from '@int/geotoolkit/welllog/multiwell/CorrelationTrack';
import { AnchorType } from '@int/geotoolkit/util/AnchorType';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import { Group } from '@int/geotoolkit/scene/Group';
import { WellBehaviorRegistry } from '@int/geotoolkit/welllog/multiwell/WellBehaviorRegistry';
import { Layer } from '@int/geotoolkit/scene/Layer';
import { IExportable } from '@int/geotoolkit/scene/exports/IExportable';
import { Events as WellogWidgetsEvents } from '@int/geotoolkit/welllog/widgets/Events';
import { Events as SelectionEvents, Selection } from '@int/geotoolkit/controls/tools/Selection';
import { Axis } from '@int/geotoolkit/axis/Axis';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import { DragAndDrop } from '@int/geotoolkit/controls/tools/DragAndDrop';
import { GhostTool } from '@int/geotoolkit/welllog/widgets/tools/GhostTool';
import { CrossHair } from '@int/geotoolkit/controls/tools/CrossHair';
import { WellTrack } from '@int/geotoolkit/welllog/multiwell/WellTrack';
import type { ProxyWellTrack } from '@int/geotoolkit/welllog/multiwell/ProxyWellTrack';
import { CorrelationCursor } from '@int/geotoolkit/welllog/multiwell/tools/CorrelationCursor';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { Panning } from '@int/geotoolkit/controls/tools/Panning';
import { Zoom } from '@int/geotoolkit/controls/tools/Zoom';
import { Splitter as BaseSplitter } from '@int/geotoolkit/controls/tools/splitter/Splitter';
import { Range } from '@int/geotoolkit/util/Range';
import { Events as WellEvents } from '@int/geotoolkit/welllog/multiwell/Events';
import { LogBaseTrackHeader } from '@int/geotoolkit/welllog/header/LogBaseTrackHeader';
import { ITrack } from '@int/geotoolkit/welllog/ITrack';
import { ImageCompression } from '@int/geotoolkit/pdf/ImageCompression';
import { SpeedCompression } from '@int/geotoolkit/pdf/SpeedCompression';
import { PdfExport } from '@int/geotoolkit/pdf/PdfExport';
import { IWritable } from '@int/geotoolkit/util/stream/IWritable';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { DataSource } from '@int/geotoolkit/data/DataSource';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import type { DataBinding } from '@int/geotoolkit/data/DataBinding';
import type { TrackType } from '@int/geotoolkit/welllog/multiwell/TrackType';
import type { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import type { FooterComponent } from '@int/geotoolkit/scene/exports/FooterComponent';
import type { HeaderComponent } from '@int/geotoolkit/scene/exports/HeaderComponent';
import type { HsvColor } from '@int/geotoolkit/util/HsvColor';
import type { RgbaColor } from '@int/geotoolkit/util/RgbaColor';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { Unit } from '@int/geotoolkit/util/Unit';
import type { AbstractWellTrackFactory } from '@int/geotoolkit/welllog/multiwell/AbstractWellTrackFactory';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { HeaderContainer } from '@int/geotoolkit/welllog/HeaderContainer';
import type { WellLogWidget } from '@int/geotoolkit/welllog/widgets/WellLogWidget';
import type { HVBaseScroll } from '@int/geotoolkit/controls/tools/scroll/HVBaseScroll';
import type { ScrollTool } from '@int/geotoolkit/controls/tools/scroll/ScrollTool';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { TrackEventArgs } from '@int/geotoolkit/welllog/widgets/TrackEventArgs';
import type { SelectionEventArgs } from '@int/geotoolkit/controls/tools/SelectionEventArgs';
/**
 * Enum of Fit Strategy
 * @readonly
 * @enum
 */
export declare enum FitStrategy {
    /**
     * Fit specified rect to visible container model limits
     */
    FitToContainer = "FitToContainer",
    /**
     * Fit specified rect to visible model bounds
     */
    FitToModel = "FiToModel"
}
/**
 * The MultiWell widget is a widget that provides a base multi well container functionality. By default, a Multi Well Correlation Widget
 * has a track container, header and footer containers, and default tools. A track container can display different well tracks, correlation
 * panels, or log tracks. The wells can be visualized with different depth scales and offsets.
 * The well track is based on WellLog widget functionality and supports all visuals and templates supported
 * for single well visualization. Wells are located in track container, which can have own model limits, units and scale factors.
 *
 * The Default tools include:
 * <ul>
 *  <li> Horizontal scrollbar </li>
 *  <li> Panning </li>
 *  <li> Zoom </li>
 * </ul>
 * </p>
 * @example
 * import {MultiWellWidget} from '@int/geotoolkit/welllog/multiwell/MultiWellWidget';
 * import {TrackType as MultiTrackType} from '@int/geotoolkit/welllog/multiwell/TrackType';
 * import {Range} from '@int/geotoolkit/util/Range';
 * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
 * import {CorrelationTrack} from '@int/geotoolkit/welllog/multiwell/CorrelationTrack';
 * import {CorrelationMarker} from '@int/geotoolkit/welllog/multiwell/correlation/CorrelationMarker';
 * import {LogMarker} from '@int/geotoolkit/welllog/LogMarker';
 * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
 * import {TextStyle} from '@int/geotoolkit/attributes/TextStyle';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * // Create the empty widget
 * const widget = new MultiWellWidget().setLayoutStyle({'left': 0, 'top': 0, 'right': 0, 'bottom': 0});
 * // Add the first well
 * const well1 = widget.addTrack(MultiTrackType.WellTrack, {
 *             'range': new Range(0, 500),
 *             'welllog': {
 *                 'range': new Range(4500, 5000)
 *             }
 *         });
 * // Add the correlation track
 * const correlationTrack1 = widget.addTrack(MultiTrackType.CorrelationTrack, {
 *             'width': 50
 *         });
 * // add the second well
 * const well2 = widget.addTrack(MultiTrackType.WellTrack, {
 *             'range': new Range(50, 300),
 *             'welllog': {
 *                 'range': new Range(2500, 5000)
 *             }
 *         });
 * // Add data to the wells
 *     function addWellData (well: WellTrack, startDepth: number) {
 *      well.addTrack(TrackType.IndexTrack);
 *      well.addTrack(TrackType.LinearTrack)
 *          .addChild([
 *              createCurve(createTestData(startDepth, 10, 'GR'))
 *                  .setLineStyle(new LineStyle(Helpers.getColor('green'), 1)),
 *              createCurve(createTestData(startDepth, 10, 'CALI'))
 *                  .setLineStyle(new LineStyle(Helpers.getColor('orange'), 1))
 *          ]);
 *  }
 * // Add tops as a logMarker
 * function addTops(well: WellTrack, name: string, depth: number, color: string) {
 *      const top = new LogMarker(depth);
 *      top.setLineStyle(LineStyle.fromObject({'color': color}));
 *      top.setTextStyle(TextStyle.fromObject({
 *          'color': color,
 *          'alignment': "left",
 *          'font': "12px sans-serif"
 *      }));
 *      top.setNameLabel(name);
 *      top.setNameLabelPosition(AnchorType.TopCenter);
 *      top.setDepthLabel(depth);
 *      top.setDepthLabelPosition(AnchorType.BottomCenter);
 *      well.getMarkerLayer().addChild(top);
 *  }
 * // Add the correlation between the wells.
 *   function addTopsCorrelation(widget: MultiWellWidget, track: CorrelationTrack, leftDepth: number, rightDepth: number, color) {
 *      const index = widget.indexOfTrack(track);
 *      const leftWell = widget.getTrackAt(index-1);
 *      const rightWell = widget.getTrackAt(index+1);
 *      track.setWells(leftWell, rightWell);
 *      track.addChild(new CorrelationMarker({
 *          'linestyle': {
 *              'color': color,
 *              'width': 2,
 *              'pixelsnapmode': {'x': true, 'y': true}
 *          },
 *          'leftdepth': leftDepth,
 *          'rightdepth': rightDepth
 *      }));
 *  }
 */
export declare class MultiWellWidget extends BaseWidget implements IExportable {
    /**
     * Creates MultiWellWidget
     * @param [options] options
     */
    constructor(options?: MultiWellWidget.Options);
    on<E extends keyof MultiWellWidget.EventMap>(type: E, callback: (eventType: E, sender: this, args: MultiWellWidget.EventMap[E]) => void): this;
    off<E extends keyof MultiWellWidget.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: MultiWellWidget.EventMap[E]) => void): this;
    /**
     * Sets index unit
     */
    setIndexUnit(unit: AbstractUnit | string): this;
    /**
     * Gets index unit
     */
    getIndexUnit(): AbstractUnit;
    /**
     * Add annotation to annotation container
     * @param name name of container
     * @param item item to add
     */
    addAnnotation(name: string | AnnotationLocation, item: Group | Axis): this;
    /**
     * Add annotation to annotation container
     * @param name name of container
     * @param item item to add
     */
    removeAnnotation(name: string | AnnotationLocation, item: Group | Axis): this;
    /**
     * Synchronizes axis or group with a track container model
     *
     * @param object object to connect to the central component
     * @param [orientation] model orientation
     */
    connect(object: Group | Axis, orientation?: Orientation): this;
    /**
     * Returns manipulator overlay to draw temporary shapes on top of the track container
     */
    getTrackManipulatorLayer(): Layer;
    /**
     * function call in the constructor to initialize tools in the widget
     * @param [options] options
     */
    protected initializeTools(options?: MultiWellWidget.Options['tools']): this;
    /**
     * Send event DataUpdating to update data. The event argument's
     * includes type, source, `{'start, 'end'}`, where start and end is visible range
     * @deprecated since 4.0
     * @returns this
     */
    updateData(): this;
    /**
     * Enumeratisual in track container
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
    getData(): AbstractDataTable | DataSource;
    /**
     * Return the data binding
     */
    getDataBinding(): DataBinding;
    /**
     * Sets the data binding
     * @param binding data binding
     * @param [silent] silent mode to forbid
     * @returns this
     */
    setDataBinding(binding: DataBinding, silent?: boolean): this;
    /**
     * Sets node filter for selection tool
     * @param nodeFilter filter that allows to filter selected nodes.
     * @returns this
     */
    setNodeFilter(nodeFilter: (item: Node) => boolean): this;
    /**
     * Return center model limits
     * @returns model limits of the tracks
     */
    getCenterModelLimits(): Rect;
    /**
     * Sets center model limits if auto track limits is false
     * @param limits limits to set
     * @returns this
     */
    setCenterModelLimits(limits: Rect): this;
    /**
     * Sets center depth limits. (Vertical limits)
     * <p>This is a helper method because it sets up only vertical limits of setCenterModelLimits</p>
     */
    setCenterDepthLimits(range: Range): this;
    /**
     * Sets center depth limits. (Vertical limits)
     * <p>This is a helper method because it sets up only vertical limits of setCenterModelLimits</p>
     */
    setCenterDepthLimits(minIndex: number, maxIndex: number): this;
    /**
     * Returns depth range of the center container.
     */
    getCenterDepthLimits(): Range;
    /**
     * Add track, well to the container.
     * <p>By default well track track has size specified in the range options and depth range specified in the options welllog</p>
     * @param track track to add
     * @param [options] options additional options if track has a {@link @int/geotoolkit/welllog/multiwell/TrackType~TrackType}
     * @example
     * // The code below shows how to create a well track with position from 0 to 300 in the model coordinates and depth range from 500 to 1000
     * import {TrackType} from '@int/geotoolkit/welllog/multiwell/TrackType';
     * import {Range} from '@int/geotoolkit/util/Range';
     * const well = widget.addTrack(TrackType.WellTrack, {
     *   'width': 400,
     *   'range': new Range(0, 300),
     *   'welllog': {
     *       'range': new Range(500, 1000)
     *   }
     * });
     * @example
     * // The code below shows how to create a well track to provide the first parameter
     * import {TrackType} from '@int/geotoolkit/welllog/multiwell/TrackType';
     * import {Range} from '@int/geotoolkit/util/Range';
     * const well = widget.addTrack({
     *   'type': TrackType.WellTrack
     *   'width': 400,
     *   'range': new Range(0, 300),
     *   'welllog': {
     *       'range': new Range(500, 1000)
     *   }
     * });
     */
    addTrack(track: TrackType.CorrelationTrack, options?: CorrelationTrack.Options): CorrelationTrack;
    addTrack(track: TrackType.WellTrack, options?: WellTrack.Options): WellTrack;
    addTrack(track: TrackType.ProxyTrack, options?: ProxyWellTrack.Options): ProxyWellTrack;
    addTrack(track: MultiWellWidget.Track): ITrack;
    addTrack(track: ITrack, options?: WellTrack.Options): ITrack;
    addTrack(track: ITrack[], options?: WellTrack.Options): ITrack[];
    /**
     * A factory method to create an instance of the track
     * @param type track type to create
     * @param [options] options
     * @see {@link @int/geotoolkit/welllog/widgets/WellLogWidget~WellLogWidget} for all available options for wellllog properties of the well track
     * @example
     * title supports templates with HTML
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * _multiWellWidget.createTrack(TrackType.WellTrack, {
     *       'title': '<b>Well ' + (_wellIndex++) + '</b><p>1 ${deviceUnit} : ${scaleValue} ${scaleUnit}</p>'
     * });
     * Supported keywords:
     * ${name} - track name
     * ${deviceUnit} - device unit symbol
     * ${scaleValue} - scale value
     * ${scaleUnit} - scale unit symbol
     */
    createTrack(track: TrackType.CorrelationTrack, options?: CorrelationTrack.Options): CorrelationTrack;
    createTrack(track: TrackType.WellTrack, options?: WellTrack.Options): WellTrack;
    createTrack(track: TrackType.ProxyTrack, options?: ProxyWellTrack.Options): ProxyWellTrack;
    createTrack(type: TrackType, options?: MultiWellWidget.TrackOptions): ITrack;
    /**
     * Insert track, well to the container at specified index
     * @param index index of the track
     * @param track track to insert
     * @param [options] track options if the track has a {@link @int/geotoolkit/welllog/multiwell/TrackType~TrackType}
     * @example
     * // The code below shows how to create a well track with position from 0 to 300 in the model coordinates and depth range from 500 to 1000
     * import {TrackType} from '@int/geotoolkit/welllog/multiwell/TrackType';
     * import {Range} from '@int/geotoolkit/util/Range';
     * const well = widget.insertTrack(1, TrackType.WellTrack, {
     *   'width': 400,
     *   'range': new Range(0, 300),
     *   'welllog': {
     *       'range': new Range(500, 1000)
     *   }
     * });
     * @example
     * // The code below shows how to create a well track and pass all options in the the second parameter
     * import {TrackType} from '@int/geotoolkit/welllog/multiwell/TrackType';
     * import {Range} from '@int/geotoolkit/util/Range';
     * const well = widget.insertTrack(1, {
     *   'type': TrackType.WellTrack
     *   'width': 400,
     *   'range': new Range(0, 300),
     *   'welllog': {
     *       'range': new Range(500, 1000)
     *   }
     *  });
     */
    insertTrack(index: number, track: TrackType.CorrelationTrack, options?: CorrelationTrack.Options): CorrelationTrack;
    insertTrack(index: number, track: TrackType.WellTrack, options?: WellTrack.Options): WellTrack;
    insertTrack(index: number, track: TrackType.ProxyTrack, options?: ProxyWellTrack.Options): ProxyWellTrack;
    insertTrack(index: number, options: MultiWellWidget.Track): ITrack;
    insertTrack(index: number, track: TrackType | ITrack): ITrack;
    /**
     * Track it added to container
     * @param track track added
     */
    protected onTrackAdded(track: ITrack[] | ITrack): this;
    /**
     * Track is removing from container
     * @param track to be removed
     */
    protected onTrackRemoving(track: ITrack): void;
    /**
     * Return iterator by child tracks
     *
     * @param [filter] a filter function. Returns all tracks if null
     */
    getTracks(filter?: (node: ITrack) => boolean): Iterator<ITrack>;
    /**
     * Returns wells count
     * @returns amount of wells
     */
    getTracksCount(): number;
    /**
     * Returns track at specified index
     * @param index index of the track
     * @returns well track
     */
    getTrackAt(index: number): ITrack | null;
    /**
     * Returns track at specified position in plot coordinate
     * @param x x coordinate position
     * @param [y] y coordinate position
     */
    getTrackAtPosition(x: number | Point, y?: number): LogTrack | null;
    /**
     * Remove all tracks from this widget
     * @param [disposeChildren] automatically dispose children. If it is true then method dispose is called for each child.
     * @returns this
     */
    clearTracks(disposeChildren?: boolean): this;
    /**
     * Remove Well Track at specified index
     * @throws Error if index out of bounds
     * @param index track index
     * @returns this
     */
    removeTrackAt(index: number): this;
    /**
     * Remove specified Well Track
     * @param wellTrack track to remove
     * @returns this
     */
    removeTrack(wellTrack: ITrack): this;
    /**
     * Returns the index of specified track.
     * @param wellTrack track to get index
     */
    indexOfTrack(wellTrack: ITrack): number;
    /**
     * Returns the track header if it exists
     * @param track current track
     */
    getTrackHeader(track: ITrack): Group<Node> | LogBaseTrackHeader;
    /**
     * Returns the track footer if it exists
     * @param track current track
     */
    getTrackFooter(track: ITrack): Group<Node> | LogBaseTrackHeader;
    /**
     * Returns selected Well Track
     * @returns well track
     */
    getSelectedTrack(): ITrack;
    /**
     * Set selected well
     * @param wellTrack track to select
     */
    setSelectedTrack(wellTrack: ITrack): this;
    /**
     * Does zoom in (namely, scales with predefined scale factor (5 / 4))
     * @returns this
     */
    zoomIn(): this;
    /**
     * Does zoom out (namely, scales with predefined scale factor (4 / 5))
     * @returns this
     */
    zoomOut(): this;
    /**
     * Fit the whole tracks height in the visible area
     * @returns this
     */
    fitToHeight(): this;
    /**
     * Resize widget width to fit it in visible area
     * @param [tracksWidth] new track width
     * @returns this
     */
    fitToWidth(tracksWidth?: number): this;
    /**
     * Returns visible center model limits
     * @returns visible center model limits
     */
    getCenterVisibleModelLimits(): Rect;
    /**
     * Sets center visible model limits
     * @param rect a new center model visible limits
     * @param [fitStrategy] fit strategy
     * @returns this
     */
    setCenterVisibleModelLimits(rect: Rect, fitStrategy?: FitStrategy): this;
    /**
     * Sets center visible model limits
     * @param rect a new center model visible limits
     * @param [deviceBounds] device bounds of the container to fit new model limits.
     * @returns this
     */
    setCenterVisibleModelLimits(rect: Rect, deviceBounds?: Rect): this;
    /**
     * Change relative scale of tracks. These scales are mulitplies to existing ones.
     * @param scaleX horizontal scale factor
     * @param [scaleY] vertical scale factor
     * @param [anchor] anchor for zoom
     * @returns this
     */
    scale(scaleX: number, scaleY?: number, anchor?: AnchorType | Point): this;
    /**
     * Sets mode to keep fixed width of tracks and wells for horizontal scale
     * @param enable enable fixed width of wells  during scale
     * @returns this
     */
    setFixedTracksWidth(enable: boolean): this;
    /**
     * Returns mode to keep fixed width of tracks and wells for horizontal scale
     */
    getFixedTracksWidth(): boolean;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Updates layout(s)
     * @param [targets] optional parameter about which element to layout
     * @param [updateScrollBarState] updateScrollBarState
     * @returns this
     */
    updateLayout(targets?: ILayoutable[], updateScrollBarState?: boolean): this;
    /**
     * Return true if headers and footers are attached to track
     */
    isAttachedHeaders(): boolean;
    /**
     * update Scroll Positions using visible limits and model limits.
     *
     * @param [updateScrollBarState] update Scroll Positions using visible limits and model limits or not
     * @param [enableAnimation] show animation
     */
    updateScrollPositions(updateScrollBarState?: boolean, enableAnimation?: boolean): this;
    notify<E extends keyof MultiWellWidget.EventMap>(event: E, source: MultiWellWidget, args?: MultiWellWidget.EventMap[E]): this;
    /**
     * Update header
     * @returns this
     */
    updateHeader(): this;
    /**
     * Update footer
     * @returns this
     */
    updateFooter(): this;
    /**
     * Returns header container. Note that container's bounds are not necessary match with
     * its visible limits as it can reside in other container. To get/set device header size, use
     * get/set HeaderHeight() method. if header visible option is 'none' then equals to null
     */
    getHeaderContainer(): HeaderContainer;
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
     * Sets some widget options
     * @param [options] addition options
     * @returns this
     * @example
     * //call  setOptions on widget after construction and change the default header size(84) as follows.
     * widgets.setOptions({'header' : {
     *     'height': 184
     *     }});
     */
    setOptions(options?: MultiWellWidget.OptionsBase): this;
    /**
     * Returns some widget options
     */
    getOptions(): MultiWellWidget.OptionsBaseOut;
    /**
     * Sets all the properties pertaining to this object
     *
     * @param [properties] addition options
     * @returns this
     */
    setProperties(properties?: MultiWellWidget.Options): this;
    /**
     * Gets all the properties pertaining to this object
     *
     * @returns properties
     */
    getProperties(): MultiWellWidget.OptionsOut;
    /**
     * Returns footer container. Note that container's bounds are not necessary match with
     * its visible limits as it can reside in other container. To get/set device footer size, use
     * get/set FooterHeight() method. if footer visible option is 'none' then equals to null
     */
    getFooterContainer(): HeaderContainer;
    /**
     * Returns track container
     */
    getTrackContainer(): Group;
    /**
     * Distributes the same alignment to all tracks with regard to the top,
     * the bottom or center of wells.
     * @param depth a new wells depth to be aligned to
     * @param [alignment] alignment of track according to container visible limits.
     * alignment value is "top", "bottom", "center".
     * @param [containment] verify if a track contains depth. If it is true and track
     * doesn't have specified depth then it will be scrolled to the top.
     * @returns this
     */
    alignToDepth(depth: number, alignment?: string, containment?: boolean): this;
    /**
     * Distributes the same alignment to all tracks with regard to the top,
     * the bottom or center of wells by marker name. If track doesnt' have specified marker then it will be scrolled
     * to top.
     * @param name marker name or function to find marker
     * @param [alignment] vertical alignment of track according to container visible limits. alignment value is "top", "bottom", "center"
     * @returns this
     */
    alignToMarker(name: string | ((n: Node) => boolean), alignment?: string): this;
    /**
     * Pans to the point
     * @param [x] X coordinate of point to pan in track container model coordinate. if it is null it doesn't move in this direction
     * @param [y] Y coordinate of point to pan in track container model coordinate. if it is null it doesn't move in this direction
     * @param [alignment] alignment of specified point according to container
     * visible limits.
     */
    panTo(x?: number, y?: number, alignment?: string | AnchorType): this;
    /**
     * Scroll the  specified track in container then depth of this track is defined by alignment
     * @param track track to scroll
     * @param depth depth of the current track. if depth is out of the depth limits track will be scrolled proportionally to up or down
     * @param alignment alignment of track according to container visible limits. alignment value is "top", "bottom", "center"
     * @param [anchor] position of container to be aligned
     * @returns this
     */
    scrollTrackToDepth(track: Exclude<ITrack, CorrelationTrack>, depth: number, alignment: string, anchor?: number): this;
    /**
     * Scroll track by depth on delta depth
     * @param track track to scroll
     * @param delta depth of the current track.
     * @returns this
     */
    scrollTrackByDepth(track: Exclude<ITrack, CorrelationTrack>, delta: number): this;
    /**
     * Pans view to track with specified alignment and option depth. if detph it not specified the middle fo the track is used
     *
     * @param track track to scroll
     * @param [depth] depth of the specified track. if it is null it doesn't move in this direction.
     * @param [alignment] alignment of specified point according to container
     * visible limits.
     */
    panToTrack(track: Exclude<ITrack, CorrelationTrack>, depth?: number, alignment?: string | AnchorType): this;
    /**
     * Convert track container vertical space to track depth
     * @param track track
     * @param depth depth
     */
    convertModelDepthToTrackDepth(track: Exclude<ITrack, CorrelationTrack>, depth: number): number;
    /**
     * Convert track depth to container vertical model space
     * @param track track
     * @param depth depth
     */
    convertTrackDepthToModelDepth(track: Exclude<ITrack, CorrelationTrack>, depth: number): number;
    /**
     * Align tracks by the top position
     * @param [offset] offset in container coordinates
     * @param [alignment] vertical alignment of tracks in container. It can be 'top', 'bottom', 'center'
     * @returns this
     */
    alignTracks(offset?: number, alignment?: string): this;
    /**
     * Reset depth scale to be equal to model depth scale for all or specified tracks
     * @param [tracks] track or array
     * of specified tracks. If tracks are not specified then it resets scale for all tracks in the widget
     * @returns this
     * @example
     * // How to reset scale for two tracks
     * widget.resetTracksDepthScale(track1, track2]);
     */
    resetTracksDepthScale(tracks?: Exclude<ITrack, CorrelationTrack>): this;
    /**
     * Return model track size and position in the model coordinates consider offset and scale.
     * @param track track to return size
     * @returns return model position and size
     */
    getModelTrackSize(track: ITrack): Rect;
    /**
     * Return export model limits
     */
    getExportLimits(): Rect;
    /**
     * Sets export model limits
     * @param limits export limits
     */
    setExportLimits(limits: Rect): this;
    /**
     * Return export scale
     */
    getExportScale(): {
        scalex: number;
        scaley: number;
    };
    /**
     * Sets export scale
     * @param scaleX export scale factor along x coordinate
     * @param scaleY export scale factor along y coordinate
     */
    setExportScale(scaleX: number, scaleY: number): this;
    /**
     * Returns exportable element
     * @param [options] export options
     * @returns return exportable element
     */
    getExportElement(options?: MultiWellWidget.ExportToPdfOptions): AbstractDocumentElement;
    /**
     * Used to prepare object before exporting
     * @returns this
     */
    beginExport(): this;
    /**
     * Used to restore object's state after exporting
     * @returns this
     */
    endExport(): this;
    /**
     * Gets annotation at specified location
     * @param location Enum of annotation locations used to specify direction to insert
     */
    getAnnotation(location: AnnotationLocation | string): Group | null;
    /**
     * Mark this group to be updated.
     * @param [regions] optional array to return invalid rectangles
     * @param [changes] optional parameter to specify a reason of changes
     * @returns this
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Return scale of model context to device. How many scale units in one device unit in the vertical direction.
     * @param [scaleUnit] scale unit of the display. if it is not specified then it takes from track container
     * @param [deviceUnit] device unit of the display. if it is not specified then it takes from track container
     * @returns a index scale to device or NaN if scale is not available
     * @example
     * // How to get the current depth scale of multiwell widget.
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * const uf = UnitFactory.getInstance();
     * WellLogWidget.getModelDepthScale(uf.getUnit('cm'), uf.getUnit('cm'));
     */
    getModelDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Sets a scale factor in vertical direction for container
     * @throws Will throw an error if the current scale is NaN
     * @param scale A number of depth units in device unit.
     * @param [scaleUnit] scale unit of the display. if it is not specified then it takes from track container
     * @param [deviceUnit] device unit of the display. if it is not specified then it takes from track container
     * @returns this
     * @example
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * //  To set depth scale range as a ratio, you can use units as follows
     * const unitFactory = UnitFactory.getInstance();
     * widget.setModelDepthScale(30, unitFactory.getUnit('feet'), unitFactory.getUnit('inch')); //1 inch == 30 feet
     */
    setModelDepthScale(scale: number, scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): this;
    setOrientation(orientation: Orientation): this;
    getOrientation(): Orientation;
    /**
     * Exports the widget content as a PDF file, user has option to select the scale of track in pdf.
     * @param [options] option to specify paper parameters and header and footer
     * @returns promise with output stream
     */
    exportToPdf(options?: MultiWellWidget.ExportToPdfOptions): Promise<IWritable>;
    getToolByName<T extends keyof MultiWellWidget.Tools>(toolName: T): MultiWellWidget.Tools[T] | null;
}
export declare namespace MultiWellWidget {
    type SplitterOptions = AbstractTool.Options & {
        multitrackmodel?: Group;
        welltrackcontainer?: Group;
    };
    export type OptionsBaseOut = {
        header: {
            visible: boolean | 'none';
            height: number;
        };
        footer: {
            visible: boolean | 'none';
            height: number;
        };
        tops: {
            /**
             * widget
             */
            widget: BaseWidget;
            /**
             * alignment
             */
            alignment: AnchorType;
            /**
             * if true, names will be drawn only on visible limits of track container
             */
            autoscroll: boolean;
        };
        tools: {
            tracksplitter: AbstractTool.OptionsOut;
        };
    };
    /**
     * addition options
     */
    export type Options = BaseWidget.Options & OptionsBase;
    export type OptionsBase = {
        /**
         * node filter
         */
        nodefilter?: (item: Node) => boolean;
        /**
         * define visible content limits in model coordinates
         */
        visiblelimits?: Rect;
        /**
         * defines if plot displays horizontal scrollbars
         */
        horizontalscrollable?: boolean | 'auto' | 'floating';
        /**
         * defines if plot displays vertical scrollbars | object containing specific settings for all three containers
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
         * model limits' unit in vertical direction
         */
        indexunit?: AbstractUnit | string;
        /**
         * device unit for content to apply scale
         */
        deviceunit?: AbstractUnit | string;
        /**
         * attached well headers and footers
         */
        attachedheaders?: boolean;
        /**
         * calculates content model limits based on tracks position as union
         */
        autotrackslimits?: boolean;
        /**
         * header options
         */
        header?: {
            /**
             * visibility of the headers. If it is 'none' then it is not created.
             */
            visible?: boolean | 'none';
            /**
             * header height
             */
            height?: number | 'auto';
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
             * enable tiled cache. It increases rendering performance for historical data
             */
            viewcache?: boolean;
            /**
             * define view cache parameters
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
            /**
             * forbid the resizing of header container bigger than accumulated size of the track header.
             */
            restrictmaxheadersize?: boolean;
        };
        /**
         * footer options
         */
        footer?: {
            /**
             * visibility of the footer. If it is 'none' then it is not created.
             */
            visible?: boolean | 'none';
            /**
             * footer height
             */
            height?: number | 'auto';
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
            /**
             * define view cache parameters
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
         * enable tiled cache. It increases rendering performance for historical data
         */
        viewcache?: boolean;
        /**
         * define view cache parameters
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
        /**
         * defines properties for track container
         */
        trackcontainer?: {
            /**
             * horizontal axis goes from right to left
             */
            verticalflip?: boolean;
            /**
             * defines properties for track container outer border
             */
            border?: {
                /**
                 * visibility of the border
                 */
                visible?: boolean;
                /**
                 * border color
                 */
                color?: string;
            };
        };
        /**
         * optional scroll options
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
                visible?: boolean;
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
                visible?: boolean;
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
                visible?: boolean;
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
                visible?: boolean;
                /**
                 * scroll bar size
                 */
                size?: number;
                /**
                 * scroll bar additional options
                 */
                options?: HVBaseScroll.Options;
            };
        };
        /**
         * optional track options
         */
        well?: {
            /**
             * well track factory
             */
            factory?: AbstractWellTrackFactory;
            /**
             * well track behavior registry
             */
            behavior?: WellBehaviorRegistry;
        };
        /**
         * optional track options
         */
        track?: {
            /**
             * fixed width of tracks for horizontal scale
             */
            fixedwidth?: boolean;
            /**
             * optional track header properties
             */
            header?: {
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
            west?: Node[];
            /**
             * an array of items to be inserted as annotations to east
             */
            east?: Node[];
            /**
             * an array of items to be inserted as annotations to south
             */
            south?: Node[];
            /**
             * an array of items to be inserted as annotations to north
             */
            north?: Node[];
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
             * a size of south annotation (if size is null it will be equal to footer height if it is visible)
             */
            south?: number;
            /**
             * a size of north annotation (if size is null it will be equal to header height if it is visible)
             */
            north?: number;
        };
        /**
         * a percent of how much track should remain in the visible space when panning a track
         */
        offscreentrackpanning?: number;
        /**
         * define highlight properties
         */
        highlight?: {
            /**
             * define highlight class name, see cssstyle.html tutorial
             */
            cssclass?: string;
            /**
             * define line style attribute for visual highlight
             */
            linestyle?: LineStyle.Type;
            /**
             * define fill style attribute for visual highlight
             */
            fillstyle?: FillStyle.Type;
        };
        /**
         * define tops overlay properties
         */
        tops?: {
            /**
             * tops overlay visibility
             */
            visible?: boolean;
            /**
             * tops alignment
             */
            alignment?: AnchorType;
            /**
             * tops are always on visible limits if true
             */
            autoscroll?: boolean;
        };
        /**
         * tools options
         */
        tools?: {
            /**
             * tracks splitter options See {@link import("geotoolkit/controls/tools/AbstractTool").AbstractTool.setProperties} for details
             */
            tracksplitter?: SplitterOptions;
        };
        /**
         * orientation
         */
        orientation?: Orientation;
    };
    /**
     * Track options
     */
    export type Track = ({
        type?: TrackType.WellTrack;
    } & WellTrack.Options) | ({
        type?: TrackType.ProxyTrack;
    } & ProxyWellTrack.Options) | ({
        type?: TrackType.CorrelationTrack;
    } & CorrelationTrack.Options);
    /**
     * options
     */
    export type TrackOptions = {
        /**
         * track width
         */
        width?: number;
        /**
         * vertical position in widget
         */
        range?: Range;
        /**
         * well track options for log track or well. if it is not specified the container limits are used
         */
        welllog?: WellLogWidget.Options;
        /**
         * track title, uses for header and footer
         */
        title?: string;
    };
    /**
     * properties
     */
    export type OptionsOut = BaseWidget.OptionsOut & {
        /**
         * define visible content limits in model coordinates
         */
        visiblelimits?: Rect;
        /**
         * defines if plot displays horizontal scrollbars, true | false | "auto" | "floating"
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
         * model limits' unit in vertical direction
         */
        indexunit?: AbstractUnit;
        /**
         * device unit for content to apply scale
         */
        deviceunit?: AbstractUnit;
        /**
         * attached well headers and footers
         */
        attachedheaders?: boolean;
        /**
         * calculates content model limits based on tracks position as union
         */
        autotrackslimits?: boolean;
        /**
         * header options
         */
        header?: {
            /**
             * visibility of the headers. If it is 'none' then it is not created.
             */
            visible?: boolean | string;
            /**
             * header height
             */
            height?: number | string;
            /**
             * defines properties for header outer border
             */
            border?: {
                /**
                 * visibility of the border
                 */
                visible?: boolean | 'none';
                /**
                 * border color
                 */
                color?: string;
            };
            /**
             * enable tiled cache. It improves rendering performance for historical data
             */
            viewcache?: boolean;
            /**
             * define view cache parameters
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
            /**
             * forbid the resizing of header container bigger than accumulated size of the track header.
             */
            restrictmaxheadersize?: boolean;
        };
        /**
         * footer options
         */
        footer?: {
            /**
             * visibility of the footer. If it is 'none' then it is not created.
             */
            visible?: boolean | 'none';
            /**
             * footer height
             */
            height?: number | string;
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
            /**
             * define view cache parameters
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
         * enable tiled cache. It increases rendering performance for historical data
         */
        viewcache?: boolean;
        /**
         * define view cache parameters
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
        /**
         * defines properties for track container
         */
        trackcontainer?: {
            /**
             * horizontal axis goes from right to left
             */
            verticalflip?: boolean;
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
        };
        /**
         * optional track options
         */
        track?: {
            /**
             * fixed width of tracks for horizontal scale
             */
            fixedwidth?: boolean;
            /**
             * optional track header properties
             */
            header?: {
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
                };
            };
        };
        /**
         * annotations properties for axes, titles
         */
        annotations?: {
            /**
             * west annotation container
             */
            west?: Group;
            /**
             * east annotation container
             */
            east?: Group;
            /**
             * south annotation container
             */
            south?: Group;
            /**
             * north annotation container
             */
            north?: Group;
        };
        /**
         * Properties to hold (width or height) of the annotations
         */
        annotationssizes?: {
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
         * a percent of how much track should remain in the visible space when panning a track
         */
        offscreentrackpanning?: number;
        /**
         * define highlight properties
         */
        highlight?: {
            /**
             * define highlight class name, see cssstyle.html tutorial
             */
            cssclass?: string;
            /**
             * define line style attribute for visual highlight
             */
            linestyle?: LineStyle | LineStyle.Options | RgbaColor | HsvColor | string | null;
            /**
             * define fill style attribute for visual highlight
             */
            fillstyle?: FillStyle;
        };
        /**
         * define tops overlay properties
         */
        tops?: {
            /**
             * tops overlay visibility
             */
            visible?: boolean;
            /**
             * tops alignment
             */
            alignment?: AnchorType;
            /**
             * tops are always on visible limits if true
             */
            autoscroll?: boolean;
        };
        /**
         * tools options
         */
        tools?: {
            /**
             * tracks splitter options See {@link import("geotoolkit/controls/tools/AbstractTool").AbstractTool.getProperties} for details
             */
            tracksplitter?: SplitterOptions;
        };
        /**
         * orientation
         */
        orientation?: Orientation;
    };
    /**
     * option to specify paper parameters and header and footer
     */
    export type ExportToPdfOptions = {
        /**
         * an optional PDF header
         */
        header?: HeaderComponent;
        /**
         * an optional PDF footer
         */
        footer?: FooterComponent;
        /**
         * an optional document PDF footer
         */
        documentheader?: HeaderComponent;
        /**
         * an optional docuement PDF footer
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
         * scale by x from model units to pixels
         */
        scalex?: number;
        /**
         * scale by y from model units to pixels
         */
        scaley?: number;
        /**
         * device unit
         */
        deviceunit?: string | Unit;
        /**
         * true scale flag
         */
        truescale?: boolean;
        /**
         * export model limits
         */
        limits?: {
            /**
             * start limit by default visible limits
             */
            x1?: number;
            /**
             * end limit by default visible limits
             */
            x2?: number;
            /**
             * start limit by default visible limits
             */
            y1?: number;
            /**
             * end limit by default visible limits
             */
            y2?: number;
        };
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
         * Callback to show export progress
         */
        progress?: (currentPage: number, totalPages: number) => void;
    };
    export type Tools = {
        'pick': Selection;
        'horizontal-splitter': BaseSplitter;
        'multiwell-splitter': BaseSplitter;
        'drag-and-drop': DragAndDrop;
        'panningTools': CompositeTool;
        'HeaderPanning': Panning;
        'FooterPanning': Panning;
        'TrackPanning': Panning;
        'TrackZoom': Zoom;
        'cross-hair': CrossHair;
        'HorizontalPlotScroll': ScrollTool;
        'TrackPlotVerticalScroll': ScrollTool;
        'ghost': GhostTool;
        'correlation-cursor': CorrelationCursor;
        'header-tools': CompositeTool;
        'well-tools': CompositeTool;
        'footer-tools': CompositeTool;
    } & BaseWidget.Tools;
    export type EventMap<T extends Node = Node> = Group.EventMap<T> & {
        [WellEvents.DataUpdating]: {
            start: number;
            end: number;
            scale: number;
        };
        [WellogWidgetsEvents.VisualsSelected]: Node[];
        [SelectionEvents.onDoubleClick]: SelectionEventArgs;
        [WellogWidgetsEvents.TracksSizeChanged]: TrackEventArgs;
    };
    export {};
}
