import type { Object3D } from '@int/geotoolkit3d/scene/Object3D';
import type { OrthographicCamera, PerspectiveCamera } from 'three';
import type { AbstractController } from '@int/geotoolkit3d/controller/AbstractController';
import type { Plot } from '@int/geotoolkit3d/Plot';
import type { AnimationManager } from '@int/geotoolkit3d/scene/animation/AnimationManager';
/**
 * List of built-in events fired/listened by the 3D toolkit itself.<br>
 * <br>
 * Those event types will be used by the 3D toolkit when a corresponding event occurs.<br>
 * The toolkit also listen to some of those events to update its state (dirty, size, etc).<br>
 *
 * @enum
 * @readonly
 */
export declare enum Type {
    /**
     * BeforeRender.<br>
     * <br>
     * Object fires this event before the plot prepares it render
     */
    BeforeRender = "beforerender",
    /**
     * AfterRender.<br>
     * <br>
     * Object fires this event after the plot completes its render
     */
    AfterRender = "afterrender",
    /**
     * DuringRender.<br>
     * <br>
     * Object fires this event during its render
     */
    DuringRender = "duringrender",
    /**
     * RenderError.<br>
     * <br>
     * This Event is fired when any error is catched
     */
    RenderError = "rendererror",
    /**
     * Invalidate.<br>
     * <br>
     * Used whenever a change on a node explicitly requires an invalidation and render.
     */
    Invalidate = "invalidate",
    /**
     * Node added.<br>
     * <br>
     * Used whenever a node has been added to the scenegraph, note that it will be sent only once even if the given node itself has children.
     */
    Add = "add",
    /**
     * Node removed.<br>
     * <br>
     * Used whenever a node has been removed from the scenegraph.<br>
     * Note that this event will be sent only for the removed node.<br>
     * And not for its own children as those have not been removed from their parent.<br>
     */
    Remove = "remove",
    /**
     * Camera related.<br>
     * <br>
     * Used whenever the camera moves, rotates or has changed in any way
     */
    Camera = "camera",
    /**
     * Plot resizing.<br>
     * <br>
     * Used when the plot has been resized
     */
    Resize = "resize",
    /**
     * Animation occurred.<br>
     * <br>
     * Used when an intermediate step of an animation has finished in the {@link @int/geotoolkit3d/scene/animation/AnimationManager~AnimationManager}
     */
    Animation = "animation",
    /**
     * Model limits changed.<br>
     * <br>
     * Used when a node has changed its boundingbox. <br>
     * This may trigger a recompute of the modellimits of the Plot
     */
    ModelLimits = "modellimits"
}
/**
 * An event object used to propagate notification details when something occurs in the 3D scenegraph.<br>
 * <br>
 * One could listen to events occurring on any node of the plot by adding a listener/callback on the geotoolkit3d.Plot.<br>
 * Note that you can also send custom events from your nodes to implement your application's logic.<br>
 * See {@link @int/geotoolkit3d/Event~Type} for built-in events.<br>
 */
export declare class Event {
    /**
     * @param options The options
     */
    constructor(options: Event.Options);
    /**
     * Returns event's type
     * @returns The event type
     */
    getType(): string | Type;
    /**
     * Returns event's source
     * @returns The event source
     */
    getSource(): Event.Source;
    /**
     * Returns event's arguments
     * @returns The events arguments
     */
    getArgs(): any;
    /**
     * disposes this event
     */
    dispose(): null;
    static getClassName(): string;
    getClassName(): string;
}
export declare namespace Event {
    /**
     * The options
     */
    type Options = {
        /**
         * The object that triggered this event (or at least the one passed when creating the event).
         */
        source: Source;
        /**
         * The event type, used to distinguish events from each other.
         */
        type: string | Type;
        /**
         * The event arguments, can be used to provide more details and context about the event.
         */
        args?: any;
    };
    type Source = Object3D | PerspectiveCamera | OrthographicCamera | AbstractController | AnimationManager | Plot;
}
