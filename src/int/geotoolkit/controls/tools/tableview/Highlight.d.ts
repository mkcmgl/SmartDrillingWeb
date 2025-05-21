import { TableView } from '@int/geotoolkit/controls/shapes/tableview/TableView';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { HoverEventArgs } from '@int/geotoolkit/controls/tools/tableview/HoverEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
/**
 * Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * onHover
     */
    onHover = "onHover"
}
/**
 * Defines Highlight tool for Table View shape
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
 *              <td>Highlight.Events.onHover</td>
 *              <td>geotoolkit.controls.tools.tableview.HoverEventArgs</td>
 *              <td>This Event is fired when the Pointer is hover an table element.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 *
 * Tool name: 'Highlight'
 */
export declare class Highlight extends AbstractTool {
    /**
     * @param [options] current Table View Shape or tool options
     */
    constructor(options?: Highlight.Options | TableView);
    on<E extends keyof Highlight.EventMap>(type: E, callback: (eventType: E, sender: this, args: Highlight.EventMap[E]) => void): this;
    off<E extends keyof Highlight.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: Highlight.EventMap[E]) => void): this;
    notify<E extends keyof Highlight.EventMap>(type: E, source: Highlight, args?: Highlight.EventMap[E]): this;
    /**
     * Fires onHover events
     *
     * @param eventArgs information about event arguments
     */
    onMouseMove(eventArgs: EventArgs): void;
}
export declare namespace Highlight {
    /**
     * current Table View Shape or tool options
     */
    type Options = AbstractTool.Options & {
        /**
         * table view shape
         */
        tableview?: TableView;
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onHover]: HoverEventArgs;
    };
}
