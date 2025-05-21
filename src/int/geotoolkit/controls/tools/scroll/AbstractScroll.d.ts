import type { Merge } from '@int/geotoolkit/base';
import { Point } from '@int/geotoolkit/util/Point';
import { Group } from '@int/geotoolkit/scene/Group';
import { ScrollTool } from '@int/geotoolkit/controls/tools/scroll/ScrollTool';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { Range } from '@int/geotoolkit/util/Range';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * enum of AbstractScroll Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * onActivate
     */
    onActivate = "onActivate",
    /**
     * onScroll
     */
    onScroll = "onScroll",
    /**
     * onScale
     */
    onScale = "onScale",
    /**
     * onScrollEnd
     */
    onScrollEnd = "onScrollEnd",
    /**
     * onScaleEnd
     */
    onScaleEnd = "onScaleEnd",
    /**
     * onRangeChanged
     */
    onRangeChanged = "onRangeChanged"
}
/**
 * AbstractScroll class is the parent class for toolkit built-in scrollbar shapes. It includes the logic to scroll using an internal {@link @int/geotoolkit/controls/tools/AbstractTool~AbstractTool}
 * <br>
 * <br>
 * <h5>Events {@link @int/geotoolkit/controls/tools/scroll/AbstractScroll~AbstractScroll}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>onActivate</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs~ScrollEventArgs}</td>
 *              <td>scrollbar activated</td>
 *          </tr>
 *          <tr>
 *              <td>onScroll</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs~ScrollEventArgs}</td>
 *              <td>on scroll</td>
 *          </tr>
 *          <tr>
 *              <td>onScale</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs~ScrollEventArgs}</td>
 *              <td>on scale</td>
 *          </tr>
 *          <tr>
 *              <td>onScrollEnd</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs~ScrollEventArgs}</td>
 *              <td>on scroll end</td>
 *          </tr>
 *          <tr>
 *              <td>onScaleEnd</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs~ScrollEventArgs}</td>
 *              <td>on scale end</td>
 *          </tr>
 *          <tr>
 *              <td>onRangeChanged</td>
 *              <td>{@link @int/geotoolkit/controls/tools/scroll/ScrollEventArgs~ScrollEventArgs}</td>
 *              <td>on visible range changed</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 */
export declare abstract class AbstractScroll extends Group {
    protected constructor(options?: AbstractScroll.Options);
    on<E extends keyof AbstractScroll.EventMap>(type: E, callback: (eventType: E, sender: this, args: AbstractScroll.EventMap[E]) => void): this;
    off<E extends keyof AbstractScroll.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: AbstractScroll.EventMap[E]) => void): this;
    notify<E extends keyof AbstractScroll.EventMap>(type: E, source: AbstractScroll, args?: AbstractScroll.EventMap[E]): this;
    /** */
    dispose(): void;
    /**
     * Gets the scrolls Model Limits Range
     */
    abstract getModelRange(): Range;
    /**
     * Gets the scroll visible Model Range
     */
    abstract getVisibleModelRange(): Range;
    /**
     * onMouseLeave
     * @protected
     * @param eventArgs information about event arguments
     */
    protected onMouseLeave(eventArgs: EventArgs): void;
    /**
     * onMouseDown
     * @param eventArgs information about event arguments
     */
    protected abstract onMouseDown(eventArgs: EventArgs): void;
    /**
     * onMouseMove
     * @param eventArgs information about event arguments
     */
    protected abstract onMouseMove(eventArgs: EventArgs): void;
    /**
     * onMouseWheel
     * @param eventArgs information about event arguments
     */
    protected abstract onMouseWheel(eventArgs: EventArgs): void;
    /**
     * onMouseUp
     * @param eventArgs information about event arguments
     */
    protected abstract onMouseUp(eventArgs: EventArgs): void;
    /**
     * Double click handler
     * Detects if double click happens on scrollbar and prevents propagation
     * @param eventArgs event arguments
     */
    protected onDoubleClick(eventArgs: EventArgs): void;
    /**
     * onWindowMouseMove
     * @param eventArgs information about event arguments
     */
    protected abstract onWindowMouseMove(eventArgs: EventArgs): void;
    /**
     * onWindowMouseUp
     * @param evt onWindowMouseUp event
     */
    protected onWindowMouseUp(evt: EventArgs): void;
    /**
     * Get the scroll tool
     */
    getTool(): ScrollTool;
    /**
     * @returns is active
     */
    protected isActive(): boolean;
    /**
     * @returns this
     */
    protected stop(): this;
    /**
     * @param {EventArgs} eventArgs event args
     * @returns {AbstractScroll} this
     */
    protected start(eventArgs: EventArgs): this;
    /**
     * @param targetModel target model
     * @param eventArgs event args
     * @returns model point
     */
    protected pointToModel(targetModel: Group, eventArgs: EventArgs): Point;
    /**
     * Add Listener
     * @deprecated since 4.0 use scrollBar.on() instead
     * @param event scroll event
     * @param callback function to be called
     */
    addListener(event: string, callback: Function): this;
    /**
     * Sets floating mode
     * @param floatingMode flag to set floating mode
     */
    setFloatingMode(floatingMode: boolean): this;
    /**
     * Returns floating mode
     */
    getFloatingMode(): boolean;
    /**
     * @param modelLimits model limits
     * @param [visibleLimits] visible model limits
     * @param [flipped] orientation flipped or not
     * @param [enableAnimation] show animation or not
     * @returns this
     */
    setModelLimits(modelLimits: Rect, visibleLimits?: Rect, flipped?: boolean, enableAnimation?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): AbstractScroll.OptionsOut;
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @returns this
     */
    setProperties(properties?: AbstractScroll.Options): this;
    /**
     * Set scrollbar options
     * @param options specific to the scrollbar type
     */
    setOptions(options: Record<string, any>): this;
    /**
     * Get scrollbar options
     */
    getOptions(): any;
    /**
     * Returns optimal size for scroll bar
     * @returns size
     */
    getDesiredSize(): number;
}
export declare namespace AbstractScroll {
    /**
     * options
     */
    type Options = Group.Options & {
        /**
         * background fill style
         */
        backgroundfillstyle?: FillStyle.Type;
        /**
         * flag to set floating mode
         */
        floating?: boolean;
        /**
         * alpha
         */
        transparency?: number;
        /**
         * desired size
         */
        size?: number;
    };
    type OptionsOut = Merge<Group.OptionsOut, {
        /**
         * scroll bar name
         */
        name: string;
        /**
         * background fill style
         */
        backgroundfillstyle?: FillStyle;
        /**
         * flag to set floating mode
         */
        floating: boolean;
        /**
         * alpha
         */
        transparency: number;
        /**
         * desired size
         */
        size: number;
    }>;
    type EventMap = ScrollTool.EventMap & Group.EventMap;
}
