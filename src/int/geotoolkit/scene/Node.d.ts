/**
 * @module geotoolkit/scene/Node
 */
import { EventDispatcher } from '@int/geotoolkit/util/EventDispatcher';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { InvalidateEventArgs } from '@int/geotoolkit/scene/InvalidateEventArgs';
import { Events as DomEvents } from '@int/geotoolkit/dom';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
import { IStyleListener } from '@int/geotoolkit/attributes/IStyleListener';
import type { DOMEventArgs } from '@int/geotoolkit/controls/tools/DOMEventArgs';
/**
 * Node Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when a shape is modified and requires a render cycle to be done
     */
    Invalidate = "Invalidate",
    /**
     * Event type fired when a shape is added as a child to another shape
     */
    ChildAdded = "ChildAdded",
    /**
     * Event type fired when a shape is removed from another shape children.
     */
    ChildRemoved = "ChildRemoved",
    /**
     * Event type fired when a shape's modellimits have been changed. For example using setModelLimits()
     */
    ModelLimitsChanged = "ModelLimitsChanged",
    /**
     * Event type fired when the visible limits have changed
     */
    VisibleLimitsChanged = "VisibleLimitsChanged",
    /**
     * Event type fired when a node's SceneTransformation has been changed.
     */
    SceneTransformationChanged = "SceneTransformationChanged",
    /**
     * Event type fired when a node's LocalTransformation has been changed.
     */
    LocalTransformationChanged = "LocalTransformationChanged",
    /**
     * Event type fired when a node's order has been changed.
     */
    NodeOrderChanged = "NodeOrderChanged",
    /**
     * Changed
     */
    Changed = "Changed",
    /**
     * Bounds is changed
     */
    BoundsChanged = "BoundsChanged",
    /**
     * Orientation is changed
     */
    OrientationChanged = "OrientationChanged",
    /**
     * Visibility is changed
     */
    VisibilityChanged = "VisibilityChanged",
    /**
     * Css class is changed
     */
    CssClassChanged = "CssClassChanged",
    /**
     * Node tree structure changed (children added/removed/order changed)
     */
    NodeTreeChanged = "NodeTreeChanged",
    /**
     * Node parent has been changed
     */
    ParentChanged = "ParentChanged"
}
/**
 * Type of state changes
 * @enum
 * @readonly
 */
export declare enum StateChanges {
    /**
     * Window pixel scale is changed
     */
    PixelScaleChanged = "PixelScaleChanged",
    /**
     * Node is translated
     */
    Translated = "Translated",
    /**
     * Required to rebuild tree
     */
    Rebuild = "Rebuild",
    /**
     * Parent state changed
     */
    TransformationChanged = "TransformationChanged",
    /**
     * UpdateLayout
     */
    UpdateLayout = "UpdateLayout",
    /**
     * Style Changed
     */
    StyleChanged = "StyleChanged"
}
/**
 * The Node class is the abstract class parent of all geotoolkit shapes.<br>
 * <br>
 * Node implements the functions required by a shape to be inserted in a Plot. (Except the render function which is Geotoolkit abstract method.)<br>
 * Every Node has two <b>transformations</b>: World Transform and the Scene Transform. <br>
 * WorldTransform corresponds to the concatenation of local and contents transforms <br>
 * Scene Transform corresponds to the concatenation of a Node's World Transform with its parent's World Transforms or the ultimate transformation beween the group and the plot.<br>
 * <br>
 * A node handles some of the <b>invalidation</b> mechanism as it forwards (upward) the invalidation event to its parent.<br>
 * One may add an invalidationHandler to be notified when the node has been invalidated, see {@link import("geotoolkit/scene/Node").Node.addInvalidateHandler}
 * <br>
 * When implementing a new shape, one will have to implement the <b>render()</b>function which allows rendering graphics.<br>
 * Note that shape selection/detection is also using rendering.<br>
 * It is also recommended to implement the <b>checkCollision()</b> function to let the toolkit optimize rendering by checking if the node is in the specified area and needs to be rendered.<br>
 * If it passes the test then only render() function will be called.<br>
 * <br>
 * The node class also introduces the functions <b>getProperties</b> and <b>setProperties</b> that may be used for serialization/deserialization.<br>
 * Therefore, a custom shape should extend those functions to be able to be serialized and deserialized.
 */
