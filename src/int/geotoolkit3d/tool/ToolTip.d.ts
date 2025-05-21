import { AbstractGestureTool } from '@int/geotoolkit3d/tool/AbstractGestureTool';
import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { AbstractDeviceSupport } from '@int/geotoolkit3d/tool/devicesupport/AbstractDeviceSupport';
import type { AbstractPicking } from '@int/geotoolkit3d/picking/AbstractPicking';
/**
 * A tool providing cursor tooltip in 3D.<br>
 * This tooltip will listen to cursor events and notify user-defined tooltip div.<br>
 * <br>
 * Note that by default, a highlighter object will be created along with tooltip. (See {@link @int/geotoolkit3d/tool/Highlighter~Highlighter} for more info)
 * <br>
 * To disable the cursor, set options.cursor to null.<br>
 * <br>
 * The content of tooltip is left to users. By default, it shows the type of selected object.<br>
 * If the user needs to change it, then modifying options.innerHTML.<br>
 * <br>
 * Users can provide their own divElement for styling purpose. If a divElement is not provided, ToolTip will create one.<br>
 */
export declare class ToolTip extends AbstractGestureTool {
    /**
     * @param options See geotoolkit3d.tool.AbstractGestureTool for inherited options
     */
    constructor(options: ToolTip.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @returns this
     */
    setOptions(options: ToolTip.Options): this;
    getOptions(): Required<ToolTip.Options>;
    /**
     * Get tooltip's div element
     * @returns divElement
     */
    getDivElement(): HTMLElement;
    /**
     * Adds a listener that will be triggered each time this tool 'move' occurs.
     * @param callback The function that will be called
     */
    addMoveListener(callback: ToolTip.ListenerFunction): void;
    onCursorMove(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onTap(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onKeyEnd(event: KeyboardEvent): void;
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
     * Dispose tooltip
     */
    dispose(): void;
}
export declare namespace ToolTip {
    /**
     * See geotoolkit3d.tool.AbstractGestureTool for inherited options
     */
    type Options = AbstractGestureTool.Options & {
        /**
         * the application tooltip div element
         */
        divelement?: HTMLElement | string;
        /**
         * the option to add cursor
         */
        cursor?: Object3D;
        /**
         * to or not to enable the tooltip
         */
        enabled?: boolean;
        /**
         * this function returns the content in HTML format
         */
        innerhtml?: (selectedObject: AbstractPicking.PickingResult) => string;
        /**
         * the opacity of tooltip
         */
        opacity?: number;
        /**
         * Picking class, that will be used for picking objects
         */
        picking?: PickingClass;
    };
    type ListenerFunction = (event: AbstractDeviceSupport.CustomPointerEvent, selection: AbstractPicking.PickingResult[]) => void;
}
declare type PickingClass = typeof AbstractPicking;
export {};
