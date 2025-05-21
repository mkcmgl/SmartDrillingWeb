import { AbstractWellTrack } from '@int/geotoolkit/welllog/multiwell/AbstractWellTrack';
import { Layer } from '@int/geotoolkit/scene/Layer';
import { Rect } from '@int/geotoolkit/util/Rect';
import { IProxyWellTrack } from '@int/geotoolkit/welllog/multiwell/IProxyWellTrack';
import { IExportable } from '@int/geotoolkit/scene/exports/IExportable';
import { Range } from '@int/geotoolkit/util/Range';
import { AbstractUnit } from '@int/geotoolkit/util/AbstractUnit';
import { CompositeTool } from '@int/geotoolkit/controls/tools/CompositeTool';
import { Node } from '@int/geotoolkit/scene/Node';
import { WellTrack } from '@int/geotoolkit/welllog/multiwell/WellTrack';
import { Events as SelectionEvents } from '@int/geotoolkit/controls/tools/Selection';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { DataSource } from '@int/geotoolkit/data/DataSource';
import type { DataBinding } from '@int/geotoolkit/data/DataBinding';
import type { AbstractDocumentElement } from '@int/geotoolkit/scene/exports/AbstractDocumentElement';
import type { ITrack } from '@int/geotoolkit/welllog/ITrack';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import type { Group } from '@int/geotoolkit/scene/Group';
import type { Unit } from '@int/geotoolkit/util/Unit';
import type { AbstractDataTable } from '@int/geotoolkit/data/AbstractDataTable';
import { Events as WellogWidgetsEvents } from '@int/geotoolkit/welllog/widgets/Events';
import { TrackEventArgs } from '@int/geotoolkit/welllog/widgets/TrackEventArgs';
import type { SelectionEventArgs } from '@int/geotoolkit/controls/tools/SelectionEventArgs';
/**
 * Navigation events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * It occurs when well became visible and can instantiate the well
     */
    Mount = "mount",
    /**
     * It occurs when well need to be created
     */
    Create = "create"
}
/**
 * The Proxy well track is designated to improve template loading performance
 * @example
 * import {MultiWellWidget} from '@int/geotoolkit/welllog/multiwell/MultiWellWidget';
 * import {TrackType as MultiTrackType} from '@int/geotoolkit/welllog/multiwell/TrackType';
 *
 * const proxyWell = multiWellWidget.addTrack(MultiTrackType.ProxyTrack, {
 *        'range': positions,
 *         'welllog': {
 *             'range': depthrange
 *         },
 *         'width': template.getLayoutStyle().getWidth(),
 *         'height': template.getLayoutStyle().getHeight(),
 *         'prototype': {
 *             'template': template,
 *             'create': (track: ProxyWellTrack) => new Promise( (resolve, reject) => {
 *                 const template = track.getPrototype();
 *                 if (template != null) {
 *                     const instance = template.clone() as WellTrack | LogTrack;
 *                     return resolve(instance);
 *                 }
 *                 return reject(new Error('error'));
 *             })
 *         },
 *         'title': title
 *  });
 */
