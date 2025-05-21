import { CompositeNode } from '@int/geotoolkit/scene/CompositeNode';
import { AbstractRubberTool } from '@int/geotoolkit/controls/tools/AbstractRubberTool';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Rect } from '@int/geotoolkit/util/Rect';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import { RubberBandRenderMode } from '@int/geotoolkit/controls/tools/RubberBandRenderMode';
import { RubberBandEventArgs } from '@int/geotoolkit/controls/tools/RubberBandEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
/**
 * RubberBand Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * onZoomStart
     */
    onZoomStart = "onZoomStart",
    /**
     * onZoomEnd
     */
    onZoomEnd = "onZoomEnd",
    /**
     * onRangeChanged
     */
    onRangeChanged = "onRangeChanged"
}
/**
 * Enum of rubberband Minimum Dimension modes
 * @enum
 * @readonly
 */
export declare enum MinimumDimensionMode {
    /**
     * Expands highlighted area from the start point
     */
    Hard = "Hard",
    /**
     * Expands highlighted area around selection
     */
    Smart = "Smart"
}
/**
 * RubberBand tool supports several events as shown below and it has several built-in functions to customise the tool.<br>
 * The rendering is based on the {@link @int/geotoolkit/controls/tools/RubberBandRenderMode~RubberBandRenderMode}.
 * <br>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/RubberBand~Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onZoomStart</td>
 *              <td>{@link @int/geotoolkit/controls/tools/RubberBandEventArgs~RubberBandEventArgs}</td>
 *              <td>This Event is fired when the RubberBand Tool left button click occurs.</td>
 *          </tr>
 *          <tr>
 *              <td>onZoomEnd</td>
 *              <td>{@link @int/geotoolkit/controls/tools/RubberBandEventArgs~RubberBandEventArgs}</td>
 *              <td>This Event is fired when the RubberBand Tool left button click is released.</td>
 *          </tr>
 *          <tr>
 *              <td>onRangeChanged</td>
 *              <td>{@link @int/geotoolkit/controls/tools/RubberBandEventArgs~RubberBandEventArgs}</td>
 *              <td>This Event is fired when the RubberBand Tool is moving.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 *
 * Tool name: 'rubberband'
 * @example
 * // In order to enable the rubberband tool for widgets:
 * widget.getToolByName('rubberband').setEnabled(true);
 * @example
 * //To get the dimensions of a selected region from the rubber band tool:
 * import {Events} from '@int/geotoolkit/controls/tools/RubberBand';
 * ...
 * rubberband.on(Events.onZoomEnd, (eventType, sender, evt) => {
 *      // evt is instance of @int/geotoolkit/controls/tools/RubberBandEventArgs
 *      const rect = evt.getArea();
 *      ...
 * } );
 * @example
 * //To create new horizontal rubber-band tool and attach it to the specific group, it will be limited by group model limits
 * import {RubberBandRenderMode} from '@int/geotoolkit/controls/tools/RubberBandRenderMode';
 * new RubberBand(group, RubberBandRenderMode.Horizontal)
 */
