/**
 * @module geotoolkit/scene/CompositeNode
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { AbstractNode } from '@int/geotoolkit/scene/AbstractNode';
import type { Merge } from '@int/geotoolkit/base';
import { INodeEnumerable } from '@int/geotoolkit/scene/INodeEnumerable';
import { Events, Node } from '@int/geotoolkit/scene/Node';
import { Iterator } from '@int/geotoolkit/util/iterator';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { AnimatedNode } from '@int/geotoolkit/scene/AnimatedNode';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Enum for node order
 * @enum
 * @static
 * @readonly
 */
export declare enum NodeOrder {
    /**
     * First in array
     */
    First = "First",
    /**
     * An index prior to the given anchor node
     */
    Before = "Before",
    /**
     * An index next to the given anchor node
     */
    After = "After",
    /**
     * Last in the array
     */
    Last = "Last",
    /**
     * An index next to where it currently is
     */
    Forward = "Forward",
    /**
     * An index prior to where it currently is
     */
    Backward = "Backward"
}
/**
 * A CompositeNode is a container for other nodes. Nodes/Children can be added/removed/inserted at any time.<br>
 * When clipping is enabled shapes will not be rendered outside the bounds of the composite node. Clipping children is based on the composite bounds.<br>
 * New clipping style can be set using setClipStyle() and it replaces the bounds clipping. If bounds clipping is disabled the new clip style will still be applied for the children.
 */
