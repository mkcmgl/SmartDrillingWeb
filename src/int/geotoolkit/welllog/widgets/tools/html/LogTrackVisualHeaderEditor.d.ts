import { Editor } from '@int/geotoolkit/controls/tools/html/Editor';
import type { LogTrackVisualHeader } from '@int/geotoolkit/welllog/header/LogTrackVisualHeader';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Plot } from '@int/geotoolkit/plot/Plot';
/**
 * Helper class to initialize LogTrackVisualHeader inline-text editor on specific plot point
 * @see {@link @int/geotoolkit/controls/tools/html/Editor~Editor}
 */
export declare class LogTrackVisualHeaderEditor {
    /**
     * Helper method to initialize geometry options for Inline Editor tool
     * @see {@link @int/geotoolkit/controls/tools/html/Editor~Editor}
     * @param logTrackVisualHeader log track visual header
     * @param plotPoint plot point
     */
    static getTextLabelGeometry(logTrackVisualHeader: LogTrackVisualHeader, plotPoint: Point): Editor.EditOptions;
    /**
     * Helper method to initialize LogTrackVisualHeader inline-text editor on specific plot point
     * @see {@link @int/geotoolkit/controls/tools/html/Editor~Editor}
     * @param logTrackVisualHeader log track visual header
     * @param plot plot to place inline-text editor
     * @param plotPoint plot point
     */
    static editVisual(logTrackVisualHeader: LogTrackVisualHeader, plot: Plot, plotPoint: Point): Editor;
}
