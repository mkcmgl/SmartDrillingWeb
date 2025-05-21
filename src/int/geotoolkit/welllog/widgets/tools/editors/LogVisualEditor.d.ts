import { BaseEditor } from '@int/geotoolkit/controls/tools/editors/BaseEditor';
import { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import type { Rect } from '@int/geotoolkit/util/Rect';
/**
 * The base class for tools to edit the {@link @int/geotoolkit/welllog/LogAbstractVisual~LogAbstractVisual}'s.
 */
export declare class LogVisualEditor extends BaseEditor {
    /**
     * Gets active track
     */
    protected getActiveTrack(): LogTrack | null;
    /**
     * Gets active track model limits
     */
    protected getTrackLimits(): Rect | null;
    /**
     * Returns model bounds for the bounding box elements
     */
    getBounds(): Rect | null;
}
