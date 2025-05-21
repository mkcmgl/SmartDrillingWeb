/**
 * @module geotoolkit/deviation/tools/MDRubberBandEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * Tool name: 'MD-rubberband'
 */
export declare class MDRubberBandEventArgs extends ProxyEventArgs {
    constructor(eventArgs: EventArgs, options: MDRubberBandEventArgs.Options);
    /**
     * Gets start MD-value
     * @returns start MD-value
     */
    getStartMD(): number;
    /**
     * Gets end MD-value
     * @returns end MD-value
     */
    getEndMD(): number;
    /**
     * Gets selected area in parent model coordinates
     * @returns selected area
     */
    getArea(): Rect | null;
}
export declare namespace MDRubberBandEventArgs {
    type Options = {
        /**
         * selected parent model area (used with RubberBand.Events.onZoomEnd event)
         */
        area?: Rect;
        /**
         * start MD-value (used with RubberBand.Events.onZoomStart and RubberBand.Events.onRangeChanged events)
         */
        startmd?: number;
        /**
         * end MD-value (used with RubberBand.Events.onRangeChanged event)
         */
        endmd?: number;
    };
}
