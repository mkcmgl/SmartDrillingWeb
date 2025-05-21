/**
 * @module geotoolkit/welllog/widgets/TrackEventArgs
 */
import { ProxyEventArgs } from '@int/geotoolkit/controls/tools/ProxyEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { ITrack } from '@int/geotoolkit/welllog/ITrack';
/**
 * TrackEventArgs
 */
/**
 * Track Events Args containing effective track
 * @example
 * // Capture TracksSizeChanged event
 * import {log} from '@int/geotoolkit/base';
 * import {Events as WellLogEvents} from '@int/geotoolkit/welllog/widgets/Events';
 * widget.on(WellogWidgetsEvents.TracksSizeChanged, (event, sender, eventArgs) => {
 *     eventArgs.getTracks()
 *         .forEach((track: ITrack) => {
 *             log('[' + track.asNode().getName() + '] width has been changed :' + track.getBounds().getWidth());
 *         });
 * });
 */
export declare class TrackEventArgs extends ProxyEventArgs {
    /**
     * @param eventArgs info about the event arguments
     * @param track _track
     */
    constructor(tracks: ITrack[], eventArgs?: EventArgs);
    /**
     * Return effective track
     */
    getTracks(): ITrack[];
}
