/**
 * @module geotoolkit/controls/tools/ZoomEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { Point } from '@int/geotoolkit/util/Point';
export declare class ZoomEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs contains info about the event
     * @param [options] event options or scaling options
     */
    constructor(eventArgs: EventArgs, options?: ZoomEventArgs.Options);
    /**
     * Returns scaling options
     * @returns scaling object
     */
    getScaling(): ZoomEventArgs.Scaling;
    /**
     * Returns the visible model limits
     * @returns visible model limits
     */
    getVisibleModelLimits(): Rect | null;
}
export declare namespace ZoomEventArgs {
    /**
     * event options or scaling options
     */
    type Options = {
        /**
         * scaling options
         */
        scaling?: Scaling;
        /**
         * visible model limits
         */
        visiblemodellimits?: Rect;
    };
    type Scaling = null | {
        x: number;
        y: number;
        point: Point.Options;
    };
}
