import { BaseWidget } from '@int/geotoolkit/widgets/BaseWidget';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LiteEvent } from '@int/geotoolkit/flowcharts/utils/LiteEvent';
import { Group } from '@int/geotoolkit/scene/Group';
import { AnnotationLocation } from '@int/geotoolkit/layout/AnnotationLocation';
import { DiagramTool } from '@int/geotoolkit/flowcharts/shapes/edit/DiagramTool';
import { IComponent } from '@int/geotoolkit/flowcharts/shapes/IComponent';
import { DiagramTools } from '@int/geotoolkit/flowcharts/shapes/DiagramTools';
import { Point } from '@int/geotoolkit/util/Point';
import { Node } from '@int/geotoolkit/scene/Node';
import type { ScrollTool } from '@int/geotoolkit/controls/tools/scroll/ScrollTool';
import type { AnnotatedWidget } from '@int/geotoolkit/widgets/AnnotatedWidget';
/**
 * A basic widget that displays visuals, provides tools for manipulation, and API for persistence, copy/paste, delete, selection and other functions.
 */
export declare class DiagramWidget extends BaseWidget {
    /**
     * @param [options] settings for the widget
     */
    constructor(options?: BaseWidget.Options);
    getToolByName<T extends keyof DiagramWidget.Tools>(toolName: T): DiagramWidget.Tools[T];
    /**
     * Gets annotation at specified location
     * @param location Enum of annotation locations used to specify direction to insert
     */
    getAnnotation(location: AnnotationLocation): Group | null;
    /**
     * Sets diagram size. It affects both on physical and model size
     * @param rect a new model limits
     */
    setDiagramLimits(rect: Rect): this;
    protected initializeTools(): this;
    /**
     * Toggles the tool
     * @param toolType a tool type to activate
     * @returns this
     */
    toggleTool(toolType: DiagramTools): this;
    /**
     * Gets a currently active tool
     * @returns the name of currently active tool
     */
    getActiveTool(): string;
    /**
     * Gets current widget scale
     * @returns current scale
     */
    getScale(): {
        x: number;
        y: number;
    };
    /**
     * Sets the specified scale-x and scale-y factors on the model
     * @param sx horizontal scale
     * @param sy vertical scale
     * @returns this
     */
    setScale(sx: number, sy: number): this;
    /**
     * Zoom In
     */
    zoomIn(): void;
    /**
     * Zoom Out
     */
    zoomOut(): void;
    /**
     * Scales the model for the specified amount for X and Y axis
     * @param scale scale factor that will be applied to vertical and horizontal zoom
     */
    scaleModel(scale: number): void;
    /**
     * Returns the Model that is being used for shapes storage, diagram saving and loading
     * @returns a primary model
     */
    getModel(): Group;
    /**
     * Gets primary model limits
     */
    getDiagramLimits(): Rect;
    /**
     * Gets active selection
     * @returns an array of selected shapes
     */
    getSelection(): Node[];
    /**
     * Tells the diagram widget that the polygon/polyline edit must be finished
     * @returns true - on success, false - if cancelled
     */
    stopPolylineEdit(): boolean;
    /**
     * De-selects currently selected shapes
     * @returns this
     */
    clearSelection(): this;
    /**
     * select visuals
     * @param shapes an array of shape to select
     * @returns this
     */
    selectVisuals(shapes: Node[]): this;
    /**
     * Groups the given visuals into a group.
     * This method cuts off the visuals from primary model, creates a new group and places this group
     * into the model and selects the newly created group
     * @param visuals an array of visuals to group
     * @param [groupName] a name for the new group
     * @returns this
     */
    groupVisuals(visuals: Node[], groupName?: string): this;
    /**
     * Destructs the group causing all enclosed visuals to be placed to the Model. The Local group Transformation
     * will be multiplied with Local visuals Transformations.
     * @param visuals An array of SvgGroup to decompose. Even though the method accepts base Node, everything
     * but SvgGroup (and ancestors) will be ignored.
     * @returns this
     */
    ungroupVisuals(visuals: Node[]): this;
    /**
     * Changes z-order for the specified array of visuals, placing them "closer" to an observer.
     * If array consists of more than 1 visual, then visual with 0 index will be placed "under" visual with Nth index.
     * @param node An array of visuals to bring on top of others
     * @returns this
     */
    bringToFront(node: Node[] | Node): this;
    /**
     * Changes z-order for the specified array of visuals, placing them "farther" from an observer.
     * If array consists of more than 1 visual, then visual with Nth index will be placed "under" visual with 0th index.
     * @param node An array of visuals to bring on top of others
     * @returns this
     */
    sendToBack(node: Node[] | Node): this;
    /**
     * Cleans up the diagram and resets it to an original state
     * @returns this
     */
    resetDiagram(): this;
    /**
     * Serializes the diagram into a JSON string
     * @returns JSON string with serialized data
     */
    saveDiagram(): string;
    /**
     * Restores a diagram from the given string, which contains object. This object normally generated by
     * saveDiagram() method
     * @param data well-formed JSON-string
     */
    loadDiagram(data: string): void;
    /**
     * Unfolds an array of visuals and their children into a flat (single-dimension) array of nodes.
     * geotoolkit.scene.Group instances are also added to the collection
     * @param restoredItems all restored nodes as flat array
     * @returns an array of restored nodes
     */
    flattenVisuals(restoredItems: Node[]): Node[];
    /**
     * Copies Selection into object
     * @returns well-formed JSON string
     */
    copySelection(): string;
    /**
     * Cuts selection out of scene and returns a copy of it as JSON string
     * @returns well-formed JSON string
     */
    cutSelection(): string;
    /**
     * Deletes all selected visuals from the scene
     * @returns this
     */
    deleteSelection(): this;
    /**
     * Adds the specified visual to the model
     * @param visual a shape to add
     * @param [modelLocation] a point where the visual will be added. Default value is (0,0)
     * @param [center] flag indicating if the visual should have center point at the given location
     * @param [startPolylineCreation] starts manipulator for polygon/polyline creation
     * @returns the newly added visual
     */
    addVisual(visual: IComponent & Node, modelLocation?: Point, center?: boolean, startPolylineCreation?: boolean): IComponent & Node;
    /**
     * Deletes the specified visual from model, if this shape exists on top
     * @param shapeToRemove a shape to remove
     * @returns this
     */
    deleteVisual(shapeToRemove: Node): this;
    /**
     * Deletes visuals from the scene
     * @param visuals visuals to delete
     * @returns this
     */
    deleteVisuals(visuals: Node[]): this;
    /**
     * Serializes the given visuals into a well-formed object
     * @param visuals array of visuals to copy
     * @returns well-formed JSON string
     */
    copyVisuals(visuals: Node[]): string;
    /**
     * Serialized the given visuals into a well-formed objects and cuts the visuals
     * out of scene.
     * @param visuals Array of visuals to delete
     * @returns well-formed JSON string
     */
    cutVisuals(visuals: Node[]): string;
    /**
     * Pastes the previously copied visuals from JSON string
     * @param data well-formed JSON data string, previously obtained with copy/cut/save methods
     * @param modelOrigin model origin point
     */
    paste(data: string, modelOrigin: Point): void;
    /**
     * Event that raises on selection change
     */
    getOnSelectionChangeEvent(): LiteEvent;
}
export declare namespace DiagramWidget {
    type Tools = {
        'DiagramTool': DiagramTool;
        'VerticalScroll': ScrollTool;
        'HorizontalScroll': ScrollTool;
    } & AnnotatedWidget.Tools;
}
