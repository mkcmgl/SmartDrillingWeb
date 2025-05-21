/**
 * @module geotoolkit/controls/tools/Selection
 */
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { Node } from '@int/geotoolkit/scene/Node';
import type { Merge } from '@int/geotoolkit/base';
import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { AbstractRubberTool } from '@int/geotoolkit/controls/tools/AbstractRubberTool';
import { Point } from '@int/geotoolkit/util/Point';
import { SelectionMode } from '@int/geotoolkit/controls/tools/SelectionMode';
import { RubberBandMode } from '@int/geotoolkit/controls/tools/RubberBandMode';
import { CircularMode } from '@int/geotoolkit/controls/tools/CircularMode';
import { PointerMode } from '@int/geotoolkit/controls/tools/PointerMode';
import { RubberBandShapeMode } from '@int/geotoolkit/controls/tools/RubberBandShapeMode';
import { SelectionEventArgs } from '@int/geotoolkit/controls/tools/SelectionEventArgs';
import type { SelectionContext } from '@int/geotoolkit/selection/SelectionContext';
import type { RubberBandRenderMode } from '@int/geotoolkit/controls/tools/RubberBandRenderMode';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { TextStyle } from '@int/geotoolkit/attributes/TextStyle';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { SelectedItem } from '@int/geotoolkit/selection/SelectedItem';
/**
 * Selection Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * onPick
     */
    onPick = "onPick",
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
    beforeSelectionChange = "beforeSelectionChange",
    /**
     * onDoubleClick
     */
    onDoubleClick = "onDoubleClick"
}
/**
 * Selection tool to pick nodes in the specified point or rectangular area
 * <br>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/Selection~Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onPick</td>
 *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs~SelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual.</td>
 *          </tr>
 *          <tr>
 *              <td>onSelectionEnd</td>
 *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs~SelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual. (similar to Selection.Events.onPick)</td>
 *          </tr>
 *          <tr>
 *              <td>onSelectionChanged</td>
 *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs~SelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual and it is different from previous selection.</td>
 *          </tr>
 *          <tr>
 *              <td>beforeSelectionChange</td>
 *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs~SelectionEventArgs}</td>
 *              <td>This Event is fired before the Selection Tool select a visual and it is different from previous selection.</td>
 *          </tr>
 *          <tr>
 *              <td>onDoubleClick</td>
 *              <td>{@link @int/geotoolkit/controls/tools/SelectionEventArgs~SelectionEventArgs}</td>
 *              <td>This Event is fired when the Selection Tool select a visual with a double click.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 *
 * Tool name: 'pick'
 */
