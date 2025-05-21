/**
 * @module geotoolkit/controls/tools/HeatMap/Highlight
 */
import { HeatMap } from '@int/geotoolkit/controls/shapes/HeatMap';
import { LineStyle } from '@int/geotoolkit/attributes/LineStyle';
import { AbstractTool } from '@int/geotoolkit/controls/tools/AbstractTool';
import type { FillStyle } from '@int/geotoolkit/attributes/FillStyle';
import type { EventArgs } from '@int/geotoolkit/controls/tools/EventArgs';
/**
 * Tool name: 'Highlight'
 */
export declare class Highlight extends AbstractTool {
    /**
     * @param [options] current heat map shape or tool options
     */
    constructor(options?: Highlight.Options | HeatMap);
    /**
     * Highlight the cell when move the mouse
     * @param eventArgs information about event arguments
     */
    onMouseMove(eventArgs: EventArgs): void;
}
export declare namespace Highlight {
    /**
     * current heat map shape or tool options
     */
    type Options = AbstractTool.Options & {
        /**
         * current heat map shape
         */
        heatmap?: HeatMap;
        /**
         * scale handle line style
         */
        linestyle?: LineStyle | LineStyle.Options | string;
        /**
         * scale handle fill style
         */
        fillstyle?: FillStyle | FillStyle.Options | string;
    };
}
