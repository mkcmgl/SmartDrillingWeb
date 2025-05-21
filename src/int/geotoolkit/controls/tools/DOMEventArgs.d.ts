/**
 * @module geotoolkit/controls/tools/DOMEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { Node } from '@int/geotoolkit/scene/Node';
import type { Point } from '@int/geotoolkit/util/Point';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
/**
 * DOMSupport event arguments
 */
export declare class DOMEventArgs extends ProxyEventArgs {
    /**
     * @param selection array of selected nodes
     * @param point mouse position in device coordinates
     * @param [eventArgs] contains info about the event
     */
    constructor(selection: Node[], point: Point, eventArgs?: EventArgs);
    /**
     * Return mouse position in device coordinates
     */
    getMousePosition(): Point;
    /**
     * Returns array of selected nodes
     * @returns array of selected nodes
     */
    getSelection(): Node[];
}
