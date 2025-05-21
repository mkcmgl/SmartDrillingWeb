/**
 * @module geotoolkit/widgets/tools/DataSheetSelectionEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * DataSheetSelectionEventArgs
 */
export declare class DataSheetSelectionEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event arguments
     * @param firstCell first cell position (top left) in selection rectangle in DataSheet
     * @param lastCell last cell position (bottom right) in selection rectangle in DataSheet
     */
    constructor(eventArgs: EventArgs, firstCell: Point, lastCell: Point);
    /**
     * Get first cell position (top left) in selection rectangle in DataSheet
     * @returns First cell
     */
    getFirstCellPosition(): Point;
    /**
     * Get last cell position (bottom right) in selection rectangle in DataSheet
     * @returns Last cell
     */
    getLastCellPosition(): Point;
}
