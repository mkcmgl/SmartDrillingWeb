/**
 * @module geotoolkit/controls/editing/ShapeAdapterRegistry
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import type { Plot } from '@int/geotoolkit/plot/Plot';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import type { ShapeAdapter } from '@int/geotoolkit/controls/editing/ShapeAdapter';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Node } from '@int/geotoolkit/scene/Node';
/**
 * ShapeAdapterRegistry's Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when an adapter is deactivated
     */
    Deactivated = "deactivated",
    /**
     * Event type fired when an adapter is activated
     */
    Activated = "activated"
}
/**
 * Defines a registry of shape adapters to edit shapes
 */
export declare class ShapeAdapterRegistry extends EventDispatcher {
    /**
     * Shape adapter registry
     * @param plot plot which renders node
     * @param manipulatorLayer layer to put temporary shapes in
     */
    constructor(plot: Plot, manipulatorLayer: CompositeNode);
    on<E extends keyof ShapeAdapterRegistry.EventMap>(type: E, callback: (eventType: E, sender: this, args: ShapeAdapterRegistry.EventMap[E]) => void): this;
    off<E extends keyof ShapeAdapterRegistry.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ShapeAdapterRegistry.EventMap[E]) => void): this;
    notify<E extends keyof ShapeAdapterRegistry.EventMap>(type: E, source: ShapeAdapterRegistry, args?: ShapeAdapterRegistry.EventMap[E]): this;
    /**
     * Update plot
     */
    update(): void;
    /**
     * Return manipulator layer
     */
    getManipulatorLayer(): CompositeNode;
    /**
     * Register shape adapter
     * @param classType class name of shape
     * @param shapeAdapter instance of shape adapter
     * @returns this
     */
    register(classType: string, shapeAdapter: ShapeAdapter): this;
    /**
     * Return adapter for the specified shape
     * @param shape current shape
     */
    getAdapter(shape: Node): ShapeAdapter;
    /**
     * Gets a list of all shape classes, previously registered using register method
     * @returns a collection of classes that have associated adapters
     */
    getRegisteredClasses(): string[];
    /**
     * Sets transformation
     * @param transformation transformation
     * @returns this
     */
    setTransformation(transformation: Transformation): this;
    /**
     * Gets transformation
     */
    getTransformation(): Transformation;
    /**
     * Sets active adapter and send events
     * @param [adapter] instance of shape adapter
     * @returns this
     */
    setActiveAdapter(adapter?: ShapeAdapter): this;
    /**
     * Return adapter
     */
    getActiveAdapter(): ShapeAdapter;
}
export declare namespace ShapeAdapterRegistry {
    type EventMap = EventDispatcher.EventMap & {
        [Events.Deactivated]: ShapeAdapter;
        [Events.Activated]: ShapeAdapter;
    };
}
