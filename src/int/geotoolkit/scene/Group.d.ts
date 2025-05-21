import { Events as SceneEvents, Node, StateChanges } from '@int/geotoolkit/scene/Node';
import { ILayoutable } from '@int/geotoolkit/layout/ILayoutable';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Layout } from '@int/geotoolkit/layout/Layout';
import { LayoutStyle } from '@int/geotoolkit/layout/LayoutStyle';
import { Events } from '@int/geotoolkit/layout/Events';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { SpaceStyle } from '@int/geotoolkit/attributes/SpaceStyle';
import { ViewCache } from '@int/geotoolkit/scene/ViewCache';
import type { ModelLimitsStrategy } from '@int/geotoolkit/scene/ModelLimitsStrategy';
import type { Cache } from '@int/geotoolkit/scene/Cache';
import type { RenderingContext } from '@int/geotoolkit/renderer/RenderingContext';
/**
 * Defines a group node to be a collection of children nodes.<br>
 * A group has bounds, which specify a position and size in the parent
 * coordinates and has own inner model coordinates. All children nodes use
 * inner model coordinates to specify own location inside the group.<br>
 * The group maps model coordinates to bounds automatically for children.
 * Children can be pre-rendered using {@link @int/geotoolkit/scene/Cache~Cache} strategy.<br>
 * It means that system renders children to cache and cache to display. As a rule a cache is a
 * raster image.<br>
 * If a child is changed then you need to rebuild group to refresh representation.
 */
