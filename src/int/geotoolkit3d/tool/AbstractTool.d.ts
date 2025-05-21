/**
 * @module geotoolkit3d/tool/AbstractTool
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import { Events } from '@int/geotoolkit3d/tool/Events';
import type { Plot } from '@int/geotoolkit3d/Plot';
import type { AbstractDeviceSupport } from '@int/geotoolkit3d/tool/devicesupport/AbstractDeviceSupport';
export { Events };
/**
 * The base class for tools in the 3D Plot.<br>
 * <br>
 * This implementation uses DeviceSupportRegistry mechanism to retrieve a bridge-object that will deal with hardware/browser specific input
 * devices.<br> The retrieved DeviceSupport object will listen to native events and call the corresponding generic functions on this
 * tool.<br>
 * <br>
 * Inheriting classes are responsible to implement those generic function.<br>
 * <br>
 * One may consider inheriting from {@link @int/geotoolkit3d/tool/AbstractGestureTool~AbstractGestureTool} for an even more generic/crossplatform approach.<br>
 */
export declare abstract class AbstractTool extends EventDispatcher {
    /**
     * @param options The options
     */
    protected constructor(options: AbstractTool.Options);
    on<E extends keyof AbstractTool.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractTool.EventMap[E]) => void): this;
    off<E extends keyof AbstractTool.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractTool.EventMap[E]) => void): this;
    notify<E extends keyof AbstractTool.EventMap>(type: E, source: AbstractTool, args?: AbstractTool.EventMap[E]): this;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @returns this
     */
    setOptions(options: AbstractTool.Options): this;
    /**
     * Get abstract tool options
     * @returns options
     */
    getOptions(): AbstractTool.OptionsOut;
    /**
     * return true if the event is a touch event and false otherwise.
     * @param eventArgs contains info of the event
     */
    isTouchEvent(eventArgs: EventArgs | Event): boolean;
    /**
     * This function allows tools to bind their events to the device support
     * @param deviceSupport the type of device we are attaching to
     */
    setup(deviceSupport: AbstractDeviceSupport): this;
    /**
     * Returns the tool name.
     * @returns The tool's name
     */
    getName(): string;
    /**
     * Get the plot of this Tool.
     */
    getPlot(): Plot;
    /**
     * Called when a 'context' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onContext(event: PointerEvent): void;
    /**
     * Called when a 'mousedown' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onMouseDown(event: PointerEvent): void;
    /**
     * Called when a 'mousemove' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onMouseMove(event: PointerEvent): void;
    /**
     * Called when a 'mouseup' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onMouseUp(event: PointerEvent): void;
    /**
     * Called when a 'mouseout' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onMouseOut(event: PointerEvent): void;
    /**
     * Called when a 'mousewheel' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onMouseWheel(event: WheelEvent): void;
    /**
     * Called when a 'touchstart' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onTouchStart(event: PointerEvent): void;
    /**
     * Called when a 'touchend' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onTouchEnd(event: PointerEvent): void;
    /**
     * Called when a 'touchmove' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onTouchMove(event: PointerEvent): void;
    /**
     * Called when a 'doubleclick' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onDoubleClick(event: PointerEvent): void;
    /**
     * Called when a 'keydown' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onKeyDown(event: KeyboardEvent): void;
    /**
     * Called when a 'keyup' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onKeyUp(event: KeyboardEvent): void;
    /**
     * Called when a 'onVisibilityChanged' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onVisibilityChanged(event: PointerEvent): void;
    /**
     * Disposes the tool
     */
    dispose(): void;
}
export declare namespace AbstractTool {
    /**
     * The options
     */
    type Options = AbstractDeviceSupport.Options & {
        /**
         * The tool name
         */
        name?: string;
    };
    type OptionsOut = Required<Options>;
    type EventMap = AbstractDeviceSupport.EventMap;
}
