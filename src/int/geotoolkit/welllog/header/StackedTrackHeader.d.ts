import { LogTrackHeader } from '@int/geotoolkit/welllog/header/LogTrackHeader';
import { StackedTrack } from '@int/geotoolkit/welllog/StackedTrack';
import type { LogVisualHeaderProvider } from '@int/geotoolkit/welllog/header/LogVisualHeaderProvider';
import type { TrackFactory } from '@int/geotoolkit/welllog/TrackFactory';
/**
 * Define header for  StackedTrack
 */
export declare class StackedTrackHeader extends LogTrackHeader {
    /**
     * @param track a log track to create header or properties object
     * @param provider provider of the headers
     * @param trackFactory the factory that is used to create headers
     */
    constructor(track: LogTrackHeader.Options | StackedTrack | null, provider: LogVisualHeaderProvider | null, trackFactory: TrackFactory);
}
