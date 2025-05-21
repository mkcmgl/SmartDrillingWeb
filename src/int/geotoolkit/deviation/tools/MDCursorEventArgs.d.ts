import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Point } from '@int/geotoolkit/util/Point';
/**
 * MDCursorEventArgs
 */
export declare class MDCursorEventArgs extends ProxyEventArgs {
    constructor(eventArgs: EventArgs, position?: Point);
    /**
     * Gets inner model position
     * @returns inner model position ("x" - value, "y" - measured depth)
     */
    getPosition(): Point | null;
}
