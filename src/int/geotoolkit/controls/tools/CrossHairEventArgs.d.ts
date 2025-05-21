import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * CrossHairEventArgs
 */
export declare class CrossHairEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info of the event
     * @param position mouse position
     */
    constructor(eventArgs: EventArgs, position: Point);
    /**
     * returns cursor position
     * @returns position
     */
    getPosition(): Point;
}
