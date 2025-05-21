/**
 * @module geotoolkit/controls/tools/scroll/ScrollEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * ScrollEventArgs
 */
export declare class ScrollEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs info about event arguments
     * @param modelLimits visible model limits
     */
    constructor(eventArgs: EventArgs, modelLimits: Rect);
    /**
     * Return visibles limits
     */
    getVisibleModelLimits(): Rect;
}
