import { AbstractTool } from '@int/geotoolkit3d/tool/AbstractTool';
import type { AbstractDeviceSupport } from '@int/geotoolkit3d/tool/devicesupport/AbstractDeviceSupport';
/**
 * A tool that convert classic device events to gesture-like calls.<br>
 * This tool inherits the 'device support' feature from AbstractTool and transforms the native events to a basic gesture mechanism.<br>
 * <br>
 * An 'armingkey' can be defined to limit when this tool operates.<br>
 * This tool will operate only if the defined key is pressed.<br>
 * <br>
 * It will call onDrag/onPinch/onSide/onTap/etc when the corresponding pattern is detected.<br>
 * Inheriting classes have to implement those functions.<br>
 * <br>
 */
export declare abstract class AbstractGestureTool extends AbstractTool {
    protected constructor(options: AbstractGestureTool.Options);
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     *
     * @param options The options
     * @returns this
     */
    setOptions(options: AbstractGestureTool.Options): this;
    /**
     * Get abstract gesture tool options
     * @returns options
     */
    getOptions(): AbstractGestureTool.OptionsOut;
    onContext(event: PointerEvent): void;
    onMouseDown(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onMouseMove(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onMouseOut(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onMouseUp(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onDoubleClick(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onTouchStart(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onTouchEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onTouchMove(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onVisibilityChanged(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onKeyUp(event: KeyboardEvent): void;
    /**
     * Called when a 'onKeyStart' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onKeyStart(event: KeyboardEvent): void;
    /**
     * Called when a 'onKey' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onKey(event: KeyboardEvent): void;
    /**
     * Called when a 'onKeyEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onKeyEnd(event: KeyboardEvent): void;
    /**
     * Called when a 'onVisibilityGained' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onVisibilityGained(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onVisibilityLost' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onVisibilityLost(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onCursorMove' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onCursorMove(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onTap' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onTap(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onDoubleTap' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onDoubleTap(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onPinchStart' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onPinchStart(event: AbstractGestureTool.MovePointerEvent): void;
    /**
     * Called when a 'onPinch' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onPinch(event: AbstractGestureTool.MovePointerEvent): void;
    /**
     * Called when a 'onPinchEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onPinchEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onDragStart' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onDragStart(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onDrag' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onDrag(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onDragEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onDragEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onSlideStart' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onSlideStart(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onSlide' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onSlide(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onSlideEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    abstract onSlideEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Function to clean up the references from this tool.
     */
    dispose(): void;
}
export declare namespace AbstractGestureTool {
    /**
     * The options
     */
    type Options = AbstractTool.Options & {
        /**
         * The button id for dragging
         */
        dragbutton?: number;
        /**
         * The button id for pinching
         */
        pinchbutton?: number;
        /**
         * The button id for sliding
         */
        slidebutton?: number;
        /**
         * The touch count to do a drag
         */
        dragtouchcount?: number;
        /**
         * The touch count to do a pinch
         */
        pinchtouchcount?: number;
        /**
         * The touch count to do a slide
         */
        slidetouchcount?: number;
        /**
         * picking radius in pixels
         */
        radius?: number;
        /**
         * The delay to trigger a doubleTap when using 'touch' based device (ms)
         */
        doubletapdelay?: number;
        /**
         * The key that needs to be pressed to arm this tool, if not armed the tool won't operate. 'null' means that the tool is always armed.
         */
        armingkey?: number;
    };
    type MovePointerEvent = AbstractDeviceSupport.CustomPointerEvent & {
        distanceX: number;
        distanceY: number;
    };
    type OptionsOut = Required<Options>;
}