export declare abstract class Node extends EventDispatcher implements IStyleListener {
    /**
     * Create Node
     * @param [options] options
     */
    protected constructor(options?: Node.Options);
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     * @returns clone
     */
    clone(): Node;
    /**
     * Gets all the properties pertaining to this object
     * @returns An object containing the properties to set
     */
    getProperties(): Node.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param [properties] An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Node.Options): this;
    /**
     * Returns a string representation of this object (generally the classname)
     * @returns A string representation
     */
    toString(): string;
    /**
     * Returns true if node can be picked/selected.
     *
     * @returns The selectable flag
     */
    isSelectable(): boolean;
    /**
     * Allows to select node. If node is not selectable then child node is
     * not selectable.
     *
     * @param selectable flag to allow node selection
     * @returns this
     */
    setSelectable(selectable: boolean): this;
    /**
     * Returns the node name
     *
     * @returns The node name
     */
    getName(): string;
    /**
     * Sets name of the node
     *
     * @param name The node name
     * @returns this
     */
    setName(name: string): this;
    /**
     * Returns css class name to be used to apply CSS style
     *
     * @returns the css class name
     */
    getCssClass(): string | null;
    /**
     * Sets css class name of the node to be used to apply CSS style
     *
     * @param name css class name of the node
     * @returns this
     */
    setCssClass(name: string): this;
    /**
     * Returns the object associated with the node by user.
     * @returns The node's user-object
     */
    getTag(): any;
    /**
     * Allows the user to associate any arbitrary object with the node.
     *
     * @param tag The object to be associated with the node.
     * @returns this
     */
    setTag(tag: any): this;
    /**
     * Returns the associated identifier of the node
     * @returns The node's id
     */
    getId(): string | number | null;
    /**
     * Allows the user to associate any identifier
     *
     * @param id object id
     * @returns this
     */
    setId(id: number | string | null): this;
    /**
     * Return visibility of the node
     *
     * @returns true if node is visible
     */
    getVisible(): boolean;
    /**
     * Sets visibility of the node.
     * Send event {@link import("geotoolkit/scene/Node").Events.VisibilityChanged}
     * @param value flag specifying visibility of the node
     * @returns this
     */
    setVisible(value: boolean): this;
    /**
     * Return parent node
     *
     * @returns parent node
     */
    getParent(): Node | null;
    /**
     * <code>getWorldTransform</code> retrieves the local transformation
     * of the inner node coordinates to parent coordinates.
     *
     * @returns the world transform.
     */
    getWorldTransform(): Transformation | null;
    /**
     * Returns transformation from node to root scene
     *
     * @returns a transformation from node to root scene
     */
    getSceneTransform(): Transformation | null;
    /**
     * Update state. These methods reset node state and update state for children. this method is useful to
     * refresh a scene graph
     * @param [regions] optional array to return invalid rectangles in the parent coordinates
     * @param [changes] optional parameter to specify a reason of changes
     * @returns this
     */
    updateState(regions?: Rect[], changes?: StateChanges): this;
    /**
     * Update scene transformation
     * @returns this
     */
    updateSceneTransformation(): this;
    /**
     * Returns root node. <br>
     * If node doesn't have parent then it returns itself.
     *
     * @returns the root node
     */
    getRoot(): Node;
    /**
     * Invalidate area of the shape.  This method invalidates parent by default. invalidated from parent to root node.
     * @param [bounds] bounds of the invalid rectangle in the inner node coordinates
     * @param [force] true if parent should be invalidated immediately
     * if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     * @returns this
     */
    invalidate(bounds?: Rect, force?: boolean): this;
    /**
     * set notification state
     * @param notify flag set to invalidate parent or not
     * @param [force] true if parent should be invalidated immediately
     * @returns this
     */
    setNotification(notify: boolean, force?: boolean): this;
    /**
     * return state of notification
     * @returns current notification state
     */
    isNotificationEnabled(): boolean;
    /**
     * Add invalidate handler
     * @deprecated since 4.0, use Node.on instead
     * @param handler handler to be notified about invalidation
     * @returns this
     */
    addInvalidateHandler(handler: Function): this;
    /**
     * Remove invalidate handler
     * @param handler handler to be notified about invalidation
     * @deprecated since 4.0, use Node.off instead
     * @returns this
     */
    removeInvalidateHandler(handler: Function): this;
    /**
     * Check if this node is within the area being rendered by the context
     *
     * @param context Rendering Context
     * @returns true if object is inside of renderable area
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Renders node
     * @param context The rendering context to be used to draw the node
     */
    abstract render(context: RenderingContext): void;
    /**
     * Render node in asynchronous mode. Default implementation creates call method "render" inside
     * @param context The rendering context to be used to draw the node
     * @param callback callback function
     */
    renderAsync(context: RenderingContext, callback: () => void): void;
    /**
     * Executes delegate and return the result. It allows us to keep all initialization calls in one place, <br>
     * and we do not need to scroll up or down in IDE to find how and where it was initialized.
     * @param delegate Function to execute
     * @returns The result if any or this
     * @example
     * // All setters (.setName() for example) returns reference to the this.
     * // In order to modify inner object like LineStyle or Pattern, to get this object (property) we should call getter to get object reference.
     * // Then modify it as shown below in Option 1 or you can use execute methods shown in Option 2.
     * import {Group} from '@int/geotoolkit/scene/Group';
     * import {Rect} from '@int/geotoolkit/util/Rect';
     * // Option 1
     * const group = new Group()
     *      .setName('MyGroup')
     *      .setBounds(new Rect(0, 0, 42, 16))
     *      .enableClipping(true)
     *      .setTag({'type': 'sometype'});
     *
     * group.getLineStyle().setPattern('pattern');
     * return group;
     *
     * // Options 2 ( using execute method )
     * return group
     *  .execute(function () {
     *     this.getLineStyle()
     *        .setPattern("pattern");
     *   });
     */
    execute(delegate: (this: this) => void): this;
    execute<T>(delegate: (this: this) => T): T;
    /**
     * Enable event propagation from the node hierarchy from bottom to top
     * <p>
     * This option is similar to DOM Event bubbling, which allows
     * to get any event from child node. By default it is disabled
     * for better performance.
     * </p>
     * @param enable enable
     * @returns this
     * @example
     * import {Group} from '@int/geotoolkit/scene/Group';
     * import {Events as SceneEvents} from '@int/geotoolkit/scene/Node';
     * const parentGroup = new Group()
     *      .setName('ParentGroup')
     *      .enableEventPropagation(true);
     * const childGroup = new Group()
     *      .setName('ChildGroup');
     *
     * parentGroup.addChild(childGroup);
     * parentGroup.on(SceneEvents.Invalidate, (eventName, sender, args) => {
     *    // Got notifications from all children of parent group
     * });
     * childGroup.invalidate();
     */
    enableEventPropagation(enable: boolean): this;
    /**
     * Return true if event propagation is enabled from child to parent
     */
    isEventPropagationEnabled(): boolean;
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     * Gets dynamic property by name. These properties can be
     * used as a property bags
     * @param name property name
     */
    getProperty(name: string): any;
    /**
     * Sets dynamic property by name
     * @param name property name
     * @param value property value
     * @returns this
     */
    setProperty(name: string, value: any): this;
    /**
     * Sets z-index for node (set null for default)
     * @param value index determining node z-position
     * @returns this
     */
    setZIndex(value: number | null): this;
    /**
     * Returns node z-index (null if not set)
     */
    getZIndex(): number | null;
    on<E extends keyof Node.EventMap>(type: E, callback: (eventType: E, sender: this, args: Node.EventMap[E]) => void): this;
    off<E extends keyof Node.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Node.EventMap[E]) => void): this;
    /**
     * Gets list of css class names which applied to this node
     */
    getCssClasses(): string[] | null;
    /**
     * Check if node has specified css class
     * @param cssClass css class name
     */
    hasCssClass(cssClass: string): boolean;
    /**
     * Adds new css class to node
     * @param cssclass css class name('s)
     * @returns this
     */
    addCssClass(cssclass: string[] | string): this;
    /**
     * Removes css class from node
     * @param cssclass css class name('s)
     * @returns this
     */
    removeCssClass(cssclass: string[] | string): this;
    /**
     * Enable / disable all notifications
     * @param enabled sets if this object sends notifications
     */
    static enableSceneGraphNotification(enabled: boolean): void;
    /**
     * Return status of the global notification for all nodes.
     */
    static isSceneGraphNotificationEnabled(): boolean;
    /**
     * Find root of the node with specified type
     * @param node node to start search
     * @param classType type of the class to search for
     */
    static findParent<T extends abstract new (...args: any) => any>(node: Node, classType: T): InstanceType<T> | null;
    /**
     * Find root of the node with specified type
     * @param node node to start search
     * @param classType interface name to search for
     */
    static findParent(node: Node, classType: string): Node | null;
    /**
     * This method is called when parent changes. Do not call it directly.
     * @param node node to change parent
     * @returns this
     */
    protected onParentChanged(node: Node): this;
    /**
     * This method is called if visibility is changed.  Send event {@link import("geotoolkit/scene/Node").Events.VisibilityChanged}
     */
    protected onVisibilityChanged(): void;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     * @param [deepCopy] deep copy
     * @returns this
     */
    protected copyConstructor(src: Node, deepCopy?: boolean): this;
    /**
     * Invalidate parent and notify all listeners.
     * NOTE: Don't keep arguments of the event, because instance can be changed
     * @fires @int/geotoolkit/scene/Node~Events.Invalidate
     * @param [bounds] bounds of the invalid rectangle in the inner node coordinates
     * @param [force] force rendering
     * @returns this
     */
    protected invalidateParent(bounds?: Rect, force?: boolean): this;
    /**
     * Notify listeners of the Node
     * @param event type of event
     * @param source source who called the event
     * @param [args] event arguments
     * @returns this
     */
    notify<E extends keyof Node.EventMap>(event: E, source: Node, args?: Node.EventMap[E]): this;
    /**
     * Connects style.<br>
     * <br>
     * This convenience method subscribes a listener to given style for the specified type.<br>
     * And automatically un-subscribes listener if node is disposed to prevent memory leaks
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     * @returns this
     */
    connectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
    /**
     * Disconnect style
     * <br>
     * This convenience method un-subscribes a listener to given style for the specified type.<br>
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     * @returns this
     */
    disconnectStyle(style: EventDispatcher, type: string, callback: IStyleListener.AttributeCallback): this;
    /**
     * Update time stamp to indicate that Node or Children has been changed.
     * @returns this
     */
    protected updateTimeStamp(): this;
}
export declare namespace Node {
    /**
     * The Node options
     */
    type Options = {
        /**
         * name of the node. It is often used for debugging purposes or to simplify queries
         */
        name?: string;
        /**
         * visibility of the node, a boolean to determine if the node should be rendered or not
         */
        visible?: boolean;
        /**
         * selectable node, a boolean to determine if selection should consider this node
         */
        selectable?: boolean;
        /**
         * id of the node, its a unique identifier
         */
        id?: string | number | null;
        /**
         * custom information associated with node. It is a user object which can be used by client code to store information or attach an application object to the shape
         */
        tag?: any;
        /**
         * The css class name of this node
         */
        cssclass?: string;
        /**
         * object with every dynamic property set (if has any)
         */
        dynamicproperties?: Record<string, any>;
        /**
         * Define node z-index
         */
        'z-index'?: number | null;
    };
    /**
     * An object containing the properties to set
     */
    type OptionsOut = Options;
    type EventMap = EventDispatcher.EventMap & {
        [Events.Invalidate]: InvalidateEventArgs;
        [Events.Changed]: void;
        [Events.BoundsChanged]: Rect;
        [Events.SceneTransformationChanged]: void;
        [Events.VisibilityChanged]: void;
        [Events.CssClassChanged]: string[];
        [Events.NodeTreeChanged]: Node;
        [Events.ParentChanged]: void;
        [DomEvents.Hover]: DOMEventArgs;
        [DomEvents.MouseDown]: DOMEventArgs;
        [DomEvents.MouseUp]: DOMEventArgs;
        [DomEvents.Enter]: DOMEventArgs;
        [DomEvents.Leave]: DOMEventArgs;
        [DomEvents.Click]: DOMEventArgs | any;
        [DomEvents.DoubleClick]: DOMEventArgs;
    };
}
/**
 * Test if source is an instance of Node type
 * @param source a parameter to verify
 * @returns true if source is an instance of Node type
 */
export declare function isNode(source: any): source is Node;
