import { Editor } from '@int/geotoolkit/controls/tools/html/Editor';
import type { LogLithology } from '@int/geotoolkit/welllog/LogLithology';
import type { Point } from '@int/geotoolkit/util/Point';
import type { Plot } from '@int/geotoolkit/plot/Plot';
/**
 * Helper class to initialize LogLithology inline-text editor on specific plot point
 * @see {@link @int/geotoolkit/controls/tools/html/Editor~Editor}
 */
export declare class LogLithologyEditor {
    /**
     * Helper method to initialize geometry options for Inline Editor tool
     * @see {@link @int/geotoolkit/controls/tools/html/Editor~Editor}
     * @param logLithology log lithology visual
     * @param plotPoint plot point
     */
    static getTextLabelGeometry(logLithology: LogLithology, plotPoint: Point): LogLithologyEditor.EditOptions;
    /**
     * Helper method to initialize LogLithology inline-text editor on specific plot point
     * @see {@link @int/geotoolkit/controls/tools/html/Editor~Editor}
     * @param logLithology log lithology visual
     * @param plot plot to place inline-text editor
     * @param plotPoint plot point
     */
    static editVisual(logLithology: LogLithology, plot: Plot, plotPoint: Point): Editor;
}
export declare namespace LogLithologyEditor {
    /**
     * Geometry and style options for text editor element
     */
    type EditOptions = Editor.EditOptions & {
        /**
         * Section index
         */
        index: number;
    };
}
