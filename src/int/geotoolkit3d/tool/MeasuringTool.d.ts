import { AbstractGestureTool } from '@int/geotoolkit3d/tool/AbstractGestureTool';
import { Color } from 'three';
import { LineSegments } from '@int/geotoolkit3d/scene/LineSegments';
import type { AbstractDeviceSupport } from '@int/geotoolkit3d/tool/devicesupport/AbstractDeviceSupport';
import type { AbstractTool } from '@int/geotoolkit3d/tool/AbstractTool';
import type { AbstractPicking } from '@int/geotoolkit3d/picking/AbstractPicking';
/**
 * Event types
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * DistanceChanged
     */
    DistanceChanged = "DistanceChanged"
}
/**
 * A tool that implements selection mechanism.<br>
 * <br>
 * This tool will perform a picking operation on click/tap using {@link @int/geotoolkit3d/picking/RendererPicking~RendererPicking}.<br>
 * Then it will notify the attached listeners about what has been picked.<br>
 * <br>
 * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
 * <br>
 * The selection tool can be configured to pick an area instead of a single pixel.<br>
 * In that case it may propagate a selection containing more than one object.<br>
 */
export declare class MeasuringTool extends AbstractGestureTool {
    constructor(options?: MeasuringTool.Options);
    on<E extends keyof MeasuringTool.EventMap>(type: E, callback: (eventType: E, sender: this, args: MeasuringTool.EventMap[E]) => void): this;
    off<E extends keyof MeasuringTool.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: MeasuringTool.EventMap[E]) => void): this;
    notify<E extends keyof MeasuringTool.EventMap>(type: E, source: MeasuringTool, args?: MeasuringTool.EventMap[E]): this;
    /**
     * sets the visibility of the children objects
     * @param visible the flag to set the visibility of children
     */
    setChildrenVisibility(visible: boolean): this;
    /**
     * Set options
     */
    setOptions(options: MeasuringTool.Options): this;
    getOptions(): Required<MeasuringTool.Options>;
    onCursorMove(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onTap(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Function to get the current distance of the two points from the tool
     * @returns distance between the two points
     */
    getDistance(): number;
    onKeyStart(event: KeyboardEvent): void;
    onKey(event: KeyboardEvent): void;
    onKeyEnd(event: KeyboardEvent): void;
    onDoubleTap(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onMouseWheel(event: WheelEvent): void;
    onPinchStart(event: AbstractGestureTool.MovePointerEvent): void;
    onPinch(event: AbstractGestureTool.MovePointerEvent): void;
    onPinchEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onDragStart(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onDrag(event: AbstractDeviceSupport.CustomPointerEvent): void;
    onDragEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onSlideStart' event has occurred
     * @param event the native event with plot coordinates added
     */
    onSlideStart(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onSlide' event has occurred
     * @param event the native event with plot coordinates added
     */
    onSlide(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onSlideEnd' event has occurred
     * @param event the native event with plot coordinates added
     */
    onSlideEnd(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onVisibilityGained' event has occurred
     * @param event the native event with plot coordinates added
     */
    onVisibilityGained(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onVisibilityLost' event has occurred
     * @param event the native event with plot coordinates added
     */
    onVisibilityLost(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Dispose measuring tool
     */
    dispose(): void;
}
export declare namespace MeasuringTool {
    /**
     * See {@link @int/geotoolkit3d/tool/AbstractGestureTool~AbstractGestureTool} for inherited options
     */
    type Options = AbstractGestureTool.Options & {
        /**
         * The status of this tool
         */
        enabled?: boolean;
        /**
         * The color of the anchor point of the ruler.
         */
        anchorcolor?: string | Color;
        /**
         * The size of the anchor point of the ruler.
         */
        anchorsize?: number;
        /**
         * The color of the pointer of the ruler.
         */
        pointercolor?: string | Color;
        /**
         * The size of the pointer of the ruler.
         */
        pointersize?: number;
        /**
         * The ruler line options.
         */
        lineoptions?: Omit<LineSegments.Options, 'data'>;
        /**
         * Picking class, that will be used for picking objects
         */
        picking?: PickingClass;
    };
    type EventMap = AbstractTool.EventMap & {
        DistanceChanged?: number;
    };
}
declare type PickingClass = typeof AbstractPicking;
export {};
