import { TableView } from '@int/geotoolkit/controls/shapes/tableview/TableView';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import { Dimension } from '@int/geotoolkit/util/Dimension';
import { Group } from '@int/geotoolkit/scene/Group';
/**
 * Events
 * @enum
 * @readonly
 */
export declare enum Events {
    /**
     * onHeaderHover
     */
    onHeaderHover = "onHeaderHover",
    /**
     * onButtonHover
     */
    onButtonHover = "onButtonHover",
    /**
     * onClick
     */
    onClick = "onClick"
}
/**
 * Defines Column manipulator for Table View shape
 *
 * Tool name: 'HeaderHandler'
 */
export declare class HeaderHandler extends AbstractTool {
    /**
     * @param [options] table view shape or tool options
     */
    constructor(options?: HeaderHandler.Options | TableView);
    on<E extends keyof HeaderHandler.EventMap>(type: E, callback: (eventType: E, sender: this, args: HeaderHandler.EventMap[E]) => void): this;
    off<E extends keyof HeaderHandler.EventMap>(type?: E, callback?: (eventType: E, sender: this, args: HeaderHandler.EventMap[E]) => void): this;
    notify<E extends keyof HeaderHandler.EventMap>(type: E, source: HeaderHandler, args?: HeaderHandler.EventMap[E]): this;
    /**
     * Specify handle size
     * @param size new size
     * @returns this
     */
    setSize(size: Dimension): this;
    /**
     * Returns handle size
     */
    getSize(): Dimension;
    /**
     * Specify handle margin from top right corner
     * @param margin new margin
     */
    setMargin(margin: Dimension): this;
    /**
     * Returns handle margin
     * @returns margin
     */
    getMargin(): Dimension;
}
export declare namespace HeaderHandler {
    /**
     * table view shape or tool options
     */
    export type Options = AbstractTool.Options & {
        /**
         * table view shape
         */
        tableview?: TableView;
    };
    export type EventMap = AbstractTool.EventMap & {
        [Events.onHeaderHover]: EventArgs;
        [Events.onButtonHover]: EventArgs;
        [Events.onClick]: EventArgs;
    };
    type EventArgs = {
        'column': number;
        'button': Group;
    };
    export {};
}