export declare class Group<T extends Node = Node> extends CompositeNode<T> implements ILayoutable {
    /**
     * Creates a Group
     * @param [options] options
     */
    constructor(options?: Group.Options<T>);
    clone(): Group<T>;
    protected copyConstructor(src: Group<T>, deepCopy?: boolean): this;
    on<E extends keyof Group.EventMap>(type: E, callback: (eventType: E, sender: this, args: Group.EventMap[E]) => void): this;
    off<E extends keyof Group.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Group.EventMap[E]) => void): this;
    notify<E extends keyof Group.EventMap>(type: E, source: Group, args?: Group.EventMap[E]): this;
    /**
     * specify desired layout style
     * @param layoutStyle desired layout style
     * @param [silent] silent setting
     * @param [merge] true if you want to merge layoutStyle with existing attribute, false by default
     * @returns this
     */
    setLayoutStyle(layoutStyle: LayoutStyle | LayoutStyle.Options, silent?: boolean, merge?: boolean): this;
    /**
     * return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Return preferred size to layout children
     */
    getPreferredSize(): Rect;
    /**
     * Returns desired width of the group as a layoutable object.
     * This method is a helper method to get access to getLayoutStyle()
     * @returns desired width ("undefined" by default)
     */
    getDesiredWidth(): string | number | undefined;
    /**
     * Sets desired width of the group as a layoutable object
     * @param value desired width to set
     * @param [silent] silent setting
     * @returns this
     */
    setDesiredWidth(value: string | number, silent?: boolean): this;
    /**
     * Returns desired height of the group as a layoutable object
     * This method is a helper method to get access to getLayoutStyle()
     * @returns desired height ("undefined" by default)
     */
    getDesiredHeight(): string | number | undefined;
    /**
     * Sets desired height of the group as a layoutable object
     * @param value desired height to set
     * @param [silent] silent setting
     * @returns this
     */
    setDesiredHeight(value: string | number, silent?: boolean): this;
    /**
     * Associate layout with a group.
     * @param layout layout instance to be set or layout properties to apply
     * @returns this
     */
    setLayout(layout: Layout | Record<string, any>): this;
    /**
     * Returns layout associated with the group
     * @returns layout
     */
    getLayout(): Layout;
    /**
     * Updates layout(s)
     * @param [targets] optional parameter about which element to layout
     * @returns this
     * @fires @int/geotoolkit/layout/Events~Events.LayoutUpdated
     */
    updateLayout(targets?: ILayoutable[]): this;
    /**
     * Notify that layout is invalidated. Send event {@link import("geotoolkit/layout/Events").Events.LayoutInvalidated}
     * @param [propagate] propagate invalidate layout to parent
     * @returns this
     */
    invalidateLayout(propagate?: boolean): this;
    /**
     * Return true if layout is invalid
     */
    isLayoutInvalidated(): boolean;
    /**
     * Set invalidation status
     * @param invalidated invalidated layout
     */
    protected setLayoutInvalidated(invalidated: boolean): void;
    /**
     * Return true if the representation is flipped vertically
     *
     * @returns flip
     */
    isVerticalFlip(): boolean;
    /**
     * Set vertical flip of the representation
     *
     * @param flip flag to set the vertical flip of the representation
     * @returns this
     */
    setVerticalFlip(flip: boolean): this;
    /**
     * Return true if the representation is flipped horizontally
     *
     * @returns flip
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     *
     * @param enable enable flip
     * @returns this
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Sets cache to be used to cache
     *
     * @param cache cache to be used
     * @param [rebuild] rebuild cache
     * @returns this
     */
    setCache(cache: Cache, rebuild?: boolean): this;
    /**
     * Return cache strategy to be used to cache children nodes
     *
     * @returns cache
     */
    getCache(): Cache;
    /**
     * Clear cache
     * @returns this
     */
    clearCache(): this;
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory
     * leaks
     */
    dispose(): void;
    /**
     * Render node in asynchronous mode. This implementation doesn't support cache for now.
     * @param context The rendering context to be used to draw the node
     * @param callback callback function
     */
    renderAsync(context: RenderingContext, callback: () => void): void;
    /**
     * Render group
     *
     * @param context context to render group
     */
    render(context: RenderingContext): void;
    /**
     * Add overlay to container
     * @param overlay overlay to be added
     * @returns this
     */
    addOverlay(overlay: Node | Node[]): this;
    /**
     * Insert child overlay at specified index
     * @param index specified index
     * @param overlay a overlay to add
     * @returns this
     */
    insertOverlay(index: number, overlay: Node): this;
    /**
     * Remove child overlay
     * @param overlay overlay or array of nodes to be removed
     * @returns this
     */
    removeOverlay(overlay: Node | Node[]): this;
    /**
     * Returns amount of overlays
     */
    getOverlaysCount(): number;
    /**
     * Return overlay at specified index
     * @param index index at which to get the overlay for
     * @returns track
     */
    getOverlayAt(index: number): Node | null;
    /**
     * Return index of overlay
     * ( index of the specified child or -1 if node is not found)
     * @param node node to check index
     */
    indexOfOverlay(node: Node): number;
    /**
     * Render overlays on top of cache. This method does nothing, but can be implemented to render
     * graphics on top of cache and between borders
     *
     * @param context context to render overlays
     * @returns this
     */
    protected renderOverlays(context: RenderingContext): this;
    /**
     * Render overlays on top of cache in asynchronous mode. This method calls renderOverlays
     *
     * @param context context to render overlays
     * @param callback callback function
     */
    protected renderOverlaysAsync(context: RenderingContext, callback: () => void): void;
    /**
     * Render background
     *
     * @param context context to render background
     * @param bounds group bounds
     * @returns this
     */
    protected renderBackground(context: RenderingContext, bounds: Rect): this;
    /**
     * Draws a rectangle at the bounding box (in parent coordinates)
     *
     * @param localContext The local rendering context
     * @param [bounds] group bounds
     * @returns this
     */
    protected drawBorder(localContext: RenderingContext, bounds?: Rect): this;
    /**
     * Return border style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets border color
     * Returns this
     *
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return fill style
     *
     * @returns fillStyle current fill style
     */
    getFillStyle(): FillStyle;
    /**
     * Sets fill style
     *
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
    /**
     * Rebuild node. This method resets state, cache, and invalidate node.
     * @param [force] optional boolean parameter that can force invalidation
     * @param [changes] optional parameter to specify a reason of changes
     * @returns this
     */
    rebuild(force?: boolean, changes?: StateChanges): this;
    /**
     * Sets bounds of the node in the parent coordinates
     *
     * @param bounds bound of the node in the parent coordinates
     * @returns this
     */
    setBounds(bounds: Rect.Type): this;
    /**
     * Sets inner model limits
     *
     * @param limits inner limits
     * @returns this
     */
    setModelLimits(limits: Rect.Type): this;
    /**
     * Get the bounds in the parents model space. If bounds are not set,
     * then parent model limits are used.
     *
     * @returns current bounds
     */
    getBounds(): Rect | null;
    /**
     * Gets model limits, the limits of this groups inside space
     *
     * @returns the current model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Invalidate node
     * @param [bounds] optional rectangular area to be invalidated, or force flag if rectangle is empty
     * @param [force] optional boolean parameter that can force invalidation
     * @returns this
     */
    invalidate(bounds?: Rect, force?: boolean): this;
    /**
     * Invalidate parent area
     * @param [bounds] area to invalidate
     * @param [force] force
     * @returns this
     */
    invalidateParent(bounds?: Rect, force?: boolean): this;
    /**
     * Return state of suspend state
     * @returns state of update
     */
    updateSuspended(): boolean;
    /**
     * Suspend auto update
     * @returns this
     */
    suspendUpdate(): this;
    /**
     * Resume auto update
     * @param [rebuild] force rebuild
     * @param [changes=StateChanges.Rebuild] optional parameter to specify a reason of changes
     * @returns this
     */
    resumeUpdate(rebuild?: boolean, changes?: StateChanges): this;
    /**
     * <code>getContentsTransform()</code> retrieves the world transformation
     * of the node.
     *
     * @returns transformation from model coordinates
     * to bounds of the group
     */
    getContentsTransform(): Transformation;
    /**
     * Return content orientation
     * @returns content orientation
     */
    getContentOrientation(): Orientation;
    /**
     * Set content orientation
     * @param orientation content orientation
     * @returns this
     */
    setContentOrientation(orientation: Orientation): this;
    /**
     * Set Model Limits Logics to use when no Model Limits have been set
     * set to true: will use parents width and height, starting at 0
     * set to false: will use parents bounds. This is convenient method. It
     * creates {@link @int/geotoolkit/scene/AutoModelLimitsStrategy~AutoModelLimitsStrategy}
     * @param mode Model Limits Logics to be used
     * @returns this
     */
    setAutoModelLimitsMode(mode: boolean): this;
    /**
     * Set Model Limits Logics Strategy
     * @param strategy Model Limits logic strategy to use
     * @returns this
     */
    setAutoModelLimitsStrategy(strategy: ModelLimitsStrategy): this;
    /**
     * Get Model Limits Logics Strategy
     * @returns strategy
     */
    getAutoModelLimitsStrategy(): ModelLimitsStrategy;
    /**
     * Get Model Limits Logics to use when no Model Limits have been set
     * set to true: will use parents width and height, starting at 0
     * set to false: will use parents bounds
     * @returns mode
     */
    getAutoModelLimitsMode(): boolean;
    /**
     * Returns if picking children is enabled or not for this node.
     *
     * @returns pickingChildren
     */
    isPickingChildrenEnabled(): boolean;
    /**
     * Enables or disables picking children
     *
     * @param enable enable picking children
     * @returns this
     */
    enablePickingChildren(enable: boolean): this;
    /**
     * Sets padding style
     * @param paddingStyle padding style
     * @param [merge] true if you want to merge paddingStyle with existing attribute, false by default
     * @returns this
     */
    setPaddingStyle(paddingStyle: SpaceStyle | SpaceStyle.Options | string | number, merge?: boolean): this;
    /**
     * Return padding style
     * @returns padding
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Return area without paddings. Model limits are
     * mapped to content area, where children are layout.
     * @param [transformation] scene transformation
     */
    getContentsArea(transformation?: Transformation): Rect;
    /**
     * Gets all the properties pertaining to this object
     * @returns of this object
     */
    getProperties(): Group.OptionsOut<T>;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @returns this
     */
    setProperties(properties?: Group.Options<T>): this;
}
export declare namespace Group {
    /**
     * options
     */
    type Options<T extends Node = Node> = CompositeNode.Options<T> & {
        /**
         * vertical axis goes from bottom to top
         */
        verticalflip?: boolean;
        /**
         * horizontal axis goes from right to left
         */
        horizontalflip?: boolean;
        /**
         * content orientation
         */
        contentorientation?: Orientation;
        /**
         * enable picking children
         */
        pickingchildren?: boolean;
        /**
         * define inner model coordinates of the group
         */
        modellimits?: Rect | null | 'auto';
        /**
         * define position of the group in the parent
         */
        bounds?: Rect.Type;
        /**
         * line style
         */
        linestyle?: LineStyle.Type;
        /**
         * fill style
         */
        fillstyle?: FillStyle.Type;
        /**
         * It has properties for specifying the padding for each side
         */
        padding?: {
            /**
             * top padding
             */
            top?: number | string;
            /**
             * top padding
             */
            bottom?: number | string;
            /**
             * right padding
             */
            right?: number | string;
            /**
             * left padding
             */
            left?: number | string;
        } | SpaceStyle;
        /**
         * layout to be set to lay out child nodes
         */
        layout?: Layout;
        /**
         * layout style to be used for parent layout
         */
        layoutstyle?: LayoutStyle | LayoutStyle.Options;
        /**
         * auto model limits mode
         */
        automodellimitsmode?: boolean;
        /**
         * auto model limits strategy
         */
        automodellimitsstrategy?: ModelLimitsStrategy;
        /**
         * Array of overlays
         */
        overlays?: Node[];
        /**
         * View cache to cache child nodes
         */
        viewcache?: ViewCache | boolean | null;
    };
    /**
     * of this object
     */
    type OptionsOut<T extends Node = Node> = CompositeNode.OptionsOut<T> & {
        /**
         * bounds of the group
         */
        bounds?: Rect;
        /**
         * modellimits of the group
         */
        modellimits?: Rect;
        /**
         * vertical flip of the group
         */
        verticalflip: boolean;
        /**
         * horizontal flip of the group
         */
        horizontalflip: boolean;
        /**
         * content orientation
         */
        contentorientation: Orientation;
        /**
         * enable picking children
         */
        pickingchildren: boolean;
        /**
         * line style
         */
        linestyle?: LineStyle;
        /**
         * fill style
         */
        fillstyle?: FillStyle;
        /**
         * layout style
         */
        layoutstyle?: LayoutStyle;
        /**
         * layout
         */
        layout?: Layout;
        /**
         * padding
         */
        padding?: SpaceStyle;
        /**
         * auto model limits mode
         */
        automodellimitsmode?: boolean;
        /**
         * auto model limits strategy
         */
        automodellimitsstrategy?: ModelLimitsStrategy;
        /**
         * Array of overlays
         */
        overlays?: Node[];
    };
    type EventMap<T extends Node = Node> = CompositeNode.EventMap<T> & {
        [SceneEvents.OrientationChanged]: void;
        [Events.LayoutInvalidated]: void;
        [Events.LayoutUpdated]: void;
    };
}
