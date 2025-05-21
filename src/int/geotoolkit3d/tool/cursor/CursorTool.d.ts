import { AbstractGestureTool } from '@int/geotoolkit3d/tool/AbstractGestureTool';
import type { AbstractPicking } from '@int/geotoolkit3d/picking/AbstractPicking';
import type { AbstractCursor } from '@int/geotoolkit3d/tool/cursor/AbstractCursor';
import type { Vector3 } from 'three';
import type { AbstractDeviceSupport } from '@int/geotoolkit3d/tool/devicesupport/AbstractDeviceSupport';
/**
 * A tool providing cursor representation in 3D.<br>
 * This tool will listen to cursor events and notify the internal cursor representation.<br>
 */
export declare class CursorTool extends AbstractGestureTool {
    /**
     * @param options See geotoolkit3d.tool.AbstractGestureTool for inherited options
     */
    constructor(options: CursorTool.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @returns this
     */
    setOptions(options: CursorTool.Options): this;
    getOptions(): Required<CursorTool.Options>;
    /**
     * Moves the cursor at the given position.<br>
     * This does not fire an event.<br>
     * @param position The new position or null to hide the cursor
     */
    moveCursor(position: Vector3 | null): void;
    /**
     * Adds a listener that will be triggered each time this tool 'move' occurs.
     * @param callback The function that will be called
     * @returns this
     */
    addMoveListener(callback: CursorTool.ListenerFunction): this;
    /**
     * Removes a listener
     * @param callback The listener callback
     * @returns this
     */
    removeMoveListener(callback: CursorTool.ListenerFunction): this;
    onKeyEnd(event: KeyboardEvent): void;
    onTap(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onCursorMove(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onDragStart(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onDrag(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onDragEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
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
    /**
     * Returns the cursor updating on mouse move
     */
    getCursor(): AbstractCursor;
}
export declare namespace CursorTool {
    /**
     * See geotoolkit3d.tool.AbstractGestureTool for inherited options
     */
    type Options = AbstractGestureTool.Options & {
        /**
         * The cursor to update on mouse move
         */
        cursor?: AbstractCursor;
        /**
         * The status of this tool
         */
        enabled?: boolean;
        /**
         * Picking class, that will be used for picking objects
         */
        picking?: PickingClass;
    };
    type ListenerFunction = (event: KeyboardEvent | AbstractDeviceSupport.CustomPointerEvent, selection: AbstractPicking.PickingResult[]) => void;
}
declare type PickingClass = typeof AbstractPicking;
export {};
