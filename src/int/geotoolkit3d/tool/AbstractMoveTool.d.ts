import { AbstractGestureTool } from '@int/geotoolkit3d/tool/AbstractGestureTool';
import type { Object3D, Vector2, Vector3 } from 'three';
import type { AbstractDeviceSupport } from '@int/geotoolkit3d/tool/devicesupport/AbstractDeviceSupport';
/**
 * Move status enumerator.<br>
 * <br>
 * This enum is used to describe the state of the tool.<br>
 * @enum
 * @readonly
 */
export declare enum Status {
    /**
     * Object selected
     */
    Selected = "selected",
    /**
     * Move started
     */
    Start = "movestart",
    /**
     * Move occurred
     */
    Move = "move",
    /**
     * Move ended
     */
    End = "moveend"
}
/**
 * A base class to implement custom tools that move objects into the scene.<br>
 */
export declare abstract class AbstractMoveTool extends AbstractGestureTool {
    protected constructor(options: AbstractMoveTool.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @returns this
     */
    setOptions(options: AbstractMoveTool.OptionsBase): this;
    getOptions(): AbstractMoveTool.OptionsBaseOut;
    /**
     * Called when a 'onPick' event has occurred
     * @param event the native event with plot coordinates added
     */
    onPick(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Adds a listener that will be triggered each time this tool 'move' occurs.
     * @param callback The function that will be called
     * @returns this
     */
    addMoveListener(callback: AbstractMoveTool.ListenerCallback): this;
    /**
     * Removes a listener
     * @param callback The callback to remove
     * @returns this
     */
    removeSelectionListener(callback: AbstractMoveTool.ListenerCallback): this;
    /**
     * Called when a 'onKeyEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    onKeyEnd(event: KeyboardEvent): void;
    /**
     * Called when a 'onDragStart' event has occurred
     * @param event the native event with plot coordinates added
     */
    onDragStart(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onDrag' event has occurred
     * @param event the native event with plot coordinates added
     */
    onDrag(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onDragEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    onDragEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onTap(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onCursorMove(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onKeyStart(event: KeyboardEvent): void;
    onKey(event: KeyboardEvent): void;
    onDoubleTap(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onMouseWheel(event: WheelEvent): void;
    onPinchStart(event: AbstractGestureTool.MovePointerEvent): void;
    onPinch(event: AbstractGestureTool.MovePointerEvent): void;
    onPinchEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onSlideStart(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onSlide(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onSlideEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onVisibilityGained(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onVisibilityLost(event: AbstractDeviceSupport.CustomPointerEvent): void;
}
export declare namespace AbstractMoveTool {
    /**
     * See {@link @int/geotoolkit3d/tool/AbstractGestureTool~AbstractGestureTool} for inherited options
     */
    type Options = AbstractGestureTool.Options & {
        /**
         * The object to be moved
         */
        object?: Object3D;
        /**
         * True if this tool should permit selection of the object to move
         */
        pickenabled?: boolean;
        /**
         * The status of this tool
         */
        enabled?: boolean;
    };
    type ListenerCallback = (status: Status, object: Object3D, operation: Vector3 | Vector2) => void;
    /**
     * The options
     */
    type OptionsBase = Options;
    type OptionsBaseOut = Required<OptionsBase>;
}
