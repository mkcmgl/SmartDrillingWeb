/**
 * @module geotoolkit/widgets/VisibleRangeChangeEventArgs
 */
import { BaseEventArgs } from '@int/geotoolkit/controls/tools/BaseEventArgs';
import type { Range } from '@int/geotoolkit/util/Range';
/**
 * This class holds the details of a visiblerange change event.
 * <br>
 * When such events occur, one could retrieve this from the event object and fetch some information from it.For example the newly visible range.
 */
export declare class VisibleRangeChangeEventArgs extends BaseEventArgs {
    /**
     * @param eventName information about the events arguments
     * @param range visible limits
     */
    constructor(eventName: string, range: Range);
    /**
     * return visible limits
     * @returns visible limits
     */
    getVisibleRange(): Range;
}