export declare class RubberBand extends AbstractRubberTool {
    on<E extends keyof RubberBand.EventMap>(type: E, callback: (eventType: E, sender: this, args: RubberBand.EventMap[E]) => void): this;
    off<E extends keyof RubberBand.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: RubberBand.EventMap[E]) => void): this;
    notify<E extends keyof RubberBand.EventMap>(type: E, source: RubberBand, args?: RubberBand.EventMap[E]): this;
    /**
     * Creates RubberBand
     * @param [layer] manipulator layer
     * @param [mode] name of the tool used like rubberband etc
     */
    constructor(layer?: CompositeNode, mode?: RubberBandRenderMode);
    /**
     * Creates RubberBand
     * @param [options] properties object
     */
    constructor(options?: RubberBand.Options);
    /**
     * set minimum selection dimension
     * @param minDimension minimum selection dimension
     * @param [isInDevice] true if in device coordinates
     * @returns this
     */
    setMinDimension(minDimension: Dimension, isInDevice?: boolean): this;
    /**
     * Get minimum selection dimension
     */
    getMinDimension(): Dimension;
    /**
     * set minimum dimension mode
     * @param mode minimum dimension mode
     * @returns this
     * @example
     * import {Dimension} from '@int/geotoolkit/util/Dimension';
     * import {MinimumDimensionMode} from '@int/geotoolkit/controls/tools/RubberBand';
     * ...
     * // The rubberband tool has several configuration options for controlling the maximum amount of zoom.
     * // First get rubber band tool
     * const rubberBandTool = widget.getToolByName('rubberband');
     *
     * // The setMinDimension property can be used to limit the minimum box zoom to some fixed amount.
     * // Optional second parameter specifies whether to use model or device coordinates;
     * const minVerticalUnitsZoom = 50;
     * const useDeviceCoordinates = false;
     * rubberBandTool.setMinDimension(new Dimension(0, minVerticalUnitsZoom), useDeviceCoordinates);
     *
     * // The setMinDimensionMode can be used to specify how the start/end should be adjusted if the minimum zoom level limit is reached.
     * // The smartMode expands highlighted area around selection
     * rubberBandTool.setMinDimensionMode(MinimumDimensionMode.Smart);
     *
     * // The hardMode expands highlighted area from the start point
     * rubberBandTool.setMinDimensionMode(MinimumDimensionMode.Hard);
     */
    setMinDimensionMode(mode: MinimumDimensionMode): this;
    /**
     * Get minimum dimension mode
     */
    getMinDimensionMode(): MinimumDimensionMode;
    /**
     * Sets rubberband rendering mode
     * @param mode rubberband rendering mode
     * @returns this
     */
    setMode(mode: RubberBandRenderMode): this;
    /**
     * Return empty rect flag
     * @returns empty rect flag
     */
    getAcceptEmptyRect(): boolean;
    /**
     * Set empty rect flag
     * @param acceptEmptyRect empty rect flag
     * @returns this
     */
    setAcceptEmptyRect(acceptEmptyRect: boolean): this;
    /**
     * Set restriction area
     * @param restrictionArea restriction area
     */
    setRestrictionArea(restrictionArea: Rect): this;
    /**
     * Get restriction area
     * @returns restriction area
     */
    getRestrictionArea(): Rect;
    /**
     * Set auto-disabled mode
     * @param mode does the RB automatically disable itself on zoom End
     * @returns this
     */
    setAutoDisabled(mode: boolean): this;
    /**
     * Get auto-disabled mode
     * @returns does the RB automatically disable itself on zoom End
     */
    isAutoDisabled(): boolean;
    /**
     * Gets rubberband rendering mode
     * @returns size mode
     */
    getMode(): RubberBandRenderMode;
    protected onMouseDown(eventArgs: EventArgs): void;
    protected onMouseMove(eventArgs: EventArgs): void;
    protected onMouseUp(eventArgs: EventArgs): void;
    /**
     * Sets callback for selecting target Node from scene
     * @param node target node
     */
    setTarget(node: Node): this;
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
     * @returns this
     */
    setFillStyle(fillStyle: string | FillStyle | FillStyle.Options, merge?: boolean): this;
    /**
     * Set Settings
     * @param [options] object containing options
     * @returns this
     */
    setSettings(options?: RubberBand.Options): this;
}
export declare namespace RubberBand {
    /**
     * object containing options
     */
    type Options = AbstractRubberTool.Options & {
        /**
         * is rubber band enabled
         */
        enabled?: boolean;
        /**
         * rubber band linestyle
         */
        linestyle?: LineStyle.Options | LineStyle | string;
        /**
         * rubber band fillstyle
         */
        fillstyle?: FillStyle.Options | FillStyle | string;
        /**
         * does rubber band automatically disabled on zoom end
         */
        autodisabled?: boolean;
        /**
         * does rubber band accept empty rect
         */
        acceptemptyrect?: boolean;
        /**
         * specify restriction area
         */
        restrictionarea?: Rect;
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onZoomStart]: RubberBandEventArgs;
        [Events.onZoomEnd]: RubberBandEventArgs;
        [Events.onRangeChanged]: RubberBandEventArgs;
    };
}
