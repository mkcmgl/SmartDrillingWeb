/**
 * @module geotoolkit/scene/AnnotatedNode
 */
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { Group } from '@int/geotoolkit/scene/Group';
import { Rect } from '@int/geotoolkit/util/Rect';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import { Node } from '@int/geotoolkit/scene/Node';
import { Text } from '@int/geotoolkit/scene/shapes/Text';
import { Axis } from '@int/geotoolkit/axis/Axis';
import { ScaleScrollStrategy } from '@int/geotoolkit/scene/ScaleScrollStrategy';
import { Orientation } from '@int/geotoolkit/util/Orientation';
import { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { Layout } from '@int/geotoolkit/layout/Layout';
import type { Merge } from '@int/geotoolkit/base';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
/**
 * AnnotatedNode's Events enumerator
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * Event type fired when the shape is updating
     */
    Updating = "updating"
}
/**
 * Defines node with eight annotations (west, north, east, south, southeast, southwest, northeast, and northwest) and a center model
 *
 * @example
 * import {AnnotatedNode} from '@int/geotoolkit/scene/AnnotatedNode';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * ...
 * const node = new AnnotatedNode({
 *    'model': model,
 *    'bounds': new Rect(clientArea),
 *    'north': [titleNorth, groupLegend],
 *    'west': [titleWest1, axisWest1, titleWest2, axisWest2],
 *    'east': [axisEast1, titleEast1, axisEast2, titleEast2]
 * });
 * @example
 * import {Events} from '@int/geotoolkit/scene/AnnotatedNode';
 * // A handler that listens to the bounds and transformation change events
 * // can be attached to this node by using the following method:
 * annotationNode.on(Events.Updating, () => { ... });
 */
