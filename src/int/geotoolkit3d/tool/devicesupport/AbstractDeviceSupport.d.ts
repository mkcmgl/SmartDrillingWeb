/**
 * @module geotoolkit3d/tool/devicesupport/AbstractDeviceSupport
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Events } from '@int/geotoolkit3d/tool/Events';
import type { Plot } from '@int/geotoolkit3d/Plot';
import type { AbstractTool } from '@int/geotoolkit3d/tool/AbstractTool';
export { Events };
/**
 * A devicesupport class is a class that is able to listen to the specific events fired by the browser.<br>
 * For example MSPointers or Touch events.<br>
 * <br>
 * When receiving an event, it will trigger the correct generic function of the given 'target'.<br>
 * Therefore it will convert 'browser-specific' events to a 'more generic' behavior.<br>
 * <br>
 * The event passed down to the target will be the native event.<br>
 * However, implementation of this class will also introduce 'plotX', 'plotY' attributes in the event.<br>
 * They corresponds to the cursor/fingers/pen location converted to plot-relative coordinates.<br>
 * <br>
 * In case of multiple cursor/fingers/pen location, the array attributes 'plotXs', 'plotYs' will also be populated accordingly.<br>
 * <br>
 * Builtin implementations include:<br>
 * <ul>
 *     <li>Mouse: Supports {@link http://www.w3schools.com/jsref/dom_obj_event.asp w3c-mouse-event} based devices</li>
 *     <li>Pointer: Supports system using the {@link https://www.w3.org/TR/pointerevents/ w3c-pointers} architecture.</li>
 *     <li>Touch: Supports system using the {@link https://www.w3.org/TR/touch-events/ w3c-touch} architecture.</li>
 * </ul>
 * <br>
 */
export declare abstract class AbstractDeviceSupport extends EventDispatcher {
    /**
     * @param options The options
     */
    protected constructor(options: AbstractDeviceSupport.Options);
    on<E extends keyof AbstractDeviceSupport.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractDeviceSupport.EventMap[E]) => void): this;
    off<E extends keyof AbstractDeviceSupport.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractDeviceSupport.EventMap[E]) => void): this;
    notify<E extends keyof AbstractDeviceSupport.EventMap>(type: E, source: AbstractDeviceSupport, args?: AbstractDeviceSupport.EventMap[E]): this;
    /**
     * Function called to attach the device-support class to an actual plot.<br>
     * Implementation should be reentrant and attach any native listener they need.<br>
     * @param plot The plot to attach to
     * @param domelement The dom element to attach to
     * @param target The tool to notify on native events
     */
    setup(plot: Plot, domelement: HTMLElement, target: AbstractTool): void;
    /**
     * Function called to check if this class should be used for the current context.<br>
     * <br>
     * This will be called as part of the lookup mechanism of the {@link @int/geotoolkit3d/tool/devicesupport/DeviceSupportRegistry~DeviceSupportRegistry}.<br>
     * This static function should be implemented in each subclass and return true if and only if it should be used in the current
     * context.<br>
     * <br>
     * Typical implementation will check for the presence of some known attributes in the window or user-agent to determine the nature of
     * the current platform/browser.
     */
    static isSupported(): boolean;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @returns this
     */
    setOptions(options: AbstractDeviceSupport.Options): this;
    /**
     * Get abstract device support options
     */
    getOptions(): AbstractDeviceSupport.OptionsBaseOut;
}
export declare namespace AbstractDeviceSupport {
    /**
     * The options
     */
    export type Options = {
        /**
         * The div element in which the canvas will be created and added.
         */
        domelement?: HTMLElement;
        /**
         * The plot using this devicesupport
         */
        plot?: Plot;
        /**
         * The tool to notify when an event occurs
         */
        target?: AbstractTool;
    };
    export type OptionsBaseOut = Required<Options>;
    type CustomEvent = {
        /**
         * The pointer X coordinate in the plot
         */
        plotX: number;
        /**
         * The previous pointer X coordinates in the plot
         */
        plotXs: number[];
        /**
         * The pointer Y coordinate in the plot
         */
        plotY: number;
        /**
         * The previous pointer Y coordinates in the plot
         */
        plotYs: number[];
        windowVisibility?: string;
    };
    export type CustomPointerEvent = PointerEvent & CustomEvent;
    export type CustomTouchEvent = TouchEvent & CustomEvent;
    export type EventMap = EventDispatcher.EventMap & {
        [Events.onContext]: PointerEvent;
        [Events.onMouseWheel]: WheelEvent;
        [Events.onKeyDown]: KeyboardEvent;
        [Events.onKeyUp]: KeyboardEvent;
        [Events.onMouseUp]: PointerEvent;
        [Events.onMouseOut]: PointerEvent;
        [Events.onMouseDown]: PointerEvent;
        [Events.onDoubleClick]: PointerEvent;
        [Events.onMouseMove]: PointerEvent;
        [Events.onTouchStart]: PointerEvent | CustomTouchEvent;
        [Events.onTouchEnd]: PointerEvent | CustomTouchEvent;
        [Events.onTouchMove]: PointerEvent | CustomTouchEvent;
        onVisibilityChanged?: Event;
    };
    export {};
}
