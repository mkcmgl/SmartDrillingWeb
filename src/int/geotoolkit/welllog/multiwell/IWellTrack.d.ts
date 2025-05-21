/**
 * @module geotoolkit/welllog/multiwell/IWellTrack
 */
import { IBaseWellTrack } from '@int/geotoolkit/welllog/multiwell/IBaseWellTrack';
import type { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import type { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import type { Layer } from '@int/geotoolkit/scene/Layer';
import type { Registry } from '@int/geotoolkit/persistence/Registry';
import type { DataSource } from '@int/geotoolkit/data/DataSource';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import type { DataBinding } from '@int/geotoolkit/data/DataBinding';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import type { Range } from '@int/geotoolkit/util/Range';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { LogTrackContainer } from '@int/geotoolkit/welllog/widgets/visuals/LogTrackContainer';
import type { WellTrackHeader } from '@int/geotoolkit/welllog/multiwell/WellTrackHeader';
/**
 * Define an interface for well track
 * @interface
 * @deprecated since 4.0. Use WellTrack directly
 */
export declare abstract class IWellTrack extends IBaseWellTrack {
    /**
     * Add a track to the back
     * @param track track to add or options to specify adding track
     */
    abstract addTrack(track: LogTrackContainer.InsertTrack): LogTrack;
    /**
     * Insert track to the container at specified index
     * @param index index of the track
     * @param track track to insert or type of track or track options
     * @example
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * // The code below shows how to create a well track with position from 0 to 300 in the model coordinates and depth range from 500 to 1000
     * const well = widget.insertTrack(1, {
     *   'type': TrackType.LogTrack,
     *   'width': 400
     * });
     */
    abstract insertTrack(index: number, track: LogTrackContainer.InsertTrack): LogTrack;
    /**
     * Remove the track with headers and footers
     * @param track track to remove
     * @returns this
     */
    abstract removeTrack(track: LogTrack): this;
    /**
     * Returns amount of tracks
     * @returns amount of tracks
     */
    abstract getTracksCount(): number;
    /**
     * Sets a depth scale factor.
     * @throws Will throw an error if the current scale is NaN
     * @param scale A number of depth units in device unit.
     * @param [scaleUnit] scale unit of the display. if it is not specified then it takes from track container
     * @param [deviceUnit] device unit of the display. if it is not specified then it takes from track container
     * @returns this
     * @example
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * //  To set depth scale range as a ratio, you can use units as follows
     * const unitFactory = UnitFactory.getInstance();
     * well.setDepthScale(30, unitFactory.getUnit("feet"), unitFactory.getUnit("inch")); //1 inch == 30 feet
     */
    abstract setDepthScale(scale: number, scaleUnit?: AbstractUnit, deviceUnit?: AbstractUnit): this;
    /**
     * Return scale to device. How many scale units in one device unit.
     * @param [scaleUnit] scale unit of the display. if it is not specified then it takes from track container
     * @param [deviceUnit] device unit of the display. if it is not specified then it takes from track container
     * @returns a index scale to device or NaN if scale if not available
     * @example
     * import {UnitFactory} from '@int/geotoolkit/util/UnitFactory';
     * //  to get the current depth scale of well.
     * const uf = UnitFactory.getInstance();
     * well.getDepthScale(uf.getUnit("cm"), uf.getUnit("cm"));
     */
    abstract getDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Returns {@link @int/geotoolkit/welllog/LogTrack~LogTrack} at specified index
     * @param index index to return track at
     */
    abstract getTrackAt(index: number): LogTrack;
    /**
     * Return index of track
     * @param track to get index
     * @returns index of the track
     */
    abstract getTrackIndex(track: LogTrack): number;
    /**
     * Return a layer to display markers
     */
    abstract getMarkerLayer(): Layer;
    /**
     * Load template
     * @param template template to be applied to the widget
     * @param [registry] registry
     * @returns this
     */
    abstract loadTemplate(template: string, registry?: Registry): this;
    /**
     * Save template
     * @param [registry] registry
     * @returns return template as a string
     */
    abstract saveTemplate(registry?: Registry): string;
    /**
     * Returns data source
     */
    abstract getData(): DataSource | AbstractDataTable;
    /**
     * Sets a new data model
     * @param data logdata
     * @returns this
     */
    abstract setData(data: DataSource | AbstractDataTable): this;
    /**
     * Return the data binding
     */
    abstract getDataBinding(): DataBinding;
    /**
     * Sets the data binding
     * @param binding data binding
     * @param [silent] silent mode to forbid
     * @returns this
     */
    abstract setDataBinding(binding: DataBinding, silent?: boolean): this;
    /**
     * Return tool by name
     * @param name name of the tool
     */
    abstract getToolByName(name: string): AbstractTool;
    /**
     * Returns root tool associated to this widget
     */
    abstract getTool(): CompositeTool;
    /**
     * Connect a new tool with a tool name to the widget
     * @param tool tool associated with the widget
     * @returns this
     */
    abstract connectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Disconnect the tool from the widget
     * @param tool tool to disconnect
     * @returns this
     */
    abstract disconnectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Resize tracks to fit width of the well
     */
    abstract fitToWidth(): this;
    /**
     * Return title
     * @returns well title
     */
    abstract getTitle(): string;
    /**
     * Sets well title
     * @param title well title
     * @returns this
     */
    abstract setTitle(title: string): this;
    /**
     * Sets depth limits for all tracks
     * @param minIndex min index limit
     * @param maxIndex max index limit
     */
    abstract setDepthLimits(minIndex: number, maxIndex: number): this;
    /**
     * Sets depth limits for all tracks
     * @param range depth range
     */
    abstract setDepthLimits(range: Range): this;
    /**
     * Sets the same depth or time limits for all tracks
     * @param minIndex min index limit
     * @param [maxIndex] max index limit
     * @returns this
     * @example
     * // full depth limits or scrollable limits of your widget can be set as follows:
     * widget.setDepthLimits(minDepth, maxDepth);
     */
    abstract setDepthLimits(minIndex: number | Range, maxIndex?: number): this;
    /**
     * Sets visible depth limits
     * @param fromIndex depth range
     * @param [toIndex] option to fit to container visible limits
     */
    abstract setVisibleDepthLimits(fromIndex: Range, toIndex?: boolean): this;
    /**
     * Sets visible depth limits
     * @param fromIndex start depth
     * @param toIndex end range
     * @param [fitHeight] option to fit to container visible limits
     * @example
     * // Set visible limits to fit visible area of container
     * well.setVisibleDepthLimits(limits, true);
     */
    abstract setVisibleDepthLimits(fromIndex: number, toIndex: number, fitHeight?: boolean): this;
    /**
     * Sets visible depth limits
     * By default it tries to fit depth based on the current visible limits of the well. If container limits
     * should be used then specify the last parameter to true
     * @param fromIndex start depth or depth range
     * @param [toIndex] end range or option to fit to container visible limits
     * @param [fitHeight] option to fit to container visible limits
     * @example
     * // Set visible limits to fit visible area of container
     * well.setVisibleDepthLimits(limits, true);
     */
    abstract setVisibleDepthLimits(fromIndex: number | Range, toIndex?: number | boolean, fitHeight?: boolean): this;
    /**
     * Return a depth range, which is visible now
     */
    abstract getVisibleDepthLimits(): Range;
    /**
     * Return a depth range, which is visible now
     */
    abstract getVisible(): boolean;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     */
    abstract setBounds(bounds: Rect): this;
    /**
     * Return track header for internal use only
     */
    abstract getHeader(): WellTrackHeader;
}
