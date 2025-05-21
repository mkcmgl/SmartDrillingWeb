/**
 * @module geotoolkit/controls/tools/SelectionEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { SelectionMode } from '@int/geotoolkit/controls/tools/SelectionMode';
import type { SelectedItem } from '@int/geotoolkit/selection/SelectedItem';
/**
 * SelectionEventArgs
 */
export declare class SelectionEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event arguments
     * @param selection array of selected nodes
     * @param selectionMode
     */
    constructor(eventArgs: EventArgs, selection: (Node | SelectedItem)[], selectionMode: SelectionMode | string);
    /**
     * returns selection mode
     * @returns selection mode
     */
    getSelectionMode(): SelectionMode | string;
    /**
     * returns array of selected nodes
     * @returns array of selected nodes
     */
    getSelection(): (Node | SelectedItem)[];
    /**
     * set array of selected nodes
     * @param selection array of selected nodes
     * @returns this
     */
    setSelection(selection: (Node | SelectedItem)[]): this;
}
