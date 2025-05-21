/**
 * @module geotoolkit/controls/tools/PolygonSelectionEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { SelectedItem } from '@int/geotoolkit/selection/SelectedItem';
export declare class PolygonSelectionEventArgs extends ProxyEventArgs {
    /**
     * Creates PolygonSelectionEventArgs
     * @param eventArgs contains info about the event
     * @param selection array of selected nodes
     * @param coordinates coordinates
     */
    constructor(eventArgs: EventArgs, selection: (Node | SelectedItem)[], coordinates: {
        x: number[];
        y: number[];
    });
    /**
     * Gets painted shape's coordinates in model coordinates
     */
    getCoordinates(): {
        x: number[];
        y: number[];
    };
    /**
     * gets array of selected nodes
     * @returns array of selected nodes
     */
    getSelection(): any[];
    /**
     * set selection
     * @param selection array of selected nodes
     */
    setSelection(selection: any[]): this;
}
