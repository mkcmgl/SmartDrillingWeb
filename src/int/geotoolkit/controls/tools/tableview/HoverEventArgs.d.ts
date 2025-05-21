/**
 * @module geotoolkit/controls/tools/tableview/HoverEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * Hover event args for table view
 */
export declare class HoverEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs info about arguments of the event
     * @param row rows
     * @param column columns
     * @param mousePosition
     */
    constructor(eventArgs: EventArgs, row: number, column: number, mousePosition: Point);
    /**
     * Return row
     */
    getRowNumber(): number;
    /**
     * Return column
     */
    getColumnNumber(): number;
    /**
     * Return mouse position in cell coordinate
     */
    getMousePosition(): Point;
}
