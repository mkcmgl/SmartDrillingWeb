import { Point } from '@int/geotoolkit/util/Point';
import { ITool } from '@int/geotoolkit/plot/ITool';
import { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { Plot } from '@int/geotoolkit/plot/Plot';
import type { Node } from '@int/geotoolkit/scene/Node';
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { AbstractCompositeTool } from '@int/geotoolkit/controls/tools/AbstractCompositeTool';
/**
 * AbstractTool Events
 * @readonly
 * @enum
 * @events
 */
export declare enum Events {
    /**
     * This Event is fired when the Abstract Tool State (props: active, enable) has been changed
     * @event module:geotoolkit/controls/tools/AbstractTool~Events~onStateChanged
     */
    onStateChanged = "onStateChanged",
    /**
     * onEnabledStateChanged
     * @event module:geotoolkit/controls/tools/AbstractTool~Events~onEnabledStateChanged
     */
    onEnabledStateChanged = "onEnabledStateChanged",
    /**
     * onEnter
     * @event module:geotoolkit/controls/tools/AbstractTool~Events~onEnter
     */
    onEnter = "onEnter",
    /**
     * onLeave
     * @event module:geotoolkit/controls/tools/AbstractTool~Events~onLeave
     */
    onLeave = "onLeave",
    /**
     * onRebuild
     * @event module:geotoolkit/controls/tools/AbstractTool~Events~onRebuild
     */
    onRebuild = "onRebuild",
    /**
     * onListenerAdded
     * @event module:geotoolkit/controls/tools/AbstractTool~Events~onListenerAdded
     */
    onListenerAdded = "onListenerAdded",
    /**
     * onListenerRemoved
     * @event module:geotoolkit/controls/tools/AbstractTool~Events~onListenerRemoved
     */
    onListenerRemoved = "onListenerRemoved"
}
/**
 * AbstractTool is a layer of abstraction between the HTML5 element events. Uses generic event mechanism for different browsers.
 * <br>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/AbstractTool~Events} </h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onStateChanged</td>
 *              <td>null</td>
 *              <td>This Event is fired when the Abstract Tool State (props: active) has been changed</td>
 *          </tr>
 *           <tr>
 *              <td>onEnabledStateChanged</td>
 *              <td>null</td>
 *              <td>This Event is fired when the Abstract Tool State (enable) has been changed</td>
 *          </tr>
 *           <tr>
 *              <td>onEnter</td>
 *              <td>{@link @int/geotoolkit/controls/tools/EventArgs~EventArgs} | null</td>
 *              <td>This Event is fired on entering the canvas</td>
 *          </tr>
 *           <tr>
 *              <td>onLeave</td>
 *              <td>{@link @int/geotoolkit/controls/tools/EventArgs~EventArgs} | null</td>
 *              <td>This Event is fired on leaving the canvas</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * Below is a list of valid slot names ( this could change depending on the browser and its version. ) <br>
 * pointerdown <br>
 * pointermove <br>
 * pointerup <br>
 * MSPointerDown <br>
 * MSPointerMove <br>
 * MSPointerUp <br>
 * mousedown <br>
 * touchstart <br>
 * mousemove <br>
 * touchmove <br>
 * mouseup <br>
 * touchend <br>
 * @example
 * const slots = {
 *  'pointerdown': (event: EventArgs) => {
 *      // event is an instance of @int/geotoolkit/controls/tools/EventArgs
 *      ...
 *   }
 * };
 */
export declare class AbstractTool extends EventDispatcher implements ITool {
    /**
     * Creates AbstractTool
     * @param [name] name of the tool used like cross-hair etc
     */
    constructor(name?: string);
    /**
     * Creates AbstractTool
     * @param [layer] manipulator layer
     * @param [name] name of the tool used like cross-hair etc
     */
    constructor(layer?: CompositeNode, name?: string);
    /**
     * Creates AbstractTool
     * @param [slots] slots
     * @param [name] name of the tool used like cross-hair etc
     */
    constructor(slots?: Record<string, AbstractTool.Slot | ((eventArgs: EventArgs) => void) | AbstractTool.Slot[]>, name?: string);
    /**
     * Creates AbstractTool
     * @param [options] properties object
     */
    constructor(options?: AbstractTool.Options);
    /**
     * Sets new slots.
     * @param [slots] type of system events
     * @param [merge] set to true if you want to merge with existing slots
     * @returns this
     * @example
     * const slots = {
     *  'pointerdown': (event: EventArgs) => {
     *      // event is an instance of @int/geotoolkit/controls/tools/EventArgs
     *      ...
     *   }
     * };
     * tool.setSlots(slots);
     */
    setSlots(slots?: Record<string, AbstractTool.Slot | ((eventArgs: EventArgs) => void) | AbstractTool.Slot[]>, merge?: boolean): this;
    /**
     * Sets device radius for mouse events
     * @param radius radius for mouse events
     * @returns this
     */
    setMouseRadius(radius: number): this;
    /**
     * Returns current device radius for mouse events
     */
    getMouseRadius(): number;
    /**
     * Sets device radius for touch events
     * @param radius radius for touch events
     * @returns this
     */
    setTouchRadius(radius: number): this;
    /**
     * Sets default device radius for touch events
     * @param radius radius for touch events
     */
    static setDefaultTouchRadius(radius: number): void;
    /**
     * Sets default device radius for mouse events
     * @param radius radius for mouse events
     */
    static setDefaultMouseRadius(radius: number): void;
    /**
     * Returns current device radius for touch events
     */
    getTouchRadius(): number;
    /**
     * Set exclusive tool for plot
     * @param plot plot
     * @param tool tool
     */
    static lock(plot: Plot, tool: AbstractTool): void;
    /**
     * Remove exclusive tool from plot
     * @param value value
     */
    static unlock(value: Plot | AbstractTool): void;
    /**
     * return exclusive tool associated with plot
     * @param plot plot
     * @returns tool
     */
    static getExclusiveTool(plot: Plot): AbstractTool | null;
    /**
     * Returns native event name
     * @param eventName W3C Pointer Events Recommendation name
     */
    static getNativeEventName(eventName: string): string[];
    /**
     * Sets slot enabled
     * @param eventName eventName
     * @param value value
     * @param [target] target
     */
    setSlotEnabled(eventName: string, value: boolean, target?: EventTarget): this;
    /**
     * set tool name
     * @param name the tool name
     */
    setName(name: string): this;
    getName(): string;
    /**
     * return manipulator layer
     * @returns layer
     */
    getManipulatorLayer(): CompositeNode | null;
    /**
     * listen to window mouse events in order to catch a mouse up action outside of the tool container DOM element.
     * useful for example when you pan and release click outside of DOM element.
     */
    captureMouseUp(): void;
    /**
     * Dispose tool.
     */
    dispose(): void;
    /**
     * return true if the event is a touch event and false otherwise.
     * @param eventArgs contains info of the event
     */
    static isTouchEvent(eventArgs: EventArgs | Event): eventArgs is TouchEvent;
    /**
     * return true if the event is a touch event and false otherwise.
     * @param eventArgs contains info of the event
     */
    isTouchEvent(eventArgs: EventArgs | Event): boolean;
    /**
     * Convert global coordinates to plot coordinates
     * @param nativeEvent native browser event
     * @param plot plot with canvas
     */
    static clientToCanvas(nativeEvent: Event, plot: Plot): {
        x: number;
        y: number;
    };
    /**
     * return position relative to the canvas
     * @param eventArgs parentElement the parent HTML element
     * @param [externalPlot] plot
     */
    pageToCanvas(eventArgs: EventArgs | Event, externalPlot?: Plot): {
        x: number;
        y: number;
    };
    /**
     * converts device coordinates to inner coordinates of node
     * @param model the model
     * @param eventArgs arguments of the event OR point in device (plot) coordinates.
     */
    pointToModel(model: Node | null, eventArgs: EventArgs | Point): Point;
    /**
     * add event listener. The listener receives the message when the system event happens.
     * @deprecated since 4.0 use .on() instead. Note that 3 args callback should be used in subscription via .on(): (eventType, source, args)
     * @param eventName event name or unique event identifier
     * @param listener the event listener
     */
    addListener(eventName: string, listener: Function): this;
    off<E extends keyof AbstractTool.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractTool.EventMap[E]) => void): this;
    /**
     * remove event listener. The listener reveives the message when the system event happens.
     * @deprecated since 4.0 use .off() instead.
     * @param eventName event name
     * @param [listener] the event listener, if null, remove all listeners for the event
     */
    removeListener(eventName: string, listener?: Function | Function[]): this;
    /**
     * This method is Protected. Fire an Event.
     * @deprecated since 4.0 use .notify() instead. Note that 3 args callback should be used in subscription via .on()
     * @param eventName event name
     * @param eventArgs contains info of the event
     */
    fireEvent(eventName: string, eventArgs?: any): void;
    /**
     * set enable state
     * @param enabled sets the enabled state
     * @fires @int/geotoolkit/controls/tools/AbstractTool~Events.onEnabledStateChanged
     * @fires @int/geotoolkit/controls/tools/AbstractTool~Events.onStateChanged
     * @returns this
     */
    setEnabled(enabled: boolean): this;
    /**
     * returns enable state
     * @returns state
     */
    isEnabled(): boolean;
    /**
     * switch enable state to opposite state
     */
    toggle(): this;
    /**
     * start
     * @param [eventArgs] event args
     */
    protected start(eventArgs?: EventArgs): this;
    /**
     * stop
     */
    protected stop(): this;
    /**
     * set active state
     * @param active set active state
     * @fires @int/geotoolkit/controls/tools/AbstractTool~Events.onStateChanged
     */
    setActive(active: boolean): this;
    /**
     * return active state
     */
    isActive(): boolean;
    /**
     * @fires @int/geotoolkit/controls/tools/AbstractTool~Events.onStateChanged
     */
    protected onActiveStateChanged(): void;
    /**
     * @fires @int/geotoolkit/controls/tools/AbstractTool~Events.onEnabledStateChanged
     */
    protected onEnabledStateChanged(): void;
    /**
     * Gets parent tool
     * @returns parent tool
     */
    getParentTool(): AbstractCompositeTool;
    /**
     * Attach listener on event that will be called whenever the specified event is delivered to the target
     * <p>
     * If the callback function is already in the list of event listeners for this target, the function is not added a second time.
     * </p>
     * <p>
     * If a particular anonymous function is in the list of event listeners registered for a certain target, and then later in the code, an identical anonymous function is given in an "on" call, the second function will also be added to the list of event listeners for that target.
     * </p>
     * TypeScript hint: in case of creating derived tool with own events, EventMap should be extended and .on() and .notify() methods redeclared, see sample.
     * @param type type of event or property
     * @param callback to be called
     * @example
     * // Using in derived tool
     * import type {EventMap as EventMapBase} from '@int/geotoolkit/controls/tools/AbstractTool';
     * export type EventMap = EventMapBase & {
     *     [MyToolEvents.onValueChanged]: MyToolEventArgs
     * }
     * export enum MyToolEvents {
     *    onValueChanged = 'onValueChanged'
     * }
     * export class MyTool extends AbstractTool {
     *     public declare on: <E extends keyof EventMap>(type: E, callback: (eventType: E, sender: this, args: EventMap[E]) => void) => this;
     *     protected declare notify: <E extends keyof EventMap>(type: E, source: AbstractTool, args?: EventMap[E]) => this;
     *     public declare off: <E extends keyof EventMap>(type: E, callback?: (eventType: E, sender: this, args: EventMap[E]) => void) => this;
     *     // ...
     * }
     */
    on<E extends keyof AbstractTool.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractTool.EventMap[E]) => void): this;
    notify<E extends keyof AbstractTool.EventMap>(type: E, source: AbstractTool, args?: AbstractTool.EventMap[E]): this;
    /**
     * returns true if double clicked
     * @param point Click point
     */
    protected isDoubleClick(point: Point): boolean;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: AbstractTool.Options): this;
    /**
     * Returns all the properties pertaining to this object
     * @returns An object containing the properties
     */
    getProperties(): AbstractTool.OptionsOut;
}
export declare namespace AbstractTool {
    /**
     * type of system events like mousedown etc. The slot object allows to attach browser events (HTML Dom Events) to your callback function
     */
    type Options = {
        /**
         * type of system events
         */
        slots?: Record<string, Slot | Slot[] | ((eventArgs: EventArgs) => void)>;
        /**
         * name of the tool used like cross-hair etc
         */
        name?: string;
        /**
         * enabled state
         */
        enabled?: boolean;
        /**
         * device radius for mouse events
         */
        mouseradius?: number;
        /**
         * device radius for touch events
         */
        touchradius?: number;
        /**
         * manipulator layer
         */
        layer?: CompositeNode;
    };
    type EventMap = EventDispatcher.EventMap & {
        [Events.onStateChanged]: void;
        [Events.onEnabledStateChanged]: void;
        [Events.onEnter]: ProxyEventArgs;
        [Events.onLeave]: ProxyEventArgs;
        [Events.onRebuild]: void;
        [Events.onListenerAdded]: {
            tool: AbstractTool;
            eventname: string;
            listener: Function;
        };
        [Events.onListenerRemoved]: {
            tool: AbstractTool;
            eventname: string;
            listener: Function;
        };
    };
    /**
     * An object containing the properties
     */
    type OptionsOut = {
        /**
         * name of the tool used like cross-hair etc
         */
        name: string;
        /**
         * device radius for mouse events
         */
        mouseradius: number;
        /**
         * device radius for touch events
         */
        touchradius: number;
        /**
         * manipulator layer
         */
        layer: CompositeNode;
        /**
         * Enabled or not
         */
        enabled: boolean;
    };
    /**
     * Slot object for event
     */
    type Slot = {
        /**
         * Callback to be called when the event fires
         */
        callback: (args: EventArgs) => void;
        /**
         * Target object for event
         */
        object: EventTarget;
        /**
         * Enabled state
         */
        enabled?: boolean;
    };
}
