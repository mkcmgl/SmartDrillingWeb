import { AbstractGestureTool } from '@int/geotoolkit3d/tool/AbstractGestureTool';
import type { AbstractDeviceSupport } from '@int/geotoolkit3d/tool/devicesupport/AbstractDeviceSupport';
import type { AbstractTool } from '@int/geotoolkit3d/tool/AbstractTool';
import type { AbstractPicking } from '@int/geotoolkit3d/picking/AbstractPicking';
/**
 * Event types
 * @enum
 * @readonly
 * @events
 */
export declare enum Events {
    /**
     * onSelectionChanged
     * @event module:geotoolkit3d/tool/SelectionTool~Events~onSelectionChanged
     * @param {object} eventArgs event args
     * @param {Array<object>} eventArgs.selection selection
     * @param {object} eventArgs.event the native event
     */
    onSelectionChanged = "onSelectionChanged",
    onSelection = "onSelection"
}
/**
 * A tool that implements selection mechanism.<br>
 * <br>
 * This tool will perform a picking operation on click/tap using {@link @int/geotoolkit3d/picking/RendererPicking~RendererPicking}.<br>
 * Then it will notify the attached listeners about what has been picked.<br>
 * <br>
 * To be notified when a selection has occurred, one should add a callback using tool.on(geotoolkit3d.tool.SelectionTool.Events.onSelectionChanged, function).<br>
 * Note that if the picking found nothing, the listeners will be notified that nothing has been picked too.<br>
 * <br>
 * The selection tool can be configured to pick an area instead of a single pixel.<br>
 * In that case it may propagate a selection containing more than one object.<br>
 */
export declare class SelectionTool extends AbstractGestureTool {
    /**
     * @param options See {@link @int/geotoolkit3d/tool/AbstractGestureTool~AbstractGestureTool} for inherited options
     */
    constructor(options?: SelectionTool.Options);
    on<E extends keyof SelectionTool.EventMap>(type: E, callback: (eventType: E, sender: this, args: SelectionTool.EventMap[E]) => void): this;
    off<E extends keyof SelectionTool.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: SelectionTool.EventMap[E]) => void): this;
    notify<E extends keyof SelectionTool.EventMap>(type: E, source: SelectionTool, args?: SelectionTool.EventMap[E]): this;
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options See {@link import("geotoolkit3d/tool/AbstractGestureTool").AbstractGestureTool.setOptions} for inherited options
     */
    setOptions(options: SelectionTool.Options): this;
    getOptions(): Required<SelectionTool.Options>;
    /**
     * Called when a 'onCursorMove' event has occurred
     * @param event the native event with plot coordinates added
     */
    onCursorMove(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * Called when a 'onTap' event has occurred
     * @param event the native event with plot coordinates added
     */
    onTap(event: AbstractDeviceSupport.CustomPointerEvent): void;
    /**
     * onSelectionFunction
     * @fires @int/geotoolkit3d/tool/SelectionTool~Events.onSelection
     * @fires @int/geotoolkit3d/tool/SelectionTool~Events.onSelectionChanged
     * @param selection selection
     * @param event the native event
     */
    onSelection(selection: AbstractPicking.PickingResult[], event: AbstractDeviceSupport.CustomPointerEvent): void;
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
}
export declare namespace SelectionTool {
    /**
     * See {@link @int/geotoolkit3d/tool/AbstractGestureTool~AbstractGestureTool} for inherited options
     */
    type Options = AbstractGestureTool.Options & {
        /**
         * setting to set selection on cursormove
         */
        hover?: boolean;
        /**
         * A function that can filter the pickable shape, takes the object to filter and it's current pickable status as parameter. Note that this filtering occurs prior to picking. As a result, an object can be picked through a filtered object. (see {@link import("geotoolkit3d/picking/RendererPicking").RendererPicking filtering} documentation)
         */
        filter?: AbstractPicking.FilterFunction;
        /**
         * The status of this tool
         */
        enabled?: boolean;
        /**
         * Picking class, that will be used for picking objects
         */
        picking?: PickingClass;
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onSelection]: AbstractPicking.PickingResult[];
        [Events.onSelectionChanged]: {
            selection: AbstractPicking.PickingResult[];
            event: AbstractDeviceSupport.CustomPointerEvent;
        };
    };
}
declare type PickingClass = typeof AbstractPicking;
export {};
