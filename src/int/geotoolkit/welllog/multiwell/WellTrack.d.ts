import { Node, StateChanges } from '@int/geotoolkit/scene/Node';
import { WellLogWidget } from '@int/geotoolkit/welllog/widgets/WellLogWidget';
import { AbstractWellTrack } from '@int/geotoolkit/welllog/multiwell/AbstractWellTrack';
import { Events as SelectionEvents } from '@int/geotoolkit/controls/tools/Selection';
import { Layer } from '@int/geotoolkit/scene/Layer';
import { IWellTrack } from '@int/geotoolkit/welllog/multiwell/IWellTrack';
import { IExportable } from '@int/geotoolkit/scene/exports/IExportable';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import { Events as WellogWidgetsEvents } from '@int/geotoolkit/welllog/widgets/Events';
import { WellTrackHeader } from '@int/geotoolkit/welllog/multiwell/WellTrackHeader';
import { TrackEventArgs } from '@int/geotoolkit/welllog/widgets/TrackEventArgs';
import type { LogTrackContainer } from '@int/geotoolkit/welllog/widgets/visuals/LogTrackContainer';
import type { Range } from '@int/geotoolkit/util/Range';
import type { TrackType } from '@int/geotoolkit/welllog/TrackType';
import type { DataBinding } from '@int/geotoolkit/data/DataBinding';
import type { DataSource } from '@int/geotoolkit/data/DataSource';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Registry as CarnacRegistry } from '@int/geotoolkit/persistence/Registry';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import type { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import type { LogAbstractVisual } from '@int/geotoolkit/welllog/LogAbstractVisual';
import type { Position } from '@int/geotoolkit/welllog/LogBlock';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import type { SelectionEventArgs } from '@int/geotoolkit/controls/tools/SelectionEventArgs';
import type { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { TimeZone } from '@int/geotoolkit/axis/TimeZone';
import type { DataBindingRegistry } from '@int/geotoolkit/data/DataBindingRegistry';
/**
 * Define a default implementation for IWellTrack
 * @see {@link @int/geotoolkit/welllog/widgets/WellLogWidget~WellLogWidget}
 */
export declare class WellTrack extends AbstractWellTrack implements IWellTrack, IExportable {
    constructor(options?: WellTrack.Options);
    on<E extends keyof WellTrack.EventMap>(type: E, callback: (eventType: E, sender: this, args: WellTrack.EventMap[E]) => void): this;
    off<E extends keyof WellTrack.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: WellTrack.EventMap[E]) => void): this;
    notify<E extends keyof WellTrack.EventMap>(type: E, source: WellTrack, args?: WellTrack.EventMap[E]): this;
    clone(): WellTrack;
    protected copyConstructor(src: WellTrack, deepCopy?: boolean): this;
    /**
     * Returns manipulator layer
     * @returns layer
     */
    getManipulatorLayer(): CompositeNode;
    /**
     * Returns depth range
     */
    getDepthLimits(): Range;
    /**
     * Return a depth range, which is visible now
     */
    getVisibleDepthLimits(): Range;
    /**
     * Add a track
     * @param track track to add or options to specify adding track
     */
    addTrack(track: LogTrackContainer.InsertTrack): LogTrack;
    /**
     * Insert track to the container at specified index
     * @param index index of the track
     * @param track track to add or options to specify adding track
     * @example
     * // The code below shows how to create a well track with position from 0 to 300 in the model coordinates and depth range from 500 to 1000
     * const well = widget.insertTrack(1, {
     *   'type': LogTrack
     *   'width': 400
     * });
     */
    insertTrack(index: number, track: LogTrackContainer.InsertTrack): LogTrack;
    /**
     * Remove the track with headers and footers
     * @param track track to remove
     * @param [disposeTrack] automatically dispose track. If it is true then method dispose is called for track.
     */
    removeTrack(track: LogTrack, disposeTrack?: boolean): this;
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
     * Return index of track
     * @param track to get index
     * @returns index of the track
     */
    getTrackIndex(track: LogTrack): number;
    /**
     * Set track width and layout remains track
     * @param width track width
     * @param [track] if track is not defined then width is set
     * for all tracks
     * @returns this
     */
    setTrackWidth(width: number, track?: LogTrack): this;
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
     * Sets a new data source
     * @param data data source
     * @returns this
     */
    setData(data: DataSource | AbstractDataTable): this;
    /**
     * Gets a data model
     */
    getData(): DataSource | AbstractDataTable;
    /**
     * Return a layer to display markers
     */
    getMarkerLayer(): Layer;
    /**
     * Return a layer to display zones
     */
    getZoneLayer(): Layer;
    /**
     * Set bounds of the well
     * @param bounds track bounds
     */
    setBounds(bounds: Rect): this;
    /**
     * Resize tracks to fit width of the well
     */
    fitToWidth(): this;
    /**
     * Remove selection if it exists
     * @returns this
     */
    removeSelection(): this;
    /**
     * Return the currently selected items
     * @returns array of selected object
     */
    getSelection(): Node[];
    /**
     * Load template
     * @param template template to be applied to the track
     * @param [registry] registry
     * @returns this
     */
    loadTemplate(template: string | WellTrack, registry?: CarnacRegistry): this;
    /**
     * Calculate a real size of tracks
     * @returns total width of the tracks
     */
    getTracksSize(): number;
    /**
     * Save template
     * @param [registry] registry
     * @returns return template as a string
     */
    saveTemplate(registry?: CarnacRegistry): string;
    /**
     * Sets the same depth or time limits for all tracks
     *
     * @param minIndex min index limit
     * @param [maxIndex] max index limit
     * @returns this
     * @example
     * // full depth limits or scrollable limits of your widget can be set as follows:
     * widget.setDepthLimits(minDepth, maxDepth);
     */
    setDepthLimits(minIndex: number | Range, maxIndex?: number): this;
    /** */
    setDepthScale(scale: number, scaleUnit?: AbstractUnit, deviceUnit?: AbstractUnit): this;
    /**
     * Return scale to device. How many scale units in one device unit.
     * @param [scaleUnit] scale unit of the display. if it is not specified then it takes from track container
     * @param [deviceUnit] device unit of the display. if it is not specified then it takes from track container
     * @returns a index scale to device or NaN if scale if not available
     * @example
     * //  to get the current depth scale of welllog widget.
     * const uf = UnitFactory.getInstance();
     * well.getDepthScale(uf.getUnit("cm"), uf.getUnit("cm"));
     */
    getDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Sets index unit
     * @param unit index unit
     * @returns this
     */
    setIndexUnit(unit: AbstractUnit | string): this;
    /**
     * Gets index unit of the current well
     * @returns unit
     */
    getIndexUnit(): AbstractUnit;
    /**
     * Sets device unit of the current well
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
     * Sets inner model limits
     *
     * @param modelLimits inner limits
     * @throws {Error} Well Track model limits is fixed
     * @returns this
     */
    setModelLimits(modelLimits: Rect): this;
    /**
     * Returns the tool matching the given name.<br>
     * This function also accepts tool 'path' instead of absolute name.<br>
     * For example:<br>
     * getToolByName("compositeTool.panningTools.trackPanning.TrackPanning")<br>
     * Would return the same tool than <br>
     * getToolByName("TrackPanning")<br>
     * As long as there is only one tool named "TrackPanning" in this composite<br>
     * See listToolsNames()<br>
     * @param toolName The tool name or path
     */
    getToolByName<Name extends keyof WellLogWidget.Tools>(toolName: Name): WellLogWidget.Tools[Name];
    /**
     * Connect a new tool with a toolname to the widget
     * @param tool tool associated with the widget
     * @returns this
     */
    connectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Disconnect the tool from the widget
     * @param tool tool to disconnect
     * @returns this
     */
    disconnectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Returns root tool associated to this widget
     */
    getTool(): CompositeTool;
    /**
     * Update adornments
     */
    updateAdornments(): void;
    /**
     * Mark this group to be updated.
     * @param [regions] optional array to return invalid rectangles
     * @param [changes] optional parameter to specify a reason of changes
     * @returns this
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Prepares object before exporting and saving state
     * @returns this
     */
    beginExport(): this;
    /**
     * Used to restore object's state after exporting
     * @returns this
     */
    endExport(): this;
    /**
     * Returns exportable element
     * @returns return exportable element
     */
    getExportElement(): AbstractDocumentElement;
    /**
     * Highlights a visual or track. Called whenever a visual is selected to highlight it. <br>
     * If user selects a curve and the track, the curve,track and header are highlighted.
     * Programmatically deselecting a track doesn't automatically deselect curves.<br>
     * Deselect all selected tracks and visuals using the example shown below.
     *
     * @param visual The visual to highlight
     * @param highlight the status of the highlight
     * @example
     * well.highlightVisual(visual, false);
     * @returns this
     */
    highlightVisual(visual: LogTrack | LogAbstractVisual, highlight: boolean): this;
    /**
     * Return selected track collection
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
     * Sets track options
     * @param track log track
     * @param options track options
     * @example
     * //The code to configure the gridlines in a log track, specify logdecades and generate multiple logticks
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * well.setTrackOptions(track, {
     *       'type:': TrackType.LogTrack,
     *       'value': {
     *           'logstart': 0.2,
     *           'logdecades': 4
     *       }
     *   });
     */
    setTrackOptions(track: LogTrack, options: WellTrack.TrackOptions): LogTrack | null;
    /**
     * Returns track options
     * @param track track to get options
     * @returns track options
     */
    getTrackOptions(track: LogTrack): WellLogWidget.TrackOptionsOut;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties object
     * @see {@link @int/geotoolkit/welllog/widgets/WellLogWidget~WellLogWidget}
     */
    getProperties(): WellTrack.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @see {@link @int/geotoolkit/welllog/widgets/WellLogWidget~WellLogWidget}
     * @returns this
     */
    setProperties(properties?: WellTrack.Options): this;
    /**
     * Return Well Header
     */
    getHeader(): WellTrackHeader;
    /**
     * Return Well Footer
     */
    getFooter(): WellTrackHeader | null;
}
export declare namespace WellTrack {
    /**
     * addition options
     */
    export type Options = AbstractWellTrack.Options & {
        /**
         * options for well log
         */
        welllog?: WellLogOptions;
        factory?: (opts: Options['welllog']) => WellLogWidget;
        class?: typeof WellLogWidget;
        /**
         * position in container
         */
        range?: Range;
        /**
         * well id
         */
        id?: string | number;
        /**
         * well width
         */
        width?: number;
    };
    /**
     * track options
     */
    export type TrackOptions = {
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
        };
    };
    /**
     * properties object
     */
    export type OptionsOut = Group.OptionsOut & {
        /**
         * options for well log
         */
        welllog: WellLogWidget.Options;
    };
    type WellLogOptions = WellLogWidget.Options & {
        /**
         * Header options
         */
        header?: {
            /**
             * Auto rotate options
             */
            autorotate?: boolean;
        };
        /**
         * Footer options
         */
        footer?: {
            /**
             * Auto rotate options
             */
            autorotate?: boolean;
        };
    };
    export type EventMap = AbstractWellTrack.EventMap & {
        [WellogWidgetsEvents.TracksSizeChanged]: TrackEventArgs;
        [WellogWidgetsEvents.VisibleDepthLimitsChanged]: {
            old: Range;
            new: Range;
        };
        [WellogWidgetsEvents.VisualsSelected]: Node[];
        [SelectionEvents.onDoubleClick]: SelectionEventArgs;
        [WellogWidgetsEvents.DepthRangeChanged]: void;
    };
    export {};
}
