import { TableView } from '@int/geotoolkit/controls/shapes/tableview/TableView';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
/**
 * Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * onHover
     */
    onHover = "onHover",
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
 * Defines Row manipulator for Table View shape
 *
 * Tool name: 'RowHandler'
 */
export declare class RowHandler extends AbstractTool {
    /**
     * @param [options] table view shape or tool options
     */
    constructor(options?: RowHandler.Options | TableView);
    on<E extends keyof RowHandler.EventMap>(type: E, callback: (eventType: E, sender: this, args: RowHandler.EventMap[E]) => void): this;
    off<E extends keyof RowHandler.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: RowHandler.EventMap[E]) => void): this;
    notify<E extends keyof RowHandler.EventMap>(type: E, source: RowHandler, args?: RowHandler.EventMap[E]): this;
}
export declare namespace RowHandler {
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
            from: number;
            to: number;
        };
        [Events.onScroll]: void;
    };
}
