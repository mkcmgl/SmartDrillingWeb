import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { Easing, Functions } from '@int/geotoolkit/animation/Easing';
import { ZoomEventArgs } from '@int/geotoolkit/controls/tools/ZoomEventArgs';
/**
 * Zoom mode enum
 * @readonly
 * @enum
 */
export declare enum Mode {
    /**
     * Only horizontal zoom
     */
    X = "X",
    /**
     * Only vertical zoom
     */
    Y = "Y",
    /**
     * Horizontal and vertical zoom
     */
    XY = "XY",
    /**
     * Zoom from the users' touch point
     */
    TouchPoint = "TouchPoint"
}
/**
 * Zoom tool events
 * @readonly
 * @enum
 * @events
 */
export declare enum Events {
    /**
     * This Event is fired when the Tool starts zoom
     * @event module:geotoolkit/controls/tools/Zoom~Events~onZoomStart
     * @param {import("geotoolkit/controls/tools/ZoomEventArgs").ZoomEventArgs} eventArgs
     */
    onZoomStart = "onZoomStart",
    /**
     * This Event is fired when the Tool zooms
     * @event module:geotoolkit/controls/tools/Zoom~Events~onZoom
     * @param {import("geotoolkit/controls/tools/ZoomEventArgs").ZoomEventArgs} eventArgs
     */
    onZoom = "onZoom",
    /**
     * This Event is fired when the Tool stops zoom
     * @event module:geotoolkit/controls/tools/Zoom~Events~onZoomEnd
     * @param {import("geotoolkit/controls/tools/ZoomEventArgs").ZoomEventArgs} eventArgs
     */
    onZoomEnd = "onZoomEnd",
    /**
     * This Event is fired on double click
     * @event module:geotoolkit/controls/tools/Zoom~Events~onDoubleClick
     * @param {import("geotoolkit/controls/tools/ZoomEventArgs").ZoomEventArgs} eventArgs
     */
    onDoubleClick = "onDoubleClick"
}
/**
 * Defines a Zoom tool for the target or object to zoom. It supports various events shown below and has built-in functions to capture the wheel ratios.
 */
export declare class Zoom extends AbstractTool {
    constructor(options?: Zoom.Options);
    on<E extends keyof Zoom.EventMap>(type: E, callback: (eventType: E, sender: this, args: Zoom.EventMap[E]) => void): this;
    off<E extends keyof Zoom.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Zoom.EventMap[E]) => void): this;
    notify<E extends keyof Zoom.EventMap>(type: E, source: Zoom, args?: Zoom.EventMap[E]): this;
    /**
     * Stops elastic zooming process
     * @param [eventArgs] event args
     * @fires @int/geotoolkit/controls/tools/Zoom~Events.onZoomEnd
     * @returns this
     */
    stopInertia(eventArgs?: ZoomEventArgs): this;
    /**
     * Sets zoom mode
     * @param mode mode of zooming
     * @returns this
     */
    setMode(mode: Mode): this;
    /**
     * Scales node content to point
     * @param zoomx zoom X (> 0)
     * @param [zoomy] zoom Y (> 0)
     * @param [pointx] point X
     * @param [pointy] point Y
     */
    zoom(zoomx: number, zoomy?: number, pointx?: number, pointy?: number): void;
    /**
     * Sets properties
     * @param [properties] properties for the tool
     * @returns this
     */
    setProperties(properties?: Zoom.Options): this;
    /**
     * Gets properties
     * @returns properties
     */
    getProperties(): Zoom.OptionsOut;
}
export declare namespace Zoom {
    /**
     * options for the tool
     */
    type Options = AbstractTool.Options & {
        /**
         * minimum limits for zooming (>= 0)
         */
        min?: number;
        /**
         * maximum limits for zooming (>= options.zoom.min)
         */
        max?: number;
        /**
         * speed of zooming (>= 1)
         */
        speed?: number;
        /**
         * zooming time in ms (> 0 for elastic, 0 for instant)
         */
        time?: number;
        /**
         * easing animation function for elastic zooming
         */
        easing?: Functions | Easing.Function;
        /**
         * mode of pinch zooming
         */
        mode?: Mode;
    };
    /**
     * properties
     */
    type OptionsOut = AbstractTool.OptionsOut & {
        /**
         * minimum limits for zooming (>= 0)
         */
        min: number;
        /**
         * maximum limits for zooming (>=min)
         */
        max: number;
        /**
         * speed of elastic zooming (>= 1)
         */
        speed: number;
        /**
         * time of elastic zooming (>= 0)
         */
        time: number;
        /**
         * easing animation function for elastic zooming
         */
        easing: Easing.Function;
        /**
         * mode of zooming
         */
        mode: Mode;
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onZoomStart]: ZoomEventArgs;
        [Events.onZoom]: ZoomEventArgs;
        [Events.onZoomEnd]: ZoomEventArgs;
        [Events.onDoubleClick]: ZoomEventArgs;
    };
}
