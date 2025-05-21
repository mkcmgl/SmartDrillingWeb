/**
 * @module geotoolkit/layout/Layout
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Events } from '@int/geotoolkit/layout/Events';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import type { Iterator } from '@int/geotoolkit/util/iterator';
/**
 * The Layout class provides an abstract class for all layouts in the toolkits. This class defines a virtual API for arranging children nodes using method layout, which has parameter area.
 */
export declare abstract class Layout extends EventDispatcher {
    on<E extends keyof Layout.EventMap>(type: E, callback: (eventType: E, sender: this, args: Layout.EventMap[E]) => void): this;
    off<E extends keyof Layout.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Layout.EventMap[E]) => void): this;
    notify<E extends keyof Layout.EventMap>(type: E, source: Layout, args?: Layout.EventMap[E]): this;
    /**
     * Performs layout operation
     * @param [area] desired rect to layout
     * @param [targets] array of nodes or iterator of nodes supposed to layout
     * @returns this
     */
    abstract layout(area?: Rect, targets?: ILayoutable[] | Iterator<ILayoutable>): this;
    /**
     * Return the preferable size of children. Default implementation returns desired rect
     * @param rect desired rect to layout
     * @param [targets] array of nodes supposed to layout
     */
    getPreferredSize(rect: Rect, targets?: ILayoutable[] | Iterator<ILayoutable>): Rect;
    /**
     * Notify that layout is invalidated. Send event {@link import("geotoolkit/layout/Events").Events.LayoutInvalidated}
     * @returns this
     */
    invalidateLayout(): this;
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     */
    clone(): Layout;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     */
    protected copyConstructor(src: Layout): void;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties An object containing the properties of the layout
     */
    getProperties(): Record<string, any>;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties: Record<string, any>): this;
}
export declare namespace Layout {
    type EventMap = EventDispatcher.EventMap & {
        [Events.LayoutInvalidated]: void;
    };
}
