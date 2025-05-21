/**
 * @module geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs
 */
import { BaseEventArgs } from '@int/geotoolkit/controls/tools/BaseEventArgs';
import type { Rect } from '@int/geotoolkit/util/Rect';
import type { LogTrack } from '@int/geotoolkit/welllog/LogTrack';
import type { LogFrameVisual } from '@int/geotoolkit/welllog/LogFrameVisual';
/**
 * @deprecated since 4.0. Not use.
 */
export declare class LogFrameEditorEventArgs extends BaseEventArgs {
    /**
     * @param eventName name of the event
     * @param rect a new shape bounds
     * @param track track
     * @param shape shape
     * @param [previousRect] a previous bounds
     */
    constructor(eventName: string, rect: Rect, track: LogTrack, shape: LogFrameVisual | null, previousRect?: Rect);
    /**
     * Define new area of the shape
     * @name module:geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs~LogFrameEditorEventArgs#rect
     */
    get rect(): Rect;
    /**
     * Define new area of the shape
     * @name module:geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs~LogFrameEditorEventArgs#rect
     */
    set rect(value: Rect);
    /**
     * Define previous area of the shape
     * @name module:geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs~LogFrameEditorEventArgs#previousRect
     */
    get previousRect(): Rect;
    /**
     * Define previous area of the shape
     * @name module:geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs~LogFrameEditorEventArgs#previousRect
     */
    set previousRect(value: Rect);
    /**
     * Define a current track
     * @name module:geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs~LogFrameEditorEventArgs#track
     */
    get track(): LogTrack;
    /**
     * Define a current frame
     * @name module:geotoolkit/welllog/widgets/tools/LogFrameEditorEventArgs~LogFrameEditorEventArgs#shape
     */
    get shape(): LogFrameVisual | null;
}
