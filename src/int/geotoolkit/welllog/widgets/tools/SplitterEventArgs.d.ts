/**
 * @module geotoolkit/welllog/widgets/tools/SplitterEventArgs
 */
import { RejectableEventArgs } from '@int/geotoolkit/controls/tools/RejectableEventArgs';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
import type { ITrack } from '@int/geotoolkit/welllog/ITrack';
/**
 * SplitterEventArgs
 */
export declare class SplitterEventArgs extends RejectableEventArgs {
    /**
     * @param eventArgs info about the event arguments
     * @param delta delta
     * @param tracks tracks
     */
    constructor(eventArgs: EventArgs, delta: number, tracks?: ITrack[]);
    /**
     * Return effective delta
     */
    getDelta(): number;
    /**
     * Return effective tracks
     */
    getTracks(): ITrack[];
}
