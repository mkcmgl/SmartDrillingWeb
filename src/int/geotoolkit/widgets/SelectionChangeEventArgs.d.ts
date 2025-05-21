/**
 * @module geotoolkit/widgets/SelectionChangeEventArgs
 */
import { BaseEventArgs } from '@int/geotoolkit/controls/tools/BaseEventArgs';
/**
 * This class holds the details of a selection change event.
 * You can access the id of the selected object using this object.
 */
export declare class SelectionChangeEventArgs extends BaseEventArgs {
    /**
     * @param eventName information about the events arguments
     * @param id
     * @param [type] selection type ('line', 'fill', 'axis' or 'legend')
     */
    constructor(eventName: string, id?: string, type?: string);
    /**
     * return selected id
     */
    getId(): string | null;
    /**
     * Gets selection type
     */
    getType(): null | string;
}
