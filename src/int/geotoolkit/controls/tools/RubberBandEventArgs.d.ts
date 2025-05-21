/**
 * @module geotoolkit/controls/tools/RubberBandEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Rect } from '@int/geotoolkit/util/Rect';
export declare class RubberBandEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param area selected area in the model coordinates
     */
    constructor(eventArgs: EventArgs, area: Rect);
    /**
     * Return a selected area in the model coordinates
     */
    getArea(): Rect;
}
