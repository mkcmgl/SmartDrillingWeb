import { Editor } from '@int/geotoolkit/controls/tools/html/Editor';
import type { LogAnnotation } from '@int/geotoolkit/welllog/LogAnnotation';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Plot } from '@int/geotoolkit/plot/Plot';
/**
 * Helper class to initialize LogAnnotation inline-text editor on specific plot point
 * @see {@link @int/geotoolkit/controls/tools/html/Editor~Editor}
 */
export declare class LogAnnotationEditor {
    /**
     * Helper method to initialize geometry options for Inline Editor tool
     * @see {@link @int/geotoolkit/controls/tools/html/Editor~Editor}
     * @param logAnnotation log annotation visual
     * @param plotPoint plot point
     */
    static getTextLabelGeometry(logAnnotation: LogAnnotation, plotPoint: Point): Editor.EditOptions;
    /**
     * Helper method to initialize LogAnnotation inline-text editor on specific plot point
     * @see {@link @int/geotoolkit/controls/tools/html/Editor~Editor}
     * @param logAnnotation log annotation visual
     * @param plot plot to place inline-text editor
     * @param plotPoint plot point
     */
    static editVisual(logAnnotation: LogAnnotation, plot: Plot, plotPoint: Point): Editor;
}
