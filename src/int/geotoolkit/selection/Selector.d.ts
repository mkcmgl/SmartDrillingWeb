/**
 * @module geotoolkit/selection/Selector
 */
import { Rect } from '@int/geotoolkit/util/Rect';
import { Point } from '@int/geotoolkit/util/Point';
import { Transformation } from '@int/geotoolkit/util/Transformation';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { SelectionContext } from '@int/geotoolkit/selection/SelectionContext';
import type { SelectedItem } from '@int/geotoolkit/selection/SelectedItem';
/**
 * Defines node selection. This class provides the logic to do shape selection using device coordinates.<br>
 * It implements several algorithms to perform different types of selection:
 * <ul>
 * <li> By point: At a given point with an optional radius </li>
 * <li> By rect: In a given rectangle </li>
 * <li> By polygon: In a given arbitrary polygon </li>
 * <li> By ellipse: In a given arbitrary ellipse </li>
 * </ul>
 * The picking algorithm implemented in this Selector emulates 'rendering' to perform the selection and find the shape(s) at the given coordinates.<br>
 * Selection returns multiple objects in the current position. It can be Node or SelectedItem. SelectedItem usually is using when there is a composite object inside selected area
 * like chart or curve. In this case SelectedItem contains info about samples inside area.
 *
 * @example
 * // following code show how to get the names of the selected items.
 * // The method 'select' returns an array of selected objects. Also it has a radius of selection. In this code is 5 pixels.
 * import {Selector} from '@int/geotoolkit/selection/Selector';
 * import {isNode} from '@int/geotoolkit/scene/Node';
 * const radius = 5;
 * const select = Selector.select(widget, pt.x, pt.y, radius).filter(isNode);
 * if (select == null) return;
 * for (let i = 0; i < select.length; i++) {
 *      console.log(select[i].getName());
 * }
 *  @example
 * // result can be filtered using predicates (https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
 * // embedded predicates or any custom predicate can be used
 * import {isSelectedItem} from '@int/geotoolkit/selection/SelectedItem';
 * // after filter 'items' is SelectedItem[]
 * const items = Selector.select(root, point, 2).filter(isSelectedItem);
 */
