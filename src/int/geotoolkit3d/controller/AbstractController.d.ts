import { AbstractGestureTool } from '@int/geotoolkit3d/tool/AbstractGestureTool';
import type { Camera, Vector3 } from 'three';
import type { AbstractDeviceSupport } from '@int/geotoolkit3d/tool/devicesupport/AbstractDeviceSupport';
/**
 * Abstract controller
 */
export declare abstract class AbstractController extends AbstractGestureTool {
    protected constructor(options?: AbstractController.Options);
    setOptions(options?: AbstractController.Options): this;
    /**
     * Get controller options
     * @returns options
     */
    getOptions(): AbstractController.OptionsOut;
    onCursorMove(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onTap(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onKeyStart(event: KeyboardEvent): void;
    onKey(event: KeyboardEvent): void;
    onKeyEnd(event: KeyboardEvent): void;
    onVisibilityGained(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onVisibilityLost(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onDoubleTap(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onDragStart(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onDrag(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onDragEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onPinchStart(event: AbstractGestureTool.MovePointerEvent): void;
    onPinch(event: AbstractGestureTool.MovePointerEvent): void;
    onPinchEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onSlideStart(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onSlide(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onSlideEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Gets this controler Camera
     */
    getCamera(): Camera;
}
export declare namespace AbstractController {
    /**
     * The options that can be set using the constructor, or using setOptions(options)
     */
    export type Options = Partial<OptionsBase> & AbstractGestureTool.Options;
    /**
     * The options returned by getOptions().
     */
    export type OptionsOut = OptionsBase & Required<AbstractGestureTool.Options>;
    /**
     * The options specific to this file (this class excluding its parent classes)
     */
    type OptionsBase = {
        /**
         * Disable this controller.
         * Default is true.
         */
        enabled: boolean;
        /**
         * Disable zooming.
         * Default is false.
         */
        nozoom: boolean;
        /**
         * Disable panning.
         * Default is false.
         */
        nopan: boolean;
        /**
         * Zoom speed factor.
         * Default is 1.
         */
        zoomspeed: number;
        /**
         * The camera linked to this controller.
         * Camera might not be defined.
         */
        camera?: Camera;
        /**
         * The position coordinates this controller is looking at
         */
        lookat: Vector3;
        /**
         * The position of this controller ("eye" position)
         */
        position: Vector3;
    };
    export {};
}