export declare class ProxyWellTrack extends AbstractWellTrack implements IProxyWellTrack, IExportable {
    /**
     * Creates proxy well track
     * @param [options] addition options
     */
    constructor(options?: ProxyWellTrack.Options);
    on<E extends keyof ProxyWellTrack.EventMap>(type: E, callback: (eventType: E, sender: this, args: ProxyWellTrack.EventMap[E]) => void): this;
    off<E extends keyof ProxyWellTrack.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ProxyWellTrack.EventMap[E]) => void): this;
    notify<E extends keyof ProxyWellTrack.EventMap>(type: E, source: ProxyWellTrack, args?: ProxyWellTrack.EventMap[E]): this;
    /**
     * Return a reference to template
     * @returns track prototype
     */
    getPrototype(): WellTrack | LogTrack | null;
    /**
     * Set track template
     * @param template track to be used as a template
     */
    setPrototype(template: WellTrack | LogTrack): this;
    /**
     * Return track instance if any
     */
    getTrack(): WellTrack | LogTrack | null;
    /**
     * Return a layer to display markers
     */
    getMarkerLayer(): Layer;
    /**
     * Return a layer to display zones
     */
    getZoneLayer(): Layer;
    /**
     * Returns manipulator layer
     * @returns layer
     */
    getManipulatorLayer(): Layer;
    /**
     * Return a depth range, which is visible now
     */
    getVisibleDepthLimits(): Range;
    /**
     * Update adornments
     */
    updateAdornments(): void;
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
     * Sets model minimum and maximum depth
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
     * Returns depth or time range
     */
    getDepthLimits(): Range;
    /**
     * Return unit of the measure to be used to display scale in the header
     */
    getScaleUnit(): AbstractUnit;
    /**
     * Sets unit of the measure to be used to display scale in the header
     *
     * @param unit a scale unit or string symbol
     * @returns this
     */
    setScaleUnit(unit: AbstractUnit | string): this;
    /**
     * Sets unit of the measure to be used for device
     *
     * @param unit unit of the device
     * @returns this
     */
    setDeviceUnit(unit: AbstractUnit | string): this;
    /**
     * Return a unit of the measure of device
     */
    getDeviceUnit(): AbstractUnit;
    /**
     * Sets a new data source
     * @param data data source
     * @returns this
     */
    setData(data: DataSource): this;
    /**
     * Returns data source
     */
    getData(): DataSource | AbstractDataTable;
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
     * Returns root tool associated to this widget
     */
    getTool(): CompositeTool;
    /**
     * Return tool by name
     * @param name name of the tool
     */
    getToolByName(name: string): AbstractTool;
    /**
     * Connect a new tool with a tool name to the widget
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
     * Return scale to device. How many scale units in one device unit.
     * @param [scaleUnit] scale unit of the display. if it is not specified then it takes from track container
     * @param [deviceUnit] device unit of the display. if it is not specified then it takes from track container
     * @returns a index scale to device or NaN if scale if not available
     * @example
     * //  to get the current depth scale of well.
     * const uf = UnitFactory.getInstance();
     * well.getDepthScale(uf.getUnit("cm"), uf.getUnit("cm"));
     */
    getDepthScale(scaleUnit?: AbstractUnit | string, deviceUnit?: AbstractUnit | string): number;
    /**
     * Set bounds of the well
     * @param bounds track bounds
     */
    setBounds(bounds: Rect): this;
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
     * Return promise with new track instance
     * @returns promise
     */
    createWritableInstance(): Promise<WellTrack | LogTrack>;
    /**
     * Gets all the properties pertaining to this object
     * @returns of this object
     */
    getProperties(): ProxyWellTrack.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: ProxyWellTrack.Options): this;
    /**
     * Enable navigation tool after track instantiation. By default it is enabled
     * @param enabled flag to enable/disable navigation
     */
    enableNavigation(enabled: boolean): this;
    /**
     * Return status of navigation tool after track instantiation
     */
    isNavigationEnabled(): boolean;
}
export declare namespace ProxyWellTrack {
    /**
     * addition options
     */
    type Options = Group.Options & {
        /**
         * Well track width
         */
        width?: number;
        /**
         * Well track height
         */
        height?: number;
        /**
         * position in container
         */
        range?: Range;
        /**
         * Well log options
         */
        welllog?: {
            /**
             * Well log depth range
             */
            range?: Range;
        };
        /**
         * track title, uses for header and footer
         */
        title?: string;
        /**
         * well track to be displayed
         */
        track?: WellTrack | LogTrack;
        /**
         * well prototype properties
         */
        prototype?: {
            /**
             * well track template
             */
            template?: WellTrack | LogTrack;
            /**
             * instantiate track instance
             */
            create?: (track: ProxyWellTrack) => Promise<WellTrack | LogTrack>;
            /**
             * delay in milliseconds before prototype mount, default 100
             */
            delay?: number;
        };
        /**
         * tools options
         */
        tools?: {
            /**
             * Enable navigation tool after track instantiation. By default it is enabled
             */
            navigation?: boolean;
        };
        /**
         * index unit
         */
        indexunit?: Unit | string;
        /**
         * device unit
         */
        deviceunit?: Unit | string;
    };
    /**
     * of this object
     */
    type OptionsOut = Group.OptionsOut & {
        /**
         * well track to be displayed
         */
        track: ITrack;
        /**
         * well prototype properties
         */
        prototype: {
            /**
             * well track instance
             */
            instance: ITrack;
            /**
             * well track template
             */
            template: WellTrack | LogTrack;
            /**
             * instantiate track instance
             */
            create: (track: ProxyWellTrack) => Promise<WellTrack | LogTrack>;
            /**
             * delay in milliseconds before prototype mount
             */
            delay: number;
        };
        /**
         * tools options
         */
        tools: {
            /**
             * Status of navigation tool after track instantiation
             */
            navigation: boolean;
        };
    };
    type EventMap = AbstractWellTrack.EventMap & {
        [WellogWidgetsEvents.TracksSizeChanged]: TrackEventArgs;
        [Events.Mount]: void;
        [Events.Create]: void;
        [WellogWidgetsEvents.VisualsSelected]: Node[];
        [SelectionEvents.onDoubleClick]: SelectionEventArgs;
    };
}