export declare class Selector {
    /**
     * Create selector
     * @param [transformation] transformation from current node to plot (device). It is equal
     * to node.getParent().getSceneTransform(). If a root node is used as a start node then it is not necessary
     * to specify transformation.
     */
    constructor(transformation?: Transformation);
    /**
     * Select node in the current rectangular area. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param root node to be used for selection.
     * @param rectArea selection rectangle.
     * @param [allowIntersection] allow intersection flag
     * @returns a collection of selected nodes
     */
    select(root: Node, rectArea: Rect, allowIntersection?: boolean): (Node | SelectedItem)[];
    /**
     * Select node in the current point. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param root node to be used for selection.
     * @param point selection point
     * @param [radius] selection radius
     * @returns a collection of selected nodes
     */
    select(root: Node, point: Point, radius?: number): (Node | SelectedItem)[];
    /**
     * Select node in the current point. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param root node to be used for selection.
     * @param x x-coordinate of the selection point
     * @param y y-coordinate of the selection point
     * @param [radius] selection radius
     * @returns a collection of selected nodes
     */
    select(root: Node, x: number, y: number, radius?: number): (Node | SelectedItem)[];
    /**
     * Select node in the ellipse area. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param root node to be used for selection.
     * @param point center of ellipse
     * @param halfWidth selection ellipse half width
     * @param halfHeight selection ellipse half height
     * @param [allowIntersection] allow intersection
     * @returns a collection of selected nodes
     */
    select(root: Node, point: Point, halfWidth: number, halfHeight: number, allowIntersection?: boolean): (Node | SelectedItem)[];
    /**
     * Select node in the polygonal area. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param root node to be used for selection.
     * @param xx x-coordinates of the selection polygon
     * @param yy y-coordinates of the selection polygon
     * @param [allowIntersection] allow intersection flag
     * @param [evenOdd] even odd mode
     * @returns a collection of selected nodes
     */
    select(root: Node, xx: number[], yy: number[], allowIntersection?: boolean, evenOdd?: boolean): (Node | SelectedItem)[];
    /**
     * Select node in the current rectangular area. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param callback callback
     * @param root node to be used for selection.
     * @param rectArea selection rectangle.
     * @param [allowIntersection] allow intersection flag
     */
    asyncSelect(callback: SelectionCallback, root: Node, rectArea: Rect, allowIntersection?: boolean): void;
    /**
     * Select node in the current point. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param callback callback
     * @param root node to be used for selection.
     * @param point selection point
     * @param [radius] selection radius
     */
    asyncSelect(callback: SelectionCallback, root: Node, point: Point, radius?: number): void;
    /**
     * Select node in the current point. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param callback callback
     * @param root node to be used for selection.
     * @param x x-coordinate of the selection point
     * @param y y-coordinate of the selection point
     * @param [radius] selection radius
     */
    asyncSelect(callback: SelectionCallback, root: Node, x: number, y: number, radius?: number): void;
    /**
     * Select node in the ellipse area. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param callback callback
     * @param root node to be used for selection.
     * @param point selection point
     * @param halfWidth selection ellipse half width
     * @param halfHeight selection ellipse half height
     * @param [allowIntersection] allow intersection
     */
    asyncSelect(callback: SelectionCallback, root: Node, point: Point, halfWidth: number, halfHeight: number, allowIntersection?: boolean): void;
    /**
     * Select node in the polygonal area. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param callback callback
     * @param root node to be used for selection.
     * @param xx x-coordinates of the selection polygon
     * @param yy y-coordinates of the selection polygon
     * @param [allowIntersection] allow intersection flag
     * @param [evenOdd] even odd mode
     */
    asyncSelect(callback: SelectionCallback, root: Node, xx: number[], yy: number[], allowIntersection?: boolean, evenOdd?: boolean): void;
    /**
     * Sets current transformation
     * @param transformation transformation from current node to device
     * @returns this
     */
    setTransformation(transformation: Transformation): this;
    /**
     * Gets current transformation
     */
    getTransformation(): Transformation;
    /**
     * Select node in the current rectangular area. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param root node to be used for selection.
     * @param rectArea selection rectangle.
     * @param [allowIntersection] allow intersection flag
     * @returns a collection of selected nodes
     */
    static select(root: Node, rectArea: Rect, allowIntersection?: boolean): (Node | SelectedItem)[];
    /**
     * Select node in the current point. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param root node to be used for selection.
     * @param point selection point
     * @param [radius] selection radius
     * @returns a collection of selected nodes
     */
    static select(root: Node, point: Point, radius?: number): (Node | SelectedItem)[];
    /**
     * Select node in the current point. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param root node to be used for selection.
     * @param x x-coordinate of the selection point
     * @param y y-coordinate of the selection point
     * @param [radius] selection radius
     * @returns a collection of selected nodes
     */
    static select(root: Node, x: number, y: number, radius?: number): (Node | SelectedItem)[];
    /**
     * Select node in the current ellipse. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param root node to be used for selection.
     * @param point selection point
     * @param halfWidth selection ellipse half width
     * @param halfHeight selection ellipse half height
     * @param [allowIntersection] allow intersection
     * @returns a collection of selected nodes
     */
    static select(root: Node, point: Point, halfWidth: number, halfHeight: number, allowIntersection?: boolean): (Node | SelectedItem)[];
    /**
     * Select node in the polygonal area. This method starts selection from the specified node.
     * Coordinates provided are in the parent node coordinate system or device coordinates if the node is a root.
     * @param root node to be used for selection.
     * @param xx x-coordinates of the selection polygon
     * @param yy y-coordinates of the selection polygon
     * @param [allowIntersection] allow intersection flag
     * @param [evenOdd] even odd mode
     * @returns a collection of selected nodes
     */
    static select(root: Node, xx: number[], yy: number[], allowIntersection?: boolean, evenOdd?: boolean): (Node | SelectedItem)[];
}
declare type SelectionCallback = (selection: any, context: SelectionContext) => void;
export {};