export declare class Selection extends AbstractRubberTool {
    /**
     * Creates Selection
     * @param [layer] manipulator layer
     * @param [mode] render mode
     */
    constructor(layer?: CompositeNode, mode?: RubberBandRenderMode | number);
    /**
     * Creates Selection
     * @param [options] properties object
     */
    constructor(options?: AbstractRubberTool.Options);
    on<E extends keyof Selection.EventMap>(type: E, callback: (eventType: E, sender: this, args: Selection.EventMap[E]) => void): this;
    off<E extends keyof Selection.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Selection.EventMap[E]) => void): this;
    notify<E extends keyof Selection.EventMap>(type: E, source: Selection, args?: Selection.EventMap[E]): this;
    /**
     * Sets selector callback
     * @param selectorCallback selector callback
     */
    setSelectorCallback(selectorCallback: Selection.SelectorCallback | null): this;
    /**
     * Sets measure callback
     * @param measureCallback measure callback
     */
    setMeasureCallback(measureCallback: Selection.MeasureCallback | null): this;
    /**
     * Specify a root node to start selection. If it is not specified then root node is used
     * @param root root node
     * @returns this
     */
    setRootNode(root: Node): this;
    /**
     * Return the root node to start selection. If it is not specified then root node is used
     * @returns root node
     */
    getRootNode(): Node | null;
    /**
     * Sets tool selection mode
     * @param mode tool selection mode
     * @returns this
     */
    setSelectionMode(mode: SelectionMode): this;
    /**
     * Returns tool selection mode
     */
    getSelectionMode(): SelectionMode | string;
    /**
     * Sets tool rubberband selection mode
     * @param mode tool rubberband selection mode
     * @returns this
     */
    setRubberBandMode(mode: RubberBandMode): this;
    /**
     * Gets tool's rubberband selection mode
     */
    getRubberBandMode(): RubberBandMode | string;
    /**
     * Sets tool's rubberband shape mode
     * @param mode shape mode for the rubberband selection area
     * @returns this
     */
    setRubberBandShapeMode(mode: RubberBandShapeMode): this;
    /**
     * Gets tool's rubberband shape
     */
    getRubberBandShapeMode(): RubberBandShapeMode | string;
    /**
     * Sets tool's circular selection mode
     * @param mode new circular selection mode
     * @returns this
     */
    setCircularMode(mode: CircularMode): this;
    /**
     * Gets tool's circular selection mode
     */
    getCircularMode(): CircularMode;
    /**
     * Sets tool pointer selection mode
     * @param mode tool pointer selection mode
     * @returns this
     */
    setPointerMode(mode: PointerMode): this;
    /**
     * Gets tool pointer selection mode
     */
    getPointerMode(): PointerMode | string;
    /**
     * Sets filter handler
     * @param filter This allows to filter selected nodes.
     */
    setNodeFilter(filter: Selection.NodeFilterCallback | null): this;
    /**
     * Return start point of selection
     */
    getStartPoint(): Point;
    /**
     * Return end point of selection
     */
    getEndPoint(): Point;
    /**
     * mouse down function of selection tool
     * @param eventArgs contains info about the event arguments
     */
    protected onMouseDown(eventArgs: EventArgs): void;
    /**
     * mouse up function of selection tool
     * @param eventArgs contains info about the event arguments
     */
    protected onMouseUp(eventArgs: EventArgs): void;
    /**
     * Double click handler
     * Detects if double click happens on scrollbar and prevents propagation
     * @param eventArgs event arguments
     */
    protected onDoubleClick(eventArgs: EventArgs): void;
    /**
     * mouse move function
     * @param eventArgs contains info about the event arguments
     */
    protected onMouseMove(eventArgs: EventArgs): void;
    /**
     * gets the currently selected items
     */
    getSelection(): (Node | SelectedItem)[];
    /**
     * sets the currently selected items
     * @param selection selection
     * @returns this
     */
    setSelection(selection: (Node | SelectedItem)[]): this;
    /**
     * Sets line style
     * @param lineStyle line style or options
     * @param [merge] true if you want to merge lineStyle with existing attribute, false by default
     * @returns this
     */
    setLineStyle(lineStyle: LineStyle | LineStyle.Options | string, merge?: boolean): this;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param [merge] true if you want to merge fillStyle with existing attribute, false by default
     * @returns this this
     */
    setFillStyle(fillStyle: FillStyle | FillStyle.Options | string, merge?: boolean): this;
    /**
     * Sets measurement label text style
     *
     * @param textStyle a new shape text style
     * @param [merge] true if you want to merge textStyle with existing attribute, false by default
     * @returns this
     */
    setTextStyle(textStyle: TextStyle.Options | string | TextStyle | null, merge?: boolean): this;
    /**
     * Sets selection options
     * @param [options] options
     * @returns this
     */
    setOptions(options?: Selection.Options): this;
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
}
export declare namespace Selection {
    /**
     * Called on every selected node.
     */
    type SelectorCallback = (node: Node, context?: SelectionContext) => void;
    /**
     * Size formatter callback for the circular rubberband mode
     */
    type MeasureCallback = (size: number, center: Point, edge: Point) => string;
    type NodeFilterCallback = (selectedVisuals: (Node | SelectedItem)[]) => (Node | SelectedItem)[];
    /**
     * options
     */
    type Options = Merge<AbstractRubberTool.Options, {
        /**
         * a root node to start selection
         */
        rootnode?: Node;
        /**
         * filter callback that allows to filter selected nodes.
         */
        nodefilter?: NodeFilterCallback | null;
        /**
         * selector callback
         */
        selectorcallback?: SelectorCallback | null;
        /**
         * measure callback
         */
        measurecallback?: MeasureCallback | null;
        /**
         * selection mode
         */
        mode?: SelectionMode;
        /**
         * tool rubberband selection mode
         */
        rubberbandmode?: RubberBandMode;
        /**
         * shape mode for the rubberband selection area
         */
        rubberbandshapemode?: RubberBandShapeMode;
        /**
         * tool circular selection mode
         */
        circularmode?: CircularMode;
        /**
         * tool pointer selection mode
         */
        pointermode?: PointerMode;
        /**
         * rubber band selection linestyle
         */
        linestyle?: LineStyle.Options | LineStyle | string;
        /**
         * rubber band selection fillstyle
         */
        fillstyle?: FillStyle.Options | FillStyle | string;
        /**
         * rubber band selection distance textstyle
         */
        textstyle?: TextStyle.Options | TextStyle | string;
        /**
         * true if selection automatically disabled on selection changed
         */
        autodisabled?: boolean;
    }>;
    type EventMap = AbstractTool.EventMap & {
        [Events.onPick]: SelectionEventArgs;
        [Events.onSelectionEnd]: SelectionEventArgs;
        [Events.onSelectionChanged]: SelectionEventArgs;
        [Events.beforeSelectionChange]: SelectionEventArgs;
        [Events.onDoubleClick]: SelectionEventArgs;
    };
}
