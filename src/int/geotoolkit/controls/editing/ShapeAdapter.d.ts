/**
 * @module geotoolkit/controls/editing/ShapeAdapter
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Point } from '@int/geotoolkit/util/Point';
import type { ShapeAdapterRegistry } from '@int/geotoolkit/controls/editing/ShapeAdapterRegistry';
import type { Transformation } from '@int/geotoolkit/util/Transformation';
import type { AbstractHandle } from '@int/geotoolkit/controls/editing/AbstractHandle';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * ShapeAdapter Events enumerator
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * Shape adapter is moved
     */
    Moved = "moved",
    /**
     * Adapter position is changed
     */
    PositionChanged = "positionChanged",
    /**
     * Active state is changed
     */
    ActiveStateChanged = "activeStateChanged"
}
/**
 * Defines an abstract adapter to perform operation for shapes<br>
 * This is the parent class for shape adapters responsible for implementing editing capabilities for a shape.
 */
export declare abstract class ShapeAdapter<T = Node> extends EventDispatcher {
    /**
     * Creates adapter
     */
    protected constructor();
    on<E extends keyof ShapeAdapter.EventMap>(type: E, callback: (eventType: E, sender: this, args: ShapeAdapter.EventMap[E]) => void): this;
    off<E extends keyof ShapeAdapter.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ShapeAdapter.EventMap[E]) => void): this;
    notify<E extends keyof ShapeAdapter.EventMap>(type: E, source: ShapeAdapter<T>, args?: ShapeAdapter.EventMap[E]): this;
    /**
     * Get state of the adapter
     */
    isInitialized(): boolean;
    /**
     * Initialize
     */
    initialize(): boolean;
    /**
     * Sets registry
     * @param registry associated with current shape adapter
     * @returns this
     */
    setRegistry(registry: ShapeAdapterRegistry): this;
    /**
     * Return transformation
     */
    getTransformation(): Transformation;
    /**
     * Update
     */
    update(): void;
    /**
     * Return manipulator layer
     */
    getManipulatorLayer(): CompositeNode;
    /**
     * Sets shape to be modified
     * @param shape shape to be modified
     */
    setShape(shape: T): this;
    /**
     * Shape
     */
    getShape(): T;
    /**
     * Activate
     * @param active active state or not
     */
    setActive(active: boolean): this;
    /**
     * Returns active state of this handle
     */
    isActive(): boolean;
    /**
     * Sets active handle
     * @param handle active handle
     * @returns this
     */
    setActiveHandle(handle: AbstractHandle): this;
    /**
     * Gets active handle
     */
    getActiveHandle(): AbstractHandle;
    /**
     * Sets position
     * @param [x] x coordinate
     * @param [y] y coordinate
     */
    setPosition(x?: number, y?: number): this;
    /**
     * Gets position
     */
    getPosition(): Point;
    /**
     * Move adapter and send event Events.Moved
     * @param x x position
     * @param y y position
     * @returns this
     */
    move(x: number, y: number): this;
    /**
     * Gets properties pertaining to this handle
     * @returns properties properties
     */
    getProperties(): any;
    /**
     * Sets properties pertaining to this object
     * @param [props] An object containing the properties to set
     * @returns this
     */
    setProperties(props?: any): this;
    /**
     * OnMove
     * @param x x coordinate
     * @param y y coordinate
     */
    protected abstract onMove(x: number, y: number): this;
    /**
     * Active state is changed
     * @param active active state or not
     */
    protected abstract onActiveStateChanged(active: boolean): void;
    /**
     * OnInitialize
     * @returns success true if initialized successfully
     */
    protected abstract onInitialize(): boolean;
    /**
     * Update handles
     * @returns this
     */
    abstract updateHandles(): this;
}
export declare namespace ShapeAdapter {
    type EventMap = EventDispatcher.EventMap & {
        [Events.Moved]: Point;
        [Events.ActiveStateChanged]: void;
        [Events.PositionChanged]: Point;
    };
}
