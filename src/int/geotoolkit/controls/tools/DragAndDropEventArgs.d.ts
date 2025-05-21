import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
export declare class DragAndDropEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs info about the event arguments
     * @param elements active elements
     */
    constructor(eventArgs: EventArgs, elements: Node | Node[]);
    /**
     * Get active element
     */
    getElements(): Node[];
}
