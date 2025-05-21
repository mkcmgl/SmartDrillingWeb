import { TableView } from '@int/geotoolkit/controls/shapes/tableview/TableView';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
/**
 * Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * onMove
     */
    onMove = "onMove",
    /**
     * onScroll
     */
    onScroll = "onScroll"
}
/**
 * Defines Column manipulator for Table View shape
 *
 * Tool name: 'ColumnHandler'
 */
export declare class ColumnHandler extends AbstractTool {
    constructor(options?: ColumnHandler.Options | TableView);
    on<E extends keyof ColumnHandler.EventMap>(type: E, callback: (eventType: E, sender: this, args: ColumnHandler.EventMap[E]) => void): this;
    off<E extends keyof ColumnHandler.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: ColumnHandler.EventMap[E]) => void): this;
    notify<E extends keyof ColumnHandler.EventMap>(type: E, source: ColumnHandler, args?: ColumnHandler.EventMap[E]): this;
}
export declare namespace ColumnHandler {
    /**
     * table view shape or tool options
     */
    type Options = AbstractTool.Options & {
        /**
         * table view shape
         */
        tableview?: TableView;
    };
    type EventMap = AbstractTool.EventMap & {
        [Events.onMove]: {
            'from': number;
            'to': number;
        };
        [Events.onScroll]: void;
    };
}
