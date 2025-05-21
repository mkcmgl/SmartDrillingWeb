import type { Node } from '@int/geotoolkit/scene/Node';
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Rect } from '@int/geotoolkit/util/Rect';
import type { AnchoredShape } from '@int/geotoolkit/scene/shapes/AnchoredShape';
import type { ToolsContainer } from '@int/geotoolkit/controls/tools/ToolsContainer';
/**
 * Plot events
 * @enum
 */
export declare enum Events {
    /**
     * Rendering
     */
    Rendering = "rendering",
    /**
     * Rendered
     */
    Rendered = "rendered",
    /**
     * Invalidated
     */
    Invalidated = "invalidated",
    /**
     * Resized
     */
    Resized = "resized"
}
/**
 * A plot with 2D rendering capabilities.<br>
 * The plot requires a canvas to be passed in the options to render its content.<br>
 * <br>
 * The plot is internally structured as a SceneGraph, using {@link @int/geotoolkit/scene/Node~Node}.<br>
 * Each node having a scene-transform transformation that will be applied at render time.<br>
 * <br>
 * The plot offers an autoupdate behavior that will check regularly if a render is required (using requestanimationframe if available,
 * polling otherwise).<br> When this autoupdate lands, the plot will check if it is flagged as dirty.<br> If so, it will trigger a render
 * phase.<br> This mechanism can be configured when instantiating the Plot or changed using the corresponding setters.<br> One could also
 * temporarily suspend any rendering by calling suspendUpdate in order to apply large scale changes or simply force the plot to hibernate
 * when not used/visible.<br>
 * <br>
 * If the autoupdate mechanism is not enabled, the client code is responsible of calling the update function to tell the plot that it
 * should render itself.<br>
 * <br>
 *
 * @throws {Error} if parameter canvasElement is not HTMLCanvasElement or HTML5 Canvas is not supported.
 */