export declare class AnnotatedNode extends Group {
    /**
     * Create AnnotatedNode
     * @param [model] properties
     * @param [bounds] the bounds to use
     * @param [north] the Array of {@link @int/geotoolkit/scene/Node~Node} to display on top of the model
     * @param [south] the Array of {@link @int/geotoolkit/scene/Node~Node} to display on bottom of the model
     * @param [west] the Array of {@link @int/geotoolkit/scene/Node~Node} to display on left of the model
     * @param [east] the Array of {@link @int/geotoolkit/scene/Node~Node} to display on right of the model
     * @param [keepvisiblelimits] keep visible model limits of the center part if size of the node is changed
     * @param [isdatamodel] is the model passed via first parameter the data model
     */
    constructor(model?: AnnotatedNode.Options, bounds?: Rect.Type, north?: Node[] | Node, south?: Node[] | Node, west?: Node[] | Node, east?: Node[] | Node, keepvisiblelimits?: boolean, isdatamodel?: boolean);
    on<E extends keyof AnnotatedNode.EventMap>(type: E, callback: (eventType: E, sender: this, args: AnnotatedNode.EventMap[E]) => void): this;
    off<E extends keyof AnnotatedNode.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AnnotatedNode.EventMap[E]) => void): this;
    notify<E extends keyof AnnotatedNode.EventMap>(type: E, source: AnnotatedNode, args?: AnnotatedNode.EventMap[E]): this;
    /**
     * Sets layout, not supported in this class
     * @param layout layout
     * @throws {Error} The operation is NOT allowed on AnnotatedNode
     */
    setLayout(layout: Layout): this;
    /**
     * get Annotation at given point
     * @param x x coordinate in parent domain coordinates
     * @param y y coordinate in parent domain coordinates
     * @returns annotation
     */
    getAnnotationAt(x: number, y: number): Group;
    /**
     * get Annotation Location at given point
     * @param x x coordinate in parent domain coordinates
     * @param y y coordinate in parent domain coordinates
     * @returns location
     */
    getAnnotationLocationAt(x: number, y: number): AnnotationLocation;
    /**
     * Gets center plot
     * @returns center plot
     */
    getCenterPlot(): Group;
    /**
     * Gets annotation items wrap
     */
    getAnnotationItemsWrap(): boolean;
    /**
     * Sets annotation items wrap
     * @param annotationItemsWrap true if you want to wrap annotation items in constructor with a new group with zero to one limits
     * @returns this
     */
    setAnnotationItemsWrap(annotationItemsWrap: boolean): this;
    /**
     * Gets annotation at specified location
     * @param location Enum of annotation locations used to specify direction to insert
     */
    getAnnotation(location: AnnotationLocation.None): null;
    getAnnotation(location: AnnotationLocation): Group;
    /**
     * Helper method to add group or axis to the annotation and layout at specified location
     * @throws Error if there is no layout on annotation
     * @param item group or axis to be inserted in the annotated node
     * @param location Enum of annotation locations used to specify direction to insert
     * @returns this
     */
    addItem(item: Group | Axis, location: AnnotationLocation): this;
    /**
     * Helper method to insert group or axis to the annotation and it layout at specified location
     * @param index index where to item to be inserted
     * @param item group or axis to be inserted in the annotated node
     * @param location Enum of annotation locations used to specify direction to insert
     * @throws {Error} if annotation doesn't have layout or annotation is not exist
     * @returns this
     */
    insertItem(index: number, item: Group | Axis, location: AnnotationLocation): this;
    /**
     * Helper method to remove group from the annotation and it layout at specified location
     * @param item group to be inserted in the annotated node
     * @param location Enum of annotation locations used to specify direction to insert
     * @throws {Error} if annotation doesn't have layout
     * @returns this
     */
    removeItem(item: CompositeNode | Axis, location: AnnotationLocation): this;
    /**
     * Synchronizes object with a model
     *
     * @param object object to connect to the central component
     * @param [model] source model
     * @param [orientation] model orientation
     * @param [autoSize] true if object and model share the same device size in the orientation, true by default if not specified
     * @returns this
     */
    connect(object: Group | Axis, model?: Group, orientation?: Orientation, autoSize?: boolean): this;
    /**
     * Disconnect an object from its source model
     *
     * @param object object to disconnect
     * @returns this
     */
    disconnect(object: Group | Axis): this;
    /**
     * Gets data model
     * @returns data model
     */
    getModel(): Group;
    /**
     * Sets data model
     * @param model data model
     * @param [keepvisiblelimits] keep visible model limits of the center part
     * @param [isdatamodel] is the model passed the data model?
     * @returns this
     */
    setModel(model: Group, keepvisiblelimits?: boolean, isdatamodel?: boolean): this;
    /**
     * Sets scale scroll strategy. <br>
     * Parameter can be either:<br>
     * (A) reference to {@link @int/geotoolkit/scene/ScaleScrollStrategy~ScaleScrollStrategy} implementation<br>
     * or<br>
     * (B) a function with two parameters as follows:<br>
     * {@link @int/geotoolkit/scene/Group~Group} data model
     * {@link @int/geotoolkit/util/Transformation~Transformation} input transformation to adjust
     * The function must return adjusted transformation instance.
     * @param scaleScrollStrategy scaleScrollStrategy to set
     * @returns this
     */
    setScaleScrollStrategy(scaleScrollStrategy: ScaleScrollStrategy.Delegate): this;
    /**
     * Gets ScaleScrollStrategy ("undefined" by default)
     * @returns ScaleScrollStrategy
     * (see "setScaleScrollStrategy" description for more info)
     */
    getScaleScrollStrategy(): ScaleScrollStrategy.Delegate | null;
    /**
     * Attempts to set local transformation for the model.
     * NOTE: the local transformation set may not be equal
     * to tranformation passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @param transformation transformation to set
     * @returns this
     */
    setModelTransformation(transformation: Transformation): this;
    /**
     * Attempts to translate the model using specified "dx" and "dy" pixels.
     * @param dx in pixels
     * @param dy in pixels
     * @returns this
     */
    translateModel(dx: number, dy: number): this;
    /**
     * Attempts to scale the model using specified x and y scale factors
     * relative to `{posX, posY}` provided.
     * NOTE: the local transformation set may not be equal
     * to transformation passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @param fX x scaling factor
     * @param fY y scaling factor
     * @param [posX] x position to scale from (in pxl)
     * @param [posY] y position to scale from (in pxl)
     * @returns this
     */
    scaleModel(fX: number, fY: number, posX?: number, posY?: number): this;
    /**
     * Attempts to set model's visible limits to specified limits.
     * NOTE: the limits set may not be equal
     * to the limit passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @param newVisibleModelLimits limits to set
     * @param [deviceBounds] device bounds
     * @returns this
     */
    setVisibleModelLimits(newVisibleModelLimits: Rect, deviceBounds?: Rect): this;
    /**
     * Updates underlying layout
     * @returns this
     */
    updateLayout(): this;
    /**
     * Suspends layout update.
     */
    suspendUpdateLayout(): this;
    /**
     * Resumes layout update.
     * @returns this
     */
    resumeUpdateLayout(): this;
    /**
     * Sets bounds of the node in its parent's coordinate system
     *
     * @param bounds bound of the node to set
     * @returns this
     */
    setBounds(bounds: Rect): this;
    /**
     * Update model limits and transform of all connected objects
     *
     * @returns this
     */
    updateConnectedObjects(): this;
    /**
     * This method creates an axis, put it in the
     * new group, add this group to annotated node and returns the axis and group
     * @param annotatednode node to add axis
     * @param [options] options
     * @param [axisIndex] desired axis index
     */
    static createAxis(annotatednode: AnnotatedNode, options?: AnnotatedNode.AxisOptions, axisIndex?: number): {
        axis: Axis;
        group: Group;
    };
    /**
     * This method creates text title, put it in the
     * new group, add this group to annotated node
     * and return the title and group
     * @param annotatednode node to add title
     * @param options options
     */
    static createTitle(annotatednode: AnnotatedNode, options: AnnotatedNode.TitleOptions): {
        text: Text;
        group: Group;
    };
}
export declare namespace AnnotatedNode {
    /**
     * properties
     */
    type Options = Merge<AnnotationOptions, Group.Options & {
        /**
         * the model to display
         */
        model?: Group;
        /**
         * the bounds to use
         */
        bounds?: Rect.Type;
        /**
         * keep visible model limits of the center part if size of the node is changed
         */
        keepvisiblelimits?: boolean;
        /**
         * is the model passed via first parameter the data model
         */
        isdatamodel?: boolean;
        /**
         * wrap annotation items in constructor with a new group with zero to one limits
         */
        annotationitemswrap?: boolean;
    }>;
    type AnnotationOptions = {
        [key in AnnotationLocation]?: NodeTypes;
    };
    type NodeTypes = Node[] | Node | AnnotationOption;
    /**
     * JSON to hold annotation options
     */
    type AnnotationOption = {
        /**
         * annotation desired size (width for horizontal; height for vertical)
         */
        size?: number | string;
        /**
         * annotation title options
         */
        title?: Text.Options & {
            size?: number;
        };
        /**
         * annotation axis options
         */
        axis?: Axis.Options & {
            size?: number | string;
        };
    };
    /**
     * options
     */
    type AxisOptions = Axis.Options & {
        /**
         * location of the axis
         */
        location?: AnnotationLocation;
        /**
         * connect axis to the center model
         */
        connect?: boolean;
        /**
         * wrap annotation items in a new group. if it is false then a group is not created
         */
        annotationitemswrap?: boolean;
    };
    /**
     * options
     */
    type TitleOptions = {
        /**
         * text to display int eh title
         */
        text?: string;
        /**
         * location of the axis
         */
        location?: AnnotationLocation;
        /**
         * title text style
         */
        textstyle?: TextStyle.Type;
        /**
         * inner padding in device coordinates
         */
        padding?: number;
    };
    type EventMap = Group.EventMap & {
        [Events.Updating]: void;
    };
}