export declare class CompositeNode<T extends Node = Node> extends AbstractNode implements INodeEnumerable {
    /**
     * Create composite node
     * @param [options] options
     */
    constructor(options?: CompositeNode.Options<T>);
    protected copyConstructor(src: CompositeNode, deepCopy?: boolean): this;
    protected onParentChanged(node: T): this;
    on<E extends keyof CompositeNode.EventMap>(type: E, callback: (eventType: E, sender: this, args: CompositeNode.EventMap[E]) => void): this;
    off<E extends keyof CompositeNode.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: CompositeNode.EventMap[E]) => void): this;
    /**
     * Returns if clipping is enabled or not for this node.
     */
    isClippingEnabled(): boolean;
    /**
     * Enables or disables clipping of this node. If enabled,
     * shapes will not be rendered outside of its bounds.
     *
     * @param doClip enable clipping on this node
     * @returns this
     */
    enableClipping(doClip: boolean): this;
    /**
     * Return index of child
     * ( index of the specified child or -1 if node is not found)
     *
     * @param node node to check index
     */
    indexOfChild(node: T): number;
    /**
     * Insert child node at specified index
     *
     * @param index specified index
     * @param node a child node to add
     * @returns this
     */
    insertChild(index: number, node: T): this;
    /**
     * Add a child node
     *
     * @param node the child node to be added
     * @returns this
     */
    addChild(node: T | T[] | Iterator<T>): this;
    /**
     * Returns an iterator for child nodes.
     * The iterator does not support adding or deleting items from children by default. If it is
     * necessary to modify a collection of children, pass `true` as the last parameter.
     * @example
     * // Gets a writable iterator
     * const it = node.getChildren(null, true);
     * @param [filter] - A filter function. Returns all nodes if `null`.
     * @param [modify] - An option to specify if the iterator supports adding/removing items from the collection. `false` by default.
     * @returns An iterator for child nodes.
     */
    getChildren(filter?: (node: T) => boolean, modify?: boolean): Iterator<T>;
    /**
     * Remove child node
     *
     * @param node node or array of nodes to be removed
     * @param [disposeChildren] automatically dispose children. If it is true then method dispose is called for each child.
     * @returns this
     */
    removeChild(node: T | T[], disposeChildren?: boolean): this;
    /**
     * Remove all child nodes from this composite group
     * @param [disposeChildren] automatically dispose children. If it is true then method dispose is called for each child.
     * @returns this
     */
    clearChildren(disposeChildren?: boolean): this;
    /**
     * Return node by index
     *
     * @param i index of the node
     */
    getChild(i: number): T;
    /**
     * Return number of child nodes
     */
    getChildrenCount(): number;
    /**
     * Replace child node by index
     *
     * @param index index of the node
     * @param node node
     * @returns this
     */
    setChild(index: number, node: T): this;
    /**
     * changes the z-order of the nodes being rendered.
     * @param node any child added in the Composite node
     * @param order position to be added
     * @param [anchor] anchor node to specify changeOrder with respect to this node
     * @returns this
     * @throws {Error} will throw an error if [anchor = null] with the order = Before or order = After
     * @throws {Error} will throw an error if [anchor != null] with the order = Backward or order = Forward
     */
    changeChildOrder(node: T, order: NodeOrder, anchor?: T): this;
    /**
     * Executes a provided function once for each child node
     * @param callback provided function
     * @param target target to pass to callback as a second parameter
     */
    enumerateNodes(callback: CompositeNode.Callback, target: any): void;
    /**
     * Occurs before child rendering
     * @param context Rendering Context
     * @param [callback] callback to be called after rendering of geometry
     */
    protected preRendering(context: RenderingContext, callback?: () => void): void;
    /**
     * To be called after rendering, used for PDF output
     *
     * @param context Rendering Context
     * @param [callback] callback to be called after rendering
     */
    protected postRendering(context: RenderingContext, callback?: () => void): void;
    /**
     * Render node in asynchronous mode
     * @param context The rendering context to be used to draw the node
     * @param callback callback function
     */
    renderAsync(context: RenderingContext, callback: () => void): void;
    /**
     * Render children in asynchronous mode
     * @param context The rendering context to be used to draw the node
     * @param callback callback function to be called then all children are rendered
     */
    protected renderContentAsync(context: RenderingContext, callback: () => void): void;
    /**
     * Render children async
     * @param context Rendering Context
     * @param callback callback function to be called then all children are rendered
     */
    protected renderChildrenAsync(context: RenderingContext, callback: () => void): void;
    /**
     * render to specified context. This method calls preRendering, renderChildren, postRendering
     *
     * @param context Rendering Context
     */
    protected renderContent(context: RenderingContext): void;
    /**
     * Render children
     * @param context Rendering Context
     */
    protected renderChildren(context: RenderingContext): void;
    /**
     * Render composite node and children
     * @param context Rendering Context
     */
    render(context: RenderingContext): void;
    /**
     * Return true if the representation is flipped vertically
     */
    isVerticalFlip(): boolean;
    /**
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Set visible model limits
     * @param visibleModelBounds visible model limits or bounds
     * @param [deviceBounds] device bounds
     * @returns this
     */
    setVisibleModelLimits(visibleModelBounds: Rect, deviceBounds?: Rect): this;
    /**
     * Return visible model limits
     * @param [ignoreModelLimits] flag defines whether to ignore ModelLimits or not
     */
    getVisibleModelLimits(ignoreModelLimits?: boolean): Rect;
    /**
     * Return visible device limits
     * @param [ignoreModelLimits] flag defines whether to ignore ModelLimits or not
     */
    getVisibleDeviceLimits(ignoreModelLimits?: boolean): Rect;
    /**
     * Return device limits
     */
    getDeviceLimits(): Rect;
    /**
     * Return model limits. (By default it returns null)
     */
    getModelLimits(): Rect | null;
    /**
     * Gets bounds in the parent coordinates
     */
    getBounds(): Rect | null;
    /**
     * Return area of content. By default it is equal to bounds.
     * @param [transformation] scene transformation
     */
    getContentsArea(transformation?: Transformation): Rect;
    /**
     * Transformation of inner contents to content area
     */
    getContentsTransform(): Transformation | null;
    /**
     * Retrieves the local transformation of the node which represents multiplication of parent to bounds and
     * contents transformations.
     */
    getWorldTransform(): Transformation;
    /**
     * Check culling
     * Returns true if object is inside of renderable area
     *
     * @param context Rendering Context
     * @returns true if node is collided
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Adjust position of node to specified area
     *
     * @param [area] specified area. Default to Parent Model Limits
     * @param [vAlign] vertical alignment. It can be "top", "bottom", "center". Defaults to "top".
     * @param [hAlign] horizontal alignment It can be "left", "right", "center". Defaults to "left".
     * @returns this
     */
    adjustPosition(area?: Rect, vAlign?: string, hAlign?: string): this;
    /**
     * MoveTo position of node to specified area
     *
     * @param area specified area
     * @param [vAlign] vertical alignment. It can be "top", "bottom", "center".
     * @param [hAlign] horizontal alignment It can be "left", "right", "center".
     * @returns this
     */
    moveTo(area: Rect, vAlign?: string, hAlign?: string): this;
    /**
     * Gets all the properties pertaining to this object
     * @returns properties
     */
    getProperties(): CompositeNode.OptionsOut<T>;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: CompositeNode.Options<T>): this;
    /**
     * Dispose node. Clear all listeners and disconnect style to avoid memory leaks
     */
    dispose(): void;
    notify<E extends keyof CompositeNode.EventMap>(event: E, source: CompositeNode, args?: CompositeNode.EventMap[E]): this;
    /**
     * This method is called it child or children are added
     * @param child added child
     */
    protected onChildAdded(child: Node | Iterator<Node>): void;
    /**
     * This method is called it child or children are removed
     * @param child removed child
     */
    protected onChildRemoved(child: Node): void;
    unregisterAnimationStyle(root: AnimatedNode): void;
}
export declare namespace CompositeNode {
    /**
     * options
     */
    type Options<T extends Node = Node> = AbstractNode.Options & {
        /**
         * enable clipping, this does not consider the clipstyle, it is related to bounds-clipping.
         */
        clipping?: boolean;
        /**
         * array of children nodes, nodes won't be disposed
         */
        children?: T | T[];
    };
    /**
     * properties
     */
    type OptionsOut<T extends Node = Node> = AbstractNode.OptionsOut & {
        /**
         * flag set to enable clipping or not
         */
        clipping: boolean;
        /**
         * array of children nodes, nodes won't be disposed
         */
        children?: T[];
    };
    type EventMap<T extends Node = Node> = Merge<AbstractNode.EventMap, {
        [Events.ChildAdded]: T | Iterator<T>;
        [Events.ChildRemoved]: T;
        [Events.NodeOrderChanged]: T;
        [Events.NodeTreeChanged]: T;
        [Events.ModelLimitsChanged]: void;
    }>;
    type Callback = (node: Node, target: any) => void;
}