export declare class Plot extends EventDispatcher {
    /**
     * Creates plot
     * @param [options] plot options
     */
    constructor(options?: Plot.Options);
    on<E extends keyof Plot.EventMap>(type: E, callback: (eventType: E, sender: this, args: Plot.EventMap[E]) => void): this;
    off<E extends keyof Plot.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Plot.EventMap[E]) => void): this;
    notify<E extends keyof Plot.EventMap>(type: E, source: Plot, args?: Plot.EventMap[E]): this;
    /**
     * Returns root tool associated to plot
     */
    getTool(): ToolsContainer;
    /**
     * Enable/disable dev tool support
     * @param enabled True to enable dev tool support, false otherwise
     */
    static setEnableDevTool(enabled: boolean): void;
    /**
     * Disposes the plot and the associated resources.<br>
     * This may also call dispose on the root node (see disposeRoot).<br>
     * The plot should not be used/accessed anymore after this has been called.<br>
     * @param [disposeRoot] Also dispose root node
     */
    dispose(disposeRoot?: boolean): void;
    /**
     * Sets the root node ot be the given node.<br>
     * @param root The scenegraph root node
     * @returns this
     */
    setRoot(root: Node): this;
    /**
     * Returns the root node of the scenegraph.<br>
     * @returns The root node
     */
    getRoot(): Node;
    /**
     * Sets watermark to have on a plot
     * @param watermark watermark shape
     * @returns this
     * @example
     * import {Text} from '@int/geotoolkit/scene/shapes/Text';
     * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
     * const watermark = new Text({
     *     'alignment': AnchorType.LeftBottom, // watermark position on the screen
     *     'textstyle': {
     *         'font': '60px sans-serif'
     *     },
     *     'text': 'My Watermark'
     * });
     * plot.setWatermark(watermark);
     */
    setWatermark(watermark: AnchoredShape | null): this;
    /**
     * Updates the plot, forcing a render.<br>
     * This will be called automatically when the plot has been marked as dirty if the autoupdate is enabled.<br>
     * @returns this
     */
    update(): this;
    /**
     * Returns the canvas element or elements used by this plot
     *
     * @returns The canvas element
     */
    getCanvas(): HTMLCanvasElement | HTMLCanvasElement[];
    /**
     * Sets the plot size to the given dimensions.<br>
     * This will also change the canvas size if autosize is enabled.<br>
     * If autorootbounds is enabled, this will also update the bounds of the root node.<br>
     * @param width The width of plot
     * @param height The height of plot
     * @returns this
     */
    setSize(width: number, height: number): this;
    /**
     * Returns the containing element for the plot<br>
     * This is either the canvas element or the div element depending on the chosen functionality<br>
     * @returns The canvas width
     */
    getContainingElement(): null | HTMLElement;
    /**
     * Returns the containing element width in virtual pixels.<br>
     * This returns the raw size given at initialization or through the setSize function.<br>
     * It ignores any Browser zoom.<br>
     * @returns The canvas width
     */
    getWidth(): number;
    /**
     * Returns the containing element height in virtual pixels.<br>
     * This returns the raw size given at initialization or through the setSize function.<br>
     * It ignores any Browser zoom.<br>
     * @returns The canvas height
     */
    getHeight(): number;
    /**
     * Suspends plot update, preventing the update function from triggering a render.<br>
     * @returns this
     */
    suspendUpdate(): this;
    /**
     * Resumes plot update, allowing the update function of triggering a render.<br>
     * @param [refresh] If set to true, a render will be run immediately
     * @returns this
     */
    resumeUpdate(refresh?: boolean): this;
    /**
     * Enables or disables auto update mechanism.<br>
     * If auto update is enabled, whenever a node is invalidated it will trigger a Plot update/render.<br>
     * @param enable The autoupdate status
     * @param [infinite] Enables or disables infinite auto update mechanism.<br>
     * if true, run timer or request animation frame in infinite
     * loop overwise if node is invalidated it will trigger a Plot
     * update/render. if false, browser pixel scale is not updated.
     * @returns this
     */
    setAutoUpdate(enable: boolean, infinite?: boolean): this;
    /**
     * Return true if auto update is enabled.<br>
     * @returns The status of autoupdate
     */
    isAutoUpdate(): boolean;
    /**
     * Return true if infinite auto update is enabled.<br>
     * @returns The status of infinite auto update
     */
    isInfiniteAutoUpdate(): boolean;
    /**
     * Sets the time interval for autoupdate mechanism.<br>
     * This will define the delay for polling the status of the Plot and trigger an update/render if necessary.<br>
     * @param [interval] The time interval in ms. window.requestAnimationFrame will be used if available and interval set to null.
     * @returns this
     */
    setAutoUpdateInterval(interval?: number): this;
    /**
     * Returns the time interval for autoupdate mechanism.<br>
     * @returns The time interval in ms
     */
    getAutoUpdateInterval(): null | number;
    /**
     * Returns the client rect for the plots container element as DOMRect.<br>
     * @returns the client rect for the plots container element
     */
    getBoundingClientRect(): null | DOMRect;
    /**
     * Enable or disable autosize mechanism.<br>
     * If enabled, this will let the Plot resize the associated canvas whenever the plot itself is resized.<br>
     * @param autoSize The status of autosize
     * @returns this
     */
    setAutoSize(autoSize: boolean): this;
    /**
     * Forces a resize on the plot using its known width and height.<br>
     * @returns this
     */
    onResize(): this;
}
export declare namespace Plot {
    /**
     * The plot options
     */
    type Options = {
        /**
         * The canvas to be used as target for rendering
         */
        canvaselement?: HTMLCanvasElement;
        /**
         * The scenegraph root
         */
        root?: Node;
        /**
         * If true, the plot will automatically update when a node is invalidated
         */
        autoupdate?: boolean;
        /**
         * Auto update time interval. window.requestAnimationFrame will be used if available and
         * autoUpdateInterval not specified
         */
        autoupdateinterval?: number;
        /**
         * Enables or disables infinite auto update mechanism.<br>
         * if true, run timer or request animation frame in infinite loop overwise if node is invalidated it will trigger a Plot
         * update/render. if false, browser pixel scale is not updated.
         */
        infiniteautoupdate?: boolean;
        /**
         * If true, canvas element automatically fulfill its parent element
         */
        autosize?: boolean;
        /**
         * If true, set automatically root node bounds to the size of the canvas
         */
        autorootbounds?: boolean;
        /**
         * Suspend plot update until resumeUpdate is called
         */
        suspendupdate?: boolean;
        /**
         * Suspend auto plot update if canvas is not in the visible part of the page. if this mode is enabled then
         * infiniteautoupdate is enabled automatically
         */
        offscreendetection?: boolean;
        /**
         * If true, plot will write to console render time in milliseconds
         */
        debuginfo?: boolean;
        /**
         * Canvas size for div element
         */
        canvassize?: number;
        /**
         * Optional dive element, which can be provided
         * instead of canvas
         */
        divelement?: HTMLDivElement;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.Rendering]: void;
        [Events.Rendered]: void;
        [Events.Invalidated]: Rect;
        [Events.Resized]: void;
    };
}
