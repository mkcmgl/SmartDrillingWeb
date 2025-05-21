import { Layer } from '@int/geotoolkit/scene/Layer';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { LogTrackContainer } from '@int/geotoolkit/welllog/widgets/visuals/LogTrackContainer';
import { RejectableEventArgs } from '@int/geotoolkit/controls/tools/RejectableEventArgs';
import { SplitterEventArgs } from '@int/geotoolkit/welllog/widgets/tools/SplitterEventArgs';
import type { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
/**
 * Events
 * @readonly
 * @enum
 */
export declare enum Events {
    /**
     * onContainerWidthChanged
     */
    onContainerWidthChanged = "onContainerWidthChanged",
    /**
     * onTrackWidthChanged
     */
    onTrackWidthChanged = "onTrackWidthChanged",
    /**
     * onCanResize
     */
    onCanResize = "onCanResize"
}
/**
 * Creates default implementation of the track splitter <br>
 * The tool fires the following types of event:<br>
 * (1) {@link @int/geotoolkit/welllog/widgets/tools/Splitter~Events.onCanResize} - {@link @int/geotoolkit/controls/tools/RejectableEventArgs~RejectableEventArgs} - occurs before track resize is starting.<br>
 * (2) {@link @int/geotoolkit/welllog/widgets/tools/Splitter~Events.onTrackWidthChanged} - {@link @int/geotoolkit/welllog/widgets/tools/SplitterEventArgs~SplitterEventArgs} - occurs after track resize is done.<br>
 * (3) {@link @int/geotoolkit/welllog/widgets/tools/Splitter~Events.onContainerWidthChanged} - {@link @int/geotoolkit/welllog/widgets/tools/SplitterEventArgs~SplitterEventArgs} - occurs after container resize is done.<br>
 *
 * <br>
 * <br>
 * <h5>Events</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>Splitter.Events.onCanResize</td>
 *              <td>RejectableEventArgs</td>
 *              <td>occurs before track resize is starting.</td>
 *          </tr>
 *          <tr>
 *              <td>Splitter.Events.onTrackWidthChanged</td>
 *              <td>RejectableEventArgs</td>
 *              <td> occurs after track resize is done.</td>
 *          </tr>
 *          <tr>
 *              <td>Splitter.Events.onContainerWidthChanged</td>
 *              <td>EventArgs</td>
 *              <td>occurs after container resize is done.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 *
 * Tool name: 'splitter'
 */
export declare class Splitter extends AbstractTool {
    /**
     * @param [options] layer for holding temporary shapes or properties object
     * @param [trackContainer] optional trackContainer
     */
    constructor(options?: Splitter.Options | Layer, trackContainer?: LogTrackContainer);
    on<E extends keyof Splitter.EventMap>(type: E, callback: (eventType: E, sender: this, args: Splitter.EventMap[E]) => void): this;
    off<E extends keyof Splitter.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Splitter.EventMap[E]) => void): this;
    notify<E extends keyof Splitter.EventMap>(type: E, source: Splitter, args?: Splitter.EventMap[E]): this;
    protected start(eventArgs?: ProxyEventArgs): this;
    /**
     * Return minimum width
     */
    getMinimumWidth(): number;
    /**
     * Set minimum splitter width
     * @param width minimum splitter width
     */
    setMinimumWidth(width: number): this;
    /**
     * Return maximum width
     */
    getMaximumWidth(): number;
    /**
     * Set maximum splitter width
     * @param [width] maximum splitter width
     */
    setMaximumWidth(width?: number): this;
    /**
     * Sets tool properties
     * @param [properties] properties
     */
    setProperties(properties?: Splitter.Options): this;
    /**
     * Gets tool options
     * @returns options
     */
    getProperties(): Splitter.OptionsOut;
}
export declare namespace Splitter {
    /**
     * layer for holding temporary shapes or properties object
     */
    type Options = AbstractTool.Options & {
        /**
         * optional trackContainer
         */
        trackcontainer?: LogTrackContainer;
        /**
         * minimum splitter width
         */
        minimumwidth?: number;
        /**
         * maximum splitter width
         */
        maximumwidth?: number;
    };
    /**
     * options
     */
    type OptionsOut = AbstractTool.OptionsOut & {
        /**
         * maximum width
         */
        maximumwidth: number;
        /**
         * minimum width
         */
        minimumwidth: number;
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onCanResize]: RejectableEventArgs;
        [Events.onTrackWidthChanged]: SplitterEventArgs;
        [Events.onContainerWidthChanged]: SplitterEventArgs;
    };
}
