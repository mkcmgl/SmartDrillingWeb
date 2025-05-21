/**
 * @module geotoolkit/controls/tools/PolygonSelection
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { Paint } from '@int/geotoolkit/controls/tools/Paint';
import { PolygonSelectionEventArgs } from '@int/geotoolkit/controls/tools/PolygonSelectionEventArgs';
import type { AbstractEditorBase } from '@int/geotoolkit/controls/tools/editors/AbstractEditorBase';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { SelectedItem } from '@int/geotoolkit/selection/SelectedItem';
/**
 * PolygonSelection Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * onSelectionEnd
     */
    onSelectionEnd = "onSelectionEnd",
    /**
     * onSelectionChanged
     */
    onSelectionChanged = "onSelectionChanged",
    /**
     * beforeSelectionChange
     */
    beforeSelectionChange = "beforeSelectionChange"
}
/**
 * PolygonSelection
 * <br>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/PolygonSelection~Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onSelectionEnd</td>
 *              <td>{@link @int/geotoolkit/controls/tools/PolygonSelectionEventArgs~PolygonSelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual. (similar to Selection.Events.onPick)</td>
 *          </tr>
 *          <tr>
 *              <td>onSelectionChanged</td>
 *              <td>{@link @int/geotoolkit/controls/tools/PolygonSelectionEventArgs~PolygonSelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual and it is different from previous selection.</td>
 *          </tr>
 *          <tr>
 *              <td>beforeSelectionChange</td>
 *              <td>{@link @int/geotoolkit/controls/tools/PolygonSelectionEventArgs~PolygonSelectionEventArgs}</td>
 *              <td>This Event is fired before the Selection Tool select a visual and it is different from previous selection.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 *
 * Tool name: 'polygon-selection'
 */
export declare class PolygonSelection extends Paint {
    /**
     * @param [options] used to display temporary shapes or tool options
     */
    constructor(options?: PolygonSelection.Options | CompositeNode);
    on<E extends keyof PolygonSelection.EventMap>(type: E, callback: (eventType: E, sender: this, args: PolygonSelection.EventMap[E]) => void): this;
    off<E extends keyof PolygonSelection.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: PolygonSelection.EventMap[E]) => void): this;
    notify<E extends keyof PolygonSelection.EventMap>(type: E, source: PolygonSelection, args?: PolygonSelection.EventMap[E]): this;
    /**
     * gets the currently selected items
     */
    getSelection(): Node[];
    /**
     * set filter handler
     * @param filter This allows to filter selected nodes.
     * @returns this
     */
    setNodeFilter(filter: PolygonSelection.NodeFilterCallback): this;
    /**
     * Set allow intersection
     * @param mode will this select items that intersect
     * @returns this
     */
    setAllowIntersection(mode: boolean): this;
    /**
     * Get allow intersection
     * @returns will this select items that intersect
     */
    getAllowIntersection(): boolean;
    /**
     * Set even odd mode
     * @param mode even odd mode
     * @returns this
     */
    setEvenOddMode(mode: boolean): this;
    /**
     * Get even odd mode
     * @returns will this use even odd mode or not
     */
    getEvenOddMode(): boolean;
    /**
     * Set auto-disabled mode
     * @param mode does the selection automatically disable itself on selection changed
     * @returns this
     */
    setAutoDisabled(mode: boolean): this;
    /**
     * Get auto-disabled mode
     * @returns does the selection automatically disable itself on selection changed
     */
    isAutoDisabled(): boolean;
    /**
     * Sets line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle.Type, merge?: boolean): this;
    /**
     * Return line style
     * @returns line style
     */
    getLineStyle(): LineStyle;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this
     */
    setFillStyle(fillStyle: FillStyle.Type, merge?: boolean): this;
}
export declare namespace PolygonSelection {
    /**
     * used to display temporary shapes or tool options
     */
    type Options = Paint.Options & {
        /**
         * node options
         */
        node?: {
            /**
             * node linestyle
             */
            linestyle?: LineStyle.Type;
            /**
             * node fillstyle
             */
            fillstyle?: FillStyle.Type;
        };
        /**
         * path options
         */
        preview?: {
            /**
             * path linestyle
             */
            linestyle?: LineStyle.Type;
        };
    };
    type NodeFilterCallback = (selectedVisuals: (Node | SelectedItem)[]) => (Node | SelectedItem)[];
    type EventMap = AbstractEditorBase.EventMap & {
        [Events.onSelectionEnd]: PolygonSelectionEventArgs;
        [Events.onSelectionChanged]: PolygonSelectionEventArgs;
        [Events.beforeSelectionChange]: PolygonSelectionEventArgs;
    };
}
